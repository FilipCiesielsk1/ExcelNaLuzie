---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ w lewo — prosty przykład"
description: "Jak wyszukiwać w lewo w Excelu za pomocą X.WYSZUKAJ. Gotowa formuła, przykład i porównanie z WYSZUKAJ.PIONOWO."
slug: "xwyszukaj-w-lewo"
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
  - title: "X.WYSZUKAJ — prosty przykład"
    url: "/poradniki/xwyszukaj-podstawy/"
    category: "Wyszukiwanie"
  - title: "INDEKS + PODAJ.POZYCJĘ"
    url: "/poradniki/indeks-podaj-pozycje/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>X.WYSZUKAJ może wyszukiwać w lewo bez dodatkowych sztuczek.</strong> Wskaż kolumnę wyszukiwania i niezależnie od niej kolumnę wyniku.</div>

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

Formuła szuka wartości z F2 w kolumnie C, ale zwraca odpowiadającą wartość z kolumny A.

## Przykład

| ID | Produkt | Kod kreskowy |
|---|---|---|
| 101 | Laptop | 590001 |
| 102 | Monitor | 590002 |
| 103 | Klawiatura | 590003 |

Jeżeli F2 zawiera kod 590002, możesz wyszukać go w kolumnie C i zwrócić ID z kolumny A.

## Dlaczego WYSZUKAJ.PIONOWO ma z tym problem?

WYSZUKAJ.PIONOWO standardowo wyszukuje w pierwszej kolumnie wskazanego zakresu i zwraca dane z kolumn znajdujących się po prawej stronie.

X.WYSZUKAJ rozdziela zakres wyszukiwania od zakresu wyniku, więc ich kolejność w arkuszu nie ma znaczenia.

## Wyszukiwanie w lewo w starszym Excelu

<div class="formula">=INDEKS(A2:A100;PODAJ.POZYCJĘ(F2;C2:C100;0))</div>

Ten wariant również pozwala zwracać dane z kolumn po lewej stronie.

## Przykład: znajdź ID po kodzie kreskowym

Załóżmy, że A2:A100 zawiera ID, a C2:C100 kod kreskowy. Szukany kod wpisujesz w F2.

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

X.WYSZUKAJ nie interesuje się fizyczną kolejnością kolumn. Zakres wyszukiwania i zakres zwracany wskazujesz osobno.

## Przesuwanie kolumn jest mniej ryzykowne

WYSZUKAJ.PIONOWO zwraca kolumnę na podstawie jej numeru w wybranym zakresie. Dodanie nowej kolumny może więc wymagać zmiany formuły.

X.WYSZUKAJ odwołuje się bezpośrednio do zakresu wyniku, dzięki czemu struktura jest łatwiejsza do zrozumienia i utrzymania.

## Co z duplikatami?

Jeżeli kod kreskowy pojawia się kilka razy, X.WYSZUKAJ zwróci pojedyncze dopasowanie.

Jeśli to nie powinno się zdarzać, duplikat jest problemem jakości danych. Jeżeli wiele rekordów jest prawidłowe, rozważ FILTRUJ.

## Zabezpieczenie braku wyniku

Czwarty argument pozwala zwrócić własny komunikat:

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Nie znaleziono")</div>

Nie musisz dodawać osobnego JEŻELI.BŁĄD tylko po to, żeby obsłużyć brak dopasowania.

## Starszy Excel

INDEKS + PODAJ.POZYCJĘ daje ten sam kluczowy efekt — wyszukiwanie i zwracanie mogą odbywać się w dowolnych kolumnach:

<div class="formula">=INDEKS(A2:A100;PODAJ.POZYCJĘ(F2;C2:C100;0))</div>

To najlepsza alternatywa, gdy skoroszyt musi działać bez X.WYSZUKAJ.
