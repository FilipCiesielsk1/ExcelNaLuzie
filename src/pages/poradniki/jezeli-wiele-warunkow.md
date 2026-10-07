---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI z wieloma warunkami w Excelu"
description: "Jak zbudować JEŻELI z wieloma warunkami w Excelu. Przykłady zagnieżdżania, kolejność testów i czytelniejsze alternatywy."
slug: "jezeli-wiele-warunkow"
category: "Warunki i logika"
categorySlug: "formuly/logika"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> gdy masz kilka możliwych wyników, możesz zagnieździć kolejne funkcje JEŻELI w argumentach poprzedniej.</div>

<div class="formula">=JEŻELI(B2>=90;"A";JEŻELI(B2>=75;"B";JEŻELI(B2>=50;"C";"D")))</div>

Ta formuła przypisuje kategorię na podstawie wyniku liczbowego. Excel sprawdza warunki od lewej do prawej i zatrzymuje się na pierwszym spełnionym.

## Dlaczego kolejność warunków ma znaczenie?

Jeżeli najwyższy próg ma 90, trzeba sprawdzić go przed progiem 50. Gdyby formuła najpierw pytała, czy B2 jest większe lub równe 50, wynik 95 od razu spełniłby ten warunek i nigdy nie dotarłby do kategorii A.

Dlatego przy progach liczbowych najczęściej układamy warunki od najbardziej restrykcyjnego do najbardziej ogólnego.

## Przykład z rabatem

Załóżmy, że wartość zamówienia jest w C2. Dla zamówień od 5000 zł chcesz 10% rabatu, od 2000 zł 5%, a poniżej tego brak rabatu.

<div class="formula">=JEŻELI(C2>=5000;10%;JEŻELI(C2>=2000;5%;0))</div>

Wynik możesz potem pomnożyć przez wartość zamówienia.

## Kiedy zagnieżdżanie staje się problemem?

Dwie lub trzy decyzje są zwykle czytelne. Przy długim łańcuchu nawiasów trudniej sprawdzić kolejność, znaleźć błąd i później zmienić zasady biznesowe.

Jeżeli poszczególne warunki dotyczą tego samego rodzaju progu, rozważ tabelę pomocniczą i funkcję wyszukującą. Jeśli natomiast kilka warunków musi być spełnionych jednocześnie, zamiast kolejnych JEŻELI często potrzebujesz funkcji ORAZ.

## Testuj formułę etapami

Najpierw zbuduj pierwsze JEŻELI i sprawdź kilka wartości granicznych. Potem dodaj drugi poziom i ponownie przetestuj dane dokładnie na progach, np. 49, 50, 74, 75, 89 i 90.

Takie testowanie jest ważniejsze niż sama długość formuły. Najwięcej błędów w wielopoziomowym JEŻELI wynika nie ze składni, lecz z niewłaściwej kolejności warunków.

## Czy zawsze warto używać wielu JEŻELI?

Nie. Zagnieżdżone JEŻELI jest dobre do kilku prostych decyzji. Przy dużej liczbie kategorii lepiej przenieść reguły do tabeli. Formuła będzie krótsza, a późniejsza zmiana progów nie będzie wymagała edycji długiego wyrażenia.