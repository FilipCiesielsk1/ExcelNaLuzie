---
layout: ../../layouts/ArticleLayout.astro
title: "Różnica między datami w Excelu — dni, miesiące i lata"
description: "Jak obliczyć różnicę między dwiema datami w Excelu w dniach, pełnych miesiącach lub latach. Gotowe formuły i przykłady."
slug: "roznica-miedzy-datami"
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
  - title: "Liczba dni między datami"
    url: "/poradniki/liczba-dni-miedzy-datami/"
    category: "Daty"
  - title: "Liczba miesięcy między datami"
    url: "/poradniki/liczba-miesiecy-miedzy-datami/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Najprościej:</strong> aby policzyć różnicę w dniach, odejmij wcześniejszą datę od późniejszej.</div>

<div class="formula">=B2-A2</div>

Jeżeli A2 zawiera datę początkową, a B2 końcową, wynikiem będzie liczba dni pomiędzy nimi.

## Różnica w pełnych miesiącach

<div class="formula">=DATA.RÓŻNICA(A2;B2;"m")</div>

Ta formuła zwraca liczbę pełnych miesięcy, które upłynęły między datami.

## Różnica w pełnych latach

<div class="formula">=DATA.RÓŻNICA(A2;B2;"y")</div>

To przydatne np. przy obliczaniu stażu lub wieku.

## Którą metodę wybrać?

| Potrzeba | Formuła |
|---|---|
| liczba dni | =B2-A2 |
| pełne miesiące | =DATA.RÓŻNICA(A2;B2;"m") |
| pełne lata | =DATA.RÓŻNICA(A2;B2;"y") |

## Ważne przy DATA.RÓŻNICA

Data początkowa powinna być wcześniejsza od daty końcowej. Przy odwrotnej kolejności funkcja może zwrócić błąd.

Jeżeli potrzebujesz po prostu liczby dni, zwykłe odejmowanie dat jest najprostszym i najbardziej przejrzystym rozwiązaniem.

## Przykład: wiek umowy

Jeżeli A2 zawiera datę rozpoczęcia umowy, a B2 datę jej zakończenia, możesz policzyć pełne lata:

<div class="formula">=DATA.RÓŻNICA(A2;B2;"y")</div>

albo pełne miesiące:

<div class="formula">=DATA.RÓŻNICA(A2;B2;"m")</div>

To nie jest to samo co dzielenie liczby dni przez 365 lub 30. DATA.RÓŻNICA uwzględnia rzeczywiste granice kalendarzowe.

## Dni kalendarzowe a pełne okresy

Dla zakresu 31.01.2026–28.02.2026 zwykłe odejmowanie dat poda liczbę dni. DATA.RÓŻNICA z argumentem „m” odpowie natomiast na inne pytanie: ile **pełnych miesięcy** minęło.

Dlatego przed wyborem formuły zdecyduj, czy raport ma mierzyć czas w dniach, czy zakończone okresy kalendarzowe.

## Gdy data początkowa jest późniejsza

Zwykłe odejmowanie:

<div class="formula">=B2-A2</div>

może zwrócić liczbę ujemną i często jest to użyteczna informacja.

DATA.RÓŻNICA wymaga natomiast poprawnej kolejności dat. Jeśli użytkownicy wpisują je ręcznie, warto zabezpieczyć formularz walidacją albo funkcją JEŻELI.

## Daty zawierające godzinę

Jeśli komórki zawierają również godziny, B2-A2 może zwrócić wartość dziesiętną. Przykładowo 1,5 oznacza półtorej doby, czyli 36 godzin.

DATA.RÓŻNICA operuje na pełnych jednostkach kalendarzowych, dlatego do dokładnego czasu pracy lub czasu trwania procesu lepsze może być zwykłe odejmowanie i odpowiedni format wyniku.

## Który sposób jest najbezpieczniejszy?

Do liczby dni — odejmowanie dat. Do pełnych miesięcy lub lat — DATA.RÓŻNICA. Do dni roboczych — DNI.ROBOCZE.

Nie próbuj przeliczać miesięcy przez dzielenie dni przez 30 ani lat przez 365, jeśli wynik ma odpowiadać rzeczywistemu kalendarzowi.
