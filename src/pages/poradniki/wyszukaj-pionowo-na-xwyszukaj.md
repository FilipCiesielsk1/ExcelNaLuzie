---
layout: ../../layouts/ArticleLayout.astro
title: "WYSZUKAJ.PIONOWO na X.WYSZUKAJ — jak zamienić?"
description: "Jak zamienić WYSZUKAJ.PIONOWO na X.WYSZUKAJ? Przykłady polskich formuł, argument FAŁSZ, odwołania do arkuszy i konwerter online."
slug: "wyszukaj-pionowo-na-xwyszukaj"
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
verified: false
related:
  - title: "Konwerter WYSZUKAJ.PIONOWO"
    url: "/narzedzia/konwerter-wyszukaj-pionowo/"
    category: "Narzędzie"
---

<div class="answer"><strong>Zasada:</strong> w X.WYSZUKAJ zamiast numeru kolumny podajesz osobny zakres wynikowy. Formułę WYSZUKAJ.PIONOWO z jawnym argumentem FAŁSZ można zwykle przepisać na nowe wyszukiwanie dokładne.</div>

Modernizując starszy skoroszyt, warto najpierw sprawdzić wyniki dla kilku rekordów. Funkcje różnią się domyślnym sposobem dopasowania i nie każdą formułę można bezpiecznie zamienić automatycznie.

**[Wypróbuj konwerter WYSZUKAJ.PIONOWO → X.WYSZUKAJ →](/narzedzia/konwerter-wyszukaj-pionowo/)**

## Przykład starej formuły

Załóżmy, że F2 zawiera ID produktu, a tabela obejmuje zakres A2:D100. Chcesz zwrócić trzecią kolumnę tabeli, czyli C.

<div class="formula">=WYSZUKAJ.PIONOWO(F2;A2:D100;3;FAŁSZ)</div>

Funkcja szuka ID w pierwszej kolumnie zakresu. Numer 3 wskazuje trzecią kolumnę wyniku, a FAŁSZ oznacza dopasowanie dokładne.

## Odpowiednik X.WYSZUKAJ

Zamiast numeru kolumny wpisujesz zakres wyszukiwania i osobny zakres wartości do zwrócenia:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100)</div>

Wyszukiwany kod to nadal F2. Drugi argument jest kolumną klucza, trzeci kolumną wyniku. Oba zakresy muszą odpowiadać tym samym wierszom; inaczej możesz zwrócić cenę nie tego produktu.

## Dlaczego dopasowanie FAŁSZ jest tak ważne?

WYSZUKAJ.PIONOWO bez czwartego argumentu lub z argumentem PRAWDA może użyć wyszukiwania przybliżonego. X.WYSZUKAJ domyślnie wymaga dopasowania dokładnego. Ślepa zamiana może więc zmienić wyniki raportu.

Nasz konwerter celowo przyjmuje tylko samodzielne formuły zawierające FAŁSZ albo 0 jako czwarty argument. Pozostałe wymagają ręcznej analizy znaczenia wyszukiwania.

## Komunikat dla brakującego rekordu

Jeśli identyfikator nie istnieje, możesz w X.WYSZUKAJ wyświetlić czytelną informację:

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Nie znaleziono")</div>

Czwarty argument jest opcjonalny. Jeśli go pominiesz, funkcja może zwrócić standardowy błąd braku dopasowania. Nie powinno się ukrywać innych problemów, np. niewłaściwych zakresów.

## Zakresy z innego arkusza

Dla tabeli zapisanej w arkuszu Dane 2026 przykład starego zapisu to:

<div class="formula">=WYSZUKAJ.PIONOWO(F2;'Dane 2026'!$A$2:$D$100;4;FAŁSZ)</div>

W nowej formule kolumną wynikową jest D:

<div class="formula">=X.WYSZUKAJ(F2;'Dane 2026'!$A$2:$A$100;'Dane 2026'!$D$2:$D$100)</div>

Znaki dolara blokują adresy i powinny zostać zachowane przy kopiowaniu do kolejnych wierszy.

## Kiedy warto użyć konwertera?

W **[konwerterze WYSZUKAJ.PIONOWO](/narzedzia/konwerter-wyszukaj-pionowo/)** wklejasz formułę i otrzymujesz odpowiednik X.WYSZUKAJ. Możesz też dodać tekst wyświetlany przy braku wyniku.

Konwerter obsługuje zwykłe zakresy A1, pełne kolumny oraz nazwy arkuszy. Nie przepisuje automatycznie tabel strukturalnych, nazwanych zakresów, odwołań do innych skoroszytów i dynamicznych numerów kolumn. W takich przypadkach sprawdź budowę formuły ręcznie.

## Sprawdź wersję Excela

X.WYSZUKAJ jest dostępna w Microsoft 365, Excelu 2021 i nowszych wspierających tę funkcję. Jeśli plik musi działać w Excelu 2016 lub 2019, zwykle należy pozostać przy starszych funkcjach lub użyć INDEKS + PODAJ.POZYCJĘ.

Przed masową zamianą sprawdź co najmniej prawidłowy kod, brakujący kod oraz rekord z duplikatem. Dzięki temu nie zmienisz znaczenia działającego raportu.
