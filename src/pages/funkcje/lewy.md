---
layout: ../../layouts/FunctionLayout.astro
slug: "lewy"
---

## Kiedy używać funkcji LEWY?

LEWY pomaga wydzielać prefiksy produktów, oznaczenia oddziałów i początkowe segmenty identyfikatorów o stałej konstrukcji.

<div class="formula">=LEWY(A2;3)</div>

## Jak odczytać wynik?

Pierwszy przykład zwraca trzy początkowe znaki kodu z A2. Drugi pobiera fragment przed myślnikiem, więc działa również wtedy, gdy prefiks ma zmienną długość.

## Rozszerzony przykład

<div class="formula">=LEWY(A2;ZNAJDŹ("-";A2)-1)</div>

Ten wariant pokazuje zastosowanie funkcji LEWY w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Liczba znaków nie może być ujemna. Jeżeli w napisie brak myślnika, połączona funkcja ZNAJDŹ zwróci błąd. W takiej sytuacji warto użyć JEŻELI.BŁĄD.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
