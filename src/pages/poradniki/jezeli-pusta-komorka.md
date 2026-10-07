---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI i pusta komórka w Excelu"
description: "Jak sprawdzić pustą komórkę w Excelu za pomocą JEŻELI. Różnica między pustą komórką, pustym tekstem i wartością zero."
slug: "jezeli-pusta-komorka"
category: "Warunki i logika"
categorySlug: "formuly/logika"
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

<div class="answer"><strong>Najprościej:</strong> jeśli chcesz sprawdzić, czy komórka wygląda na pustą, porównaj ją z pustym tekstem.</div>

<div class="formula">=JEŻELI(A2="";"Brak danych";"OK")</div>

Gdy A2 jest puste albo formuła w A2 zwraca pusty tekst, wynik będzie równy Brak danych.

## Pusta komórka a pusty tekst

To ważne rozróżnienie. Komórka może być naprawdę pusta albo może zawierać formułę, która zwraca "". Na ekranie oba przypadki wyglądają podobnie, ale nie każda funkcja traktuje je identycznie.

Porównanie:

<div class="formula">=A2=""</div>

jest praktyczne wtedy, gdy interesuje Cię to, czy użytkownik widzi brak wartości.

## Funkcja CZY.PUSTA

Możesz też użyć:

<div class="formula">=JEŻELI(CZY.PUSTA(A2);"Brak danych";"OK")</div>

CZY.PUSTA sprawdza, czy komórka rzeczywiście nie zawiera żadnej wartości. Jeśli w A2 znajduje się formuła zwracająca pusty tekst, CZY.PUSTA zwróci FAŁSZ.

## Przykład formularza

Załóżmy, że A2 powinno zawierać numer zlecenia. Dopóki numer nie zostanie wpisany, chcesz pozostawić wynik pusty.

<div class="formula">=JEŻELI(A2="";"";B2*C2)</div>

Dzięki temu arkusz nie pokazuje zera ani przypadkowego wyniku przed uzupełnieniem danych wejściowych.

## Czy zero jest puste?

Nie. Wartość 0 jest liczbą. Formuła A2="" nie powinna być używana jako sposób na wykrywanie zera.

Jeżeli zero ma być traktowane jak brak danych, zapisz to jawnie:

<div class="formula">=JEŻELI(LUB(A2="";A2=0);"Brak danych";"OK")</div>

## Spacje mogą udawać dane

Komórka zawierająca jedną spację nie jest pusta. To częsty problem po imporcie danych albo ręcznym czyszczeniu arkusza.

Jeżeli dane są niepewne, warto najpierw je oczyścić albo zastosować dodatkowe sprawdzenie długości tekstu po usunięciu zbędnych spacji.

## Którą metodę wybrać?

Do typowych formularzy i raportów najczęściej wystarcza A2="". Gdy musisz odróżnić fizycznie pustą komórkę od wyniku formuły zwracającej pusty tekst, użyj CZY.PUSTA.

Najważniejsze jest ustalenie, co w Twoim konkretnym arkuszu znaczy „brak danych”, bo technicznie może oznaczać kilka różnych sytuacji.