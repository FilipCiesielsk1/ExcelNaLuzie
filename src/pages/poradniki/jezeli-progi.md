---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI i przedziały liczbowe w Excelu"
description: "Jak przypisywać kategorie i wyniki do przedziałów liczbowych za pomocą JEŻELI. Progi, rabaty, oceny i kolejność warunków."
slug: "jezeli-progi"
category: "Warunki i logika"
categorySlug: "formuly/logika"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> przy progach liczbowych sprawdzaj warunki w ustalonej kolejności, zwykle od najwyższego progu do najniższego.</div>

<div class="formula">=JEŻELI(B2>=1000;"Wysoki";JEŻELI(B2>=500;"Średni";"Niski"))</div>

Wartość 1200 otrzyma kategorię Wysoki, 700 kategorię Średni, a 300 kategorię Niski.

## Dlaczego kolejność jest kluczowa?

Gdyby pierwszy warunek brzmiał B2>=500, wartość 1200 zostałaby od razu zakwalifikowana jako Średni. Excel nie sprawdza kolejnych gałęzi po znalezieniu pierwszego prawdziwego warunku.

Dlatego zastanów się, który warunek jest najbardziej szczegółowy.

## Przykład z rabatami

Załóżmy, że kwota zamówienia jest w B2:

<div class="formula">=JEŻELI(B2>=5000;15%;JEŻELI(B2>=2000;10%;JEŻELI(B2>=500;5%;0)))</div>

Ta formuła zwraca stawkę rabatu zależną od progu.

## Przedział zamknięty z dwóch stron

Czasem potrzebujesz sprawdzić konkretny zakres, np. od 18 do 65.

<div class="formula">=JEŻELI(ORAZ(B2>=18;B2<=65);"W zakresie";"Poza zakresem")</div>

ORAZ pozwala kontrolować dolną i górną granicę jednocześnie.

## Testuj wartości graniczne

Dla każdego progu sprawdź trzy przypadki: wartość tuż poniżej, dokładnie na progu i tuż powyżej.

Jeżeli próg wynosi 500, przetestuj 499, 500 i 501. W ten sposób szybko wychwycisz pomylenie > z >=.

## Kiedy nie używać zagnieżdżonego JEŻELI?

Jeżeli progów jest dużo albo często się zmieniają, długa formuła staje się trudna w utrzymaniu. Lepszym rozwiązaniem może być tabela z progami i funkcja wyszukująca odpowiednią kategorię.

To szczególnie ważne w arkuszach finansowych, gdzie stawki, limity lub poziomy premiowe są regularnie aktualizowane.

## Progi a czytelność arkusza

Dobra formuła nie tylko zwraca poprawny wynik. Powinna też pozwalać innym osobom zrozumieć regułę. Jeśli trzy miesiące później sam musisz długo analizować kolejne nawiasy, to znak, że logikę warto przenieść do tabeli pomocniczej.

JEŻELI jest świetne do kilku progów. Przy większej liczbie poziomów traktuj je jako rozwiązanie przejściowe, a nie docelową architekturę arkusza.