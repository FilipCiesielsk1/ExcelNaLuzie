---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zrobić tabelę przestawną w Excelu krok po kroku?"
description: "Jak zrobić tabelę przestawną Excel? Wiersze, kolumny, wartości i filtry na przykładzie sprzedaży. Darmowy generator raportu XLSX."
slug: "jak-zrobic-tabele-przestawna-w-excelu"
category: "Liczenie i sumowanie"
categorySlug: "formuly/liczenie"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "7 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Generator tabel przestawnych Excel"
    url: "/narzedzia/generator-tabel-przestawnych/"
    category: "Narzędzie"
---

<div class="answer"><strong>W skrócie:</strong> zaznacz tabelę danych, wybierz Wstaw → Tabela przestawna, przeciągnij Region do Wierszy, Kategoria do Kolumn, a Kwota do Wartości. Jeśli chcesz najpierw przetestować układ, zrób to w generatorze online.</div>

Tabela przestawna pozwala grupować setki lub tysiące rekordów bez tworzenia osobnej formuły dla każdego regionu. Możesz zmieniać sposób agregacji, filtrować dane oraz odświeżać wynik po rozbudowaniu źródła.

**[Przygotuj podgląd w generatorze tabel przestawnych →](/narzedzia/generator-tabel-przestawnych/)**

## Krok 1. Uporządkuj źródłową tabelę

Każda kolumna powinna mieć niepowtarzalny nagłówek, a każdy wiersz reprezentować jedną transakcję. Unikaj pustych rzędów, scalonych komórek i ręcznych sum w środku danych.

| Region | Kategoria | Kwota |
|---|---|---:|
| Północ | Meble | 1200 |
| Południe | Elektronika | 800 |
| Północ | Elektronika | 500 |
| Zachód | Meble | 300 |
| Południe | Meble | 200 |

Wartość wszystkich transakcji wynosi 3000. Dla Północy suma to 1700, dla Południa 1000, dla Zachodu 300. Dzięki temu możesz później sprawdzić wynik raportu.

## Krok 2. Wstaw tabelę przestawną

Kliknij wewnątrz zakresu i wybierz **Wstaw → Tabela przestawna → Z tabeli/zakresu**. Sprawdź, czy zaznaczony jest cały obszar z nagłówkami, a następnie wybierz nowy arkusz.

Wygodną praktyką jest zamiana zakresu na tabelę Excela skrótem **Ctrl+T**. Gdy dopiszesz kolejne transakcje, odśwież raport. Taka tabela ułatwia prawidłowe rozszerzanie danych źródłowych.

## Krok 3. Ustaw pola Wiersze, Kolumny i Wartości

W panelu pól przeciągnij Region do **Wiersze**, Kategoria do **Kolumny**, Kwota do **Wartości**. Upewnij się, że ustawienie pola wartości wskazuje Sumę, nie Licznik.

| Region | Elektronika | Meble | Ogółem |
|---|---:|---:|---:|
| Południe | 800 | 200 | 1000 |
| Północ | 500 | 1200 | 1700 |
| Zachód | 0 | 300 | 300 |
| **Ogółem** | **1300** | **1700** | **3000** |

Excel może pokazywać puste przecięcia zamiast zera. Nie oznacza to błędnej sumy.

## Krok 4. Dodaj filtr i drugi poziom wierszy

Jeśli w danych występuje Handlowiec, możesz przenieść to pole do **Filtrów**, aby pokazywać tylko jedną osobę. Możesz też umieścić je pod Region w obszarze Wiersze, otrzymując hierarchię region → handlowiec.

## Kontrola sumy zwykłą formułą

Gdy Region jest w A2:A6, a Kwota w C2:C6, sprawdź Północ:

<div class="formula">=SUMA.JEŻELI(A2:A6;"Północ";C2:C6)</div>

Wynik 1700 powinien zgadzać się z tabelą przestawną. Przy jednym zestawieniu zwykła funkcja może wystarczyć; przy częstej zmianie podziałów tabela przestawna jest wygodniejsza.

## Alternatywa: generator tabel przestawnych online

Otwórz **[generator tabel przestawnych](/narzedzia/generator-tabel-przestawnych/)**, wklej zakres albo wybierz plik XLSX, ustaw pola i kliknij Generuj podgląd. Narzędzie wspiera sumę, średnią, licznik, minimum i maksimum. Pobierzesz plik XLSX z arkuszami Podsumowanie, Dane i Instrukcja.

**Ważne:** pobrane Podsumowanie to raport statyczny, a nie natywna tabela przestawna. Aby utworzyć edytowalny obiekt, otwórz arkusz Dane i skorzystaj z instrukcji dodanej do skoroszytu.

## Najczęstsze problemy

Jeżeli Excel zamiast sumy pokazuje licznik, sprawdź, czy kwoty są liczbami, a nie tekstem. Jeżeli nowo dopisane wiersze nie pojawiają się w raporcie, sprawdź zakres źródła i użyj Odśwież. Jeśli w raporcie występują podobne, ale oddzielne nazwy kategorii, skontroluj spacje w danych.
