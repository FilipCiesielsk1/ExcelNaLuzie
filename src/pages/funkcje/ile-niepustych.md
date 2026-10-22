---
layout: ../../layouts/FunctionLayout.astro
slug: "ile-niepustych"
---

## Kiedy używać funkcji ILE.NIEPUSTYCH?

ILE.NIEPUSTYCH pomaga policzyć wypełnione formularze, wpisy i rekordy w rejestrze, także wtedy gdy zawierają tekst zamiast liczb.

<div class="formula">=ILE.NIEPUSTYCH(A2:A100)</div>

## Jak odczytać wynik?

Pierwszy przykład zlicza wypełnione komórki jednej kolumny. Drugi analizuje dwa obszary, traktując każdy z nich jako osobny zestaw komórek.

## Drugi przykład

<div class="formula">=ILE.NIEPUSTYCH(A2:A100;C2:C100)</div>

Przy dwóch zakresach wynikiem jest suma niepustych komórek z obu zakresów. To nie to samo co liczba rekordów, w których oba pola są wypełnione — jeden wiersz może zwiększyć wynik dwukrotnie.

## Najważniejsza pułapka

Komórka zawierająca formułę zwracającą pusty napis jest zliczana, choć wygląda na pustą. Jeśli interesują Cię wyłącznie liczby, użyj ILE.LICZB.

## Sprawdź na konkretnych danych

W A2 wpisz `Klient A`, w A3 wstaw formułę `=""`, a A4 pozostaw rzeczywiście pustą. `=ILE.NIEPUSTYCH(A2:A4)` da **2**, ponieważ formuła zwracająca pusty tekst jest mimo wszystko zawartością komórki. Gdy liczysz osoby lub zamówienia, sprawdzaj, czy jedna komórka odpowiada jednemu rekordowi.

## Zastosowanie w praktyce

W formularzu zgłoszeń użytkownik może pozostawić puste pola albo wstawić formułę zwracającą pusty napis. Dla ILE.NIEPUSTYCH to dwa różne przypadki. Jeśli potrzebujesz zliczyć rzeczywiście uzupełnione zgłoszenia, najlepiej wybierz jedną obowiązkową kolumnę z unikatowym identyfikatorem i zlicz jej wartości. Nie sumuj liczby wypełnionych pól z kilku kolumn, bo wtedy pojedynczy rekord może zostać policzony wielokrotnie. Pamiętaj też o komórkach ze spacjami: wizualnie wydają się puste, lecz zawierają tekst. Do wykrywania takich sytuacji przydaje się kontrola po oczyszczeniu tekstu. Odróżniaj całkowicie niewypełniony wiersz od wpisu częściowo uzupełnionego, który należy oznaczyć do poprawy.
