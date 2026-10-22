---
layout: ../../layouts/FunctionLayout.astro
slug: "wyszukaj-poziomo"
---

## Kiedy używać WYSZUKAJ.POZIOMO?

Przy raportach miesięcznych, w których miesiące są w kolumnach, WYSZUKAJ.POZIOMO pozwala pobrać wybrany wskaźnik z odpowiedniej kolumny.

<div class="formula">=WYSZUKAJ.POZIOMO(F2;B1:G4;3;FAŁSZ)</div>

## Co oznacza wynik?

Pierwsza formuła szuka nagłówka w pierwszym wierszu B1:G4 i pobiera wynik z trzeciego wiersza tego zakresu. Druga zamienia brak dopasowania na komunikat.

## Rozszerzony przykład

<div class="formula">=JEŻELI.BŁĄD(WYSZUKAJ.POZIOMO(F2;B1:G4;2;FAŁSZ);"Brak")</div>

Drugi przykład pobiera wynik z **drugiego** wiersza tablicy B1:G4, a pierwszy z trzeciego. Numer wiersza liczony jest od górnej krawędzi wybranego zakresu.

## Na co uważać?

Numer wiersza liczony jest wewnątrz wskazanego zakresu, a nie od początku arkusza. Brak FAŁSZ może włączyć niepożądane wyszukiwanie przybliżone.

## Sprawdź na konkretnych danych

Wstaw do B1:D1 nagłówki `Sty`, `Lut`, `Mar`, a w B2:D2 sprzedaż **10**, **20**, **30**. Dla F2 = `Lut` formuła `=WYSZUKAJ.POZIOMO(F2;B1:D2;2;FAŁSZ)` zwróci **20**. Bez `FAŁSZ` dopasowanie może być przybliżone.
