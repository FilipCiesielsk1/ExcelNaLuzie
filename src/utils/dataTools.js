/**
 * Pure, browser-safe data utilities for ExcelNaLuzie.
 * No uploads, cookies, network calls, or external dependencies.
 */
export const DELIMITERS = Object.freeze({tab:'\t',semicolon:';',comma:',',pipe:'|'});

export function cleanCell(value, {nbsp=true,controls=true,spaces=true}={}) {
  let text=String(value ?? '');
  if (nbsp) text=text.replace(/\u00a0/g,' ');
  if (controls) text=text.replace(/[\x00-\x1f\x7f]/g,'');
  if (spaces) text=text.replace(/ +/g,' ').replace(/^ +| +$/g,'');
  return text;
}

export function cleanLines(input, options={}) {
  const original=String(input ?? '').replace(/\r\n?/g,'\n');
  const lines=original.split('\n');
  const cleaned=lines.map(line=>cleanCell(line,options));
  return {
    text:cleaned.join('\n'),
    total:lines.length,
    changed:lines.filter((line,i)=>line!==cleaned[i]).length,
    removed:original.length-cleaned.join('\n').length
  };
}

export function cleaningFormula({nbsp=true,controls=true,spaces=true}={},cell='A2') {
  if (!/^\$?[A-Z]{1,3}\$?[1-9]\d{0,6}$/.test(cell)) throw new Error('Niepoprawny adres komórki');
  let formula=cell;
  if (nbsp) formula='PODSTAW('+formula+';ZNAK(160);" ")';
  if (controls) formula='OCZYŚĆ('+formula+')';
  if (spaces) formula='USUŃ.ZBĘDNE.ODSTĘPY('+formula+')';
  return '='+formula;
}

export function parseDelimited(input,delimiter='auto') {
  const source=String(input ?? '').replace(/\r\n?/g,'\n').replace(/^\ufeff/,'');
  const sep=delimiter==='auto'?detectDelimiter(source):DELIMITERS[delimiter];
  if (!sep) throw new Error('Nieznany separator danych.');
  if (!source) return {rows:[],delimiter:sep};
  const rows=[],row=[];
  let cell='',quoted=false,afterQuote=false;
  for (let i=0;i<source.length;i++) {
    const ch=source[i];
    if (quoted) {
      if (ch==='"'&&source[i+1]==='"') {cell+='"';i++;}
      else if (ch==='"') {quoted=false;afterQuote=true;}
      else cell+=ch;
    } else if (afterQuote) {
      if (ch===sep) {row.push(cell);cell='';afterQuote=false;}
      else if (ch==='\n') {row.push(cell);rows.push([...row]);row.length=0;cell='';afterQuote=false;}
      else if (ch===' '||ch==='\t'&&sep!=='\t') { /* tolerate whitespace after quoted cell */ }
      else throw new Error('Niepoprawny znak po cudzysłowie w danych CSV.');
    } else if (ch===sep) {row.push(cell);cell='';}
    else if (ch==='\n') {row.push(cell);rows.push([...row]);row.length=0;cell='';}
    else if (ch==='"'&&cell==='') {quoted=true;}
    else cell+=ch;
  }
  if (quoted) throw new Error('Niedomknięty cudzysłów w danych CSV.');
  if (cell!==''||row.length||source.at(-1)!=='\n') {row.push(cell);rows.push([...row]);}
  return {rows,delimiter:sep};
}

export function detectDelimiter(input) {
  const sample=String(input ?? '').slice(0,10000);
  const scores=new Map(Object.values(DELIMITERS).map(sep=>[sep,0]));
  let quoted=false,lines=0,decimalCommas=0;
  for(let i=0;i<sample.length&&lines<6;i++){
    const ch=sample[i];
    if(ch==='"'){
      if(quoted&&sample[i+1]==='"') {i++;continue;}
      quoted=!quoted;
    } else if(!quoted){
      if(ch==='\n') lines++;
      if(scores.has(ch)) scores.set(ch,scores.get(ch)+1);
      if(ch===','&&/\d/.test(sample[i-1]??'')&&/\d/.test(sample[i+1]??'')) decimalCommas++;
    }
  }
  // Polish numeric values use decimal commas even when fields are separated by semicolons.
  if(scores.get(';')>0&&decimalCommas>0) scores.set(',',Math.max(0,scores.get(',')-decimalCommas));
  const ranked=[...scores.entries()].sort((a,b)=>b[1]-a[1]);
  return ranked[0][1]>0?ranked[0][0]:'\t';
}

export function neutralizeSpreadsheetFormula(value) {
  const text=String(value ?? '');
  return /^[\s\u0000-\u001f]*[=+@-]/.test(text) ? "'"+text : text;
}

export function serializeDelimited(rows,delimiter='\t',{protectFormulas=true}={}) {
  if(!Object.values(DELIMITERS).includes(delimiter)) throw new Error('Nieznany separator.');
  return rows.map(row=>row.map(value=>{
    const raw=protectFormulas?neutralizeSpreadsheetFormula(value):String(value??'');
    return /["\r\n]/.test(raw)||raw.includes(delimiter)
      ? '"'+raw.replace(/"/g,'""')+'"'
      : raw;
  }).join(delimiter)).join('\r\n');
}

export function removeDuplicates(rows,{keyColumns=null,hasHeader=false,caseSensitive=false,trim=true}={}) {
  if(!Array.isArray(rows)||!rows.every(Array.isArray)) throw new Error('Niepoprawne dane tabeli.');
  if(!rows.length) return {unique:[],duplicates:[],removed:0};
  const width=Math.max(...rows.map(row=>row.length));
  const keys=keyColumns===null?Array.from({length:width},(_,i)=>i):keyColumns;
  if(!Array.isArray(keys)||!keys.length||keys.some(i=>!Number.isInteger(i)||i<0||i>=width))
    throw new Error('Wybierz co najmniej jedną poprawną kolumnę klucza.');
  const unique=hasHeader?[rows[0]]:[],duplicates=[],seen=new Set();
  for(const row of rows.slice(hasHeader?1:0)){
    const key=JSON.stringify(keys.map(i=>{
      let value=String(row[i]??'');
      if(trim) value=value.trim();
      if(!caseSensitive) value=value.toLocaleLowerCase('pl-PL');
      return value;
    }));
    if(seen.has(key)) duplicates.push(row);
    else {seen.add(key);unique.push(row);}
  }
  return {unique,duplicates,removed:duplicates.length};
}

export function calculateShift({start,end,breakMinutes=0,standardHours=8}) {
  const parse=(value)=>{
    const match=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(String(value??''));
    if(!match) throw new Error('Wpisz godzinę w formacie GG:MM (00:00–23:59).');
    return Number(match[1])*60+Number(match[2]);
  };
  const from=parse(start),to=parse(end);
  if(!Number.isInteger(breakMinutes)||breakMinutes<0||breakMinutes>1440)
    throw new Error('Przerwa musi mieć od 0 do 1440 minut.');
  if(!Number.isFinite(standardHours)||standardHours<0||standardHours>24)
    throw new Error('Norma godzin musi wynosić od 0 do 24.');
  const elapsed=(to-from+1440)%1440;
  if(breakMinutes>elapsed) throw new Error('Przerwa nie może być dłuższa niż zmiana.');
  const minutes=elapsed-breakMinutes;
  return {
    elapsed,minutes,breakMinutes,overnight:to<from,
    hours:minutes/60,
    overtime:Math.max(0,minutes-standardHours*60)/60,
    formula:'=MOD(B2-A2;1)*24-C2/60',
    overtimeFormula:'=MAKS(0;MOD(B2-A2;1)*24-C2/60-D2)'
  };
}

export function formatMinutes(minutes) {
  if(!Number.isFinite(minutes)||minutes<0) throw new Error('Niepoprawny czas.');
  return Math.floor(minutes/60)+' godz. '+String(Math.round(minutes%60)).padStart(2,'0')+' min';
}
