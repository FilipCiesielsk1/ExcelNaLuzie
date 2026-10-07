---
layout: ../../layouts/ArticleLayout.astro
title: "LICZ.WARUNKI w Excelu — wiele kryteriów"
description: "Jak używać LICZ.WARUNKI w Excelu do liczenia rekordów spełniających kilka warunków jednocześnie. Gotowe przykłady."
slug: "licz-warunki-wiele-kryteriow"
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

<div class="answer"><strong>Najprościej:</strong> LICZ.WARUNKI liczy wiersze, dla których wszystkie podane kryteria są spełnione jednocześnie.</div>

<div class="formula">=LICZ.WARUNKI(A2:A100;"Warszawa";B2:B100;"Gotowe")</div>

Formuła policzy rekordy, w których kolumna A zawiera Warszawa i jednocześnie kolumna B zawiera Gotowe.

## Jak działa LICZ.WARUNKI?

Argumenty podajesz parami: zakres kryterium, kryterium, kolejny zakres kryterium, kolejne kryterium.

<div class="formula">=LICZ.WARUNKI(zakres1;kryterium1;zakres2;kryterium2)</div>

Możesz dodawać kolejne pary, jeśli potrzebujesz więcej warunków.

## Przykład z liczbą i tekstem

Załóżmy, że A zawiera region, B status, a C wartość sprzedaży:

<div class="formula">=LICZ.WARUNKI(A2:A100;"Północ";B2:B100;"Gotowe";C2:C100;">=1000")</div>

Policzone zostaną tylko rekordy spełniające wszystkie trzy kryteria.

## Kryteria z komórek

Możesz pobierać warunki z komórek, np. region z F2 oraz status z G2:

<div class="formula">=LICZ.WARUNKI(A2:A100;F2;B2:B100;G2)</div>

To dobre rozwiązanie dla dynamicznych raportów i prostych dashboardów.

## Zakresy muszą odpowiadać tym samym rekordom

Jeżeli pierwszy zakres to A2:A100, drugi powinien zwykle obejmować te same wiersze, np. B2:B100.

Przesunięcie jednego zakresu o wiersz może prowadzić do błędnej interpretacji danych albo błędu formuły.

## LICZ.WARUNKI działa jak logiczne ORAZ

Każda kolejna para zawęża wynik. Wszystkie kryteria muszą być spełnione.

Jeżeli potrzebujesz logiki LUB, np. policzyć status Gotowe albo W toku, możesz zsumować dwa wyniki LICZ.JEŻELI lub zastosować inną konstrukcję zależną od wersji Excela.

## Przykład z zakresem liczbowym

<div class="formula">=LICZ.WARUNKI(C2:C100;">=100";C2:C100;"<=500")</div>

To najprostsza metoda liczenia wartości znajdujących się w przedziale.

## Kiedy używać LICZ.WARUNKI?

Gdy pytanie brzmi np. „ile zamówień z Warszawy ma status Gotowe i wartość co najmniej 1000 zł?”. Jeżeli zamiast liczby rekordów potrzebujesz sumy ich wartości, odpowiednikiem będzie SUMA.WARUNKÓW.