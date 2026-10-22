---
layout: ../../layouts/FunctionLayout.astro
slug: "usun-zbedne-odstepy"
---

## Kiedy używać funkcji USUŃ.ZBĘDNE.ODSTĘPY?

Po imporcie lub skopiowaniu danych często pozostają dodatkowe spacje, przez które dwie pozornie identyczne nazwy nie pasują do siebie.

<div class="formula">=USUŃ.ZBĘDNE.ODSTĘPY(A2)</div>

## Jak odczytać wynik?

Pierwszy wariant usuwa spacje z brzegów i pozostawia pojedyncze między słowami. Drugi liczy długość tekstu już po jego oczyszczeniu.

## Rozszerzony przykład

<div class="formula">=DŁ(USUŃ.ZBĘDNE.ODSTĘPY(A2))</div>

Połączenie z DŁ mierzy długość już oczyszczonego tekstu. Nie wystarczy jednak do usunięcia twardej spacji (znak 160), często występującej w danych skopiowanych z internetu.

## Typowe błędy

Funkcja nie usuwa wszystkich białych znaków, w tym spacji nierozdzielających o kodzie 160. W niektórych plikach trzeba najpierw zamienić te znaki.

## Sprawdź na konkretnych danych

Dla A2 = `  Jan   Kowalski  ` funkcja `=USUŃ.ZBĘDNE.ODSTĘPY(A2)` zwróci **Jan Kowalski**. Gdy w danych występują twarde spacje, zastosuj `=USUŃ.ZBĘDNE.ODSTĘPY(PODSTAW(A2;ZNAK(160);" "))`. Możesz porównać `=DŁ(A2)` i długość oczyszczonej wartości.
