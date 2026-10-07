---
layout: ../../layouts/ArticleLayout.astro
title: "SUMA.WARUNKÓW i tekst w Excelu"
description: "Jak sumować wartości według tekstu za pomocą SUMA.WARUNKÓW. Statusy, kategorie, symbole wieloznaczne i kilka kryteriów."
slug: "suma-warunkow-tekst"
category: "Liczenie i sumowanie"
categorySlug: "formuly/liczenie"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> podaj tekst jako kryterium w cudzysłowie albo wskaż komórkę, która go zawiera.</div>

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;"Gotowe")</div>

Formuła zsumuje wartości z C tylko dla wierszy, w których kolumna A zawiera Gotowe.

## Kryterium z komórki

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;F2)</div>

Jeżeli F2 zawiera status, kategorię albo nazwę regionu, użytkownik może zmieniać kryterium bez edycji formuły.

## Dwa warunki tekstowe

Załóżmy, że A to region, B status, a C sprzedaż:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;"Północ";B2:B100;"Gotowe")</div>

Do wyniku trafią tylko rekordy spełniające oba warunki.

## Fragment tekstu

SUMA.WARUNKÓW obsługuje symbole wieloznaczne. Gwiazdka oznacza dowolny ciąg znaków.

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;"*Excel*")</div>

Formuła uwzględni np. Kurs Excel, Excel 2026 i Szkolenie Excel.

## Tekst zaczynający się od prefiksu

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;"FV-*")</div>

Możesz w ten sposób sumować wartości dokumentów o określonym typie numeracji.

## Wielkość liter

Typowe kryteria tekstowe w tych funkcjach nie rozróżniają wielkich i małych liter. Gotowe oraz GOTOWE będą traktowane tak samo.

## Uważaj na niewidoczne znaki

Dane importowane z systemów zewnętrznych mogą zawierać dodatkowe spacje. Wtedy rekord wyglądający poprawnie może nie pasować do kryterium.

Jeżeli suma jest niższa niż oczekujesz, sprawdź źródłowe teksty przed komplikowaniem formuły.

## Kiedy użyć SUMA.JEŻELI?

Jeżeli masz tylko jeden warunek tekstowy, SUMA.JEŻELI może być krótsza. SUMA.WARUNKÓW warto stosować wtedy, gdy planujesz dodawać kolejne kryteria albo raport od początku opiera się na kilku kolumnach.

## Przykład: suma dla wybranego statusu i kategorii

Jeżeli status wybierasz w F2, a kategorię w G2, możesz połączyć oba parametry bez wpisywania tekstu na stałe:

<div class="formula">=SUMA.WARUNKÓW(C2:C100;A2:A100;F2;B2:B100;G2)</div>

Takie rozwiązanie dobrze sprawdza się w prostych dashboardach, bo użytkownik zmienia parametry, a formuła pozostaje bez zmian.