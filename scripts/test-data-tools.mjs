import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cleanCell,cleanLines,cleaningFormula,parseDelimited,detectDelimiter,
  serializeDelimited,neutralizeSpreadsheetFormula,removeDuplicates,
  calculateShift,formatMinutes
} from '../src/utils/dataTools.js';

test('cleaning preserves lines while removing NBSP, controls and repeated spaces',()=>{
  assert.equal(cleanCell(' \u00a0 Anna  \t Nowak \u0007 '),'Anna Nowak');
  const data=cleanLines(' Anna  \r\nJan\u00a0\u00a0Nowak\n  Ewa ');
  assert.equal(data.text,'Anna\nJan Nowak\nEwa');
  assert.equal(data.total,3);
  assert.equal(data.changed,3);
  assert.ok(data.removed>0);
});
test('cleaning options and Excel 2016 formula are consistent',()=>{
  assert.equal(cleanCell('  A  B  ',{spaces:false}),'  A  B  ');
  assert.equal(cleanCell('A\u00a0B',{nbsp:false}),'A\u00a0B');
  assert.equal(cleaningFormula(),'=USUŃ.ZBĘDNE.ODSTĘPY(OCZYŚĆ(PODSTAW(A2;ZNAK(160);" ")))');
  assert.equal(cleaningFormula({nbsp:false,controls:false,spaces:false}),'=A2');
  assert.throws(()=>cleaningFormula({},'not-cell'),/komórki/);
});
test('CSV parser handles semicolon, quotes, escaped quotes and embedded line breaks',()=>{
  const input='Name;Note\r\nAnna;"x;y"\r\nJan;"line 1\nline 2"\r\nEwa;"Said ""hi"""';
  const {rows,delimiter}=parseDelimited(input);
  assert.equal(delimiter,';');
  assert.deepEqual(rows,[
    ['Name','Note'],['Anna','x;y'],['Jan','line 1\nline 2'],['Ewa','Said "hi"']
  ]);
  assert.deepEqual(parseDelimited('A\tB\n1\t2').rows,[['A','B'],['1','2']]);
  assert.deepEqual(parseDelimited('a,b,\n1,2,','comma').rows,[['a','b',''],['1','2','']]);
  assert.deepEqual(parseDelimited('').rows,[]);
  assert.throws(()=>parseDelimited('a;"oops','semicolon'),/cudzysłów/);
  assert.throws(()=>parseDelimited('a;"b"x','semicolon'),/cudzysłowie/);
});
test('delimiter detection ignores quoted delimiters',()=>{
  assert.equal(detectDelimiter('a;b;"c,d"\n1;2;3'),';');
  assert.equal(detectDelimiter('a|b|c\n1|2|3'),'|');
  assert.equal(detectDelimiter('a\tb\n1\t2'),'\t');
});
test('serialization roundtrips delimiters, quotes, newlines and protects Excel',()=>{
  const rows=[['A','B'],['one;two','a "quote"'],['line\nbreak','hello']];
  const csv=serializeDelimited(rows,';');
  assert.deepEqual(parseDelimited(csv,'semicolon').rows,rows);
  assert.equal(neutralizeSpreadsheetFormula('=1+2'),"'=1+2");
  assert.equal(neutralizeSpreadsheetFormula(' @SUM(A1)'),"' @SUM(A1)");
  assert.equal(neutralizeSpreadsheetFormula('normal'),'normal');
  const dangerous=serializeDelimited([['=HYPERLINK("x")','+cmd','-1','@A1']],';');
  assert.ok(dangerous.includes("'=HYPERLINK"));
  assert.deepEqual(parseDelimited(dangerous,'semicolon').rows,[["'=HYPERLINK(\"x\")","'+cmd","'-1","'@A1"]]);
});
test('dedupe preserves first occurrence, header and chosen ID column',()=>{
  const rows=[['ID','Name'],['101','Anna'],['102','Jan'],['101','Ewa'],['102','Jan']];
  const all=removeDuplicates(rows,{hasHeader:true});
  assert.equal(all.removed,1);
  const byId=removeDuplicates(rows,{hasHeader:true,keyColumns:[0]});
  assert.equal(byId.removed,2);
  assert.deepEqual(byId.unique,[rows[0],rows[1],rows[2]]);
  assert.deepEqual(byId.duplicates,[rows[3],rows[4]]);
});
test('dedupe can ignore case and edge spaces, or compare exact case',()=>{
  const rows=[['Name'],[' Anna '],['anna'],['Ewa']];
  assert.equal(removeDuplicates(rows,{hasHeader:true,keyColumns:[0]}).removed,1);
  assert.equal(removeDuplicates(rows,{hasHeader:true,keyColumns:[0],caseSensitive:true}).removed,0);
  assert.throws(()=>removeDuplicates(rows,{keyColumns:[]}),/kolumnę/);
  assert.throws(()=>removeDuplicates(rows,{keyColumns:[2]}),/kolumnę/);
});
test('work time handles normal shifts, overnight and breaks',()=>{
  const a=calculateShift({start:'08:00',end:'16:30',breakMinutes:30,standardHours:8});
  assert.equal(a.elapsed,510);
  assert.equal(a.minutes,480);
  assert.equal(a.hours,8);
  assert.equal(a.overtime,0);
  assert.equal(a.overnight,false);
  assert.equal(a.formula,'=MOD(B2-A2;1)*24-C2/60');
  const b=calculateShift({start:'22:00',end:'06:30',breakMinutes:30,standardHours:7});
  assert.equal(b.overnight,true);
  assert.equal(b.hours,8);
  assert.equal(b.overtime,1);
  assert.equal(calculateShift({start:'08:00',end:'08:00'}).minutes,0);
  assert.equal(formatMinutes(485),'8 godz. 05 min');
});
test('work time rejects invalid times, negative breaks and break longer than shift',()=>{
  assert.throws(()=>calculateShift({start:'24:00',end:'08:00'}),/GG:MM/);
  assert.throws(()=>calculateShift({start:'09:00',end:'10:00',breakMinutes:90}),/dłuższa/);
  assert.throws(()=>calculateShift({start:'09:00',end:'10:00',breakMinutes:-1}),/Przerwa/);
  assert.throws(()=>calculateShift({start:'09:00',end:'10:00',standardHours:30}),/Norma/);
});
