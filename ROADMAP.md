# ExcelNaLuzie.pl — ROADMAP

## Cel projektu
Zbudować szybki, statyczny portal o Excelu nastawiony na ruch organiczny z Google.

Główna zasada serwisu:

> Najpierw rozwiązanie. Potem wyjaśnienie.

Serwis ma pomagać użytkownikowi rozwiązać konkretny problem w Excelu możliwie szybko, bez zbędnego wstępu.

---

## Stack technologiczny

- Astro
- statyczny HTML
- Markdown dla poradników
- JavaScript tylko tam, gdzie daje realną funkcję
- Pagefind jako wyszukiwarka
- GitHub jako repozytorium
- GitHub Actions jako CI/CD
- GitHub Pages jako hosting
- docelowa domena: ExcelNaLuzie.pl

---

## Status projektu

### Fundament techniczny
- [x] Repozytorium GitHub
- [x] Astro
- [x] GitHub Pages
- [x] automatyczny deploy przez GitHub Actions
- [x] obsługa ścieżki /ExcelNaLuzie/ dla GitHub Pages
- [x] Pagefind
- [x] sitemap
- [x] robots.txt
- [x] favicon
- [x] podstawowe metadata SEO
- [x] canonical URL
- [x] Open Graph / Twitter metadata
- [x] JSON-LD dla WebSite

### Design
- [x] strona główna
- [x] header
- [x] footer
- [x] responsywny layout
- [x] sekcja Formuły
- [x] sekcja Funkcje
- [x] sekcja VBA
- [x] sekcja Narzędzia
- [x] sekcja Szablony
- [x] wizualny styl inspirowany arkuszem Excela

### System artykułów
- [x] wspólny ArticleLayout
- [x] breadcrumbs
- [x] automatyczny H1
- [x] autor
- [x] data publikacji i aktualizacji
- [x] wersje Excela
- [x] poziom trudności
- [x] czas czytania
- [x] Article schema
- [x] BreadcrumbList schema
- [x] automatyczny spis treści
- [x] przycisk kopiowania formuł
- [x] powiązane materiały
- [x] wzorcowy templates/article-seo.md
- [x] AGENTS.md dla AI
- [x] walidacja treści przed buildem

---

## Kolejne etapy

### Etap 1 — pierwsza baza treści
- [x] ukończyć pierwszy klaster: operacje na tekście (10 poradników + hub)
- [x] ukończyć klaster: daty i czas (10 poradników + hub)
- [x] ukończyć klaster: wyszukiwanie danych (10 poradników + hub)
- [x] rozbudować linkowanie wewnętrzne między artykułami (automatyczna nawigacja poprzedni / hub / następny)
- [x] uzupełnić hub Formuły o wszystkie aktywne poradniki (dynamiczny katalog 30 poradników)

### Etap 2 — baza funkcji
- [ ] JEŻELI
- [ ] X.WYSZUKAJ
- [ ] FILTRUJ
- [ ] TEKST.PO
- [ ] TEKST.PRZED
- [ ] SUMA.WARUNKÓW
- [ ] LICZ.WARUNKI
- [ ] UNIKATOWE
- [ ] SORTUJ
- [ ] pozostałe funkcje według ruchu i zapytań

### Etap 3 — pierwsze narzędzia online
- [ ] Generator JEŻELI
- [ ] Generator X.WYSZUKAJ
- [ ] Generator SUMA.WARUNKÓW
- [ ] Generator LICZ.WARUNKI
- [ ] numer kolumny ↔ litera kolumny
- [ ] kalkulator dat Excel
- [ ] generator formatów niestandardowych

### Etap 4 — sekcja VBA
- [ ] ostatni wiersz
- [ ] ostatnia kolumna
- [ ] pętla po wierszach
- [ ] pętla po arkuszach
- [ ] kopiowanie danych
- [ ] otwieranie i wybór plików
- [ ] zapis pliku
- [ ] eksport do PDF
- [ ] wysyłanie maila przez Outlook
- [ ] przyspieszanie makr

### Etap 5 — szablony
- [ ] pierwsze pliki XLSX do poradników
- [ ] biblioteka darmowych szablonów
- [ ] podgląd pliku przed pobraniem
- [ ] oznaczenie wymaganej wersji Excela
- [ ] instrukcja użycia przy każdym pliku

### Etap 6 — produkcyjne SEO
- [ ] podpiąć domenę ExcelNaLuzie.pl
- [ ] Google Search Console
- [ ] przesłać sitemap
- [ ] Google Analytics lub alternatywna lekka analityka
- [ ] monitorować indeksowanie
- [ ] monitorować CTR
- [ ] monitorować pozycje i zapytania
- [ ] rozwijać klastry na podstawie danych Search Console

### Etap 7 — optymalizacja po danych
- [ ] aktualizować artykuły na pozycjach 5–20
- [ ] tworzyć nowe strony dla zapytań z dużą liczbą wyświetleń
- [ ] poprawiać title i description przy niskim CTR
- [ ] wzmacniać klastry, które zaczynają rosnąć
- [ ] usuwać lub scalać treści kanibalizujące te same frazy

---

## Zasady rozwoju

1. GitHub jest źródłem prawdy projektu.
2. Nie tworzymy masowo cienkich artykułów.
3. Jeden artykuł odpowiada jednej głównej intencji wyszukiwania.
4. Rozwiązanie pojawia się przed pierwszym H2.
5. Każda formuła musi mieć praktyczny przykład.
6. Treść ma być użyteczna również bez Google.
7. AI może przygotowywać i wdrażać treści, ale nie może obniżać jakości.
8. Nowe elementy nie mogą pogarszać szybkości strony bez ważnego powodu.
9. Priorytety po uruchomieniu Search Console ustalamy na podstawie realnych danych.
10. Przy każdej większej zmianie musi przejść poprawnie npm run build.
