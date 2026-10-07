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

## Przykład: lista zamówień dla jednego klienta

Jeżeli kolumna A zawiera klienta, a B:D dane zamówienia, kryterium wpisane w F2 może sterować całą listą:

<div class="formula">=FILTRUJ(A2:D100;A2:A100=F2;"Brak wyników")</div>

Po zmianie wartości w F2 wynik automatycznie przeliczy się i może mieć inną liczbę wierszy.

## FILTRUJ + SORTUJ

Dynamiczny wynik można od razu uporządkować:

<div class="formula">=SORTUJ(FILTRUJ(A2:D100;A2:A100=F2;"Brak wyników");3;-1)</div>

Tutaj najpierw wybierane są pasujące rekordy, a potem wynik jest sortowany malejąco według trzeciej kolumny zwróconej tablicy.

## Mnożenie i dodawanie warunków

W warunkach tablicowych mnożenie odpowiada logice ORAZ — wszystkie warunki muszą być prawdziwe.

Dodawanie odpowiada logice LUB — wystarczy spełnienie co najmniej jednego warunku.

Przy bardziej rozbudowanych kryteriach warto używać nawiasów, żeby od razu było widać, które porównania są ze sobą łączone.

## Zostaw miejsce na wynik

FILTRUJ zwraca tablicę dynamiczną. Komórki w obszarze wyniku muszą być puste.

Jeżeli pod formułą znajdują się ręcznie wpisane dane, wynik nie będzie mógł się rozlać na potrzebną liczbę wierszy.

## Nie używaj całych kolumn bez potrzeby

Formuły typu A:A obejmują ponad milion komórek. Przy kilku warunkach i wielu formułach może to niepotrzebnie obciążać skoroszyt.

Lepszy jest rzeczywisty zakres danych albo tabela Excela, która rozszerza się wraz z dodawaniem rekordów.
