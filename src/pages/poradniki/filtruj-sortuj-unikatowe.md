---
layout: ../../layouts/ArticleLayout.astro
title: "FILTRUJ + SORTUJ + UNIKATOWE w jednej formule"
description: "Jak połączyć FILTRUJ, SORTUJ i UNIKATOWE w Excelu, aby stworzyć dynamiczną, posortowaną listę bez duplikatów."
slug: "filtruj-sortuj-unikatowe"
category: "Formuły dynamiczne"
categorySlug: "formuly/dynamiczne"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> funkcje dynamiczne możesz zagnieżdżać, aby jednym wzorem filtrować dane, usuwać duplikaty i sortować wynik.</div>

<div class="formula">=SORTUJ(UNIKATOWE(FILTRUJ(A2:A100;B2:B100="Aktywne";"")))</div>

Formuła zwraca posortowaną listę unikalnych wartości z kolumny A tylko dla rekordów, w których kolumna B ma status Aktywne.

## Czytaj formułę od środka

Najpierw działa FILTRUJ. Z całej listy pozostają tylko rekordy spełniające warunek.

Następnie UNIKATOWE usuwa powtarzające się wartości. Na końcu SORTUJ porządkuje gotową listę.

Takie czytanie od środka bardzo ułatwia analizę zagnieżdżonych funkcji.

## Kryterium z komórki

<div class="formula">=SORTUJ(UNIKATOWE(FILTRUJ(A2:A100;B2:B100=F2;"")))</div>

F2 może zawierać status, region albo inną kategorię. Zmiana kryterium od razu przebudowuje listę.

## Pomijanie pustych wartości

Jeżeli dane mogą mieć puste rekordy, możesz dodać drugi warunek:

<div class="formula">=SORTUJ(UNIKATOWE(FILTRUJ(A2:A100;(B2:B100=F2)*(A2:A100<>"");"")))</div>

Wynik zawiera tylko niepuste wartości należące do wybranej kategorii.

## Dlaczego taka konstrukcja jest użyteczna?

To bardzo dobry sposób na przygotowanie dynamicznej listy pomocniczej do raportu. Przykładowo możesz wygenerować listę aktywnych klientów, produktów danego działu albo handlowców z wybranego regionu.

## Testuj etapami

Jeżeli finalna formuła zwraca zły wynik, nie próbuj analizować wszystkiego naraz. Najpierw uruchom samo FILTRUJ. Potem owiń wynik w UNIKATOWE, a dopiero na końcu dodaj SORTUJ.

## Kolejność funkcji ma znaczenie

Najczęściej opłaca się najpierw ograniczyć liczbę rekordów za pomocą FILTRUJ, a dopiero potem usuwać duplikaty i sortować. Dzięki temu kolejne etapy pracują na mniejszej tablicy.

## Kiedy używać takiej formuły?

Gdy raport potrzebuje automatycznie aktualizowanej listy zależnej od danych i parametrów użytkownika. Jedna formuła może zastąpić ręczne filtrowanie, kopiowanie wyników, usuwanie duplikatów i ponowne sortowanie po każdej zmianie źródła.