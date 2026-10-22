---
layout: ../../layouts/FunctionLayout.astro
slug: "tekst-przed"
---

## Najprostszy przykład

Jeżeli A1 zawiera `FV-2026-001`:

<div class="formula">=TEKST.PRZED(A1;"-")</div>

wynikiem będzie `FV`.

## Tekst przed ostatnim separatorem

<div class="formula">=TEKST.PRZED(A1;"-";-1)</div>

Dla `FV-2026-001` otrzymasz `FV-2026`.

## Inne separatory

Ogranicznikiem może być przecinek, spacja, ukośnik albo dłuższy ciąg znaków.

<div class="formula">=TEKST.PRZED(A1;",")</div>

## Starsze wersje Excela

Jeżeli TEKST.PRZED nie jest dostępne, tekst przed separatorem można pobrać połączeniem LEWY i ZNAJDŹ.

## Separator może być całym ciągiem

Dla wartości `Produkt | Kategoria`:

<div class="formula">=TEKST.PRZED(A1;" | ")</div>

wynikiem będzie `Produkt`.

Nie musisz później osobno usuwać spacji, jeśli uwzględnisz je w separatorze.

## Obsługa brakującego separatora

Przy niejednolitych danych użyj:

<div class="formula">=JEŻELI.BŁĄD(TEKST.PRZED(A1;"-");A1)</div>

To pozwala zachować oryginalny tekst zamiast wyświetlać błąd.

## TEKST.PRZED czy LEWY + ZNAJDŹ?

LEWY + ZNAJDŹ pozostaje dobrym wariantem kompatybilnym ze starszym Excelem.

W Microsoft 365 i Excelu 2024 TEKST.PRZED jest zwykle łatwiejsze do przeczytania i późniejszej modyfikacji.

## Gdzie się przydaje?

Najczęściej przy rozdzielaniu kodów, nazw plików, danych importowanych i pól zawierających kilka informacji rozdzielonych stałym separatorem.

## Zastosowanie w praktyce

Przy pracy z identyfikatorami dokumentów wybór pierwszego lub ostatniego separatora daje odmienne wyniki. Dla kodu `FV-2026-001` tekst przed pierwszym myślnikiem to `FV`, a przed ostatnim — `FV-2026`. Parametr wystąpienia jest więc częścią reguły biznesowej, a nie wyłącznie technicznym dodatkiem. Jeśli nazwy plików mają różną liczbę segmentów, przygotuj kilka reprezentatywnych przykładów i sprawdź, czy dzielenie zawsze odbywa się w poprawnym miejscu. W starszych wersjach Excela funkcja może być niedostępna; wtedy odpowiednik można zbudować za pomocą LEWY i ZNAJDŹ. Jeżeli dane pochodzą z importu, zachowaj również oryginalny tekst, aby łatwo prześledzić błędne podziały i nie utracić ważnych fragmentów.
