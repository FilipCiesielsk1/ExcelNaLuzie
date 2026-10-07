---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ w Excelu — prosty przykład krok po kroku"
description: "Jak działa X.WYSZUKAJ w Excelu? Prosty przykład, gotowa formuła, obsługa braku wyniku i wyjaśnienie argumentów."
slug: "xwyszukaj-podstawy"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-07"
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

## Przykład krok po kroku

Załóżmy, że A2:A100 zawiera ID produktu, C2:C100 cenę, a w F2 wpisujesz szukane ID.

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

Excel najpierw szuka wartości z F2 w kolumnie A, a potem zwraca wartość z odpowiadającego wiersza kolumny C.

## Zakres wyszukiwania i wyniku powinny mieć ten sam rozmiar

Jeżeli szukasz w A2:A100, zakres zwracany powinien obejmować odpowiadające wiersze, np. C2:C100.

Przesunięcie jednego z zakresów o wiersz może zwracać poprawnie wyglądające, ale błędne dane.

## X.WYSZUKAJ zwraca pierwsze dopasowanie

Jeżeli szukana wartość występuje kilka razy, dostaniesz pojedynczy wynik.

Dla unikalnych ID to oczekiwane zachowanie. Jeśli duplikaty są normalne i potrzebujesz całej listy, użyj FILTRUJ.

## Wyszukiwanie może działać w dowolnym kierunku

Zakres wyniku nie musi znajdować się po prawej stronie. Możesz szukać w kolumnie C i zwracać dane z A:

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

To jedna z najważniejszych przewag nad klasycznym WYSZUKAJ.PIONOWO.

## Gdy formuła nie znajduje oczywistego rekordu

Sprawdź typ danych. Liczba i tekst wyglądający jak liczba nie zawsze są tym samym.

Przy danych z importu warto również sprawdzić zbędne spacje i niewidoczne znaki.

## Kiedy nie używać X.WYSZUKAJ?

Jeżeli plik musi działać w Excelu bez X.WYSZUKAJ, wybierz INDEKS + PODAJ.POZYCJĘ lub istniejące WYSZUKAJ.PIONOWO.

Jeśli potrzebujesz wielu rekordów, wybierz FILTRUJ zamiast wymuszać pojedynczy wynik.
