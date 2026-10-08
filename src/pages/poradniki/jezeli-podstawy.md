---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI w Excelu — prosty przykład krok po kroku"
description: "Jak działa funkcja JEŻELI w Excelu. Prosty przykład, składnia, porównania liczb i tekstu oraz najczęstsze błędy."
slug: "jezeli-podstawy"
category: "Warunki i logika"
categorySlug: "formuly/logika"
date: "2026-10-07"
updated: "2026-10-08"
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

<div class="answer"><strong>Najprościej:</strong> funkcja JEŻELI sprawdza warunek i zwraca jeden wynik, gdy warunek jest prawdziwy, oraz drugi, gdy jest fałszywy.</div>

<div class="formula">=JEŻELI(B2>=100;"TAK";"NIE")</div>

Jeżeli wartość w komórce B2 jest większa lub równa 100, Excel zwróci tekst TAK. W przeciwnym razie zobaczysz NIE.

## Jak czytać funkcję JEŻELI?

Schemat jest prosty:

<div class="formula">=JEŻELI(warunek;wynik_gdy_prawda;wynik_gdy_fałsz)</div>

Najważniejszy jest pierwszy argument. To pytanie zadawane Excelowi, np. „czy sprzedaż jest większa niż 100?”, „czy status to Gotowe?” albo „czy data jest wcześniejsza niż dzisiaj?”.

## Przykład z oceną wyniku

Załóżmy, że w B2 znajduje się wynik testu. Chcesz oznaczyć wszystkie wartości od 50 punktów jako zaliczone.

<div class="formula">=JEŻELI(B2>=50;"Zaliczone";"Niezaliczone")</div>

Dla 72 punktów wynikiem będzie Zaliczone, a dla 43 punktów Niezaliczone.

## Porównywanie tekstu

Tekst wpisywany bezpośrednio w formule musi znaleźć się w cudzysłowie.

<div class="formula">=JEŻELI(A2="Gotowe";"Zamknij";"Czekaj")</div>

Jeżeli A2 zawiera dokładnie Gotowe, formuła zwróci Zamknij.

## Zwracanie liczby zamiast tekstu

Wynik nie musi być komunikatem. Możesz zwrócić liczbę lub odwołanie do innej komórki.

<div class="formula">=JEŻELI(B2>=100;B2*5%;0)</div>

To przykład prostego bonusu: dla wartości co najmniej 100 naliczane jest 5%, a w pozostałych przypadkach zero.

## Najczęstsze błędy

Najczęściej problemem są brakujące cudzysłowy przy tekście, pomylony operator porównania albo nieprawidłowy separator argumentów. W polskiej wersji Excela zwykle używasz średników.

Nie komplikuj JEŻELI od razu. Najpierw sprawdź, czy pojedynczy warunek działa poprawnie. Dopiero potem dodawaj ORAZ, LUB albo kolejne poziomy decyzji.

## Sprawdź wynik na konkretnych danych

Załóż, że w kolumnie B masz kwotę sprzedaży. W komórce C2 wpisz pierwszą formułę z tego poradnika, a potem przeciągnij ją w dół.

| B — sprzedaż | C — wynik JEŻELI |
|---|---|
| 0 | NIE |
| 99 | NIE |
| 100 | TAK |
| 125 | TAK |

Najważniejszy jest wiersz ze 100: operator **>=** uwzględnia samą wartość graniczną. Gdy zmienisz go na **>**, dopiero 101 spełni warunek przy danych całkowitych. Jeżeli komórka B2 jest rzeczywiście pusta, porównanie liczbowe może potraktować ją jak zero, więc wynik również będzie NIE.

## Jeśli brak danych nie powinien oznaczać NIE

W raportach często warto odróżnić brak wpisanej sprzedaży od sprzedaży poniżej celu:

<div class="formula">=JEŻELI(B2="";"Brak danych";JEŻELI(B2>=100;"TAK";"NIE"))</div>

Dla pustej komórki zobaczysz **Brak danych**, dla 99 — **NIE**, a dla 100 — **TAK**. To przydatne, kiedy arkusz ma puste wiersze na przyszłe transakcje. Gdy wynik wygląda inaczej niż oczekujesz, sprawdź, czy w B2 znajduje się liczba, a nie tekst przypominający liczbę.

## Kiedy JEŻELI jest dobrym wyborem?

Używaj go wtedy, gdy wynik rzeczywiście zależy od decyzji typu „tak albo nie”. Jeżeli masz wiele kategorii, kilka niezależnych kryteriów albo chcesz tylko ukryć błąd, istnieją czytelniejsze warianty opisane w kolejnych poradnikach tego klastra.