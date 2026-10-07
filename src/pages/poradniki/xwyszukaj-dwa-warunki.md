---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ z dwoma warunkami w Excelu"
description: "Jak użyć X.WYSZUKAJ z dwoma warunkami bez kolumny pomocniczej. Gotowa formuła i prosty przykład."
slug: "xwyszukaj-dwa-warunki"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2021+"
verified: false
related:
  - title: "X.WYSZUKAJ z kilkoma warunkami"
    url: "/poradniki/xwyszukaj-kilka-warunkow/"
    category: "Wyszukiwanie"
  - title: "X.WYSZUKAJ — prosty przykład"
    url: "/poradniki/xwyszukaj-podstawy/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Dwa warunki w X.WYSZUKAJ</strong> możesz połączyć przez przemnożenie dwóch tablic logicznych.</div>

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=F2)*(B2:B100=G2);C2:C100)</div>

Formuła szuka wiersza, w którym **oba warunki są jednocześnie spełnione**, a następnie zwraca wartość z kolumny C.

## Przykład

Załóżmy, że masz tabelę:

| Produkt | Miasto | Cena |
|---|---|---:|
| Laptop | Warszawa | 4200 |
| Laptop | Gdańsk | 4350 |
| Monitor | Warszawa | 1200 |

W `F2` wpisujesz produkt, a w `G2` miasto.

Formuła:

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=F2)*(B2:B100=G2);C2:C100)</div>

zwróci cenę z wiersza spełniającego oba kryteria.

## Jak to działa?

Fragment:

<div class="formula">=(A2:A100=F2)*(B2:B100=G2)</div>

tworzy dwie tablice wartości logicznych. Excel zamienia `PRAWDA` na `1`, a `FAŁSZ` na `0`.

Po przemnożeniu tylko wiersz, który spełnia **oba warunki**, daje wynik `1`. Tego właśnie szuka `X.WYSZUKAJ`.

## Co zrobić, gdy nie ma wyniku?

Możesz wykorzystać argument odpowiadający za wartość zwracaną przy braku dopasowania:

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=F2)*(B2:B100=G2);C2:C100;"Brak wyniku")</div>

Dzięki temu użytkownik zobaczy czytelny komunikat zamiast błędu.

## Kiedy warto użyć innej metody?

Jeżeli potrzebujesz zwrócić **wiele pasujących wierszy**, lepszym rozwiązaniem może być funkcja `FILTRUJ`. `X.WYSZUKAJ` jest świetne wtedy, gdy oczekujesz jednego konkretnego wyniku.

## Przykład z miastem i produktem

Załóżmy, że kolumna A zawiera miasto, B produkt, a C cenę. W F2 wybierasz miasto, a w G2 produkt.

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=F2)*(B2:B100=G2);C2:C100;"Brak wyniku")</div>

Każde porównanie tworzy serię wartości PRAWDA/FAŁSZ. Mnożenie zamienia sytuację, w której oba warunki są spełnione, na 1. Właśnie tej jedynki szuka X.WYSZUKAJ.

## Co jeśli warunki pasują do kilku wierszy?

X.WYSZUKAJ nadal zwróci pojedynczy rekord. Jeżeli kombinacja miasto + produkt nie jest unikalna, wynik może nie reprezentować wszystkich danych.

W takim przypadku użyj FILTRUJ:

<div class="formula">=FILTRUJ(A2:C100;(A2:A100=F2)*(B2:B100=G2);"Brak wyników")</div>

## Nie używaj całych kolumn bez potrzeby

Warunki tablicowe wykonywane na A:A i B:B obejmują ponad milion wierszy. W małym pliku może to być niezauważalne, ale w większym skoroszycie pogarsza wydajność.

Lepsze są realistyczne zakresy, np. A2:A5000, albo tabela Excela.

## Sprawdź typy danych

Jeżeli pierwszy warunek dotyczy identyfikatora, liczby zapisane jako tekst mogą nie dopasować się do prawdziwych liczb.

Przy danych importowanych z CSV lub systemów zewnętrznych warto najpierw sprawdzić typy oraz zbędne spacje.

## Dwa warunki czy klucz pomocniczy?

W nowym Excelu formuła tablicowa jest czytelna i nie wymaga dodatkowej kolumny. W starszych wersjach połączenie warunków w klucz pomocniczy może być prostsze i bardziej zgodne.
