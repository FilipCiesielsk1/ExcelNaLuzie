---
layout: ../../layouts/ArticleLayout.astro
title: "Jak porównać dwie tabele Excel i znaleźć różnice?"
description: "Porównanie dwóch tabel Excel po ID: brakujące rekordy, zmienione wartości i duplikaty. Przykłady X.WYSZUKAJ i darmowa porównywarka XLSX."
slug: "jak-porownac-dwie-tabele-excel"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "7 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Porównywarka tabel Excel"
    url: "/narzedzia/porownywarka-tabel/"
    category: "Narzędzie"
---

<div class="answer"><strong>Najlepsza metoda:</strong> dopasuj rekordy za pomocą unikalnego ID, a nie numeru wiersza. X.WYSZUKAJ znajdzie wartość z drugiej tabeli, a porównywarka online pokaże także rekordy brakujące, nowe i zduplikowane.</div>

Dwa raporty mogą zawierać identyczne produkty, ale inną kolejność wierszy. Porównywanie A2 z A2 w drugim pliku jest wtedy zawodne. Najpierw trzeba wybrać kolumnę jednoznacznie opisującą rekord.

**[Otwórz porównywarkę dwóch tabel Excel →](/narzedzia/porownywarka-tabel/)**

## Przykład: cennik przed zmianą i po zmianie

**Tabela A**

| ID | Produkt | Cena |
|---|---|---:|
| P01 | Monitor | 900 |
| P02 | Mysz | 70 |
| P03 | Klawiatura | 150 |

**Tabela B**

| ID | Produkt | Cena |
|---|---|---:|
| P02 | Mysz | 80 |
| P01 | Monitor | 900 |
| P04 | Podkładka | 35 |

Prawidłowe porównanie wykryje zmianę ceny P02 z 70 na 80, brak P03 w B, nowy P04 w B i brak zmian dla P01.

## Metoda 1. Wyszukaj odpowiadającą wartość

Załóżmy, że arkusze noszą nazwy A oraz B. W obu kolumna A zawiera ID, a C ceny. W arkuszu A odszukaj nową cenę:

<div class="formula">=X.WYSZUKAJ(A2;B!$A$2:$A$4;B!$C$2:$C$4;"Brak w B")</div>

Wynik dla P02 to 80. Dla P03 pojawi się napis Brak w B. Rozmiary zakresów wyszukiwania i wyniku powinny odpowiadać tym samym wierszom.

## Metoda 2. Porównaj starą i nową cenę

Jeśli w D2 znajduje się nowa cena pobrana z drugiego arkusza, a C2 zawiera starą cenę, użyj:

<div class="formula">=JEŻELI(D2="Brak w B";"Usunięty";JEŻELI(C2=D2;"Bez zmian";"Zmiana ceny"))</div>

Wynik wskaże, które produkty nie zmieniły wartości, a które wymagają sprawdzenia. Uwaga: kwota zapisana jako tekst może zachowywać się inaczej niż rzeczywista liczba.

## Metoda 3. Znajdź produkty istniejące tylko w B

Warto sprawdzić także tabelę B w przeciwną stronę. Jeżeli umieścisz poniższą formułę w arkuszu B:

<div class="formula">=JEŻELI(LICZ.JEŻELI(A!$A$2:$A$4;A2)=0;"Nowy w B";"Był w A")</div>

Dla P04 otrzymasz Nowy w B. Jednostronne wyszukiwanie nie wystarcza do wykrycia wszystkich różnic.

## Porównanie bez pisania trzech formuł

W **[porównywarce tabel Excel](/narzedzia/porownywarka-tabel/)** możesz wkleić obie listy albo wczytać pliki XLSX lub CSV. Wybierz ID po obu stronach i uruchom porównanie. Narzędzie pokaże zmienione wartości z informacją przed i po, rekordy tylko w A, tylko w B oraz duplikaty.

Wyniki możesz pobrać jako CSV lub XLSX z osobnymi zakładkami. Obsługiwane jest również mapowanie kolumn o różnych nagłówkach i klucz złożony z kilku pól, np. numer zamówienia + pozycja.

Jeśli rekordy są identyfikowane dopiero przez dwie lub więcej kolumn, sprawdź poradnik **[porównywanie tabel po kilku kolumnach](/poradniki/duplikaty-klucz-zlozony-porownywanie-tabel/)**.

## Uwaga na duplikaty i puste ID

Jeżeli ten sam identyfikator występuje kilka razy, prosta formuła X.WYSZUKAJ może zwrócić pierwsze z kilku dopasowań. Porównywarka **nie zgaduje**, który wiersz należy sparować: zgłasza niejednoznaczne identyfikatory osobno.

Przed analizą sprawdź też puste klucze, zbędne spacje, różne formaty liczb oraz zgodność nazw kolumn. Identyczna cena nie dowodzi, że chodzi o ten sam produkt.
