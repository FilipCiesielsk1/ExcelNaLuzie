---
layout: ../../layouts/FunctionLayout.astro
slug: "prawy"
---

## Kiedy używać funkcji PRAWY?

PRAWY przydaje się do wydzielania końcówek kodów, czterech ostatnich cyfr identyfikatora i stałych sufiksów w danych importowanych z systemów.

<div class="formula">=PRAWY(A2;4)</div>

## Jak odczytać wynik?

Pierwszy wariant pobiera cztery ostatnie znaki, zachowując zera wiodące jako część tekstu. Drugi zwraca fragment po pierwszym myślniku, niezależnie od długości prefiksu.

## Rozszerzony przykład

<div class="formula">=PRAWY(A2;DŁ(A2)-ZNAJDŹ("-";A2))</div>

Ten wariant pokazuje zastosowanie funkcji PRAWY w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Jeśli podasz więcej znaków niż ma komórka, otrzymasz cały tekst. Dla ujemnej liczby znaków pojawi się błąd; drugi wariant wymaga obecności separatora.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
