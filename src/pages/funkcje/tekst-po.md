---
layout: ../../layouts/FunctionLayout.astro
slug: "tekst-po"
---

## Najprostszy przykład

Jeżeli A1 zawiera `FV-2026-001`:

<div class="formula">=TEKST.PO(A1;"-")</div>

wynikiem będzie tekst po pierwszym myślniku, czyli `2026-001`.

## Tekst po ostatnim separatorze

Ujemny numer wystąpienia rozpoczyna liczenie od końca:

<div class="formula">=TEKST.PO(A1;"-";-1)</div>

Dla `FV-2026-001` wynikiem będzie `001`.

## Co jeśli separatora nie ma?

Możesz użyć opcjonalnego argumentu odpowiadającego za brak dopasowania zamiast zwracać #N/D.

## Starsze wersje Excela

TEKST.PO jest funkcją nowszą. Jeżeli pracujesz w starszej wersji Excela, podobny rezultat można zbudować za pomocą PRAWY, DŁ i ZNAJDŹ.

## Separator może mieć kilka znaków

TEKST.PO nie ogranicza się do jednego znaku.

Dla danych typu `Kod | Opis` możesz użyć:

<div class="formula">=TEKST.PO(A1;" | ")</div>

Uwzględnienie spacji w separatorze pozwala od razu dostać czysty wynik.

## Ostatnie wystąpienie separatora

Ujemny numer wystąpienia liczy od końca:

<div class="formula">=TEKST.PO(A1;"-";-1)</div>

Dla `PL-2026-00125` wynikiem będzie `00125`.

## Brak separatora

Jeżeli dane nie są idealnie spójne, zabezpiecz formułę:

<div class="formula">=JEŻELI.BŁĄD(TEKST.PO(A1;"-");A1)</div>

Wiersz z separatorem zostanie podzielony, a wiersz bez separatora pozostanie bez zmian.

## TEKST.PO czy PRAWY + ZNAJDŹ?

W nowym Excelu TEKST.PO jest krótsze, czytelniejsze i łatwiej obsługuje ostatnie wystąpienie separatora.

PRAWY + DŁ + ZNAJDŹ nadal przydaje się w skoroszytach przeznaczonych dla starszych wersji Excela.

## Typowe zastosowania

Wyciąganie końcówki kodu, domeny z adresu, numeru z identyfikatora albo części ścieżki tekstowej — wszędzie tam, gdzie separator jest bardziej stabilny niż liczba znaków.
