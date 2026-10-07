---
layout: ../../layouts/ArticleLayout.astro
title: "Jak policzyć niepuste komórki w Excelu?"
description: "Jak policzyć niepuste komórki w Excelu za pomocą ILE.NIEPUSTYCH oraz jak odróżnić dane, puste komórki i formuły zwracające pusty tekst."
slug: "policz-niepuste-komorki"
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

<div class="answer"><strong>Najprościej:</strong> użyj funkcji ILE.NIEPUSTYCH, aby policzyć komórki zawierające dane.</div>

<div class="formula">=ILE.NIEPUSTYCH(A2:A100)</div>

Funkcja zwraca liczbę komórek, które nie są całkowicie puste.

## Co liczy ILE.NIEPUSTYCH?

Liczone są liczby, tekst, daty, wartości logiczne, błędy oraz inne wartości znajdujące się w komórkach.

To dobre rozwiązanie do sprawdzania liczby wypełnionych pozycji w formularzu, listy klientów albo liczby rekordów w prostej kolumnie.

## Policz tylko liczby

Jeżeli interesują Cię wyłącznie komórki zawierające liczby:

<div class="formula">=ILE.LICZB(A2:A100)</div>

Tekst i inne typy wartości nie zostaną uwzględnione.

## Policz puste komórki

Do odwrotnego zadania służy:

<div class="formula">=LICZ.PUSTE(A2:A100)</div>

To przydatne przy kontroli kompletności danych.

## Ważne: formuła zwracająca pusty tekst

Komórka może wyglądać na pustą, ale zawierać formułę zwracającą pusty ciąg "".

ILE.NIEPUSTYCH traktuje taką komórkę jako zawierającą wartość, ponieważ sama formuła nadal istnieje.

## Gdy chcesz policzyć widocznie niepuste wyniki

Jeżeli kolumna zawiera formuły zwracające "", możesz zamiast prostego ILE.NIEPUSTYCH zastosować kryterium dopasowane do rodzaju danych albo pomocniczą kolumnę kontrolną.

Nie istnieje jedna uniwersalna definicja „pustej” komórki dla każdego modelu danych.

## Przykład kontroli formularza

Jeżeli użytkownik ma uzupełnić dziesięć pól w A2:A11:

<div class="formula">=ILE.NIEPUSTYCH(A2:A11)</div>

Wynik 10 oznacza, że wszystkie komórki zawierają jakąś wartość.

## Którą funkcję wybrać?

ILE.NIEPUSTYCH — gdy liczysz dowolne dane. ILE.LICZB — gdy interesują Cię tylko liczby. LICZ.PUSTE — gdy chcesz policzyć brakujące komórki.

To prosty zestaw funkcji, który często wystarcza do kontroli jakości danych bez budowania bardziej rozbudowanych warunków.

## Przykład: kontrola kompletności kolumny

Jeżeli w zakresie A2:A100 każdy aktywny rekord powinien mieć identyfikator, wynik ILE.NIEPUSTYCH możesz porównać z oczekiwaną liczbą rekordów. To szybki sposób na wychwycenie braków przed importem lub wysłaniem raportu.

Pamiętaj jednak, że formuła zwracająca pusty tekst nadal jest przez ILE.NIEPUSTYCH liczona jako niepusta komórka.