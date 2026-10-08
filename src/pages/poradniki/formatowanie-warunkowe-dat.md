---
layout: ../../layouts/ArticleLayout.astro
title: "Formatowanie warunkowe dat — terminy na najbliższe 7 dni"
description: "Jak automatycznie wyróżniać terminy nadchodzące w ciągu tygodnia za pomocą DZIŚ()."
slug: "formatowanie-warunkowe-dat"
category: "Formatowanie i formatowanie warunkowe"
categorySlug: "formuly/formatowanie"
date: "2026-10-08"
updated: "2026-10-08"
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

<div class="answer"><strong>Szybka odpowiedź:</strong> Zaznacz B2:B100 i wybierz Nowa reguła → Użyj formuły.</div>

<div class="formula">=ORAZ(B2&gt;=DZIŚ();B2&lt;=DZIŚ()+7)</div>

W kolumnie B masz terminy przeglądów. Chcesz otrzymać ostrzeżenie dla terminów od dziś do siedmiu dni naprzód, ale nie dla dat z przeszłości ani wydarzeń planowanych za miesiąc.

## Instrukcja krok po kroku

Zaznacz B2:B100 i wybierz Nowa reguła → Użyj formuły. Wklej kod, wybierz pomarańczowe wypełnienie i zatwierdź. Jeśli kolor ma obejmować cały wiersz A2:D100, zablokuj kolumnę B w formule: =ORAZ($B2>=DZIŚ();$B2<=DZIŚ()+7).

Reguła powinna odwoływać się do pierwszego wiersza zaznaczenia. Excel sam sprawdzi kolejne rekordy i zastosuje wygląd tam, gdzie warunek jest spełniony. Jeśli kopiujesz regułę, przejrzyj też pole **Zastosuj do**.

## Przykład zastosowania

W kolumnie B masz terminy przeglądów. Chcesz otrzymać ostrzeżenie dla terminów od dziś do siedmiu dni naprzód, ale nie dla dat z przeszłości ani wydarzeń planowanych za miesiąc.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Reguła powinna przeliczać kolor automatycznie. Zanim wdrożysz ją w dużym raporcie, przetestuj przypadek spełniający warunek, niespełniający go oraz pustą komórkę.

## Częste błędy i pułapki

Funkcja DZIŚ() nie zawiera godziny. Jeśli B2 przechowuje również porę dnia, użyj warunku B2<DZIŚ()+8 zamiast B2<=DZIŚ()+7, aby nie pominąć godzin ostatniego dnia. Termin musi być prawdziwą datą Excela, a nie tekstem.

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

Liczbę dni można wprowadzić do F1 i zastąpić stałą 7 przez $F$1. Jedna zmiana kontroluje wtedy całe okno ostrzegania.

Unikaj zbyt intensywnych kolorów, zwłaszcza jeśli tabela zawiera już dużo wyróżnień. Kolor warunkowy powinien sygnalizować konkretny stan, a nie wyłącznie dekorować raport. Gdy kilka reguł dotyczy tego samego zakresu, sprawdź ich kolejność w Menedżerze reguł.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-warunkowe-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora reguł warunkowych](/narzedzia/generator-formatowania-warunkowego/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
