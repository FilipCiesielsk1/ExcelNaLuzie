---
layout: ../../layouts/FunctionLayout.astro
slug: "podaj-pozycje"
---

## Co robi PODAJ.POZYCJĘ?

PODAJ.POZYCJĘ nie zwraca samej szukanej wartości. Zwraca numer jej pozycji we wskazanym zakresie.

<div class="formula">=PODAJ.POZYCJĘ(F2;A2:A100;0)</div>

Jeżeli wartość z F2 znajduje się jako piąty element zakresu A2:A100, wynikiem będzie liczba 5.

## Dokładne dopasowanie

W typowym wyszukiwaniu używaj trzeciego argumentu równego 0:

<div class="formula">=PODAJ.POZYCJĘ("ABC";A2:A100;0)</div>

To wymusza dokładne dopasowanie.

## Połączenie z INDEKS

Sama pozycja często jest tylko etapem pośrednim:

<div class="formula">=INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0))</div>

Najpierw ustalana jest pozycja szukanej wartości w A, a potem z C pobierany jest element na tej samej pozycji.

## Pozycja jest względna

Dla zakresu A10:A20 pierwszy element ma pozycję 1, mimo że znajduje się w dziesiątym wierszu arkusza.

## Problemy z typem danych

Jeżeli liczba została zapisana jako tekst, a szukana wartość jest liczbą, dokładne dopasowanie może nie zadziałać. Podobny problem powodują dodatkowe spacje w tekstach.

## PODAJ.POZYCJĘ czy X.WYSZUKAJ?

Do prostego zwracania wartości X.WYSZUKAJ jest zwykle wygodniejsze. PODAJ.POZYCJĘ jest jednak potrzebne wtedy, gdy sam numer pozycji ma znaczenie albo ma zostać przekazany do innej funkcji, np. INDEKS.

To klasyczna funkcja wyszukująca, która nadal jest bardzo przydatna w starszych modelach i bardziej technicznych formułach.

## Co zrobić przy duplikatach?

Przy dokładnym dopasowaniu funkcja zwraca pozycję pierwszego pasującego elementu. Jeżeli ten sam klucz występuje wiele razy i potrzebujesz wszystkich rekordów, PODAJ.POZYCJĘ nie jest najlepszym narzędziem. W nowszym Excelu do takich zadań częściej sprawdzi się FILTRUJ.
