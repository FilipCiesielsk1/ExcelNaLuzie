import test from 'node:test';
import assert from 'node:assert/strict';
import {prepareTable,parseDelimited} from '../src/utils/tableCompare.js';
import {buildPivot,getPivotFilterValues,getPivotWorkbook,parsePivotNumber,MAX_PIVOT_COLUMNS} from '../src/utils/pivotBuilder.js';

const t=s=>prepareTable(parseDelimited(s));
const source=t(
 'Region\tHandlowiec\tKategoria\tKwota\tStatus\n'+
 'Północ\tAnna\tA\t10,50\tOpłacone\n'+
 'Północ\tOla\tA\t20,00\tNowe\n'+
 'Południe\tAnna\tB\t12,50\tOpłacone\n'+
 'Południe\tAnna\tA\t7,00\tOpłacone\n'+
 'Zachód\tPiotr\tB\t5,00\tNowe'
);
const basic={rowFields:['Region'],columnField:'Kategoria',valueField:'Kwota',aggregation:'sum'};

test('Polskie liczby z przecinkiem, spacjami i znakiem minus',()=>{
  assert.equal(parsePivotNumber('1 234,50'),1234.5);
  assert.equal(parsePivotNumber('1\u00a0234,50'),1234.5);
  assert.equal(parsePivotNumber('-21,25'),-21.25);
  assert.equal(parsePivotNumber('0'),0);
  assert.equal(parsePivotNumber('1,234.50'),1234.5);
  assert.equal(parsePivotNumber('1.234,50'),1234.5);
  assert.equal(parsePivotNumber('nie liczba'),null);
  assert.equal(parsePivotNumber(''),null);
});

test('Macierz sum z dwiema kategoriami i poprawnym wynikiem ogółem',()=>{
  const p=buildPivot(source,basic);
  assert.deepEqual(p.columnValues,['A','B']);
  assert.equal(p.grandTotal,55);
  assert.deepEqual(p.grandValues,[37.5,17.5]);
  assert.deepEqual(p.rows.map(r=>r.labels[0]),['Południe','Północ','Zachód']);
  assert.equal(p.rows.find(r=>r.labels[0]==='Północ').total,30.5);
  assert.deepEqual(p.rows.find(r=>r.labels[0]==='Północ').values,[30.5,null]);
  assert.equal(p.totalRows,5);
});

test('Średnia ogółem liczona z rekordów, a nie średnich regionów',()=>{
  const p=buildPivot(source,{...basic,aggregation:'avg'});
  assert.equal(p.grandTotal,11);
  assert.equal(p.rows.find(r=>r.labels[0]==='Północ').total,15.25);
  assert.equal(p.grandValues[0],12.5);
  assert.equal(p.grandValues[1],8.75);
});

test('Minimum i maksimum z wartości źródłowych oraz w sumach ogólnych',()=>{
  const min=buildPivot(source,{...basic,aggregation:'min'});
  const max=buildPivot(source,{...basic,aggregation:'max'});
  assert.equal(min.grandTotal,5);
  assert.equal(max.grandTotal,20);
  assert.equal(min.rows.find(r=>r.labels[0]==='Północ').total,10.5);
  assert.equal(max.rows.find(r=>r.labels[0]==='Północ').total,20);
});

test('Licznik niepustych i wiersze bez pola kolumn',()=>{
  const p=buildPivot(source,{rowFields:['Kategoria'],valueField:'Status',aggregation:'count'});
  assert.equal(p.includeRowTotal,false);
  assert.equal(p.headers.length,2);
  assert.deepEqual(p.rows.map(r=>r.total),[3,2]);
  assert.equal(p.grandTotal,5);
});

test('Dwupoziomowe wiersze są grupowane po dwóch polach',()=>{
  const p=buildPivot(source,{rowFields:['Region','Handlowiec'],valueField:'Kwota',aggregation:'sum'});
  assert.equal(p.rows.length,4);
  assert.equal(p.rows.find(r=>r.labels.join('/')==='Południe/Anna').total,19.5);
  assert.equal(p.headers.length,3);
});

test('Filtr zmienia wynik i zachowuje tylko wybrane rekordy w eksporcie',()=>{
  const p=buildPivot(source,{...basic,filterField:'Status',filterValue:'Opłacone'});
  assert.equal(p.totalRows,3);
  assert.equal(p.grandTotal,30);
  assert.equal(p.selectedRows.length,3);
  assert.deepEqual(getPivotFilterValues(source,'Status'),['Nowe','Opłacone']);
});

test('Brak liczb jest zgłaszany i nie udaje zera',()=>{
  const x=t('Typ\tWartość\nA\ttekst\nB\t');
  assert.throws(()=>buildPivot(x,{rowFields:['Typ'],valueField:'Wartość',aggregation:'sum'}),/liczb/);
  const p=buildPivot(x,{rowFields:['Typ'],valueField:'Wartość',aggregation:'count'});
  assert.equal(p.grandTotal,1);
});

test('Niepoprawne kwoty są pomijane, ale sygnalizowane w ostrzeżeniu',()=>{
  const x=t('Typ\tKwota\nA\t10,2\nA\tbrak\nB\t15');
  const p=buildPivot(x,{rowFields:['Typ'],valueField:'Kwota',aggregation:'sum'});
  assert.equal(p.skippedNumbers,1);
  assert.equal(p.grandTotal,25.2);
});

test('Rozdzielne tuple zapobiegają kolizjom kluczy z separatorami',()=>{
  const x=t('A\tB\tKwota\nx | y\tz\t10\nx\ty | z\t20');
  const p=buildPivot(x,{rowFields:['A','B'],valueField:'Kwota',aggregation:'sum'});
  assert.equal(p.rows.length,2);
  assert.equal(p.grandTotal,30);
});

test('Odrzucanie zduplikowanych i nachodzących na siebie pól',()=>{
  assert.throws(()=>buildPivot(source,{rowFields:['Region','Region'],valueField:'Kwota'}),/dwa razy/);
  assert.throws(()=>buildPivot(source,{rowFields:['Region'],columnField:'Region',valueField:'Kwota'}),/różne/);
  assert.throws(()=>buildPivot(source,{rowFields:['Region'],valueField:'Region'}),/różne/);
  assert.throws(()=>buildPivot(source,{rowFields:['Region'],valueField:'Nie ma'}),/Nie znaleziono/);
});

test('Limit kolumn chroni przed zbyt dużą macierzą',()=>{
  const csv='Region\tKategoria\tKwota\n'+Array.from({length:MAX_PIVOT_COLUMNS+1},(_,i)=>'R\t'+i+'\t1').join('\n');
  assert.throws(()=>buildPivot(t(csv),basic),/Za dużo kategorii kolumn/);
});

test('Instrukcja eksportu wskazuje właściwe pola',()=>{
  const r=buildPivot(source,{...basic,filterField:'Status',filterValue:'Opłacone'});
  const wb=getPivotWorkbook(source,r);
  assert.deepEqual(wb.map(x=>x.sheet),['Podsumowanie','Dane','Instrukcja']);
  assert.equal(wb[1].data.length,4);
  assert.ok(wb[2].data.some(row=>row[0].value==='Wiersze' && row[1].value==='Region'));
  assert.ok(wb[2].data.some(row=>row[0].value==='Kolumny' && row[1].value==='Kategoria'));
  assert.equal(wb[0].data[wb[0].data.length-1].at(-1).value,30);
});

test('Eksport zapisuje wartości wynikowe jako liczby i tekst źródłowy bez formuł',()=>{
  const x=t('Region\tKwota\tOpis\nA\t123,50\t=CMD("nie wykonuj")');
  const result=buildPivot(x,{rowFields:['Region'],valueField:'Kwota'});
  const wb=getPivotWorkbook(x,result);
  assert.equal(wb[0].data[1][1].value,123.5);
  assert.equal(wb[0].data[1][1].type,Number);
  assert.equal(wb[1].data[1][1].value,123.5);
  assert.equal(wb[1].data[1][2].value,'=CMD("nie wykonuj")');
  assert.equal(wb[1].data[1][2].type,String);
});

test('Pełny XLSX da się wygenerować i ponownie odczytać jako 3 arkusze',async()=>{
  const {default:writeExcelFile}=await import('write-excel-file/node');
  const {default:readExcelFile}=await import('read-excel-file/node');
  const pivot=buildPivot(source,basic);
  const buffer=await writeExcelFile(getPivotWorkbook(source,pivot)).toBuffer();
  assert.equal(buffer[0],0x50);
  assert.equal(buffer[1],0x4b);
  const sheets=await readExcelFile(buffer);
  assert.deepEqual(sheets.map(s=>s.sheet),['Podsumowanie','Dane','Instrukcja']);
  assert.equal(sheets[0].data[0].at(-1),'Wynik ogółem');
  assert.equal(sheets[0].data.at(-1).at(-1),55);
  assert.equal(sheets[1].data.length,6);
});
