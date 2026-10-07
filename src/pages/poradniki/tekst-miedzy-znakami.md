---
layout: ../../layouts/ArticleLayout.astro
title: "Jak pobrać tekst między dwoma znakami w Excelu?"
description: "Gotowa formuła do pobierania tekstu znajdującego się między nawiasami, myślnikami lub innymi dwoma znakami w Excelu."
slug: "tekst-miedzy-znakami"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak pobrać tekst po znaku w Excelu?"
    url: "/poradniki/tekst-po-znaku/"
    category: "Tekst"
  - title: "Jak pobrać tekst przed znakiem w Excelu?"
    url: "/poradniki/tekst-przed-znakiem/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Aby pobrać tekst między dwoma znakami</strong>, możesz połączyć FRAGMENT.TEKSTU i ZNAJDŹ.</div>

<div class="formula">=FRAGMENT.TEKSTU(A1;ZNAJDŹ("[";A1)+1;ZNAJDŹ("]";A1)-ZNAJDŹ("[";A1)-1)</div>

Dla wartości `Produkt [ABC123] magazyn` wynikiem będzie `ABC123`.

## Jak działa formuła?

Pierwsze `ZNAJDŹ` określa pozycję znaku otwierającego. Dodajemy `1`, aby rozpocząć pobieranie od następnego znaku.

Drugie `ZNAJDŹ` wskazuje pozycję znaku zamykającego. Różnica między tymi pozycjami pozwala obliczyć długość tekstu do pobrania.

## Przykład

| Tekst | Wynik |
|---|---|
| Produkt [ABC123] magazyn | ABC123 |
| Kod (PL-001) aktywny | PL-001 |
| ID &lt;98765&gt; | 98765 |

Dla nawiasów okrągłych wystarczy zmienić znaki w formule:

<div class="formula">=FRAGMENT.TEKSTU(A1;ZNAJDŹ("(";A1)+1;ZNAJDŹ(")";A1)-ZNAJDŹ("(";A1)-1)</div>

## Gdy znaki mogą nie występować

Jeżeli w części komórek brakuje któregoś separatora, formuła zwróci błąd. W takim przypadku warto dodać obsługę błędu albo najpierw zweryfikować strukturę danych.

## Prostszy wariant w Microsoft 365 i Excelu 2024

Jeżeli masz dostęp do TEKST.PO i TEKST.PRZED, formułę można znacznie uprościć:

<div class="formula">=TEKST.PRZED(TEKST.PO(A1;"[");"]")</div>

Najpierw pobierany jest tekst po znaku [, a następnie wszystko przed ].

Dla wartości `Produkt [ABC-123] aktywny` wynikiem będzie `ABC-123`.

## Różne pary separatorów

Ta sama technika działa z nawiasami, ukośnikami albo własnymi znacznikami tekstowymi. Przykładowo dla nawiasów okrągłych:

<div class="formula">=TEKST.PRZED(TEKST.PO(A1;"(");")")</div>

## Co jeśli separatorów jest kilka?

Klasyczna formuła z ZNAJDŹ zwykle pracuje na pierwszym znalezionym znaku. Jeśli tekst zawiera kilka par nawiasów, musisz zdecydować, którą parę chcesz obsłużyć.

W nowym Excelu argument wystąpienia w TEKST.PO i TEKST.PRZED daje większą kontrolę nad pierwszym lub ostatnim separatorem.

## Zabezpieczenie przed brakującym znakiem

Jeśli dane nie zawsze zawierają obie granice, użyj JEŻELI.BŁĄD:

<div class="formula">=JEŻELI.BŁĄD(TEKST.PRZED(TEKST.PO(A1;"[");"]");"")</div>

Zamiast błędu komórka pozostanie pusta. W raportach lepiej czasami zwrócić własny komunikat, np. „Brak kodu”, żeby łatwiej znaleźć niepoprawne rekordy.
