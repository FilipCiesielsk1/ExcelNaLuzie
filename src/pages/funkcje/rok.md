---
layout: ../../layouts/FunctionLayout.astro
slug: "rok"
---

## Do czego służy ROK?

ROK ułatwia grupowanie transakcji według lat oraz budowanie pomocniczych pól w raportach i zestawieniach.

<div class="formula">=ROK(A2)</div>

## Co oznacza wynik?

Z daty w A2 funkcja zwróci np. 2026. Drugi przykład wyznacza pierwszy dzień kolejnego roku, dzięki czemu można go wykorzystać jako granicę przedziału dat.

## Praktyczny wariant

<div class="formula">=DATA(ROK(A2)+1;1;1)</div>

Dodanie 1 do ROK(A2) i zbudowanie daty przez DATA tworzy granicę kolejnego roku. To praktyczne np. przy filtrowaniu wszystkich transakcji od 1 stycznia do 31 grudnia poprzedniego roku.

## Najczęstsze pułapki

Wpis tekstowy udający datę może nie zostać rozpoznany. Nie odczytuj roku z fragmentu napisu, gdy Excel przechowuje rzeczywistą datę liczbową.

## Sprawdź na konkretnych danych

Dla A2 = **31.12.2026** formuła `=ROK(A2)` zwróci **2026**, a `=DATA(ROK(A2)+1;1;1)` zwróci **01.01.2027**. W raportach wieloletnich łącz rok i miesiąc; sam numer miesiąca nie wystarcza jako unikatowy okres.
