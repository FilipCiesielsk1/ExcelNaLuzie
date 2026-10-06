---
layout: ../../layouts/ArticleLayout.astro
title: "Jak usunąć ostatnie znaki w Excelu?"
description: "Jak usunąć ostatnie 1, 2, 3 lub dowolną liczbę znaków z komórki w Excelu za pomocą funkcji LEWY i DŁ."
slug: "usun-ostatnie-znaki"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak usunąć pierwsze znaki w Excelu?"
    url: "/poradniki/usun-pierwsze-znaki/"
    category: "Tekst"
  - title: "Jak pobrać tekst przed znakiem w Excelu?"
    url: "/poradniki/tekst-przed-znakiem/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Aby usunąć ostatnie 3 znaki</strong> z tekstu w komórce A1, użyj funkcji LEWY razem z DŁ.</div>

<div class="formula">=LEWY(A1;DŁ(A1)-3)</div>

Dla wartości `ABC12345` wynikiem będzie `ABC12`.

## Jak działa ta formuła?

`DŁ(A1)` zwraca liczbę wszystkich znaków w komórce. Odejmując `3`, określasz, ile znaków ma zostać zachowanych.

Funkcja `LEWY` pobiera właśnie tę liczbę znaków od lewej strony.

## Usuń dowolną liczbę znaków

Jeżeli chcesz usunąć ostatnie 2 znaki:

<div class="formula">=LEWY(A1;DŁ(A1)-2)</div>

Jeżeli liczba znaków do usunięcia znajduje się w komórce B1:

<div class="formula">=LEWY(A1;DŁ(A1)-B1)</div>

## Przykład

| Tekst | Usuń | Wynik |
|---|---:|---|
| ABC12345 | 3 | ABC12 |
| FV-2026-001 | 4 | FV-2026 |
| TEST987 | 3 | TEST |

## Co jeśli tekst ma różną długość?

Ta metoda działa także dla wartości o różnej długości, ponieważ liczba znaków jest liczona osobno dla każdej komórki.

Uważaj tylko, aby nie odjąć większej liczby znaków niż faktycznie zawiera tekst — wtedy formuła może zwrócić błąd.
