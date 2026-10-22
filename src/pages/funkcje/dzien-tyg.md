---
layout: ../../layouts/FunctionLayout.astro
slug: "dzien-tyg"
---

## Do czego służy DZIEŃ.TYG?

DZIEŃ.TYG bywa używany do tworzenia kalendarzy pracy i wyróżniania weekendów. Przelicza datę na numer zamiast zwracać słowną nazwę dnia.

<div class="formula">=DZIEŃ.TYG(A2;2)</div>

## Co oznacza wynik?

Typ 2 oznacza numerowanie od poniedziałku jako 1 do niedzieli jako 7. Druga formuła klasyfikuje sobotę i niedzielę jako weekend.

## Praktyczny wariant

<div class="formula">=JEŻELI(DZIEŃ.TYG(A2;2)&gt;5;"Weekend";"Dzień roboczy")</div>

Przy drugim argumencie równym `2` poniedziałek ma numer 1, a sobota i niedziela odpowiednio 6 i 7. Dzięki temu warunek `>5` rzeczywiście oznacza weekend. Dla innego typu numerowania reguła wymaga zmiany.

## Najczęstsze pułapki

Przy pominięciu typu Excel liczy domyślnie od niedzieli, dlatego sprawdzenie >5 nie oznacza wtedy tylko weekendu. W raportach ustal jeden standard.

## Sprawdź na konkretnych danych

Wpisz w A2 datę **17.10.2026** (sobota). `=DZIEŃ.TYG(A2;2)` zwróci **6**, a formuła z JEŻELI — **Weekend**. Dla **19.10.2026** (poniedziałek) otrzymasz **1** i **Dzień roboczy**. Święto przypadające w tygodniu nie jest tu uwzględniane.
