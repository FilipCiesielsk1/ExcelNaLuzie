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

## Wszystkie zakresy muszą mieć ten sam rozmiar

W formule z kilkoma warunkami każdy zakres kryteriów powinien obejmować odpowiadające sobie wiersze.

Jeżeli pierwszy zakres to A2:A100, drugi nie powinien przypadkowo zaczynać się w B3.

Takie przesunięcie może powodować błędne wyniki albo błąd formuły.

## Operatory z wartością z komórki

Gdy próg znajduje się w F2, operator połącz z odwołaniem:

<div class="formula">=LICZ.WARUNKI(C2:C100;">="&amp;F2)</div>

Nie wpisuj całego kryterium jako tekstu `">=F2"`, bo Excel potraktuje F2 jak zwykłe znaki.

## Kryteria tekstowe

LICZ.WARUNKI może liczyć również tekst:

<div class="formula">=LICZ.WARUNKI(A2:A100;"Gotowe";B2:B100;"Wysoki")</div>

Ta formuła policzy wiersze, które jednocześnie mają status „Gotowe” i priorytet „Wysoki”.

## Symbole wieloznaczne

W kryteriach tekstowych możesz korzystać z `*` jako dowolnego ciągu znaków oraz `?` jako jednego znaku.

Przykładowo kryterium `"Excel*"` znajdzie wartości zaczynające się od słowa Excel.

## Kiedy użyć LICZ.JEŻELI?

Jeżeli masz tylko jedno kryterium, LICZ.JEŻELI jest krótsze.

LICZ.WARUNKI staje się szczególnie przydatne wtedy, gdy rekord musi spełnić kilka warunków jednocześnie.
