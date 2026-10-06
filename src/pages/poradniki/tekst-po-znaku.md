---
layout: ../../layouts/ArticleLayout.astro
title: "Jak pobrać tekst po znaku w Excelu?"
description: "Najprostsze sposoby na wyciągnięcie tekstu znajdującego się po myślniku, przecinku lub innym znaku w Excelu."
slug: "tekst-po-znaku"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
verified: false
related:
  - title: "Jak pobrać tekst przed znakiem w Excelu?"
    url: "/poradniki/tekst-przed-znakiem/"
    category: "Tekst"
  - title: "Jak podzielić tekst po przecinku w Excelu?"
    url: "/poradniki/podziel-tekst-po-przecinku/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Najprościej:</strong> jeśli masz Microsoft 365 lub Excel 2024, użyj funkcji <strong>TEKST.PO</strong>.</div>

<div class="formula">=TEKST.PO(A1;"-")</div>

Jeżeli w komórce `A1` znajduje się `FV-2026-001`, wynikiem będzie `2026-001`.

## Przykład krok po kroku

| A | Formuła | Wynik |
|---|---|---|
| FV-2026-001 | =TEKST.PO(A2;"-") | 2026-001 |
| ABC-123 | =TEKST.PO(A3;"-") | 123 |

Funkcja szuka wskazanego separatora i zwraca wszystko, co znajduje się po nim.

## Tekst po ostatnim wystąpieniu znaku

Jeżeli separator występuje kilka razy i potrzebujesz tekstu po **ostatnim** wystąpieniu, użyj trzeciego argumentu `-1`:

<div class="formula">=TEKST.PO(A1;"-";-1)</div>

Dla `FV-2026-001` otrzymasz `001`.

## Inny separator niż myślnik

Separatorem może być również przecinek, spacja, ukośnik albo inny znak.

Przykład dla przecinka:

<div class="formula">=TEKST.PO(A1;",")</div>

## Starsze wersje Excela

Jeżeli Twoja wersja Excela nie ma funkcji `TEKST.PO`, możesz połączyć funkcje `PRAWY`, `DŁ` i `ZNAJDŹ`:

<div class="formula">=PRAWY(A1;DŁ(A1)-ZNAJDŹ("-";A1))</div>

Ten wariant zwraca tekst po **pierwszym** wystąpieniu separatora.

## Najczęstszy błąd

Jeżeli separatora nie ma w komórce, formuła może zwrócić błąd. W praktycznych arkuszach warto wtedy dodać obsługę błędu lub najpierw sprawdzić, czy separator występuje w tekście.
