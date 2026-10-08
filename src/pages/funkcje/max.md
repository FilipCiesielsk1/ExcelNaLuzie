---
layout: ../../layouts/FunctionLayout.astro
slug: "max"
---

## Kiedy używać funkcji MAX?

MAX przydaje się do odnajdywania najwyższej sprzedaży, maksymalnego czasu pracy i największego stanu magazynowego.

<div class="formula">=MAX(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład wybiera największą wartość z kolumny B. Drugi porównuje liczby z dwóch zakresów i zwraca wspólne maksimum.

## Drugi przykład

<div class="formula">=MAX(B2:B100;D2:D100)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Wynik nie mówi, z którego wiersza pochodzi rekord. Jeśli potrzebujesz powiązanej nazwy produktu, zastosuj osobno odpowiednią funkcję wyszukującą.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
