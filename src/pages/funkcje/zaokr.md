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

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Zmiana formatowania liczby na dwie cyfry po przecinku nie jest tym samym co obliczeniowe zaokrąglenie. W raportach rozróżniaj oba działania.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
