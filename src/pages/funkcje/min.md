---
layout: ../../layouts/FunctionLayout.astro
slug: "min"
---

## Kiedy używać funkcji MIN?

MIN pomaga znaleźć najniższą cenę, najkrótszy czas realizacji lub najmniejszy pomiar bez sortowania całej tabeli.

<div class="formula">=MIN(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład analizuje jeden zakres, drugi bierze pod uwagę dwie odrębne kolumny. Wynikiem jest sama wartość minimum, nie lokalizacja rekordu.

## Drugi przykład

<div class="formula">=MIN(B2:B100;D2:D100)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Teksty i puste pola we wskazanych zakresach są pomijane. Jeśli potrzebujesz najmniejszej wartości spełniającej warunki, zwykła MIN nie wystarczy.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
