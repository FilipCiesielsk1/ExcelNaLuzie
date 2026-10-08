---
layout: ../../layouts/ArticleLayout.astro
title: "Tabela przestawna: suma, średnia czy licznik? Przykłady"
description: "Suma, średnia i licznik w tabeli przestawnej Excel: co liczą, jak zmienić ustawienia i dlaczego średnia końcowa może zaskakiwać."
slug: "tabela-przestawna-suma-srednia-licznik"
category: "Liczenie i sumowanie"
categorySlug: "formuly/liczenie"
date: "2026-10-08"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "7 min"
difficulty: "Średni"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
related:
  - title: "Generator tabel przestawnych Excel"
    url: "/narzedzia/generator-tabel-przestawnych/"
    category: "Narzędzie"
---

<div class="answer"><strong>Najważniejsze:</strong> Suma dodaje liczby, Średnia wylicza przeciętną z rekordów, a Licznik liczy niepuste wartości wybranego pola. W tabeli przestawnej przełączysz je przez Ustawienia pola wartości.</div>

Dwa raporty oparte na tych samych danych mogą pokazywać zupełnie inne wartości. Nie oznacza to od razu błędu. Problem często polega na tym, że jeden raport sumuje sprzedaż, a drugi liczy liczbę zamówień lub wylicza średnią.

**[Przetestuj pięć agregacji w generatorze online →](/narzedzia/generator-tabel-przestawnych/)**

## Jeden zbiór danych, trzy różne pytania

Wyobraź sobie pięć transakcji:

| Region | Handlowiec | Kwota |
|---|---|---:|
| Północ | Anna | 100 |
| Północ | Ola | 200 |
| Północ | Anna | 300 |
| Południe | Piotr | 200 |
| Południe | Piotr | 400 |

Północ ma trzy zamówienia na łączną kwotę 600, a Południe dwa zamówienia również na 600. Liczba wierszy, suma kwot i średnia transakcji odpowiadają trzem różnym pytaniom.

## Suma — ile łącznie sprzedaliśmy?

Przenieś Region do obszaru Wiersze, Kwota do Wartości i wybierz **Suma**. Otrzymasz 600 dla Północy, 600 dla Południa oraz 1200 ogółem.

Tę samą wartość dla Północy sprawdzisz bez tabeli przestawnej:

<div class="formula">=SUMA.JEŻELI(A2:A6;"Północ";C2:C6)</div>

Funkcja zwróci 600. To dobry sposób niezależnego zweryfikowania agregacji na małym przykładzie.

## Średnia — jaka jest przeciętna wartość zamówienia?

Zmień **Ustawienia pola wartości → Średnia**. Dla Północy wynik to 200, a dla Południa 300.

Prawidłowa średnia ogólna wynosi jednak **240**, a nie 250. Dlaczego? Wszystkich zamówień jest pięć i ich suma wynosi 1200.

<div class="formula">=ŚREDNIA(C2:C6)</div>

Wynik to 240. Średnia z dwóch średnich regionalnych (200 i 300) nie uwzględnia tego, że Północ ma trzy rekordy, a Południe dwa. To jedna z najczęstszych pułapek w ręcznie tworzonych raportach.

## Licznik — ile zarejestrowano transakcji?

Gdy ustawisz **Licznik z Kwota**, Excel policzy komórki z niepustą wartością pola Kwota. Na przykładzie jest to 3 dla Północy, 2 dla Południa i 5 ogółem.

Liczbę wierszy z regionem Północ możesz porównać z wynikiem:

<div class="formula">=LICZ.JEŻELI(A2:A6;"Północ")</div>

Dla kompletnych danych wynik to 3. Jeśli jednak jeden wiersz ma region Północ, lecz pustą kwotę, LICZ.JEŻELI nadal policzy region, a Licznik z Kwota nie policzy pustej wartości. Wybór pola licznika jest zatem istotny.

## Minimum i maksimum — skrajne transakcje

Pole wartości może pokazywać również Minimum i Maksimum. Dla całej listy minimum wynosi 100, a maksimum 400.

<div class="formula">=MIN(C2:C6)</div>

<div class="formula">=MAX(C2:C6)</div>

Minimum nie jest najniższą sumą regionu. To najmniejsza pojedyncza wartość z analizowanych rekordów.

## Jak sprawdzić agregacje bez przebudowy raportu?

Otwórz **[generator tabel przestawnych](/narzedzia/generator-tabel-przestawnych/)**, wklej dane, ustaw Region jako Wiersze, Kwota jako Wartości i przełączaj Operację pomiędzy Sumą, Średnią, Licznikiem, Minimum i Maksimum. Każdorazowo kliknij Generuj podgląd.

Generator wylicza średnią ogólną bezpośrednio z rekordów. Raport pobrany do XLSX jest **statycznym podsumowaniem**, nie natywną tabelą przestawną. W skoroszycie znajdziesz również arkusz Dane oraz Instrukcja pomagającą utworzyć edytowalną tabelę w Excelu.

## Dlaczego Excel pokazuje Licznik zamiast Sumy?

Jeżeli kolumna Kwota zawiera tekstowe wartości, Excel może domyślnie wybrać Licznik. Sprawdź format danych, upewnij się, że liczby są faktycznie liczbami, a następnie zmień ustawienie pola. Przy danych importowanych jako tekst samo wyświetlenie separatora dziesiętnego nie przesądza o typie wartości.

Więcej o wstawianiu i układzie pól przeczytasz w poradniku **[Jak zrobić tabelę przestawną w Excelu?](/poradniki/jak-zrobic-tabele-przestawna-w-excelu/)**.
