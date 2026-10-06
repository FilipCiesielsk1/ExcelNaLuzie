---
layout: ../../layouts/ArticleLayout.astro
title: "Jak wyznaczyć poniedziałek z numeru tygodnia w Excelu?"
description: "Jak z numeru tygodnia i roku obliczyć datę poniedziałku rozpoczynającego tydzień ISO. Gotowa formuła i wyjaśnienie."
slug: "poniedzialek-z-numeru-tygodnia"
category: "Daty i czas"
categorySlug: "formuly/daty"
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
  - title: "Numer tygodnia w Excelu"
    url: "/poradniki/numer-tygodnia-w-excelu/"
    category: "Daty"
  - title: "Pierwszy dzień miesiąca"
    url: "/poradniki/pierwszy-dzien-miesiaca/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Jeżeli numer tygodnia jest w A2, a rok w B2</strong>, poniższa formuła zwróci poniedziałek rozpoczynający tydzień ISO.</div>

<div class="formula">=DATA(B2;1;4)-DZIEŃ.TYG(DATA(B2;1;4);2)+1+(A2-1)*7</div>

Formuła opiera się na zasadzie ISO 8601, według której pierwszy tydzień roku zawiera pierwszy czwartek stycznia.

## Jak działa formuła?

Najpierw tworzona jest data 4 stycznia wskazanego roku:

<div class="formula">=DATA(B2;1;4)</div>

Następnie DZIEŃ.TYG z argumentem 2 pozwala cofnąć się do poniedziałku tego tygodnia.

Na końcu dodawane są kolejne pełne tygodnie:

<div class="formula">=(A2-1)*7</div>

## Dlaczego nie wystarczy dodać tygodni do 1 stycznia?

Pierwszy tydzień ISO nie zawsze zaczyna się 1 stycznia. Część dni na początku roku może należeć jeszcze do ostatniego tygodnia poprzedniego roku.

Dlatego punktem odniesienia jest 4 stycznia.

## Praktyczne zastosowanie

Taka data świetnie sprawdza się jako klucz tygodnia w raportach, planach pracy i zestawieniach, bo jednoznacznie identyfikuje cały tydzień.
