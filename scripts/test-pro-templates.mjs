import test from 'node:test';
import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import readXlsxFile from 'read-excel-file/node';

const templates=[
 ['dashboard-sprzedazy',['Dashboard','Sprzedaż','Cele','Instrukcja']],
 ['harmonogram-gantta',['Dashboard','Harmonogram','Zespół','Instrukcja']],
 ['magazyn-stany',['Dashboard','Produkty','Ruchy','Instrukcja']],
 ['kontrola-faktur',['Dashboard','Faktury','Kontrahenci','Instrukcja']],
 ['crm-sprzedaz',['Dashboard','Szanse','Kontakty','Instrukcja']],
 ['kalkulator-ofert',['Dashboard','Kalkulator','Cennik','Instrukcja']]
];
const xml=(file,sheetIndex)=>execFileSync('unzip',['-p',file,'xl/worksheets/sheet'+sheetIndex+'.xml'],{encoding:'utf8',maxBuffer:5_000_000});
for(const [slug,expectedSheets] of templates){
 test('PRO XLSX: '+slug+' has meaningful data, formulas, validation and no corruption',async()=>{
  const file='public/downloads/szablony/'+slug+'.xlsx';
  const meta=await stat(file);
  assert.ok(meta.size>4500,'file too small');
  execFileSync('unzip',['-t',file],{stdio:'pipe'});
  const sheets=await readXlsxFile(file);
  assert.deepEqual(sheets.map(s=>s.sheet),expectedSheets);
  assert.ok(sheets[0].data.length>4,'dashboard is empty');
  assert.ok(sheets[1].data.length>=6,'data entry sheet lacks demonstration rows');
  assert.ok(sheets[3].data.length>=6,'instructions are missing');
  const dash=xml(file,1),records=xml(file,2);
  const expectedMinRow={ 'dashboard-sprzedazy':122, 'harmonogram-gantta':81, 'magazyn-stany':71, 'kontrola-faktur':121, 'crm-sprzedaz':121, 'kalkulator-ofert':26 }[slug];
  const rowNums=[...records.matchAll(/<row\b[^>]*\br="(\d+)"/g)].map(m=>Number(m[1]));
  assert.ok(Math.max(...rowNums)>=expectedMinRow,'missing prepared input and formula rows through '+expectedMinRow);
  assert.ok((dash.match(/<f(?:\s[^>]*)?>/g)||[]).length>=3,'dashboard lacks formula-driven KPIs');
  assert.ok((records.match(/<f(?:\s[^>]*)?>/g)||[]).length>=20,'records lack computed columns');
  assert.ok(records.includes('dataValidation')||records.includes('conditionalFormatting'),'no functional input guidance');
  if (slug !== 'kontrola-faktur') assert.ok(records.includes('dataValidation'),'missing editable dropdown/number validation');
  assert.ok(!records.includes('#REF!'),'broken formula reference');
 });
}
test('Every PRO model is correctly documented in the catalog',async()=>{
 const { templateCatalog }=await import('../src/data/templateCatalog.js');
 for(const [slug,names] of templates){
  const item=templateCatalog.find(x=>x.slug===slug);
  assert.ok(item,'missing catalog item '+slug);
  assert.equal(item.pro,true);
  assert.deepEqual(item.sheets,names);
  assert.ok(item.description.length>80);
  assert.ok(item.features.length>=4);
  assert.ok(item.steps.length>=4);
  assert.ok(item.faq.length>=2);
  assert.ok(item.preview?.rows?.length>=3);
 }
});
