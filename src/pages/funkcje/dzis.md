---
layout: ../../layouts/FunctionLayout.astro
slug: "dzis"
---

## Kiedy używać DZIŚ?

W rejestrze płatności i zadań DZIŚ pozwala automatycznie odnosić terminy do aktualnego dnia bez wpisywania daty ręcznie.

<div class="formula">=DZIŚ()</div>

## Co oznacza wynik?

Pierwszy przykład daje aktualną datę. Drugi oznacza terminy wcześniejsze niż dzisiaj jako spóźnione, natomiast bieżący dzień pozostaje w terminie.

## Rozszerzony przykład

<div class="formula">=JEŻELI(A2&lt;DZIŚ();"Po terminie";"W terminie")</div>

DZIŚ zwraca aktualną datę przy przeliczeniu arkusza, a JEŻELI porównuje ją z terminem w A2. Uwaga na puste A2: w takim porównaniu Excel może potraktować brak daty jak zero i oznaczyć pusty rekord jako zaległy.

## Na co uważać?

Funkcja jest zmienna: po przeliczeniu skoroszytu może zwrócić inną datę. Nie nadaje się do utrwalania daty zdarzenia na zawsze.

## Sprawdź na konkretnych danych

Sprawdź trzy przypadki: A2 z datą wczorajszą → **Po terminie**, A2 z datą jutrzejszą → **W terminie**, A2 puste → użyj bezpieczniejszej formuły `=JEŻELI(A2="";"Brak daty";JEŻELI(A2<DZIŚ();"Po terminie";"W terminie"))`.
