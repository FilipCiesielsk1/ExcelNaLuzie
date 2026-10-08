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

Ten wariant pokazuje zastosowanie funkcji PODSTAW w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Wielkość liter ma znaczenie. Bez argumentu nr_wystąpienia Excel zamieni wszystkie wystąpienia wskazanego tekstu, co nie zawsze jest oczekiwane.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
