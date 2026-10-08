---
layout: ../../layouts/ArticleLayout.astro
title: "Lista zależna w Excelu — krok po kroku"
description: "Lista zależna w Excelu: po wyborze kategorii pokazuj właściwe produkty. Przykład z ADR.POŚR, zakresami nazwanymi i plikiem XLSX."
slug: "lista-zalezna-excel"
category: "Dane i listy"
categorySlug: "formuly/dane"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "8 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Zwykła lista rozwijana w Excelu"
    url: "/poradniki/lista-rozwijana-excel/"
    category: "Poradnik"
  - title: "JEŻELI — kilka warunków"
    url: "/poradniki/jezeli-kilka-kryteriow/"
    category: "Poradnik"
---

<div class="answer"><strong>Najkrócej:</strong> utwórz pierwszą listę z kategoriami, dla każdej kategorii przygotuj nazwany zakres produktów, a źródło drugiej listy ustaw na <strong>=ADR.POŚR($B2)</strong>. Nazwa wybranej kategorii musi odpowiadać nazwie zakresu.</div>

<div class="formula">=ADR.POŚR($B2)</div>

To wyrażenie należy wpisać w **Źródło** drugiej listy w oknie Sprawdzanie poprawności danych, a nie do komórki z produktem. Przykład działa również w Excelu 2016/2019.

## Przykład: kategoria i produkt

W B2 wybierasz kategorię, a w C2 produkt dopasowany do tej kategorii:

| B — kategoria | Dozwolone produkty w C |
|---|---|
| Biuro | Długopis, Papier, Segregator |
| Magazyn | Karton, Taśma, Folia |

Po wyborze **Biuro** druga lista powinna udostępniać tylko artykuły biurowe. Po wyborze **Magazyn** lista ma pokazywać materiały pakowe.

## Metoda dla dowolnej liczby kategorii: nazwy zakresów

1. W oddzielnym arkuszu wpisz produkty biurowe w C2:C4 i produkty magazynowe w D2:D4.
2. Zaznacz C2:C4, otwórz **Formuły → Definiuj nazwę** i utwórz nazwę **Biuro**.
3. Dla zakresu D2:D4 utwórz nazwę **Magazyn**.
4. Do B2:B100 dodaj pierwszą listę z wartościami **Biuro** i **Magazyn**.
5. Zaznacz C2:C100, przejdź do **Dane → Sprawdzanie poprawności danych → Lista**.
6. W polu **Źródło** wpisz formułę z początku poradnika. Zatwierdź.

Znak dolara w $B2 blokuje kolumnę B, ale nie numer wiersza. Dzięki temu w C3 Excel sprawdzi wybór z B3, a nie zawsze z B2.

## Gdy nazwa kategorii zawiera spacje

Nazwane zakresy nie mogą zawierać zwykłych spacji. Zamiast „Materiały biurowe” utwórz nazwę **Materiały_biurowe** i skorzystaj z:

<div class="formula">=ADR.POŚR(PODSTAW($B2;" ";"_"))</div>

Pamiętaj również o innych niedozwolonych znakach w nazwach zakresów. Nawet poprawna formuła nie naprawi literówki pomiędzy nazwą kategorii i nazwą zakresu.

## Gotowy przykład z dwiema kategoriami

**[Pobierz listy rozwijane XLSX](/downloads/przyklady/dane-listy-rozwijane.xlsx)**. Plik ma listę kategorii w B i zależną listę produktów w C. Aby przykład był możliwie prosty, dla tych dwóch kategorii źródło drugiej listy wybierane jest formułą z ADR.POŚR oraz JEŻELI, bez konieczności ręcznego tworzenia nazwanych zakresów.

<div class="formula">=ADR.POŚR(JEŻELI($B5="Biuro";"'Słowniki'!$C$5:$C$7";"'Słowniki'!$D$5:$D$7"))</div>

Ten skrócony wariant ma zastosowanie tylko w przykładzie z **dwoma znanymi kategoriami**. W większym arkuszu wygodniejsze są nazwy zakresów.

## Ważne ograniczenie Excela

Gdy wybierzesz najpierw **Biuro → Papier**, a potem zmienisz kategorię na **Magazyn**, Excel **nie wyczyści automatycznie** już wpisanego produktu Papier. Walidacja sprawdza nowe wpisy, ale nie resetuje wcześniejszych wartości. Dlatego przy zmianie kategorii trzeba ponownie wybrać produkt albo zastosować osobną kontrolę spójności.

Jeżeli pierwsza lista jest pusta, druga może nie pokazać żadnych możliwości wyboru lub zgłosić błąd źródła. Najpierw uzupełnij kategorię. Do zwykłego wyboru jednego statusu bez zależności wystarczy [prosta lista rozwijana](/poradniki/lista-rozwijana-excel/).
