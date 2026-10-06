---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ — co zrobić, gdy nie ma wyniku?"
description: "Jak w X.WYSZUKAJ zastąpić błąd #N/D własnym komunikatem, pustą komórką lub zerem. Gotowe przykłady formuł."
slug: "xwyszukaj-brak-wyniku"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
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
