---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI i tekst w Excelu — warunki dla napisów"
description: "Jak używać JEŻELI z tekstem w Excelu. Porównywanie statusów, sprawdzanie wartości tekstowych i zwracanie komunikatów."
slug: "jezeli-tekst"
category: "Warunki i logika"
categorySlug: "formuly/logika"
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

<div class="answer"><strong>Najprościej:</strong> tekst porównywany bezpośrednio w funkcji JEŻELI umieść w cudzysłowie.</div>

<div class="formula">=JEŻELI(A2="Gotowe";"Zamknięte";"W toku")</div>

Jeżeli A2 zawiera tekst Gotowe, formuła zwróci Zamknięte. W każdym innym przypadku wynikiem będzie W toku.

## Porównanie dokładnej wartości tekstowej

Najczęstszy scenariusz to sprawdzenie statusu, kategorii albo kodu.

<div class="formula">=JEŻELI(B2="VIP";10%;0)</div>

Dla klienta oznaczonego jako VIP formuła zwróci 10%, a dla pozostałych 0.

## Kilka dozwolonych tekstów

Gdy ten sam wynik ma obowiązywać dla kilku statusów, połącz JEŻELI z LUB.

<div class="formula">=JEŻELI(LUB(A2="Nowe";A2="W toku");"Aktywne";"Nieaktywne")</div>

To czytelniejsze niż powtarzanie tego samego rezultatu w kilku zagnieżdżonych JEŻELI.

## Tekst z innej komórki

Nie musisz wpisywać kryterium na stałe w formule. Możesz odwołać się do komórki:

<div class="formula">=JEŻELI(A2=F2;"Zgodne";"Różne")</div>

Wtedy użytkownik może zmieniać wartość w F2 bez edycji samej formuły.

## Co z wielkością liter?

Typowe porównanie A2="abc" nie rozróżnia wielkich i małych liter. Dla większości biznesowych arkuszy jest to pożądane.

Jeżeli wielkość liter ma znaczenie, potrzebujesz dokładniejszej metody porównania tekstu.

## Uważaj na dodatkowe spacje

Wartości Wizualnie identyczne mogą różnić się niewidoczną spacją na końcu. Tekst Gotowe oraz Gotowe ze spacją nie zawsze zachowają się tak, jak oczekujesz.

To szczególnie częste po imporcie danych z CSV, systemów ERP i kopiowaniu z innych aplikacji.

## Sprawdzanie fragmentu tekstu

Jeżeli chcesz ustalić nie to, czy komórka jest równa konkretnemu napisowi, lecz czy zawiera określony fragment, samo JEŻELI nie wystarczy. Potrzebujesz dodatkowej funkcji wyszukującej tekst.

## Kiedy ta metoda jest najlepsza?

JEŻELI z porównaniem tekstowym świetnie sprawdza się przy statusach, prostych kategoriach, typach dokumentów i kodach. Gdy lista możliwych wartości rośnie, lepiej przenieść mapowanie status → wynik do osobnej tabeli niż tworzyć bardzo długą serię warunków.