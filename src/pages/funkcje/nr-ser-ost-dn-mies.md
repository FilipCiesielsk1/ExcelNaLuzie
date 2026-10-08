---
layout: ../../layouts/FunctionLayout.astro
slug: "nr-ser-ost-dn-mies"
---

## Do czego służy NR.SER.OST.DN.MIES?

Funkcja przydaje się do ustalania końca okresu rozliczeniowego, terminu zestawienia i granicy raportu miesięcznego, niezależnie od liczby dni w miesiącu.

<div class="formula">=NR.SER.OST.DN.MIES(A2;0)</div>

## Co oznacza wynik?

Argument zero oznacza ostatni dzień miesiąca z daty A2. Wartość 1 zwraca ostatni dzień następnego miesiąca, uwzględniając także luty i lata przestępne.

## Praktyczny wariant

<div class="formula">=NR.SER.OST.DN.MIES(A2;1)</div>

Druga formuła pokazuje dodatkowy sposób użycia funkcji NR.SER.OST.DN.MIES. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

Nie myl przesunięcia końca miesiąca z dodaniem pełnych miesięcy do tej samej daty. Do drugiego zadania służy NR.SER.DATY.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
