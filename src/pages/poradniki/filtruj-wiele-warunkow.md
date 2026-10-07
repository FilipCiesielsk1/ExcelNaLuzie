---
layout: ../../layouts/ArticleLayout.astro
title: "FILTRUJ z wieloma warunkami w Excelu"
description: "Jak używać FILTRUJ z kilkoma warunkami jednocześnie. Przykłady z tekstem, liczbami i dynamicznymi kryteriami."
slug: "filtruj-wiele-warunkow"
category: "Formuły dynamiczne"
categorySlug: "formuly/dynamiczne"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> gdy wszystkie warunki muszą być spełnione jednocześnie, pomnóż testy logiczne przez siebie wewnątrz funkcji FILTRUJ.</div>

<div class="formula">=FILTRUJ(A2:D100;(B2:B100="Warszawa")*(C2:C100="Gotowe");"Brak wyników")</div>

Formuła zwróci tylko rekordy z Warszawy, które jednocześnie mają status Gotowe.

## Dlaczego używamy znaku mnożenia?

Każdy test tworzy tablicę PRAWDA i FAŁSZ. W obliczeniach PRAWDA zachowuje się jak 1, a FAŁSZ jak 0. Mnożenie sprawia więc, że wynik jest prawdziwy tylko wtedy, gdy oba testy mają wartość 1.

To odpowiednik logicznego ORAZ.

## Dodanie trzeciego kryterium

Możesz dopisać kolejne warunki:

<div class="formula">=FILTRUJ(A2:D100;(B2:B100="Warszawa")*(C2:C100="Gotowe")*(D2:D100>=1000);"Brak wyników")</div>

Teraz rekord musi spełnić wszystkie trzy wymagania.

## Warunki pobierane z komórek

W praktycznych raportach wygodniej przechowywać kryteria poza formułą:

<div class="formula">=FILTRUJ(A2:D100;(B2:B100=F2)*(C2:C100=G2);"Brak wyników")</div>

Użytkownik zmienia F2 i G2, a lista aktualizuje się automatycznie.

## Warunki liczbowe

Operatorów porównania nie trzeba tu wpisywać w cudzysłowie, ponieważ budujesz bezpośredni test logiczny:

<div class="formula">=FILTRUJ(A2:D100;(D2:D100>=1000)*(D2:D100<=5000);"Brak wyników")</div>

To zwróci rekordy z wartością od 1000 do 5000 włącznie.

## Uważaj na puste kryteria

Jeżeli F2 jest puste, zapis B2:B100=F2 będzie szukał pustych komórek. W interaktywnym raporcie warto zdecydować, czy puste pole oznacza brak filtra, czy rzeczywiście wyszukiwanie pustych wartości.

## Czy wiele warunków trzeba rozdzielać na kolumny pomocnicze?

Nie przy prostych przypadkach. Dwa lub trzy warunki wewnątrz FILTRUJ są czytelne. Jeśli logika staje się bardzo złożona, kolumny pomocnicze mogą jednak ułatwić testowanie i późniejsze utrzymanie arkusza.

Ta konstrukcja szczególnie dobrze nadaje się do dynamicznych zestawień i paneli, gdzie użytkownik zmienia kilka parametrów, a wynik ma odświeżyć się natychmiast.