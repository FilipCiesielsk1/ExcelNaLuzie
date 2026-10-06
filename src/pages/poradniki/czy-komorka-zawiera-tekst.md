---
layout: ../../layouts/ArticleLayout.astro
title: "Jak sprawdzić, czy komórka zawiera tekst w Excelu?"
description: "Jak sprawdzić, czy komórka zawiera konkretny wyraz lub fragment tekstu i zwrócić TAK/NIE. Gotowa formuła z SZUKAJ.TEKST."
slug: "czy-komorka-zawiera-tekst"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak policzyć wystąpienia tekstu w Excelu?"
    url: "/poradniki/policz-wystapienia-tekstu/"
    category: "Tekst"
  - title: "Jak zamienić fragment tekstu w Excelu?"
    url: "/poradniki/zamien-fragment-tekstu/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Aby sprawdzić, czy A1 zawiera słowo „excel”</strong>, połącz SZUKAJ.TEKST, CZY.LICZBA i JEŻELI.</div>

<div class="formula">=JEŻELI(CZY.LICZBA(SZUKAJ.TEKST("excel";A1));"TAK";"NIE")</div>

Jeżeli tekst zostanie znaleziony, formuła zwróci `TAK`. W przeciwnym razie otrzymasz `NIE`.

## Jak to działa?

`SZUKAJ.TEKST` zwraca pozycję znalezionego tekstu. Jeżeli wyszukiwanie się powiedzie, wynikiem jest liczba.

`CZY.LICZBA` zamienia ten wynik na wartość PRAWDA lub FAŁSZ, a `JEŻELI` zwraca czytelny komunikat.

## Przykład

| Tekst w A | Szukamy | Wynik |
|---|---|---|
| Kurs Excel podstawy | excel | TAK |
| Raport miesięczny | excel | NIE |
| EXCEL 365 | excel | TAK |

Funkcja `SZUKAJ.TEKST` nie rozróżnia wielkich i małych liter, dlatego `Excel`, `EXCEL` i `excel` są traktowane tak samo.

## Gdy wielkość liter ma znaczenie

Jeżeli chcesz rozróżniać wielkie i małe litery, zamiast SZUKAJ.TEKST możesz użyć ZNAJDŹ.

<div class="formula">=JEŻELI(CZY.LICZBA(ZNAJDŹ("Excel";A1));"TAK";"NIE")</div>

## Zwróć tylko PRAWDA lub FAŁSZ

<div class="formula">=CZY.LICZBA(SZUKAJ.TEKST("excel";A1))</div>
