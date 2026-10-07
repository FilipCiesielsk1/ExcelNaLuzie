---
layout: ../../layouts/FunctionLayout.astro
slug: "xwyszukaj"
---

## Kiedy używać X.WYSZUKAJ?

X.WYSZUKAJ jest dobrym domyślnym wyborem, gdy chcesz znaleźć jeden rekord i zwrócić odpowiadającą mu wartość.

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

Excel szuka wartości z F2 w kolumnie A i zwraca wartość z tego samego wiersza w kolumnie C.

## Wyszukiwanie w lewo

Zakres wyniku nie musi znajdować się po prawej stronie zakresu wyszukiwania.

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

To jedna z najważniejszych przewag nad klasycznym WYSZUKAJ.PIONOWO.

## Brak dopasowania

Własny komunikat możesz wpisać bezpośrednio jako czwarty argument. Dzięki temu nie musisz otaczać typowej formuły dodatkowym JEŻELI.BŁĄD.

## Wiele pasujących wyników

X.WYSZUKAJ zwraca pojedyncze dopasowanie. Jeżeli potrzebujesz całej listy rekordów spełniających warunek, zwykle lepsza będzie funkcja FILTRUJ.

## Dopasowanie dokładne jest domyślne

W podstawowym zastosowaniu nie musisz dodawać osobnego argumentu wymuszającego dokładne dopasowanie:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

To jedna z różnic względem WYSZUKAJ.PIONOWO, gdzie użytkownicy często zapominają o FAŁSZ.

## Zakresy powinny odpowiadać tym samym wierszom

Jeżeli zakres wyszukiwania to A2:A100, zakres wyniku powinien obejmować odpowiadające rekordy, np. C2:C100.

Przesunięcie jednego zakresu o wiersz może zwrócić błędną wartość, mimo że sama formuła wygląda poprawnie.

## X.WYSZUKAJ może zwracać dane z lewej strony

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

Nie musisz przebudowywać tabeli ani liczyć numeru kolumny.

## Dopasowanie do progów

Piąty argument pozwala określić sposób dopasowania. Tryb -1 oznacza dokładne dopasowanie albo najbliższą mniejszą wartość:

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";-1)</div>

Taki wariant pasuje do tabel rabatowych, progów i przedziałów.

## Duplikaty

X.WYSZUKAJ zwraca pojedyncze dopasowanie. Jeśli ten sam klucz może wystąpić wiele razy i potrzebujesz wszystkich rekordów, użyj FILTRUJ.

## Gdy oczywisty wynik nie jest znajdowany

Sprawdź, czy obie strony mają ten sam typ danych i czy po imporcie nie zostały zbędne spacje.

Problemy z jakością danych są częstszą przyczyną braku dopasowania niż sama składnia X.WYSZUKAJ.
