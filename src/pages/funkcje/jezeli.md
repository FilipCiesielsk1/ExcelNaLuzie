---
layout: ../../layouts/FunctionLayout.astro
slug: "jezeli"
---

## Kiedy używać JEŻELI?

Użyj JEŻELI, gdy wynik ma zależeć od odpowiedzi na pytanie typu „czy warunek jest spełniony?”.

<div class="formula">=JEŻELI(B2>=100;"Premia";"Brak premii")</div>

Jeżeli B2 ma wartość co najmniej 100, wynik to `Premia`. W przeciwnym razie Excel zwróci `Brak premii`.

## Tekst, liczby i puste komórki

JEŻELI może zwracać tekst, liczby, odwołania albo wyniki innych funkcji.

<div class="formula">=JEŻELI(A2="";"";A2*1,23)</div>

W tym przykładzie pusta komórka pozostaje pusta, a dla pozostałych wartości wykonywane jest obliczenie.

## Kilka warunków

Gdy kilka warunków musi być spełnionych jednocześnie, połącz JEŻELI z ORAZ. Gdy wystarczy jeden z warunków, użyj LUB.

Przy bardzo wielu wariantach nie warto budować długiego łańcucha zagnieżdżonych JEŻELI bez zastanowienia — często czytelniejsza będzie tabela wyszukiwania albo inna funkcja.

## Najczęstszy błąd

Tekst zwracany przez funkcję musi być zapisany w cudzysłowie. Liczby i odwołania do komórek cudzysłowu nie wymagają.

## JEŻELI z ORAZ i LUB

Warunek nie musi być pojedynczym porównaniem.

Jeżeli premia ma przysługiwać dopiero po spełnieniu dwóch kryteriów:

<div class="formula">=JEŻELI(ORAZ(B2>=100;C2="Tak");"Premia";"Brak premii")</div>

Jeżeli wystarczy spełnienie jednego z kilku kryteriów, użyj LUB.

## Pusta komórka to nie zawsze zero

Formuła:

<div class="formula">=JEŻELI(A2="";"";A2*1,23)</div>

najpierw sprawdza, czy A2 jest puste. Dzięki temu arkusz nie pokazuje zer w wierszach, w których użytkownik nie wpisał jeszcze danych.

W raportach warto świadomie rozróżniać pustą wartość, zero i tekst „Brak”, bo każde z nich może mieć inne znaczenie.

## Nie zagnieżdżaj bez końca

JEŻELI można umieszczać jedno w drugim, ale kilka poziomów szybko utrudnia czytanie i poprawianie formuły.

Jeśli masz wiele progów albo kategorii, rozważ tabelę pomocniczą z X.WYSZUKAJ albo inną funkcję dopasowaną do problemu.

## Tekst wpisuj w cudzysłowie

Wyniki tekstowe i kryteria tekstowe muszą być zapisane w cudzysłowie:

<div class="formula">=JEŻELI(A2="Tak";"Aktywne";"Nieaktywne")</div>

Liczby i odwołania do komórek cudzysłowów nie potrzebują.

## Testuj przypadki graniczne

Przy warunkach z >, >=, < i <= sprawdź dokładnie wartość graniczną.

Jeżeli próg wynosi 100, decyzja między >100 a >=100 zmienia wynik właśnie dla wartości 100 — i to jest częsty błąd w arkuszach biznesowych.
