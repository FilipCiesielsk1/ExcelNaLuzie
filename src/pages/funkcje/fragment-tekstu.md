---
layout: ../../layouts/FunctionLayout.astro
slug: "fragment-tekstu"
---

## Kiedy używać funkcji FRAGMENT.TEKSTU?

Przydaje się w identyfikatorach z częścią środkową: numerem regionu, rokiem lub kodem pozycji wewnątrz dłuższego ciągu.

<div class="formula">=FRAGMENT.TEKSTU(A2;4;5)</div>

## Jak odczytać wynik?

Pierwsza formuła rozpoczyna od czwartego znaku i zwraca kolejne pięć. W drugiej pozycji początkowej nie wpisujemy na stałe: wyznacza ją miejsce pierwszego myślnika.

## Rozszerzony przykład

<div class="formula">=FRAGMENT.TEKSTU(A2;ZNAJDŹ("-";A2)+1;3)</div>

ZNAJDŹ ustala pozycję pierwszego myślnika w tekście, a FRAGMENT.TEKSTU pobiera trzy kolejne znaki po nim. Jeżeli separator nie występuje, ZNAJDŹ zwróci błąd, więc dla niejednorodnych danych warto go wcześniej obsłużyć.

## Typowe błędy

Pozycje są liczone od 1, nie od zera. Jeśli liczba pobieranych znaków jest ujemna lub pozycja początkowa wynosi zero, Excel zwróci błąd.

## Sprawdź na konkretnych danych

W A2 wpisz `PL-ABC-09`. Formuła `=FRAGMENT.TEKSTU(A2;ZNAJDŹ("-";A2)+1;3)` zwróci **ABC**. Zmień A2 na `PLABC09`: formuła zgłosi błąd, ponieważ myślnika nie ma. Dla kodów o zmiennej długości segmentu nie zakładaj zawsze trzech znaków.
