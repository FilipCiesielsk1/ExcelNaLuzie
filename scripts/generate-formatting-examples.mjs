import writeExcelFile from 'write-excel-file/node';
import { mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dir='public/downloads/przyklady';
await mkdir(dir,{recursive:true});
const GREEN='#107C41', DARK='#073D23', LIGHT='#E7F3EB';
const h=value=>({value,backgroundColor:GREEN,textColor:'#FFFFFF',fontWeight:'bold',height:29});
const heading=(...names)=>names.map(h);
const col=(...widths)=>widths.map(width=>({width}));
const t=(v,format)=>({value:v,type:Date,format});
const n=(v,format)=>({value:v,type:Number,format});
const formula=(v,format)=>({value:v,type:'Formula',format});
const note=(...values)=>values.map((value)=>({value,wrap:true}));
const range=(row1,col1,row2,col2)=>({from:{row:row1,column:col1},to:{row:row2,column:col2}});
const cf=(cellRange,expr,color)=>({cellRange,condition:{formula:expr},style:{backgroundColor:color}});

const conditionalInstruction=[
  [h('ExcelNaLuzie • formatowanie warunkowe')],
  note('1. Zadania — zmień status lub termin, aby sprawdzić kolory całych wierszy.'),
  note('2. Czerwony = po terminie i status inny niż Gotowe; żółty = termin w ciągu 7 dni; zielony = Gotowe.'),
  note('3. Sprzedaż — kwoty ponad 1000 zł są podświetlone, możesz zmieniać wartości.'),
  note('4. Edycja reguł: Narzędzia główne → Formatowanie warunkowe → Zarządzaj regułami.'),
  note('5. Daty w Zadaniach są formułami TODAY(), więc po otwarciu pliku aktualizują się na bieżąco.'),
  note('6. Bez makr. Excel 2016 i nowsze. Poradniki: https://excelnaluzie.pl/formuly/formatowanie/')
];
const tasks=[
  heading('Zadanie','Termin','Osoba','Status'),
  ['Raport sprzedaży',formula('=TODAY()-3','dd.mm.yyyy'),'Anna','W toku'],
  ['Analiza kosztów',formula('=TODAY()+2','dd.mm.yyyy'),'Marek','W toku'],
  ['Prezentacja KPI',formula('=TODAY()+6','dd.mm.yyyy'),'Ewa','Nowe'],
  ['Zamknięcie miesiąca',formula('=TODAY()-1','dd.mm.yyyy'),'Anna','Gotowe'],
  ['Przegląd pliku',formula('=TODAY()+11','dd.mm.yyyy'),'Paweł','Nowe'],
  ['Import CSV',formula('=TODAY()-5','dd.mm.yyyy'),'Ewa','W toku'],
  ['Porządek w danych',formula('=TODAY()+1','dd.mm.yyyy'),'Marek','W toku'],
  ['Odbiór narzędzia',formula('=TODAY()-14','dd.mm.yyyy'),'Paweł','Gotowe'],
  ['Wysyłka raportu',formula('=TODAY()+7','dd.mm.yyyy'),'Anna','Nowe'],
  ['Aktualizacja szablonu',formula('=TODAY()+17','dd.mm.yyyy'),'Ewa','W toku']
];
const sales=[
  heading('Produkt','Region','Kwota'),
  ['Dysk SSD','Północ',n(980,'#,##0.00 "zł"')],
  ['Monitor','Południe',n(1500,'#,##0.00 "zł"')],
  ['Klawiatura','Północ',n(250,'#,##0.00 "zł"')],
  ['Laptop','Wschód',n(3690,'#,##0.00 "zł"')],
  ['Mysz','Zachód',n(145,'#,##0.00 "zł"')],
  ['Biurko','Południe',n(1290,'#,##0.00 "zł"')],
  ['Drukarka','Wschód',n(1100,'#,##0.00 "zł"')],
  ['Kabel','Północ',n(80,'#,##0.00 "zł"')]
];
const workbookRules=[
  {sheet:'Instrukcja',data:conditionalInstruction,columns:col(98)},
  {sheet:'Zadania',data:tasks,columns:col(29,20,20,20),stickyRowsCount:1,
   conditionalFormatting:[
     cf(range(2,1,11,4),'AND($B2<>"",$B2<TODAY(),$D2<>"Gotowe")','#FCE8E6'),
     cf(range(2,1,11,4),'AND($B2>=TODAY(),$B2<=TODAY()+7,$D2<>"Gotowe")','#FFF1CE'),
     cf(range(2,1,11,4),'$D2="Gotowe"','#D8EFE0')
   ]},
  {sheet:'Sprzedaż',data:sales,columns:col(28,20,20),stickyRowsCount:1,
   conditionalFormatting:[{cellRange:range(2,3,9,3),condition:{operator:'>',value:1000},style:{backgroundColor:'#D8EFE0'}}]}
];
const workbookFormats=[
  {sheet:'Instrukcja',data:[
    [h('ExcelNaLuzie • formatowanie liczb i dat')],
    note('1. Format nie zmienia wartości komórki; zobacz oryginalną liczbę na pasku formuły.'),
    note('2. Liczby: kolumna B ukrywa zera, a C dodaje jednostkę kg.'),
    note('3. Czas: zsumuj 13:45 oraz 13:45. Format [h]:mm wyświetli 27:30.'),
    note('4. Daty: format mmmm pokazuje miesiąc słownie, a dd.mm.yyyy zwykłą datę.'),
    note('5. Bez makr. Excel 2016 i nowsze. Poradniki: https://excelnaluzie.pl/formuly/formatowanie/')
  ],columns:col(95)},
  {sheet:'Liczby',data:[
    heading('Pozycja','Zero ukryte','Masa','Komentarz'),
    ['Produkt A',n(0,'0;-0;;@'),n(25,'0 "kg"'),'Zero nadal jest liczbą'],
    ['Produkt B',n(4,'0;-0;;@'),n(7,'0 "kg"'),'Można sumować masę'],
    ['Produkt C',n(-2,'0;-0;;@'),n(13,'0 "kg"'),'Liczba ujemna jest widoczna'],
    ['Produkt D',n(0,'0;-0;;@'),n(0,'0 "kg"'),'Format jednostki nie zmienia danych'],
    ['Produkt E',n(12,'0;-0;;@'),n(110,'0 "kg"'),'Sprawdź pasek formuły'],
    ['Produkt F',n(3,'0;-0;;@'),n(14,'0 "kg"'),'Edytuj wartości testowe']
  ],columns:col(21,20,18,41)},
  {sheet:'Czas',data:[
    heading('Zmiana','Czas trwania','Opis'),
    ['Zmiana 1',n(13.75/24,'[h]:mm'),'13 godzin 45 minut'],
    ['Zmiana 2',n(13.75/24,'[h]:mm'),'13 godzin 45 minut'],
    [h('Suma'),formula('=SUM(B2:B3)','[h]:mm'),'Wynik 27:30']
  ],columns:col(21,23,39)},
  {sheet:'Daty',data:[
    heading('Zdarzenie','Data numeryczna','Miesiąc słownie','Data opisowa'),
    ['Start projektu',t(new Date(Date.UTC(2026,0,5)),'dd.mm.yyyy'),t(new Date(Date.UTC(2026,0,5)),'mmmm'),t(new Date(Date.UTC(2026,0,5)),'d mmmm yyyy')],
    ['Koniec kwartału',t(new Date(Date.UTC(2026,2,31)),'dd.mm.yyyy'),t(new Date(Date.UTC(2026,2,31)),'mmmm'),t(new Date(Date.UTC(2026,2,31)),'d mmmm yyyy')],
    ['Wakacje',t(new Date(Date.UTC(2026,6,15)),'dd.mm.yyyy'),t(new Date(Date.UTC(2026,6,15)),'mmmm'),t(new Date(Date.UTC(2026,6,15)),'d mmmm yyyy')],
    ['Raport',t(new Date(Date.UTC(2026,9,8)),'dd.mm.yyyy'),t(new Date(Date.UTC(2026,9,8)),'mmmm'),t(new Date(Date.UTC(2026,9,8)),'d mmmm yyyy')]
  ],columns:col(26,23,24,32)}
];
for(const [filename,sheets] of [
  ['formatowanie-warunkowe-przyklady.xlsx',workbookRules],
  ['formatowanie-liczb-dat-przyklady.xlsx',workbookFormats]
]){
  const file=join(dir,filename);
  await writeExcelFile(sheets,{fontFamily:'Aptos',fontSize:11}).toFile(file);
  const size=(await stat(file)).size;
  if(size<1000)throw new Error('Wygenerowany XLSX jest podejrzanie mały: '+filename);
  console.log('Generated',file,size,'bytes');
}
