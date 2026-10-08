---
layout: ../../layouts/ArticleLayout.astro
title: "Naprzemienne kolory wierszy w Excelu"
description: "Pasy w tabeli przy pomocy Ctrl+T lub formatowania warunkowego z funkcją MOD."
slug: "naprzemienne-kolory-wierszy-excel"
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

<div class="answer"><strong>Szybka odpowiedź:</strong> Najprościej zaznaczyć dane, nacisnąć Ctrl+T i włączyć Wiersze naprzemienne w Projekcie tabeli.</div>

<div class="formula">=MOD(WIERSZ();2)=0</div>

Gdy raport ma kilkaset wierszy, trudno śledzić pojedynczy rekord przez wszystkie kolumny. Subtelne pasy bieli i szarości zwiększają czytelność bez dodawania nadmiernej liczby obramowań.

## Instrukcja krok po kroku

Najprościej zaznaczyć dane, nacisnąć Ctrl+T i włączyć Wiersze naprzemienne w Projekcie tabeli. Dla zwykłego zakresu wybierz A2:F100, dodaj regułę opartą na formule MOD(WIERSZ();2)=0 i ustaw jasny kolor tła.

Reguła powinna odwoływać się do pierwszego wiersza zaznaczenia. Excel sam sprawdzi kolejne rekordy i zastosuje wygląd tam, gdzie warunek jest spełniony. Jeśli kopiujesz regułę, przejrzyj też pole **Zastosuj do**.

## Przykład zastosowania

Gdy raport ma kilkaset wierszy, trudno śledzić pojedynczy rekord przez wszystkie kolumny. Subtelne pasy bieli i szarości zwiększają czytelność bez dodawania nadmiernej liczby obramowań.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Reguła powinna przeliczać kolor automatycznie. Zanim wdrożysz ją w dużym raporcie, przetestuj przypadek spełniający warunek, niespełniający go oraz pustą komórkę.

## Częste błędy i pułapki

W tabeli stylizowanej pasy dopasowują się do nowych rekordów. Formuła oparta na WIERSZ() liczy fizyczne numery wierszy, więc filtrowanie może przerwać wizualną naprzemienność wśród widocznych rekordów. Pasy nie powinny maskować czerwonych ostrzeżeń.

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

Jeżeli używasz jednocześnie reguł alarmowych, umieść je z odpowiednim priorytetem i zweryfikuj wygląd danych przefiltrowanych oraz wydruku.

Unikaj zbyt intensywnych kolorów, zwłaszcza jeśli tabela zawiera już dużo wyróżnień. Kolor warunkowy powinien sygnalizować konkretny stan, a nie wyłącznie dekorować raport. Gdy kilka reguł dotyczy tego samego zakresu, sprawdź ich kolejność w Menedżerze reguł.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-warunkowe-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora reguł warunkowych](/narzedzia/generator-formatowania-warunkowego/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
