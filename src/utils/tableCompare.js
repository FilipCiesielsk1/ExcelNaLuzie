/**
 * Porównywarka dwóch tabel Excel — wyłącznie w przeglądarce.
 * Unikalne klucze są warunkiem porównania. Duplikaty i braki klucza są raportowane oddzielnie.
 */
export const MAX_ROWS = 10000;
export const MAX_COLUMNS = 80;
export const MAX_FILE_BYTES = 5 * 1024 * 1024;

export function parseDelimited(input) {
  const text = String(input ?? '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  if (!text.trim()) throw new Error('Tabela jest pusta.');
  const firstLine = text.split('\n').find(s => s.trim()) ?? '';
  const count = (delimiter) => {
    let n = 0, quoted = false;
    for (let i = 0; i < firstLine.length; i++) {
      if (firstLine[i] === '"') {
        if (quoted && firstLine[i + 1] === '"') { i++; continue; }
        quoted = !quoted;
      } else if (!quoted && firstLine[i] === delimiter) n++;
    }
    return n;
  };
  const delimiter = count('\t') ? '\t' : count(';') >= count(',') ? ';' : ',';
  const rows = [];
  let row = [], cell = '', quote = false, started = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quote) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quote = false;
      else cell += ch;
    } else if (ch === '"' && !started) {
      quote = true;
      started = true;
    } else if (ch === delimiter) {
      row.push(cell); cell = ''; started = false;
    } else if (ch === '\n') {
      row.push(cell);
      rows.push(row);
      if (rows.length > MAX_ROWS + 2) throw new Error('Przekroczono limit 10 000 wierszy danych.');
      row = []; cell = ''; started = false;
    } else {
      cell += ch;
      started = true;
    }
  }
  if (quote) throw new Error('Niedomknięty cudzysłów w pliku CSV.');
  if (started || cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const valueText = v => {
  if (v == null) return '';
  if (v instanceof Date) return Number.isNaN(v.getTime()) ? '' : v.toISOString().slice(0, 10);
  if (typeof v === 'boolean') return v ? 'PRAWDA' : 'FAŁSZ';
  return String(v);
};
export const normalizeHeader = s => String(s ?? '').trim().toLocaleLowerCase('pl');

export function prepareTable(matrix) {
  if (!Array.isArray(matrix) || matrix.length < 2) throw new Error('Podaj nagłówki i co najmniej jeden wiersz danych.');
  const rawHeaders = matrix[0];
  if (!Array.isArray(rawHeaders) || !rawHeaders.length) throw new Error('Brak nagłówków kolumn.');
  const headers = rawHeaders.map(valueText).map(s => s.trim());
  if (headers.length > MAX_COLUMNS) throw new Error('Limit: maksymalnie 80 kolumn.');
  if (headers.some(s => !s)) throw new Error('Każda kolumna musi mieć nagłówek.');
  if (new Set(headers.map(normalizeHeader)).size !== headers.length)
    throw new Error('Nagłówki kolumn muszą być unikalne (także po pominięciu wielkości liter).');
  const rows = matrix.slice(1)
    .map((row, i) => ({ cells: row.map(valueText), rowNumber: i + 2 }))
    .filter(r => r.cells.some(v => v.trim() !== ''));
  if (!rows.length) throw new Error('Brak wierszy z danymi.');
  if (rows.length > MAX_ROWS) throw new Error('Limit: maksymalnie 10 000 wierszy danych.');
  for (const row of rows) {
    if (row.cells.length > headers.length && row.cells.slice(headers.length).some(v => v.trim()))
      throw new Error('Wiersz ' + row.rowNumber + ' ma więcej wartości niż nagłówków.');
    row.cells = headers.map((_, i) => row.cells[i] ?? '');
  }
  return {headers, rows};
}

function getKeyColumns(table, columns, label) {
  const keys = Array.isArray(columns) ? columns : [columns];
  if (!keys.length || keys.some(key => !key)) throw new Error('Wybierz co najmniej jedną parę kolumn klucza.');
  if (new Set(keys.map(normalizeHeader)).size !== keys.length) throw new Error('Kolumna klucza nie może zostać wybrana dwa razy po tej samej stronie.');
  const indices = keys.map(name => table.headers.findIndex(h => normalizeHeader(h) === normalizeHeader(name)));
  if (indices.some(i => i < 0)) throw new Error('Nie znaleziono kolumny klucza w tabeli ' + label + '.');
  return {keys: keys.map((_,i)=>table.headers[indices[i]]), indices};
}

function keyIndex(table, columns, ignoreCase, label) {
  const {keys, indices} = getKeyColumns(table, columns, label);
  const items = new Map(), empty = [];
  const norm = s => ignoreCase ? s.trim().toLocaleLowerCase('pl') : s.trim();
  for (const row of table.rows) {
    const raw = indices.map(i => row.cells[i].trim());
    if (raw.some(value => !value)) { empty.push(row); continue; }
    // JSON tuple cannot collide when values contain separators, quotes, or brackets.
    const encoded = JSON.stringify(raw.map(norm));
    if (!items.has(encoded)) items.set(encoded, []);
    items.get(encoded).push({...row, key:raw.join(' | '), keyParts:raw});
  }
  const duplicates = [...items.values()].filter(records=>records.length>1).map(records=>({
    key:records[0].key, count:records.length, rows:records.map(r=>r.rowNumber)
  }));
  return {items, empty, duplicates, keys};
}

function getColumnMappings(left, right, lKeys, rKeys, mappings) {
  const lKeyNames = new Set(lKeys.map(normalizeHeader));
  const rKeyNames = new Set(rKeys.map(normalizeHeader));
  const byName = new Map(right.headers.map((name,index)=>[normalizeHeader(name),index]));
  const selected = mappings === undefined
    ? left.headers.filter(name=>!lKeyNames.has(normalizeHeader(name)))
      .map(name=>({left:name,right:right.headers[byName.get(normalizeHeader(name))] ?? ''}))
      .filter(pair=>pair.right && !rKeyNames.has(normalizeHeader(pair.right)))
    : mappings;
  if (!Array.isArray(selected)) throw new Error('Nieprawidłowe mapowanie kolumn.');
  const commonColumns=[], seenLeft=new Set(), seenRight=new Set();
  for (const pair of selected) {
    if (!pair || !pair.left || !pair.right) continue; // puste ustawienie: pomiń kolumnę
    const leftIndex = left.headers.findIndex(name=>normalizeHeader(name)===normalizeHeader(pair.left));
    const rightIndex = right.headers.findIndex(name=>normalizeHeader(name)===normalizeHeader(pair.right));
    if (leftIndex<0 || rightIndex<0) throw new Error('Mapowanie odnosi się do nieistniejącej kolumny.');
    const lName = left.headers[leftIndex], rName=right.headers[rightIndex];
    const lNorm=normalizeHeader(lName), rNorm=normalizeHeader(rName);
    if (lKeyNames.has(lNorm)||rKeyNames.has(rNorm)) throw new Error('Kolumna identyfikatora nie może być jednocześnie porównywana jako wartość.');
    if (seenLeft.has(lNorm)||seenRight.has(rNorm)) throw new Error('Każdą kolumnę danych można przypisać tylko raz.');
    seenLeft.add(lNorm);seenRight.add(rNorm);
    commonColumns.push({
      name: lName===rName ? lName : lName+' → '+rName,
      leftName:lName,rightName:rName,leftIndex,rightIndex
    });
  }
  return {
    commonColumns,
    onlyLeftColumns:left.headers.filter(name=>!lKeyNames.has(normalizeHeader(name))&&!seenLeft.has(normalizeHeader(name))),
    onlyRightColumns:right.headers.filter(name=>!rKeyNames.has(normalizeHeader(name))&&!seenRight.has(normalizeHeader(name)))
  };
}

export function compareTables(left, right, {
  leftKey, rightKey, leftKeys, rightKeys, columnMappings,
  ignoreCase=false, trimValues=false
}={}) {
  if (!left || !right) throw new Error('Wczytaj obie tabele.');
  const l = keyIndex(left, leftKeys??leftKey, ignoreCase, 'A');
  const r = keyIndex(right, rightKeys??rightKey, ignoreCase, 'B');
  if (l.keys.length !== r.keys.length) throw new Error('Klucz musi składać się z takiej samej liczby kolumn po obu stronach.');
  const {commonColumns,onlyLeftColumns,onlyRightColumns} =
    getColumnMappings(left,right,l.keys,r.keys,columnMappings);
  const dupKeys = new Set([...l.items,...r.items].filter(([,v])=>v.length>1).map(([k])=>k));
  const onlyLeft=[],onlyRight=[],changed=[];
  let unchanged=0;
  const normalizeValue = v => {
    const s = trimValues ? v.trim() : v;
    return ignoreCase ? s.toLocaleLowerCase('pl') : s;
  };
  for (const [key,records] of l.items) {
    if (dupKeys.has(key)) continue;
    const item = records[0];
    const partner = r.items.get(key)?.[0];
    if (!partner) { onlyLeft.push(item); continue; }
    const differences = commonColumns.filter(col=>normalizeValue(item.cells[col.leftIndex])!==normalizeValue(partner.cells[col.rightIndex]))
      .map(col=>({
        column:col.name,
        leftColumn:col.leftName,rightColumn:col.rightName,
        before:item.cells[col.leftIndex],after:partner.cells[col.rightIndex]
      }));
    if (differences.length) changed.push({key:item.key,leftRow:item.rowNumber,rightRow:partner.rowNumber,differences});
    else unchanged++;
  }
  for (const [key,records] of r.items) {
    if (!dupKeys.has(key) && !l.items.has(key)) onlyRight.push(records[0]);
  }
  return {
    summary: {
      leftRows:left.rows.length,rightRows:right.rows.length,
      changed:changed.length,unchanged,onlyLeft:onlyLeft.length,onlyRight:onlyRight.length,
      duplicateLeft:l.duplicates.reduce((n,x)=>n+x.count,0),
      duplicateRight:r.duplicates.reduce((n,x)=>n+x.count,0),
      emptyLeft:l.empty.length,emptyRight:r.empty.length,
      ambiguousKeys:dupKeys.size
    },
    leftKey:l.keys[0],rightKey:r.keys[0],
    leftKeys:l.keys,rightKeys:r.keys,
    leftHeaders:left.headers,rightHeaders:right.headers,
    commonColumns,onlyLeftColumns,onlyRightColumns,
    onlyLeft,onlyRight,changed,duplicatesLeft:l.duplicates,
    duplicatesRight:r.duplicates,emptyLeft:l.empty,emptyRight:r.empty
  };
}

/** Raport CSV: prefix "'" zapobiega interpretacji danych jako formuł w Excelu. */
export function exportComparisonCsv(result) {
  const fields = ['Typ','Klucz','Wiersz A','Wiersz B','Kolumna','Wartość A','Wartość B','Szczegóły'];
  const rows=[fields];
  for(const item of result.changed)
    for(const d of item.differences)rows.push(['Zmiana',item.key,item.leftRow,item.rightRow,d.column,d.before,d.after,'']);
  const describe = (item,headers) => headers.map((name,i)=>name+': '+item.cells[i]).join(' | ');
  for(const item of result.onlyLeft)rows.push(['Tylko w A',item.key,item.rowNumber,'','','','',describe(item,result.leftHeaders)]);
  for(const item of result.onlyRight)rows.push(['Tylko w B',item.key,'',item.rowNumber,'','','',describe(item,result.rightHeaders)]);
  for(const item of result.duplicatesLeft)rows.push(['Duplikat A',item.key,'','','','','','Wiersze: '+item.rows.join(', ')]);
  for(const item of result.duplicatesRight)rows.push(['Duplikat B',item.key,'','','','','','Wiersze: '+item.rows.join(', ')]);
  for(const item of result.emptyLeft)rows.push(['Pusty klucz A','',item.rowNumber,'','','','',describe(item,result.leftHeaders)]);
  for(const item of result.emptyRight)rows.push(['Pusty klucz B','','',item.rowNumber,'','','',describe(item,result.rightHeaders)]);
  const safe = val => {
    let s=String(val ?? '');
    if (/^\s*[=+\-@\t\r]/.test(s)) s="'"+s;
    return '"' + s.replace(/"/g,'""') + '"';
  };
  return '\uFEFF'+rows.map(row=>row.map(safe).join(';')).join('\r\n');
}

/**
 * Struktura raportu XLSX do biblioteki write-excel-file (ładowanej dopiero przy eksporcie).
 * Wszystkie wartości źródłowe zapisujemy jako tekst, także te zaczynające się od "=".
 */
export function buildComparisonWorkbook(result) {
  const header=(name)=>({value:String(name),type:String,fontWeight:'bold',textColor:'#FFFFFF',backgroundColor:'#146C43'});
  const cell=(value)=>({value:String(value??''),type:String});
  const sheet=(name,headings,rows)=>{
    const data=[headings.map(header),...rows.map(row=>row.map(cell))];
    const columns=headings.map((_,i)=>({width:i===0?25:i===1?24:20}));
    return {sheet:name,data,columns,stickyRowsCount:1,showGridLines:false};
  };
  const summary=result.summary;
  const facts=[
    ['Klucze A',result.leftKeys.join(' + ')],
    ['Klucze B',result.rightKeys.join(' + ')],
    ['Wiersze A',summary.leftRows],
    ['Wiersze B',summary.rightRows],
    ['Bez zmian',summary.unchanged],
    ['Zmienione rekordy',summary.changed],
    ['Tylko w A',summary.onlyLeft],
    ['Tylko w B',summary.onlyRight],
    ['Duplikaty (wiersze) A',summary.duplicateLeft],
    ['Duplikaty (wiersze) B',summary.duplicateRight],
    ['Puste klucze A',summary.emptyLeft],
    ['Puste klucze B',summary.emptyRight],
    ['Nieporównane klucze z duplikatami',summary.ambiguousKeys],
    ['Porównywane pary kolumn',result.commonColumns.map(c=>c.leftName+' ↔ '+c.rightName).join(' ; ')||'Brak'],
    ['Pominięte kolumny A',result.onlyLeftColumns.join(', ')||'Brak'],
    ['Pominięte kolumny B',result.onlyRightColumns.join(', ')||'Brak']
  ];
  const changes=result.changed.flatMap(item=>item.differences.map(d=>[
    item.key,item.leftRow,item.rightRow,d.leftColumn,d.rightColumn,d.before,d.after
  ]));
  const itemRows=(items,headers)=>items.map(item=>[
    item.key,item.rowNumber,...headers.map((_,i)=>item.cells[i])
  ]);
  const duplicateRows=(items,label)=>items.map(item=>[
    label,item.key,item.count,item.rows.join(', ')
  ]);
  const emptyRows=(items,label,headers)=>items.map(item=>[
    label,item.rowNumber,...headers.map((_,i)=>item.cells[i])
  ]);
  return [
    sheet('Podsumowanie',['Metryka','Wynik'],facts),
    sheet('Zmiany',['Klucz','Wiersz A','Wiersz B','Kolumna A','Kolumna B','Wartość A','Wartość B'],changes),
    sheet('Tylko w A',['Klucz','Wiersz A',...result.leftHeaders],itemRows(result.onlyLeft,result.leftHeaders)),
    sheet('Tylko w B',['Klucz','Wiersz B',...result.rightHeaders],itemRows(result.onlyRight,result.rightHeaders)),
    sheet('Duplikaty',['Tabela','Klucz','Wystąpienia','Numery wierszy'],[
      ...duplicateRows(result.duplicatesLeft,'A'),
      ...duplicateRows(result.duplicatesRight,'B')
    ]),
    sheet('Puste klucze A',['Tabela','Wiersz',...result.leftHeaders],emptyRows(result.emptyLeft,'A',result.leftHeaders)),
    sheet('Puste klucze B',['Tabela','Wiersz',...result.rightHeaders],emptyRows(result.emptyRight,'B',result.rightHeaders))
  ];
}
