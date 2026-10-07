---
layout: ../../layouts/ArticleLayout.astro
title: "Operator # i zakres rozlany w Excelu"
description: "Co oznacza operator # w Excelu i jak odwoływać się do całego wyniku tablicy dynamicznej. Przykłady z FILTRUJ i UNIKATOWE."
slug: "zakres-rozlany-operator-hash"
category: "Formuły dynamiczne"
categorySlug: "formuly/dynamiczne"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> jeśli formuła dynamiczna zaczyna się w F2, zapis F2# oznacza cały aktualny zakres jej rozlanego wyniku.</div>

<div class="formula">=ILE.NIEPUSTYCH(F2#)</div>

Jeżeli F2 zawiera dynamiczną listę, formuła policzy wszystkie wartości w tej liście niezależnie od tego, czy wynik ma 5, 20 czy 200 wierszy.

## Co to jest zakres rozlany?

Funkcje takie jak FILTRUJ, UNIKATOWE, SORTUJ i SEKWENCJA mogą zwracać więcej niż jedną wartość. Excel umieszcza formułę tylko w komórce początkowej, a pozostałe wartości zajmują sąsiednie komórki automatycznie.

Ten automatycznie zajęty obszar to zakres rozlany.

## Po co operator #?

Bez operatora F2 oznacza tylko pierwszą komórkę wyniku. F2# oznacza cały zakres należący do formuły rozpoczynającej się w F2.

<div class="formula">=SORTUJ(F2#)</div>

Jeżeli lista w F2 zmieni długość, SORTUJ automatycznie obejmie nowy zakres.

## Wykorzystanie w dalszych obliczeniach

Możesz zliczać, sumować albo przetwarzać wynik dynamiczny:

<div class="formula">=ILE.NIEPUSTYCH(UNIKATOWE(F2#))</div>

Nie musisz przewidywać, do którego wiersza sięga wynik.

## Odwołanie do komórki wewnątrz rozlanego wyniku

Najlepiej odwoływać się do komórki początkowej z operatorem #. To pokazuje, że zależność dotyczy całej tablicy, a nie przypadkowo ustalonego zakresu.

## Co może zablokować rozlanie?

Komórki, do których Excel chce wpisać wynik, muszą być dostępne. Jeżeli w obszarze znajduje się inna wartość, formuła dynamiczna nie może rozlać całej tablicy.

## Dlaczego to ważne przy projektowaniu arkusza?

Dawniej często rezerwowało się np. F2:F1000, zakładając maksymalną liczbę wyników. Operator # pozwala pracować z dokładną długością listy.

## Przykład praktyczny

Jeżeli F2 zawiera UNIKATOWE(A2:A1000), kolejne formuły mogą korzystać z F2# jako aktualnej listy klientów. Po dodaniu nowego klienta zakres automatycznie się rozszerzy.

Operator # jest jednym z najważniejszych elementów pracy z nowoczesnymi tablicami dynamicznymi, bo pozwala budować całe łańcuchy formuł bez sztywnych adresów końcowych.