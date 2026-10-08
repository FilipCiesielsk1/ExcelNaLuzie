---
layout: ../../layouts/FunctionLayout.astro
slug: "zastap"
---

## Kiedy używać funkcji ZASTĄP?

Sprawdza się przy maskowaniu początku identyfikatorów lub podmianie konkretnego segmentu kodu o znanej strukturze.

<div class="formula">=ZASTĄP(A2;1;3;"XXX")</div>

## Jak odczytać wynik?

Pierwszy przykład maskuje pierwsze trzy znaki. Drugi usuwa dwa znaki od czwartej pozycji i wstawia myślnik, przez co długość tekstu może się zmienić.

## Rozszerzony przykład

<div class="formula">=ZASTĄP(A2;4;2;"-")</div>

Ten wariant pokazuje zastosowanie funkcji ZASTĄP w bardziej rozbudowanym obliczeniu. Sprawdź, czy podane odwołania do komórek pasują do układu Twojej tabeli; przykładowych adresów nie trzeba używać dosłownie.

## Typowe błędy

Trzeci argument określa długość usuwanego fragmentu, a nie długość nowego napisu. Gdy struktura kodu jest zmienna, sztywne pozycje nie są bezpieczne.

## Jak sprawdzić działanie w swoim arkuszu?

Zacznij od pojedynczego przykładu, którego poprawny wynik potrafisz ustalić bez formuły. Wpisz dane wejściowe do wskazanej komórki, a obok wstaw formułę i porównaj rezultat. Następnie przetestuj przypadek nietypowy: pustą wartość, krótszy napis lub brak separatora. Dzięki temu szybciej rozpoznasz, czy problem leży w składni funkcji, czy w danych.

Przy kopiowaniu w dół tabeli zwróć uwagę na to, które odwołania do komórek powinny się przesuwać. Jeżeli odwołujesz się do stałego słownika, rozważ adres bezwzględny ze znakami dolara. Warto również zachować oryginalną kolumnę przed czyszczeniem danych: łatwiej porównasz wynik i wykryjesz przypadkowo usunięte znaki. Tekst i liczby bywają wyświetlane podobnie, ale zachowują się inaczej w obliczeniach.
