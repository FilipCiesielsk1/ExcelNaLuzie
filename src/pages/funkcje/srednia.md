---
layout: ../../layouts/FunctionLayout.astro
slug: "srednia"
---

## Kiedy używać funkcji ŚREDNIA?

W raporcie jakości lub sprzedaży ŚREDNIA pozwala poznać przeciętny wynik bez ręcznego sumowania i liczenia rekordów.

<div class="formula">=ŚREDNIA(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład oblicza średnią z kolumny B, drugi uwzględnia jeszcze wartości w kolumnie D. Puste komórki i tekst w zakresach nie zwiększają mianownika.

## Drugi przykład

<div class="formula">=ŚREDNIA(B2:B100;D2:D100)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Zera liczą się do średniej, puste komórki nie. Jeśli nie ma żadnej liczby do obliczenia, wystąpi błąd dzielenia przez zero.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
