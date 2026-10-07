---
layout: ../../layouts/ArticleLayout.astro
title: "SUMA.JEŻELI w Excelu — prosty przykład"
description: "Jak używać SUMA.JEŻELI w Excelu. Sumowanie po jednym warunku, kryteria tekstowe i liczbowe oraz praktyczne przykłady."
slug: "suma-jezeli-podstawy"
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

<div class="answer"><strong>Najprościej:</strong> SUMA.JEŻELI sumuje wartości tylko dla rekordów spełniających jeden wskazany warunek.</div>

<div class="formula">=SUMA.JEŻELI(A2:A100;"Warszawa";C2:C100)</div>

Jeżeli kolumna A zawiera miasto, a kolumna C wartość sprzedaży, formuła zsumuje sprzedaż tylko dla Warszawy.

## Jak czytać SUMA.JEŻELI?

Typowy zapis ma trzy argumenty:

<div class="formula">=SUMA.JEŻELI(zakres_kryterium;kryterium;zakres_sumowania)</div>

Pierwszy zakres jest sprawdzany, a trzeci zawiera wartości, które mają zostać dodane.

## Kryterium z komórki

Miasto lub kategorię możesz wskazać w innej komórce:

<div class="formula">=SUMA.JEŻELI(A2:A100;F2;C2:C100)</div>

Zmiana F2 automatycznie zmieni wynik.

## Sumowanie wartości większych od progu

Jeżeli chcesz zsumować tylko liczby większe lub równe 1000:

<div class="formula">=SUMA.JEŻELI(C2:C100;">=1000";C2:C100)</div>

Zakres kryterium i zakres sumowania mogą być wtedy tym samym zakresem.

## Próg z innej komórki

<div class="formula">=SUMA.JEŻELI(C2:C100;">="&F2;C2:C100)</div>

Operator trzeba połączyć z adresem komórki za pomocą znaku &.

## Przykład z kategorią

Załóżmy, że B2:B100 zawiera kategorię produktu, a D2:D100 marżę. Aby zsumować marżę dla kategorii Akcesoria:

<div class="formula">=SUMA.JEŻELI(B2:B100;"Akcesoria";D2:D100)</div>

## Najczęstszy błąd

Zakres kryterium i zakres sumowania powinny odnosić się do odpowiadających sobie wierszy. Jeśli jeden zaczyna się w wierszu 2, a drugi w wierszu 3, wynik może być niepoprawny.

Drugim częstym problemem jest próba dodania kilku niezależnych warunków. SUMA.JEŻELI obsługuje jeden warunek.

## Kiedy użyć SUMA.WARUNKÓW?

Jeżeli chcesz zsumować np. sprzedaż dla Warszawy, tylko dla statusu Gotowe i tylko od określonej daty, użyj SUMA.WARUNKÓW. Jest to naturalne rozszerzenie SUMA.JEŻELI na kilka kryteriów.

## Przykład: suma kosztów jednej kategorii

Jeżeli w A2:A100 znajdują się nazwy kategorii kosztów, a w B2:B100 kwoty, możesz łatwo policzyć łączny koszt transportu:

<div class="formula">=SUMA.JEŻELI(A2:A100;"Transport";B2:B100)</div>

To często prostsze niż filtrowanie tabeli i ręczne odczytywanie sumy z paska stanu.