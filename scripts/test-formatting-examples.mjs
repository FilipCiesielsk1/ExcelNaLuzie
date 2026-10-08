import test from 'node:test';
import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import readXlsxFile from 'read-excel-file/node';

const base='public/downloads/przyklady/';
const cases=[
  ['formatowanie-warunkowe-przyklady.xlsx',['Instrukcja','Zadania','Sprzedaż']],
  ['formatowanie-liczb-dat-przyklady.xlsx',['Instrukcja','Liczby','Czas','Daty']]
];

test('XLSX formatting examples are valid and have expected sheets',async()=>{
  for(const [filename,expected] of cases){
    const full=base+filename;
    const info=await stat(full);
    assert.ok(info.size>1000,filename+' too small');
    const sheets=await readXlsxFile(full);
    assert.deepEqual(sheets.map(sheet=>sheet.sheet),expected);
    for(const sheet of sheets)assert.ok(sheet.data.length>=3,sheet.sheet+' missing data');
  }
});

test('Conditional formatting workbook contains real exercise data',async()=>{
  const sheets=await readXlsxFile(base+cases[0][0]);
  const task=sheets.find(x=>x.sheet==='Zadania');
  const sales=sheets.find(x=>x.sheet==='Sprzedaż');
  assert.equal(task.data[0][0],'Zadanie');
  assert.ok(task.data.some(row=>row.includes('W toku')));
  assert.ok(task.data.some(row=>row.includes('Gotowe')));
  assert.ok(sales.data.some(row=>row.some(v=>v===3690)));
});

test('Custom-format workbook includes numeric and time examples',async()=>{
  const sheets=await readXlsxFile(base+cases[1][0]);
  const numbers=sheets.find(x=>x.sheet==='Liczby');
  const time=sheets.find(x=>x.sheet==='Czas');
  assert.equal(numbers.data[1][1],0);
  assert.ok(time.data.length>=4);
});
