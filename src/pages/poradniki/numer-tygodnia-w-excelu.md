---
layout: ../../layouts/ArticleLayout.astro
title: "Jak obliczyć numer tygodnia w Excelu?"
description: "Jak pobrać numer tygodnia z daty w Excelu. Gotowa formuła NUM.TYG oraz wariant zgodny z numeracją ISO 8601."
slug: "numer-tygodnia-w-excelu"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "Poniedziałek z numeru tygodnia"
    url: "/poradniki/poniedzialek-z-numeru-tygodnia/"
    category: "Daty"
  - title: "Różnica między datami"
    url: "/poradniki/roznica-miedzy-datami/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Dla europejskiej numeracji tygodni ISO</strong> użyj NUM.TYG z drugim argumentem 21.</div>

<div class="formula">=NUM.TYG(A2;21)</div>

A2 zawiera datę, dla której chcesz ustalić numer tygodnia.

## Dlaczego 21?

Tryb 21 korzysta z systemu zgodnego z ISO 8601: tydzień zaczyna się w poniedziałek, a pierwszy tydzień roku to tydzień zawierający pierwszy czwartek roku.

## Tydzień zaczynający się w poniedziałek bez ISO

<div class="formula">=NUM.TYG(A2;2)</div>

Ten wariant również zaczyna tydzień w poniedziałek, ale korzysta z innego sposobu określania pierwszego tygodnia roku.

## Który wariant wybrać?

W raportach biznesowych w Polsce najczęściej bezpieczniejszy będzie system ISO:

<div class="formula">=NUM.TYG(A2;21)</div>

## Numer tygodnia i rok

Przy danych na przełomie roku sam numer tygodnia może nie wystarczyć. W raportach warto przechowywać także rok albo wyliczać datę poniedziałku rozpoczynającego dany tydzień.
