---
layout: ../../layouts/FunctionLayout.astro
slug: "zaokr-dol"
---

## Kiedy używać funkcji ZAOKR.DÓŁ?

ZAOKR.DÓŁ pozwala obciąć wartość do wskazanej precyzji, gdy rezultat musi pozostać bliżej zera niż wartość wyjściowa.

<div class="formula">=ZAOKR.DÓŁ(A2;0)</div>

## Jak odczytać wynik?

Pierwszy przykład sprowadza liczbę do całych jednostek w kierunku zera. Drugi pozostawia dwa miejsca dziesiętne, odrzucając dalsze cyfry.

## Drugi przykład

<div class="formula">=ZAOKR.DÓŁ(A2;2)</div>

Druga formuła przedstawia kolejny wariant tego samego działania. Przed skopiowaniem zamień przykładowe odwołania do komórek na własne zakresy. W razie wątpliwości sprawdź dokładną składnię i opis poszczególnych argumentów na początku tej strony.

## Najważniejsza pułapka

Dla wartości ujemnych kierunek do zera oznacza wynik mniej ujemny. Funkcja nie działa identycznie jak zaokrąglanie w dół na osi liczbowej.

## Jak sprawdzić i skopiować formułę?

Na początku przetestuj obliczenie na małym zestawie liczb, dla którego możesz łatwo wyznaczyć oczekiwany wynik samodzielnie. Potem sprawdź przypadki szczególne: zero, wartość ujemną, pustą komórkę oraz komórkę z liczbą zapisaną jako tekst. Różne funkcje mają inne zasady traktowania takich danych, dlatego nie warto sprawdzać tylko typowych przykładów.

Jeżeli zamierzasz kopiować formułę do wielu wierszy, zwróć uwagę, czy zakresy źródłowe mają pozostać stałe. Adresy bezwzględne z dolarem pomagają zachować ten sam zakres przy kopiowaniu. Wyniki prezentuj z odpowiednim formatem liczbowym; pamiętaj jednak, że samo formatowanie nie zmienia wartości używanej w późniejszych obliczeniach. W raportach liczbowych dobrze jest zachować surowe dane i pokazać osobno wynik przetwarzania, aby możliwa była szybka kontrola poprawności.
