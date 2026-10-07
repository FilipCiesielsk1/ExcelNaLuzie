---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ z kilkoma warunkami w Excelu"
description: "Jak użyć X.WYSZUKAJ z trzema lub większą liczbą warunków bez kolumny pomocniczej. Gotowa formuła i przykład."
slug: "xwyszukaj-kilka-warunkow"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
related:
  - title: "X.WYSZUKAJ z dwoma warunkami"
    url: "/poradniki/xwyszukaj-dwa-warunki/"
    category: "Wyszukiwanie"
  - title: "X.WYSZUKAJ i kilka wyników"
    url: "/poradniki/xwyszukaj-kilka-wynikow/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Przy trzech warunkach</strong> pomnóż trzy tablice logiczne i wyszukaj wartość 1.</div>

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=G2)*(B2:B100=H2)*(C2:C100=I2);D2:D100;"Brak wyniku")</div>

Formuła zwróci wartość z kolumny D tylko z wiersza, w którym wszystkie trzy warunki są spełnione jednocześnie.

## Przykład

| Produkt | Miasto | Miesiąc | Sprzedaż |
|---|---|---|---:|
| Laptop | Warszawa | Styczeń | 25 |
| Laptop | Gdańsk | Styczeń | 18 |
| Laptop | Warszawa | Luty | 31 |

W G2 wybierasz produkt, w H2 miasto, a w I2 miesiąc.

## Jak dodać czwarty warunek?

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=H2)*(B2:B100=I2)*(C2:C100=J2)*(D2:D100=K2);E2:E100;"Brak wyniku")</div>

Zasada pozostaje taka sama: każdy spełniony warunek daje 1, a ich iloczyn wynosi 1 tylko wtedy, gdy wszystkie są prawdziwe.

## Czy potrzebna jest kolumna pomocnicza?

Nie. To rozwiązanie działa bez tworzenia dodatkowego klucza w tabeli.

Jeżeli jednak formuła staje się bardzo długa albo ten sam zestaw warunków wykorzystujesz w wielu miejscach, kolumna pomocnicza może poprawić czytelność arkusza.

## Gdy pasuje więcej niż jeden wiersz

X.WYSZUKAJ zwróci pojedyncze dopasowanie. Jeżeli chcesz otrzymać wszystkie pasujące wiersze, użyj funkcji FILTRUJ.

## Jak działa dokładanie kolejnych warunków?

Każdy warunek ma postać porównania, np.:

`A2:A100=G2`

Po przemnożeniu kilku takich tablic wartość 1 zostaje tylko w wierszu, w którym **wszystkie** warunki są prawdziwe.

Dlatego czwarty warunek dopisujesz jako kolejny czynnik:

<div class="formula">=X.WYSZUKAJ(1;(A2:A100=H2)*(B2:B100=I2)*(C2:C100=J2)*(D2:D100=K2);E2:E100;"Brak wyniku")</div>

## Przykład biznesowy

Możesz wyszukiwać cenę na podstawie jednocześnie produktu, regionu i typu klienta.

Takie rozwiązanie jest często czytelniejsze niż tworzenie osobnego klucza pomocniczego z trzech połączonych kolumn.

## Pierwszy pasujący rekord

Jeżeli zestaw warunków nie jest unikalny, X.WYSZUKAJ zwróci pojedyncze dopasowanie.

Jeśli chcesz dostać wszystkie wiersze spełniające te same kryteria, użyj FILTRUJ:

<div class="formula">=FILTRUJ(A2:D100;(A2:A100=G2)*(B2:B100=H2)*(C2:C100=I2);"Brak wyników")</div>

## Wydajność przy wielu warunkach

Nie rozszerzaj tablic na całe kolumny bez potrzeby. Kilka operacji na A:A, B:B i C:C oznacza przeliczanie milionów komórek.

Przy większych danych ogranicz zakres do faktycznej tabeli albo korzystaj z tabel Excela.

## Czytelność ma znaczenie

Jeśli formuła zaczyna mieć pięć lub sześć kryteriów i jest trudna do utrzymania, rozważ kolumnę pomocniczą albo uporządkowanie danych źródłowych.

Najkrótsza formuła nie zawsze jest najlepszą formułą.
