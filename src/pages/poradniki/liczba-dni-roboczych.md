---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć liczbę dni roboczych w Excelu?"
description: "Jak policzyć dni robocze między dwiema datami z pominięciem weekendów i świąt. Gotowa formuła DNI.ROBOCZE."
slug: "liczba-dni-roboczych"
category: "Daty i czas"
categorySlug: "formuly/daty"
date: "2026-10-06"
updated: "2026-10-07"
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

## Przykład z listą świąt

Załóżmy, że A2 to 01.10.2026, B2 to 15.10.2026, a w E2:E20 wpisujesz dni wolne obowiązujące w Twojej firmie.

<div class="formula">=DNI.ROBOCZE(A2;B2;E2:E20)</div>

Excel pominie soboty, niedziele oraz wszystkie daty znajdujące się w E2:E20.

Warto przechowywać listę świąt w osobnym miejscu arkusza zamiast wpisywać je bezpośrednio do formuły. Dzięki temu łatwo zaktualizujesz kalendarz na kolejny rok.

## Gdy weekend nie wypada w sobotę i niedzielę

Dla niestandardowego tygodnia pracy użyj funkcji DNI.ROBOCZE.NIESTAND.

<div class="formula">=DNI.ROBOCZE.NIESTAND(A2;B2;1;E2:E20)</div>

Kod 1 oznacza standardowy weekend sobota–niedziela, ale funkcja pozwala wybrać również inne układy dni wolnych. Przydaje się to przy pracy zmianowej albo raportach dla innych krajów.

## Uważaj na datę początkową i końcową

DNI.ROBOCZE liczy daty graniczne, jeśli same są dniami roboczymi. To różni się od zwykłego odejmowania dat.

Przykładowo zakres od poniedziałku do piątku tego samego tygodnia daje 5 dni roboczych, a nie 4.

## Typowe zastosowania

Ta funkcja dobrze sprawdza się przy obliczaniu SLA, czasu realizacji zgłoszeń, dni urlopowych, terminów projektowych i czasu oczekiwania na płatność.

Jeżeli natomiast chcesz wyznaczyć **konkretną datę po określonej liczbie dni roboczych**, potrzebujesz funkcji DZIEŃ.ROBOCZY albo DZIEŃ.ROBOCZY.NIESTAND.
