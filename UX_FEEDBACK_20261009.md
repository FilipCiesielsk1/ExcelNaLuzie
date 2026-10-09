# Uwagi do strony ExcelNaLuzie — realizacja 2026-10-09

Źródło: przesłany plik `do poprawy.zip`, arkusz `excelnaluzie do poprawy.xlsx`, zrzuty `ss01.png`–`ss04.png`.

Zgłoszeń w arkuszu: **17**. Poniżej mapowanie każdej uwagi na zmianę w repozytorium.

| # | Obszar | Zmiana |
|---|---|---|
| 1 | Strona główna: `service-home-strip` | Wyróżniony ciemnozielony pas, większy tytuł i jasny przycisk prowadzący do formularza |
| 2 | Nawigacja: Poradniki | Nowa pozycja `Poradniki` i pełna strona `/poradniki/` z filtrowaniem artykułów |
| 3 | Nawigacja: Szablony i Współpraca | Kafelki w nagłówku i menu mobilnym z osobnym tłem |
| 4 | Stopka: Kontakt | Link `Kontakt` i nowa strona `/kontakt/` |
| 5 | Widoczność XLSX | Mocniej wyróżnione linki pobierania w artykułach i hubach |
| 6 | Funkcje: kolor X.WYSZUKAJ | Usunięte specjalne podświetlenie jednego kafelka |
| 7 | Funkcje: klikalność | Cała karta jest pojedynczym semantycznym linkiem (bez zagnieżdżonych odnośników) |
| 8 | Funkcje: „Jak czytać bazę” | Usunięto cały powtarzalny blok |
| 9 | VBA: „Standard poradników” | Usunięto cały powtarzalny blok |
| 10 | Narzędzia: „Bez instalacji...” | Usunięto fragment z głównego opisu |
| 11 | Narzędzia: „Wszystko liczy się lokalnie...” | Usunięto fragment z nagłówka katalogu |
| 12 | Narzędzia: „Jak to działa” | Usunięto cały powtarzalny blok |
| 13 | Szablony: opis biblioteki | Zaktualizowano zdanie zgodnie z uwagą |
| 14 | Współpraca: główny przycisk | Wyraźniejsze CTA kierujące prosto do formularza |
| 15 | Współpraca: „Nie musisz znać...” | Usunięto pierwsze zdanie, pozostał konkret |
| 16 | Współpraca: komunikat pod mailem | Usunięto |
| 17 | Współpraca: „Bez konta i załączników” | Usunięto |

## Decyzje techniczne

- Logo V1 i dotychczasowa paleta pozostają bez zmian.
- Nowe style CSS dodano do istniejącego osobnego arkusza `public/css/ux-polish-v1.css`, zamiast powiększać główny CSS.
- Nowy hub /poradniki/ indeksuje materiały Excel i VBA i nie duplikuje artykułów; linkuje do już istniejących adresów.
- Nowa strona Kontakt prezentuje publiczny e-mail i odsyła do istniejącego formularza, nie tworzy konkurencyjnego systemu przechwytywania danych.
- Niezbędne informacje dotyczące poufnych danych, dobrowolnego zapytania i polityki prywatności pozostają na stronie.
- `scripts/validate-ui.mjs` sprawdza obecność nowych stron i zaadresowanie zgłoszonych problemów.
- Testy statyczne nie zastępują ręcznego sprawdzenia wyglądu w przeglądarce.
