---
layout: ../../layouts/ArticleLayout.astro
title: "SEKWENCJA w Excelu — automatyczne serie liczb"
description: "Jak używać funkcji SEKWENCJA w Excelu do tworzenia serii liczb, numeracji, kroków i tablic wielokolumnowych."
slug: "sekwencja-excel"
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

<div class="answer"><strong>Najprościej:</strong> SEKWENCJA tworzy dynamiczną serię kolejnych liczb bez przeciągania uchwytu wypełniania.</div>

<div class="formula">=SEKWENCJA(10)</div>

Wynik to liczby od 1 do 10 rozlane pionowo do dziesięciu komórek.

## Jak działa składnia?

Pierwszy argument określa liczbę wierszy. Drugi opcjonalnie liczbę kolumn. Trzeci wartość początkową, a czwarty krok.

<div class="formula">=SEKWENCJA(10;1;100;10)</div>

Ta formuła tworzy dziesięć liczb: 100, 110, 120 i tak dalej.

## Seria pozioma

Jeżeli chcesz rozlać wynik w prawo:

<div class="formula">=SEKWENCJA(1;12)</div>

Otrzymasz jeden wiersz zawierający liczby od 1 do 12.

## Tablica dwuwymiarowa

<div class="formula">=SEKWENCJA(4;3)</div>

Excel utworzy cztery wiersze i trzy kolumny kolejnych liczb.

## Numeracja dynamicznej listy

SEKWENCJA świetnie nadaje się do tworzenia numeracji obok wyniku innej formuły. Jeśli lista ma zmienną długość, liczba wierszy może zależeć od innego obliczenia.

## Ujemny krok

Możesz tworzyć serię malejącą:

<div class="formula">=SEKWENCJA(10;1;10;-1)</div>

Wynik rozpocznie się od 10 i zakończy na 1.

## Przykład z miesiącami

SEKWENCJA może dostarczać kolejnych numerów miesięcy do dalszych obliczeń. Po połączeniu z funkcją DATA możesz budować dynamiczne kalendarze i zestawienia okresów.

## Dlaczego SEKWENCJA jest lepsza od wpisywania liczb ręcznie?

Formuła określa regułę, a nie statyczną listę. Zmiana pierwszego argumentu z 10 na 100 natychmiast rozszerzy serię bez kopiowania komórek.

## Kiedy używać SEKWENCJA?

Do numeracji, kalendarzy, osi raportów, testowych danych, generowania indeksów i wszędzie tam, gdzie liczba pozycji może zmieniać się dynamicznie. To prosta funkcja, ale w połączeniu z innymi funkcjami tablicowymi staje się bardzo uniwersalnym narzędziem.