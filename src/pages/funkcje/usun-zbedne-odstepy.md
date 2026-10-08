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

Ten wariant pokazuje zastosowanie funkcji USUŃ.ZBĘDNE.ODSTĘPY w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Funkcja nie usuwa wszystkich białych znaków, w tym spacji nierozdzielających o kodzie 160. W niektórych plikach trzeba najpierw zamienić te znaki.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
