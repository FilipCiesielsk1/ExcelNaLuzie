---
layout: ../../layouts/FunctionLayout.astro
slug: "tekst-przed"
---

## Najprostszy przykład

Jeżeli A1 zawiera `FV-2026-001`:

<div class="formula">=TEKST.PRZED(A1;"-")</div>

wynikiem będzie `FV`.

## Tekst przed ostatnim separatorem

<div class="formula">=TEKST.PRZED(A1;"-";-1)</div>

Dla `FV-2026-001` otrzymasz `FV-2026`.

## Inne separatory

Ogranicznikiem może być przecinek, spacja, ukośnik albo dłuższy ciąg znaków.

<div class="formula">=TEKST.PRZED(A1;",")</div>

## Starsze wersje Excela

Jeżeli TEKST.PRZED nie jest dostępne, tekst przed separatorem można pobrać połączeniem LEWY i ZNAJDŹ.
