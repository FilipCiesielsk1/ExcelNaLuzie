---
layout: ../../layouts/FunctionLayout.astro
slug: "tekst-po"
---

## Najprostszy przykład

Jeżeli A1 zawiera `FV-2026-001`:

<div class="formula">=TEKST.PO(A1;"-")</div>

wynikiem będzie tekst po pierwszym myślniku, czyli `2026-001`.

## Tekst po ostatnim separatorze

Ujemny numer wystąpienia rozpoczyna liczenie od końca:

<div class="formula">=TEKST.PO(A1;"-";-1)</div>

Dla `FV-2026-001` wynikiem będzie `001`.

## Co jeśli separatora nie ma?

Możesz użyć opcjonalnego argumentu odpowiadającego za brak dopasowania zamiast zwracać #N/D.

## Starsze wersje Excela

TEKST.PO jest funkcją nowszą. Jeżeli pracujesz w starszej wersji Excela, podobny rezultat można zbudować za pomocą PRAWY, DŁ i ZNAJDŹ.
