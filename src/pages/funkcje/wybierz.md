---
layout: ../../layouts/FunctionLayout.astro
slug: "wybierz"
---

## Kiedy używać WYBIERZ?

WYBIERZ dobrze sprawdza się w krótkich, stałych słownikach wartości. Może zamieniać liczbowe priorytety z rejestru zgłoszeń na nazwy czytelne dla użytkowników.

<div class="formula">=WYBIERZ(A2;"Niski";"Średni";"Wysoki")</div>

## Co oznacza wynik?

Dla indeksu 2 wynik to Średni. Drugi przykład wykorzystuje numer dnia tygodnia, by zwrócić skrót od Pon do Nd bez osobnej tabeli pomocniczej.

## Rozszerzony przykład

<div class="formula">=WYBIERZ(DZIEŃ.TYG(A2;2);"Pon";"Wt";"Śr";"Czw";"Pt";"Sob";"Nd")</div>

Drugi zapis łączy funkcję WYBIERZ z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Numer indeksu zaczyna się od 1; poza zakresem dostępnych pozycji Excel zwraca błąd. Przy często zmieniającej się liście kategorii wygodniejsza będzie tabela słownikowa.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
