---
layout: ../../layouts/ArticleLayout.astro
title: "Jak pobrać tekst po znaku w Excelu?"
description: "Najprostsze sposoby na wyciągnięcie tekstu znajdującego się po myślniku, przecinku lub innym znaku w Excelu."
slug: "tekst-po-znaku"
category: "Formuły tekstowe"
date: "2026-10-06"
updated: "2026-10-06"
---
import FormulaBox from '../../components/FormulaBox.astro';

<div class="answer"><strong>Najprościej:</strong> w Microsoft 365 użyj funkcji <strong>TEKST.PO</strong>.</div>

<FormulaBox formula='=TEKST.PO(A1;"-")' />

Jeżeli w komórce A1 znajduje się `FV-2026-001`, wynikiem będzie `2026-001`.

## Przykład

| A | Wynik |
|---|---|
| FV-2026-001 | 2026-001 |
| ABC-123 | 123 |

## Tekst po ostatnim wystąpieniu znaku

Jeśli separator pojawia się kilka razy i potrzebujesz tekstu po ostatnim wystąpieniu:

<FormulaBox formula='=TEKST.PO(A1;"-";-1)' />

Dla `FV-2026-001` wynikiem będzie `001`.

## Starsze wersje Excela

W starszych wersjach bez funkcji TEKST.PO można połączyć funkcje PRAWY, DŁ i ZNAJDŹ. W osobnym poradniku pokażemy warianty dla różnych separatorów.
