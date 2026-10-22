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
