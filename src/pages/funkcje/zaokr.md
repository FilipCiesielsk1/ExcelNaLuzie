---
layout: ../../layouts/FunctionLayout.astro
slug: "zaokr"
---

## Kiedy używać funkcji ZAOKR?

ZAOKR służy do prezentowania wyników finansowych, stawek i pomiarów w ustalonej liczbie miejsc dziesiętnych.

<div class="formula">=ZAOKR(A2;2)</div>

## Jak odczytać wynik?

Pierwsza formuła zaokrągla do dwóch miejsc po przecinku. Druga, z argumentem -1, zaokrągla do dziesiątek zamiast do części dziesiętnych.

## Drugi przykład

<div class="formula">=ZAOKR(A2;-1)</div>

Drugi argument może być ujemny: `-1` oznacza zaokrąglenie do dziesiątek, a `-2` do setek. Funkcja zmienia wynik obliczenia, inaczej niż samo formatowanie komórki.

## Najważniejsza pułapka

Zmiana formatowania liczby na dwie cyfry po przecinku nie jest tym samym co obliczeniowe zaokrąglenie. W raportach rozróżniaj oba działania.

## Sprawdź na konkretnych danych

Dla A2 = **123,456** `=ZAOKR(A2;2)` zwróci **123,46**, a `=ZAOKR(A2;-1)` zwróci **120**. Dla **125** z argumentem `-1` otrzymasz **130**. Zwracaj uwagę, w którym momencie zaokrąglasz kwoty w rozliczeniach.
