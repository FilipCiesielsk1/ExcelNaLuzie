---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ i wiele wyników — użyj FILTRUJ"
description: "X.WYSZUKAJ zwraca pojedyncze dopasowanie. Zobacz, jak zwrócić wszystkie pasujące wiersze w Excelu za pomocą funkcji FILTRUJ."
slug: "xwyszukaj-kilka-wynikow"
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

<div class="answer"><strong>X.WYSZUKAJ nie jest najlepszą funkcją do zwracania wielu dopasowań.</strong> Jeżeli potrzebujesz wszystkich pasujących wierszy, użyj FILTRUJ.</div>

<div class="formula">=FILTRUJ(A2:C100;A2:A100=F2;"Brak wyników")</div>

Formuła zwróci wszystkie wiersze z zakresu A:C, w których kolumna A jest równa wartości z F2.

## Przykład

| Produkt | Miasto | Cena |
|---|---|---:|
| Laptop | Warszawa | 4200 |
| Laptop | Gdańsk | 4350 |
| Monitor | Warszawa | 1200 |

Jeżeli F2 zawiera Laptop, wynikiem będą oba wiersze dotyczące laptopa.

## Dlaczego nie X.WYSZUKAJ?

X.WYSZUKAJ jest przeznaczone przede wszystkim do zwracania pojedynczego dopasowania.

Jeżeli kilka rekordów spełnia warunek, a Ty potrzebujesz całej listy, FILTRUJ znacznie lepiej odpowiada temu zadaniu.

## Kilka warunków i wiele wyników

<div class="formula">=FILTRUJ(A2:D100;(A2:A100=G2)*(B2:B100=H2);"Brak wyników")</div>

Wynik rozleje się automatycznie na odpowiednią liczbę wierszy.

## Gdy potrzebujesz tylko pierwszego wyniku

Wtedy wróć do X.WYSZUKAJ. Będzie prostsze i czytelniejsze.

## FILTRUJ zwraca dynamiczny zakres

Jeżeli trzy wiersze spełniają warunek, wyniki zajmą trzy wiersze. Jeśli jutro pojawi się czwarty rekord, zakres automatycznie się rozszerzy.

Nie musisz kopiować formuły w dół.

## Zwracanie kilku kolumn naraz

Zakres wynikowy może obejmować wiele kolumn:

<div class="formula">=FILTRUJ(A2:D100;A2:A100=F2;"Brak wyników")</div>

Jeśli warunek spełnia pięć rekordów, dostaniesz pięć pełnych wierszy od kolumny A do D.

## Posortuj wyniki od razu

Wynik FILTRUJ możesz przekazać do SORTUJ:

<div class="formula">=SORTUJ(FILTRUJ(A2:D100;A2:A100=F2;"Brak wyników"))</div>

To przydatne w dynamicznych raportach, w których lista ma być od razu uporządkowana.

## Zostaw miejsce na rozlanie wyniku

Komórki, do których ma rozlać się wynik, muszą być wolne. Jeśli coś blokuje obszar, Excel nie będzie mógł wyświetlić całej tablicy.

Dlatego dynamiczne listy najlepiej umieszczać w wydzielonej części arkusza.

## Kiedy X.WYSZUKAJ nadal jest lepsze?

Jeśli potrzebujesz dokładnie jednego wyniku dla unikalnego ID, X.WYSZUKAJ jest prostsze.

FILTRUJ wybieraj wtedy, gdy wiele rekordów jest oczekiwanym i poprawnym wynikiem, a nie błędem w danych.
