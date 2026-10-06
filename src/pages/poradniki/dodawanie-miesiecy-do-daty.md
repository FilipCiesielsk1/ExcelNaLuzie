---
layout: ../../layouts/ArticleLayout.astro
title: "Jak dodać miesiące do daty w Excelu?"
description: "Jak przesunąć datę o jeden, kilka lub ujemną liczbę miesięcy w Excelu. Gotowa formuła NR.SER.DATY i przykłady."
slug: "dodawanie-miesiecy-do-daty"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "Liczba miesięcy między datami"
    url: "/poradniki/liczba-miesiecy-miedzy-datami/"
    category: "Daty"
  - title: "Ostatni dzień miesiąca"
    url: "/poradniki/ostatni-dzien-miesiaca/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby dodać miesiące do daty</strong>, użyj funkcji NR.SER.DATY.</div>

<div class="formula">=NR.SER.DATY(A2;3)</div>

Formuła zwróci datę przypadającą trzy miesiące po dacie z A2.

## Dodaj jeden miesiąc

<div class="formula">=NR.SER.DATY(A2;1)</div>

## Odejmij miesiące

Użyj liczby ujemnej:

<div class="formula">=NR.SER.DATY(A2;-6)</div>

To zwróci datę przypadającą sześć miesięcy wcześniej.

## Liczba miesięcy w osobnej komórce

Jeżeli liczba miesięcy znajduje się w B2:

<div class="formula">=NR.SER.DATY(A2;B2)</div>

Dzięki temu użytkownik może sterować przesunięciem bez zmiany formuły.

## Dlaczego nie dodawać 30 dni?

Miesiące mają różną długość, więc dodanie 30 lub 31 dni nie oznacza tego samego co przesunięcie o jeden miesiąc.

NR.SER.DATY została stworzona właśnie do takich operacji kalendarzowych.
