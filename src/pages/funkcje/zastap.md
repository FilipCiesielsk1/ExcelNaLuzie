---
layout: ../../layouts/FunctionLayout.astro
slug: "zastap"
---

## Kiedy używać funkcji ZASTĄP?

Sprawdza się przy maskowaniu początku identyfikatorów lub podmianie konkretnego segmentu kodu o znanej strukturze.

<div class="formula">=ZASTĄP(A2;1;3;"XXX")</div>

## Jak odczytać wynik?

Pierwszy przykład maskuje pierwsze trzy znaki. Drugi usuwa dwa znaki od czwartej pozycji i wstawia myślnik, przez co długość tekstu może się zmienić.

## Rozszerzony przykład

<div class="formula">=ZASTĄP(A2;4;2;"-")</div>

ZASTĄP wymienia fragment na podstawie pozycji i długości, a nie na podstawie wyszukiwanego tekstu. Jeżeli długość kodów różni się między wierszami, sztywne numery znaków mogą modyfikować niewłaściwy fragment.

## Typowe błędy

Trzeci argument określa długość usuwanego fragmentu, a nie długość nowego napisu. Gdy struktura kodu jest zmienna, sztywne pozycje nie są bezpieczne.

## Sprawdź na konkretnych danych

Jeżeli A2 = `ABC12345`, `=ZASTĄP(A2;1;3;"XXX")` zwróci **XXX12345**, a `=ZASTĄP(A2;4;2;"-")` zwróci **ABC-345**. Do zamiany konkretnych znaków lub wyrazów niezależnie od pozycji służy PODSTAW.
