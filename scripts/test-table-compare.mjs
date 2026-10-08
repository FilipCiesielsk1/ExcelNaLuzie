import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseDelimited, prepareTable, compareTables, exportComparisonCsv, MAX_ROWS
} from '../src/utils/tableCompare.js';

const t=(text)=>prepareTable(parseDelimited(text));
const a=t('ID\tKlient\tKwota\tStatus\n1001\tAnna\t120\tNowe\n1002\tPiotr\t250\tNowe\n1003\tOla\t180\tNowe');
const b=t('ID\tKlient\tKwota\tStatus\n1001\tAnna\t120\tNowe\n1002\tPiotr\t270\tOpłacone\n1004\tEwa\t190\tNowe');
const compare=(x=a,y=b,options={})=>compareTables(x,y,{leftKey:'ID',rightKey:'ID',...options});

test('TSV wklejony z Excela: parsowanie nagłówków i liczby wierszy',()=>{
  assert.deepEqual(a.headers,['ID','Klient','Kwota','Status']);
  assert.equal(a.rows.length,3);
  assert.equal(a.rows[1].rowNumber,3);
});

test('CSV z polskim separatorem i cudzysłowami',()=>{
  const rows=parseDelimited('ID;Opis;Kwota\r\n1;"Mleko; 1 litr";12,50\r\n2;"Wpis ""cytat""";5');
  assert.deepEqual(rows,[['ID','Opis','Kwota'],['1','Mleko; 1 litr','12,50'],['2','Wpis "cytat"','5']]);
});

test('CSV z przecinkami oraz wieloma wierszami w cytowanej komórce',()=>{
  const matrix=parseDelimited('id,note\n1,"jeden,dwa"\n2,"pierwsza\nlinia"');
  assert.equal(matrix[1][1],'jeden,dwa');
  assert.equal(matrix[2][1],'pierwsza\nlinia');
});

test('prawidłowa liczba zmian i brakujących rekordów niezależnie od kolejności',()=>{
  const r=compare();
  assert.deepEqual(
    [r.summary.unchanged,r.summary.changed,r.summary.onlyLeft,r.summary.onlyRight],
    [1,1,1,1]
  );
  assert.deepEqual(r.changed[0].differences,[
    {column:'Kwota',before:'250',after:'270'},
    {column:'Status',before:'Nowe',after:'Opłacone'}
  ]);
});

test('nagłówki mogą wystąpić w dowolnej kolejności',()=>{
  const shifted=t('Status\tKwota\tID\tKlient\nOpłacone\t270\t1002\tPiotr\nNowe\t120\t1001\tAnna\nNowe\t190\t1004\tEwa');
  assert.equal(compare(a,shifted).summary.changed,1);
  assert.equal(compare(a,shifted).summary.unchanged,1);
});

test('różne nazwy klucza po dwóch stronach są obsługiwane',()=>{
  const changed=t('Kod\tKlient\tKwota\tStatus\n1001\tAnna\t120\tNowe\n1002\tPiotr\t270\tOpłacone');
  const r=compareTables(a,changed,{leftKey:'ID',rightKey:'Kod'});
  assert.equal(r.summary.changed,1);
  assert.equal(r.summary.onlyLeft,1);
  assert.equal(r.onlyLeftColumns.length,0);
});

test('zduplikowane klucze są oznaczane i wyłączone ze zmian oraz braków',()=>{
  const repeated=t('ID\tKwota\n7\t10\n7\t20\n8\t30');
  const right=t('ID\tKwota\n7\t99\n8\t31');
  const r=compare(repeated,right);
  assert.equal(r.summary.duplicateLeft,2);
  assert.equal(r.summary.ambiguousKeys,1);
  assert.equal(r.summary.changed,1);
  assert.equal(r.summary.onlyLeft,0);
  assert.equal(r.summary.onlyRight,0);
  assert.deepEqual(r.duplicatesLeft[0].rows,[2,3]);
});

test('puste identyfikatory są odseparowane od brakujących',()=>{
  const left=t('ID\tKwota\n\t10\nA\t12');
  const right=t('ID\tKwota\nA\t12\nB\t20');
  const r=compare(left,right);
  assert.equal(r.summary.emptyLeft,1);
  assert.equal(r.summary.onlyRight,1);
  assert.equal(r.summary.onlyLeft,0);
});

test('opcje ignorowania wielkości liter i spacji działają niezależnie',()=>{
  const left=t('ID\tNazwa\na1\t Produkt');
  const right=t('ID\tNazwa\nA1\tprodukt ');
  assert.equal(compare(left,right).summary.onlyLeft,1);
  assert.equal(compare(left,right,{ignoreCase:true}).summary.changed,1);
  assert.equal(compare(left,right,{ignoreCase:true,trimValues:true}).summary.unchanged,1);
});

test('kolumny brakujące w jednym pliku nie powodują fałszywych zmian',()=>{
  const left=t('ID\tNazwa\tCena\nA\tJan\t10');
  const right=t('ID\tNazwa\tDział\nA\tJan\tIT');
  const r=compare(left,right);
  assert.deepEqual(r.onlyLeftColumns,['Cena']);
  assert.deepEqual(r.onlyRightColumns,['Dział']);
  assert.equal(r.summary.unchanged,1);
});

test('nagłówki muszą być unikalne i niepuste',()=>{
  assert.throws(()=>t('ID\tid\nA\tB'),/unikalne/);
  assert.throws(()=>t('ID\t \nA\tB'),/nagłówek/);
});

test('CSV raport zawiera kompletne dane brakujących rekordów i neutralizuje formuły',()=>{
  const left=t('ID\tUwagi\n1\t=SUMA(1;2)\n2\tOk');
  const right=t('ID\tUwagi\n2\tNowe\n3\t+CMD');
  const csv=exportComparisonCsv(compare(left,right));
  assert.match(csv,/Tylko w A/);
  assert.match(csv,/Uwagi: '=SUMA\(1;2\)/);
  assert.match(csv,/Tylko w B/);
  assert.match(csv,/Uwagi: \+CMD/);
  assert.match(csv,/^\uFEFF/);
});

test('ograniczenie liczby wierszy jest aktywne',()=>{
  const input='ID\tValue\n'+Array.from({length:MAX_ROWS+1},(_,i)=>i+'\tv').join('\n');
  assert.throws(()=>prepareTable(parseDelimited(input)),/limit/i);
});

test('obsługa dat i wartości logicznych odczytanych z pliku XLSX',()=>{
  const t=prepareTable([['ID','Data','Aktywny'],[1,new Date('2026-10-08T00:00:00Z'),true]]);
  assert.deepEqual(t.rows[0].cells,['1','2026-10-08','PRAWDA']);
});
