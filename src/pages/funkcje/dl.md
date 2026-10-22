---
layout: ../../layouts/FunctionLayout.astro
slug: "dl"
---

## Kiedy używać funkcji DŁ?

Pozwala kontrolować długość kodów, numerów referencyjnych i opisów, a także obliczać parametry do wycinania tekstu.

<div class="formula">=DŁ(A2)</div>

## Jak odczytać wynik?

DŁ zwraca liczbę znaków, nie liczbę wyrazów. Drugi przykład sprawdza, czy kod ma dokładnie dziewięć znaków i przygotowuje prosty komunikat kontrolny.

## Rozszerzony przykład

<div class="formula">=JEŻELI(DŁ(A2)=9;"Poprawny";"Sprawdź")</div>

Formuła z JEŻELI kontroluje długość identyfikatora. Nie weryfikuje jednak rodzaju znaków ani poprawności jego struktury: dziewięcioznakowy kod z błędnym separatorem także może przejść test.

## Typowe błędy

Spacje na początku, w środku i na końcu również się liczą. Poprawna długość sama w sobie nie gwarantuje poprawnego formatu identyfikatora.

## Sprawdź na konkretnych danych

Wstaw do A2 `ABC123456`: `=DŁ(A2)` zwróci **9**, a sprawdzenie z JEŻELI — **Poprawny**. Dodaj spację na końcu: długość wzrośnie do **10**, więc otrzymasz **Sprawdź**. Jeżeli dane pochodzą z CSV, rozważ wcześniejsze oczyszczenie niepożądanych odstępów.

## Zastosowanie w praktyce

Kontrola numerów zamówień wymaga zwykle więcej niż sprawdzenia długości. Jeśli identyfikator powinien mieć postać `ABC-12345`, funkcja DŁ pomoże odrzucić zbyt krótkie i zbyt długie wpisy, ale nie potwierdzi istnienia myślnika ani poprawności cyfr. Do kompletnej weryfikacji dołóż osobny test separatora i dozwolonych znaków. Liczba znaków obejmuje również znaki niewidoczne na pierwszy rzut oka, dlatego po imporcie z innego systemu wynik może być większy, niż oczekujesz. Jeśli wykrywasz rozbieżność między wyglądem tekstu a DŁ, porównaj ciąg znak po znaku albo najpierw skopiuj go do pomocniczej kolumny. Nie usuwaj automatycznie spacji z numerów, jeśli w danym systemie mogą być znaczące.
