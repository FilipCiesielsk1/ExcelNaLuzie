---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zamienić datę na nazwę miesiąca w Excelu?"
description: "Jak z daty wyświetlić nazwę miesiąca, np. październik lub paź. Gotowe formuły z funkcją TEKST i przykłady."
slug: "data-na-nazwe-miesiaca"
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
  - title: "Pierwszy dzień miesiąca"
    url: "/poradniki/pierwszy-dzien-miesiaca/"
    category: "Daty"
  - title: "Ostatni dzień miesiąca"
    url: "/poradniki/ostatni-dzien-miesiaca/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby wyświetlić pełną nazwę miesiąca z daty</strong>, użyj funkcji TEKST z formatem "mmmm".</div>

<div class="formula">=TEKST(A2;"mmmm")</div>

Dla daty 06.10.2026 wynikiem będzie nazwa miesiąca.

## Skrócona nazwa miesiąca

Jeżeli wystarczy skrót, użyj trzech liter m:

<div class="formula">=TEKST(A2;"mmm")</div>

## Miesiąc i rok

<div class="formula">=TEKST(A2;"mmmm rrrr")</div>

Taki zapis jest wygodny np. w nagłówkach raportów.

## Ważne: wynik jest tekstem

Funkcja TEKST zamienia wartość daty na tekst.

Jeżeli później chcesz wykonywać obliczenia na dacie, zachowaj oryginalną datę w osobnej komórce i używaj jej do dalszych formuł.

## Alternatywa bez formuły

Jeżeli chcesz tylko zmienić sposób wyświetlania daty, możesz ustawić format niestandardowy komórki na mmmm. Wtedy komórka nadal będzie zawierała prawdziwą datę.

## Przykład w raporcie miesięcznym

Załóżmy, że w A2 masz datę 07.10.2026. Formuła:

<div class="formula">=TEKST(A2;"mmmm")</div>

zwróci nazwę miesiąca, czyli „październik”. Wariant z trzema literami:

<div class="formula">=TEKST(A2;"mmm")</div>

jest wygodny w krótkich nagłówkach raportów, gdzie pełna nazwa zajmowałaby zbyt dużo miejsca.

## TEKST czy tylko format komórki?

To ważne rozróżnienie. Funkcja TEKST zamienia datę na tekst. Wyniku nie należy później traktować jak zwykłej daty w obliczeniach.

Jeżeli chcesz tylko **wyświetlać** nazwę miesiąca, ale zachować prawdziwą datę w komórce, lepszym rozwiązaniem może być format niestandardowy:

`mmmm`

Wtedy komórka nadal zawiera datę, więc możesz ją sortować, filtrować i wykorzystywać w kolejnych formułach.

## Grupowanie po miesiącu i roku

Sama nazwa miesiąca nie rozróżnia października 2025 od października 2026. Do raportów obejmujących więcej niż jeden rok użyj:

<div class="formula">=TEKST(A2;"mmmm rrrr")</div>

Dzięki temu dostaniesz np. „październik 2026”, a nie samo „październik”.

## Gdy formuła zwraca błąd albo złą nazwę

Najpierw sprawdź, czy A2 naprawdę zawiera datę, a nie tekst wyglądający jak data. Prawdziwe daty Excel przechowuje jako liczby seryjne.

Jeśli po zmianie formatu komórki na „Ogólne” widzisz liczbę, Excel rozpoznaje wartość jako datę. Jeśli nadal widzisz zapis tekstowy, dane mogą wymagać wcześniejszej konwersji.
