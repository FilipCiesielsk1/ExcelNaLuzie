# ExcelNaLuzie.pl — CONTENT PLAN

## Statusy

- [x] opublikowane
- [ ] planowane
- [~] w przygotowaniu

---

# Klaster 1 — Tekst

## Priorytet: bardzo wysoki

- [x] Jak pobrać tekst po znaku w Excelu?
- [x] Jak usunąć pierwsze znaki w Excelu?
- [x] Jak usunąć ostatnie znaki w Excelu?
- [x] Jak pobrać tekst przed znakiem w Excelu?
- [x] Jak pobrać tekst między dwoma znakami w Excelu?
- [x] Jak podzielić tekst po przecinku w Excelu?
- [x] Jak połączyć tekst z kilku komórek?
- [x] Jak sprawdzić, czy komórka zawiera tekst?
- [x] Jak policzyć wystąpienia tekstu?
- [x] Jak zamienić fragment tekstu?

Docelowy hub:
- [x] Formuły tekstowe w Excelu

Powiązane funkcje:
- [x] TEKST.PO
- [x] TEKST.PRZED
- [ ] LEWY
- [ ] PRAWY
- [ ] FRAGMENT.TEKSTU
- [ ] DŁ
- [ ] ZNAJDŹ
- [ ] SZUKAJ.TEKST
- [ ] ZASTĄP
- [ ] PODSTAW

---

# Klaster 2 — Daty i czas

## Priorytet: wysoki

- [x] Różnica między datami w Excelu
- [x] Liczba dni między datami
- [x] Liczba miesięcy między datami
- [x] Data na nazwę miesiąca
- [x] Numer tygodnia w Excelu
- [x] Poniedziałek z numeru tygodnia
- [x] Pierwszy dzień miesiąca
- [x] Ostatni dzień miesiąca
- [x] Dodawanie miesięcy do daty
- [x] Liczba dni roboczych

Docelowy hub:
- [x] Daty i czas w Excelu

Powiązane funkcje:
- [ ] DATA
- [ ] DZIŚ
- [ ] TERAZ
- [ ] NUM.TYG
- [ ] NR.SER.OST.DN.MIES
- [ ] NR.SER.DATY
- [ ] DATA.RÓŻNICA
- [ ] DNI.ROBOCZE

---

# Klaster 3 — Wyszukiwanie danych

## Priorytet: bardzo wysoki

- [x] X.WYSZUKAJ — podstawowy przykład
- [x] X.WYSZUKAJ z dwoma warunkami
- [x] X.WYSZUKAJ z kilkoma warunkami
- [x] X.WYSZUKAJ w lewo
- [x] X.WYSZUKAJ — kilka wyników
- [x] X.WYSZUKAJ — najbliższa wartość
- [x] X.WYSZUKAJ — co zrobić przy braku wyniku
- [x] WYSZUKAJ.PIONOWO z dwoma warunkami
- [x] INDEKS + PODAJ.POZYCJĘ
- [x] Jak znaleźć wartość w tabeli?

Docelowy hub:
- [x] Wyszukiwanie danych w Excelu

Powiązane funkcje:
- [x] X.WYSZUKAJ
- [ ] WYSZUKAJ.PIONOWO
- [ ] INDEKS
- [ ] PODAJ.POZYCJĘ
- [x] FILTRUJ

---

# Klaster 4 — JEŻELI i logika

Status: ukończony i rozbudowany o praktyczne przykłady oraz przypadki graniczne (2026-10-08).

- [x] JEŻELI — podstawowy przykład
- [x] JEŻELI z kilkoma warunkami
- [x] JEŻELI + ORAZ
- [x] JEŻELI + LUB
- [x] JEŻELI — komórka pusta
- [x] JEŻELI — komórka zawiera tekst
- [x] JEŻELI — data większa niż / terminy
- [x] kilka zagnieżdżonych JEŻELI
- [x] JEŻELI.BŁĄD
- [x] wynik TAK/NIE na podstawie warunku
- [x] warunki mieszane ORAZ/LUB
- [x] JEŻELI i progi liczbowe
- [x] diagnostyka błędów formuł

Hub:
- [x] Warunki i logika w Excelu — 11 powiązanych poradników
- [x] Link do generatora JEŻELI i szybkie przejścia do powiązanych instrukcji

---

# Klaster 5 — Liczenie i sumowanie

Status: zrealizowany w kodzie repozytorium (12 wpisów w src/data/articleClusters.js; aktualizacja planu 2026-10-08).

- [x] LICZ.JEŻELI — podstawy, tekst, progi liczbowe
- [x] LICZ.WARUNKI — wiele kryteriów
- [x] SUMA.JEŻELI — podstawy
- [x] SUMA.WARUNKÓW — wiele kryteriów, daty i tekst
- [x] policz unikalne wartości
- [x] policz niepuste komórki
- [x] tabela przestawna — podstawy
- [x] tabela przestawna — suma, średnia i licznik
- [ ] suma tylko widocznych komórek (rozszerzenie)
- [ ] suma według miesiąca (rozszerzenie)

Hub: /formuly/liczenie/

---

# Klaster 6 — Formuły dynamiczne

Status: zrealizowany w kodzie repozytorium (10 wpisów w src/data/articleClusters.js; aktualizacja planu 2026-10-08).

- [x] FILTRUJ — przykład, wiele warunków, LUB
- [x] UNIKATOWE — podstawy i kilka kolumn
- [x] SORTUJ — podstawy
- [x] SORTUJ.WEDŁUG
- [x] SEKWENCJA
- [x] zakres rozlany i operator #
- [x] FILTRUJ + SORTUJ + UNIKATOWE
- [ ] dynamiczna lista rozwijana (rozszerzenie)

Hub: /formuly/dynamiczne/

---

# Klaster 7 — Dane i listy

Etap v1 wdrożony 2026-10-08: 6 poradników, hub oraz dwa bezpłatne ćwiczenia XLSX.

- [x] Jak znaleźć duplikaty?
- [x] Jak usunąć duplikaty?
- [x] Lista rozwijana w Excelu
- [x] Zależna lista rozwijana
- [x] Liczby zapisane jako tekst
- [x] Jak usunąć zbędne spacje?
- [ ] Wybór wielu pozycji z listy (temat rozszerzony, może wymagać VBA)
- [ ] Blokada wprowadzania danych
- [ ] Zamiana przecinka na kropkę
- [ ] Zaawansowane czyszczenie danych z CSV

Hub: /formuly/dane/
Pliki: /downloads/przyklady/dane-duplikaty-czyszczenie.xlsx i /downloads/przyklady/dane-listy-rozwijane.xlsx

---

# Klaster 8 — Formatowanie

Status: formatowanie v1 opracowane 2026-10-08: 10 poradników, hub, generator reguł i 2 ćwiczenia XLSX.

- [x] kolor komórki na podstawie wartości
- [x] formatowanie warunkowe całego wiersza
- [x] formatowanie warunkowe dat — terminy w 7 dni
- [x] zaznacz przeterminowane daty (z kontrolą statusu)
- [x] naprzemienne kolory wierszy
- [x] ukrywanie zer
- [x] liczba z jednostką
- [x] godziny powyżej 24
- [x] miesiąc słownie
- [x] własny format daty

Hub: /formuly/formatowanie/
Generator: /narzedzia/generator-formatowania-warunkowego/
Pliki: /downloads/przyklady/formatowanie-warunkowe-przyklady.xlsx oraz /downloads/przyklady/formatowanie-liczb-dat-przyklady.xlsx

---

# Klaster 9 — VBA

- [x] VBA — ostatni wiersz
- [x] VBA — ostatnia kolumna
- [x] VBA — pętla po wierszach
- [x] VBA — pętla po arkuszach
- [x] VBA — kopiowanie danych
- [x] VBA — kopiowanie między arkuszami
- [x] VBA — otwieranie pliku
- [x] VBA — wybór pliku
- [x] VBA — zapis pliku
- [x] VBA — eksport do PDF
- [ ] VBA — tworzenie arkusza
- [ ] VBA — usuwanie arkusza
- [ ] VBA — sprawdzenie, czy arkusz istnieje
- [ ] VBA — znajdowanie wartości
- [ ] VBA — filtrowanie tabeli
- [ ] VBA — sortowanie danych
- [ ] VBA — usuwanie pustych wierszy
- [x] VBA — wysyłanie maila przez Outlook
- [ ] VBA — załącznik w Outlook
- [x] VBA — przyspieszanie makra

---

# Baza funkcji — pierwszy etap

- [x] JEŻELI
- [ ] ORAZ
- [ ] LUB
- [ ] JEŻELI.BŁĄD
- [x] X.WYSZUKAJ
- [x] FILTRUJ
- [x] UNIKATOWE
- [x] SORTUJ
- [x] TEKST.PO
- [x] TEKST.PRZED
- [ ] LEWY
- [ ] PRAWY
- [ ] FRAGMENT.TEKSTU
- [ ] DŁ
- [ ] ZNAJDŹ
- [ ] LICZ.JEŻELI
- [x] LICZ.WARUNKI
- [ ] SUMA.JEŻELI
- [x] SUMA.WARUNKÓW

---

# Narzędzia — backlog treści/funkcji

- [x] Generator JEŻELI
- [x] Generator X.WYSZUKAJ
- [x] Generator SUMA.WARUNKÓW
- [x] Generator LICZ.WARUNKI
- [x] Numer kolumny → litera
- [x] Litera kolumny → numer
- [x] Kalkulator dat Excel
- [x] Generator formatów niestandardowych

---

# Szablony — pierwszy etap

- [x] Budżet domowy XLSX
- [x] Lista zadań XLSX
- [x] Ewidencja czasu pracy XLSX
- [x] Strony z podglądem przed pobraniem
- [x] Instrukcja i informacja o wersji Excela

---

# Zasada priorytetyzacji

Przed uruchomieniem Search Console:
1. Tekst
2. Wyszukiwanie
3. Daty
4. JEŻELI / logika
5. Liczenie / sumowanie
6. Formuły dynamiczne
7. Dane
8. Formatowanie
9. VBA

Po zebraniu danych z Search Console kolejność może się zmienić na podstawie:
- liczby wyświetleń,
- średniej pozycji,
- CTR,
- liczby nowych zapytań,
- potencjału całego klastra.
