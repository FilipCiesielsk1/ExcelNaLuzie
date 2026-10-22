---
layout: ../../layouts/FunctionLayout.astro
slug: "dzien"
---

## Do czego służy DZIEŃ?

DZIEŃ wydziela numer dnia z kompletnej daty. Dzięki temu można sprawdzać terminy faktur i automatycznie rozpoznawać zdarzenia w pierwszych dniach miesiąca.

<div class="formula">=DZIEŃ(A2)</div>

## Co oznacza wynik?

Z daty 15 października funkcja zwróci 15. Drugi przykład sprawdza, czy wpis przypada na pierwszy dzień danego miesiąca, i zwraca prostą etykietę.

## Praktyczny wariant

<div class="formula">=JEŻELI(DZIEŃ(A2)=1;"Pierwszy dzień";"Inny dzień")</div>

DZIEŃ zwraca dzień miesiąca jako liczbę 1–31. Jeśli chcesz wykryć pierwszy dzień miesiąca, porównaj wynik z 1; nazwy dni tygodnia sprawdzaj oddzielną funkcją DZIEŃ.TYG.

## Najczęstsze pułapki

DZIEŃ nie oznacza dnia tygodnia. Aby uzyskać poniedziałek, wtorek itd., użyj DZIEŃ.TYG z odpowiednim wariantem numerowania.

## Sprawdź na konkretnych danych

Dla daty **15.10.2026** wpisanej do A2 wynik `=DZIEŃ(A2)` to **15**, a test z JEŻELI zwróci **Inny dzień**. Zmień datę na **01.11.2026**: otrzymasz **1** i **Pierwszy dzień**.
