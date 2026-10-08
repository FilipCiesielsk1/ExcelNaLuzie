---
layout: ../../layouts/FunctionLayout.astro
slug: "dl"
---

## Kiedy używać funkcji DŁ?

Pozwala kontrolować długość kodów, numerów referencyjnych i opisów, a także obliczać parametry do wycinania tekstu.

<div class="formula">=DŁ(A2)</div>

## Jak odczytać wynik?

DŁ zwraca liczbę znaków, nie liczbę wyrazów. Drugi przykład sprawdza, czy kod ma dokładnie dziewięć znaków i przygotowuje prosty komunikat kontrolny.

## Rozszerzony przykład

<div class="formula">=JEŻELI(DŁ(A2)=9;"Poprawny";"Sprawdź")</div>

Ten wariant pokazuje zastosowanie funkcji DŁ w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Spacje na początku, w środku i na końcu również się liczą. Poprawna długość sama w sobie nie gwarantuje poprawnego formatu identyfikatora.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
