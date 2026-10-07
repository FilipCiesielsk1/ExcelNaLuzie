---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć unikalne wartości w Excelu?"
description: "Jak policzyć unikalne wartości w Excelu za pomocą UNIKATOWE, FILTRUJ i ILE.NIEPUSTYCH. Praktyczna formuła bez pustych komórek."
slug: "policz-unikalne-wartosci"
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

<div class="answer"><strong>Najprościej:</strong> w nowym Excelu najpierw zwróć unikalne wartości, usuń puste pozycje i policz wynik.</div>

<div class="formula">=ILE.NIEPUSTYCH(UNIKATOWE(FILTRUJ(A2:A100;A2:A100<>"")))</div>

Formuła liczy różne, niepuste wartości znajdujące się w zakresie A2:A100.

## Jak działa ta formuła?

Najbardziej wewnętrzna funkcja FILTRUJ usuwa puste komórki:

<div class="formula">=FILTRUJ(A2:A100;A2:A100<>"";"")</div>

Następnie UNIKATOWE pozostawia po jednej pozycji dla każdej wartości:

<div class="formula">=UNIKATOWE(FILTRUJ(A2:A100;A2:A100<>"";""))</div>

Na końcu ILE.NIEPUSTYCH zlicza wynikową listę.

## Sama lista unikalnych wartości

Jeśli nie potrzebujesz liczby, lecz listy:

<div class="formula">=UNIKATOWE(A2:A100)</div>

Wynik rozleje się automatycznie do kolejnych komórek.

## Posortowana lista

<div class="formula">=SORTUJ(UNIKATOWE(FILTRUJ(A2:A100;A2:A100<>"")))</div>

To wygodne np. przy tworzeniu list pomocniczych i prostych raportów.

## Dlaczego usuwamy puste komórki?

Pusta wartość może pojawić się jako jeden z unikalnych elementów. Jeżeli chcesz policzyć wyłącznie rzeczywiste kategorie, klientów albo produkty, lepiej odfiltrować puste pozycje przed zliczeniem.

## Przykład biznesowy

Jeżeli A2:A100 zawiera nazwy klientów z wielu transakcji, formuła zwróci liczbę różnych klientów, a nie liczbę transakcji.

To samo podejście działa dla produktów, miast, handlowców, numerów zleceń i innych kategorii.

## Starsze wersje Excela

UNIKATOWE i FILTRUJ są funkcjami nowoczesnych wersji Excela. W starszych wydaniach liczenie wartości unikalnych wymaga innych konstrukcji, tabeli przestawnej albo bardziej złożonej formuły.

Jeżeli pracujesz w Microsoft 365 lub nowszym Excelu, wariant z UNIKATOWE jest znacznie czytelniejszy i łatwiejszy do utrzymania.