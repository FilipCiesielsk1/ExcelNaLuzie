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

## FILTRUJ + SORTUJ

Dynamiczny wynik można od razu uporządkować:

<div class="formula">=SORTUJ(FILTRUJ(A2:D100;A2:A100=F2;"Brak wyników");3;-1)</div>

Tutaj najpierw wybierane są pasujące rekordy, a potem wynik jest sortowany malejąco według trzeciej kolumny zwróconej tablicy.

## Zostaw miejsce na wynik

FILTRUJ zwraca tablicę dynamiczną. Komórki w obszarze wyniku muszą być puste.

Jeżeli pod formułą znajdują się ręcznie wpisane dane, wynik nie będzie mógł się rozlać na potrzebną liczbę wierszy.

## Co jeśli żaden wiersz nie spełnia warunku?

Trzeci argument w przykładach zwraca tekst „Brak wyników”. Bez niego pusta lista może prowadzić do błędu `#OBLICZ!`. Komunikat zastępuje wynik formuły, ale nie tworzy pustej tablicy gotowej do dalszych obliczeń.

## Nie używaj całych kolumn bez potrzeby

Formuły typu A:A obejmują ponad milion komórek. Przy kilku warunkach i wielu formułach może to niepotrzebnie obciążać skoroszyt.

Lepszy jest rzeczywisty zakres danych albo tabela Excela, która rozszerza się wraz z dodawaniem rekordów.
