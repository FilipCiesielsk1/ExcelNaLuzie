import test from 'node:test';
import assert from 'node:assert/strict';
import {createProjectInquiry} from '../src/utils/projectInquiry.js';
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
 assert.ok(inquiry.mailto?.startsWith('mailto:kontakt@processxpert.pl?subject='));
 assert.match(decodeURIComponent(inquiry.mailto),/automatycznie łączyć miesięczne raporty/);
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
test('Nie ma ograniczenia długości formularza ukrytego przez transport pocztowy',()=>{
 const inquiry=createProjectInquiry({...sample,description:'Z'.repeat(1400)});
 assert.equal(inquiry.tooLongForMailto,true);
 assert.equal(inquiry.mailto,null);
 assert.ok(inquiry.message.includes('Z'.repeat(1400)));
});
test('Temat i treść kodowane bez niebezpiecznych nowych parametrów URI',()=>{
 const inquiry=createProjectInquiry({...sample,name:'Test &cc=niepożądany@adres.pl',description:'Opis z &subject=Nowy i nową linią\noraz wrażliwymi znakami.'});
 assert.ok(inquiry.mailto || inquiry.tooLongForMailto);
 if(inquiry.mailto){
   assert.equal(inquiry.mailto.split('?').length,2);
   assert.equal((inquiry.mailto.match(/&body=/g)||[]).length,1);
   assert.equal((inquiry.mailto.match(/&cc=/g)||[]).length,0);
 }
});
