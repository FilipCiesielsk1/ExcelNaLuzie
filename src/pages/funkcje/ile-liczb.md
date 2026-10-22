---
layout: ../../layouts/FunctionLayout.astro
slug: "ile-liczb"
---

## Kiedy używać funkcji ILE.LICZB?

ILE.LICZB przydaje się do ustalenia, ile pomiarów, kwot czy ocen liczbowych faktycznie wpisano do raportu.

<div class="formula">=ILE.LICZB(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład liczy liczby w kolumnie B, drugi dodaje zawartość dwóch zakresów. Komórki z tekstem nie są liczone nawet wtedy, gdy wyglądają jak liczby.

## Drugi przykład

<div class="formula">=ILE.LICZB(B2:B100;D2:D100)</div>

Pierwsza formuła zlicza liczby z jednej kolumny. Druga sumuje liczbę numerycznych komórek w dwóch zakresach, nie liczbę wierszy mających wartości jednocześnie w obu kolumnach.

## Najważniejsza pułapka

Daty w Excelu są zapisane jako liczby i również będą zliczane. Liczby zapisane jako tekst w zakresie mogą zostać pominięte.

## Sprawdź na konkretnych danych

W zakresie B2:B5 wpisz kolejno: **10**, **0**, tekst `'12` i pozostaw ostatnią komórkę pustą. `=ILE.LICZB(B2:B5)` zwróci **2**. Wartość `0` to liczba, ale tekst `'12` nie zostanie policzony. Do liczenia wypełnionych rekordów niezależnie od typu danych służy ILE.NIEPUSTYCH.
