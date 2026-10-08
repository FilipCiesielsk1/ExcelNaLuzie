---
layout: ../../layouts/ArticleLayout.astro
title: "Jak znaleźć duplikaty w Excelu?"
description: "Znajdź duplikaty w Excelu przez formatowanie warunkowe lub LICZ.JEŻELI. Przykład z identyfikatorami, zaznaczaniem i kontrolą powtórzeń."
slug: "jak-znalezc-duplikaty-excel"
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
  - title: "Jak usunąć duplikaty bez utraty danych?"
    url: "/poradniki/jak-usunac-duplikaty-excel/"
    category: "Poradnik"
  - title: "Duplikaty po dwóch kolumnach"
    url: "/poradniki/duplikaty-klucz-zlozony-porownywanie-tabel/"
    category: "Poradnik"
---

<div class="answer"><strong>Najkrócej:</strong> zaznacz kolumnę z danymi i wybierz Narzędzia główne → Formatowanie warunkowe → Reguły wyróżniania komórek → Duplikujące się wartości. Excel oznaczy wszystkie powtarzające się wartości.</div>

Jeśli chcesz odróżnić pierwsze wystąpienie od każdego kolejnego, wpisz do B2 formułę i skopiuj ją w dół:

<div class="formula">=JEŻELI(LICZ.JEŻELI($A$2:A2;A2)>1;"Duplikat";"Pierwszy")</div>

## Przykład: duplikaty identyfikatorów klientów

W A2:A6 znajdują się identyfikatory. W kolumnie B umieszczamy formułę.

| Wiersz | A — identyfikator | B — wynik |
|---|---|---|
| 2 | K101 | Pierwszy |
| 3 | K102 | Pierwszy |
| 4 | K101 | Duplikat |
| 5 | K103 | Pierwszy |
| 6 | K102 | Duplikat |

Wyrażenie $A$2:A2 rozszerza zakres od pierwszego wiersza aż do bieżącego. Pierwszy K101 występuje dotąd raz, a drugi K101 już dwa razy. Dzięki temu nie zaznaczysz prawidłowego pierwszego rekordu jako nadmiarowego.

## Sposób 1: zaznacz wszystkie powtórzone wartości

1. Kliknij w dane i zaznacz samą kolumnę identyfikatorów (bez nagłówka).
2. Wybierz **Narzędzia główne → Formatowanie warunkowe → Reguły wyróżniania komórek → Duplikujące się wartości**.
3. Ustaw kolor i zaakceptuj regułę.

Formatowanie zaznacza zarówno pierwsze, jak i kolejne wystąpienie identyfikatora. To dobre do szybkiego wykrywania problemów, ale samo zaznaczenie nie usuwa żadnego wiersza.

## Sposób 2: sprawdź, czy wartość pojawia się gdziekolwiek więcej niż raz

<div class="formula">=LICZ.JEŻELI($A$2:$A$100;A2)>1</div>

Formuła zwraca PRAWDA dla **wszystkich** wystąpień wartości powtarzanej w całym zakresie. Różni się więc od wariantu z rosnącym zakresem, który oznacza dopiero drugie i następne wystąpienia.

## Kiedy sprawdzać kilka kolumn naraz?

Dwa wiersze mogą mieć ten sam numer zamówienia, ale różne pozycje towarowe. Nie należy wtedy usuwać całych rekordów tylko dlatego, że numer się powtarza. Ustal, czy duplikat oznacza ten sam numer, numer z datą czy cały komplet kolumn. Przy porównywaniu dwóch zbiorów przyda się też [poradnik porównywania tabel](/poradniki/jak-porownac-dwie-tabele-excel/).

## Najczęstsze problemy

Identyfikatory **K101** i **K101 ze spacją na końcu** mogą wyglądać identycznie, lecz być innymi ciągami. Podobny problem dotyczy liczby 101 oraz tekstu "101". Przed sprawdzaniem duplikatów ujednolić typ i oczyścić dane. Dla brakujących identyfikatorów dodaj warunek pomijający puste komórki:

<div class="formula">=JEŻELI(A2="";"";JEŻELI(LICZ.JEŻELI($A$2:A2;A2)>1;"Duplikat";"Pierwszy"))</div>

**[Pobierz skoroszyt z duplikatami i czyszczeniem danych (XLSX)](/downloads/przyklady/dane-duplikaty-czyszczenie.xlsx)** — przykładowe identyfikatory oraz gotowa kolumna kontrolna. Plik działa bez makr.
