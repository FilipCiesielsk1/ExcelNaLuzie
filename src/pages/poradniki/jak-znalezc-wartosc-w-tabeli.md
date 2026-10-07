---
layout: ../../layouts/ArticleLayout.astro
title: "Jak znaleźć wartość w tabeli w Excelu?"
description: "Jak znaleźć dane w tabeli Excela i zwrócić odpowiadającą wartość. Porównanie X.WYSZUKAJ, FILTRUJ, WYSZUKAJ.PIONOWO i INDEKS."
slug: "jak-znalezc-wartosc-w-tabeli"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
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
  - title: "X.WYSZUKAJ — prosty przykład"
    url: "/poradniki/xwyszukaj-podstawy/"
    category: "Wyszukiwanie"
  - title: "INDEKS + PODAJ.POZYCJĘ"
    url: "/poradniki/indeks-podaj-pozycje/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>W nowych wersjach Excela najczęściej zacznij od X.WYSZUKAJ.</strong> Jest czytelne, działa w obu kierunkach i nie wymaga podawania numeru kolumny.</div>

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

To jednak nie jest jedyna metoda. Właściwa funkcja zależy od tego, jakiego wyniku potrzebujesz.

## Którą metodę wybrać?

| Potrzeba | Najczęściej wybierz |
|---|---|
| Jeden dokładny wynik | X.WYSZUKAJ |
| Wszystkie pasujące wiersze | FILTRUJ |
| Starszy Excel | INDEKS + PODAJ.POZYCJĘ |
| Istniejący prosty arkusz legacy | WYSZUKAJ.PIONOWO |
| Kilka warunków | X.WYSZUKAJ lub FILTRUJ |

## Jeden wynik

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

## Wszystkie pasujące rekordy

<div class="formula">=FILTRUJ(A2:C100;A2:A100=F2;"Brak wyników")</div>

## Starsza wersja Excela

<div class="formula">=INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0))</div>

## Nie zaczynaj od nazwy funkcji

Najpierw ustal, czy potrzebujesz jednego wyniku, wielu wyników, kilku warunków albo wyszukiwania w lewo. Dopiero potem wybierz funkcję.

To zwykle prowadzi do prostszej formuły i łatwiejszego w utrzymaniu arkusza.

## Najpierw określ, ilu wyników potrzebujesz

To najważniejsza decyzja.

Jeżeli dla szukanej wartości ma istnieć tylko jeden wynik, zacznij od X.WYSZUKAJ:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

Jeżeli jeden klucz może pasować do wielu wierszy i chcesz zobaczyć wszystkie, użyj FILTRUJ:

<div class="formula">=FILTRUJ(A2:C100;A2:A100=F2;"Brak wyników")</div>

## Co jeśli w tabeli są duplikaty?

X.WYSZUKAJ zwróci pojedyncze dopasowanie. Dlatego przed użyciem go jako „jednego źródła prawdy” sprawdź, czy klucz rzeczywiście jest unikalny.

Przy numerach zamówień lub ID klienta zwykle powinien być. Przy nazwie miasta, kategorii albo produktu duplikaty są normalne — wtedy FILTRUJ często lepiej odpowiada intencji.

## Wyszukiwanie w lewo

Jeżeli kolumna wyniku znajduje się przed kolumną wyszukiwania, X.WYSZUKAJ nie wymaga żadnych sztuczek:

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

W starszym Excelu podobny efekt daje INDEKS + PODAJ.POZYCJĘ.

## Tekst i liczba mogą wyglądać tak samo

Kod 1001 zapisany jako liczba i tekst „1001” może nie zostać potraktowany jako identyczna wartość.

Jeżeli formuła „powinna działać”, ale nie znajduje rekordu, sprawdź typ danych, zbędne spacje oraz sposób importu danych.

## Prosta reguła wyboru

Jeden wynik w nowym Excelu — X.WYSZUKAJ. Wiele wyników — FILTRUJ. Starszy Excel — INDEKS + PODAJ.POZYCJĘ albo istniejące WYSZUKAJ.PIONOWO.

Dopiero później warto optymalizować formułę pod bardziej nietypowe przypadki.
