# UX/UI Polish v1 — 2026-10-09

Zakres ograniczony do czytelności, mobilnego dostępu i nawigacji, bez przebudowy identyfikacji wizualnej ani logo V1.

## Wprowadzone usprawnienia

1. **Wyszukiwarka na telefonie:** przycisk w nagłówku pozostaje widoczny przy szerokości do 720 px. Nadal działa globalne wyszukiwanie Pagefind, Ctrl+K i wyszukiwarka dostępna w menu.
2. **Mobilny spis treści:** na stronach poradników przy szerokości do 980 px zamiast niedostępnego bocznego panelu pojawia się rozwijany spis sekcji. Linki są budowane z tych samych nagłówków co na desktopie; wybór sekcji zamyka spis.
3. **Czytelność:** większe etykiety oraz metadane, wyraźniejsze focus ringi dla klawiatury, wygodniejsze pola dotykowe i obsługa preferencji ograniczenia animacji.
4. **Katalog narzędzi:** trzy kategorie filtrowania, widoczna liczba wyników i stan przycisków `aria-pressed`. Filtrowanie działa bez serwera i zachowuje wszystkie karty w DOM do indeksowania.
5. **Strona główna:** ograniczenie sekcji polecanych narzędzi do sześciu najbardziej przekrojowych propozycji; pełny katalog pozostaje dostępny osobnym odnośnikiem.
6. **Jasne nazewnictwo:** hub Formuły wyjaśnia, że prowadzi od problemu do rozwiązania, a baza Funkcje służy do sprawdzania składni i argumentów.

## Kontrola zmian

`npm run build` sprawdza treści i odnośniki, buduje strony oraz uruchamia walidację UI. Nowe testy w `scripts/validate-ui.mjs` potwierdzają obecność nowych kontrolek również w wygenerowanym HTML. 

### Granice tej iteracji

- Nie zmieniano logo ani ogólnej estetyki.
- Nie wprowadzano zmian w procesie płatności czy w gromadzeniu danych użytkowników.
- Testy automatyczne nie zastępują manualnego przejrzenia layoutu na telefonach i desktopie. Do następnej iteracji: przegląd ekranów 320, 375, 768, 1280 px i użyteczności formularzy.
