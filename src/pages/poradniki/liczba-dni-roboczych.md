---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć liczbę dni roboczych w Excelu?"
description: "Jak policzyć dni robocze między dwiema datami z pominięciem weekendów i świąt. Gotowa formuła DNI.ROBOCZE."
slug: "liczba-dni-roboczych"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "Liczba dni między datami"
    url: "/poradniki/liczba-dni-miedzy-datami/"
    category: "Daty"
  - title: "Różnica między datami"
    url: "/poradniki/roznica-miedzy-datami/"
    category: "Daty"
  - title: "Daty i czas w Excelu"
    url: "/formuly/daty/"
    category: "Hub"
---

<div class="answer"><strong>Aby policzyć dni robocze między datą początkową w A2 i końcową w B2</strong>, użyj DNI.ROBOCZE.</div>

<div class="formula">=DNI.ROBOCZE(A2;B2)</div>

Funkcja pomija soboty i niedziele.

## Uwzględnij święta i dni wolne

Jeżeli lista dni wolnych znajduje się w E2:E20:

<div class="formula">=DNI.ROBOCZE(A2;B2;E2:E20)</div>

Daty z tego zakresu również zostaną wyłączone z obliczeń.

## Ważne: daty graniczne są liczone

DNI.ROBOCZE liczy dni robocze obejmujące datę początkową i końcową, jeśli same przypadają w dni robocze.

To ważna różnica względem prostego odejmowania dat.

## Niestandardowy weekend

Jeżeli w Twojej firmie dni wolne przypadają inaczej niż sobota i niedziela, użyj funkcji DNI.ROBOCZE.NIESTAND.

Pozwala ona zdefiniować własny układ weekendu.

## Gdzie to się przydaje?

Najczęstsze zastosowania to terminy realizacji, SLA, liczba przepracowanych dni, urlopy i raportowanie czasu pomiędzy zdarzeniami.
