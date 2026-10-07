---
layout: ../../layouts/ArticleLayout.astro
title: "FILTRUJ w Excelu — prosty przykład krok po kroku"
description: "Jak działa funkcja FILTRUJ w polskim Excelu. Prosty przykład, warunek tekstowy, brak wyniku i praktyczne zastosowania."
slug: "filtruj-podstawy"
category: "Formuły dynamiczne"
categorySlug: "formuly/dynamiczne"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> funkcja FILTRUJ zwraca wszystkie wiersze lub wartości spełniające wskazany warunek i automatycznie rozlewa wynik na kolejne komórki.</div>

<div class="formula">=FILTRUJ(A2:C100;C2:C100="Tak";"Brak wyników")</div>

Jeżeli kolumna C zawiera status, formuła zwróci wszystkie wiersze z zakresu A2:C100, w których status jest równy Tak. Nie musisz kopiować formuły w dół.

## Jak czytać funkcję FILTRUJ?

Pierwszy argument to zakres zwracanych danych. Drugi argument tworzy tablicę wartości PRAWDA i FAŁSZ, która decyduje, które wiersze pozostają w wyniku. Trzeci argument jest opcjonalnym wynikiem wyświetlanym wtedy, gdy nic nie pasuje.

<div class="formula">=FILTRUJ(tablica;warunek;"Brak wyników")</div>

## Przykład z liczbami

Jeżeli w B2:B100 znajdują się wartości sprzedaży, możesz wyświetlić tylko rekordy powyżej 1000:

<div class="formula">=FILTRUJ(A2:C100;B2:B100>1000;"Brak wyników")</div>

Zmiana danych źródłowych automatycznie zmieni długość listy wynikowej.

## Kryterium z komórki

Zamiast wpisywać warunek na stałe, wskaż komórkę:

<div class="formula">=FILTRUJ(A2:C100;C2:C100=F2;"Brak wyników")</div>

Dzięki temu F2 może pełnić rolę prostego filtra sterującego raportem.

## Dlaczego FILTRUJ jest wygodne?

W starszych rozwiązaniach często potrzebna była kolumna pomocnicza, filtr tabeli albo bardziej złożona formuła tablicowa. FILTRUJ zwraca od razu dowolną liczbę pasujących rekordów.

## Najczęstsza pułapka

Zakres warunku musi odpowiadać wymiarom filtrowanej tablicy. Jeśli filtrujesz A2:C100, warunek C2:C100 ma tę samą liczbę wierszy. Użycie C2:C50 spowoduje problem.

Warto też podawać trzeci argument. Dzięki temu brak dopasowania daje czytelny komunikat zamiast błędu.

## Kiedy używać FILTRUJ?

Gdy potrzebujesz dynamicznej listy: zamówień wybranego klienta, aktywnych zadań, rekordów z konkretnego regionu albo pozycji powyżej ustalonego progu. Wynik pozostaje połączony z danymi źródłowymi i aktualizuje się automatycznie.