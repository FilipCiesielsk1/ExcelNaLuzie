---
layout: ../../layouts/ArticleLayout.astro
title: "Jak usunąć pierwsze znaki w Excelu?"
description: "Usuń pierwsze 1, 2, 3 lub dowolną liczbę znaków z komórki w Excelu za pomocą prostej formuły."
slug: "usun-pierwsze-znaki"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "3 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak usunąć ostatnie znaki w Excelu?"
    url: "/poradniki/usun-ostatnie-znaki/"
    category: "Tekst"
  - title: "Jak pobrać tekst po znaku w Excelu?"
    url: "/poradniki/tekst-po-znaku/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Aby usunąć pierwsze 3 znaki</strong> z tekstu w komórce A1, użyj poniższej formuły.</div>

<div class="formula">=PRAWY(A1;DŁ(A1)-3)</div>

Dla wartości `ABC12345` wynikiem będzie `12345`.

## Jak działa ta formuła?

`DŁ(A1)` oblicza całkowitą liczbę znaków, a następnie odejmujemy liczbę znaków, które chcemy usunąć.

Funkcja `PRAWY` zwraca pozostałą część tekstu od prawej strony.

## Usuń dowolną liczbę znaków

Wystarczy zmienić `3` na inną liczbę.

Aby usunąć pierwsze 5 znaków:

<div class="formula">=PRAWY(A1;DŁ(A1)-5)</div>

## Liczba znaków w osobnej komórce

Jeżeli liczba znaków do usunięcia znajduje się w `B1`, użyj:

<div class="formula">=PRAWY(A1;DŁ(A1)-B1)</div>

Dzięki temu możesz zmieniać liczbę usuwanych znaków bez edytowania formuły.

## Przykład

| Tekst | Usuń | Wynik |
|---|---:|---|
| ABC12345 | 3 | 12345 |
| PL-2026-001 | 3 | 2026-001 |
| TEST987 | 4 | 987 |

## Uwaga na zbyt dużą liczbę

Jeżeli spróbujesz usunąć więcej znaków, niż zawiera komórka, formuła zwróci błąd. Przy danych o zmiennej długości warto uwzględnić taki przypadek w formule.
