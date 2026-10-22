---
layout: ../../layouts/FunctionLayout.astro
slug: "zaokr-gora"
---

## Kiedy używać funkcji ZAOKR.GÓRA?

ZAOKR.GÓRA przydaje się do przyjmowania ostrożnego wyniku ilościowego, gdy zaokrąglenie do najbliższej liczby mogłoby być zbyt małe.

<div class="formula">=ZAOKR.GÓRA(A2;0)</div>

## Jak odczytać wynik?

Pierwszy przykład zaokrągla wartość do pełnych jednostek w kierunku od zera. Drugi zachowuje dwa miejsca po przecinku, również zaokrąglając od zera.

## Drugi przykład

<div class="formula">=ZAOKR.GÓRA(A2;2)</div>

ZAOKR.GÓRA zaokrągla **od zera**, niezależnie od znaku liczby. Nie oznacza to zawsze większej liczby w sensie algebraicznym: dla wartości ujemnych wynik staje się bardziej ujemny.

## Najważniejsza pułapka

Dla wartości ujemnych od zera oznacza wynik bardziej ujemny, nie większy algebraicznie. Nie myl tej funkcji z obliczeniem sufitu matematycznego.

## Sprawdź na konkretnych danych

Dla A2 = **-12,341** otrzymasz `=ZAOKR.GÓRA(A2;2)` → **-12,35** oraz `=ZAOKR.GÓRA(A2;0)` → **-13**. Dla dodatniego **12,341** wynikiem będzie **12,35** oraz **13**.

## Zastosowanie w praktyce

ZAOKR.GÓRA bywa przydatne, gdy wynik ma zostać podniesiony do pełnej jednostki, na przykład przy określaniu liczby opakowań potrzebnych do realizacji zamówienia. Jednak dla wartości ujemnych zaokrągla od zera, czyli w kierunku bardziej ujemnych liczb. Nie należy mylić tej zasady z matematycznym sufitem, który wybiera najmniejszą liczbę całkowitą nie mniejszą niż argument. Przy dodatnich ilościach oba podejścia mogą dawać zgodne wyniki, ale w danych obejmujących korekty i zwroty różnica jest istotna. Jeśli jednostką jest karton, najpierw podziel liczbę sztuk przez pojemność kartonu, a dopiero potem zaokrąglij zgodnie z zasadami operacyjnymi. Nie stosuj zaokrąglania wyłącznie dla poprawienia wyglądu tabeli.
