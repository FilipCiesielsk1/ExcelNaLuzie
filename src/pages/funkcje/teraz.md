---
layout: ../../layouts/FunctionLayout.astro
slug: "teraz"
---

## Do czego służy TERAZ?

TERAZ przydaje się do obliczania czasu od ostatniej aktualizacji oraz pokazywania bieżącego znacznika czasowego w raportach.

<div class="formula">=TERAZ()</div>

## Co oznacza wynik?

Pierwszy przykład zwraca datę i godzinę. Druga formuła odejmuje początek bieżącego dnia, dając samą część godzinową jako ułamek doby.

## Praktyczny wariant

<div class="formula">=TERAZ()-DZIŚ()</div>

Druga formuła pokazuje dodatkowy sposób użycia funkcji TERAZ. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

Funkcja aktualizuje się przy przeliczeniu i nie utrwala chwili wpisu. Format komórki decyduje, czy widzisz godzinę, datę czy obie informacje.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
