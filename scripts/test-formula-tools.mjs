import test from 'node:test';
import assert from 'node:assert/strict';
import {
  analyzeFormula,
  convertVlookup,
  splitFormulaArguments
} from '../src/utils/formulaTools.js';

test('argument splitter honors strings, nested functions and quoted sheet names', () => {
  assert.deepEqual(
    splitFormulaArguments('A2;"Kawa; herbata";JEŻELI(B2>0;1;0)').parts,
    ['A2','"Kawa; herbata"','JEŻELI(B2>0;1;0)']
  );
  assert.deepEqual(
    splitFormulaArguments("F2;'Dane; Q4'!$A$2:$D$10;3;FAŁSZ").parts,
    ['F2',"'Dane; Q4'!$A$2:$D$10",'3','FAŁSZ']
  );
  assert.deepEqual(
    splitFormulaArguments('A1;"tekst ""cytat;cytat""";3;FAŁSZ').parts,
    ['A1','"tekst ""cytat;cytat"""','3','FAŁSZ']
  );
});

test('analyzer identifies functions, nesting and balanced quoted separators', () => {
  const known=[{name:'JEŻELI',slug:'jezeli'},{name:'X.WYSZUKAJ',slug:'xwyszukaj'}];
  const result=analyzeFormula('=JEŻELI(A2>0;X.WYSZUKAJ(F2;A2:A100;B2:B100;"Nie; ma");"Brak")',known);
  assert.deepEqual(result.calls.map(c=>c.name),['JEŻELI','X.WYSZUKAJ']);
  assert.equal(result.calls[0].depth,1);
  assert.equal(result.calls[1].depth,2);
  assert.equal(result.calls[1].arguments,4);
  assert.equal(result.issues.filter(i=>i.kind==='error').length,0);
  assert.equal(result.calls[1].reference.slug,'xwyszukaj');
});
test('analyzer reports missing closing parentheses and quotation marks',()=>{
  assert.ok(analyzeFormula('=SUMA(A1;B2').issues.some(i=>i.kind==='error'));
  assert.ok(analyzeFormula('=JEŻELI(A1>0;"OK)').issues.some(i=>i.kind==='error'));
  assert.ok(analyzeFormula('JEŻELI(A1>0;1;0)').issues.some(i=>i.kind==='error'));
});
test('analyzer warns about comma arguments but ignores Polish decimals',()=>{
  assert.ok(analyzeFormula('=IF(A1>0,"TAK","NIE")').issues.some(i=>i.kind==='warning'));
  assert.ok(!analyzeFormula('=ZAOKR(1,25;1)').issues.some(i=>i.kind==='warning'));
});
test('exact VLOOKUP maps simple table to aligned XLOOKUP columns',()=>{
  const r=convertVlookup('=WYSZUKAJ.PIONOWO(F2;A2:D100;3;FAŁSZ)');
  assert.equal(r.ok,true);
  assert.equal(r.formula,'=X.WYSZUKAJ(F2;A2:A100;C2:C100)');
  assert.equal(r.lookup,'A2:A100');
  assert.equal(r.returned,'C2:C100');
});
test('conversion preserves absolute references, workbook sheet and escaped fallback',()=>{
  const r=convertVlookup("=WYSZUKAJ.PIONOWO(F2;'Dane 2026'!$A$2:$D$100;4;0)",{notFound:'Brak "rekordu"'});
  assert.equal(r.formula,'=X.WYSZUKAJ(F2;\'Dane 2026\'!$A$2:$A$100;\'Dane 2026\'!$D$2:$D$100;"Brak ""rekordu""")');
});
test('conversion works with entire columns and first-column index',()=>{
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;B:E;1;FAŁSZ)').formula,'=X.WYSZUKAJ(A1;B:B;B:B)');
});
test('approximate or implicit approximate lookup is rejected',()=>{
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;A1:C10;2;PRAWDA)').ok,false);
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;A1:C10;2)').ok,false);
});
test('unsupported structured ranges and invalid indices are rejected',()=>{
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;Tabela1;2;FAŁSZ)').ok,false);
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;A1:B20;3;FAŁSZ)').ok,false);
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;D1:A20;1;FAŁSZ)').ok,false);
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;A1:B20;C2;FAŁSZ)').ok,false);
  assert.equal(convertVlookup('=WYSZUKAJ.PIONOWO(A1;A1:B20;1;FAŁSZ)').ok,true);
});
test('quoted semicolons in nested value survive conversion',()=>{
  const r=convertVlookup('=WYSZUKAJ.PIONOWO(JEŻELI(A2="";B2;A2);A2:B10;2;FAŁSZ)');
  assert.equal(r.formula,'=X.WYSZUKAJ(JEŻELI(A2="";B2;A2);A2:A10;B2:B10)');
});
