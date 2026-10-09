# ExcelNaLuzie — Szablony PRO v1

**Sześć dodatkowych plików XLSX** tworzonych automatycznie przed budową strony (nie trzeba dodawać plików binarnych do Git).

| Szablon | Plik | Arkusze | Użytkowe funkcje |
|---|---|---|---|
| Dashboard sprzedaży | dashboard-sprzedazy.xlsx | Dashboard / Sprzedaż / Cele / Instrukcja | SUMIFS, marża, cele miesięczne, filtr roku |
| Harmonogram Gantta | harmonogram-gantta.xlsx | Dashboard / Harmonogram / Zespół / Instrukcja | Oś czasu i terminy, automatyczne statusy |
| Magazyn i stany | magazyn-stany.xlsx | Dashboard / Produkty / Ruchy / Instrukcja | Ruchy po SKU, progi minimalne, alerty |
| Faktury | kontrola-faktur.xlsx | Dashboard / Faktury / Kontrahenci / Instrukcja | VAT, płatności częściowe, zaległości |
| CRM | crm-sprzedaz.xlsx | Dashboard / Szanse / Kontakty / Instrukcja | Etapy, prognoza ważona, pilne kontakty |
| Oferty | kalkulator-ofert.xlsx | Dashboard / Kalkulator / Cennik / Instrukcja | VLOOKUP cennik, rabaty, VAT, marża |

## Technika

- Generator: `scripts/generate-pro-templates.mjs`
- Test: `scripts/test-pro-templates.mjs`
- Pipeline: `npm run build` najpierw generuje i testuje pliki, później buduje stronę i sprawdza odnośniki.
- Biblioteka i strony SEO: `src/data/templateCatalog.js`, `src/pages/szablony/[slug].astro`
- Wersja kompatybilności: Microsoft Excel 2016+
- Formuły zapisane w pliku XLSX są po angielsku zgodnie z formatem OOXML; po otwarciu polski Excel wyświetla lokalne nazwy i średniki.
- Dane demonstracyjne są fikcyjne. Żaden szablon nie uruchamia makr ani nie przesyła danych.

## Zakres i świadome ograniczenia

- Dashboardy zawierają **dynamiczne zestawienia KPI**, a harmonogram Gantta używa kolorowania komórek jako widoku osi czasu.
- Zamiast makr lub zależności od Microsoft 365 zastosowano klasyczne formuły (m.in. SUMIFS, COUNTIFS, IF, VLOOKUP).
- Wersja v1 nie zawiera wykresów osadzonych w obiektach Excel (są zestawienia i warunkowe formatowanie); można je dodać w kolejnej iteracji.
- Obliczenia z formułą TODAY odświeżają się po otwarciu pliku w Excelu.
- W przygotowanych obszarach jest określona liczba wierszy; dla większych baz należy rozbudować zakresy.
- Plik kontroli faktur jest rejestrem pomocniczym, nie zastępuje księgowości.
