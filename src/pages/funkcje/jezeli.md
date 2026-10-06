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
