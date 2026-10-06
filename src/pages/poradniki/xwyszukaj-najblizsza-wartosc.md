---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ — jak znaleźć najbliższą wartość?"
description: "Jak znaleźć dokładną lub najbliższą mniejszą albo większą wartość za pomocą X.WYSZUKAJ. Przykład z progami i trybem dopasowania."
slug: "xwyszukaj-najblizsza-wartosc"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
related:
  - title: "X.WYSZUKAJ — prosty przykład"
    url: "/poradniki/xwyszukaj-podstawy/"
    category: "Wyszukiwanie"
  - title: "Jak znaleźć wartość w tabeli?"
    url: "/poradniki/jak-znalezc-wartosc-w-tabeli/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Aby zwrócić dokładne dopasowanie lub najbliższą mniejszą wartość</strong>, ustaw tryb dopasowania X.WYSZUKAJ na -1.</div>

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";-1)</div>

To przydatne np. przy progach rabatowych, podatkowych, prowizyjnych albo punktowych.

## Przykład z progami

| Próg | Rabat |
|---:|---:|
| 0 | 0% |
| 100 | 5% |
| 500 | 10% |
| 1000 | 15% |

Dla wartości 320 formuła zwróci rabat odpowiadający progowi 100, czyli 5%.

## Co oznacza -1?

Argument trybu dopasowania -1 oznacza: najpierw spróbuj znaleźć wartość dokładną, a jeśli jej nie ma, użyj następnej mniejszej wartości.

## Najbliższa większa wartość

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";1)</div>

Tryb 1 oznacza dokładne dopasowanie albo następną większą wartość.

## Dobra praktyka

Przy tabelach progowych warto układać wartości progów rosnąco. Ułatwia to kontrolę arkusza i zmniejsza ryzyko błędnej interpretacji danych.
