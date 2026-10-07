---
layout: ../../layouts/FunctionLayout.astro
slug: "sekwencja"
---

## Co robi SEKWENCJA?

SEKWENCJA tworzy dynamiczną serię kolejnych liczb.

<div class="formula">=SEKWENCJA(10)</div>

Otrzymasz liczby od 1 do 10 rozlane pionowo.

## Wartość początkowa i krok

Możesz sterować początkiem oraz odstępem między wartościami:

<div class="formula">=SEKWENCJA(10;1;100;10)</div>

Wynikiem będzie 100, 110, 120 i kolejne wartości aż do dziesiątego elementu.

## Seria pozioma

<div class="formula">=SEKWENCJA(1;12)</div>

Taki zapis tworzy jeden wiersz z dwunastoma kolejnymi liczbami.

## Tablica wielokolumnowa

<div class="formula">=SEKWENCJA(4;3)</div>

Excel rozleje wynik na cztery wiersze i trzy kolumny.

## Seria malejąca

Ujemny krok pozwala odliczać w dół:

<div class="formula">=SEKWENCJA(10;1;10;-1)</div>

## Do czego to wykorzystać?

SEKWENCJA przydaje się w numeracji, generowaniu indeksów, kalendarzach, danych testowych i dynamicznych osiach raportów.

## Dlaczego to lepsze niż przeciąganie?

Formuła przechowuje regułę, a nie statyczny zestaw komórek. Jeśli potrzebujesz 50 pozycji zamiast 10, zmieniasz jeden argument i wynik automatycznie się rozszerza.

## Łączenie z innymi funkcjami

W połączeniu z DATA możesz generować kolejne dni lub miesiące. Z innymi funkcjami dynamicznymi SEKWENCJA może tworzyć indeksy dopasowane do zmieniającej się długości raportu.

To jedna z prostszych funkcji tablic dynamicznych, ale bardzo dobrze pokazuje ich najważniejszą cechę: jeden wzór może zwrócić cały zmienny zakres wyników.
