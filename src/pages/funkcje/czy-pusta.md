---
layout: ../../layouts/FunctionLayout.astro
slug: "czy-pusta"
---

## Kiedy używać CZY.PUSTA?

CZY.PUSTA pomaga odróżnić brak wpisu od wartości zero, co jest szczególnie ważne przy formularzach i walidacji danych pracowników lub zamówień.

<div class="formula">=CZY.PUSTA(A2)</div>

## Co oznacza wynik?

Dla komórki całkowicie pustej otrzymasz PRAWDA. Drugi przykład zwróci Brak dla pustego pola, a Uzupełniono dla pola zawierającego choćby zero.

## Rozszerzony przykład

<div class="formula">=JEŻELI(CZY.PUSTA(A2);"Brak";"Uzupełniono")</div>

Drugi zapis łączy funkcję CZY.PUSTA z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Komórka z formułą zwracającą pusty tekst nie jest technicznie pusta i daje FAŁSZ. Do wykrywania także takiego stanu użyj porównania A2 z pustym napisem.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
