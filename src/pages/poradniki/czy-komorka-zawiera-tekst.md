---
layout: ../../layouts/ArticleLayout.astro
title: "Jak sprawdzić, czy komórka zawiera tekst w Excelu?"
description: "Jak sprawdzić, czy komórka zawiera konkretny wyraz lub fragment tekstu i zwrócić TAK/NIE. Gotowa formuła z SZUKAJ.TEKST."
slug: "czy-komorka-zawiera-tekst"
category: "Formuły tekstowe"
categorySlug: "formuly/tekst"
date: "2026-10-06"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Starsze wersje"
verified: false
related:
  - title: "Jak policzyć wystąpienia tekstu w Excelu?"
    url: "/poradniki/policz-wystapienia-tekstu/"
    category: "Tekst"
  - title: "Jak zamienić fragment tekstu w Excelu?"
    url: "/poradniki/zamien-fragment-tekstu/"
    category: "Tekst"
  - title: "Formuły tekstowe w Excelu"
    url: "/formuly/tekst/"
    category: "Hub"
---

<div class="answer"><strong>Aby sprawdzić, czy A1 zawiera słowo „excel”</strong>, połącz SZUKAJ.TEKST, CZY.LICZBA i JEŻELI.</div>

<div class="formula">=JEŻELI(CZY.LICZBA(SZUKAJ.TEKST("excel";A1));"TAK";"NIE")</div>

Jeżeli tekst zostanie znaleziony, formuła zwróci `TAK`. W przeciwnym razie otrzymasz `NIE`.

## Jak to działa?

`SZUKAJ.TEKST` zwraca pozycję znalezionego tekstu. Jeżeli wyszukiwanie się powiedzie, wynikiem jest liczba.

`CZY.LICZBA` zamienia ten wynik na wartość PRAWDA lub FAŁSZ, a `JEŻELI` zwraca czytelny komunikat.

## Przykład

| Tekst w A | Szukamy | Wynik |
|---|---|---|
| Kurs Excel podstawy | excel | TAK |
| Raport miesięczny | excel | NIE |
| EXCEL 365 | excel | TAK |

Funkcja `SZUKAJ.TEKST` nie rozróżnia wielkich i małych liter, dlatego `Excel`, `EXCEL` i `excel` są traktowane tak samo.

## Gdy wielkość liter ma znaczenie

Jeżeli chcesz rozróżniać wielkie i małe litery, zamiast SZUKAJ.TEKST możesz użyć ZNAJDŹ.

<div class="formula">=JEŻELI(CZY.LICZBA(ZNAJDŹ("Excel";A1));"TAK";"NIE")</div>

## Zwróć tylko PRAWDA lub FAŁSZ

<div class="formula">=CZY.LICZBA(SZUKAJ.TEKST("excel";A1))</div>

## Wyszukiwanie części wyrazu

SZUKAJ.TEKST sprawdza, czy wskazany fragment występuje **gdziekolwiek** w komórce. Dlatego szukanie tekstu „excel” znajdzie również „ExcelNaLuzie” albo „kurs Excela”.

<div class="formula">=CZY.LICZBA(SZUKAJ.TEKST("excel";A1))</div>

Wynik PRAWDA oznacza, że fragment został znaleziony, a FAŁSZ — że go nie ma.

## Przykład z klasyfikacją danych

Jeżeli A1 zawiera opis produktu i chcesz przypisać etykietę tylko wtedy, gdy pojawia się słowo „premium”:

<div class="formula">=JEŻELI(CZY.LICZBA(SZUKAJ.TEKST("premium";A1));"PREMIUM";"STANDARD")</div>

To prosty sposób na automatyczne oznaczanie rekordów na podstawie opisu, nazwy pliku albo komentarza.

## SZUKAJ.TEKST czy ZNAJDŹ?

SZUKAJ.TEKST nie rozróżnia wielkich i małych liter. Dla niego „Excel”, „EXCEL” i „excel” są równoważne.

ZNAJDŹ jest czułe na wielkość liter. Używaj go tylko wtedy, gdy zapis znaków rzeczywiście ma znaczenie.

## Co jeśli szukany tekst jest w osobnej komórce?

Zamiast wpisywać frazę na stałe, odwołaj się do B1:

<div class="formula">=CZY.LICZBA(SZUKAJ.TEKST(B1;A1))</div>

Dzięki temu możesz zmieniać kryterium bez edytowania formuły albo kopiować ją w dół dla wielu rekordów.

## Uważaj na puste kryterium

Jeśli B1 jest puste, wyszukiwanie pustego tekstu może dać wynik, którego nie oczekujesz. W formularzach użytkownika warto najpierw sprawdzić, czy kryterium zostało wpisane.
