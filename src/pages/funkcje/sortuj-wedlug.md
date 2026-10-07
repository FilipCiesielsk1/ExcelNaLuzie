---
layout: ../../layouts/FunctionLayout.astro
slug: "sortuj-wedlug"
---

## Co daje SORTUJ.WEDŁUG?

SORTUJ.WEDŁUG pozwala zwrócić jedną tablicę, ale ustalić jej kolejność na podstawie innego zakresu.

<div class="formula">=SORTUJ.WEDŁUG(A2:B100;C2:C100;-1)</div>

Kolumny A:B zostaną zwrócone w kolejności odpowiadającej wartościom z C, od największej do najmniejszej.

## Sortowanie po kolumnie niewidocznej w wyniku

To największa przewaga nad prostym SORTUJ. Kolumna C może zawierać techniczny priorytet lub wynik, którego nie chcesz prezentować użytkownikowi.

## Kolejność rosnąca

<div class="formula">=SORTUJ.WEDŁUG(A2:B100;C2:C100;1)</div>

Wartość 1 oznacza kolejność rosnącą, a -1 malejącą.

## Kilka poziomów sortowania

Możesz dodać kolejną parę zakres + kierunek:

<div class="formula">=SORTUJ.WEDŁUG(A2:C100;B2:B100;1;C2:C100;-1)</div>

Najpierw dane są sortowane według B rosnąco, a przy remisie według C malejąco.

## Dynamiczna tablica

Wynik rozlewa się automatycznie do sąsiednich komórek i zmienia wraz z danymi źródłowymi.

## SORTUJ czy SORTUJ.WEDŁUG?

SORTUJ jest krótsze, gdy kolumna sortująca znajduje się w zwracanej tablicy. SORTUJ.WEDŁUG jest bardziej elastyczne, gdy kryterium sortowania ma być niezależne od prezentowanego wyniku.

## Typowe zastosowania

Rankingi, listy projektów sortowane według priorytetu, raporty klientów sortowane według wartości sprzedaży oraz wielopoziomowe zestawienia, w których nie chcesz zmieniać kolejności tabeli źródłowej.
