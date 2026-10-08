---
layout: ../../layouts/ArticleLayout.astro
title: "Miesiąc słownie w Excelu — jak to zrobić?"
description: "Wyświetl pełną nazwę miesiąca z daty, zachowując jej wartość. Kod mmmm i funkcja TEKST."
slug: "miesiac-slownie-format-komorki"
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

<div class="answer"><strong>Szybka odpowiedź:</strong> Zaznacz komórkę z prawidłową datą, naciśnij Ctrl+1 i wybierz Niestandardowe.</div>

<div class="formula">mmmm</div>

W nagłówku raportu masz datę 15.03.2026, lecz chcesz pokazać sam marzec. Ważne, żeby w środku nadal pozostała data, dzięki czemu sortowanie i porównywanie będą działały chronologicznie.

## Instrukcja krok po kroku

Zaznacz komórkę z prawidłową datą, naciśnij Ctrl+1 i wybierz Niestandardowe. Wpisz mmmm dla pełnej nazwy miesiąca lub mmm dla skrótu. Gdy potrzebujesz miesiąca wraz z rokiem, wybierz mmmm rrrr.

Pamiętaj, że kod w polu **Typ** nie jest formułą obliczeniową. Nie dopisuj znaku równości, o ile przykład go nie zawiera. Wartość źródłowa pozostaje ta sama, a zmienia się jedynie jej prezentacja.

## Przykład zastosowania

W nagłówku raportu masz datę 15.03.2026, lecz chcesz pokazać sam marzec. Ważne, żeby w środku nadal pozostała data, dzięki czemu sortowanie i porównywanie będą działały chronologicznie.

Po wprowadzeniu rozwiązania zmień jedną z przykładowych wartości i sprawdź efekt. Możesz sprawdzić oryginalne dane na pasku formuły. Dzięki temu wiesz, czy wynik nadal nadaje się do sumowania, sortowania, filtrowania lub porównywania.

## Częste błędy i pułapki

Format mmmm nie usuwa roku ani dnia, jedynie je ukrywa. Dwie daty z różnych lat mogą wyglądać identycznie jako „marzec”, dlatego w zestawieniach rocznych warto dopisać rrrr. Nazwy miesięcy zależą od ustawień regionalnych.

Jeśli Excel nie reaguje zgodnie z oczekiwaniami, sprawdź dodatkowo, czy komórki zawierają liczby i daty, a nie tekst po imporcie, oraz czy ustawiono poprawny zakres. Warto mieć kopię oryginalnego arkusza przed wprowadzeniem wielu reguł. Nie trzeba jednak przepisywać danych ani używać makr.

## Warianty i dobre praktyki

Jeśli chcesz otrzymać tekst w osobnej komórce, zastosuj =TEKST(A2;"mmmm"). Wynik jest tekstem, więc do dalszych obliczeń lepiej korzystać z daty źródłowej.

Jeżeli przygotowujesz arkusz dla innych osób, dodaj krótką instrukcję wyjaśniającą, dlaczego dane wyglądają inaczej niż ich wartość na pasku formuły. Dzięki temu odbiorca nie pomyli niewidocznego zera z pustą komórką ani daty sformatowanej słownie z tekstem.

## Zgodność z wersjami Excela

Rozwiązanie działa w polskim Excelu 2016, 2019, 2021, 2024 oraz Microsoft 365. Menu może różnić się drobnymi szczegółami między wersjami. Nie potrzebujesz VBA, dodatków ani konta online. Podane adresy zakresów są przykładami — dostosuj je do własnej tabeli, szczególnie gdy nagłówki znajdują się w innym wierszu.

## Pliki i powiązane narzędzia

Pobierz [ćwiczenie Excel XLSX](/downloads/przyklady/formatowanie-liczb-dat-przyklady.xlsx) z danymi i instrukcją, przejdź do [generatora formatów niestandardowych](/narzedzia/generator-formatow/) albo zobacz pozostałe poradniki w [dziale Formatowanie Excel](/formuly/formatowanie/).
