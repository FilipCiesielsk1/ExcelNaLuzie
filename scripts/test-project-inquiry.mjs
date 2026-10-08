import test from 'node:test';
import assert from 'node:assert/strict';
import {createProjectInquiry,buildInquiryPayload,getInquiryEndpoint,isInquiryAccepted} from '../src/utils/projectInquiry.js';
import {serviceContact,serviceCategories} from '../src/data/serviceConfig.js';
const sample={
 category:'Automatyzacja Excel / VBA',
 name:'Anna / Firma',
 email:'anna@example.com',
 inputType:'XLSX / XLSM',
 currentWork:'Ręczny raport z kilku plików',
 timeframe:'Do ustalenia',
 budget:'500–1500 zł',
 description:'Chcę automatycznie łączyć miesięczne raporty z kilku oddziałów i eksportować podsumowanie.'
};

test('Przygotowuje poprawny temat i pełną treść e-mail',()=>{
 const inquiry=createProjectInquiry(sample);
 assert.equal(inquiry.recipient,serviceContact.email);
 assert.match(inquiry.subject,/ExcelNaLuzie/);
 assert.match(inquiry.message,/anna@example\.com/);
 assert.match(inquiry.message,/Ręczny raport z kilku plików/);
 assert.match(inquiry.message,/Wiadomość jest zapytaniem informacyjnym/);
 assert.equal(inquiry.recipient,'excelnaluzie@gmail.com');
 assert.equal(inquiry.replyTo,'anna@example.com');
 assert.match(inquiry.message,/automatycznie łączyć miesięczne raporty/);
});
test('Błędny e-mail jest blokowany',()=>{
 assert.throws(()=>createProjectInquiry({...sample,email:'abc@@xyz'}),/e-mail/);
 assert.throws(()=>createProjectInquiry({...sample,email:''}),/e-mail/);
});
test('Wymagany jest opis zawierający minimum 30 znaków',()=>{
 assert.throws(()=>createProjectInquiry({...sample,description:'Proszę o makro'}),/30/);
});
test('Nieznana kategoria nie przechodzi walidacji',()=>{
 assert.throws(()=>createProjectInquiry({...sample,category:'Płatna subskrypcja'}),/rodzaj projektu/);
 assert.equal(serviceCategories.length,5);
});
test('Opcjonalne pola mogą być puste',()=>{
 const inquiry=createProjectInquiry({...sample,name:'',currentWork:'',budget:'',timeframe:''});
 assert.match(inquiry.message,/Nie podano/);
 assert.match(inquiry.message,/Nie określono/);
});
test('Długi opis nie jest ograniczany przez mailto',()=>{
 const inquiry=createProjectInquiry({...sample,description:'Z'.repeat(1400)});
 assert.ok(inquiry.message.includes('Z'.repeat(1400)));
 assert.equal(inquiry.mailto,undefined);
});
test('Payload FormSubmit zawiera wszystkie istotne dane, bez dodatkowych odbiorców',()=>{
 const payload=buildInquiryPayload({...sample,name:'Test &cc=niepożądany@adres.pl',description:'Opis z &subject=Nowy i nową linią\noraz wrażliwymi znakami.'});
 assert.equal(payload.email,'anna@example.com');
 assert.equal(payload._replyto,'anna@example.com');
 assert.equal(payload._captcha,'false');
 assert.equal(payload._template,'table');
 assert.equal(payload._honey,'');
 assert.match(payload.message,/E-mail do odpowiedzi: anna@example\.com/);
 assert.ok(!Object.hasOwn(payload,'_cc'));
 assert.equal(getInquiryEndpoint(),'https://formsubmit.co/ajax/excelnaluzie@gmail.com');
});
test('Odpowiedzi FormSubmit interpretowane są bez fałszywego sukcesu',()=>{
 assert.equal(isInquiryAccepted(200,{success:true}),true);
 assert.equal(isInquiryAccepted(201,{success:'true'}),true);
 assert.equal(isInquiryAccepted(200,{success:'false',message:'Activation required'}),false);
 assert.equal(isInquiryAccepted(400,{success:true}),false);
 assert.equal(isInquiryAccepted(200,{}),false);
 assert.equal(isInquiryAccepted(200,null),false);
});
test('Ochrona honeypot przechodzi przez payload',()=>{
 const payload=buildInquiryPayload({...sample,_honey:'http://bots.example'});
 assert.equal(payload._honey,'http://bots.example');
});
