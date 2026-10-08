---
layout: ../../layouts/ArticleLayout.astro
title: "Formatowanie warunkowe całego wiersza według statusu"
description: "Kolorowanie całego wiersza, gdy status ma wartość Gotowe. Poprawna formuła z blokadą kolumny."
slug: "formatowanie-warunkowe-caly-wiersz"
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

<div class="answer"><strong>Szybka odpowiedź:</strong> Zaznacz A2:E100 i dodaj Nową regułę formatowania warunkowego opartą na formule.</div>

<div class="formula">=$D2="Gotowe"</div>

Masz tabelę z numerem zadania, opisem, pracownikiem, statusem w kolumnie D i terminem. Gdy w D5 pojawi się Gotowe, cały zakres A5:E5 powinien otrzymać łagodny zielony kolor.

## Instrukcja krok po kroku

Zaznacz A2:E100 i dodaj Nową regułę formatowania warunkowego opartą na formule. Wklej podaną formułę i ustaw kolor. W Menedżerze reguł sprawdź, czy w polu Zastosuj do jest =$A$2:$E$100.

Reguła powinna odwoływać się do pierwszego wiersza zaznaczenia. Excel sam sprawdzi kolejne rekordy i zastosuje wygląd tam, gdzie warunek jest spełniony. Jeśli kopiujesz regułę, przejrzyj też pole **Zastosuj do**.

## Przykład zastosowania

Masz tabelę z numerem zadania, opisem, pracownikiem, statusem w kolumnie D i terminem. Gdy w D5 pojawi się Gotowe, cały zakres A5:E5 powinien otrzymać łagodny zielony kolor.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Reguła powinna przeliczać kolor automatycznie. Zanim wdrożysz ją w dużym raporcie, przetestuj przypadek spełniający warunek, niespełniający go oraz pustą komórkę.

## Częste błędy i pułapki

Znak $ przed D blokuje kolumnę statusu, ale nie numer wiersza. Zapis =$D$2 będzie sprawdzał stale D2 i pokoloruje błędnie wiele rekordów. Jeśli wybierzesz zakres zaczynający się od wiersza 5, użyj =$D5="Gotowe".

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

Podobną regułę dla statusu W toku przygotujesz, zamieniając tekst w cudzysłowie i wybierając inny kolor.

Unikaj zbyt intensywnych kolorów, zwłaszcza jeśli tabela zawiera już dużo wyróżnień. Kolor warunkowy powinien sygnalizować konkretny stan, a nie wyłącznie dekorować raport. Gdy kilka reguł dotyczy tego samego zakresu, sprawdź ich kolejność w Menedżerze reguł.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-warunkowe-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora reguł warunkowych](/narzedzia/generator-formatowania-warunkowego/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
