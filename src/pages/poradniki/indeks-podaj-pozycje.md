---
layout: ../../layouts/ArticleLayout.astro
title: "INDEKS + PODAJ.POZYCJĘ w Excelu — jak wyszukiwać dane?"
description: "Jak połączyć INDEKS i PODAJ.POZYCJĘ do dokładnego wyszukiwania danych. Gotowa formuła, przykład i wyszukiwanie w lewo."
slug: "indeks-podaj-pozycje"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Starsze wersje"
verified: false
related:
  - title: "X.WYSZUKAJ w lewo"
    url: "/poradniki/xwyszukaj-w-lewo/"
    category: "Wyszukiwanie"
  - title: "Jak znaleźć wartość w tabeli?"
    url: "/poradniki/jak-znalezc-wartosc-w-tabeli/"
    category: "Wyszukiwanie"
  - title: "Wyszukiwanie danych w Excelu"
    url: "/formuly/wyszukiwanie/"
    category: "Hub"
---

<div class="answer"><strong>INDEKS + PODAJ.POZYCJĘ</strong> pozwala znaleźć pozycję szukanej wartości, a następnie zwrócić wynik z dowolnego zakresu.</div>

<div class="formula">=INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0))</div>

Formuła szuka wartości z F2 w kolumnie A i zwraca odpowiadający wynik z kolumny C.

## Jak działa PODAJ.POZYCJĘ?

<div class="formula">=PODAJ.POZYCJĘ(F2;A2:A100;0)</div>

Ta część zwraca numer pozycji, na której znajduje się szukana wartość. Argument 0 oznacza dokładne dopasowanie.

## Co robi INDEKS?

INDEKS pobiera wartość z tej samej pozycji w zakresie wynikowym.

Dlatego oba zakresy powinny obejmować odpowiadające sobie wiersze.

## Wyszukiwanie w lewo

<div class="formula">=INDEKS(A2:A100;PODAJ.POZYCJĘ(F2;C2:C100;0))</div>

Tutaj szukasz wartości w kolumnie C, a zwracasz wynik z kolumny A.

## INDEKS + PODAJ.POZYCJĘ czy X.WYSZUKAJ?

W nowych wersjach Excela X.WYSZUKAJ jest zwykle prostsze.

INDEKS + PODAJ.POZYCJĘ nadal warto znać, szczególnie gdy pracujesz ze starszymi wersjami Excela albo utrzymujesz istniejące skoroszyty.

## Przykład z tabelą produktów

Załóżmy, że w A2:A100 masz kody produktów, a w C2:C100 ceny. Kod wpisujesz w F2.

<div class="formula">=INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0))</div>

PODAJ.POZYCJĘ zwraca numer wiersza wewnątrz zakresu A2:A100, a INDEKS pobiera element z tej samej pozycji w C2:C100.

## Dlaczego końcowe 0 jest ważne?

W formule:

<div class="formula">=PODAJ.POZYCJĘ(F2;A2:A100;0)</div>

argument 0 oznacza dopasowanie dokładne. Przy kodach, identyfikatorach i nazwach produktów zwykle właśnie tego oczekujesz.

Pominięcie sposobu dopasowania może prowadzić do trudnych do zauważenia błędów, szczególnie gdy dane nie są posortowane.

## Zakresy muszą do siebie pasować

Jeżeli zakres wyszukiwania ma 99 wierszy, zakres zwracany powinien obejmować odpowiadające mu 99 pozycji.

Najbezpieczniej budować oba zakresy od tego samego pierwszego do tego samego ostatniego wiersza.

## Obsługa braku wyniku

W starszym Excelu możesz opakować formułę w JEŻELI.BŁĄD:

<div class="formula">=JEŻELI.BŁĄD(INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0));"Brak wyniku")</div>

Dzięki temu użytkownik zobaczy czytelny komunikat zamiast kodu błędu.

## Kiedy nadal warto używać INDEKS + PODAJ.POZYCJĘ?

To dobre rozwiązanie w plikach, które muszą działać w starszych wersjach Excela. Jest również elastyczne, bo zakres wyniku może znajdować się po lewej lub prawej stronie zakresu wyszukiwania.

W nowszym Excelu X.WYSZUKAJ jest zwykle krótsze, ale znajomość INDEKS + PODAJ.POZYCJĘ nadal przydaje się przy utrzymaniu istniejących skoroszytów.
