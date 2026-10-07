---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ — jak znaleźć najbliższą wartość?"
description: "Jak znaleźć dokładną lub najbliższą mniejszą albo większą wartość za pomocą X.WYSZUKAJ. Przykład z progami i trybem dopasowania."
slug: "xwyszukaj-najblizsza-wartosc"
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
  - title: "X.WYSZUKAJ — prosty przykład"
    url: "/poradniki/xwyszukaj-podstawy/"
    category: "Wyszukiwanie"
  - title: "Jak znaleźć wartość w tabeli?"
    url: "/poradniki/jak-znalezc-wartosc-w-tabeli/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>Aby zwrócić dokładne dopasowanie lub najbliższą mniejszą wartość</strong>, ustaw tryb dopasowania X.WYSZUKAJ na -1.</div>

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";-1)</div>

To przydatne np. przy progach rabatowych, podatkowych, prowizyjnych albo punktowych.

## Przykład z progami

| Próg | Rabat |
|---:|---:|
| 0 | 0% |
| 100 | 5% |
| 500 | 10% |
| 1000 | 15% |

Dla wartości 320 formuła zwróci rabat odpowiadający progowi 100, czyli 5%.

## Co oznacza -1?

Argument trybu dopasowania -1 oznacza: najpierw spróbuj znaleźć wartość dokładną, a jeśli jej nie ma, użyj następnej mniejszej wartości.

## Najbliższa większa wartość

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";1)</div>

Tryb 1 oznacza dokładne dopasowanie albo następną większą wartość.

## Dobra praktyka

Przy tabelach progowych warto układać wartości progów rosnąco. Ułatwia to kontrolę arkusza i zmniejsza ryzyko błędnej interpretacji danych.

## Przykład: tabela progów

Załóżmy, że w A2:A10 masz progi punktowe, a w B2:B10 odpowiadające im poziomy rabatu.

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";-1)</div>

Jeżeli dokładnego progu nie ma, tryb -1 wybierze dokładne dopasowanie albo najbliższą mniejszą wartość.

To pasuje do tabel typu „od tej wartości obowiązuje dany próg”.

## Kiedy użyć trybu 1?

Tryb 1 działa odwrotnie:

<div class="formula">=X.WYSZUKAJ(F2;A2:A10;B2:B10;"Brak";1)</div>

Jeżeli dokładnego wyniku nie ma, wybierane jest najbliższe większe dopasowanie.

Może to być przydatne np. przy przypisywaniu do najbliższego wyższego limitu.

## Testuj wartości graniczne

Przy tabelach progowych sprawdź minimum, dokładny próg, wartość pomiędzy progami i wartość większą niż najwyższy próg.

To właśnie na granicach najłatwiej przeoczyć błędne założenie dotyczące sposobu dopasowania.

## Uporządkuj tabelę progów

Nawet jeśli formuła technicznie działa, rosnąco uporządkowana kolumna progów jest dużo łatwiejsza do sprawdzenia przez człowieka.

Przy raportach finansowych lub cennikach czytelność tabeli jest równie ważna jak sama formuła.

## Nie używaj przybliżenia dla identyfikatorów

Tryby -1 i 1 są dobre dla progów, przedziałów i limitów. Dla numeru zamówienia, kodu produktu albo PESEL potrzebujesz dopasowania dokładnego.
