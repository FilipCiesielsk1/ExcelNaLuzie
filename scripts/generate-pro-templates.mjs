import writeExcelFile from 'write-excel-file/node';
import dataValidation from '@onparallel/write-excel-file-data-validation';
import { mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const DIR='public/downloads/szablony';
await mkdir(DIR,{recursive:true});
const GREEN='#107C41', DARK='#0A4528', PALE='#E7F4EB', BLUE='#E9F2FF', AMBER='#FFF1D0', RED='#FCE5E5';
const HEADER={backgroundColor:GREEN,textColor:'#FFFFFF',fontWeight:'bold',height:32,wrap:true};
const MONEY='#,##0.00 "zł"', NUMBER='#,##0', PCT='0.0%', DATE='dd.mm.yyyy';
const h=(...texts)=>texts.map(text=>({value:text,...HEADER}));
const n=(value,format=MONEY)=>({value,type:Number,format});
const date=(year,month,day)=>({value:new Date(Date.UTC(year,month-1,day)),type:Date,format:DATE});
const f=(formula,format=MONEY)=>({value:formula,type:'Formula',format,textColor:DARK});
const blank=()=>null;
const range=(r1,c1,r2,c2)=>({from:{row:r1,column:c1},to:{row:r2,column:c2}});
const list=(r1,c1,r2,values)=>({cellRange:range(r1,c1,r2,c1),validation:{type:'list',values,allowBlank:true,error:'Wybierz wartość z listy.'}});
const integer=(r1,c1,r2)=>({cellRange:range(r1,c1,r2,c1),validation:{type:'integer',operator:'>=',value:0,error:'Wpisz liczbę nieujemną.'}});
const shade=(r1,c1,r2,c2,formula,color)=>({cellRange:range(r1,c1,r2,c2),condition:{formula},style:{backgroundColor:color}});
const widths=(...v)=>v.map(width=>({width}));
const info=(title,steps)=>({sheet:'Instrukcja',columns:widths(92),data:[
 [h('ExcelNaLuzie.pl | '+title)],
 [{value:'SZABLON PRO V1 • Excel 2016+ • bez VBA',fontWeight:'bold',textColor:DARK,height:28}],
 ...steps.map((text,i)=>[{value:(i+1)+'. '+text,wrap:true,height:34}]),
 [{value:'Pola wpisywane przez użytkownika są w arkuszach danych. Kolumny obliczeniowe zawierają formuły — nie nadpisuj ich.',wrap:true,height:36}],
 [{value:'Przykłady i dokumentacja: https://excelnaluzie.pl/szablony/',wrap:true,height:30}]
]});
const sheet=(name,headers,data,w,validations=[],conditionalFormatting=[])=>({
 sheet:name,data:[h(...headers),...data],columns:widths(...w),stickyRowsCount:1,
 ...(validations.length?{dataValidation:validations}:{}),
 ...(conditionalFormatting.length?{conditionalFormatting}:{})
});
const dashboard=(title,rows,cols=[38,25,24,23,25,25])=>({
 sheet:'Dashboard',
 columns:widths(...cols),
 data:[
 [{value:'ExcelNaLuzie.pl  |  '+title,backgroundColor:DARK,textColor:'#FFFFFF',fontWeight:'bold',height:39},...Array.from({length:Math.max(0,cols.length-1)},blank)],
 [{value:'Zielone / jasne pola: dane i parametry. Pozostałe: KPI obliczane automatycznie.',textColor:DARK,wrap:true,height:27},...Array.from({length:Math.max(0,cols.length-1)},blank)],
 ...rows
 ]
});
const save=async(name,sheets)=>{
 const file=join(DIR,name+'.xlsx');
 console.log('PRO_START',name,sheets.map(x=>[x.sheet,x.conditionalFormatting?.length||0]));
 await writeExcelFile(sheets,{fontFamily:'Aptos',fontSize:11,features:[dataValidation]}).toFile(file);
 const size=(await stat(file)).size;
 if(size<4500)throw Error('XLSX podejrzanie mały: '+file+' '+size);
 console.log('PRO_TEMPLATE',file,size);
};

function sales(){
 const reps=['Anna','Marek','Ewa','Piotr'],products=['Licencja','Audyt danych','Dashboard','Automatyzacja VBA'],regions=['Północ','Południe','Zachód','Wschód'];
 const data=Array.from({length:121},(_,idx)=>{
  const r=idx+2,active=idx<28,qty=1+(idx%5),price=[800,1600,3400,5200][idx%4],cost=[140,550,1050,1850][idx%4];
  return [active?date(2026,1+(idx%12),1+(idx*3)%25):blank(),active?reps[idx%4]:blank(),active?'Klient '+String(1+idx%14).padStart(2,'0'):blank(),active?products[idx%4]:blank(),active?n(qty,NUMBER):blank(),active?n(price):blank(),f('=IF(OR(E'+r+'="",F'+r+'=""),"",E'+r+'*F'+r+')'),active?n(cost):blank(),f('=IF(OR(E'+r+'="",H'+r+'=""),"",E'+r+'*H'+r+')'),f('=IF(G'+r+'="","",G'+r+'-I'+r+')'),active?regions[idx%4]:blank()];
 });
 const targets=Array.from({length:12},(_,m)=>[n(m+1,NUMBER),n(16000+3500*(m%4)),f('=SUMIFS(\'Sprzedaż\'!$G$2:$G$122,\'Sprzedaż\'!$A$2:$A$122,">="&DATE(Dashboard!$B$5,A'+(m+2)+',1),\'Sprzedaż\'!$A$2:$A$122,"<"&DATE(Dashboard!$B$5,A'+(m+2)+'+1,1))'),f('=IF(B'+(m+2)+'=0,0,C'+(m+2)+'/B'+(m+2)+')',PCT)]);
 const months=Array.from({length:12},(_,m)=>{const r=10+m;return [n(m+1,NUMBER),f('=SUMIFS(\'Sprzedaż\'!$G$2:$G$122,\'Sprzedaż\'!$A$2:$A$122,">="&DATE($B$5,A'+r+',1),\'Sprzedaż\'!$A$2:$A$122,"<"&DATE($B$5,A'+r+'+1,1))'),f('=IFERROR(VLOOKUP(A'+r+',\'Cele\'!$A$2:$B$13,2,FALSE),0)'),f('=B'+r+'-C'+r),f('=SUMIFS(\'Sprzedaż\'!$J$2:$J$122,\'Sprzedaż\'!$A$2:$A$122,">="&DATE($B$5,A'+r+',1),\'Sprzedaż\'!$A$2:$A$122,"<"&DATE($B$5,A'+r+'+1,1))')];});
 const db=dashboard('Sprzedaż / wynik i realizacja celu',[
  h('Parametry','Wartość','Wyniki roczne','Wartość','Kontrola','Wartość'),
  [{value:'Rok →',textColor:DARK},null,null,null,null,null],
  ['Rok analizy',n(2026,NUMBER),'Przychód',f('=SUM(B10:B21)'),'Marża brutto',f('=SUM(E10:E21)')],
  ['Liczba transakcji',f('=COUNTIFS(\'Sprzedaż\'!$A$2:$A$122,">="&DATE(B5,1,1),\'Sprzedaż\'!$A$2:$A$122,"<"&DATE(B5+1,1,1))',NUMBER),'Realizacja celu',f('=IFERROR(D5/SUM(C10:C21),0)',PCT),'Średni koszyk',f('=IFERROR(D5/B6,0)')],
  [null,null,null,null,null,null],
  [null,null,null,null,null,null],
  h('Miesiąc','Przychód','Cel','Odchylenie','Marża',''),
  ...months
 ]);
 const shSales=sheet('Sprzedaż',['Data','Handlowiec','Klient','Produkt','Ilość','Cena jedn.','Przychód','Koszt jedn.','Koszt','Marża','Region'],data,[18,17,23,23,13,18,19,18,18,18,15],
  [list(2,2,122,reps),list(2,4,122,products),list(2,11,122,regions),integer(2,5,122)],
  [shade(2,10,122,10,'$J2<0',RED)]);
 const plan=sheet('Cele',['Miesiąc (1-12)','Cel sprzedaży','Wykonanie','Realizacja'],targets,[22,21,21,19],[],[shade(2,4,13,4,'$D2<0.75',AMBER)]);
 return [db,shSales,plan,info('Dashboard sprzedaży',[
 'Arkusz Sprzedaż: wprowadź datę, handlowca, produkt, ilość, cenę jednostkową i koszt jednostkowy.',
 'Kolumny Przychód, Koszt i Marża są obliczane automatycznie; nie nadpisuj formuł.',
 'Arkusz Cele: zmieniaj miesięczne plany sprzedażowe.',
 'Na Dashboardzie w B5 wybierz rok, aby przeliczyć zestawienie miesięczne i roczne.',
 'Przy nowych rekordach wykorzystaj przygotowane puste wiersze (do 122).'
 ])];
}
function gantt(){
 const base=new Date(Date.UTC(2026,9,1));
 const timeline=Array.from({length:35},(_,i)=>({value:new Date(base.getTime()+i*86400000),type:Date,format:'dd',backgroundColor:GREEN,textColor:'#FFF',fontWeight:'bold'}));
 const statuses=['Nowe','W toku','Blokada','Gotowe'];
 const letter=(value)=>{let out='';while(value>0){out=String.fromCharCode(65+(value-1)%26)+out;value=Math.floor((value-1)/26);}return out;};
 const tasks=Array.from({length:80},(_,i)=>{
 const r=i+2,active=i<14,start=1+(i*2)%25,finish=start+2+(i%6),status=statuses[i%4],progress=[0,0.3,0.5,1][i%4];
 return [active?'Zadanie '+(i+1):null,active?date(2026,10,start):null,active?date(2026,10,Math.min(31,finish)):null,active?status:null,active?n(progress,PCT):null,...Array.from({length:35},(_,k)=>{const col=letter(k+6);return f('=IF(OR($B'+r+'="",$C'+r+'=""),"",IF(AND('+col+'$1>=$B'+r+','+col+'$1<=$C'+r+'),IF($D'+r+'="Gotowe","●","■"),""))','@');})];
 });
 const ganttSheet={
 sheet:'Harmonogram',columns:widths(31,17,17,17,14,...Array(35).fill(5)),stickyRowsCount:1,
 data:[[...h('Zadanie','Start','Koniec','Status','Postęp'),...timeline],...tasks],
 dataValidation:[list(2,4,81,statuses)],
 conditionalFormatting:[
  shade(2,6,81,40,'AND(F$1>=$B2,F$1<=$C2,$D2="Gotowe")',PALE),
  shade(2,6,81,40,'AND(F$1>=$B2,F$1<=$C2,$D2<>"Gotowe")',BLUE),
  shade(2,1,81,5,'AND($A2<>"",$C2<TODAY(),$D2<>"Gotowe")',RED),
  shade(2,4,81,4,'$D2="Blokada"',AMBER)
 ]
 };
 const db=dashboard('Harmonogram i status projektu',[
  h('KPI','Wynik','KPI','Wynik','KPI','Wynik'),
  ['Wszystkie zadania',f('=COUNTA(\'Harmonogram\'!$A$2:$A$81)',NUMBER),'Ukończone',f('=COUNTIF(\'Harmonogram\'!$D$2:$D$81,"Gotowe")',NUMBER),'Po terminie',f('=COUNTIFS(\'Harmonogram\'!$C$2:$C$81,"<"&TODAY(),\'Harmonogram\'!$D$2:$D$81,"<>Gotowe",\'Harmonogram\'!$A$2:$A$81,"<>")',NUMBER)],
  ['Średni postęp',f('=IFERROR(AVERAGE(\'Harmonogram\'!$E$2:$E$81),0)',PCT),'W toku',f('=COUNTIF(\'Harmonogram\'!$D$2:$D$81,"W toku")',NUMBER),'Zablokowane',f('=COUNTIF(\'Harmonogram\'!$D$2:$D$81,"Blokada")',NUMBER)],
  [null,null,null,null,null,null],
  h('Legenda','Znaczenie','Wskazówka','Użycie',null,null),
  ['■','Aktywny zakres','Oś czasu','Symbole zależne od dat',null,null],
  ['●','Ukończone','Opóźnienia','Licznik w Dashboardzie',null,null],
  ['Oś czasu','35 dni od 1.10.2026','Edycja zakresu','Sprawdź harmonogram',null,null]
 ]);
 return [db,ganttSheet, sheet('Zespół',['Osoba','Rola','Obszar'],[['Anna','Kierownik','Projekt'],['Piotr','Analityk','Dane'],['Marek','Developer','VBA'],['Ewa','Tester','QA']],[20,25,30]),info('Harmonogram Gantta',[
 'W arkuszu Harmonogram wpisuj nazwę zadania, datę startu, datę końca, status i postęp 0–100%.',
 'Symbole w osi czasu pojawiają się automatycznie w dniach od startu do końca zadania.',
 'Zmień status na Gotowe, aby symbole zmieniły się na kółka. Opóźnienia sprawdzisz w Dashboardzie.',
 'Dashboard liczy zadania, postęp i opóźnienia; przygotowano 80 wierszy.',
 'Oś czasu obejmuje 35 dni od 1 października 2026; rozszerz daty osi dla innych terminów.'
 ])];
}
function warehouse(){
 const products=['Kabel USB-C','Monitor 27','Laptop 14','Stacja dokująca','Mysz','Klawiatura','Dysk SSD','Adapter HDMI','Biurko','Słuchawki','Drukarka','Router'];
 const sku=i=>'SKU-'+String(i+1).padStart(3,'0');
 const movements=Array.from({length:130},(_,i)=>i<40?[date(2026,9+(i%2),1+(i%24)),sku(i%12),i%4===0?'Wydanie':'Przyjęcie',n(2+(i%8),NUMBER),'Dostawa / zamówienie '+(i+1)]:[null,null,null,null,null]);
 const prodRows=Array.from({length:70},(_,i)=>{
  const r=i+2,active=i<12;
  return [active?sku(i):null,active?products[i]:null,active?['Akcesoria','IT','Wyposażenie'][i%3]:null,active?n(10+(i%6)*4,NUMBER):null,active?n(8+i%4,NUMBER):null,active?n([24,899,3900,520,55,129,319,49,1249,199,650,399][i]):null,
    f('=IF(A'+r+'="","",SUMIFS(\'Ruchy\'!$D$2:$D$131,\'Ruchy\'!$B$2:$B$131,A'+r+',\'Ruchy\'!$C$2:$C$131,"Przyjęcie"))',NUMBER),
    f('=IF(A'+r+'="","",SUMIFS(\'Ruchy\'!$D$2:$D$131,\'Ruchy\'!$B$2:$B$131,A'+r+',\'Ruchy\'!$C$2:$C$131,"Wydanie"))',NUMBER),
    f('=IF(A'+r+'="","",D'+r+'+G'+r+'-H'+r+')',NUMBER),
    f('=IF(A'+r+'="","",I'+r+'*F'+r+')'),
    f('=IF(A'+r+'="","",IF(I'+r+'<0,"Brak towaru",IF(I'+r+'<=E'+r+',"Zamów","OK")))')
  ];
 });
 const db=dashboard('Magazyn i poziomy zapasów',[
  h('KPI','Wynik','KPI','Wynik','KPI','Wynik'),
  ['Liczba SKU',f('=COUNTA(\'Produkty\'!$A$2:$A$71)',NUMBER),'Wartość zapasów',f('=SUM(\'Produkty\'!$J$2:$J$71)'),'Do zamówienia',f('=COUNTIF(\'Produkty\'!$K$2:$K$71,"Zamów")',NUMBER)],
  ['Stany ujemne',f('=COUNTIF(\'Produkty\'!$K$2:$K$71,"Brak towaru")',NUMBER),'Przyjęcia',f('=SUM(\'Produkty\'!$G$2:$G$71)',NUMBER),'Wydania',f('=SUM(\'Produkty\'!$H$2:$H$71)',NUMBER)],
  [null,null,null,null,null,null],
  h('Status','Zasada','Wskazówka','Gdzie?',null,null),
  ['OK','Stan > próg','Wpisz przyjęcie / wydanie','Ruchy',null,null],
  ['Zamów','Stan <= próg','Dostosuj minimalny zapas','Produkty',null,null],
  ['Brak towaru','Stan < 0','Sprawdź niezarejestrowany ruch','Ruchy',null,null]
 ]);
 return [db,
 sheet('Produkty',['SKU','Produkt','Kategoria','Stan pocz.','Próg min.','Cena netto','Przyjęcia','Wydania','Stan bieżący','Wartość','Status'],prodRows,[18,28,20,16,14,16,15,15,17,20,17],
 [integer(2,4,71),integer(2,5,71)],[shade(2,9,71,11,'AND($A2<>"",$I2<=$E2)',AMBER),shade(2,9,71,11,'AND($A2<>"",$I2<0)',RED)]),
 sheet('Ruchy',['Data','SKU','Rodzaj','Ilość','Uwagi'],movements,[19,18,20,14,42],[list(2,3,131,['Przyjęcie','Wydanie']),integer(2,4,131)]),
 info('Magazyn i stany',[
 'W arkuszu Produkty uzupełnij SKU, nazwę, stan początkowy, próg zapasu i cenę netto.',
 'W arkuszu Ruchy dopisuj każde przyjęcie lub wydanie; SKU musi dokładnie odpowiadać produktowi.',
 'Stan, wartość i alert Zamów/Brak towaru liczą się automatycznie.',
 'Na Dashboardzie sprawdzisz wartości magazynu, zapasy do zamówienia oraz sumy ruchów.',
 'Przygotowano 70 produktów i 130 pozycji ruchów; dla większych zakresów rozszerz formuły.'
 ])];
}
function invoices(){
 const clients=['Alfa','Beta','Gamma','Delta','Omega','Sigma'];
 const data=Array.from({length:120},(_,i)=>{
 const r=i+2,active=i<26,paid=i%5===0;
 return [active?'FV/2026/'+String(i+1).padStart(3,'0'):null,active?date(2026,1+i%9,4+(i%20)):null,active?date(2026,1+i%9,14+(i%13)):null,active?clients[i%6]:null,active?n(1200+i%7*450):null,active?n(i%5===0?0.08:0.23,PCT):null,
 f('=IF(E'+r+'="","",ROUND(E'+r+'*(1+F'+r+'),2))'),active?n(paid?1200+i%7*450+(1200+i%7*450)*(i%5===0?0.08:0.23):i%4===0?500:0):null,
 f('=IF(G'+r+'="","",MAX(0,G'+r+'-H'+r+'))'),
 f('=IF(A'+r+'="","",IF(I'+r+'<=0,"Opłacona",IF(C'+r+'<TODAY(),"Przeterminowana","Do zapłaty")))'),
 f('=IF(J'+r+'="Przeterminowana",TODAY()-C'+r+',0)',NUMBER)
 ];
 });
 const db=dashboard('Faktury i należności',[
 h('KPI','Wynik','KPI','Wynik','KPI','Wynik'),
 ['Suma brutto',f('=SUM(\'Faktury\'!$G$2:$G$121)'),'Do odzyskania',f('=SUM(\'Faktury\'!$I$2:$I$121)'),'Po terminie',f('=SUMIF(\'Faktury\'!$J$2:$J$121,"Przeterminowana",\'Faktury\'!$I$2:$I$121)')],
 ['Liczba faktur',f('=COUNTA(\'Faktury\'!$A$2:$A$121)',NUMBER),'Przeterminowane',f('=COUNTIF(\'Faktury\'!$J$2:$J$121,"Przeterminowana")',NUMBER),'Opłacone',f('=COUNTIF(\'Faktury\'!$J$2:$J$121,"Opłacona")',NUMBER)],
 [null,null,null,null,null,null],
 h('Grupa','Należności','Grupa','Należności',null,null),
 ['Do 7 dni',f('=SUMIFS(\'Faktury\'!$I$2:$I$121,\'Faktury\'!$C$2:$C$121,">="&TODAY(),\'Faktury\'!$C$2:$C$121,"<="&TODAY()+7)'), 'Powyżej 30 dni',f('=SUMIFS(\'Faktury\'!$I$2:$I$121,\'Faktury\'!$C$2:$C$121,"<"&TODAY()-30)'),null,null],
 ['8–30 dni',f('=SUMIFS(\'Faktury\'!$I$2:$I$121,\'Faktury\'!$C$2:$C$121,">"&TODAY()+7,\'Faktury\'!$C$2:$C$121,"<="&TODAY()+30)'), 'Bez zaległości',f('=COUNTIF(\'Faktury\'!$J$2:$J$121,"Opłacona")',NUMBER),null,null]
 ]);
 return [db, sheet('Faktury',['Numer','Data wyst.','Termin','Kontrahent','Netto','VAT %','Brutto','Zapłacono','Pozostało','Status','Dni po terminie'],data,[20,18,18,21,17,14,18,18,18,20,19],[],[shade(2,9,121,11,'$J2="Przeterminowana"',RED),shade(2,9,121,11,'$J2="Opłacona"',PALE)]),
 sheet('Kontrahenci',['Firma','E-mail','Uwagi'],clients.map((c,i)=>[c,c.toLowerCase()+'@example.com','Przykładowy kontrahent '+(i+1)]),[26,35,44]),
 info('Kontrola faktur i płatności',[
 'W arkuszu Faktury uzupełnij numer, datę wystawienia, termin, kontrahenta, kwotę netto i stawkę VAT.',
 'W kolumnie Zapłacono wpisuj sumę rzeczywistych wpłat (możliwa płatność częściowa).',
 'Brutto, pozostało do zapłaty, status i dni opóźnienia obliczają się automatycznie.',
 'Dashboard przedstawia łączną wartość, należności, zaległości i terminowe płatności.',
 'Arkusz jest ewidencją pomocniczą — nie zastępuje programu księgowego ani rejestrów podatkowych.'
 ])];
}
function crm(){
 const stages=['Nowy','Kontakt','Oferta','Negocjacje','Wygrana','Przegrana'];
 const names=['ACME','Beta Soft','Centrum ABC','Delta','Gamma','Nord','Omega'];
 const data=Array.from({length:120},(_,i)=>{
 const r=i+2,active=i<28,stage=stages[i%6];
 return [active?'OP-'+String(i+1).padStart(3,'0'):null,active?names[i%7]+' '+(Math.floor(i/7)+1):null,active?['Anna','Marek','Ewa'][i%3]:null,active?stage:null,active?n(3500+(i%9)*1600):null,
 f('=IF(D'+r+'="","",IF(D'+r+'="Nowy",0.1,IF(D'+r+'="Kontakt",0.25,IF(D'+r+'="Oferta",0.5,IF(D'+r+'="Negocjacje",0.75,IF(D'+r+'="Wygrana",1,0))))))',PCT),
 f('=IF(E'+r+'="","",E'+r+'*F'+r+')'),active?date(2026,10+(i%2),2+i%25):null,
 active?['Wyślij ofertę','Przedstaw demo','Telefon','Analiza wymagań'][i%4]:null,active?date(2026,10,1+i%28):null,
 f('=IF(A'+r+'="","",IF(OR(D'+r+'="Wygrana",D'+r+'="Przegrana"),"Zamknięte",IF(J'+r+'<TODAY(),"Pilny kontakt","W planie")))')
 ];
 });
 const db=dashboard('CRM / lejek sprzedaży',[
 h('KPI','Wynik','KPI','Wynik','KPI','Wynik'),
 ['Szanse łącznie',f('=COUNTA(\'Szanse\'!$A$2:$A$121)',NUMBER),'Prognoza ważona',f('=SUM(\'Szanse\'!$G$2:$G$121)'),'Wygrane',f('=COUNTIF(\'Szanse\'!$D$2:$D$121,"Wygrana")',NUMBER)],
 ['Wartość lejka',f('=SUM(\'Szanse\'!$E$2:$E$121)'),'Pilne kontakty',f('=COUNTIF(\'Szanse\'!$K$2:$K$121,"Pilny kontakt")',NUMBER),'Przegrane',f('=COUNTIF(\'Szanse\'!$D$2:$D$121,"Przegrana")',NUMBER)],
 [null,null,null,null,null,null],
 h('Etap','Liczba','Suma wartości','Prognoza',null,null),
 ...stages.map((v,i)=>{const r=8+i;return [v,f('=COUNTIF(\'Szanse\'!$D$2:$D$121,A'+r+')',NUMBER),f('=SUMIF(\'Szanse\'!$D$2:$D$121,A'+r+',\'Szanse\'!$E$2:$E$121)'),f('=SUMIF(\'Szanse\'!$D$2:$D$121,A'+r+',\'Szanse\'!$G$2:$G$121)'),null,null]})
 ]);
 return [db, sheet('Szanse',['ID','Klient','Opiekun','Etap','Wartość','Prawdop.','Prognoza','Zamknięcie','Następny krok','Termin kontaktu','Alert'],data,[18,24,18,17,20,16,19,19,28,20,21],[list(2,4,121,stages)],[shade(2,10,121,11,'$K2="Pilny kontakt"',RED),shade(2,10,121,11,'$K2="Zamknięte"',PALE)]),
 sheet('Kontakty',['Klient','E-mail','Telefon','Notatka'],names.map((x,i)=>[x,'kontakt'+i+'@example.com','555-000-'+String(i+1).padStart(3,'0'),'Przykładowy klient']),[26,34,23,42]),
 info('CRM i pipeline',[
 'W arkuszu Szanse dodaj klienta, opiekuna, etap, wartość, datę zamknięcia oraz termin kontaktu.',
 'Etap wybieraj z listy — prawdopodobieństwo i prognoza ważona zmienią się automatycznie.',
 'Pilne kontakty są wyróżniane, a zamknięte szanse nie wymagają ponagleń.',
 'Dashboard grupuje wartości według etapów, liczy prognozę i sygnalizuje pilne działania.',
 'W arkuszu Kontakty uzupełnij dane relacyjne; przykład nie przechowuje danych online.'
 ])];
}
function quotes(){
 const names=['Audyt','Raport KPI','Automatyzacja VBA','Szkolenie','Import CSV','Dashboard','Czyszczenie danych','Konsultacja','Model finansowy','Dokumentacja'];
 const price=[650,2800,4200,900,1200,3400,1600,380,5200,650],cost=[200,1050,1780,200,450,1300,560,90,2400,140];
 const prices=names.map((name,i)=>['US-'+String(i+1).padStart(3,'0'),name,n(price[i]),n(cost[i])]);
 const items=Array.from({length:25},(_,i)=>{
 const r=i+2,act=i<6;return [
  act?'US-'+String(i+1).padStart(3,'0'):null,
  f('=IF(A'+r+'="","",IFERROR(VLOOKUP(A'+r+',\'Cennik\'!$A$2:$D$11,2,FALSE),"Nieznany kod"))','@'),
  act?n(1+i%3,NUMBER):null,
  f('=IF(A'+r+'="","",IFERROR(VLOOKUP(A'+r+',\'Cennik\'!$A$2:$D$11,3,FALSE),0))'),
  act?n(i%3===0?0.1:0,PCT):null,
  f('=IF(A'+r+'="","",IFERROR(VLOOKUP(A'+r+',\'Cennik\'!$A$2:$D$11,4,FALSE),0))'),
  f('=IF(C'+r+'="","",ROUND(C'+r+'*D'+r+'*(1-E'+r+'),2))'),
  f('=IF(C'+r+'="","",C'+r+'*F'+r+')'),
  f('=IF(G'+r+'="","",G'+r+'-H'+r+')'),
  act?n(0.23,PCT):null,
  f('=IF(G'+r+'="","",ROUND(G'+r+'*(1+J'+r+'),2))')
 ];});
 const db=dashboard('Kalkulator ofert i marży',[
 h('Parametr','Wartość','Suma netto','Wartość','Marża','Wartość'),
 ['Numer oferty','OF/2026/001','Wartość netto',f('=SUM(\'Kalkulator\'!$G$2:$G$26)'),'Marża zł',f('=SUM(\'Kalkulator\'!$I$2:$I$26)')],
 ['Klient','Klient przykładowy','Wartość brutto',f('=SUM(\'Kalkulator\'!$K$2:$K$26)'),'Marża %',f('=IFERROR(F4/D4,0)',PCT)],
 ['Data oferty',date(2026,10,9),'Koszt',f('=SUM(\'Kalkulator\'!$H$2:$H$26)'),'Rabat łącznie',f('=SUMPRODUCT(\'Kalkulator\'!$C$2:$C$26,\'Kalkulator\'!$D$2:$D$26,\'Kalkulator\'!$E$2:$E$26)')],
 [null,null,null,null,null,null],
 [{value:'Wskazówka',...HEADER},{value:'Opis',...HEADER},null,null,null,null],
 ['Edycja cen','Cennik — źródło cen i kosztów',null,null,null,null],
 ['Dobór pozycji','Wybierz kod usługi w Kalkulatorze',null,null,null,null],
 ['Podgląd marży','Sprawdź koszty i rabaty przed wysłaniem',null,null,null,null]
 ]);
 return [db,
 sheet('Kalkulator',['Kod','Pozycja','Ilość','Cena netto','Rabat','Koszt jedn.','Netto po rabacie','Koszt sum.','Marża netto','VAT %','Brutto'],items,[17,28,14,20,14,19,24,19,20,14,20],[list(2,1,26,prices.map(r=>r[0])),integer(2,3,26)],[shade(2,9,26,9,'AND($A2<>"",$I2<0)',RED)]),
 sheet('Cennik',['Kod','Pozycja','Cena netto','Koszt jedn.'],prices,[18,29,23,23]),
 info('Kalkulator ofert / wycen',[
 'W arkuszu Cennik zmieniaj ceny netto i koszty usług lub produktów.',
 'W arkuszu Kalkulator wybieraj kod pozycji, wpisz ilość, rabat i stawkę VAT.',
 'Opis, cena i koszt pobierają się automatycznie z cennika; inne kwoty obliczają formuły.',
 'Dashboard pokazuje cenę netto, brutto, koszt, marżę i sumaryczny rabat.',
 'Dane i stawki są przykładowe; przed wykorzystaniem oferty sprawdź właściwą stawkę VAT.'
 ])];
}
const specs=[
 ['dashboard-sprzedazy',sales],
 ['harmonogram-gantta',gantt],
 ['magazyn-stany',warehouse],
 ['kontrola-faktur',invoices],
 ['crm-sprzedaz',crm],
 ['kalkulator-ofert',quotes]
];
for(const [slug,make] of specs)await save(slug,make());
