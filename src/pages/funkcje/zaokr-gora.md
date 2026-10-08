---
layout: ../../layouts/FunctionLayout.astro
slug: "zaokr-gora"
---

## Kiedy używać funkcji ZAOKR.GÓRA?

ZAOKR.GÓRA przydaje się do przyjmowania ostrożnego wyniku ilościowego, gdy zaokrąglenie do najbliższej liczby mogłoby być zbyt małe.

<div class="formula">=ZAOKR.GÓRA(A2;0)</div>

## Jak odczytać wynik?

Pierwszy przykład zaokrągla wartość do pełnych jednostek w kierunku od zera. Drugi zachowuje dwa miejsca po przecinku, również zaokrąglając od zera.

## Drugi przykład

<div class="formula">=ZAOKR.GÓRA(A2;2)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Dla wartości ujemnych od zera oznacza wynik bardziej ujemny, nie większy algebraicznie. Nie myl tej funkcji z obliczeniem sufitu matematycznego.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
