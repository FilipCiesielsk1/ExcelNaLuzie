---
layout: ../../layouts/FunctionLayout.astro
slug: "jezeli-blad"
---

## Do czego służy JEŻELI.BŁĄD?

JEŻELI.BŁĄD pozwala zastąpić techniczny błąd własnym wynikiem.

<div class="formula">=JEŻELI.BŁĄD(A2/B2;"Brak wyniku")</div>

Jeżeli dzielenie jest możliwe, otrzymasz wynik. Gdy formuła zwróci błąd, Excel pokaże tekst Brak wyniku.

## Przydatne przy wyszukiwaniu

W starszych formułach wyszukujących brak dopasowania często kończy się błędem. Możesz go przechwycić:

<div class="formula">=JEŻELI.BŁĄD(INDEKS(C2:C100;PODAJ.POZYCJĘ(F2;A2:A100;0));"Nie znaleziono")</div>

To poprawia czytelność raportu dla użytkownika.

## Pusty wynik

Jeżeli zamiast komunikatu chcesz pozostawić komórkę wizualnie pustą:

<div class="formula">=JEŻELI.BŁĄD(A2/B2;"")</div>

Takie rozwiązanie jest wygodne, ale trzeba używać go świadomie.

## Nie ukrywaj wszystkich problemów

JEŻELI.BŁĄD przechwytuje różne rodzaje błędów. Jeżeli formuła ma błąd logiczny albo odwołuje się do niewłaściwego zakresu, pusty wynik może ukryć rzeczywisty problem.

Dlatego przy krytycznych obliczeniach często lepiej sprawdzić konkretny warunek, np. czy dzielnik jest równy zero.

## Kiedy funkcja ma sens?

Gdy błąd jest przewidywalną częścią procesu: brak dopasowania, brak danych albo obliczenie, którego nie da się wykonać przed uzupełnieniem formularza.

W raportach końcowych pomaga zastąpić techniczne komunikaty czytelnymi informacjami, ale podczas budowania arkusza nie powinna być używana jako sposób na ukrywanie wszystkich błędów bez diagnozy.

## Dobra praktyka podczas tworzenia arkusza

Najpierw uruchom właściwą formułę bez JEŻELI.BŁĄD i sprawdź, jakie błędy rzeczywiście mogą wystąpić. Dopiero po przetestowaniu dodaj obsługę błędu. Dzięki temu nie zamaskujesz przypadkiem literówki, błędnego zakresu albo problemu z typem danych.
