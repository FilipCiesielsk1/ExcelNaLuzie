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

## Zakres sumy i zakresy kryteriów muszą do siebie pasować

Jeżeli sumujesz C2:C100, kryteria powinny odnosić się do odpowiadających wierszy, np. A2:A100 i B2:B100.

Przesunięte zakresy są częstą przyczyną nieprawidłowych wyników.

## Kryterium tekstowe z komórki

Jeżeli w F2 wybierasz kategorię:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;F2)</div>

nie potrzebujesz ręcznie wpisywać tekstu do formuły. Dzięki temu kryterium może być sterowane listą rozwijaną.

## Operator i wartość z komórki

Przy progach liczbowych połącz operator z odwołaniem:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;C2:C100;">="&amp;F2)</div>

Excel tworzy wtedy kryterium typu „większe lub równe wartości z F2”.

## Przedział wartości

Dwa kryteria mogą dotyczyć tego samego zakresu. Na przykład suma kwot od wartości z F2 do wartości z G2:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;C2:C100;">="&amp;F2;C2:C100;"<="&amp;G2)</div>

## SUMA.WARUNKÓW czy SUMA.JEŻELI?

Dla jednego prostego warunku SUMA.JEŻELI wystarcza.

Jeśli dane mają być sumowane po kilku kryteriach — np. regionie, produkcie i statusie — SUMA.WARUNKÓW jest naturalnym wyborem i zwykle czytelniejszym rozwiązaniem niż rozbudowane formuły tablicowe.
