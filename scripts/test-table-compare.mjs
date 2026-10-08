import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseDelimited, prepareTable, compareTables, exportComparisonCsv, buildComparisonWorkbook, MAX_ROWS
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
    {column:'Kwota',leftColumn:'Kwota',rightColumn:'Kwota',before:'250',after:'270'},
    {column:'Status',leftColumn:'Status',rightColumn:'Status',before:'Nowe',after:'Opłacone'}
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
  assert.match(csv,/Uwagi: =SUMA\(1;2\)/);
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

test('niebezpieczne wartości na początku osobnych pól CSV są neutralizowane',()=>{
  const left=t('ID\\tWartość\\n=2+3\\t10'.replaceAll('\\t','\t').replaceAll('\\n','\n'));
  const right=t('ID\\tWartość\\nInny\\t10'.replaceAll('\\t','\t').replaceAll('\\n','\n'));
  const report=exportComparisonCsv(compare(left,right));
  assert.match(report, /"'=2\+3"/);
});


test('klucz złożony z dwóch kolumn rozróżnia wiele pozycji zamówienia',()=>{
  const x=t('Zamówienie\tPozycja\tCena\nA\t1\t10\nA\t2\t20\nB\t1\t12');
  const y=t('Zamówienie\tPozycja\tCena\nA\t1\t10\nA\t2\t25\nB\t1\t12');
  const r=compareTables(x,y,{leftKeys:['Zamówienie','Pozycja'],rightKeys:['Zamówienie','Pozycja']});
  assert.equal(r.summary.duplicateLeft,0);
  assert.equal(r.summary.changed,1);
  assert.equal(r.summary.unchanged,2);
  assert.equal(r.changed[0].key,'A | 2');
});

test('pary kluczy mogą mieć inne nagłówki i kolejność w tabelach',()=>{
  const x=t('Zamówienie\tPozycja\tOpis\nA\t1\tMleko\nA\t2\tKawa');
  const y=t('Lp\tOpis\tNr zamówienia\n2\tKawa\tA\n1\tMleko\tA');
  const r=compareTables(x,y,{leftKeys:['Zamówienie','Pozycja'],rightKeys:['Nr zamówienia','Lp']});
  assert.equal(r.summary.unchanged,2);
  assert.equal(r.summary.onlyLeft,0);
});

test('kompozytowe klucze bez kolizji nawet z separatorami',()=>{
  const x=t('A\tB\tCena\nx | y\tz\t1\nx\ty | z\t2');
  const y=t('A\tB\tCena\nx\ty | z\t2\nx | y\tz\t1');
  const r=compareTables(x,y,{leftKeys:['A','B'],rightKeys:['A','B']});
  assert.equal(r.summary.unchanged,2);
});

test('brak jednej składowej klucza jest raportowany jako pusty identyfikator',()=>{
  const x=t('Nr\tPoz\tCena\nA\t\t1\nA\t2\t3');
  const y=t('Nr\tPoz\tCena\nA\t2\t3');
  const r=compareTables(x,y,{leftKeys:['Nr','Poz'],rightKeys:['Nr','Poz']});
  assert.equal(r.summary.emptyLeft,1);
  assert.equal(r.summary.unchanged,1);
});

test('mapowanie kolumn różnie nazwanych wykrywa różnicę',()=>{
  const x=t('ID\tCena netto\tOpis\n1\t100\tProdukt');
  const y=t('Kod\tNettopreis\tOpis\n1\t120\tProdukt');
  const r=compareTables(x,y,{
    leftKey:'ID',rightKey:'Kod',
    columnMappings:[{left:'Cena netto',right:'Nettopreis'},{left:'Opis',right:'Opis'}]
  });
  assert.equal(r.summary.changed,1);
  assert.equal(r.changed[0].differences[0].column,'Cena netto → Nettopreis');
  assert.equal(r.changed[0].differences[0].before,'100');
  assert.equal(r.changed[0].differences[0].after,'120');
  assert.deepEqual(r.onlyLeftColumns,[]);
  assert.deepEqual(r.onlyRightColumns,[]);
});

test('pominięte mapowanie usuwa kolumnę z porównania',()=>{
  const x=t('ID\tKwota\tKomentarz\n1\t100\tA');
  const y=t('ID\tKwota\tKomentarz\n1\t100\tB');
  const r=compareTables(x,y,{
    leftKey:'ID',rightKey:'ID',
    columnMappings:[{left:'Kwota',right:'Kwota'}]
  });
  assert.equal(r.summary.unchanged,1);
  assert.deepEqual(r.onlyLeftColumns,['Komentarz']);
});

test('mapowanie odrzuca dwukrotne użycie kolumny B oraz kluczy',()=>{
  const x=t('ID\tKwota\tOpis\n1\t2\t3');
  const y=t('ID\tWartość\tUwagi\n1\t2\t3');
  const base={leftKey:'ID',rightKey:'ID'};
  assert.throws(()=>compareTables(x,y,{...base,columnMappings:[{left:'Kwota',right:'Wartość'},{left:'Opis',right:'Wartość'}]}),/tylko raz/);
  assert.throws(()=>compareTables(x,y,{...base,columnMappings:[{left:'ID',right:'Uwagi'}]}),/identyfikatora/);
});

test('powtórzona kolumna klucza i błędne liczby składowych są blokowane',()=>{
  assert.throws(()=>compareTables(a,b,{leftKeys:['ID','ID'],rightKeys:['ID','Klient']}),/dwa razy/);
  assert.throws(()=>compareTables(a,b,{leftKeys:['ID','Klient'],rightKeys:['ID']}),/takiej samej liczby/);
});

test('raport XLSX ma 7 arkuszy i zawiera wszystkie wartości z porównania',()=>{
  const r=compare();
  const sheets=buildComparisonWorkbook(r);
  assert.deepEqual(sheets.map(sheet=>sheet.sheet),[
    'Podsumowanie','Zmiany','Tylko w A','Tylko w B','Duplikaty','Puste klucze A','Puste klucze B'
  ]);
  const changes=sheets[1].data.map(row=>row.map(x=>x.value));
  assert.ok(changes.some(row=>row.includes('Piotr')===false && row.includes('270')));
  const missing=sheets[2].data.map(row=>row.map(x=>x.value));
  assert.ok(missing.some(row=>row.includes('Ola')));
  for(const sheet of sheets)assert.equal(sheet.stickyRowsCount,1);
});

test('XLSX jest prawdziwym plikiem ZIP z poprawnymi arkuszami',async()=>{
  const {default:writeExcelFile}=await import('write-excel-file/node');
  const {default:readExcelFile}=await import('read-excel-file/node');
  const left=t('ID\tWartość\n=SUMA(1;2)\t+CMD\nK\t0');
  const right=t('ID\tWartość\nK\t1');
  const workbook=buildComparisonWorkbook(compare(left,right));
  const binary=await writeExcelFile(workbook).toBuffer();
  assert.equal(binary[0],0x50);
  assert.equal(binary[1],0x4b);
  const loaded=await readExcelFile(binary);
  assert.equal(loaded.length,7);
  assert.equal(loaded[0].sheet,'Podsumowanie');
  assert.equal(loaded[2].sheet,'Tylko w A');
  assert.equal(loaded[2].data[1][0],'=SUMA(1;2)');
  assert.equal(loaded[2].data[1][loaded[2].data[0].indexOf('Wartość')],'+CMD');
});
