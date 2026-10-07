---
layout: ../../layouts/FunctionLayout.astro
slug: "lub"
---

## Kiedy używać LUB?

LUB sprawdza kilka warunków i zwraca PRAWDA, gdy co najmniej jeden z nich jest spełniony.

<div class="formula">=LUB(B2="VIP";C2="Pilne")</div>

Jeżeli klient jest VIP albo sprawa ma status Pilne, wynik testu będzie równy PRAWDA.

## LUB wewnątrz JEŻELI

Najczęściej funkcję wykorzystuje się do sterowania konkretnym wynikiem:

<div class="formula">=JEŻELI(LUB(B2="VIP";C2="Pilne");"Priorytet";"Standard")</div>

Wystarczy spełnienie jednego z dwóch kryteriów.

## Kilka dopuszczonych wartości

LUB dobrze sprawdza się przy statusach:

<div class="formula">=LUB(A2="Nowe";A2="W toku";A2="Wstrzymane")</div>

Taki test może grupować kilka różnych wartości w jedną kategorię.

## LUB a ORAZ

Najprościej odczytać regułę zwykłym zdaniem. „Klient jest VIP albo zamówienie jest pilne” oznacza LUB. „Klient jest VIP i zamówienie jest opłacone” oznacza ORAZ.

## Zbyt szeroki warunek

Im więcej alternatyw dodasz, tym częściej funkcja zwróci PRAWDA. Przy długiej liście testów sprawdź przypadek, w którym żaden warunek nie jest spełniony. To pomaga wychwycić warunek, który przypadkiem obejmuje zbyt wiele rekordów.

## Łączenie z ORAZ

W bardziej złożonych regułach możesz grupować obie funkcje:

<div class="formula">=ORAZ(B2>=100;LUB(C2="VIP";D2="Pilne"))</div>

Tutaj próg 100 jest obowiązkowy, ale drugi element może być spełniony na dwa sposoby.

LUB jest szczególnie przydatne przy alternatywnych statusach, kategoriach i wyjątkach od głównej reguły.
