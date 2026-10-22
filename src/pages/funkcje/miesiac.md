---
layout: ../../layouts/FunctionLayout.astro
slug: "miesiac"
---

## Do czego służy MIESIĄC?

MIESIĄC pozwala oznaczyć miesiąc dla zamówień i faktur. Jest dobrym pomocniczym polem przy sprawdzaniu danych i tworzeniu kalendarza raportowego.

<div class="formula">=MIESIĄC(A2)</div>

## Co oznacza wynik?

Pierwsza formuła zwraca numer, np. 10 dla października. Druga wykorzystuje ten numer razem z rokiem do wyznaczenia pierwszego dnia danego miesiąca.

## Praktyczny wariant

<div class="formula">=DATA(ROK(A2);MIESIĄC(A2);1)</div>

Połączenie MIESIĄC z ROK i DATA pozwala stworzyć prawdziwą datę pierwszego dnia miesiąca — przydatną jako klucz miesięcznego zestawienia. Sama liczba miesiąca nie odróżnia różnych lat.

## Najczęstsze pułapki

Samo MIESIĄC(A2) nie rozróżnia lat. Październik 2025 i 2026 daje 10, więc do grupowania okresów uwzględnij również ROK.

## Sprawdź na konkretnych danych

W A2 wpisz **31.12.2026**. `=MIESIĄC(A2)` zwróci **12**, a `=DATA(ROK(A2);MIESIĄC(A2);1)` zwróci **01.12.2026**. Gdy używasz miesiąca do grupowania transakcji z kilku lat, dodaj również ROK.
