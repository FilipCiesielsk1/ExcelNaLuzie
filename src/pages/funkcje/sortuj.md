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
