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

Połączenie z SZUKAJ.TEKST sprawdza, czy fragment tekstu występuje w komórce. Jeżeli wyszukiwanie znajdzie frazę, zwróci numer pozycji, więc CZY.LICZBA da PRAWDA. Gdy frazy nie ma, SZUKAJ.TEKST zwraca błąd, ale CZY.LICZBA sprawdza jego typ i zwraca FAŁSZ — nie trzeba dodawać JEŻELI.BŁĄD.

## Na co uważać?

Daty są przechowywane jako liczby, więc również mogą dawać PRAWDA. Nie oznacza to jednak, że data jest prawidłowa w sensie biznesowym.

## Sprawdź na konkretnych danych

Wpisz do A2 tekst `Raport Excel`, a następnie użyj `=CZY.LICZBA(SZUKAJ.TEKST("excel";A2))`: wynikiem jest **PRAWDA**. Zmień A2 na `Raport roczny`: otrzymasz **FAŁSZ**. Dla porównania `=CZY.LICZBA("123")` zwróci **FAŁSZ**, ponieważ liczba została ujęta w cudzysłów.

## Zastosowanie w praktyce

W formularzu przyjmującym wartości z plików CSV osobno przechowuj oryginalny tekst i kolumnę kontrolną. Jeśli komórka zawiera `1200`, a Excel rozpoznaje ją jako liczbę, CZY.LICZBA zwróci PRAWDA. Jeśli plik zawiera napis `1 200 zł`, sam wygląd wartości nie gwarantuje poprawnego typu — wynik może być FAŁSZ. Nie poprawiaj takich rekordów przez masowe mnożenie wszystkich pól przez jeden: dane z błędnym formatem waluty wymagają świadomej normalizacji. Funkcja jest testem typu, a nie walidacją zakresu. Osobno sprawdź, czy kwota jest dodatnia, czy mieści się w limicie i czy powinna mieć grosze. Tak unikniesz mylenia poprawnie zapisanej liczby z prawidłową wartością biznesową.
