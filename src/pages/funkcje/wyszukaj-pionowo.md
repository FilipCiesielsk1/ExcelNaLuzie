---
layout: ../../layouts/FunctionLayout.astro
slug: "wyszukaj-pionowo"
---

## Kiedy używać WYSZUKAJ.PIONOWO?

Klasyczne wyszukiwanie pionowe często występuje w starszych raportach sprzedaży. Pozwala pobrać cenę produktu po kodzie bez ręcznego przeszukiwania katalogu.

<div class="formula">=WYSZUKAJ.PIONOWO(F2;A2:C100;3;FAŁSZ)</div>

## Co oznacza wynik?

Pierwsza formuła zwraca wartość z trzeciej kolumny A:C dla klucza w F2. Drugi wariant pokazuje komunikat, jeśli identyfikatora nie ma w tabeli.

## Rozszerzony przykład

<div class="formula">=JEŻELI.BŁĄD(WYSZUKAJ.PIONOWO(F2;A2:C100;2;FAŁSZ);"Brak")</div>

Drugi wariant zwraca wartość z **drugiej** kolumny zakresu A:C, a nie z trzeciej jak pierwszy. JEŻELI.BŁĄD zwraca komunikat przy braku dopasowania, ale może też ukryć inne błędy formuły — sprawdzaj przyczynę.

## Na co uważać?

Bez argumentu FAŁSZ Excel może używać dopasowania przybliżonego i zwrócić złą wartość. WYSZUKAJ.PIONOWO nie potrafi wyszukiwać po lewej stronie kolumny klucza.

## Sprawdź na konkretnych danych

Przy tabeli A2:C4 z kodami w A, nazwami w B i cenami w C oraz kodzie szukanym w F2 formuła z numerem kolumny **3** zwróci cenę. Użyj `FAŁSZ`, by wymusić dokładne dopasowanie. Jeśli kopiujesz formułę, zablokuj tabelę: `=WYSZUKAJ.PIONOWO(F2;$A$2:$C$100;3;FAŁSZ)`.

## Zastosowanie w praktyce

Jeśli budujesz katalog produktów, wartość szukana powinna być unikatowym kodem, a nie luźną nazwą, którą kilka pozycji może dzielić. WYSZUKAJ.PIONOWO przeszukuje pierwszą kolumnę wskazanego zakresu, a wynik pobiera z kolumny o numerze przekazanym w trzecim argumencie. Gdy wstawisz dodatkową kolumnę wewnątrz tabeli, numer kolumny zwracanej może wymagać aktualizacji. Dodatkowo dopasowanie przybliżone bez argumentu FAŁSZ jest częstą przyczyną błędnych wyników. Jeśli po imporcie identyfikatory liczbowe stały się tekstem, sprawdź typy danych w obu zakresach. Zastosowanie JEŻELI.BŁĄD do ukrycia komunikatu o braku produktu powinno być świadome, aby nie przeoczyć błędów w samej formule.
