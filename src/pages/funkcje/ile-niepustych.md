---
layout: ../../layouts/FunctionLayout.astro
slug: "ile-niepustych"
---

## Kiedy używać funkcji ILE.NIEPUSTYCH?

ILE.NIEPUSTYCH pomaga policzyć wypełnione formularze, wpisy i rekordy w rejestrze, także wtedy gdy zawierają tekst zamiast liczb.

<div class="formula">=ILE.NIEPUSTYCH(A2:A100)</div>

## Jak odczytać wynik?

Pierwszy przykład zlicza wypełnione komórki jednej kolumny. Drugi analizuje dwa obszary, traktując każdy z nich jako osobny zestaw komórek.

## Drugi przykład

<div class="formula">=ILE.NIEPUSTYCH(A2:A100;C2:C100)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Komórka zawierająca formułę zwracającą pusty napis jest zliczana, choć wygląda na pustą. Jeśli interesują Cię wyłącznie liczby, użyj ILE.LICZB.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
