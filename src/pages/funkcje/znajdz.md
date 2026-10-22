---
layout: ../../layouts/FunctionLayout.astro
slug: "znajdz"
---

## Kiedy używać funkcji ZNAJDŹ?

Przy dzieleniu kodów na części często trzeba najpierw ustalić, gdzie znajduje się myślnik, ukośnik albo inny separator.

<div class="formula">=ZNAJDŹ("-";A2)</div>

## Jak odczytać wynik?

Pierwszy przykład zwraca pozycję myślnika. Drugi wykorzystuje tę pozycję do wyciągnięcia prefiksu bez samego separatora.

## Rozszerzony przykład

<div class="formula">=LEWY(A2;ZNAJDŹ("-";A2)-1)</div>

Druga formuła korzysta z numeru separatora, aby pobrać wszystkie znaki przed nim. ZNAJDŹ rozróżnia wielkość liter, a brak separatora powoduje błąd, nie wynik równy zero.

## Typowe błędy

Brak frazy skutkuje błędem, a nie zerem. ZNAJDŹ rozróżnia wielkość liter, więc 'A' i 'a' nie są równoważne.

## Sprawdź na konkretnych danych

W A2 wpisz `PL-123`. `=ZNAJDŹ("-";A2)` zwróci **3**, a `=LEWY(A2;ZNAJDŹ("-";A2)-1)` da **PL**. Dla `PL123` bez separatora otrzymasz błąd. Do wyszukiwania bez rozróżniania wielkości liter użyj SZUKAJ.TEKST.
