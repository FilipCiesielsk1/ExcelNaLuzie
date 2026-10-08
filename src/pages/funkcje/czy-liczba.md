---
layout: ../../layouts/FunctionLayout.astro
slug: "czy-liczba"
---

## Kiedy używać CZY.LICZBA?

Po imporcie CSV liczby mogą być zapisane jako tekst i zachowywać się niewłaściwie podczas obliczeń. CZY.LICZBA pomaga szybko wykryć takie wartości.

<div class="formula">=CZY.LICZBA(A2)</div>

## Co oznacza wynik?

Wynik to PRAWDA dla prawdziwej liczby oraz FAŁSZ dla tekstu przypominającego liczbę. W drugim przykładzie funkcja sprawdza, czy wyszukiwanie frazy zwróciło liczbową pozycję.

## Rozszerzony przykład

<div class="formula">=CZY.LICZBA(SZUKAJ.TEKST("excel";A2))</div>

Drugi zapis łączy funkcję CZY.LICZBA z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Daty są przechowywane jako liczby, więc również mogą dawać PRAWDA. Nie oznacza to jednak, że data jest prawidłowa w sensie biznesowym.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
