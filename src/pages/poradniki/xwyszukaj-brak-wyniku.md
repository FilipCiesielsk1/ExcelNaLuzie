---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ — co zrobić, gdy nie ma wyniku?"
description: "Jak w X.WYSZUKAJ zastąpić błąd #N/D własnym komunikatem, pustą komórką lub zerem. Gotowe przykłady formuł."
slug: "xwyszukaj-brak-wyniku"
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
  - title: "X.WYSZUKAJ z dwoma warunkami"
    url: "/poradniki/xwyszukaj-dwa-warunki/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Nie musisz używać JEŻELI.BŁĄD.</strong> X.WYSZUKAJ ma własny argument określający wynik, gdy nic nie zostanie znalezione.</div>

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

Jeżeli wartość z F2 nie występuje w kolumnie A, zamiast błędu #N/D zobaczysz tekst Brak wyniku.

## Zwróć pustą komórkę

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"")</div>

## Zwróć zero

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;0)</div>

Zero może być wygodne, gdy wynik ma być później używany w obliczeniach.

## X.WYSZUKAJ czy JEŻELI.BŁĄD?

W przypadku X.WYSZUKAJ najlepiej zwykle skorzystać z wbudowanego argumentu obsługującego brak dopasowania.

JEŻELI.BŁĄD przydaje się bardziej wtedy, gdy chcesz przechwycić również inne typy błędów powstające w większej formule.

## Uwaga na prawdziwe błędy danych

Ukrywanie każdego błędu pustym tekstem może utrudniać wykrywanie problemów. Jeżeli brak dopasowania ma znaczenie biznesowe, czytelny komunikat często jest lepszy niż pusta komórka.

## Czwarty argument obsługuje konkretnie brak dopasowania

W formule:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

tekst „Brak wyniku” pojawi się wtedy, gdy szukana wartość nie zostanie znaleziona.

To bardziej precyzyjne niż opakowanie całej formuły w JEŻELI.BŁĄD, bo nie ukrywa automatycznie każdego innego problemu.

## Pusta komórka czy komunikat?

Jeżeli wynik jest wykorzystywany w raporcie, pusty tekst może wyglądać czyściej:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"")</div>

Jeżeli użytkownik ma poprawić dane, czytelny komunikat „Brak wyniku” jest zwykle lepszy, bo od razu wskazuje problem.

## Zero może być prawdziwą wartością

Formuła:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;0)</div>

jest wygodna w dalszych obliczeniach, ale używaj jej świadomie. Zero może przecież być również poprawnym wynikiem biznesowym.

Jeżeli musisz rozróżnić „brak rekordu” od „rekord ma wartość 0”, lepszy jest tekst albo osobna kontrola.

## Gdy rekord istnieje, ale nadal nie jest znajdowany

Sprawdź, czy po obu stronach porównania masz ten sam typ danych. Liczba 123 i tekst „123” mogą wyglądać identycznie w arkuszu, ale nie zawsze zachowują się tak samo.

Drugim częstym problemem są ukryte spacje po imporcie danych.

## Nie ukrywaj wszystkich błędów bez potrzeby

JEŻELI.BŁĄD bywa przydatne, ale może zamaskować również błędny zakres albo inną pomyłkę w formule. Jeśli problemem jest tylko brak dopasowania, czwarty argument X.WYSZUKAJ jest czytelniejszym rozwiązaniem.
