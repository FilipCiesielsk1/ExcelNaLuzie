---
layout: ../../layouts/ArticleLayout.astro
title: "Jak wyznaczyć ostatni dzień miesiąca w Excelu?"
description: "Jak znaleźć ostatni dzień miesiąca dla dowolnej daty w Excelu. Gotowa formuła NR.SER.OST.DN.MIES i praktyczne warianty."
slug: "ostatni-dzien-miesiaca"
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
  - title: "Pierwszy dzień miesiąca"
    url: "/poradniki/pierwszy-dzien-miesiaca/"
    category: "Daty"
  - title: "Dodawanie miesięcy do daty"
    url: "/poradniki/dodawanie-miesiecy-do-daty/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby wyznaczyć ostatni dzień miesiąca</strong> dla daty w A2, użyj funkcji NR.SER.OST.DN.MIES.</div>

<div class="formula">=NR.SER.OST.DN.MIES(A2;0)</div>

Argument 0 oznacza miesiąc, w którym znajduje się data z A2.

## Ostatni dzień następnego miesiąca

<div class="formula">=NR.SER.OST.DN.MIES(A2;1)</div>

Argument 1 przesuwa wynik o jeden miesiąc do przodu.

## Ostatni dzień poprzedniego miesiąca

<div class="formula">=NR.SER.OST.DN.MIES(A2;-1)</div>

Ujemny argument przesuwa datę wstecz.

## Przykład

| Data wejściowa | Formuła z 0 | Wynik |
|---|---|---|
| 06.10.2026 | NR.SER.OST.DN.MIES(A2;0) | 31.10.2026 |
| 10.02.2026 | NR.SER.OST.DN.MIES(A3;0) | 28.02.2026 |

Excel sam uwzględnia różną liczbę dni w miesiącach oraz lata przestępne.

## Typowe zastosowanie

Ostatni dzień miesiąca przydaje się przy terminach płatności, raportach miesięcznych, zamykaniu okresów i budowaniu zakresów dat.
