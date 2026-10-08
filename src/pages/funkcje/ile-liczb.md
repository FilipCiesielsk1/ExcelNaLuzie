---
layout: ../../layouts/FunctionLayout.astro
slug: "ile-liczb"
---

## Kiedy używać funkcji ILE.LICZB?

ILE.LICZB przydaje się do ustalenia, ile pomiarów, kwot czy ocen liczbowych faktycznie wpisano do raportu.

<div class="formula">=ILE.LICZB(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład liczy liczby w kolumnie B, drugi dodaje zawartość dwóch zakresów. Komórki z tekstem nie są liczone nawet wtedy, gdy wyglądają jak liczby.

## Drugi przykład

<div class="formula">=ILE.LICZB(B2:B100;D2:D100)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Daty w Excelu są zapisane jako liczby i również będą zliczane. Liczby zapisane jako tekst w zakresie mogą zostać pominięte.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
