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

Drugi zapis łączy funkcję WYSZUKAJ.PIONOWO z innymi elementami formuły. Wybieraj taki wariant tylko wtedy, gdy rozumiesz, które komórki zawierają dane wejściowe, a które parametry. Zastąp przykładowe adresy adresami z własnego arkusza.

## Na co uważać?

Bez argumentu FAŁSZ Excel może używać dopasowania przybliżonego i zwrócić złą wartość. WYSZUKAJ.PIONOWO nie potrafi wyszukiwać po lewej stronie kolumny klucza.

## Sprawdzanie wyniku na własnych danych

Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych. Nie zaczynaj od całej tabeli: wybierz rekord, dla którego potrafisz przewidzieć wynik, a następnie porównaj go z Excelem. Sprawdź także brak danych oraz sytuację graniczną, np. wartość spoza słownika albo nietypowy format tekstu. Pozwoli to szybciej zidentyfikować błędne odwołanie.

Jeśli kopiujesz obliczenia na kolejne wiersze, dopilnuj odpowiednich adresów komórek. Zakresy stałe można zablokować znakami dolara, a odwołania do danych bieżącego rekordu pozostawić względne. Zwróć też uwagę na format wyniku: data, tekst i liczba mogą wyglądać podobnie, lecz różnie zachowują się podczas dalszego obliczania. W raportach zachowuj kolumny źródłowe, aby móc prześledzić skąd wziął się wynik.
