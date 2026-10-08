---
layout: ../../layouts/FunctionLayout.astro
slug: "znajdz"
---

## Kiedy używać funkcji ZNAJDŹ?

Przy dzieleniu kodów na części często trzeba najpierw ustalić, gdzie znajduje się myślnik, ukośnik albo inny separator.

<div class="formula">=ZNAJDŹ("-";A2)</div>

## Jak odczytać wynik?

Pierwszy przykład zwraca pozycję myślnika. Drugi wykorzystuje tę pozycję do wyciągnięcia prefiksu bez samego separatora.

## Rozszerzony przykład

<div class="formula">=LEWY(A2;ZNAJDŹ("-";A2)-1)</div>

Ten wariant pokazuje zastosowanie funkcji ZNAJDŹ w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Brak frazy skutkuje błędem, a nie zerem. ZNAJDŹ rozróżnia wielkość liter, więc 'A' i 'a' nie są równoważne.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
