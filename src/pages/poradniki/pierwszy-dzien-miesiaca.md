---
layout: ../../layouts/ArticleLayout.astro
title: "Jak wyznaczyć pierwszy dzień miesiąca w Excelu?"
description: "Jak z dowolnej daty wyznaczyć pierwszy dzień tego samego miesiąca w Excelu. Prosta formuła z DATA, ROK i MIESIĄC."
slug: "pierwszy-dzien-miesiaca"
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
  - title: "Ostatni dzień miesiąca"
    url: "/poradniki/ostatni-dzien-miesiaca/"
    category: "Daty"
  - title: "Data na nazwę miesiąca"
    url: "/poradniki/data-na-nazwe-miesiaca/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby wyznaczyć pierwszy dzień miesiąca</strong> dla daty znajdującej się w A2, użyj DATA, ROK i MIESIĄC.</div>

<div class="formula">=DATA(ROK(A2);MIESIĄC(A2);1)</div>

Niezależnie od dnia w A2 wynikiem będzie pierwszy dzień tego samego miesiąca.

## Jak działa formuła?

ROK(A2) pobiera rok, a MIESIĄC(A2) numer miesiąca.

Funkcja DATA składa je ponownie, ustawiając dzień miesiąca na 1.

## Przykład

| Data wejściowa | Wynik |
|---|---|
| 18.10.2026 | 01.10.2026 |
| 31.01.2026 | 01.01.2026 |
| 05.12.2026 | 01.12.2026 |

## Pierwszy dzień bieżącego miesiąca

<div class="formula">=DATA(ROK(DZIŚ());MIESIĄC(DZIŚ());1)</div>

To rozwiązanie będzie aktualizować się automatycznie wraz z bieżącą datą.

## Do czego się przydaje?

Pierwszy dzień miesiąca jest wygodnym punktem odniesienia przy filtrowaniu raportów, budowaniu zakresów miesięcznych i porównywaniu okresów.
