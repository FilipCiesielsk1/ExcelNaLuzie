---
layout: ../../layouts/ArticleLayout.astro
title: "Liczba z jednostką kg, szt. lub zł w Excelu"
description: "Dodaj jednostkę do liczby bez zmieniania jej na tekst. Przykład 0 "kg" i wskazówki."
slug: "liczba-z-jednostka-format-excel"
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

<div class="answer"><strong>Szybka odpowiedź:</strong> Zaznacz kolumnę z liczbami, naciśnij Ctrl+1 i otwórz kategorię Niestandardowe.</div>

<div class="formula">0 "kg"</div>

W kolumnie magazynowej masz wartości 10, 25 i 7. Użytkownik powinien widzieć 10 kg, 25 kg i 7 kg, ale SUMA nadal ma policzyć 42, bez konieczności wycinania oznaczenia jednostki.

## Instrukcja krok po kroku

Zaznacz kolumnę z liczbami, naciśnij Ctrl+1 i otwórz kategorię Niestandardowe. W polu Typ wpisz 0 "kg" albo 0,00 "kg" dla dwóch miejsc dziesiętnych. Potwierdź i zobacz, że pasek formuły nadal pokazuje tylko wartość liczbową.

Pamiętaj, że kod w polu **Typ** nie jest formułą obliczeniową. Nie dopisuj znaku równości, o ile przykład go nie zawiera. Wartość źródłowa pozostaje ta sama, a zmienia się jedynie jej prezentacja.

## Przykład zastosowania

W kolumnie magazynowej masz wartości 10, 25 i 7. Użytkownik powinien widzieć 10 kg, 25 kg i 7 kg, ale SUMA nadal ma policzyć 42, bez konieczności wycinania oznaczenia jednostki.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Możesz sprawdzić oryginalne dane na pasku formuły. Dzięki temu wiesz, czy wynik nadal nadaje się do sumowania, sortowania, filtrowania lub porównywania.

## Częste błędy i pułapki

Ręczne wpisanie 25 kg do komórki często tworzy tekst, który nie nadaje się do zwykłego sumowania. Również sklejenie wartości i jednostki przez & tworzy tekst, dlatego to raczej rozwiązanie do osobnej etykiety niż kolumny z danymi.

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

Dla ilości możesz wpisać 0 "szt.", a dla metrażu 0,0 "m". Przy obliczeniach walutowych rozważ standardową kategorię Walutowe lub Księgowe, która ułatwia wyrównanie symboli.

Jeżeli przygotowujesz arkusz dla innych osób, dodaj krótką instrukcję wyjaśniającą, dlaczego dane wyglądają inaczej niż ich wartość na pasku formuły. Dzięki temu odbiorca nie pomyli niewidocznego zera z pustą komórką ani daty sformatowanej słownie z tekstem.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-liczb-dat-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora formatów niestandardowych](/narzedzia/generator-formatow/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
