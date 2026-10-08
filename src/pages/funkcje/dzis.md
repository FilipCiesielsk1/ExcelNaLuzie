---
layout: ../../layouts/FunctionLayout.astro
slug: "dzis"
---

## Kiedy używać DZIŚ?

W rejestrze płatności i zadań DZIŚ pozwala automatycznie odnosić terminy do aktualnego dnia bez wpisywania daty ręcznie.

<div class="formula">=DZIŚ()</div>

## Co oznacza wynik?

Pierwszy przykład daje aktualną datę. Drugi oznacza terminy wcześniejsze niż dzisiaj jako spóźnione, natomiast bieżący dzień pozostaje w terminie.

## Rozszerzony przykład

<div class="formula">=JEŻELI(A2&lt;DZIŚ();"Po terminie";"W terminie")</div>

Drugi zapis łączy funkcję DZIŚ z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Funkcja jest zmienna: po przeliczeniu skoroszytu może zwrócić inną datę. Nie nadaje się do utrwalania daty zdarzenia na zawsze.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
