---
layout: ../../layouts/ArticleLayout.astro
title: "SORTUJ w Excelu — dynamiczne sortowanie danych"
description: "Jak działa SORTUJ w polskim Excelu. Sortowanie rosnące i malejące, wybór kolumny oraz łączenie z FILTRUJ i UNIKATOWE."
slug: "sortuj-podstawy"
category: "Formuły dynamiczne"
categorySlug: "formuly/dynamiczne"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> funkcja SORTUJ zwraca posortowaną kopię zakresu i nie zmienia kolejności danych źródłowych.</div>

<div class="formula">=SORTUJ(A2:C100;2;1)</div>

Formuła sortuje zakres A2:C100 według drugiej kolumny rosnąco.

## Jak czytać argumenty?

Pierwszy argument to tablica do posortowania. Drugi wskazuje numer kolumny lub wiersza używanego do sortowania. Trzeci określa kierunek: 1 oznacza rosnąco, a -1 malejąco.

<div class="formula">=SORTUJ(A2:C100;2;-1)</div>

Ten wariant sortuje po drugiej kolumnie malejąco.

## Najprostsze sortowanie jednej kolumny

<div class="formula">=SORTUJ(A2:A100)</div>

Jeżeli pomijasz opcjonalne argumenty, Excel sortuje rosnąco.

## SORTUJ razem z UNIKATOWE

Bardzo częsty wzorzec to uporządkowana lista bez duplikatów:

<div class="formula">=SORTUJ(UNIKATOWE(A2:A100))</div>

Po zmianie danych lista automatycznie zmieni długość i kolejność.

## SORTUJ razem z FILTRUJ

<div class="formula">=SORTUJ(FILTRUJ(A2:C100;C2:C100="Gotowe");2;-1)</div>

Najpierw pozostają tylko rekordy Gotowe, a potem wynik jest sortowany według drugiej kolumny malejąco.

## Dlaczego nie użyć zwykłego sortowania z menu?

Klasyczne sortowanie zmienia kolejność danych źródłowych. SORTUJ tworzy niezależny wynik, więc świetnie nadaje się do raportów, paneli i list pomocniczych.

## Numer kolumny jest liczony względem przekazanej tablicy

Jeśli tablica to B2:D100, numer 1 oznacza kolumnę B, a nie kolumnę A arkusza. To częsty punkt nieporozumień.

## Kiedy lepsze jest SORTUJ.WEDŁUG?

Gdy chcesz sortować wynik według kolumny, która nie musi znajdować się w zwracanej tablicy, albo chcesz łatwiej budować wielopoziomowe sortowanie.

SORTUJ jest najlepsze do prostego i czytelnego porządkowania dynamicznych list.