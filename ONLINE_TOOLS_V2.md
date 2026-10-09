# Narzędzia online v2 — 2026-10-09

## Zakres

Cztery nowe narzędzia, działające całkowicie w przeglądarce i bez konta:

| Narzędzie | Adres | Funkcja |
|---|---|---|
| Czyszczenie danych | /narzedzia/czyszczenie-danych/ | Twarde spacje, znaki sterujące, powtórzone spacje, formuła Excel 2016+ |
| Tekst na kolumny | /narzedzia/tekst-na-kolumny/ | CSV / TSV, automatyczny separator, cudzysłowy, podgląd, CSV UTF-8 |
| Usuwanie duplikatów | /narzedzia/usuwanie-duplikatow/ | Wybór klucza, zachowanie pierwszego wystąpienia, podgląd, CSV |
| Kalkulator czasu pracy | /narzedzia/kalkulator-czasu-pracy/ | Zmiana przez północ, przerwa, godziny dziesiętne, nadgodziny i formuły |

## Weryfikacja

- Silnik obliczeń: \`src/utils/dataTools.js\`
- Testy jednostkowe: \`npm run test:data-tools\`
- Pełny pipeline: \`npm run build\` (testy, walidacja treści i linków, budowa Astro, SEO, Pagefind).
- Nowe strony mają własne tytuły i opisy SEO oraz WebApplication + BreadcrumbList JSON-LD.
- Katalog narzędzi liczy teraz 19 pozycji, z kategoriami i filtrowaniem.
- Narzędzia połączone z pasującymi poradnikami i funkcjami.

## Ograniczenia i bezpieczeństwo

- Nie przesyłamy wprowadzonych danych na serwer; operacje wykonują się w JavaScript przeglądarki.
- Nie są tworzone pliki XLSX: CSV UTF-8 (ze znacznikiem BOM) można otworzyć w Excelu.
- Przy eksporcie i kopiowaniu tabel wartości zaczynające się od znaków formuł Excel (\`=\`, \`+\`, \`-\`, \`@\`) są poprzedzane apostrofem, by ograniczyć ryzyko wykonania formuły.
- CSV / TSV: limit 1 000 000 znaków i 5000 wierszy.
- Podgląd tabel pokazuje do 10 wierszy, ale eksport obejmuje cały przetworzony wynik.
- Duplikaty: zachowujemy pierwsze wystąpienie, bez rozstrzygania konfliktów pozostałych kolumn.
- Czas pracy: jedna zmiana krótsza niż 24 h; nadwyżka ponad normę jest obliczeniem arytmetycznym, nie ustaleniem prawnym.
- Czyszczenie tekstu: formuła Excel \`OCZYŚĆ\` usuwa ASCII 0–31, nie wszystkie znaki Unicode.
- Nie zmieniono istniejących plików XLSX ani logo V1.
