---
layout: ../../layouts/FunctionLayout.astro
slug: "indeks"
---

## Co robi INDEKS?

INDEKS zwraca wartość znajdującą się na określonej pozycji wewnątrz zakresu lub tablicy.

<div class="formula">=INDEKS(C2:C100;5)</div>

Formuła zwraca piąty element z zakresu C2:C100, czyli wartość z komórki C6.

## Dwa wymiary

Jeżeli przekazujesz zakres obejmujący kilka kolumn, możesz wskazać także numer kolumny:

<div class="formula">=INDEKS(A2:C100;5;3)</div>

Wynik pochodzi z piątego wiersza i trzeciej kolumny przekazanej tablicy.

## INDEKS razem z PODAJ.POZYCJĘ

Najczęstsze praktyczne zastosowanie to dynamiczne wyszukiwanie:

<div class="formula">=INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0))</div>

PODAJ.POZYCJĘ znajduje numer pasującego wiersza, a INDEKS pobiera odpowiadającą wartość.

## Dlaczego to nadal jest przydatne?

W nowszym Excelu wiele prostych przypadków wygodniej rozwiązuje X.WYSZUKAJ. INDEKS pozostaje jednak bardzo elastyczne i dobrze sprawdza się w starszych skoroszytach, bardziej złożonych modelach oraz formułach, w których pozycja jest obliczana oddzielnie.

## Numer pozycji jest względny

Dla zakresu C2:C100 pozycja 1 oznacza C2, a nie pierwszy wiersz arkusza. To częsty punkt nieporozumień.

## Kiedy wybrać INDEKS?

Gdy masz już numer pozycji, potrzebujesz pełnej kontroli nad zwracanym zakresem albo pracujesz ze starszymi wersjami Excela. Połączenie INDEKS + PODAJ.POZYCJĘ jest również dobrym sposobem na zrozumienie, jak działają mechanizmy wyszukiwania w arkuszu.

## Zwracanie wartości z większej tabeli

Przy tablicy obejmującej kilka kolumn numer kolumny liczony jest od lewej krawędzi przekazanego zakresu. Dzięki temu INDEKS może działać na dowolnym fragmencie arkusza bez znaczenia, w której fizycznej kolumnie zaczyna się tabela. To ułatwia późniejsze przenoszenie modelu.
