/**
 * Statyczna analiza formuł polskiego Excela — bez wykonywania kodu i obliczeń.
 */
export const MAX_FORMULA_LENGTH = 12000;

export function splitFormulaArguments(text) {
  let quote = false, sheet = false, square = 0, depth = 0, start = 0;
  const parts = [];
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quote) {
      if (c === '"' && text[i+1] === '"') { i++; continue; }
      if (c === '"') quote = false;
      continue;
    }
    if (sheet) {
      if (c === "'" && text[i+1] === "'") { i++; continue; }
      if (c === "'") sheet = false;
      continue;
    }
    if (c === '"') quote = true;
    else if (c === "'") sheet = true;
    else if (c === '[') square++;
    else if (c === ']') { if (--square < 0) return { error: 'Nadmiarowy nawias kwadratowy.' }; }
    else if (!square && c === '(') depth++;
    else if (!square && c === ')') { if (--depth < 0) return { error: 'Nadmiarowy nawias zamykający.' }; }
    else if (!square && !depth && c === ';') { parts.push(text.slice(start,i).trim()); start = i+1; }
  }
  if (quote) return { error: 'Nie zamknięto tekstu w cudzysłowie.' };
  if (sheet) return { error: 'Nie zamknięto nazwy arkusza w apostrofach.' };
  if (depth || square) return { error: 'Nie zamknięto wszystkich nawiasów.' };
  parts.push(text.slice(start).trim());
  return { parts };
}

export function analyzeFormula(input, functions = []) {
  const source = String(input ?? '').trim();
  const issues = [], calls = [], stack = [];
  if (!source) return { issues: [{kind:'info',text:'Wklej formułę do analizy.'}], calls, maxDepth:0 };
  if (source.length > MAX_FORMULA_LENGTH)
    return { issues: [{kind:'error',text:'Formuła przekracza limit 12 000 znaków.'}], calls, maxDepth:0 };
  if (!source.startsWith('=')) issues.push({kind:'error',text:'Formuła powinna zaczynać się znakiem =.'});
  const known = new Map(functions.map(f=>[f.name.toUpperCase(),f]));
  let quoted = false, sheet = false, square = 0, maxDepth = 0, comma = false, semicolon = false;
  for (let i=0;i<source.length;i++) {
    const c=source[i];
    if (quoted) {
      if(c==='"' && source[i+1]==='"') { i++; continue; }
      if(c==='"') quoted=false;
      continue;
    }
    if(sheet) {
      if(c==="'" && source[i+1]==="'") { i++; continue; }
      if(c==="'") sheet=false;
      continue;
    }
    if(c==='"') { quoted=true; continue; }
    if(c==="'") { sheet=true; continue; }
    if(c==='[') { square++; continue; }
    if(c===']') { if(--square<0){issues.push({kind:'error',text:'Nadmiarowy nawias kwadratowy.'});square=0;} continue; }
    if(square) continue;
    if(c==='(') {
      let j=i-1;
      while(j>=0 && /\s/.test(source[j])) j--;
      const end=j;
      while(j>=0 && /[\p{L}\p{N}_.]/u.test(source[j])) j--;
      const name = j<end && /[\p{L}_]/u.test(source[j+1]) ? source.slice(j+1,end+1).toUpperCase() : null;
      stack.push({name,start:i,depth:stack.length+1,args:1});
      maxDepth=Math.max(maxDepth,stack.length);
    } else if(c===')') {
      const frame=stack.pop();
      if(!frame) issues.push({kind:'error',text:'Dodatkowy nawias zamykający.'});
      else if(frame.name) {
        const n=source.slice(frame.start+1,i).trim()?frame.args:0;
        calls.push({name:frame.name,arguments:n,depth:frame.depth,position:frame.start,reference:known.get(frame.name)??null});
      }
    } else if(c===';') {
      semicolon=true;
      if(stack.length) stack[stack.length-1].args++;
    } else if(c===',' && !(/\d/.test(source[i-1]??'') && /\d/.test(source[i+1]??''))) comma=true;
  }
  if(quoted)issues.push({kind:'error',text:'Niedomknięty cudzysłów.'});
  if(sheet)issues.push({kind:'error',text:'Niedomknięta nazwa arkusza.'});
  if(square)issues.push({kind:'error',text:'Niedomknięty nawias kwadratowy.'});
  if(stack.length)issues.push({kind:'error',text:'Brakuje nawiasu zamykającego.'});
  if(comma && !semicolon && calls.length)issues.push({kind:'warning',text:'Możliwy separator angielski: w polskim Excelu argumenty rozdzielaj średnikami (;).'});
  calls.sort((a,b)=>a.position-b.position);
  if(!issues.length)issues.push({kind:'info',text:'Nie znaleziono podstawowych błędów składni. To nie oznacza, że Excel prawidłowo obliczy wynik.'});
  return {issues,calls,maxDepth};
}

const colNumber = s => [...s.toUpperCase()].reduce((n,c)=>n*26+c.charCodeAt(0)-64,0);
const colLetters = n => { let s='';while(n>0){s=String.fromCharCode(65+(n-1)%26)+s;n=Math.floor((n-1)/26);}return s;};
const RANGE = /^((?:'(?:[^']|'')+'|[\p{L}_][\p{L}\p{N}_.]*)!)?(\$?)([A-Z]{1,3})(\$?)(\d+)?:(\$?)([A-Z]{1,3})(\$?)(\d+)?$/iu;

/**
 * Konwertuje tylko samodzielne wyszukiwanie dokładne z prostym zakresem A1.
 * Pomięcie argumentu FAŁSZ i wyszukiwanie przybliżone są celowo blokowane.
 */
export function convertVlookup(input, {notFound=null}={}) {
  const raw=String(input??'').trim();
  const fail = message => ({ok:false,message,formula:''});
  if(!raw)return fail('Wklej formułę WYSZUKAJ.PIONOWO.');
  if(raw.length>MAX_FORMULA_LENGTH)return fail('Formuła jest zbyt długa.');
  const outer=/^=\s*WYSZUKAJ\.PIONOWO\s*\(([\s\S]*)\)$/i.exec(raw);
  if(!outer)return fail('Obsługujemy samodzielną formułę =WYSZUKAJ.PIONOWO(...), bez dodatkowych funkcji zewnętrznych.');
  const parsed=splitFormulaArguments(outer[1]);
  if(parsed.error)return fail(parsed.error);
  const p=parsed.parts;
  if(p.length!==4 || p.some(x=>!x))return fail('Wymagane są 4 argumenty, w tym czwarty FAŁSZ lub 0 (dokładne dopasowanie).');
  const [value,table,number,matchMode]=p;
  if(!/^(FAŁSZ|FALSE|0)$/i.test(matchMode))return fail('Konwertujemy wyłącznie dopasowanie dokładne (FAŁSZ lub 0). PRAWDA i brak argumentu mogłyby zmienić wynik.');
  if(!/^[1-9]\d*$/.test(number))return fail('Numer kolumny musi być podany bezpośrednio jako dodatnia liczba całkowita.');
  const m=RANGE.exec(table);
  if(!m)return fail("Obsługiwane zakresy: A2:D100, $A$2:$D$100, A:D oraz 'Dane 2026'!A2:D100. Nie obsługujemy nazw zakresów i tabel.");
  const [,sheet='',sa,colA,ra,rowA,ea,colB,rb,rowB]=m;
  if(Boolean(rowA)!==Boolean(rowB))return fail('Podaj obie granice wierszy albo zakres pełnych kolumn.');
  const left=colNumber(colA),right=colNumber(colB),index=Number(number);
  if(left<1 || right>16384 || left>right)return fail('Nieprawidłowy zakres kolumn Excela.');
  if(rowA && (+rowA<1 || +rowA>+rowB || +rowB>1048576))return fail('Nieprawidłowy zakres wierszy.');
  if(index>right-left+1)return fail('Numer kolumny jest większy niż liczba kolumn wskazanej tabeli.');
  const formatColumn = name => sheet+sa+name+ra+(rowA??'')+':'+ea+name+rb+(rowB??'');
  const lookup=formatColumn(colA.toUpperCase());
  const returned=formatColumn(colLetters(left+index-1));
  const optional = notFound===null?'':';"'+String(notFound).replaceAll('"','""')+'"';
  return {ok:true,formula:'=X.WYSZUKAJ('+value+';'+lookup+';'+returned+optional+')',lookup,returned,message:'Zachowano dokładne dopasowanie oraz układ wierszy. Sprawdź obliczenie w swojej wersji Excela.'};
}
