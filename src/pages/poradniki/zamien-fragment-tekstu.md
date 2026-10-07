---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zamienić fragment tekstu w Excelu?"
description: "Jak zastąpić wybrane słowo, znak lub fragment tekstu inną wartością w Excelu. Przykłady funkcji PODSTAW i ZASTĄP."
slug: "zamien-fragment-tekstu"
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
  - title: "Jak sprawdzić, czy komórka zawiera tekst?"
    url: "/poradniki/czy-komorka-zawiera-tekst/"
    category: "Tekst"
  - title: "Jak policzyć wystąpienia tekstu w Excelu?"
    url: "/poradniki/policz-wystapienia-tekstu/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Jeżeli znasz tekst, który chcesz zamienić</strong>, najczęściej użyj funkcji PODSTAW.</div>

<div class="formula">=PODSTAW(A1;"stary";"nowy")</div>

Dla wartości `stary produkt` otrzymasz `nowy produkt`.

## Zamiana konkretnego znaku

Aby zamienić myślniki na ukośniki:

<div class="formula">=PODSTAW(A1;"-";"/")</div>

Dla `2026-10-06` wynikiem będzie `2026/10/06`.

## Zamień tylko wybrane wystąpienie

Przykład — zamień drugi myślnik:

<div class="formula">=PODSTAW(A1;"-";"/";2)</div>

## Gdy znasz pozycję, a nie tekst

Jeżeli chcesz zastąpić określoną liczbę znaków od konkretnej pozycji, użyj funkcji ZASTĄP.

<div class="formula">=ZASTĄP(A1;4;3;"XYZ")</div>

Formuła zaczyna od czwartego znaku, usuwa trzy znaki i wstawia w ich miejsce `XYZ`.

## PODSTAW czy ZASTĄP?

Użyj `PODSTAW`, gdy znasz fragment tekstu, który ma zostać znaleziony.

Użyj `ZASTĄP`, gdy ważna jest pozycja znaków w ciągu.

## Usuwanie fragmentu tekstu

PODSTAW może również usuwać tekst. Wystarczy jako nowy tekst podać pusty ciąg:

<div class="formula">=PODSTAW(A1;"-";"")</div>

Dla wartości `AB-123-CD` wynikiem będzie `AB123CD`.

## Przykład czyszczenia danych

Jeżeli numery telefonów są zapisane ze spacjami, możesz je usunąć:

<div class="formula">=PODSTAW(A1;" ";"")</div>

To często pierwszy krok przed porównywaniem identyfikatorów, telefonów albo kodów pochodzących z różnych systemów.

## PODSTAW rozróżnia wielkość liter

Funkcja zamienia dokładnie wskazany ciąg. „abc” i „ABC” nie są tym samym tekstem.

Jeżeli dane mają różny zapis wielkich i małych liter, ujednolić je przed zamianą albo wykonaj osobne zamiany.

## ZASTĄP przy stałej pozycji

ZASTĄP jest lepsze, gdy nie znasz konkretnego tekstu do usunięcia, ale wiesz, gdzie się znajduje.

<div class="formula">=ZASTĄP(A1;1;3;"")</div>

Ta formuła usuwa pierwsze trzy znaki niezależnie od ich wartości.

## Która funkcja jest bezpieczniejsza?

Jeśli szukasz konkretnego fragmentu — PODSTAW. Jeśli operujesz na pozycji i liczbie znaków — ZASTĄP.

W czyszczeniu danych warto wybierać regułę, która odpowiada rzeczywistej strukturze danych, zamiast dopasowywać formułę tylko do jednego przykładowego wiersza.
