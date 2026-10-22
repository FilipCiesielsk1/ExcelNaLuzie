---
layout: ../../layouts/FunctionLayout.astro
slug: "max"
---

## Kiedy używać funkcji MAX?

MAX przydaje się do odnajdywania najwyższej sprzedaży, maksymalnego czasu pracy i największego stanu magazynowego.

<div class="formula">=MAX(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład wybiera największą wartość z kolumny B. Drugi porównuje liczby z dwóch zakresów i zwraca wspólne maksimum.

## Drugi przykład

<div class="formula">=MAX(B2:B100;D2:D100)</div>

Porównanie dwóch zakresów może być przydatne, gdy dane z dwóch działów są przechowywane w odrębnych kolumnach. MAX zwraca wartość liczbową, a nie nazwę działu ani identyfikator wiersza, w którym znajduje się maksimum.

## Najważniejsza pułapka

Wynik nie mówi, z którego wiersza pochodzi rekord. Jeśli potrzebujesz powiązanej nazwy produktu, zastosuj osobno odpowiednią funkcję wyszukującą.

## Sprawdź na konkretnych danych

Dla liczb **10**, **25**, **-3** w B2:B4 i **40**, **5** w D2:D3 formuła `=MAX(B2:B4;D2:D3)` zwróci **40**. Jeśli w obu zakresach nie ma liczb, MAX zwraca **0**, co w raporcie może wymagać odrębnego oznaczenia braku danych.
