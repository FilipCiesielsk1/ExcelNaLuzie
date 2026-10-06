---
layout: ../../layouts/ArticleLayout.astro
title: "Jak pobrać tekst przed znakiem w Excelu?"
description: "Jak wyciągnąć tekst przed myślnikiem, przecinkiem, spacją lub innym separatorem w Excelu. Gotowe formuły dla nowych i starszych wersji."
slug: "tekst-przed-znakiem"
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
  - title: "Jak pobrać tekst po znaku w Excelu?"
    url: "/poradniki/tekst-po-znaku/"
    category: "Tekst"
  - title: "Jak podzielić tekst po przecinku w Excelu?"
    url: "/poradniki/podziel-tekst-po-przecinku/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>W Microsoft 365 i Excelu 2024</strong> najprościej użyć funkcji TEKST.PRZED.</div>

<div class="formula">=TEKST.PRZED(A1;"-")</div>

Dla wartości `FV-2026-001` wynikiem będzie `FV`.

## Przykład

| Tekst | Separator | Wynik |
|---|---|---|
| FV-2026-001 | - | FV |
| Jan,Kowalski | , | Jan |
| ABC/123 | / | ABC |

## Tekst przed ostatnim separatorem

Jeżeli separator pojawia się kilka razy i potrzebujesz tekstu przed jego ostatnim wystąpieniem, użyj ujemnego numeru wystąpienia:

<div class="formula">=TEKST.PRZED(A1;"-";-1)</div>

Dla `FV-2026-001` otrzymasz `FV-2026`.

## Starsze wersje Excela

Jeżeli Twoja wersja nie ma funkcji TEKST.PRZED, możesz użyć połączenia LEWY i ZNAJDŹ:

<div class="formula">=LEWY(A1;ZNAJDŹ("-";A1)-1)</div>

`ZNAJDŹ` zwraca pozycję separatora, a `LEWY` pobiera wszystko, co znajduje się przed nim.

## Co jeśli znaku nie ma w komórce?

Jeżeli separator nie występuje w tekście, formuła może zwrócić błąd. W arkuszach z niejednorodnymi danymi warto dodać obsługę błędu lub wcześniej sprawdzić, czy separator występuje.
