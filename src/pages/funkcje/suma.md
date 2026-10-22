---
layout: ../../layouts/FunctionLayout.astro
slug: "suma"
---

## Do czego służy SUMA?

SUMA jest podstawą raportów finansowych, zestawień magazynowych i planów budżetowych. Możesz wskazać pojedynczy zakres albo kilka nieprzylegających do siebie obszarów.

<div class="formula">=SUMA(B2:B100)</div>

## Co oznacza wynik?

Pierwszy przykład sumuje wartości w jednej kolumnie, a drugi łączy dwie rozdzielone kolumny. W typowych odwołaniach pomijane są teksty i puste komórki.

## Praktyczny wariant

<div class="formula">=SUMA(B2:B100;D2:D100)</div>

SUMA(B2:B100;D2:D100) dodaje liczby z dwóch zakresów. Jeśli w kolumnach są powiązane miary, upewnij się, że nie podliczasz dwukrotnie tej samej transakcji.

## Najczęstsze pułapki

Jeśli część liczb została zaimportowana jako tekst, suma może je pominąć. Do sumowania tylko wierszy spełniających kryterium wybierz SUMA.JEŻELI lub SUMA.WARUNKÓW.

## Sprawdź na konkretnych danych

W B2:B4 wpisz **10**, **0** oraz tekst `'15`. `=SUMA(B2:B4)` zwróci **10**, ponieważ tekst w komórce nie jest liczbą. Aby znaleźć pozycje problematyczne po imporcie CSV, możesz sprawdzić ich typ przez CZY.LICZBA.

## Zastosowanie w praktyce

W raporcie finansowym samo dodanie wszystkich liczb nie zawsze jest właściwym podsumowaniem. Jeśli kolumna zawiera zarówno wartości pozycji, jak i wiersze podsumowania, SUMA może policzyć te same kwoty dwukrotnie. Przed określeniem zakresu ustal, czy są to surowe transakcje, agregaty czy wartości już przeliczone. W przypadku danych importowanych z CSV zadbaj także o typ liczbowy. Tekst zapisany jako kwota może wyglądać prawidłowo, ale zostać pominięty przy sumowaniu. Jeżeli chcesz dodać wyłącznie rekordy z jednego regionu lub statusu, nie filtruj ręcznie tabeli przed każdym raportem — rozważ SUMA.JEŻELI lub SUMA.WARUNKÓW. Pozwoli to zachować powtarzalny i możliwy do kontroli wynik.
