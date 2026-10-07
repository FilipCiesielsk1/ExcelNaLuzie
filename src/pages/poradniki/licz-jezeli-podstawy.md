---
layout: ../../layouts/ArticleLayout.astro
title: "LICZ.JEŻELI w Excelu — prosty przykład"
description: "Jak używać LICZ.JEŻELI w Excelu. Gotowa formuła, przykłady z tekstem i liczbami oraz najczęstsze błędy."
slug: "licz-jezeli-podstawy"
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

<div class="answer"><strong>Najprościej:</strong> funkcja LICZ.JEŻELI liczy komórki w zakresie, które spełniają jeden wskazany warunek.</div>

<div class="formula">=LICZ.JEŻELI(A2:A100;"Gotowe")</div>

Ta formuła policzy, ile komórek w zakresie A2:A100 zawiera tekst Gotowe.

## Jak działa LICZ.JEŻELI?

Funkcja ma dwa podstawowe argumenty: zakres oraz kryterium.

<div class="formula">=LICZ.JEŻELI(zakres;kryterium)</div>

Zakres wskazuje, gdzie Excel ma szukać. Kryterium określa, co dokładnie ma zostać policzone.

## Przykład z liczbą

Jeżeli chcesz policzyć, ile wartości w B2:B100 jest równych 100:

<div class="formula">=LICZ.JEŻELI(B2:B100;100)</div>

Dla prostego porównania liczbowego nie potrzebujesz cudzysłowów.

## Większe i mniejsze wartości

Operator porównania wpisujesz jako tekst:

<div class="formula">=LICZ.JEŻELI(B2:B100;">=100")</div>

To policzy wszystkie komórki o wartości co najmniej 100.

## Kryterium z innej komórki

Zamiast wpisywać warunek na stałe, możesz wskazać komórkę:

<div class="formula">=LICZ.JEŻELI(A2:A100;F2)</div>

Wtedy użytkownik zmienia wartość w F2, a formuła automatycznie przelicza wynik.

## Gdzie przydaje się LICZ.JEŻELI?

Najczęściej w raportach statusów, kontroli kompletności danych, zestawieniach sprzedaży i prostych dashboardach. Możesz szybko policzyć liczbę rekordów oznaczonych jako Gotowe, liczbę wartości przekraczających próg albo liczbę wystąpień konkretnego kodu.

## Najczęstszy błąd

LICZ.JEŻELI obsługuje tylko jeden warunek. Jeżeli chcesz jednocześnie sprawdzić np. miasto i status, potrzebujesz funkcji LICZ.WARUNKI.

Drugim częstym problemem jest nieprawidłowe zapisanie operatora. Zapis >=100 powinien znaleźć się w cudzysłowie, ponieważ jest tekstowym kryterium przekazywanym funkcji.

## Kiedy użyć czegoś innego?

Jeżeli chcesz zsumować wartości spełniające kryterium, użyj SUMA.JEŻELI lub SUMA.WARUNKÓW. LICZ.JEŻELI zwraca wyłącznie liczbę pasujących komórek — nie sumuje ich zawartości.

## Przykład: kontrola statusów w tabeli

Jeżeli w kolumnie A masz status każdego zadania, możesz szybko sprawdzić liczbę pozycji zakończonych i porównać ją z liczbą wszystkich rekordów. To prosty sposób na budowę wskaźnika postępu bez tabeli przestawnej.

<div class="formula">=LICZ.JEŻELI(A2:A100;"Gotowe")</div>

W praktyce dobrze jest trzymać kryterium w jednej komórce pomocniczej, jeśli ma być często zmieniane.