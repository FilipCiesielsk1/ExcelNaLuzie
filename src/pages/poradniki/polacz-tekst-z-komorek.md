---
layout: ../../layouts/ArticleLayout.astro
title: "Jak połączyć tekst z kilku komórek w Excelu?"
description: "Jak połączyć imię, nazwisko, kod, adres lub inne wartości z kilku komórek w jeden tekst w Excelu. Najprostsze przykłady z operatorem &."
slug: "polacz-tekst-z-komorek"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-06"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak zamienić fragment tekstu w Excelu?"
    url: "/poradniki/zamien-fragment-tekstu/"
    category: "Tekst"
  - title: "Jak sprawdzić, czy komórka zawiera tekst?"
    url: "/poradniki/czy-komorka-zawiera-tekst/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Najprostszy sposób</strong> to połączenie komórek operatorem &amp;.</div>

<div class="formula">=A1&amp;" "&amp;B1</div>

Jeżeli A1 zawiera `Jan`, a B1 `Kowalski`, wynikiem będzie `Jan Kowalski`.

## Połącz więcej komórek

Możesz łączyć dowolną liczbę wartości:

<div class="formula">=A1&amp;" "&amp;B1&amp;" - "&amp;C1</div>

Dla danych `Jan`, `Kowalski` i `12345` otrzymasz `Jan Kowalski - 12345`.

## Dodawanie własnego tekstu

Stały tekst wpisujesz w cudzysłowie.

<div class="formula">="Nr zamówienia: "&amp;A1</div>

Jeżeli A1 zawiera `2026/001`, wynik to `Nr zamówienia: 2026/001`.

## Łączenie liczb i dat

Przy liczbach prosty operator zwykle wystarcza. Przy datach lub wartościach z konkretnym formatowaniem może być potrzebna funkcja TEKST, aby zachować oczekiwany sposób wyświetlania.

## Najczęstszy problem

Jeżeli zapomnisz o separatorze, wartości zostaną sklejone bez spacji. Dlatego między odwołaniami często dodaje się `" "`, `"-"`, `"/"` albo inny wymagany znak.
