---
layout: ../../layouts/ArticleLayout.astro
title: "Jak dodać miesiące do daty w Excelu?"
description: "Jak przesunąć datę o jeden, kilka lub ujemną liczbę miesięcy w Excelu. Gotowa formuła NR.SER.DATY i przykłady."
slug: "dodawanie-miesiecy-do-daty"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "Liczba miesięcy między datami"
    url: "/poradniki/liczba-miesiecy-miedzy-datami/"
    category: "Daty"
  - title: "Ostatni dzień miesiąca"
    url: "/poradniki/ostatni-dzien-miesiaca/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby dodać miesiące do daty</strong>, użyj funkcji NR.SER.DATY. Nie dodawaj ręcznie 30 lub 31 dni, bo miesiące mają różną długość.</div>

<div class="formula">=NR.SER.DATY(A2;3)</div>

Formuła zwróci datę przypadającą trzy miesiące po dacie z A2. Jeśli A2 zawiera 15.10.2026, wynikiem będzie 15.01.2027.

## Dodaj jeden miesiąc

<div class="formula">=NR.SER.DATY(A2;1)</div>

Pierwszy argument to data początkowa, a drugi to liczba miesięcy przesunięcia. Wartość dodatnia przesuwa datę do przodu.

Przykład:

| Data w A2 | Formuła | Wynik |
|---|---|---|
| 10.01.2026 | =NR.SER.DATY(A2;1) | 10.02.2026 |
| 25.11.2026 | =NR.SER.DATY(A2;1) | 25.12.2026 |

## Odejmij miesiące

Użyj liczby ujemnej:

<div class="formula">=NR.SER.DATY(A2;-6)</div>

To zwróci datę przypadającą sześć miesięcy wcześniej. Nie potrzebujesz osobnej funkcji do odejmowania miesięcy.

## Liczba miesięcy w osobnej komórce

Jeżeli liczba miesięcy znajduje się w B2:

<div class="formula">=NR.SER.DATY(A2;B2)</div>

To wygodny wariant w harmonogramach i kalkulatorach terminów. Użytkownik może zmienić liczbę miesięcy w B2 bez edytowania samej formuły.

Możesz też wpisać w B2 wartość ujemną, np. -3, aby cofnąć datę o trzy miesiące.

## Co się stanie na końcu miesiąca?

NR.SER.DATY zachowuje dzień miesiąca, o ile taki dzień istnieje w miesiącu docelowym. Jeśli go nie ma, Excel zwróci ostatni poprawny dzień tego miesiąca.

Przykładowo data 31.01.2026 przesunięta o jeden miesiąc da 28.02.2026.

To zachowanie jest szczególnie ważne przy terminach płatności, ratach i cyklicznych rozliczeniach.

## Dlaczego nie dodawać 30 dni?

Miesiące mają 28, 29, 30 lub 31 dni. Dlatego:

<div class="formula">=A2+30</div>

nie jest odpowiednikiem przesunięcia o jeden miesiąc. Taka formuła przesuwa datę dokładnie o 30 dni i może wejść w inny dzień miesiąca niż oczekujesz.

NR.SER.DATY wykonuje przesunięcie kalendarzowe, więc jest właściwym rozwiązaniem dla miesięcy.

## Kiedy użyć NR.SER.OST.DN.MIES?

Jeżeli nie potrzebujesz zachować dnia miesiąca, tylko chcesz dostać zawsze ostatni dzień wybranego miesiąca, użyj NR.SER.OST.DN.MIES.

Przykład:

<div class="formula">=NR.SER.OST.DN.MIES(A2;3)</div>

Ta formuła zwróci ostatni dzień miesiąca przypadającego trzy miesiące po dacie z A2.

## Wynik wygląda jak liczba zamiast daty

Excel przechowuje daty jako liczby seryjne. Jeśli zobaczysz wynik podobny do 46300 zamiast daty, sama formuła może być poprawna.

Zmień format komórki na **Data** albo ustaw własny format, np. `dd.mm.rrrr`.
