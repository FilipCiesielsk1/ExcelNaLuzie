---
layout: ../../layouts/ArticleLayout.astro
title: "Kilka kryteriów w jednej formule JEŻELI"
description: "Jak łączyć kilka kryteriów w jednej formule JEŻELI przy użyciu ORAZ i LUB. Praktyczny przykład z warunkami mieszanymi."
slug: "jezeli-kilka-kryteriow"
category: "Warunki i logika"
categorySlug: "formuly/logika"
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

<div class="answer"><strong>Najprościej:</strong> buduj złożony warunek z mniejszych części. ORAZ oznacza, że wszystkie kryteria muszą być spełnione, a LUB — że wystarczy jedno.</div>

<div class="formula">=JEŻELI(ORAZ(B2>=100;LUB(C2="VIP";D2="Pilne"));"Priorytet";"Standard")</div>

W tym przykładzie B2 musi być co najmniej 100, a dodatkowo C2 musi zawierać VIP lub D2 musi zawierać Pilne.

## Rozbij warunek na zdanie

Zanim napiszesz formułę, zapisz regułę zwykłym językiem:

„Jeżeli wartość jest co najmniej 100 ORAZ klient jest VIP LUB zlecenie jest pilne, ustaw Priorytet”.

Następnie doprecyzuj grupowanie. W naszym przykładzie wymagamy wartości >=100 zawsze, a jeden z dwóch pozostałych warunków jest alternatywny.

## Grupowanie ma znaczenie

To nie jest to samo:

<div class="formula">=ORAZ(B2>=100;LUB(C2="VIP";D2="Pilne"))</div>

co:

<div class="formula">=LUB(ORAZ(B2>=100;C2="VIP");D2="Pilne")</div>

W drugim wariancie samo D2="Pilne" wystarczy do spełnienia całego testu, niezależnie od wartości w B2.

## Przykład kontroli rekordu

Załóżmy, że rekord jest poprawny, gdy ma wpisany numer, dodatnią kwotę i jeden z dopuszczonych statusów.

<div class="formula">=JEŻELI(ORAZ(A2<>"";B2>0;LUB(C2="Nowe";C2="Gotowe"));"OK";"Sprawdź")</div>

To znacznie czytelniejsze niż kilka poziomów JEŻELI zwracających po drodze te same komunikaty.

## Buduj od środka

Przy złożonych formułach najpierw sprawdź osobno ORAZ i LUB. Upewnij się, że zwracają oczekiwane PRAWDA albo FAŁSZ. Dopiero potem umieść cały test wewnątrz JEŻELI.

## Testuj kombinacje, nie tylko pojedynczy przypadek

Dla kilku kryteriów liczba możliwych kombinacji szybko rośnie. Sprawdź przypadek, gdy wszystkie warunki są prawdziwe, każdy z nich osobno jest fałszywy oraz sytuacje, w których spełniona jest tylko jedna gałąź LUB.

## Kiedy formuła jest już zbyt skomplikowana?

Jeśli warunek wymaga wielu zagnieżdżonych ORAZ, LUB i JEŻELI, rozważ rozbicie go na kolumny pomocnicze. To nie jest gorsze rozwiązanie. W wielu arkuszach biznesowych kilka prostych kolumn kontrolnych jest bezpieczniejsze niż jedna bardzo długa formuła.

Dobra logika w Excelu powinna być nie tylko poprawna, ale też możliwa do sprawdzenia przez osobę, która nie pisała jej od początku.