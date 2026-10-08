---
layout: ../../layouts/ArticleLayout.astro
title: "Kolor komórki na podstawie wartości w Excelu"
description: "Automatyczna zmiana koloru komórki po przekroczeniu progu. Instrukcja formatowania warunkowego krok po kroku."
slug: "formatowanie-warunkowe-kolor-komorki"
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

<div class="answer"><strong>Szybka odpowiedź:</strong> Zaznacz C2:C100, wybierz Narzędzia główne → Formatowanie warunkowe → Nowa reguła → Użyj formuły.</div>

<div class="formula">=C2&gt;1000</div>

W kolumnie C masz wartości sprzedaży. Kwoty powyżej tysiąca złotych mają otrzymać zielone tło. Wiersze z 850, 1290 i 2200 powinny wyróżnić tylko dwie ostatnie komórki, bez zmiany samych kwot.

## Instrukcja krok po kroku

Zaznacz C2:C100, wybierz Narzędzia główne → Formatowanie warunkowe → Nowa reguła → Użyj formuły. Wklej podaną formułę, wybierz kolor wypełnienia i potwierdź. Początkowy adres C2 musi odpowiadać pierwszej komórce zaznaczenia.

Reguła powinna odwoływać się do pierwszego wiersza zaznaczenia. Excel sam sprawdzi kolejne rekordy i zastosuje wygląd tam, gdzie warunek jest spełniony. Jeśli kopiujesz regułę, przejrzyj też pole **Zastosuj do**.

## Przykład zastosowania

W kolumnie C masz wartości sprzedaży. Kwoty powyżej tysiąca złotych mają otrzymać zielone tło. Wiersze z 850, 1290 i 2200 powinny wyróżnić tylko dwie ostatnie komórki, bez zmiany samych kwot.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Reguła powinna przeliczać kolor automatycznie. Zanim wdrożysz ją w dużym raporcie, przetestuj przypadek spełniający warunek, niespełniający go oraz pustą komórkę.

## Częste błędy i pułapki

Nie stosuj adresu $C$2, bo zablokujesz sprawdzanie na pierwszym wierszu. Jeżeli próg trzymasz w F1, użyj =C2>$F$1. Sprawdź także, czy liczby nie są tekstem skopiowanym z innego programu.

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

Dane zmieniają się często i nie chcesz ręcznie zaznaczać wyników po każdej aktualizacji raportu.

Unikaj zbyt intensywnych kolorów, zwłaszcza jeśli tabela zawiera już dużo wyróżnień. Kolor warunkowy powinien sygnalizować konkretny stan, a nie wyłącznie dekorować raport. Gdy kilka reguł dotyczy tego samego zakresu, sprawdź ich kolejność w Menedżerze reguł.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-warunkowe-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora reguł warunkowych](/narzedzia/generator-formatowania-warunkowego/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
