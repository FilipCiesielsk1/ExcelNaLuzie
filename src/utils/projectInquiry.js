import {serviceContact,serviceCategories} from '../data/serviceConfig.js';
const clean=(value,max)=>String(value??'').replace(/\r\n?/g,'\n').trim().slice(0,max);
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function createProjectInquiry(data={}) {
  const category=clean(data.category,100);
  const email=clean(data.email,180);
  const name=clean(data.name,90);
  const description=clean(data.description,1400);
  const inputType=clean(data.inputType,80);
  const currentWork=clean(data.currentWork,140);
  const timeframe=clean(data.timeframe,100);
  const budget=clean(data.budget,100);
  if(!serviceCategories.some(item=>item.value===category))
    throw new Error('Wybierz rodzaj projektu.');
  if(!emailPattern.test(email))
    throw new Error('Podaj prawidłowy adres e-mail do kontaktu.');
  if(description.length<30)
    throw new Error('Opisz problem w co najmniej 30 znakach.');
  const subject='[ExcelNaLuzie] Zapytanie: '+category;
  const message=[
    'Zapytanie dotyczące przyszłego projektu Excel/VBA','',
    'Rodzaj problemu: '+category,
    'Imię lub firma: '+(name||'Nie podano'),
    'E-mail do odpowiedzi: '+email,
    'Formaty danych: '+(inputType||'Nie podano'),
    'Obecny sposób pracy: '+(currentWork||'Nie podano'),
    'Orientacyjny termin: '+(timeframe||'Nie określono'),
    'Orientacyjny budżet: '+(budget||'Nie określono'),'',
    'Opis potrzeb i oczekiwanego rezultatu:',
    description,'',
    'Wiadomość jest zapytaniem informacyjnym, nie zamówieniem ani akceptacją płatnej oferty.'
  ].join('\n');
  const uri='mailto:'+serviceContact.email+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(message);
  return {recipient:serviceContact.email,subject,message,mailto:uri.length<=1950?uri:null,tooLongForMailto:uri.length>1950};
}
