---
layout: ../../layouts/FunctionLayout.astro
slug: "rok"
---

## Do czego służy ROK?

ROK ułatwia grupowanie transakcji według lat oraz budowanie pomocniczych pól w raportach i zestawieniach.

<div class="formula">=ROK(A2)</div>

## Co oznacza wynik?

Z daty w A2 funkcja zwróci np. 2026. Drugi przykład wyznacza pierwszy dzień kolejnego roku, dzięki czemu można go wykorzystać jako granicę przedziału dat.

## Praktyczny wariant

<div class="formula">=DATA(ROK(A2)+1;1;1)</div>

Druga formuła pokazuje dodatkowy sposób użycia funkcji ROK. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

Wpis tekstowy udający datę może nie zostać rozpoznany. Nie odczytuj roku z fragmentu napisu, gdy Excel przechowuje rzeczywistą datę liczbową.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
