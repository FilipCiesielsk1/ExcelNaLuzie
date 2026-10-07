---
layout: ../../layouts/FunctionLayout.astro
slug: "sortuj"
---

## Sortowanie rosnące

<div class="formula">=SORTUJ(A2:C100;3;1)</div>

Formuła sortuje zakres A:C według trzeciej kolumny rosnąco.

## Sortowanie malejące

<div class="formula">=SORTUJ(A2:C100;3;-1)</div>

Wartość -1 oznacza kolejność malejącą.

## Dlaczego używać funkcji zamiast przycisku Sortuj?

SORTUJ tworzy dynamiczny wynik i nie zmienia kolejności danych źródłowych. To wygodne w raportach i pomocniczych zestawieniach.

## SORTUJ + FILTRUJ

Funkcje dynamiczne można zagnieżdżać:

<div class="formula">=SORTUJ(FILTRUJ(A2:C100;A2:A100=F2;"");3;-1)</div>

Najpierw zostają wybrane pasujące rekordy, a następnie wynik jest sortowany.

## Numer kolumny dotyczy zwracanej tablicy

W formule:

<div class="formula">=SORTUJ(A2:C100;3;1)</div>

liczba 3 oznacza trzecią kolumnę zakresu A2:C100, a nie koniecznie kolumnę C całego arkusza.

To ważne, gdy sortujesz zakres zaczynający się w innej kolumnie.

## Kierunek sortowania

Wartość 1 oznacza sortowanie rosnące, a -1 malejące:

<div class="formula">=SORTUJ(A2:C100;3;-1)</div>

Dla liczb oznacza to od największej do najmniejszej, a dla tekstu odwrotną kolejność alfabetyczną.

## SORTUJ nie zmienia danych źródłowych

Funkcja tworzy dynamiczny wynik w innym miejscu arkusza. Oryginalna tabela pozostaje w swojej kolejności.

To duża różnica względem przycisku Sortuj, który fizycznie przestawia wiersze w zaznaczonym zakresie.

## Połączenie z UNIKATOWE

Jeżeli potrzebujesz posortowanej listy bez duplikatów:

<div class="formula">=SORTUJ(UNIKATOWE(A2:A100))</div>

Taki zestaw świetnie nadaje się do list pomocniczych i prostych raportów.

## Połączenie z FILTRUJ

Najpierw możesz wybrać tylko potrzebne rekordy, a później je posortować:

<div class="formula">=SORTUJ(FILTRUJ(A2:C100;A2:A100=F2;"");3;-1)</div>

Obie funkcje zwracają tablice dynamiczne, dlatego wynik automatycznie zmieni rozmiar wraz z danymi.
