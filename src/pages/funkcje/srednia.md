---
layout: ../../layouts/FunctionLayout.astro
slug: "srednia"
---

## Kiedy używać funkcji ŚREDNIA?

W raporcie jakości lub sprzedaży ŚREDNIA pozwala poznać przeciętny wynik bez ręcznego sumowania i liczenia rekordów.

<div class="formula">=ŚREDNIA(B2:B100)</div>

## Jak odczytać wynik?

Pierwszy przykład oblicza średnią z kolumny B, drugi uwzględnia jeszcze wartości w kolumnie D. Puste komórki i tekst w zakresach nie zwiększają mianownika.

## Drugi przykład

<div class="formula">=ŚREDNIA(B2:B100;D2:D100)</div>

ŚREDNIA uwzględnia tylko liczby z podanych zakresów. Nie zlicza pustych pól ani tekstów, ale **uwzględnia zera**. Z tego powodu wynik bywa inny niż średnia liczona z liczby wszystkich wierszy.

## Najważniejsza pułapka

Zera liczą się do średniej, puste komórki nie. Jeśli nie ma żadnej liczby do obliczenia, wystąpi błąd dzielenia przez zero.

## Sprawdź na konkretnych danych

W B2:B5 umieść liczby **10**, **20**, **0** oraz tekst `brak`. `=ŚREDNIA(B2:B5)` zwróci **10** (30 podzielone przez trzy liczby). Jeśli zakres nie zawiera żadnej liczby, funkcja zwraca błąd **#DZIEL/0!**; przed publikacją KPI sprawdź taki przypadek.
