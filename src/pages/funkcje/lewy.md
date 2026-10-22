---
layout: ../../layouts/FunctionLayout.astro
slug: "lewy"
---

## Kiedy używać funkcji LEWY?

LEWY pomaga wydzielać prefiksy produktów, oznaczenia oddziałów i początkowe segmenty identyfikatorów o stałej konstrukcji.

<div class="formula">=LEWY(A2;3)</div>

## Jak odczytać wynik?

Pierwszy przykład zwraca trzy początkowe znaki kodu z A2. Drugi pobiera fragment przed myślnikiem, więc działa również wtedy, gdy prefiks ma zmienną długość.

## Rozszerzony przykład

<div class="formula">=LEWY(A2;ZNAJDŹ("-";A2)-1)</div>

ZNAJDŹ zwraca numer pozycji myślnika, a odjęcie jedynki pomija separator. Dzięki temu LEWY wydziela prefiks niezależnie od liczby znaków przed myślnikiem.

## Typowe błędy

Liczba znaków nie może być ujemna. Jeżeli w napisie brak myślnika, połączona funkcja ZNAJDŹ zwróci błąd. W takiej sytuacji warto użyć JEŻELI.BŁĄD.

## Sprawdź na konkretnych danych

Jeżeli A2 to `REGION-2026`, `=LEWY(A2;ZNAJDŹ("-";A2)-1)` zwróci **REGION**. Dla `REGION2026` wystąpi błąd, bo myślnika nie ma. Jeśli rekordy bywają niekompletne, użyj `=JEŻELI.BŁĄD(LEWY(A2;ZNAJDŹ("-";A2)-1);A2)`.

## Zastosowanie w praktyce

Jeżeli numery produktów rozpoczynają się od dwuliterowego symbolu kraju lub oddziału, LEWY może szybko utworzyć dodatkową kolumnę do grupowania. Dla stałej długości prefiksu podaj konkretną liczbę znaków. Gdy oddziały używają identyfikatorów o różnej długości, lepiej szukać separatora, tak jak w drugim przykładzie. Jeśli separator pojawia się również w samym prefiksie, taka reguła nie będzie jednoznaczna. Przed podziałem danych warto więc ustalić formalny schemat kodu i sprawdzić rekordy odstające. LEWY zwraca tekst, a nie liczbę. Dzięki temu zachowuje zera wiodące, co jest szczególnie ważne dla oznaczeń magazynowych i kodów produktów. Nie konwertuj takich identyfikatorów na liczby bez potrzeby.
