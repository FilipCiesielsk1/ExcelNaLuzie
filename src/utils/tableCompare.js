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

function keyIndex(table, column, ignoreCase) {
  const col = table.headers.indexOf(column);
  if (col < 0) throw new Error('Wybierz poprawną kolumnę klucza.');
  const items = new Map(), empty = [];
  const keyFn = s => ignoreCase ? s.trim().toLocaleLowerCase('pl') : s.trim();
  for (const row of table.rows) {
    const raw = row.cells[col].trim();
    if (!raw) { empty.push(row); continue; }
    const key = keyFn(raw);
    if (!items.has(key)) items.set(key, []);
    items.get(key).push({ ...row, key: raw });
  }
  const duplicates = [...items.entries()].filter(([,records])=>records.length>1).map(([key,records])=>({
    key:records[0].key, count:records.length, rows:records.map(r=>r.rowNumber)
  }));
  return {items,empty,duplicates};
}

export function compareTables(left, right, {leftKey, rightKey, ignoreCase=false, trimValues=false}={}) {
  if (!left || !right) throw new Error('Wczytaj obie tabele.');
  const l = keyIndex(left,leftKey,ignoreCase);
  const r = keyIndex(right,rightKey,ignoreCase);
  const lKey = normalizeHeader(leftKey), rKey = normalizeHeader(rightKey);
  const leftColumns = new Map(left.headers.map((name,index)=>[normalizeHeader(name),{name,index}]));
  const rightColumns = new Map(right.headers.map((name,index)=>[normalizeHeader(name),{name,index}]));
  const commonColumns = [...leftColumns].filter(([name])=>rightColumns.has(name) && name!==lKey && name!==rKey)
    .map(([name,col])=>({name:col.name,leftIndex:col.index,rightIndex:rightColumns.get(name).index}));
  const onlyLeftColumns = [...leftColumns].filter(([name])=>name!==lKey && !rightColumns.has(name)).map(([,col])=>col.name);
  const onlyRightColumns = [...rightColumns].filter(([name])=>name!==rKey && !leftColumns.has(name)).map(([,col])=>col.name);
  const dupKeys = new Set([...l.items,...r.items].filter(([k,v])=>v.length>1).map(([k])=>k));
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
      .map(col=>({column:col.name,before:item.cells[col.leftIndex],after:partner.cells[col.rightIndex]}));
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
    leftKey,rightKey,commonColumns,onlyLeftColumns,onlyRightColumns,
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
  for(const item of result.onlyLeft)rows.push(['Tylko w A',item.key,item.rowNumber,'','','','','']);
  for(const item of result.onlyRight)rows.push(['Tylko w B',item.key,'',item.rowNumber,'','','','']);
  for(const item of result.duplicatesLeft)rows.push(['Duplikat A',item.key,'','','','','','Wiersze: '+item.rows.join(', ')]);
  for(const item of result.duplicatesRight)rows.push(['Duplikat B',item.key,'','','','','','Wiersze: '+item.rows.join(', ')]);
  for(const item of result.emptyLeft)rows.push(['Pusty klucz A','',item.rowNumber,'','','','','']);
  for(const item of result.emptyRight)rows.push(['Pusty klucz B','','',item.rowNumber,'','','','']);
  const safe = val => {
    let s=String(val ?? '');
    if (/^\s*[=+\-@\t\r]/.test(s)) s="'"+s;
    return '"' + s.replace(/"/g,'""') + '"';
  };
  return '\uFEFF'+rows.map(row=>row.map(safe).join(';')).join('\r\n');
}
