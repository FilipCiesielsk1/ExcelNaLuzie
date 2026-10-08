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

Drugi zapis łączy funkcję SZUKAJ.TEKST z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Funkcja zwraca pozycję, nie samą frazę. Rozpoznaje wieloznaczniki i nie rozróżnia wielkości liter; przy ścisłym dopasowaniu użyj ZNAJDŹ.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
