---
layout: ../../layouts/FunctionLayout.astro
slug: "szukaj-tekst"
---

## Kiedy używać SZUKAJ.TEKST?

SZUKAJ.TEKST przydaje się do sprawdzania opisów, komentarzy i tytułów zgłoszeń. Nie ma znaczenia, czy użytkownik wpisał Excel, EXCEL czy excel.

<div class="formula">=SZUKAJ.TEKST("excel";A2)</div>

## Co oznacza wynik?

W pierwszym przykładzie otrzymujesz pozycję pierwszej litery szukanego wyrazu. Druga formuła zwraca PRAWDA, gdy frazę raport znaleziono, a FAŁSZ w przypadku braku dopasowania.

## Rozszerzony przykład

<div class="formula">=CZY.LICZBA(SZUKAJ.TEKST("raport";A2))</div>

SZUKAJ.TEKST zwraca pozycję znalezionego fragmentu, a przy braku frazy błąd. CZY.LICZBA zamienia te dwa przypadki w logiczne PRAWDA lub FAŁSZ — prawidłowo obsługuje też błąd wyszukiwania, bez dodatkowego JEŻELI.BŁĄD.

## Na co uważać?

Funkcja zwraca pozycję, nie samą frazę. Rozpoznaje wieloznaczniki i nie rozróżnia wielkości liter; przy ścisłym dopasowaniu użyj ZNAJDŹ.

## Sprawdź na konkretnych danych

Dla A2 = `Raport miesięczny` formuła `=CZY.LICZBA(SZUKAJ.TEKST("raport";A2))` zwróci **PRAWDA**, mimo wielkiej litery na początku. Dla tekstu `Zestawienie` zwróci **FAŁSZ**. Gdy potrzebujesz wyszukiwania z rozróżnianiem wielkości liter, użyj ZNAJDŹ.
