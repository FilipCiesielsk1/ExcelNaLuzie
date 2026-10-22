---
layout: ../../layouts/FunctionLayout.astro
slug: "zaokr-dol"
---

## Kiedy używać funkcji ZAOKR.DÓŁ?

ZAOKR.DÓŁ pozwala obciąć wartość do wskazanej precyzji, gdy rezultat musi pozostać bliżej zera niż wartość wyjściowa.

<div class="formula">=ZAOKR.DÓŁ(A2;0)</div>

## Jak odczytać wynik?

Pierwszy przykład sprowadza liczbę do całych jednostek w kierunku zera. Drugi pozostawia dwa miejsca dziesiętne, odrzucając dalsze cyfry.

## Drugi przykład

<div class="formula">=ZAOKR.DÓŁ(A2;2)</div>

ZAOKR.DÓŁ zaokrągla **w kierunku zera**, więc przy liczbach ujemnych nie jest to matematyczne zaokrąglenie w dół. Argument `2` zachowuje dwa miejsca po przecinku, a `0` część całkowitą.

## Najważniejsza pułapka

Dla wartości ujemnych kierunek do zera oznacza wynik mniej ujemny. Funkcja nie działa identycznie jak zaokrąglanie w dół na osi liczbowej.

## Sprawdź na konkretnych danych

Dla A2 = **-12,349** otrzymasz `=ZAOKR.DÓŁ(A2;2)` → **-12,34** oraz `=ZAOKR.DÓŁ(A2;0)` → **-12**. Dla dodatniej liczby **12,349** wyniki będą **12,34** oraz **12**. Porównaj z ZAOKR.GÓRA, które zaokrągla od zera.
