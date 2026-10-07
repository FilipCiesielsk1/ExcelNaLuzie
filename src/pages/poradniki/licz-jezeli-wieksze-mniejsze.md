---
layout: ../../layouts/ArticleLayout.astro
title: "LICZ.JEŻELI — większe, mniejsze i przedział w Excelu"
description: "Jak liczyć wartości większe, mniejsze i mieszczące się w przedziale za pomocą LICZ.JEŻELI i LICZ.WARUNKI."
slug: "licz-jezeli-wieksze-mniejsze"
category: "Liczenie i sumowanie"
categorySlug: "formuly/liczenie"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> operator porównania wpisz w kryterium w cudzysłowie.</div>

<div class="formula">=LICZ.JEŻELI(B2:B100;">=100")</div>

Formuła policzy wszystkie wartości większe lub równe 100.

## Wartości większe od progu

<div class="formula">=LICZ.JEŻELI(B2:B100;">100")</div>

Wartość dokładnie 100 nie zostanie policzona.

## Wartości mniejsze lub równe

<div class="formula">=LICZ.JEŻELI(B2:B100;"<=50")</div>

To przydatne np. do liczenia niskich stanów magazynowych albo wyników poniżej ustalonego limitu.

## Próg zapisany w komórce

Jeżeli próg znajduje się w F2, trzeba połączyć operator z odwołaniem:

<div class="formula">=LICZ.JEŻELI(B2:B100;">="&F2)</div>

Dzięki temu użytkownik może zmieniać limit bez edycji formuły.

## Liczenie wartości w przedziale

Dla zakresu od 100 do 500 potrzebujesz dwóch warunków. Najczytelniej użyć LICZ.WARUNKI:

<div class="formula">=LICZ.WARUNKI(B2:B100;">=100";B2:B100;"<=500")</div>

Ten sam zakres występuje dwa razy, ponieważ sprawdzamy dwa niezależne kryteria.

## Przedział otwarty czy zamknięty?

Zwróć uwagę na operatory. >=100 i <=500 oznacza, że wartości 100 oraz 500 również są liczone.

Jeżeli chcesz wykluczyć granice, użyj >100 oraz <500.

## Przykład z ocenami

Załóżmy, że wyniki są w C2:C100. Chcesz policzyć osoby z wynikiem od 60 do 79 punktów:

<div class="formula">=LICZ.WARUNKI(C2:C100;">=60";C2:C100;"<=79")</div>

Wynik 80 nie zostanie już uwzględniony.

## Typowe pułapki

Najczęstszy błąd to zapis operatora bez cudzysłowów albo brak znaku & przy kryterium pobieranym z komórki.

Drugim problemem są liczby zapisane jako tekst. Jeżeli dane pochodzą z CSV lub zewnętrznego systemu, wartości wyglądające jak liczby mogą nie być traktowane przez Excel jak liczby.

## Kiedy przejść na LICZ.WARUNKI?

Gdy tylko potrzebujesz jednocześnie dolnej i górnej granicy albo kilku różnych kryteriów, LICZ.WARUNKI jest zwykle bardziej naturalne niż kombinowanie kilku osobnych LICZ.JEŻELI.

## Liczenie wartości poza przedziałem

Czasem interesują Cię wartości skrajne, np. poniżej 100 lub powyżej 500. Najprościej policzyć oba warunki osobno i dodać wyniki:

<div class="formula">=LICZ.JEŻELI(B2:B100;"<100")+LICZ.JEŻELI(B2:B100;">500")</div>

Taki zapis jasno pokazuje logikę LUB: wartość trafia do wyniku, jeśli spełnia jeden z dwóch rozłącznych warunków.