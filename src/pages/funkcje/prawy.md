---
layout: ../../layouts/FunctionLayout.astro
slug: "prawy"
---

## Kiedy używać funkcji PRAWY?

PRAWY przydaje się do wydzielania końcówek kodów, czterech ostatnich cyfr identyfikatora i stałych sufiksów w danych importowanych z systemów.

<div class="formula">=PRAWY(A2;4)</div>

## Jak odczytać wynik?

Pierwszy wariant pobiera cztery ostatnie znaki, zachowując zera wiodące jako część tekstu. Drugi zwraca fragment po pierwszym myślniku, niezależnie od długości prefiksu.

## Rozszerzony przykład

<div class="formula">=PRAWY(A2;DŁ(A2)-ZNAJDŹ("-";A2))</div>

Drugi przykład oblicza długość fragmentu po pierwszym myślniku. Najpierw DŁ ustala długość całego tekstu, a ZNAJDŹ podaje pozycję separatora. Bez separatora formuła zgłosi błąd.

## Typowe błędy

Jeśli podasz więcej znaków niż ma komórka, otrzymasz cały tekst. Dla ujemnej liczby znaków pojawi się błąd; drugi wariant wymaga obecności separatora.

## Sprawdź na konkretnych danych

Dla A2 = `PL-00125` formuła `=PRAWY(A2;DŁ(A2)-ZNAJDŹ("-";A2))` zwróci **00125** jako tekst, zachowując zera wiodące. Dla krótszego kodu `PL-12` otrzymasz **12**, a dla `PL12` bez myślnika potrzebna jest obsługa błędu.

## Zastosowanie w praktyce

PRAWY świetnie sprawdza się przy stałej długości końcówki numeru seryjnego lub dokumentu. Jeśli kod kończy się pięcioma cyframi, możesz pobrać je bez rozbijania całego napisu na kolumny. Nie zakładaj jednak, że każdy identyfikator ma ten sam format. W bazie mogą pojawić się krótsze wartości, dodatkowe separatory lub niechciane spacje na końcu, przez które wynik nie będzie tym, czego oczekujesz. PRAWY zwraca fragment jako tekst; w przypadku numerów identyfikacyjnych to zaleta, ponieważ zera wiodące są ważne. Jeżeli masz kod `PL-00125`, wynik `00125` powinien pozostać napisem. Nie konwertuj go automatycznie na liczbę 125, jeżeli jest to klucz wyszukiwania.
