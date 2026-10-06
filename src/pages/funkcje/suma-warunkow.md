---
layout: ../../layouts/FunctionLayout.astro
slug: "suma-warunkow"
---

## Jeden warunek

Choć SUMA.WARUNKÓW obsługuje wiele kryteriów, może działać również z jednym.

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;F2)</div>

Excel sumuje wartości z kolumny C tylko dla wierszy, w których kolumna A odpowiada wartości z F2.

## Dwa warunki

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;F2;B2:B100;G2)</div>

Tutaj rekord musi spełniać oba kryteria jednocześnie.

## Warunki liczbowe

Operatory zapisuj jako tekst:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;C2:C100;">=1000")</div>

Jeżeli próg znajduje się w komórce F2, operator połącz z odwołaniem:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;C2:C100;">="&amp;F2)</div>

## Najczęstszy problem

Zakres sumowania i wszystkie zakresy kryteriów powinny odpowiadać sobie rozmiarem i obejmować te same wiersze.
