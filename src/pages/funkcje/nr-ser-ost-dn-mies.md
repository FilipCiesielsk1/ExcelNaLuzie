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

Argument `1` wybiera koniec następnego miesiąca, a `0` koniec miesiąca wskazanej daty. To nie jest operacja dodania stałej liczby dni.

## Najczęstsze pułapki

Nie myl przesunięcia końca miesiąca z dodaniem pełnych miesięcy do tej samej daty. Do drugiego zadania służy NR.SER.DATY.

## Sprawdź na konkretnych danych

Dla A2 równego **15.02.2024** `=NR.SER.OST.DN.MIES(A2;0)` zwróci **29.02.2024**, a z argumentem `1` — **31.03.2024**. W roku nieprzestępnym luty ma 28 dni. Ustaw format daty na komórce wynikowej.
