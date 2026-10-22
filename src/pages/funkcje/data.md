---
layout: ../../layouts/FunctionLayout.astro
slug: "data"
---

## Kiedy używać DATA?

DATA jest podstawą obliczeń terminów, gdy rok, miesiąc i dzień pochodzą z osobnych kolumn. Buduje wartość, którą można sortować i porównywać.

<div class="formula">=DATA(2026;10;15)</div>

## Co oznacza wynik?

Pierwszy przykład daje 15 października 2026. Drugi wyznacza pierwszy dzień następnego miesiąca, także przy przejściu z grudnia do stycznia.

## Rozszerzony przykład

<div class="formula">=DATA(ROK(A2);MIESIĄC(A2)+1;1)</div>

Formuła z ROK i MIESIĄC pobiera rok i miesiąc z A2, dodaje jeden do numeru miesiąca i ustawia dzień na 1. Excel automatycznie przenosi miesiąc 13 do stycznia następnego roku.

## Na co uważać?

Miesiąc 13 może zostać znormalizowany do stycznia następnego roku, zamiast zgłoszenia błędu. W formularzach osobno sprawdzaj poprawność wartości wejściowych.

## Sprawdź na konkretnych danych

Ustaw A2 na **31.12.2026**. Formuła `=DATA(ROK(A2);MIESIĄC(A2)+1;1)` zwróci **01.01.2027**. Jeśli widzisz dużą liczbę zamiast daty, zmień format komórki wynikowej na datę; sam wynik jest liczbową datą Excela.

## Zastosowanie w praktyce

W harmonogramie faktur przechowuj rok, miesiąc i dzień jako odrębne liczby, ale datę raportową twórz funkcją DATA. Dzięki temu Excel może odejmować terminy i sortować rekordy chronologicznie. Wpisanie tekstu `01.02.2027` do komórki nie zawsze oznacza, że arkusz przechowuje rzeczywistą datę; zależy to od sposobu importu i lokalizacji. DATA przyjmuje składniki liczbowe i tworzy prawidłową wartość daty. Zwróć jednak uwagę, że funkcja normalizuje także niektóre nietypowe argumenty, np. miesiąc 13 przechodzi do nowego roku. Jeżeli użytkownik wpisuje miesiąc w formularzu, sprawdź wcześniej, czy mieści się w przedziale 1–12. Nie traktuj normalizacji jako walidacji błędnych danych wejściowych.
