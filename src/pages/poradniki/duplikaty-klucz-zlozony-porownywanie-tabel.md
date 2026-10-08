---
layout: ../../layouts/ArticleLayout.astro
title: "Porównanie tabel Excel po dwóch kolumnach i duplikaty"
description: "Jak porównać dwie tabele Excel według numeru dokumentu i pozycji? Klucz złożony, wykrywanie duplikatów i ręczne mapowanie kolumn."
slug: "duplikaty-klucz-zlozony-porownywanie-tabel"
category: "Wyszukiwanie danych"
categorySlug: "formuly/wyszukiwanie"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "7 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Porównywarka tabel Excel"
    url: "/narzedzia/porownywarka-tabel/"
    category: "Narzędzie"
---

<div class="answer"><strong>Gdy jedno ID nie wystarcza:</strong> wybierz klucz złożony, np. Numer zamówienia + Pozycja. Sam numer dokumentu może się legalnie powtarzać; duplikatem jest dopiero powtórzenie całej kombinacji klucza.</div>

Typowym problemem w eksportach sprzedaży jest to, że jeden dokument występuje w kilku wierszach — po jednym na produkt. Jeśli porównasz takie pliki tylko według numeru dokumentu, możesz sparować nieodpowiednie pozycje i uzyskać fałszywe różnice.

**[Porównaj tabele po kilku kolumnach →](/narzedzia/porownywarka-tabel/)**

## Przykład: dwie wersje pozycji zamówień

**Tabela A**

| Zamówienie | Pozycja | Produkt | Ilość |
|---|---:|---|---:|
| Z100 | 1 | Mysz | 2 |
| Z100 | 2 | Klawiatura | 1 |
| Z200 | 1 | Monitor | 1 |

**Tabela B**

| Nr zlecenia | Lp | Kod towaru | Ilość |
|---|---:|---|---:|
| Z100 | 2 | Klawiatura | 3 |
| Z100 | 1 | Mysz | 2 |
| Z300 | 1 | Monitor | 1 |

Wynik powinien pokazać zmianę ilości dla Z100/2 z 1 na 3, brak Z200/1 w tabeli B oraz nową pozycję Z300/1. Z100/1 pozostaje bez zmian, mimo że w obu tabelach występuje w innym wierszu.

## Dlaczego zwykłe wyszukiwanie po zamówieniu myli rekordy?

Jeśli odszukujesz jedynie Z100, funkcja X.WYSZUKAJ zwróci pierwsze pasujące wystąpienie. Taki wynik może odpowiadać pozycji 1, choć chciałeś sprawdzić pozycję 2. Dlatego najpierw zdefiniuj, co stanowi **jeden unikalny rekord**.

W prostym arkuszu możesz połączyć dwie kolumny:

<div class="formula">=A2&amp;"|"&amp;B2</div>

Wynik dla Z100 oraz 2 to Z100|2. Ten sposób jest wygodny, ale wymaga ostrożności, jeśli wartości wejściowe mogą same zawierać znak separatora.

## Wyszukiwanie po dwóch kryteriach bez łączenia tekstu

W Microsoft 365 i nowszym Excelu możesz użyć iloczynu warunków logicznych:

<div class="formula">=X.WYSZUKAJ(1;(A2=Stare!$A$2:$A$100)*(B2=Stare!$B$2:$B$100);Stare!$D$2:$D$100;"Brak")</div>

Przykład zakłada, że formuła jest w nowym arkuszu, a w Stare kolumny A i B zawierają numer i pozycję, natomiast D przechowuje ilość. Iloczyn warunków oznacza, że oba muszą pasować.

W starszych wersjach Excela użyj rozwiązania zgodnego z dostępnymi funkcjami, np. odpowiedniej formuły tablicowej albo kolumny pomocniczej.

## Jak rozpoznać duplikaty klucza złożonego?

Zlicz wystąpienia konkretnej pary Numer + Pozycja:

<div class="formula">=LICZ.WARUNKI(A$2:A$100;A2;B$2:B$100;B2)</div>

Wynik 1 oznacza unikalną kombinację, a liczba większa od 1 sygnalizuje powtórzenie. Powtórzony sam numer dokumentu nie jest jeszcze duplikatem, jeśli jego pozycje są różne.

## Różne nagłówki tych samych informacji

W jednym systemie klucz może nazywać się Zamówienie + Pozycja, w drugim Nr zlecenia + Lp. Ponadto pole Produkt może odpowiadać Kod towaru. Do porównania tych danych potrzebne jest **mapowanie kolumn**.

W **[porównywarce tabel Excel](/narzedzia/porownywarka-tabel/)** wybierz Zamówienie ↔ Nr zlecenia, dodaj drugą parę Pozycja ↔ Lp, a następnie ustaw Produkt ↔ Kod towaru oraz Ilość ↔ Ilość. Możesz skonfigurować do pięciu par składowych klucza.

## Co robić z prawdziwymi duplikatami?

Jeśli cała kombinacja identyfikatorów występuje więcej niż raz, narzędzie zgłosi ją osobno zamiast zgadywać, który rekord dopasować. Takie przypadki trzeba sprawdzić w systemie źródłowym.

Raport XLSX zawiera osobne arkusze m.in. ze zmianami, rekordami tylko w A lub B, duplikatami i pustymi identyfikatorami. To bardziej wiarygodna kontrola niż porównywanie wiersza o tym samym numerze w obu plikach.

Podstawy znajdziesz także w poradniku **[Jak porównać dwie tabele Excel?](/poradniki/jak-porownac-dwie-tabele-excel/)**.
