---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć liczbę dni między datami w Excelu?"
description: "Najprostszy sposób na policzenie liczby dni między dwiema datami w Excelu. Przykład, daty dzisiejsze i typowe problemy."
slug: "liczba-dni-miedzy-datami"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
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

## Czy liczyć również dzień początkowy?

Standardowa różnica:

<div class="formula">=B2-A2</div>

liczy odstęp między datami. Dla 1 października i 3 października wynikiem są 2 dni.

Jeżeli chcesz policzyć **oba dni włącznie**, np. liczbę dni pobytu od 1 do 3 października, dodaj 1:

<div class="formula">=B2-A2+1</div>

Wtedy wynikiem będą 3 dni: 1, 2 i 3 października.

## Co gdy daty są wpisane odwrotnie?

Jeśli data końcowa jest wcześniejsza od początkowej, zwykłe odejmowanie da wynik ujemny. Jeżeli potrzebujesz zawsze dodatniej liczby dni, możesz zabezpieczyć formułę:

<div class="formula">=JEŻELI(B2>=A2;B2-A2;A2-B2)</div>

W raportach terminów wynik ujemny bywa jednak przydatny, bo od razu pokazuje, że kolejność dat jest nieprawidłowa.

## Daty z godziną

Excel przechowuje godzinę jako część ułamkową dnia. Dlatego różnica między 01.10.2026 08:00 a 02.10.2026 14:00 wyniesie 1,25 dnia, a nie 1.

Jeżeli pracujesz z datą i godziną, warto świadomie zdecydować, czy potrzebujesz pełnych dób, godzin czy zwykłej różnicy kalendarzowej.

## Praktyczny przykład: termin płatności

Jeśli w A2 masz dzisiejszą datę, a w B2 termin faktury, formuła:

<div class="formula">=B2-DZIŚ()</div>

pokaże liczbę dni pozostałych do terminu. Wynik 0 oznacza dziś, liczba dodatnia — termin w przyszłości, a liczba ujemna — termin już minął.
