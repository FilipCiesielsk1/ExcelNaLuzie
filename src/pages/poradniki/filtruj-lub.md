---
layout: ../../layouts/ArticleLayout.astro
title: "FILTRUJ z warunkiem LUB w Excelu"
description: "Jak filtrować dane, gdy wystarczy jeden z kilku warunków. FILTRUJ z logiką LUB, tekstem i kryteriami z komórek."
slug: "filtruj-lub"
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

<div class="answer"><strong>Najprościej:</strong> gdy wystarczy spełnienie jednego z warunków, dodaj do siebie testy logiczne wewnątrz funkcji FILTRUJ.</div>

<div class="formula">=FILTRUJ(A2:C100;(B2:B100="Warszawa")+(B2:B100="Gdańsk");"Brak wyników")</div>

Formuła zwróci rekordy z Warszawy albo z Gdańska.

## Dlaczego używamy znaku plus?

Każdy warunek daje PRAWDA lub FAŁSZ. Po przeliczeniu na liczby otrzymujemy 1 lub 0. Dodanie warunków powoduje, że wynik jest większy od zera, gdy przynajmniej jeden test jest prawdziwy.

To praktyczny odpowiednik logicznego LUB w tablicach dynamicznych.

## LUB dla różnych kolumn

Warunki nie muszą dotyczyć tej samej kolumny:

<div class="formula">=FILTRUJ(A2:D100;(B2:B100="VIP")+(C2:C100="Pilne");"Brak wyników")</div>

Wynik zawiera rekordy, w których klient jest VIP albo status to Pilne.

## Łączenie ORAZ i LUB

Możesz grupować testy nawiasami. Załóżmy, że wartość musi być co najmniej 1000, a region może być Warszawa albo Gdańsk:

<div class="formula">=FILTRUJ(A2:D100;((B2:B100="Warszawa")+(B2:B100="Gdańsk"))*(D2:D100>=1000);"Brak wyników")</div>

Nawiasy są tutaj bardzo ważne. Najpierw powstaje warunek alternatywny dla miasta, a potem jest on łączony z progiem liczbowym.

## Kryteria z komórek

<div class="formula">=FILTRUJ(A2:C100;(B2:B100=F2)+(B2:B100=G2);"Brak wyników")</div>

F2 i G2 mogą zawierać dwie kategorie, które użytkownik chce zobaczyć razem.

## Najczęstszy błąd

Brak nawiasów przy bardziej złożonej formule może zmienić kolejność działań i dać inny wynik niż zamierzony. Warto każdy test najpierw sprawdzić osobno.

## Kiedy stosować takie rozwiązanie?

Gdy dynamiczna lista ma obejmować kilka równorzędnych kategorii, statusów lub regionów. Przy bardzo wielu możliwych wartościach wygodniejsze może być inne podejście, ale dla dwóch lub trzech alternatyw dodawanie testów jest krótkie i czytelne.

Najważniejsze rozróżnienie: mnożenie testów oznacza ORAZ, a dodawanie testów oznacza LUB.