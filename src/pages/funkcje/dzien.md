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

Druga formuła pokazuje dodatkowy sposób użycia funkcji DZIEŃ. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

DZIEŃ nie oznacza dnia tygodnia. Aby uzyskać poniedziałek, wtorek itd., użyj DZIEŃ.TYG z odpowiednim wariantem numerowania.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
