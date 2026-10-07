---
layout: ../../layouts/ArticleLayout.astro
title: "SORTUJ.WEDŁUG w Excelu — sortowanie po innej kolumnie"
description: "Jak używać SORTUJ.WEDŁUG w Excelu. Sortowanie po kolumnie spoza wyniku, kilka poziomów sortowania i praktyczne przykłady."
slug: "sortuj-wedlug"
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

<div class="answer"><strong>Najprościej:</strong> SORTUJ.WEDŁUG sortuje zwracaną tablicę na podstawie osobnego zakresu, dzięki czemu jest bardziej elastyczne niż zwykłe SORTUJ.</div>

<div class="formula">=SORTUJ.WEDŁUG(A2:B100;C2:C100;-1)</div>

Formuła zwróci kolumny A:B, ale ustawi ich kolejność według wartości z kolumny C malejąco.

## Dlaczego to jest przydatne?

Nie musisz zwracać kolumny, według której sortujesz. To szczególnie wygodne w raportach, gdy użytkownik ma zobaczyć nazwę i wynik, ale techniczna kolumna z priorytetem nie powinna być wyświetlana.

## Sortowanie rosnące

<div class="formula">=SORTUJ.WEDŁUG(A2:B100;C2:C100;1)</div>

Wartość 1 oznacza kolejność rosnącą, a -1 malejącą.

## Dwa poziomy sortowania

Możesz podać kolejną parę zakres + kierunek:

<div class="formula">=SORTUJ.WEDŁUG(A2:C100;B2:B100;1;C2:C100;-1)</div>

Najpierw dane są sortowane rosnąco według kolumny B. Dla identycznych wartości Excel używa kolumny C i sortuje ją malejąco.

## Połączenie z FILTRUJ

Możliwe jest także sortowanie wcześniej przefiltrowanej tablicy, ale pamiętaj, że zakres używany do sortowania musi odpowiadać wynikowi. Przy bardziej rozbudowanych konstrukcjach warto zachować czytelność i testować każdy etap osobno.

## SORTUJ czy SORTUJ.WEDŁUG?

SORTUJ jest prostsze, gdy kolumna sortująca znajduje się w zwracanej tablicy i wystarczy odwołać się do jej numeru.

SORTUJ.WEDŁUG jest wygodniejsze, gdy kolumnę sortującą wskazujesz bezpośrednio albo potrzebujesz kilku poziomów sortowania.

## Przykład biznesowy

Możesz wyświetlać klienta i nazwę projektu, ale sortować rekordy według niewidocznej kolumny z wartością sprzedaży. Dane źródłowe pozostają w pierwotnej kolejności, a raport automatycznie pokazuje najważniejsze rekordy na górze.

To dobra funkcja wszędzie tam, gdzie wynik ma być prezentacyjny, a reguła sortowania opiera się na dodatkowych danych technicznych.