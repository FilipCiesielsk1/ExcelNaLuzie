---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć wystąpienia tekstu w Excelu?"
description: "Jak policzyć, ile razy wybrany tekst występuje w jednej komórce w Excelu. Gotowa formuła z DŁ i PODSTAW oraz przykład."
slug: "policz-wystapienia-tekstu"
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
  - title: "Jak zamienić fragment tekstu w Excelu?"
    url: "/poradniki/zamien-fragment-tekstu/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Aby policzyć liczbę wystąpień tekstu „abc” w jednej komórce</strong>, porównaj długość tekstu przed i po usunięciu szukanego fragmentu.</div>

<div class="formula">=(DŁ(A1)-DŁ(PODSTAW(A1;"abc";"")))/DŁ("abc")</div>

Dla wartości `abc-123-abc-abc` wynikiem będzie `3`.

## Jak działa formuła?

Najpierw `DŁ(A1)` mierzy długość oryginalnego tekstu.

`PODSTAW(A1;"abc";"")` usuwa wszystkie wystąpienia `abc`, a druga funkcja DŁ mierzy tekst po usunięciu.

Różnica długości mówi, ile znaków zostało usuniętych. Po podzieleniu przez długość szukanego tekstu otrzymujesz liczbę jego wystąpień.

## Szukany tekst w osobnej komórce

Jeżeli szukany fragment znajduje się w B1:

<div class="formula">=(DŁ(A1)-DŁ(PODSTAW(A1;B1;"")))/DŁ(B1)</div>

## Przykład

| Tekst | Szukany fragment | Wynik |
|---|---|---:|
| abc-123-abc-abc | abc | 3 |
| test test test | test | 3 |
| 2026/01/01 | / | 2 |

## Ważne ograniczenie

Jeżeli komórka z szukanym tekstem jest pusta, dzielenie przez jego długość spowoduje błąd. W praktycznym arkuszu warto zabezpieczyć taki przypadek.
