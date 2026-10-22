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

## Zastosowanie w praktyce

W kosztorysach i rozliczeniach ZAOKR.DÓŁ może służyć do obcięcia wyniku do określonej liczby miejsc dziesiętnych. Ważne, aby rozumieć kierunek działania tej funkcji: przy dodatniej liczbie obniża wynik, ale przy ujemnej przesuwa go w stronę zera, więc matematycznie zwiększa wartość. Jeśli chcesz zawsze znaleźć największą liczbę całkowitą nieprzekraczającą danej wartości, to inne działanie i wymaga odrębnej reguły. Przy obliczeniach finansowych nie mieszaj bez uzasadnienia ZAOKR, ZAOKR.DÓŁ i ZAOKR.GÓRA w jednym procesie. Ustal miejsce zaokrąglenia — osobno dla pozycji, sum i podatku — oraz porównaj kilka przypadków granicznych, zwłaszcza z liczbami ujemnymi i wieloma miejscami po przecinku.
