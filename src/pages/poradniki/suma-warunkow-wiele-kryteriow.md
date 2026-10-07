---
layout: ../../layouts/ArticleLayout.astro
title: "SUMA.WARUNKÓW w Excelu — wiele kryteriów"
description: "Jak używać SUMA.WARUNKÓW w Excelu do sumowania wartości spełniających kilka kryteriów jednocześnie. Gotowe przykłady."
slug: "suma-warunkow-wiele-kryteriow"
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

<div class="answer"><strong>Najprościej:</strong> SUMA.WARUNKÓW sumuje wskazany zakres tylko dla wierszy, które spełniają wszystkie podane kryteria.</div>

<div class="formula">=SUMA.WARUNKÓW(D2:D100;A2:A100;"Warszawa";B2:B100;"Gotowe")</div>

Formuła zsumuje wartości z kolumny D tylko dla rekordów z Warszawy o statusie Gotowe.

## Jak działa SUMA.WARUNKÓW?

Pierwszy argument to zakres sumowania. Potem podajesz kolejne pary: zakres kryterium i kryterium.

<div class="formula">=SUMA.WARUNKÓW(zakres_sumowania;zakres1;kryterium1;zakres2;kryterium2)</div>

Możesz dodawać następne pary, jeśli potrzebujesz więcej warunków.

## Kryteria z komórek

Jeżeli miasto znajduje się w F2, a status w G2:

<div class="formula">=SUMA.WARUNKÓW(D2:D100;A2:A100;F2;B2:B100;G2)</div>

To wygodne rozwiązanie w raportach sterowanych polami wyboru lub komórkami parametrów.

## Dodanie progu liczbowego

Możesz połączyć tekst i liczby:

<div class="formula">=SUMA.WARUNKÓW(D2:D100;A2:A100;"Warszawa";C2:C100;">=1000")</div>

Do sumy trafią tylko rekordy z Warszawy, dla których wartość w kolumnie C jest co najmniej równa 1000.

## Wszystkie kryteria działają jak ORAZ

Każdy kolejny warunek zawęża wynik. Rekord musi spełnić wszystkie kryteria jednocześnie.

Jeżeli potrzebujesz logiki LUB, np. Warszawa albo Gdańsk, najprościej często zsumować dwa osobne wyniki albo użyć nowocześniejszej konstrukcji tablicowej.

## Zakresy powinny mieć zgodne wymiary

Jeżeli zakres sumowania obejmuje D2:D100, zakresy kryteriów powinny odnosić się do odpowiadających wierszy, np. A2:A100 i B2:B100.

## SUMA.WARUNKÓW czy SUMA.JEŻELI?

Przy jednym kryterium SUMA.JEŻELI jest krótsza. Gdy warunków jest kilka, SUMA.WARUNKÓW jest czytelniejsza i łatwiejsza do rozbudowy.

To jedna z najbardziej praktycznych funkcji w raportach sprzedaży, kosztów, czasu pracy i budżetach.

## Przykład: raport sprzedaży handlowca

Jeżeli A zawiera handlowca, B region, C status, a D wartość sprzedaży, możesz zsumować tylko zatwierdzone transakcje wybranej osoby:

<div class="formula">=SUMA.WARUNKÓW(D2:D100;A2:A100;F2;C2:C100;"Gotowe")</div>

Dodanie kolejnego kryterium nie zmienia logiki — każdy następny warunek musi być spełniony jednocześnie.