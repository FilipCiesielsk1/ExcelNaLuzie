---
layout: ../../layouts/ArticleLayout.astro
title: "Jak znaleźć i poprawić błędy formuł w Excelu?"
description: "Błędy formuł w Excelu: brak nawiasu, średniki, cudzysłowy, #N/D i #DZIEL/0!. Przykłady i analizator składni online."
slug: "jak-sprawdzic-bledy-w-formule-excel"
category: "Warunki i logika"
categorySlug: "formuly/logika"
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
  - title: "Analizator formuł Excel"
    url: "/narzedzia/analizator-formul/"
    category: "Narzędzie"
---

<div class="answer"><strong>Najpierw sprawdź zapis:</strong> czy formuła zaczyna się od =, wszystkie nawiasy i cudzysłowy są zamknięte, a argumenty oddzielone średnikami. Jeśli składnia jest poprawna, sprawdź zawartość komórek oraz poprawność zakresów.</div>

Formuła może być błędna składniowo albo poprawna, ale zwracać niepożądany wynik. Pierwszy rodzaj problemu da się często wykryć bez arkusza; drugi wymaga sprawdzenia rzeczywistych danych.

**[Sprawdź składnię w analizatorze formuł →](/narzedzia/analizator-formul/)**

## 1. Brakujący nawias w JEŻELI

Przy dłuższych formułach z kilkoma warunkami łatwo pominąć nawias zamykający:

<div class="formula">=JEŻELI(A2>100;"Dużo";"Mało")</div>

To poprawny zapis. Przy zagnieżdżeniu kilku funkcji trzeba domknąć każdą z osobna. Nie licz jednak nawiasów wewnątrz tekstów ujętych w cudzysłowy — są tylko znakami tekstowymi.

## 2. Przecinki zamiast średników

Polski Excel zwykle wymaga średników między argumentami. Poprawny przykład:

<div class="formula">=SUMA.JEŻELI(A2:A20;"Meble";C2:C20)</div>

Przecinek w liczbie 12,50 jest separatorem dziesiętnym i ma inne znaczenie. Nie należy automatycznie zastępować wszystkich przecinków w formule średnikami.

## 3. Brakujące cudzysłowy wokół tekstu

Gdy porównujesz komórkę z napisem, wpisz napis w cudzysłowach:

<div class="formula">=JEŻELI(B2="Gotowe";"Tak";"Nie")</div>

Bez nich Excel może potraktować wyraz jako nazwę zakresu, a niedomknięty cudzysłów może uniemożliwić rozpoznanie całej formuły.

## 4. #N/D — brak wartości w tabeli

Jeśli X.WYSZUKAJ nie odnajduje ID, może zwrócić błąd #N/D. Zanim go ukryjesz, sprawdź istnienie kodu i porównaj typy danych po obu stronach wyszukiwania.

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak produktu")</div>

Czwarty argument służy do pokazania komunikatu, kiedy brakuje dopasowania. Nie chroni jednak przed źle wskazaną kolumną wyniku.

## 5. #DZIEL/0! — próba dzielenia przez zero

Gdy mianownik jest zerem, wynik nie jest poprawną liczbą. Możesz wcześniej go sprawdzić:

<div class="formula">=JEŻELI(B2=0;"Brak podstawy";A2/B2)</div>

Jeśli zero wynika z nieudanego importu, lepiej naprawić dane źródłowe zamiast wyłącznie zasłaniać problem komunikatem.

## 6. Przesunięte zakresy podczas wyszukiwania

Zakres wyszukiwania A2:A100 i zakres wynikowy C3:C101 odnoszą się do innych wierszy. Formuła może zwracać pozornie prawidłowe wartości, ale dla niewłaściwych rekordów.

Przy kopiowaniu do kolejnych wierszy zwróć uwagę na blokowanie adresów znakiem dolara w stałych zakresach.

## 7. Liczba zapisana jako tekst

Po imporcie CSV wartości wyglądające jak liczby mogą być tekstem. Sprawdź typ komórki:

<div class="formula">=CZY.LICZBA(A2)</div>

Wynik FAŁSZ pomaga wyjaśnić część problemów z sumowaniem i porównywaniem. Sama zmiana formatu komórki na Liczbowy nie zawsze zamienia tekst na liczbę.

## Co potrafi analizator online?

Wklej formułę do **[analizatora formuł Excel](/narzedzia/analizator-formul/)**. Zobaczysz wykryte funkcje, zagnieżdżenia, błędy nawiasów i cudzysłowów oraz ostrzeżenia o możliwych separatorach z angielskich przykładów. Przy rozpoznanych funkcjach pojawią się linki do ich opisów.

Analizator **nie wykonuje obliczeń** i nie ma dostępu do skoroszytu. Nie sprawdzi istnienia arkuszy ani poprawności źródłowych danych. Po wstępnej analizie nadal trzeba przetestować formułę w Excelu.
