---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI i daty w Excelu — warunki na terminach"
description: "Jak użyć JEŻELI do porównywania dat w Excelu. Terminy, przeterminowane zadania, data dzisiejsza i zakresy dat."
slug: "jezeli-data"
category: "Warunki i logika"
categorySlug: "formuly/logika"
date: "2026-10-07"
updated: "2026-10-07"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> daty w Excelu można porównywać operatorami tak samo jak liczby, ponieważ wewnętrznie są przechowywane jako numery seryjne.</div>

<div class="formula">=JEŻELI(A2<DZIŚ();"Po terminie";"Aktualne")</div>

Jeżeli data w A2 jest wcześniejsza niż dzisiejsza, formuła zwróci Po terminie.

## Termin przypadający dzisiaj

Jeżeli również dzisiejsza data ma być traktowana jako termin osiągnięty, użyj operatora <=.

<div class="formula">=JEŻELI(A2<=DZIŚ();"Termin osiągnięty";"Przed terminem")</div>

Różnica między < oraz <= jest szczególnie ważna w raportach zadań i płatności.

## Sprawdzanie zakresu dat

Możesz połączyć JEŻELI z ORAZ, aby ustalić, czy data mieści się pomiędzy początkiem i końcem okresu.

<div class="formula">=JEŻELI(ORAZ(A2>=B2;A2<=C2);"W okresie";"Poza okresem")</div>

A2 jest sprawdzaną datą, B2 początkiem, a C2 końcem zakresu.

## Porównanie z konkretną datą

Najbezpieczniej budować datę funkcją DATA zamiast wpisywać ją jako tekst.

<div class="formula">=JEŻELI(A2>=DATA(2026;1;1);"2026 lub później";"Przed 2026")</div>

Taki zapis nie zależy od sposobu wyświetlania daty w komórkach ani regionalnego formatu wpisywania.

## Puste daty

W raportach pusta komórka może zostać przypadkowo potraktowana jak bardzo wczesna data. Dlatego często warto najpierw sprawdzić, czy termin w ogóle został wpisany.

<div class="formula">=JEŻELI(A2="";"Brak terminu";JEŻELI(A2<DZIŚ();"Po terminie";"Aktualne"))</div>

## Data z godziną

Jeśli komórka zawiera datę razem z godziną, porównanie z DZIŚ() może zachowywać się inaczej niż oczekujesz. DZIŚ() reprezentuje początek bieżącego dnia.

Przy zadaniach z dokładną godziną lepiej porównywać wartość z funkcją TERAZ().

## Najczęstszy błąd

Data wyglądająca jak data może być tekstem. Wtedy porównania mogą zwracać błędne wyniki. Sprawdź format i źródło danych, zwłaszcza po imporcie z plików CSV.

JEŻELI z datami jest bardzo przydatne do terminów, SLA, ważności dokumentów i planów, ale zawsze upewnij się, że porównywane komórki zawierają prawdziwe wartości daty.

## Przykład: oznaczenie terminu płatności

W arkuszu faktur możesz rozdzielić dokumenty na przeterminowane i nadal aktualne. Jeśli w A2 znajduje się termin płatności, a pusta data oznacza brak ustalonego terminu, połącz oba sprawdzenia:

<div class="formula">=JEŻELI(A2="";"Brak terminu";JEŻELI(A2<DZIŚ();"Przeterminowana";"Do zapłaty"))</div>

Taki zapis najpierw obsługuje brak danych, a dopiero później porównuje prawdziwą datę. Dzięki temu puste wiersze nie są przypadkowo klasyfikowane jako bardzo stare terminy.
