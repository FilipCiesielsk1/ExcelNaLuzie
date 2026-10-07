---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI i LUB w Excelu — gdy wystarczy jeden warunek"
description: "Jak połączyć JEŻELI z LUB w Excelu. Formuła dla kilku alternatywnych warunków, przykłady tekstowe i liczbowe."
slug: "jezeli-lub"
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

<div class="answer"><strong>Najprościej:</strong> użyj LUB wewnątrz JEŻELI, gdy wystarczy spełnienie co najmniej jednego z kilku warunków.</div>

<div class="formula">=JEŻELI(LUB(B2="Pilne";C2="VIP");"Priorytet";"Standard")</div>

Jeżeli B2 zawiera Pilne albo C2 zawiera VIP, wynik będzie równy Priorytet.

## Jak działa LUB?

Funkcja LUB sprawdza podane testy logiczne i zwraca PRAWDA, gdy przynajmniej jeden z nich jest prawdziwy.

<div class="formula">=LUB(B2="Pilne";C2="VIP")</div>

Dopiero JEŻELI decyduje, co ma zostać pokazane dla PRAWDA i FAŁSZ.

## Przykład z wartościami liczbowymi

Załóżmy, że rekord wymaga sprawdzenia, gdy kwota jest bardzo wysoka albo marża bardzo niska.

<div class="formula">=JEŻELI(LUB(B2>10000;C2<5%);"Sprawdź";"OK")</div>

Nie ma znaczenia, który z warunków został spełniony. Jeżeli prawdziwy jest choć jeden, otrzymasz Sprawdź.

## Kilka możliwych statusów

Możesz podać więcej argumentów funkcji LUB.

<div class="formula">=JEŻELI(LUB(A2="Anulowane";A2="Wstrzymane";A2="Odrzucone");"Nieaktywne";"Aktywne")</div>

To wygodny sposób na pogrupowanie kilku statusów w jedną kategorię bez tworzenia osobnego JEŻELI dla każdej wartości.

## LUB a ORAZ

Najprostszy test językowy brzmi: czy w zdaniu użyłbyś słowa „albo”, czy „i”?

„Klient jest VIP albo zamówienie jest pilne” oznacza LUB. „Klient jest VIP i zamówienie jest opłacone” oznacza ORAZ.

## Uważaj na zbyt szerokie warunki

Przy wielu alternatywach łatwo stworzyć formułę, która prawie zawsze zwraca PRAWDA. Dlatego testuj przykłady, w których żaden warunek nie jest spełniony, jeden jest spełniony oraz kilka jest spełnionych naraz.

## Kiedy LUB upraszcza arkusz?

Gdy ten sam rezultat ma obowiązywać dla kilku różnych sytuacji. Zamiast powtarzać identyczny wynik w kilku zagnieżdżonych JEŻELI, zbierasz wszystkie alternatywy w jednym miejscu. Formuła jest wtedy krótsza, a intencja znacznie łatwiejsza do odczytania po kilku miesiącach.