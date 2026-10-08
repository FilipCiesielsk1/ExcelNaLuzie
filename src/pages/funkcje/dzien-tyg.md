---
layout: ../../layouts/FunctionLayout.astro
slug: "dzien-tyg"
---

## Do czego służy DZIEŃ.TYG?

DZIEŃ.TYG bywa używany do tworzenia kalendarzy pracy i wyróżniania weekendów. Przelicza datę na numer zamiast zwracać słowną nazwę dnia.

<div class="formula">=DZIEŃ.TYG(A2;2)</div>

## Co oznacza wynik?

Typ 2 oznacza numerowanie od poniedziałku jako 1 do niedzieli jako 7. Druga formuła klasyfikuje sobotę i niedzielę jako weekend.

## Praktyczny wariant

<div class="formula">=JEŻELI(DZIEŃ.TYG(A2;2)&gt;5;"Weekend";"Dzień roboczy")</div>

Druga formuła pokazuje dodatkowy sposób użycia funkcji DZIEŃ.TYG. Dopasuj adresy komórek i zakresy do własnego arkusza. Jeśli przykład korzysta z innych funkcji, sprawdź osobno ich argumenty i upewnij się, że otrzymują dane w wymaganym formacie.

## Najczęstsze pułapki

Przy pominięciu typu Excel liczy domyślnie od niedzieli, dlatego sprawdzenie >5 nie oznacza wtedy tylko weekendu. W raportach ustal jeden standard.

## Jak używać funkcji w rzeczywistych danych?

Zacznij od komórki testowej i porównaj wynik z obliczeniem wykonanym samodzielnie. Potem przetestuj przypadek graniczny: pustą komórkę, początek lub koniec okresu albo brak wartości. To ważne, bo poprawna składnia nie gwarantuje jeszcze, że dane mają oczekiwany format. Dopiero po takiej próbie skopiuj formułę w dół lub użyj jej w całym raporcie.

Przy kopiowaniu sprawdzaj adresy względne i bezwzględne. Jeśli odwołujesz się do stałych parametrów w oddzielnych komórkach, zablokuj je znakiem dolara, aby nie przesuwały się wraz z kopiowaniem. Zwracaj też uwagę na format liczby: rzeczywista data jest przechowywana jako liczba seryjna, ale zwykle prezentowana w postaci czytelnej daty. Zachowuj dane źródłowe do kontroli, zwłaszcza po imporcie z zewnętrznego systemu.
