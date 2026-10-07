---
layout: ../../layouts/FunctionLayout.astro
slug: "tekst"
---

## Do czego służy TEKST?

TEKST zamienia liczbę lub datę na tekst zgodnie z podanym kodem formatu.

<div class="formula">=TEKST(A2;"mmmm")</div>

Jeżeli A2 zawiera datę, wynikiem może być nazwa miesiąca.

## Formatowanie liczby

Możesz sformatować liczbę do dwóch miejsc po przecinku:

<div class="formula">=TEKST(A2;"0,00")</div>

Wynik jest tekstem, a nie liczbą.

## Łączenie liczby z opisem

TEKST jest szczególnie użyteczne przy budowaniu komunikatów:

<div class="formula">="Sprzedaż: "&TEKST(A2;"# ##0,00 zł")</div>

Bez funkcji TEKST połączenie wartości liczbowej z tekstem może stracić oczekiwane formatowanie.

## Formatowanie daty

<div class="formula">=TEKST(A2;"rrrr-mm-dd")</div>

Możesz też zwrócić dzień tygodnia, miesiąc albo inną reprezentację zależną od kodu formatu.

## Ważne: wynik staje się tekstem

To najważniejsza cecha funkcji. Jeżeli później chcesz wykonywać dalsze obliczenia, lepiej zachować oryginalną liczbę w osobnej komórce i używać TEKST tylko do prezentacji.

## Polskie ustawienia regionalne

Kody formatów i separator dziesiętny powinny odpowiadać polskim ustawieniom Excela. Na stronie używamy przecinka jako separatora dziesiętnego.

## Typowe zastosowania

Budowanie opisów w raportach, tworzenie etykiet, wyświetlanie nazw miesięcy, formatowanie numerów i dat przed połączeniem z innym tekstem.

TEKST jest bardzo przydatne do prezentacji, ale nie powinno zastępować prawidłowego formatowania komórki tam, gdzie wartość ma nadal pozostać liczbą do dalszych obliczeń.

## Format komórki a funkcja TEKST

Jeżeli chcesz jedynie zmienić wygląd liczby na ekranie, zwykle wystarczy formatowanie komórki. Funkcji TEKST używaj wtedy, gdy sformatowana wartość ma stać się częścią większego tekstu, etykiety albo komunikatu. Dzięki temu zachowasz liczby do dalszych obliczeń tam, gdzie są potrzebne.
