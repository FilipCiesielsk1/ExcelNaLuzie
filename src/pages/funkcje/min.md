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

MIN może porównywać wartości z wielu zakresów, np. najniższą cenę z dwóch magazynów. Nie podaje pozycji rekordu; jeśli potrzebujesz nazwy produktu, użyj dodatkowego wyszukiwania.

## Najważniejsza pułapka

Teksty i puste pola we wskazanych zakresach są pomijane. Jeśli potrzebujesz najmniejszej wartości spełniającej warunki, zwykła MIN nie wystarczy.

## Sprawdź na konkretnych danych

Dla liczb **10**, **25**, **-3** w B2:B4 i **40**, **5** w D2:D3 formuła `=MIN(B2:B4;D2:D3)` zwróci **-3**. Jeśli wszystkie komórki zawierają tekst lub są puste, MIN może zwrócić **0** — nie traktuj tego automatycznie jako rzeczywistej wartości pomiaru.
