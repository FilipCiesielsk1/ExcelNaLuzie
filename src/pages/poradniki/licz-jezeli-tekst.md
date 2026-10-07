---
layout: ../../layouts/ArticleLayout.astro
title: "LICZ.JEŻELI dla tekstu w Excelu"
description: "Jak liczyć komórki zawierające tekst w Excelu za pomocą LICZ.JEŻELI. Dokładne dopasowanie, fragment tekstu i symbole wieloznaczne."
slug: "licz-jezeli-tekst"
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

<div class="answer"><strong>Najprościej:</strong> jeśli chcesz policzyć dokładnie określony tekst, wpisz go jako kryterium w cudzysłowie.</div>

<div class="formula">=LICZ.JEŻELI(A2:A100;"Gotowe")</div>

Formuła policzy wszystkie komórki, których wartością jest Gotowe.

## Dokładne dopasowanie

LICZ.JEŻELI nie rozróżnia wielkich i małych liter. Tekst Gotowe oraz GOTOWE będzie traktowany tak samo.

To wygodne w większości zestawień statusów, ale warto o tym pamiętać przy kodach, w których wielkość liter ma znaczenie.

## Tekst z innej komórki

Kryterium może pochodzić z komórki:

<div class="formula">=LICZ.JEŻELI(A2:A100;F2)</div>

Jeżeli F2 zawiera Gotowe, wynik będzie taki sam jak przy kryterium wpisanym bezpośrednio.

## Komórki zawierające fragment tekstu

Do wyszukiwania fragmentu użyj gwiazdki jako symbolu wieloznacznego:

<div class="formula">=LICZ.JEŻELI(A2:A100;"*Excel*")</div>

Taki zapis policzy m.in. Excel, Kurs Excel oraz Excel 2026.

## Tekst zaczynający się od określonego fragmentu

<div class="formula">=LICZ.JEŻELI(A2:A100;"FV-*")</div>

To przydatne np. do liczenia numerów dokumentów zaczynających się od prefiksu FV-.

## Tekst kończący się określonym fragmentem

<div class="formula">=LICZ.JEŻELI(A2:A100;"*.pl")</div>

Możesz w ten sposób policzyć wartości kończące się np. rozszerzeniem lub fragmentem kodu.

## Pytajnik jako jeden dowolny znak

Znak ? zastępuje dokładnie jeden znak. Kryterium "A?C" dopasuje np. ABC albo A1C, ale nie ABBC.

## Uważaj na spacje

Komórka zawierająca Gotowe oraz komórka zawierająca Gotowe ze spacją na końcu mogą nie zachowywać się identycznie. To typowy problem przy danych importowanych z innych systemów.

Jeżeli wyniki są podejrzanie niskie, sprawdź, czy dane nie zawierają zbędnych spacji lub niewidocznych znaków.

## LICZ.JEŻELI czy SZUKAJ.TEKST?

LICZ.JEŻELI jest świetne, gdy chcesz policzyć rekordy bez tworzenia kolumny pomocniczej. Gdy musisz wykonać bardziej złożoną analizę fragmentów tekstu w każdym wierszu, czasem czytelniejsze będzie użycie dodatkowej kolumny z funkcją SZUKAJ.TEKST i późniejsze podsumowanie wyniku.