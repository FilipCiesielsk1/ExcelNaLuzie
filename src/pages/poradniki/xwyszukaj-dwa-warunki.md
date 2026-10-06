---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ z dwoma warunkami w Excelu"
description: "Jak użyć X.WYSZUKAJ z dwoma warunkami bez kolumny pomocniczej. Gotowa formuła i prosty przykład."
slug: "xwyszukaj-dwa-warunki"
category: "Wyszukiwanie danych"
categorySlug: "formuly"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2021+"
verified: false
related:
  - title: "Jak pobrać tekst po znaku w Excelu?"
    url: "/poradniki/tekst-po-znaku/"
    category: "Tekst"
  - title: "Baza funkcji Excel"
    url: "/funkcje/"
    category: "Funkcje"
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
