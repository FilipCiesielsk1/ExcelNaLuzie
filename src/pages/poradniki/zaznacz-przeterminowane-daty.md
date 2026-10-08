---
layout: ../../layouts/ArticleLayout.astro
title: "Jak zaznaczyć przeterminowane daty w Excelu?"
description: "Czerwone wyróżnienie niezakończonych zadań po terminie — z pominięciem pustych dat i statusu Gotowe."
slug: "zaznacz-przeterminowane-daty"
category: "Formatowanie i formatowanie warunkowe"
categorySlug: "formuly/formatowanie"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Szybka odpowiedź:</strong> Wybierz A2:D100.</div>

<div class="formula">=ORAZ($B2&lt;&gt;"";$B2&lt;DZIŚ();$D2&lt;&gt;"Gotowe")</div>

Kolumna B zawiera termin, a D status zadania. Rekord z wczorajszą datą i statusem W toku powinien być czerwony. Ten sam termin ze statusem Gotowe albo pustym terminem nie może wywoływać alarmu.

## Instrukcja krok po kroku

Wybierz A2:D100. Przejdź do Formatowanie warunkowe → Nowa reguła → Użyj formuły, wklej kod i ustaw delikatne czerwone tło. Następnie przetestuj pozycje przeterminowaną, ukończoną i bez daty.

Reguła powinna odwoływać się do pierwszego wiersza zaznaczenia. Excel sam sprawdzi kolejne rekordy i zastosuje wygląd tam, gdzie warunek jest spełniony. Jeśli kopiujesz regułę, przejrzyj też pole **Zastosuj do**.

## Przykład zastosowania

Kolumna B zawiera termin, a D status zadania. Rekord z wczorajszą datą i statusem W toku powinien być czerwony. Ten sam termin ze statusem Gotowe albo pustym terminem nie może wywoływać alarmu.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Reguła powinna przeliczać kolor automatycznie. Zanim wdrożysz ją w dużym raporcie, przetestuj przypadek spełniający warunek, niespełniający go oraz pustą komórkę.

## Częste błędy i pułapki

Warunek $B2<>"" chroni przed interpretacją pustej daty jako zera. Jeżeli status w Twoim pliku nazywa się Zakończone, wpisz dokładnie taką etykietę. W formule dla zakresu od wiersza 4 adresy muszą zaczynać się od $B4 i $D4.

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

W rozbudowanym rejestrze warto zestawić tę regułę z osobnym ostrzeżeniem o terminie w ciągu 7 dni. W Menedżerze reguł sprawdź kolejność i priorytet kolorów.

Unikaj zbyt intensywnych kolorów, zwłaszcza jeśli tabela zawiera już dużo wyróżnień. Kolor warunkowy powinien sygnalizować konkretny stan, a nie wyłącznie dekorować raport. Gdy kilka reguł dotyczy tego samego zakresu, sprawdź ich kolejność w Menedżerze reguł.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-warunkowe-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora reguł warunkowych](/narzedzia/generator-formatowania-warunkowego/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
