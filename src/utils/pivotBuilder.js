import {MAX_ROWS, MAX_COLUMNS, prepareTable} from './tableCompare.js';

export const MAX_PIVOT_ROWS = 350;
export const MAX_PIVOT_COLUMNS = 24;
export const AGGREGATIONS = {
  sum:'Suma', count:'Licznik', avg:'Średnia', min:'Minimum', max:'Maksimum'
};

export function parsePivotNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  const input=String(value??'').trim().replace(/[\s\u00A0\u202F]/g,'');
  if (!input) return null;
  if (!/^[+-]?(?:\d+(?:[.,]\d+)*|[.,]\d+)$/.test(input)) return null;
  const comma=input.lastIndexOf(','), dot=input.lastIndexOf('.');
  let normalized=input;
  if(comma>=0 && dot>=0) {
    const decimal=comma>dot?',':'.';
    const group=decimal===','?'.':',';
    normalized=input.split(group).join('').replace(decimal,'.');
  } else if(comma>=0) {
    normalized=input.replaceAll('.','').replace(',','.');
  } else if((input.match(/\./g)||[]).length>1) {
    if(!/^[+-]?\d{1,3}(?:\.\d{3})+$/.test(input)) return null;
    normalized=input.replaceAll('.','');
  }
  const valueNumber=Number(normalized);
  return Number.isFinite(valueNumber)?valueNumber:null;
}

const makeAccumulator=()=>({sum:0,count:0,min:Infinity,max:-Infinity,rows:0});
function update(acc,value,aggregation) {
  acc.rows++;
  if(aggregation==='count'){
    if(String(value??'').trim())acc.count++;
    return false;
  }
  const n=parsePivotNumber(value);
  if(n===null)return true;
  acc.sum+=n;acc.count++;
  acc.min=Math.min(acc.min,n);acc.max=Math.max(acc.max,n);
  return false;
}
function finish(acc,agg){
  if(!acc)return null;
  if(agg==='count')return acc.count;
  if(!acc.count)return null;
  if(agg==='sum')return acc.sum;
  if(agg==='avg')return acc.sum/acc.count;
  if(agg==='min')return acc.min;
  return acc.max;
}
const tupleKey=parts=>JSON.stringify(parts);
const label=value=>String(value??'').trim()||'(puste)';
const compareStrings=(a,b)=>a.localeCompare(b,'pl',{numeric:true,sensitivity:'base'});

export function buildPivot(table,{
  rowFields=[],columnField='',valueField='',aggregation='sum',
  filterField='',filterValue=''
}={}){
  if(!table?.headers?.length || !Array.isArray(table.rows))throw new Error('Wczytaj dane tabelaryczne.');
  if(!Array.isArray(rowFields)||!rowFields.length||rowFields.length>2)throw new Error('Wybierz jedną lub dwie kolumny dla wierszy.');
  if(!Object.hasOwn(AGGREGATIONS,aggregation))throw new Error('Nieobsługiwana funkcja podsumowania.');
  const find=(field)=>table.headers.findIndex(x=>x===field);
  for(const field of [...rowFields,columnField,valueField,filterField].filter(Boolean))
    if(find(field)<0)throw new Error('Nie znaleziono kolumny: '+field);
  if(new Set(rowFields).size!==rowFields.length)throw new Error('Nie można wybrać tej samej kolumny wierszy dwa razy.');
  if(!valueField)throw new Error('Wybierz kolumnę z wartościami.');
  if(rowFields.includes(valueField)||rowFields.includes(columnField) || columnField===valueField)
    throw new Error('Pola wierszy, kolumn i wartości powinny być różne.');
  if(filterField && filterValue==='')throw new Error('Wybierz wartość filtra lub wyłącz filtr.');
  const rowIndices=rowFields.map(find),colIndex=columnField?find(columnField):-1,valueIndex=find(valueField),filterIndex=filterField?find(filterField):-1;
  const rowGroups=new Map(), colKeys=new Set(), allByColumn=new Map();
  const grand=makeAccumulator();
  let invalidNumbers=0,filteredRows=0;
  const valuesForRows=[];
  for(const row of table.rows){
    if(filterIndex>=0 && label(row.cells[filterIndex])!==filterValue)continue;
    filteredRows++;
    const rowParts=rowIndices.map(i=>label(row.cells[i]));
    const key=tupleKey(rowParts);
    let group=rowGroups.get(key);
    if(!group){
      group={labels:rowParts,byColumn:new Map(),total:makeAccumulator()};
      rowGroups.set(key,group);
      if(rowGroups.size>MAX_PIVOT_ROWS)throw new Error('Za dużo grup wierszy (limit '+MAX_PIVOT_ROWS+'). Wybierz filtr lub inną kategorię.');
    }
    const columnValue=colIndex>=0?label(row.cells[colIndex]):null;
    if(colIndex>=0){
      colKeys.add(columnValue);
      if(colKeys.size>MAX_PIVOT_COLUMNS)throw new Error('Za dużo kategorii kolumn (limit '+MAX_PIVOT_COLUMNS+'). Zmień pole lub wybierz filtr.');
    }
    const v=row.cells[valueIndex];
    invalidNumbers+=update(group.total,v,aggregation)?1:0;
    update(grand,v,aggregation);
    if(colIndex>=0){
      if(!group.byColumn.has(columnValue))group.byColumn.set(columnValue,makeAccumulator());
      update(group.byColumn.get(columnValue),v,aggregation);
      if(!allByColumn.has(columnValue))allByColumn.set(columnValue,makeAccumulator());
      update(allByColumn.get(columnValue),v,aggregation);
    }
    valuesForRows.push(row);
  }
  if(!filteredRows)throw new Error('Filtr nie zwrócił żadnych rekordów.');
  if(aggregation!=='count'&&grand.count===0)throw new Error('Wybrane pole nie zawiera poprawnych liczb. Sprawdź format danych lub wybierz „Licznik”.');
  const columnValues=[...colKeys].sort(compareStrings);
  const rowItems=[...rowGroups.values()].sort((a,b)=>{
    for(let i=0;i<a.labels.length;i++){const order=compareStrings(a.labels[i],b.labels[i]);if(order)return order;}
    return 0;
  });
  const headers=[...rowFields,...(colIndex>=0?columnValues:[AGGREGATIONS[aggregation]+' z '+valueField]),...(colIndex>=0?['Wynik ogółem']:[])];
  const rows=rowItems.map(group=>{
    const numbers=colIndex>=0?columnValues.map(key=>finish(group.byColumn.get(key),aggregation)):[finish(group.total,aggregation)];
    return {labels:group.labels,values:numbers,total:finish(group.total,aggregation)};
  });
  const grandValues=colIndex>=0?columnValues.map(key=>finish(allByColumn.get(key),aggregation)):[finish(grand,aggregation)];
  return {
    headers,rows,columnValues,
    grandValues,grandTotal:finish(grand,aggregation),
    totalRows:filteredRows,skippedNumbers:invalidNumbers,
    numericCount:grand.count,aggregation,rowFields,columnField,valueField,
    filterField,filterValue,
    selectedRows:valuesForRows,
    includeRowTotal:colIndex>=0
  };
}

export function getPivotFilterValues(table,field){
  if(!field||!table.headers.includes(field))return [];
  const i=table.headers.indexOf(field);
  return [...new Set(table.rows.map(r=>label(r.cells[i])))].sort(compareStrings);
}

export function getPivotWorkbook(table,result){
  const titleCell=s=>({value:String(s),type:String,fontWeight:'bold',textColor:'#FFFFFF',backgroundColor:'#146C43'});
  const textCell=s=>({value:String(s??''),type:String});
  const numberCell=n=>n===null?{value:'',type:String}:{value:n,type:Number,format:'#,##0.00'});
  const rowCells=row=>row.map(textCell);
  const left=result.rowFields.length;
  const reportRows=[
    result.headers.map(titleCell),
    ...result.rows.map(row=>[
      ...rowCells(row.labels),
      ...row.values.map(numberCell),
      ...(result.includeRowTotal?[numberCell(row.total)]:[])
    ]),
    [
      titleCell('SUMA KOŃCOWA'),
      ...Array.from({length:left-1},()=>titleCell('')),
      ...result.grandValues.map(numberCell),
      ...(result.includeRowTotal?[numberCell(result.grandTotal)]:[])
    ]
  ];
  const dataHeaders=table.headers.map(titleCell);
  const selectedRows=result.selectedRows.map(row=>row.cells.map((v,i)=>{
    if(i===table.headers.indexOf(result.valueField) && result.aggregation!=='count'){
      const number=parsePivotNumber(v);if(number!==null)return numberCell(number);
    }
    return textCell(v);
  }));
  const instructions=[
    ['Typ raportu','Podsumowanie agregacyjne (nie natywna tabela przestawna)'],
    ['Dane źródłowe','Arkusz Dane — zaznacz w nim dowolną komórkę'],
    ['Krok 1','Excel → Wstaw → Tabela przestawna → Z tabeli/zakresu'],
    ['Krok 2','Potwierdź zakres arkusza Dane i wybierz Nowy arkusz'],
    ['Wiersze',result.rowFields.join(' → ')],
    ['Kolumny',result.columnField||'(brak)'],
    ['Wartości',result.valueField],
    ['Agregacja',AGGREGATIONS[result.aggregation]],
    ['Filtr raportu',result.filterField||'(brak)'],
    ['Wybrana wartość filtra',result.filterValue||'(brak)'],
    ['Ważne','W Excelu dopasuj wybraną funkcję przez Ustawienia pola wartości.'],
    ['Uwaga','Podsumowanie to statyczne liczby. Po edycji Dane utwórz/odśwież natywną tabelę przestawną.']
  ];
  return [
    {
      sheet:'Podsumowanie',data:reportRows,
      columns:result.headers.map((_,i)=>({width:i<left?25:20})),
      stickyRowsCount:1,showGridLines:false
    },
    {
      sheet:'Dane',data:[dataHeaders,...selectedRows],
      columns:table.headers.map(()=>({width:22})),
      stickyRowsCount:1,showGridLines:false
    },
    {
      sheet:'Instrukcja',data:[
        ['Pole','Opis'].map(titleCell),
        ...instructions.map(row=>row.map(textCell))
      ],columns:[{width:24},{width:80}],stickyRowsCount:1,showGridLines:false
    }
  ];
}
