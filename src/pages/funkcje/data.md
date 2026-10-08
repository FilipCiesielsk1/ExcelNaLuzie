---
layout: ../../layouts/FunctionLayout.astro
slug: "data"
---

## Kiedy używać DATA?

DATA jest podstawą obliczeń terminów, gdy rok, miesiąc i dzień pochodzą z osobnych kolumn. Buduje wartość, którą można sortować i porównywać.

<div class="formula">=DATA(2026;10;15)</div>

## Co oznacza wynik?

Pierwszy przykład daje 15 października 2026. Drugi wyznacza pierwszy dzień następnego miesiąca, także przy przejściu z grudnia do stycznia.

## Rozszerzony przykład

<div class="formula">=DATA(ROK(A2);MIESIĄC(A2)+1;1)</div>

Drugi zapis łączy funkcję DATA z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Miesiąc 13 może zostać znormalizowany do stycznia następnego roku, zamiast zgłoszenia błędu. W formularzach osobno sprawdzaj poprawność wartości wejściowych.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
