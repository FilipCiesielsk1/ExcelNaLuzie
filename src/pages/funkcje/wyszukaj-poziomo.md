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

Drugi zapis łączy funkcję WYSZUKAJ.POZIOMO z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Numer wiersza liczony jest wewnątrz wskazanego zakresu, a nie od początku arkusza. Brak FAŁSZ może włączyć niepożądane wyszukiwanie przybliżone.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
