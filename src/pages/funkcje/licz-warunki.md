---
layout: ../../layouts/FunctionLayout.astro
slug: "licz-warunki"
---

## Jeden lub kilka warunków

LICZ.WARUNKI liczy wiersze, które spełniają wszystkie podane kryteria.

<div class="formula">=LICZ.WARUNKI(A2:A100;F2;B2:B100;G2)</div>

Wynik mówi, ile rekordów ma jednocześnie wartość F2 w kolumnie A i G2 w kolumnie B.

## Liczenie wartości większych od progu

<div class="formula">=LICZ.WARUNKI(C2:C100;">=100")</div>

## Kryterium z komórki

<div class="formula">=LICZ.WARUNKI(C2:C100;">="&amp;F2)</div>

Operator musi zostać połączony z odwołaniem za pomocą znaku &.

## Ważne ograniczenie

Wszystkie zakresy kryteriów powinny mieć takie same wymiary. Jeżeli jeden zakres ma inną liczbę wierszy niż pozostałe, formuła może zwrócić błąd.
