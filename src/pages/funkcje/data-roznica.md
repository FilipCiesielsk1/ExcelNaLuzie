---
layout: ../../layouts/FunctionLayout.astro
slug: "data-roznica"
---

## Co oblicza DATA.RÓŻNICA?

DATA.RÓŻNICA zwraca liczbę pełnych dni, miesięcy albo lat pomiędzy dwiema datami.

<div class="formula">=DATA.RÓŻNICA(A2;B2;"M")</div>

Kod M zwraca liczbę pełnych miesięcy.

## Najczęstsze jednostki

Dla pełnych lat użyj Y:

<div class="formula">=DATA.RÓŻNICA(A2;B2;"Y")</div>

Dla pełnych dni możesz użyć D:

<div class="formula">=DATA.RÓŻNICA(A2;B2;"D")</div>

W wielu przypadkach samą liczbę dni można jednak uzyskać prościej, odejmując datę początkową od końcowej.

## Obliczanie wieku

Funkcja dobrze nadaje się do obliczania liczby pełnych lat między datą urodzenia a dniem dzisiejszym:

<div class="formula">=DATA.RÓŻNICA(A2;DZIŚ();"Y")</div>

## Kolejność dat ma znaczenie

Data początkowa powinna być wcześniejsza od końcowej. Odwrotna kolejność prowadzi do błędu.

## Uważaj na jednostkę MD

Microsoft ostrzega, że wariant MD może w określonych sytuacjach zwracać niedokładne wyniki. Jeżeli potrzebujesz reszty dni po odjęciu pełnych miesięcy, warto dokładnie przetestować przypadki graniczne. citeturn610710search0

## Kiedy używać DATA.RÓŻNICA?

Przy stażu pracy, wieku, długości umowy i analizie okresów wyrażanych w pełnych miesiącach lub latach. Jeżeli potrzebujesz tylko zwykłej różnicy w dniach, odejmowanie dat jest często prostsze i bardziej przejrzyste.
