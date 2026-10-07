---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć wystąpienia tekstu w Excelu?"
description: "Jak policzyć, ile razy wybrany tekst występuje w jednej komórce w Excelu. Gotowa formuła z DŁ i PODSTAW oraz przykład."
slug: "policz-wystapienia-tekstu"
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

## Przykład na konkretnym tekście

Jeżeli A1 zawiera:

`abc-123-abc-xyz-abc`

to formuła:

<div class="formula">=(DŁ(A1)-DŁ(PODSTAW(A1;"abc";"")))/DŁ("abc")</div>

zwróci 3.

PODSTAW usuwa z tekstu wszystkie wystąpienia „abc”. Różnica długości mówi, ile znaków zniknęło, a podzielenie przez długość szukanej frazy daje liczbę wystąpień.

## Uważaj na pustą komórkę z kryterium

Jeżeli szukany tekst jest w B1 i B1 jest puste, dzielenie przez DŁ(B1) oznacza dzielenie przez zero.

Możesz temu zapobiec:

<div class="formula">=JEŻELI(B1="";0;(DŁ(A1)-DŁ(PODSTAW(A1;B1;"")))/DŁ(B1))</div>

## Wielkość liter ma znaczenie

PODSTAW rozróżnia wielkie i małe litery. „ABC” i „abc” są dla tej metody różnymi ciągami znaków.

Jeżeli dane mają różny zapis liter, najpierw warto je ujednolicić albo świadomie zdecydować, że wielkość liter ma być częścią kryterium.

## Nakładające się fragmenty

Ta metoda liczy wystąpienia usuwane przez PODSTAW i nie nadaje się dobrze do sytuacji, w których szukane fragmenty nachodzą na siebie.

Dla typowych kodów, separatorów, słów i znaków specjalnych działa jednak bardzo wygodnie i nie wymaga makr.
