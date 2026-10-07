---
layout: ../../layouts/ArticleLayout.astro
title: "Jak podzielić tekst po przecinku w Excelu?"
description: "Jak rozdzielić tekst z jednej komórki na części przed i po przecinku. Gotowe formuły dla Microsoft 365, Excel 2024 i starszych wersji."
slug: "podziel-tekst-po-przecinku"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak pobrać tekst przed znakiem w Excelu?"
    url: "/poradniki/tekst-przed-znakiem/"
    category: "Tekst"
  - title: "Jak pobrać tekst po znaku w Excelu?"
    url: "/poradniki/tekst-po-znaku/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Jeżeli chcesz rozdzielić tekst na dwie kolumny</strong>, pobierz część przed przecinkiem i część po przecinku osobnymi formułami.</div>

<div class="formula">=TEKST.PRZED(A1;",")</div>

oraz:

<div class="formula">=TEKST.PO(A1;",")</div>

Dla `Kowalski,Jan` otrzymasz `Kowalski` oraz `Jan`.

## Przykład

| A | B — przed przecinkiem | C — po przecinku |
|---|---|---|
| Kowalski,Jan | Kowalski | Jan |
| Warszawa,Polska | Warszawa | Polska |
| ABC,123 | ABC | 123 |

## Usuń spację po przecinku

Jeżeli dane wyglądają tak: `Kowalski, Jan`, po przecinku pozostanie spacja.

Możesz wskazać jako separator przecinek razem ze spacją:

<div class="formula">=TEKST.PO(A1;", ")</div>

## Starsze wersje Excela

Część przed przecinkiem:

<div class="formula">=LEWY(A1;ZNAJDŹ(",";A1)-1)</div>

Część po przecinku:

<div class="formula">=PRAWY(A1;DŁ(A1)-ZNAJDŹ(",";A1))</div>

## A co z kilkoma przecinkami?

Te przykłady są najlepsze, gdy interesuje Cię pierwszy separator. Przy bardziej złożonych danych warto rozważyć osobny schemat dopasowany do liczby i położenia przecinków.

## Przykład: nazwisko i imię

Jeżeli A1 zawiera:

`Kowalski, Jan`

to:

<div class="formula">=TEKST.PRZED(A1;",")</div>

zwróci „Kowalski”, a:

<div class="formula">=TEKST.PO(A1;", ")</div>

zwróci „Jan”.

W drugim wzorze separatorem jest przecinek razem ze spacją, dzięki czemu wynik nie zaczyna się od niepotrzebnego odstępu.

## Co gdy przecinka nie ma?

Jeżeli dane są niejednolite, część wierszy może nie zawierać separatora. Wtedy warto zabezpieczyć formułę:

<div class="formula">=JEŻELI.BŁĄD(TEKST.PRZED(A1;",");A1)</div>

Jeżeli przecinek występuje, dostaniesz tekst przed nim. Jeśli go nie ma, formuła zwróci całą zawartość A1.

## Pierwszy czy ostatni przecinek?

TEKST.PRZED i TEKST.PO mogą pracować z konkretnym wystąpieniem separatora. Wartość -1 oznacza ostatnie wystąpienie:

<div class="formula">=TEKST.PO(A1;",";-1)</div>

To przydaje się np. przy ścieżkach, rozbudowanych nazwach albo danych typu „miasto, region, kraj”.

## Starszy Excel i wiele separatorów

W starszych wersjach kombinacja LEWY, PRAWY i ZNAJDŹ dobrze działa dla pierwszego przecinka. Przy wielu separatorach formuła szybko robi się jednak skomplikowana.

Jeżeli pracujesz w Microsoft 365 lub Excelu 2024, TEKST.PRZED i TEKST.PO są zwykle prostsze do czytania i późniejszego utrzymania.
