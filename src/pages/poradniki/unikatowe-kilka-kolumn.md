---
layout: ../../layouts/ArticleLayout.astro
title: "UNIKATOWE dla kilku kolumn w Excelu"
description: "Jak zwrócić unikalne kombinacje kilku kolumn za pomocą UNIKATOWE. Przykłady dla par klient–produkt, region–status i całych wierszy."
slug: "unikatowe-kilka-kolumn"
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

<div class="answer"><strong>Najprościej:</strong> przekaż do UNIKATOWE zakres obejmujący kilka kolumn, aby zwrócić unikalne kombinacje całych wierszy.</div>

<div class="formula">=UNIKATOWE(A2:B100)</div>

Jeżeli kolumna A zawiera klienta, a B produkt, otrzymasz każdą unikalną parę klient–produkt.

## Co Excel uznaje za duplikat?

Przy zakresie wielokolumnowym porównywany jest cały wiersz. Dwa rekordy są takie same tylko wtedy, gdy wartości we wszystkich przekazanych kolumnach są identyczne.

Dlatego para Klient A + Produkt 1 jest inna niż Klient A + Produkt 2.

## Usunięcie pustych wierszy

Jeżeli chcesz pominąć rekordy bez kluczowej wartości, połącz funkcję z FILTRUJ:

<div class="formula">=UNIKATOWE(FILTRUJ(A2:B100;A2:A100<>""))</div>

Warunek opiera się na pierwszej kolumnie, ale zwracany zakres nadal obejmuje dwie kolumny.

## Sortowanie unikalnych kombinacji

<div class="formula">=SORTUJ(UNIKATOWE(FILTRUJ(A2:B100;A2:A100<>""));1;1)</div>

Wynik zostanie posortowany rosnąco według pierwszej kolumny.

## Przykład: region i status

Załóżmy, że A zawiera region, a B status zamówienia. UNIKATOWE(A2:B100) pokaże wszystkie kombinacje, które faktycznie występują w danych.

To może być wygodne przy budowaniu list kontrolnych albo szybkiej analizie jakości danych.

## Unikalne kolumny zamiast wierszy

Drugi argument funkcji pozwala zmienić kierunek porównania. W typowych tabelach biznesowych najczęściej pozostawiasz wartość domyślną, ponieważ chcesz porównywać rekordy w wierszach.

## Uważaj na ukryte różnice

Dodatkowa spacja, inny typ danych albo liczba zapisana jako tekst może sprawić, że dwa pozornie identyczne rekordy zostaną potraktowane jako różne.

## Kiedy używać zakresu wielokolumnowego?

Gdy pojedyncza kolumna nie identyfikuje interesującej Cię kombinacji. Przykłady to klient + produkt, pracownik + projekt, region + status albo rok + miesiąc. Jedna formuła potrafi utworzyć aktualizującą się listę takich kombinacji bez kolumn pomocniczych i ręcznego usuwania duplikatów.