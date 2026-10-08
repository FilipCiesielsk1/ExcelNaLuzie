---
layout: ../../layouts/FunctionLayout.astro
slug: "nr-ser-daty"
---

## Do czego służy NR.SER.DATY?

NR.SER.DATY oblicza terminy umów, kolejnych płatności i odnowień abonamentów. Jest lepsza od dodawania stałej liczby dni, gdy chodzi o pełne miesiące.

<div class="formula">=NR.SER.DATY(A2;3)</div>

## Co oznacza wynik?

Pierwszy przykład przesuwa datę o trzy miesiące do przodu. Drugi cofa ją o jeden miesiąc; Excel sam uwzględnia przejścia między latami.

## Praktyczny wariant

<div class="formula">=NR.SER.DATY(A2;-1)</div>

Druga formuła pokazuje dodatkowy sposób użycia funkcji NR.SER.DATY. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

Dla dat leżących pod koniec miesiąca wynik może zostać dostosowany do ostatniego istniejącego dnia miesiąca docelowego. Nie zakładaj, że każdy miesiąc ma 30 dni.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
