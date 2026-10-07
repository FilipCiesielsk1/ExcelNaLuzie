---
layout: ../../layouts/ArticleLayout.astro
title: "Jak wyznaczyć poniedziałek z numeru tygodnia w Excelu?"
description: "Jak z numeru tygodnia i roku obliczyć datę poniedziałku rozpoczynającego tydzień ISO. Gotowa formuła i wyjaśnienie."
slug: "poniedzialek-z-numeru-tygodnia"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-07"
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

## Przykład

Załóżmy, że A2 zawiera numer tygodnia 41, a B2 rok 2026.

<div class="formula">=DATA(B2;1;4)-DZIEŃ.TYG(DATA(B2;1;4);2)+1+(A2-1)*7</div>

Wynikiem będzie poniedziałek rozpoczynający wskazany tydzień ISO.

Formuła wykorzystuje 4 stycznia, ponieważ według ISO tydzień zawierający ten dzień zawsze należy do pierwszego tygodnia roku.

## Jak dostać inne dni tego samego tygodnia?

Gdy masz już poniedziałek, kolejne dni są proste. Dla wyniku w C2:

<div class="formula">=C2+4</div>

zwróci piątek tego samego tygodnia, a:

<div class="formula">=C2+6</div>

zwróci niedzielę.

To pozwala łatwo budować tygodniowe zakresy od poniedziałku do niedzieli.

## Uważaj na tydzień 53

Nie każdy rok ma 53 tygodnie ISO. Jeżeli użytkownik wpisuje numer tygodnia ręcznie, warto ograniczyć pole do zakresu 1–53, ale pamiętać, że tydzień 53 nie występuje w każdym roku.

W formularzach biznesowych dobrze jest dodatkowo sprawdzić, czy wyliczony poniedziałek nadal należy do oczekiwanego roku tygodniowego.

## Kiedy taka formuła się przydaje?

Najczęściej w planach tygodniowych, grafikach, raportach sprzedaży i harmonogramach, gdzie użytkownik wybiera rok oraz numer tygodnia zamiast konkretnej daty.
