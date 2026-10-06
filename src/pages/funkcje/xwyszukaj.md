---
layout: ../../layouts/FunctionLayout.astro
slug: "xwyszukaj"
---

## Kiedy używać X.WYSZUKAJ?

X.WYSZUKAJ jest dobrym domyślnym wyborem, gdy chcesz znaleźć jeden rekord i zwrócić odpowiadającą mu wartość.

<div class="formula">=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")</div>

Excel szuka wartości z F2 w kolumnie A i zwraca wartość z tego samego wiersza w kolumnie C.

## Wyszukiwanie w lewo

Zakres wyniku nie musi znajdować się po prawej stronie zakresu wyszukiwania.

<div class="formula">=X.WYSZUKAJ(F2;C2:C100;A2:A100;"Brak wyniku")</div>

To jedna z najważniejszych przewag nad klasycznym WYSZUKAJ.PIONOWO.

## Brak dopasowania

Własny komunikat możesz wpisać bezpośrednio jako czwarty argument. Dzięki temu nie musisz otaczać typowej formuły dodatkowym JEŻELI.BŁĄD.

## Wiele pasujących wyników

X.WYSZUKAJ zwraca pojedyncze dopasowanie. Jeżeli potrzebujesz całej listy rekordów spełniających warunek, zwykle lepsza będzie funkcja FILTRUJ.
