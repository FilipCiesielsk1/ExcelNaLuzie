---
layout: ../../layouts/FunctionLayout.astro
slug: "filtruj"
---

## Kiedy używać FILTRUJ?

FILTRUJ wybiera z tabeli wszystkie rekordy spełniające warunek i zwraca dynamiczny wynik.

<div class="formula">=FILTRUJ(A2:C100;A2:A100=F2;"Brak wyników")</div>

Jeżeli kilka wierszy spełnia warunek, wszystkie pojawią się w wyniku.

## Kilka warunków jednocześnie

Warunki typu ORAZ możesz połączyć przez mnożenie:

<div class="formula">=FILTRUJ(A2:D100;(A2:A100=G2)*(B2:B100=H2);"Brak wyników")</div>

Oba warunki muszą być wtedy spełnione.

## Warunek LUB

Przy warunku LUB można użyć dodawania tablic logicznych.

<div class="formula">=FILTRUJ(A2:D100;(A2:A100=G2)+(B2:B100=H2);"Brak wyników")</div>

## Wynik rozlany

FILTRUJ jest funkcją dynamiczną. Wynik może automatycznie zająć wiele komórek, dlatego obszar poniżej i obok formuły musi być wolny.
