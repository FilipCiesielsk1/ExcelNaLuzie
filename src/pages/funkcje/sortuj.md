---
layout: ../../layouts/FunctionLayout.astro
slug: "sortuj"
---

## Sortowanie rosnące

<div class="formula">=SORTUJ(A2:C100;3;1)</div>

Formuła sortuje zakres A:C według trzeciej kolumny rosnąco.

## Sortowanie malejące

<div class="formula">=SORTUJ(A2:C100;3;-1)</div>

Wartość -1 oznacza kolejność malejącą.

## Dlaczego używać funkcji zamiast przycisku Sortuj?

SORTUJ tworzy dynamiczny wynik i nie zmienia kolejności danych źródłowych. To wygodne w raportach i pomocniczych zestawieniach.

## Numer kolumny dotyczy zwracanej tablicy

W formule:

<div class="formula">=SORTUJ(A2:C100;3;1)</div>

liczba 3 oznacza trzecią kolumnę zakresu A2:C100, a nie koniecznie kolumnę C całego arkusza.

To ważne, gdy sortujesz zakres zaczynający się w innej kolumnie.

## Połączenie z UNIKATOWE

Jeżeli potrzebujesz posortowanej listy bez duplikatów:

<div class="formula">=SORTUJ(UNIKATOWE(A2:A100))</div>

Taki zestaw świetnie nadaje się do list pomocniczych i prostych raportów.

## Połączenie z FILTRUJ

Najpierw możesz wybrać tylko potrzebne rekordy, a później je posortować:

<div class="formula">=JEŻELI.BŁĄD(SORTUJ(FILTRUJ(A2:C100;A2:A100=F2);3;-1);"Brak wyników")</div>

Obie funkcje zwracają tablice dynamiczne, dlatego wynik automatycznie zmieni rozmiar wraz z danymi. Jeśli żaden rekord nie spełni warunku, formuła wyświetli „Brak wyników”. Bez takiej obsługi argument `""` przekazany do FILTRUJ dawałby pojedynczy pusty tekst zamiast tablicy z trzema kolumnami, którą SORTUJ ma sortować według kolumny numer 3.

## Uwaga na obsługę błędów

JEŻELI.BŁĄD przechwytuje również inne błędy niż brak dopasowania (np. nieprawidłowe zakresy). Podczas budowania i testowania raportu uruchom najpierw samą kombinację SORTUJ + FILTRUJ, aby nie maskować błędów konstrukcyjnych. Dopiero po sprawdzeniu składni dodaj komunikat dla użytkownika.

## Zastosowanie w praktyce

W raportach dynamicznych SORTUJ ma tę przewagę nad przyciskiem sortowania, że nie zmienia kolejności danych źródłowych. Możesz utrzymywać oryginalną listę zamówień w jednej tabeli, a obok wyświetlać ranking według wartości sprzedaży. Trzeba jednak pamiętać, że argument numeru kolumny odnosi się do przekazanej tablicy, a nie całego arkusza. Jeśli kolumna z kwotą zmieni pozycję wewnątrz tablicy, formuła może sortować według niewłaściwej miary. Sprawdź również sytuacje, w których wyniki kilku rekordów są takie same — użytkownicy mogą oczekiwać dodatkowego kryterium porządkującego. Przy dużych zestawieniach warto używać rzeczywistych zakresów albo tabel Excela zamiast niepotrzebnie sortować milion pustych wierszy.
