---
layout: ../../layouts/ArticleLayout.astro
title: "WYSZUKAJ.PIONOWO z dwoma warunkami w Excelu"
description: "Jak użyć WYSZUKAJ.PIONOWO z dwoma warunkami za pomocą kolumny pomocniczej. Prosty i stabilny przykład dla starszych wersji Excela."
slug: "wyszukaj-pionowo-dwa-warunki"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "X.WYSZUKAJ z dwoma warunkami"
    url: "/poradniki/xwyszukaj-dwa-warunki/"
    category: "Wyszukiwanie"
  - title: "INDEKS + PODAJ.POZYCJĘ"
    url: "/poradniki/indeks-podaj-pozycje/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Najprostsze i czytelne rozwiązanie dla WYSZUKAJ.PIONOWO</strong> to utworzenie kolumny pomocniczej łączącej oba kryteria.</div>

<div class="formula">=WYSZUKAJ.PIONOWO(F2&amp;"|"&amp;G2;A2:D100;4;FAŁSZ)</div>

W kolumnie A utwórz wcześniej klucz z produktu i miasta:

<div class="formula">=B2&amp;"|"&amp;C2</div>

## Przykład tabeli

| Klucz | Produkt | Miasto | Cena |
|---|---|---|---:|
| Laptop|Warszawa | Laptop | Warszawa | 4200 |
| Laptop|Gdańsk | Laptop | Gdańsk | 4350 |
| Monitor|Warszawa | Monitor | Warszawa | 1200 |

W F2 wpisujesz produkt, a w G2 miasto. WYSZUKAJ.PIONOWO łączy oba warunki dokładnie w taki sam sposób jak kolumna pomocnicza.

## Dlaczego potrzebna jest kolumna pomocnicza?

WYSZUKAJ.PIONOWO jest zaprojektowane do wyszukiwania pojedynczej wartości w pierwszej kolumnie zakresu.

Połączenie dwóch pól w jeden klucz pozwala zamienić dwa warunki w jedno kryterium wyszukiwania.

## Czy da się bez kolumny pomocniczej?

Da się budować bardziej złożone formuły tablicowe, ale zwykle są mniej czytelne i trudniejsze w utrzymaniu.

Jeżeli masz X.WYSZUKAJ, prostszym rozwiązaniem bez kolumny pomocniczej będzie:

<div class="formula">=X.WYSZUKAJ(1;(B2:B100=F2)*(C2:C100=G2);D2:D100;"Brak wyniku")</div>

## Kiedy zostać przy WYSZUKAJ.PIONOWO?

Głównie wtedy, gdy arkusz musi działać w starszych wersjach Excela albo jest częścią istniejącego rozwiązania opartego na tej funkcji.
