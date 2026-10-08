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
  return {
    recipient: serviceContact.email,
    subject,
    message,
    replyTo: email
  };
}


/** Przesyłka JSON do FormSubmit — adres odbiorcy po stronie serwisu, nie od użytkownika. */
export function getInquiryEndpoint(){
  return 'https://formsubmit.co/ajax/'+serviceContact.email;
}

export function buildInquiryPayload(data={}){
  const inquiry=createProjectInquiry(data);
  // FormSubmit dokumentuje dodatkowe pola _subject, _replyto, _honey, _template i _captcha.
  // Honey pot chroni przed najprostszymi automatycznymi zgłoszeniami.
  return {
    name: clean(data.name,90) || 'Użytkownik ExcelNaLuzie',
    email: inquiry.replyTo,
    message: inquiry.message,
    _subject: inquiry.subject,
    _replyto: inquiry.replyTo,
    _template: 'table',
    _captcha: 'false',
    _honey: clean(data._honey,80)
  };
}

/** FormSubmit zwraca success zarówno jako boolean, jak i napis. */
export function isInquiryAccepted(status, body){
  if(status<200 || status>=300 || !body || typeof body!=='object')return false;
  return body.success===true || body.success==='true';
}
