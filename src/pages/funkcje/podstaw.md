---
layout: ../../layouts/FunctionLayout.astro
slug: "podstaw"
---

## Kiedy używać funkcji PODSTAW?

PODSTAW jest użyteczna do ujednolicania separatorów, usuwania spacji w kodach i poprawiania danych z kilku źródeł.

<div class="formula">=PODSTAW(A2;"-";"/")</div>

## Jak odczytać wynik?

Pierwsza formuła zmienia wszystkie myślniki na ukośniki. Druga usuwa zwykłe spacje, co jest przydatne przy porównywaniu identyfikatorów zapisanych w różnych formatach.

## Rozszerzony przykład

<div class="formula">=PODSTAW(A2;" ";"")</div>

PODSTAW(A2;" ";"") usuwa każde zwykłe odstępy, także te między słowami. To dobre rozwiązanie dla kodów, ale może zepsuć zwykłe nazwy. W przypadku opisów lepiej użyć USUŃ.ZBĘDNE.ODSTĘPY.

## Typowe błędy

Wielkość liter ma znaczenie. Bez argumentu nr_wystąpienia Excel zamieni wszystkie wystąpienia wskazanego tekstu, co nie zawsze jest oczekiwane.

## Sprawdź na konkretnych danych

Jeżeli w A2 znajduje się `AB-12-34`, `=PODSTAW(A2;"-";"/")` zwróci **AB/12/34**. Zapis `=PODSTAW(A2;"-";"/";1)` podmieni tylko **pierwszy** myślnik. Parametr numeru wystąpienia pozwala uniknąć masowej zamiany.

## Zastosowanie w praktyce

W pracy z kodami produktów często trzeba zamienić jeden separator na drugi, na przykład myślnik na ukośnik. PODSTAW wykonuje zamianę zgodnie z treścią, a nie pozycją znaków. To wygodne, gdy kody mają różną długość. Zwróć jednak uwagę, czy znak zamieniany nie występuje również w nazwach lub komentarzach, gdzie pełni inne znaczenie. Jeśli w tekstach występują zwykłe spacje i twarde spacje, traktuj je jako odrębne znaki. W takim przypadku jedna zamiana może nie wystarczyć. Dla czyszczenia nazw klientów częściej potrzebujesz zachować pojedyncze odstępy między wyrazami, zamiast usuwać wszystkie. Zanim zastosujesz masową konwersję, porównaj kilka wyników z oryginalnymi danymi i zapisz regułę w dokumentacji importu.
