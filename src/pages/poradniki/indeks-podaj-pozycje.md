---
layout: ../../layouts/ArticleLayout.astro
title: "INDEKS + PODAJ.POZYCJĘ w Excelu — jak wyszukiwać dane?"
description: "Jak połączyć INDEKS i PODAJ.POZYCJĘ do dokładnego wyszukiwania danych. Gotowa formuła, przykład i wyszukiwanie w lewo."
slug: "indeks-podaj-pozycje"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "6 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "X.WYSZUKAJ w lewo"
    url: "/poradniki/xwyszukaj-w-lewo/"
    category: "Wyszukiwanie"
  - title: "Jak znaleźć wartość w tabeli?"
    url: "/poradniki/jak-znalezc-wartosc-w-tabeli/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>INDEKS + PODAJ.POZYCJĘ</strong> pozwala znaleźć pozycję szukanej wartości, a następnie zwrócić wynik z dowolnego zakresu.</div>

<div class="formula">=INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0))</div>

Formuła szuka wartości z F2 w kolumnie A i zwraca odpowiadający wynik z kolumny C.

## Jak działa PODAJ.POZYCJĘ?

<div class="formula">=PODAJ.POZYCJĘ(F2;A2:A100;0)</div>

Ta część zwraca numer pozycji, na której znajduje się szukana wartość. Argument 0 oznacza dokładne dopasowanie.

## Co robi INDEKS?

INDEKS pobiera wartość z tej samej pozycji w zakresie wynikowym.

Dlatego oba zakresy powinny obejmować odpowiadające sobie wiersze.

## Wyszukiwanie w lewo

<div class="formula">=INDEKS(A2:A100;PODAJ.POZYCJĘ(F2;C2:C100;0))</div>

Tutaj szukasz wartości w kolumnie C, a zwracasz wynik z kolumny A.

## INDEKS + PODAJ.POZYCJĘ czy X.WYSZUKAJ?

W nowych wersjach Excela X.WYSZUKAJ jest zwykle prostsze.

INDEKS + PODAJ.POZYCJĘ nadal warto znać, szczególnie gdy pracujesz ze starszymi wersjami Excela albo utrzymujesz istniejące skoroszyty.
