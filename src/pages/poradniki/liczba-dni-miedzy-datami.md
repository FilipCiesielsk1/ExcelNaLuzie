---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć liczbę dni między datami w Excelu?"
description: "Najprostszy sposób na policzenie liczby dni między dwiema datami w Excelu. Przykład, daty dzisiejsze i typowe problemy."
slug: "liczba-dni-miedzy-datami"
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
  - title: "Liczba dni roboczych"
    url: "/poradniki/liczba-dni-roboczych/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby policzyć liczbę dni między dwiema datami</strong>, odejmij datę początkową od końcowej.</div>

<div class="formula">=B2-A2</div>

Excel przechowuje daty jako liczby, dlatego wynik odejmowania to liczba dni.

## Przykład

| Data od | Data do | Wynik |
|---|---|---:|
| 01.10.2026 | 06.10.2026 | 5 |
| 01.01.2026 | 31.01.2026 | 30 |

## Ile dni zostało do wskazanej daty?

Jeżeli data docelowa jest w A2:

<div class="formula">=A2-DZIŚ()</div>

Wynik dodatni oznacza liczbę dni do daty. Wynik ujemny oznacza, że data już minęła.

## Ile dni minęło od daty?

<div class="formula">=DZIŚ()-A2</div>

To przydatne np. do liczenia wieku zgłoszenia, liczby dni od płatności albo czasu od wykonania zadania.

## Wynik wyświetla się jako data

Jeżeli zamiast liczby widzisz kolejną datę, zmień format komórki wyniku na Ogólny lub Liczbowe.

Sama formuła jest wtedy poprawna — problem dotyczy wyłącznie formatu wyświetlania.
