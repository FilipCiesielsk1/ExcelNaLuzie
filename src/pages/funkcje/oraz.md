---
layout: ../../layouts/FunctionLayout.astro
slug: "oraz"
---

## Kiedy używać ORAZ?

ORAZ sprawdza kilka warunków i zwraca PRAWDA tylko wtedy, gdy wszystkie są spełnione jednocześnie.

<div class="formula">=ORAZ(B2>=100;C2="Tak")</div>

Taki test jest przydatny, gdy decyzja zależy od kilku kryteriów naraz, np. minimalnej sprzedaży i zatwierdzonego statusu.

## Najczęstsze połączenie z JEŻELI

Sama funkcja ORAZ zwraca PRAWDA albo FAŁSZ. W praktyce często umieszcza się ją wewnątrz JEŻELI:

<div class="formula">=JEŻELI(ORAZ(B2>=100;C2="Tak");"Premia";"Brak")</div>

Excel przyzna premię tylko wtedy, gdy oba testy są prawdziwe.

## Więcej niż dwa warunki

Możesz przekazać kolejne warunki:

<div class="formula">=ORAZ(B2>=100;C2="Tak";D2<>"")</div>

Tutaj dodatkowo wymagana jest niepusta komórka D2.

## ORAZ a LUB

ORAZ oznacza „wszystko naraz”. Jeżeli wystarczy spełnienie jednego z kilku warunków, potrzebujesz funkcji LUB.

To rozróżnienie warto ustalić przed pisaniem formuły. Wiele błędów logicznych wynika nie ze składni, lecz z nieprawidłowego opisania reguły biznesowej.

## Testuj każdy warunek osobno

Przy bardziej złożonej formule warto najpierw sprawdzić każdy test w osobnej komórce. Jeżeli B2>=100 i C2="Tak" zwracają oczekiwane wyniki, dopiero potem połącz je funkcją ORAZ.

## Kiedy ORAZ jest dobrym wyborem?

Gdy wszystkie kryteria dotyczą jednej decyzji: zamówienie musi być opłacone i zatwierdzone, pracownik musi osiągnąć próg i mieć odpowiedni status albo rekord musi mieć komplet kilku wymaganych pól.

Przy bardzo rozbudowanych regułach pomocnicze kolumny mogą być czytelniejsze niż jedna ogromna formuła.
