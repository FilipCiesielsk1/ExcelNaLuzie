---
layout: ../../layouts/FunctionLayout.astro
slug: "teraz"
---

## Do czego służy TERAZ?

TERAZ przydaje się do obliczania czasu od ostatniej aktualizacji oraz pokazywania bieżącego znacznika czasowego w raportach.

<div class="formula">=TERAZ()</div>

## Co oznacza wynik?

Pierwszy przykład zwraca datę i godzinę. Druga formuła odejmuje początek bieżącego dnia, dając samą część godzinową jako ułamek doby.

## Praktyczny wariant

<div class="formula">=TERAZ()-DZIŚ()</div>

`TERAZ()-DZIŚ()` pozostawia ułamek doby, czyli samą godzinę zapisaną jako liczbę. Wynik warto sformatować jako czas, inaczej możesz zobaczyć np. `0,5` zamiast `12:00`.

## Najczęstsze pułapki

Funkcja aktualizuje się przy przeliczeniu i nie utrwala chwili wpisu. Format komórki decyduje, czy widzisz godzinę, datę czy obie informacje.

## Sprawdź na konkretnych danych

Gdy zegar wskazuje **12:00**, `=TERAZ()-DZIŚ()` jest bliskie **0,5**, co po formatowaniu `gg:mm` wyświetli się jako **12:00**. Funkcja TERAZ aktualizuje wynik przy przeliczeniu arkusza; nie nadaje się do trwałego zapisywania momentu utworzenia rekordu.

## Zastosowanie w praktyce

TERAZ jest funkcją zmienną, dlatego nadaje się do obliczeń opartych na aktualnym czasie, ale nie do tworzenia niezmiennego dziennika zdarzeń. W aplikacji do obsługi zleceń możesz nią wyświetlać bieżący czas, a nawet obliczać przybliżony czas, jaki minął od otrzymania zgłoszenia. Jednak samo przeliczenie arkusza może zaktualizować wartość, więc wynik zapisany jako formuła nie jest dowodem, kiedy użytkownik faktycznie wykonał czynność. W raportach dla innych osób sprawdź również format liczby i ustawienia przeliczania. Wynik `TERAZ()-DZIŚ()` to część doby, a nie niezależny znacznik godzinowy. Jeśli potrzebujesz przechowywać datę i godzinę zatwierdzenia operacji, zapisz stałą wartość w chwili jej wykonania.
