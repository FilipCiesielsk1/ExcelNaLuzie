---
layout: ../../layouts/ArticleLayout.astro
title: "SUMA.WARUNKÓW i daty w Excelu"
description: "Jak sumować wartości pomiędzy datami za pomocą SUMA.WARUNKÓW. Zakres dat, miesiąc, dzień dzisiejszy i dynamiczne kryteria."
slug: "suma-warunkow-daty"
category: "Liczenie i sumowanie"
categorySlug: "formuly/liczenie"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> aby zsumować wartości pomiędzy dwiema datami, użyj dwóch kryteriów na tej samej kolumnie dat.</div>

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;">="&F2;A2:A100;"<="&G2)</div>

Kolumna C zawiera wartości do zsumowania, kolumna A daty, F2 datę początkową, a G2 datę końcową.

## Dlaczego potrzebne są dwa warunki?

Pierwszy ustala dolną granicę okresu, a drugi górną. Rekord trafia do sumy tylko wtedy, gdy data mieści się pomiędzy nimi.

## Suma od początku do dzisiaj

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;"<="&DZIŚ())</div>

To przydatne np. do liczenia zrealizowanej sprzedaży lub kosztów zaksięgowanych do bieżącego dnia.

## Suma od konkretnej daty

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;">="&DATA(2026;1;1))</div>

Funkcja DATA pozwala zapisać konkretną granicę bez zależności od formatu wyświetlania daty.

## Bieżący miesiąc

Możesz zbudować zakres od pierwszego dnia miesiąca do ostatniego:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;">="&DATA(ROK(DZIŚ());MIESIĄC(DZIŚ());1);A2:A100;"<="&NR.SER.OST.DN.MIES(DZIŚ();0))</div>

Wynik będzie automatycznie zmieniał się wraz z bieżącym miesiącem.

## Daty muszą być prawdziwymi datami

Jeżeli dane zostały zaimportowane jako tekst, SUMA.WARUNKÓW może nie interpretować ich zgodnie z oczekiwaniem. Sama zmiana formatu komórki nie zawsze zamienia tekst na datę.

## Uważaj na daty z godziną

Jeśli wartości zawierają również czas, kryterium <= data końcowa może nie objąć godzin późniejszych tego samego dnia. W typowych tabelach z samymi datami nie ma tego problemu.

## Kiedy warto używać tej metody?

W raportach miesięcznych, fakturach, kosztach, sprzedaży i ewidencji czasu. Zamiast ręcznie filtrować tabelę, formuła przelicza zakres dat automatycznie po zmianie parametrów.