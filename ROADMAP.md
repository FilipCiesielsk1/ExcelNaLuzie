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
- domena produkcyjna: ExcelNaLuzie.pl

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
- [x] minimalny próg jakości treści w CI dla poradników i stron funkcji
- [x] rozbudowane 30 poradników o praktyczne przykłady, pułapki i warianty
- [x] rozbudowane strony 9 funkcji o praktyczne użycie

### Jakość, SEO techniczne i dostępność
- [x] własna strona 404 z noindex
- [x] automatyczna walidacja canonical, sitemap, robots i linków wewnętrznych po buildzie
- [x] structured data dla poradników, funkcji, VBA, narzędzi, szablonów i głównych katalogów
- [x] strona O serwisie i spójna tożsamość autora w schema.org
- [x] polityka prywatności
- [x] mobilna nawigacja
- [x] obsługa klawiatury: focus-visible i link „Przejdź do treści”
- [x] prefers-reduced-motion
- [x] aria-live dla dynamicznych wyników narzędzi

---

## Kolejne etapy

### Etap 1 — pierwsza baza treści
- [x] ukończyć pierwszy klaster: operacje na tekście (10 poradników + hub)
- [x] ukończyć klaster: daty i czas (10 poradników + hub)
- [x] ukończyć klaster: wyszukiwanie danych (10 poradników + hub)
- [x] rozbudować klaster: JEŻELI i logika (11 poradników + hub + nawigacja do generatora)
- [x] przygotować klaster: Dane i listy v1 (6 poradników + hub + 2 przykładowe XLSX)
- [x] rozbudować linkowanie wewnętrzne między artykułami (automatyczna nawigacja poprzedni / hub / następny)
- [x] uzupełnić hub Formuły o wszystkie aktywne poradniki (dynamiczny katalog 30 poradników)

- [x] zweryfikować faktyczny stan klastrów liczenie i formuły dynamiczne oraz zsynchronizować CONTENT_PLAN.md
- [x] przygotować klaster formatowanie v1 (10 poradników + hub + generator + 2 pliki XLSX)

### Etap 2 — baza funkcji
- [x] JEŻELI
- [x] X.WYSZUKAJ
- [x] FILTRUJ
- [x] TEKST.PO
- [x] TEKST.PRZED
- [x] SUMA.WARUNKÓW
- [x] LICZ.WARUNKI
- [x] UNIKATOWE
- [x] SORTUJ
- [ ] pozostałe funkcje według ruchu i zapytań

### Etap 3 — pierwsze narzędzia online
- [x] Generator JEŻELI
- [x] Generator X.WYSZUKAJ
- [x] Generator SUMA.WARUNKÓW
- [x] Generator LICZ.WARUNKI
- [x] numer kolumny ↔ litera kolumny
- [x] kalkulator dat Excel
- [x] generator formatów niestandardowych

### Narzędzia online v2 — 2026-10-09
- [x] czyszczenie tekstu i generowanie formuły Excel 2016+
- [x] konwerter tekstu CSV/TSV na kolumny z podglądem
- [x] usuwanie duplikatów po całym wierszu lub kolumnie klucza
- [x] kalkulator czasu pracy, przerw i zmian przez północ
- [x] katalog 19 narzędzi, linkowanie z poradnikami, indeksowanie w Pagefind
- [x] testy danych i zabezpieczenie CSV przed interpretacją formuł

### Etap 4 — sekcja VBA
- [x] ostatni wiersz
- [x] ostatnia kolumna
- [x] pętla po wierszach
- [x] pętla po arkuszach
- [x] kopiowanie danych
- [x] otwieranie i wybór plików
- [x] zapis pliku
- [x] eksport do PDF
- [x] wysyłanie maila przez Outlook
- [x] przyspieszanie makr

### Etap 5 — szablony
- [x] pierwsze pliki XLSX do poradników (3 pliki startowe)
- [x] biblioteka darmowych szablonów (3 szablony)
- [x] podgląd pliku przed pobraniem
- [x] oznaczenie wymaganej wersji Excela
- [x] instrukcja użycia przy każdym pliku

### Biblioteka Szablonów PRO v1 — 2026-10-09
- [x] przygotować generator sześciu profesjonalnych skoroszytów Excel z formułami, walidacjami i alertami
- [x] dodać sześć kart katalogu i sześć odrębnych podstron SEO z unikatowymi FAQ
- [x] dodać darmowe pobieranie, podglądy, przykładowe dane i instrukcje
- [x] walidować generowane skoroszyty w CI przed budową i publikacją
- [ ] rozbudować bibliotekę po danych z ruchu i uwagach użytkowników

### Etap 6 — produkcyjne SEO
- [x] podpiąć domenę ExcelNaLuzie.pl
- [x] Google Search Console
- [x] przesłać sitemap
- [x] Google Analytics lub alternatywna lekka analityka
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

## Strategia dalszego rozwoju — aktualizacja 2026-10-09

### Cel: dwa uzupełniające się kanały
1. **Ruch organiczny:** praktyczne poradniki, funkcje, narzędzia online i darmowe szablony.
2. **Pozyskiwanie zapytań o współpracę:** portfolio demonstracyjne, jasna oferta usług i ścieżka kontaktu.

**Stan wyjściowy:** brak projektów klientowskich, które można opublikować. Budujemy portfolio od podstaw na **autentycznie działających projektach demonstracyjnych**. Nie przedstawiamy ich jako zleceń wykonanych dla klientów i nie wymyślamy opinii, oszczędności, wdrożeń ani wyników biznesowych.

### Priorytet P0 — portfolio demonstracyjne (następny etap)
- [x] Utworzyć katalog `/realizacje/` i pierwszą podstronę projektu: problem, funkcje, przepływ pracy, wizualizacja KPI, CSV i CTA.
- [ ] Dodać rzeczywiste zrzuty ekranowe z Excela (obecnie dostępny jest podgląd HTML oparty na KPI) i ujednolicić szablon kolejnych realizacji.
- [x] Przygotować **Projekt 1: Sales Performance Dashboard PRO** i opublikować opis funkcji w portfolio (dostarczony skoroszyt XLSM i próbny CSV).
- [ ] Zweryfikować działanie przycisków, importu CSV, eksportu PDF i filtrów w desktopowym Excelu przed udostępnieniem skoroszytu do publicznego pobrania.
- [ ] Stworzyć **Demo 2: Automatyzacja raportowania VBA** (import CSV z folderu, walidacja danych, podsumowanie, log błędów, instrukcja, testy w Excelu Windows).
- [ ] Stworzyć **Demo 3: Planowanie transportu i zasobów** (kierowcy, pojazdy, dostępność, konflikty, harmonogram, raport; fikcyjne dane).
- [ ] Dla każdego projektu przygotować rzeczywiste zrzuty ekranu, opis architektury i funkcji, instrukcję oraz plik demonstracyjny po weryfikacji.
- [ ] Dodać wyraźną etykietę „Projekt demonstracyjny — nie realizacja klientowska” na kartach i podstronach.
- [x] Dodać linki „Realizacje” w nawigacji, stronie głównej, sekcji Współpraca i stopce oraz CTA „Zamów podobne rozwiązanie”.
- [x] Dodać unikatowe SEO (title, description, canonical, BreadcrumbList), linkowanie ze stroną Współpraca i testy builda.
- [ ] Rozwinąć połączenia kontekstowe z powiązanymi poradnikami o raportach i KPI.

**Definicja ukończenia:** trzy działające, samodzielnie zweryfikowane projekty, trzy czytelne case studies i sprawna ścieżka do formularza. Żadnych fikcyjnych klientów.

### Priorytet P1 — oferta i konwersja
- [ ] Uporządkować ofertę usług: Excel, VBA, raportowanie, automatyzacje, SQL i integracje — tylko rzeczywiście oferowane kompetencje.
- [ ] Dodać przykładowy proces współpracy: opis problemu → zakres → wycena → prototyp → testy → przekazanie.
- [ ] Doprecyzować formularz zapytania: problem, pliki/przykłady, wersja Excela, termin i opcjonalny budżet; nie wymagać przesyłania poufnych danych.
- [ ] Mierzyć wyświetlenia portfolio, przejścia do kontaktu i wysłane zapytania z poszanowaniem prywatności.
- [ ] Dopiero po realnych danych rozważyć cennik, pakiety i sposoby monetyzacji; **rozliczenia podatkowe i wznowienie działalności odłożone do decyzji użytkownika**.

### Priorytet P2 — rozwój treści i narzędzi
- [ ] Rozbudowywać poradniki i narzędzia wokół problemów pokazywanych w portfolio: dashboardy, raportowanie, CSV, walidacja, magazyn, logistyka.
- [ ] Dodawać użyteczne przykłady, testy i linki „Poradnik → Narzędzie → Demo → Współpraca”, bez nadmiernych CTA.
- [ ] Rozwijać nowe narzędzia online tylko wtedy, gdy rozwiązują odrębny problem użytkownika i mają testy.
- [ ] Monitorować indeksowanie, wyświetlenia, CTR i zapytania w Google Search Console; decyzje contentowe podejmować na podstawie danych.

### Priorytet P3 — biblioteka szablonów po testach
- [ ] Zaczekać na testy sześciu Szablonów PRO przez użytkownika; **do tego czasu nie modyfikować plików XLSX ani ich generatora**.
- [ ] Po testach poprawić zgłoszone błędy, zweryfikować kompatybilność Excel 2016/2021 i dopiero wtedy rozbudować linkowanie poradników do szablonów.
- [ ] Nie zmieniać logo V1 ani obecnej zielonej identyfikacji wizualnej bez wyraźnej decyzji.

### Zasady jakości portfolio
- Demo musi działać; nie publikujemy samej makiety jako ukończonego systemu.
- Każdy przykład wykorzystuje wyłącznie dane syntetyczne lub jawnie dopuszczone do publikacji.
- Nie używamy nazw, logotypów, referencji i historii prawdziwych klientów bez ich zgody.
- Korzyści opisujemy jakościowo; liczby tylko gdy są zmierzone i opatrzone metodologią.
- Przed wdrożeniem: testy, build, przegląd mobilny, dostępność, SEO i kontrola linków.
- Rozwój portfolio nie blokuje obecnej publikacji poradników i narzędzi.

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
