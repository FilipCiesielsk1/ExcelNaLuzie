---
layout: ../../layouts/FunctionLayout.astro
slug: "fragment-tekstu"
---

## Kiedy używać funkcji FRAGMENT.TEKSTU?

Przydaje się w identyfikatorach z częścią środkową: numerem regionu, rokiem lub kodem pozycji wewnątrz dłuższego ciągu.

<div class="formula">=FRAGMENT.TEKSTU(A2;4;5)</div>

## Jak odczytać wynik?

Pierwsza formuła rozpoczyna od czwartego znaku i zwraca kolejne pięć. W drugiej pozycji początkowej nie wpisujemy na stałe: wyznacza ją miejsce pierwszego myślnika.

## Rozszerzony przykład

<div class="formula">=FRAGMENT.TEKSTU(A2;ZNAJDŹ("-";A2)+1;3)</div>

Ten wariant pokazuje zastosowanie funkcji FRAGMENT.TEKSTU w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Pozycje są liczone od 1, nie od zera. Jeśli liczba pobieranych znaków jest ujemna lub pozycja początkowa wynosi zero, Excel zwróci błąd.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
