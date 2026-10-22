# Audyt merytoryczny biblioteki 53 funkcji Excel

**Data:** 22.10.2026  
**Zakres:** `src/pages/funkcje/*.md` (53 strony) oraz wspólne metadane `src/data/functionCatalog.js` i `FunctionLayout.astro`.

## Podsumowanie

- Zweryfikowano treść wszystkich **53 stron** pod kątem znaczenia funkcji, przykładów, komunikatów błędów, ograniczeń wersji i powtórzeń.
- **32 strony:** usunięto ogólnikowe, jednakowe akapity; zastąpiono je konkretnymi scenariuszami wejście → oczekiwany wynik oraz pułapkami odpowiedniej funkcji.
- **9 stron:** usunięto powtarzające się sekcje i formuły, zachowując niezależne przykłady i praktyczne zastosowania.
- **2 strony:** doprecyzowano wliczanie dni granicznych (DNI.ROBOCZE) i usunięto osierocony znacznik cytowania przy DATA.RÓŻNICA, zastępując go linkiem do Microsoft.
- **10 stron:** nie wymagało edycji na tym etapie.
- Dodano `scripts/audit-functions-content.mjs`, włączony do `npm run build` i `npm run validate`; sprawdza katalog i metadane, duplikaty nagłówków, obecność formuł, szablonowe zwroty i osierocone cytowania.

## Ważne ustalenia merytoryczne

1. `=CZY.LICZBA(SZUKAJ.TEKST("fraza";A2))` **działa poprawnie**: zwraca PRAWDA przy znalezieniu i FAŁSZ przy braku frazy; nie potrzebuje automatycznego otaczania JEŻELI.BŁĄD. Wcześniejsza sugestia, że formuła sama zwróci błąd, była nieprawidłowa.
2. DNI.ROBOCZE liczy **oba dni graniczne**, o ile są dniami roboczymi i nie występują na liście świąt.
3. DATA.RÓŻNICA z jednostką `MD` ma udokumentowane ograniczenia i nie powinna być bezrefleksyjnie używana w krytycznych obliczeniach.
4. Zauważono i usunięto z wybranych stron powtarzalne formuły i akapity, które nie dodawały informacji dla czytelnika.
5. Bieżący audyt jest **przeglądem treści i kodu źródłowego**, nie testem każdej formuły w uruchomionym Excelu. Nie potwierdza też sam w sobie indeksacji przez Google.

## Wykaz 53 stron

| Strona `/funkcje/…/` | Wynik audytu |
|---|---|
| `czy-liczba` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `czy-pusta` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `data` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `data-roznica` | Korekta konkretnego fragmentu merytorycznego lub źródła |
| `dl` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `dni-robocze` | Korekta konkretnego fragmentu merytorycznego lub źródła |
| `dzien` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `dzien-tyg` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `dzis` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `filtruj` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `fragment-tekstu` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `ile-liczb` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `ile-niepustych` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `indeks` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `jezeli` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `jezeli-blad` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `lewy` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `licz-jezeli` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `licz-warunki` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `lub` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `max` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `miesiac` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `min` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `nr-ser-daty` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `nr-ser-ost-dn-mies` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `oraz` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `podaj-pozycje` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `podstaw` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `prawy` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `rok` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `sekwencja` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `sortuj` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `sortuj-wedlug` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `srednia` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `suma` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `suma-jezeli` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `suma-warunkow` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `szukaj-tekst` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `tekst` | Zachowano: treść specjalistyczna, bez istotnych duplikatów |
| `tekst-po` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `tekst-przed` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `teraz` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `unikatowe` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `usun-zbedne-odstepy` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `wybierz` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `wyszukaj-pionowo` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `wyszukaj-poziomo` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `xwyszukaj` | Usunięcie powtórzonych sekcji i doprecyzowanie opisu |
| `zaokr` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `zaokr-dol` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `zaokr-gora` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `zastap` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |
| `znajdz` | Nowy przykład liczbowy lub scenariusz brzegowy zamiast ogólnego wypełniacza |

## Kolejna kontrola jakości

- Wykonać punktowe testy w desktopowym Excelu 2016, 2021 oraz Microsoft 365 dla danych granicznych i różnic lokalizacji (szczególnie daty, wyszukiwanie, funkcje dynamiczne i formaty TEKST).
- Dopiero na podstawie rzeczywistych danych Google Search Console oceniać, czy edycje korelują ze wzrostem indeksacji; status „Zeskanowano — obecnie niezindeksowano” nie dowodzi automatycznie błędnej treści.

## Źródła referencyjne

- [Microsoft — funkcje CZY](https://support.microsoft.com/pl-pl/excel/functions/is-functions)
- [Microsoft — DATA.RÓŻNICA](https://support.microsoft.com/pl-pl/excel/functions/datedif-function)
- [Microsoft — DNI.ROBOCZE](https://support.microsoft.com/pl-pl/excel/functions/networkdays-function)
- [Microsoft — SZUKAJ.TEKST / ZNAJDŹ: obsługa braku dopasowania](https://support.microsoft.com/pl-pl/excel/how-to-correct-a-value-error-in-find-findb-and-search-searchb-functions)
