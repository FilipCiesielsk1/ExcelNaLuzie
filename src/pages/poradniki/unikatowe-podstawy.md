---
layout: ../../layouts/ArticleLayout.astro
title: "UNIKATOWE w Excelu — lista bez duplikatów"
description: "Jak używać funkcji UNIKATOWE w polskim Excelu. Dynamiczna lista bez duplikatów, usuwanie pustych pozycji i sortowanie wyników."
slug: "unikatowe-podstawy"
category: "Formuły dynamiczne"
categorySlug: "formuly/dynamiczne"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> funkcja UNIKATOWE zwraca dynamiczną listę wartości bez powtarzających się pozycji.</div>

<div class="formula">=UNIKATOWE(A2:A100)</div>

Jeżeli w kolumnie A wielokrotnie występują te same nazwy klientów, wynik pokaże każdą nazwę tylko raz.

## Wynik aktualizuje się automatycznie

Nie musisz używać polecenia Usuń duplikaty. Funkcja nie zmienia danych źródłowych, tylko tworzy osobną listę, która aktualizuje się przy zmianie zakresu.

To ważna różnica: usuwanie duplikatów jest operacją jednorazową, a UNIKATOWE jest formułą.

## Jak pominąć puste komórki?

Najwygodniej połączyć UNIKATOWE z FILTRUJ:

<div class="formula">=UNIKATOWE(FILTRUJ(A2:A100;A2:A100<>""))</div>

Najpierw usuwane są puste pozycje, a potem pozostają tylko unikalne wartości.

## Posortowana lista bez duplikatów

<div class="formula">=SORTUJ(UNIKATOWE(FILTRUJ(A2:A100;A2:A100<>"")))</div>

Jedna formuła tworzy gotową listę, którą można wykorzystać w raporcie albo jako źródło dalszych obliczeń.

## Tylko wartości występujące dokładnie raz

UNIKATOWE ma opcjonalny trzeci argument. Ustawienie go na PRAWDA pozwala zwrócić tylko pozycje pojawiające się dokładnie jeden raz:

<div class="formula">=UNIKATOWE(A2:A100;;PRAWDA)</div>

To inne zadanie niż zwykłe usunięcie duplikatów.

## Przykład biznesowy

Jeżeli A2:A1000 zawiera klientów z rejestru transakcji, możesz stworzyć automatyczną listę klientów do raportu. Po dopisaniu kolejnego rekordu nowy klient pojawi się na liście bez ręcznej aktualizacji.

## Uważaj na spacje

Teksty, które wyglądają identycznie, mogą różnić się dodatkową spacją. Wtedy Excel może potraktować je jako różne wartości. Przy danych importowanych warto wcześniej zadbać o czyszczenie tekstu.

## Kiedy używać UNIKATOWE?

Gdy potrzebujesz dynamicznej listy kategorii, klientów, produktów, miast, kodów albo innych wartości. Funkcja jest szczególnie przydatna jako pierwszy etap budowania nowoczesnych raportów opartych na tablicach dynamicznych.