---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zamienić datę na nazwę miesiąca w Excelu?"
description: "Jak z daty wyświetlić nazwę miesiąca, np. październik lub paź. Gotowe formuły z funkcją TEKST i przykłady."
slug: "data-na-nazwe-miesiaca"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "Pierwszy dzień miesiąca"
    url: "/poradniki/pierwszy-dzien-miesiaca/"
    category: "Daty"
  - title: "Ostatni dzień miesiąca"
    url: "/poradniki/ostatni-dzien-miesiaca/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby wyświetlić pełną nazwę miesiąca z daty</strong>, użyj funkcji TEKST z formatem "mmmm".</div>

<div class="formula">=TEKST(A2;"mmmm")</div>

Dla daty 06.10.2026 wynikiem będzie nazwa miesiąca.

## Skrócona nazwa miesiąca

Jeżeli wystarczy skrót, użyj trzech liter m:

<div class="formula">=TEKST(A2;"mmm")</div>

## Miesiąc i rok

<div class="formula">=TEKST(A2;"mmmm rrrr")</div>

Taki zapis jest wygodny np. w nagłówkach raportów.

## Ważne: wynik jest tekstem

Funkcja TEKST zamienia wartość daty na tekst.

Jeżeli później chcesz wykonywać obliczenia na dacie, zachowaj oryginalną datę w osobnej komórce i używaj jej do dalszych formuł.

## Alternatywa bez formuły

Jeżeli chcesz tylko zmienić sposób wyświetlania daty, możesz ustawić format niestandardowy komórki na mmmm. Wtedy komórka nadal będzie zawierała prawdziwą datę.
