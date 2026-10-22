---
layout: ../../layouts/FunctionLayout.astro
slug: "czy-pusta"
---

## Kiedy używać CZY.PUSTA?

CZY.PUSTA pomaga odróżnić brak wpisu od wartości zero, co jest szczególnie ważne przy formularzach i walidacji danych pracowników lub zamówień.

<div class="formula">=CZY.PUSTA(A2)</div>

## Co oznacza wynik?

Dla komórki całkowicie pustej otrzymasz PRAWDA. Drugi przykład zwróci Brak dla pustego pola, a Uzupełniono dla pola zawierającego choćby zero.

## Rozszerzony przykład

<div class="formula">=JEŻELI(CZY.PUSTA(A2);"Brak";"Uzupełniono")</div>

Połączenie z JEŻELI pozwala przypisać etykietę do całkowicie pustego pola. Nie myl zera z brakiem wpisu: `0` to zawartość komórki, więc CZY.PUSTA zwróci FAŁSZ.

## Na co uważać?

Komórka z formułą zwracającą pusty tekst nie jest technicznie pusta i daje FAŁSZ. Do wykrywania także takiego stanu użyj porównania A2 z pustym napisem.

## Sprawdź na konkretnych danych

Wyczyść zawartość A2: `=CZY.PUSTA(A2)` da **PRAWDA**. Wpisz `0`: wynik zmieni się na **FAŁSZ**. Gdy A2 zawiera formułę `=""`, również dostaniesz **FAŁSZ**, bo w komórce jest formuła. Jeśli chcesz traktować wynik pustego tekstu jak brak wartości, rozważ `=A2=""`.

## Zastosowanie w praktyce

Załóżmy, że tworzysz listę zamówień, a kolumna A zawiera numer dokumentu. Całkowicie niewypełniona komórka różni się od pola, w którym ktoś wprowadził zero albo pojedynczą spację. CZY.PUSTA wykryje tylko rzeczywistą pustkę: spacja także jest zawartością. Jeśli numer dokumentu powstaje z formuły i chwilowo zwraca pusty napis, taka komórka również nie jest pusta w rozumieniu CZY.PUSTA. W raportach kontrolnych warto rozdzielić dwa pytania: czy komórka ma jakąkolwiek zawartość oraz czy użytkownik wpisał znaczącą wartość. Drugie pytanie może wymagać usunięcia zbędnych spacji lub porównania wyniku z pustym tekstem. Pozwala to uniknąć fałszywych informacji, że wszystkie pola zostały uzupełnione.
