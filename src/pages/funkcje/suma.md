---
layout: ../../layouts/FunctionLayout.astro
slug: "suma"
---

## Do czego służy SUMA?

SUMA jest podstawą raportów finansowych, zestawień magazynowych i planów budżetowych. Możesz wskazać pojedynczy zakres albo kilka nieprzylegających do siebie obszarów.

<div class="formula">=SUMA(B2:B100)</div>

## Co oznacza wynik?

Pierwszy przykład sumuje wartości w jednej kolumnie, a drugi łączy dwie rozdzielone kolumny. W typowych odwołaniach pomijane są teksty i puste komórki.

## Praktyczny wariant

<div class="formula">=SUMA(B2:B100;D2:D100)</div>

Druga formuła pokazuje dodatkowy sposób użycia funkcji SUMA. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

Jeśli część liczb została zaimportowana jako tekst, suma może je pominąć. Do sumowania tylko wierszy spełniających kryterium wybierz SUMA.JEŻELI lub SUMA.WARUNKÓW.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
