---
layout: ../../layouts/ArticleLayout.astro
title: "Jak usunąć duplikaty w Excelu?"
description: "Usuń powtarzające się wiersze w Excelu bez pomyłek. Krok po kroku: Dane → Usuń duplikaty, wybór kolumn i bezpieczna kopia danych."
slug: "jak-usunac-duplikaty-excel"
category: "Dane i listy"
categorySlug: "formuly/dane"
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
  - title: "Jak znaleźć i oznaczyć duplikaty?"
    url: "/poradniki/jak-znalezc-duplikaty-excel/"
    category: "Poradnik"
  - title: "UNIKATOWE — lista bez powtórzeń"
    url: "/poradniki/unikatowe-podstawy/"
    category: "Poradnik"
---

<div class="answer"><strong>Najkrócej:</strong> zrób kopię danych, zaznacz tabelę, wybierz **Dane → Usuń duplikaty**, wskaż kolumny identyfikujące powtórzenie i potwierdź operację. Excel zachowa pierwszy napotkany rekord dla każdej kombinacji wartości.</div>

Nie zaznaczaj jednej kolumny w oderwaniu od pozostałych pól rekordu. Jeżeli usuniesz tylko komórki w jednej kolumnie, możesz stracić zgodność danych pomiędzy nazwą, datą i kwotą.

<div class="formula">=LICZ.JEŻELI($A$2:A2;A2)>1</div>

To bezpieczny test pomocniczy: zwraca PRAWDA dla drugiego i następnych wystąpień identyfikatora w A2:A100. Możesz nim **najpierw przejrzeć powtórzenia**, a dopiero potem je usunąć.

## Przykład: lista klientów z powtórzonym ID

| ID klienta | Miasto | Kwota |
|---|---|---|
| K101 | Toruń | 120 |
| K102 | Poznań | 90 |
| K101 | Toruń | 120 |
| K103 | Gdańsk | 200 |

Jeżeli duplikat definiujesz po **ID klienta**, Excel pozostawi pierwszy wiersz z K101 i usunie drugi. Jeżeli zaznaczysz wszystkie trzy kolumny, znikną tylko wiersze identyczne we wszystkich tych polach.

**Ważne:** gdy drugi rekord ma to samo ID, lecz inną kwotę, Excel przy wyborze samej kolumny ID i tak usunie go. Przed operacją ustal regułę biznesową: może to być kolejna transakcja, a nie błędny duplikat.

## Instrukcja krok po kroku

1. Zduplikuj arkusz: prawy przycisk na karcie → **Przenieś lub kopiuj → Utwórz kopię**.
2. Zaznacz całą tabelę wraz z nagłówkami. Najłatwiej użyć Ctrl+T, jeśli dane mają regularny układ.
3. Otwórz kartę **Dane** i kliknij **Usuń duplikaty**.
4. Zaznacz **Moje dane mają nagłówki**, jeśli pierwszy wiersz to nazwy kolumn.
5. Wybierz kolumny, po których Excel ma rozpoznawać duplikaty. Zatwierdź i sprawdź liczbę usuniętych pozycji.

## Chcesz zachować wszystkie rekordy, a tylko otrzymać listę bez powtórzeń?

W Excelu Microsoft 365 lub Excelu 2021/2024 możesz skorzystać z formuły tworzącej osobną listę:

<div class="formula">=UNIKATOWE(A2:A100)</div>

Formuła nie zmienia źródłowego zbioru. W Excelu 2016/2019 zamiast niej użyj zaawansowanego filtrowania z opcją **Tylko unikatowe rekordy** lub skopiuj dane i zastosuj Usuń duplikaty na kopii.

## Pułapki: spacje i duplikaty po wielu kolumnach

Jeżeli w źródle występują spacje na początku lub końcu kodów, wyniki mogą być nieprzewidywalne. Wcześniej przeczytaj [jak usunąć zbędne spacje](/poradniki/jak-usunac-zbedne-spacje-excel/). Jeśli kluczem jest para **ID + miesiąc**, zaznacz właśnie te dwie kolumny, a nie samą kolumnę ID.

W żadnym wypadku nie stosuj usuwania bezpośrednio do jedynej kopii danych księgowych czy rejestrów zamówień. Funkcja usuwa wiersze i nie pozwala później odtworzyć różnic między nimi, jeśli nie zachowasz kopii.

**[Przećwicz usuwanie duplikatów na darmowym XLSX](/downloads/przyklady/dane-duplikaty-czyszczenie.xlsx)**. Plik zawiera przykładowe ID i osobny arkusz do czyszczenia danych.
