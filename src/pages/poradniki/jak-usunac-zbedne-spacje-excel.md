---
layout: ../../layouts/ArticleLayout.astro
title: "Jak usunąć zbędne spacje w Excelu?"
description: "Usuń początkowe, końcowe i podwójne spacje w Excelu. Formuła USUŃ.ZBĘDNE.ODSTĘPY oraz sposób na twarde spacje."
slug: "jak-usunac-zbedne-spacje-excel"
category: "Dane i listy"
categorySlug: "formuly/dane"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "7 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Liczby jako tekst — jak je przekonwertować?"
    url: "/poradniki/liczby-zapisane-jako-tekst-excel/"
    category: "Poradnik"
  - title: "Zamiana fragmentu tekstu w Excelu"
    url: "/poradniki/zamien-fragment-tekstu/"
    category: "Poradnik"
---

<div class="answer"><strong>Najkrócej:</strong> wpisz obok tekstu funkcję <strong>=USUŃ.ZBĘDNE.ODSTĘPY(A2)</strong>, aby usunąć spacje na początku i końcu oraz zamienić wiele zwykłych spacji między wyrazami na pojedynczą.</div>

<div class="formula">=USUŃ.ZBĘDNE.ODSTĘPY(A2)</div>

To szczególnie przydatne po kopiowaniu nazw z internetu, importowaniu list klientów lub scalaniu danych z różnych systemów.

## Przykład: nazwy klientów przed i po oczyszczeniu

W kolumnie A wpisz lub wklej wartości ze spacjami. W B2 wprowadź formułę i skopiuj ją w dół.

| A — oryginalna zawartość | B — wynik |
|---|---|
| "  Jan   Nowak  " | "Jan Nowak" |
| " Anna  Kowalska" | "Anna Kowalska" |
| "Biuro  Północ " | "Biuro Północ" |

Cudzysłowy w tabeli służą jedynie do pokazania granic tekstu — nie wprowadzaj ich jako dodatkowych znaków w komórce. Formuła usuwa **zwykłe spacje**, ale nie zmienia liter ani innych znaków słowa.

## Jak usunąć twardą spację o kodzie 160?

Wartości pobrane ze stron WWW mogą zawierać spację nierozdzielającą. Wygląda podobnie do zwykłej, ale funkcja USUŃ.ZBĘDNE.ODSTĘPY nie usuwa jej samodzielnie.

<div class="formula">=USUŃ.ZBĘDNE.ODSTĘPY(PODSTAW(A2;ZNAK(160);" "))</div>

PODSTAW zamienia twarde spacje na zwykłe, a funkcja zewnętrzna upraszcza odstępy. Na przykład napis zawierający znak 160 między „Jan” a „Nowak” może po zamianie zostać ujednolicony.

## A co ze znakami sterującymi i podziałami wiersza?

Jeżeli tekst zawiera dodatkowo niedrukowalne znaki ASCII, połącz czyszczenie z funkcją OCZYŚĆ:

<div class="formula">=USUŃ.ZBĘDNE.ODSTĘPY(OCZYŚĆ(PODSTAW(A2;ZNAK(160);" ")))</div>

OCZYŚĆ nie usuwa wszystkich możliwych znaków Unicode. Jeśli wynik nadal wygląda podejrzanie, sprawdź znak po znaku, czy import nie dodał innych niewidocznych separatorów. Nie zakładaj, że każdą wartość z CSV można wyczyścić jednym uniwersalnym wyrażeniem.

## Jak zastąpić oryginalne wartości?

Po sprawdzeniu rezultatów skopiuj kolumnę z formułami, a następnie użyj **Wklej specjalnie → Wartości**. Pozwoli to wkleić gotowy tekst bez zależności od pierwotnej kolumny. Przed masową zmianą zachowaj kopię oryginału, szczególnie jeśli te same dane są kluczem do wyszukiwania.

Jeżeli oczyszczone identyfikatory nadal nie są rozpoznawane jako duplikaty, sprawdź też, czy nie porównujesz tekstu z liczbą. O tym, jak rozpoznać problem, piszemy w [poradniku o liczbach zapisanych jako tekst](/poradniki/liczby-zapisane-jako-tekst-excel/).

**[Pobierz bezpłatny skoroszyt z czyszczeniem danych](/downloads/przyklady/dane-duplikaty-czyszczenie.xlsx)**. W arkuszu „Czyszczenie” umieściliśmy przykłady nazw, kwot i gotowe formuły.
