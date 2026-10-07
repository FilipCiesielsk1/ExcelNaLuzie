---
layout: ../../layouts/FunctionLayout.astro
slug: "suma-jezeli"
---

## Do czego służy SUMA.JEŻELI?

SUMA.JEŻELI sumuje wartości dla rekordów spełniających jeden warunek.

<div class="formula">=SUMA.JEŻELI(A2:A100;"Warszawa";C2:C100)</div>

Jeżeli kolumna A zawiera miasto, a C sprzedaż, otrzymasz sumę sprzedaży dla Warszawy.

## Jak czytać argumenty?

Pierwszy zakres jest sprawdzany według kryterium. Trzeci zawiera wartości, które mają zostać dodane.

<div class="formula">=SUMA.JEŻELI(B2:B100;">=1000";C2:C100)</div>

Tutaj do sumy trafiają wartości z C tylko dla wierszy, w których B jest co najmniej równe 1000.

## Kryterium z komórki

<div class="formula">=SUMA.JEŻELI(A2:A100;F2;C2:C100)</div>

F2 może zawierać miasto, kategorię albo status.

## Gdy zakres kryterium i sumowania są takie same

Możesz sumować tylko te wartości, które same spełniają próg:

<div class="formula">=SUMA.JEŻELI(C2:C100;">1000";C2:C100)</div>

## Jeden warunek kontra kilka

SUMA.JEŻELI obsługuje jeden warunek. Gdy chcesz uwzględnić jednocześnie np. miasto, status i datę, użyj SUMA.WARUNKÓW.

## Uważaj na zgodność zakresów

Zakres kryterium i zakres sumowania powinny odpowiadać tym samym rekordom. Przesunięcie jednego o wiersz może prowadzić do błędnego wyniku.

## Typowe zastosowania

Sumowanie sprzedaży dla kategorii, kosztów dla działu, godzin dla projektu, wartości powyżej progu albo kwot przypisanych do konkretnego statusu. To jedna z podstawowych funkcji do budowania prostych raportów bez tabel przestawnych.
