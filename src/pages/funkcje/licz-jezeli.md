---
layout: ../../layouts/FunctionLayout.astro
slug: "licz-jezeli"
---

## Do czego służy LICZ.JEŻELI?

LICZ.JEŻELI liczy komórki spełniające jeden warunek.

<div class="formula">=LICZ.JEŻELI(A2:A100;"Gotowe")</div>

Formuła zwróci liczbę komórek zawierających tekst Gotowe.

## Kryterium liczbowe

Możesz liczyć wartości większe lub mniejsze od wskazanego progu:

<div class="formula">=LICZ.JEŻELI(B2:B100;">=100")</div>

Operator porównania jest częścią kryterium i dlatego znajduje się w cudzysłowie.

## Kryterium z komórki

Jeżeli szukana wartość znajduje się w F2:

<div class="formula">=LICZ.JEŻELI(A2:A100;F2)</div>

To wygodne w raportach, gdzie użytkownik zmienia parametr bez edycji formuły.

## Fragment tekstu

Gwiazdka działa jako symbol wieloznaczny:

<div class="formula">=LICZ.JEŻELI(A2:A100;"*Excel*")</div>

Policzone zostaną komórki zawierające słowo Excel jako część dłuższego tekstu.

## Jeden warunek oznacza jeden warunek

LICZ.JEŻELI nie jest przeznaczone do równoczesnego sprawdzania kilku niezależnych kryteriów. Jeżeli rekord musi mieć odpowiedni region i status, użyj LICZ.WARUNKI.

## Najczęstsze pułapki

Dane importowane mogą zawierać zbędne spacje albo liczby zapisane jako tekst. Wtedy wynik może być niższy niż oczekujesz mimo poprawnej składni.

## Typowe zastosowania

Liczenie statusów, wystąpień kodu, rekordów przekraczających próg, produktów z konkretnej kategorii czy pustych i niepustych pozycji. Funkcja jest prosta, szybka i często wystarcza do podstawowych wskaźników w dashboardach.
