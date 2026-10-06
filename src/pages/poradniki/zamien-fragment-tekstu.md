---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zamienić fragment tekstu w Excelu?"
description: "Jak zastąpić wybrane słowo, znak lub fragment tekstu inną wartością w Excelu. Przykłady funkcji PODSTAW i ZASTĄP."
slug: "zamien-fragment-tekstu"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-06"
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
