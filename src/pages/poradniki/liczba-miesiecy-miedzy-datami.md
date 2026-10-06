---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć liczbę miesięcy między datami w Excelu?"
description: "Jak obliczyć liczbę pełnych miesięcy między dwiema datami w Excelu. Gotowa formuła DATA.RÓŻNICA i praktyczny przykład."
slug: "liczba-miesiecy-miedzy-datami"
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
  - title: "Różnica między datami"
    url: "/poradniki/roznica-miedzy-datami/"
    category: "Daty"
  - title: "Dodawanie miesięcy do daty"
    url: "/poradniki/dodawanie-miesiecy-do-daty/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby policzyć pełne miesiące między dwiema datami</strong>, użyj funkcji DATA.RÓŻNICA z jednostką "m".</div>

<div class="formula">=DATA.RÓŻNICA(A2;B2;"m")</div>

A2 to data początkowa, a B2 to data końcowa.

## Co oznacza „pełne miesiące”?

Funkcja liczy tylko zakończone miesiące.

Jeżeli od daty początkowej minęły 2 miesiące i 20 dni, wynik nadal będzie równy 2.

## Przykład

| Data od | Data do | Pełne miesiące |
|---|---|---:|
| 15.01.2026 | 15.04.2026 | 3 |
| 15.01.2026 | 10.04.2026 | 2 |

## Miesiące i pozostałe dni

Jeżeli chcesz pokazać wynik w formie „3 miesiące i 5 dni”, możesz policzyć oba elementy osobno:

<div class="formula">=DATA.RÓŻNICA(A2;B2;"m")</div>

oraz liczbę dni pozostałych po pełnych miesiącach:

<div class="formula">=DATA.RÓŻNICA(A2;B2;"md")</div>

## Uwaga na kolejność dat

Data początkowa musi być wcześniejsza od końcowej. W przeciwnym razie DATA.RÓŻNICA może zwrócić błąd.
