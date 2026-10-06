---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ w Excelu — prosty przykład krok po kroku"
description: "Jak działa X.WYSZUKAJ w Excelu? Prosty przykład, gotowa formuła, obsługa braku wyniku i wyjaśnienie argumentów."
slug: "xwyszukaj-podstawy"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
related:
  - title: "X.WYSZUKAJ z dwoma warunkami"
    url: "/poradniki/xwyszukaj-dwa-warunki/"
    category: "Wyszukiwanie"
  - title: "X.WYSZUKAJ — co zrobić przy braku wyniku?"
    url: "/poradniki/xwyszukaj-brak-wyniku/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Najprostszy przykład X.WYSZUKAJ:</strong> wyszukaj wartość z F2 w kolumnie A i zwróć odpowiadającą wartość z kolumny C.</div>

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

Jeżeli w F2 wpiszesz nazwę produktu, Excel znajdzie go w kolumnie A i zwróci np. jego cenę z kolumny C.

## Przykład

| Produkt | Miasto | Cena |
|---|---|---:|
| Laptop | Warszawa | 4200 |
| Monitor | Gdańsk | 1200 |
| Klawiatura | Poznań | 250 |

Jeżeli F2 zawiera Monitor, formuła zwróci 1200.

## Jak czytać składnię?

Najważniejsze trzy argumenty to wartość, której szukasz, zakres wyszukiwania oraz zakres, z którego ma zostać zwrócony wynik.

Czwarty argument pozwala określić, co ma się pojawić, gdy nic nie zostanie znalezione.

## X.WYSZUKAJ zamiast WYSZUKAJ.PIONOWO

X.WYSZUKAJ nie wymaga podawania numeru kolumny i może zwracać dane zarówno z prawej, jak i z lewej strony kolumny wyszukiwania.

Dlatego w nowych wersjach Excela jest zwykle wygodniejszym wyborem do codziennego wyszukiwania.

## Dopasowanie dokładne

Domyślnie X.WYSZUKAJ szuka dokładnego dopasowania, więc w typowych tabelach nie musisz dopisywać dodatkowego argumentu odpowiadającego za tryb dopasowania.
