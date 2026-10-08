---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zrobić listę rozwijaną w Excelu?"
description: "Lista rozwijana w Excelu krok po kroku: sprawdzanie poprawności danych, zakres źródłowy, edycja pozycji i gotowy plik XLSX do ćwiczeń."
slug: "lista-rozwijana-excel"
category: "Dane i listy"
categorySlug: "formuly/dane"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "6 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Lista zależna w Excelu"
    url: "/poradniki/lista-zalezna-excel/"
    category: "Poradnik"
  - title: "JEŻELI i warunki tekstowe"
    url: "/poradniki/jezeli-tekst/"
    category: "Poradnik"
---

<div class="answer"><strong>Najkrócej:</strong> wpisz dopuszczalne wartości w osobnej kolumnie, zaznacz komórkę docelową, otwórz **Dane → Sprawdzanie poprawności danych**, ustaw **Dozwolone: Lista** i wskaż źródło wartości.</div>

Przykład: w F2:F4 wpisz kolejno **Nowe**, **W toku**, **Gotowe**, a listę dodaj do B2:B100. Osoba wprowadzająca dane będzie mogła wybrać status z dostępnych wartości.

<div class="formula">=ILE.NIEPUSTYCH(F2:F4)</div>

Ta pomocnicza formuła powinna zwrócić **3** — liczbę wpisanych pozycji. Sama lista nie wymaga funkcji JEŻELI ani programowania VBA.

## Jak utworzyć listę krok po kroku?

1. Wprowadź wartości słownikowe w F2:F4, bez pustych wierszy.
2. Zaznacz B2:B100 w arkuszu, w którym użytkownicy mają wybierać status.
3. Otwórz kartę **Dane → Sprawdzanie poprawności danych**.
4. Na karcie **Ustawienia** wybierz **Lista** w polu Dozwolone.
5. W polu **Źródło** wskaż zakres F2:F4; jeżeli jest w innym arkuszu, wygodniej nadaj mu nazwę.
6. Włącz listę rozwijaną w komórce i skonfiguruj komunikat błędu, jeżeli chcesz blokować dowolne wpisy.

## Przykład w tabeli zadań

| Zadanie | Status wybrany z listy |
|---|---|
| Raport miesięczny | W toku |
| Import danych | Gotowe |
| Audyt arkusza | Nowe |

Zamiast wpisywać status ręcznie, użytkownik wybiera go z listy. Unikasz wtedy przypadkowych wariantów typu „W-toku”, „wtoku” albo „Zrobione”, które utrudniają liczenie i filtrowanie.

## Jak utrzymywać słownik bez ciągłego poprawiania zakresu?

Jeżeli lista będzie rosła, przekształć słownik w tabelę Excela przyciskiem **Ctrl+T**. Przy dodawaniu nowych pozycji tabela rozszerza się automatycznie; ustaw odpowiednie źródło walidacji korzystające z tabeli lub zakresu nazwanego. Dla stałej, krótkiej listy wystarczy zwykły zakres.

Przy źródle z innego arkusza można nadać zakresowi nazwę **Statusy** w **Formuły → Menedżer nazw**, a następnie w polu Źródło wpisać:

<div class="formula">=Statusy</div>

To odwołanie do nazwanego zakresu, wpisywane w ustawieniach listy, a nie zwykła formuła obliczeniowa.

## Co zrobić, gdy lista nie działa?

Sprawdź, czy arkusz nie jest chroniony, czy w polu Dozwolone ustawiono **Lista** oraz czy odwołanie źródłowe nie obejmuje przypadkiem nagłówka. Jeżeli można wpisywać dowolne wartości, sprawdź konfigurację **Alert o błędzie**. Pamiętaj, że zwykłe listy nie zmieniają się automatycznie w zależności od wyboru w innej kolumnie — do tego służy [lista zależna](/poradniki/lista-zalezna-excel/).

**[Pobierz darmowy skoroszyt z listami rozwijanymi (XLSX)](/downloads/przyklady/dane-listy-rozwijane.xlsx)**. Przykład zawiera gotowe pola wyboru i źródłowe słowniki.
