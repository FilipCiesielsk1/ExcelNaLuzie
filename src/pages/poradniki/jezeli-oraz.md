---
layout: ../../layouts/ArticleLayout.astro
title: "JEŻELI i ORAZ w Excelu — kilka warunków jednocześnie"
description: "Jak połączyć JEŻELI z ORAZ w Excelu, gdy wszystkie warunki muszą być spełnione. Gotowe formuły i przykłady."
slug: "jezeli-oraz"
category: "Warunki i logika"
categorySlug: "formuly/logika"
date: "2026-10-07"
updated: "2026-10-08"
author: "Filip Ciesielski"
readingTime: "5 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
  - "Excel 2024"
  - "Excel 2021"
  - "Excel 2019"
  - "Excel 2016"
verified: false
---

<div class="answer"><strong>Najprościej:</strong> użyj ORAZ wewnątrz JEŻELI, gdy wynik ma się pojawić tylko wtedy, gdy wszystkie wskazane warunki są spełnione.</div>

<div class="formula">=JEŻELI(ORAZ(B2>=100;C2="TAK");"Premia";"Brak")</div>

Formuła zwróci Premia tylko wtedy, gdy B2 jest co najmniej 100 i jednocześnie C2 zawiera tekst TAK.

## Jak działa ORAZ?

Funkcja ORAZ przyjmuje kilka testów logicznych. Jej wynikiem jest PRAWDA tylko wtedy, gdy każdy z nich jest prawdziwy.

<div class="formula">=ORAZ(B2>=100;C2="TAK")</div>

Sama funkcja zwróci PRAWDA albo FAŁSZ. Umieszczenie jej wewnątrz JEŻELI pozwala zamienić ten wynik na czytelny komunikat lub konkretną wartość.

## Przykład: zatwierdzenie zamówienia

Załóżmy, że w B2 znajduje się wartość zamówienia, a w C2 status płatności. Chcesz oznaczyć rekord jako gotowy tylko dla zamówień opłaconych i o wartości większej niż 500 zł.

<div class="formula">=JEŻELI(ORAZ(B2>500;C2="Opłacone");"Realizuj";"Wstrzymaj")</div>

Jeżeli tylko jeden z warunków nie jest spełniony, wynikiem będzie Wstrzymaj.

## Więcej niż dwa warunki

ORAZ może sprawdzać więcej testów.

<div class="formula">=JEŻELI(ORAZ(B2>=100;C2="TAK";D2<>"");"OK";"Sprawdź")</div>

Tutaj wymagamy odpowiedniej wartości w B2, tekstu TAK w C2 oraz niepustej komórki D2.

## Warunki graniczne

Zwróć uwagę na różnicę między > i >=. Jeżeli próg wynosi dokładnie 100 i wartość 100 ma się kwalifikować, użyj >=100.

Podobnie <> oznacza „różne od”. Zapis D2<>"" sprawdza, czy komórka nie jest pusta z punktu widzenia formuły.

## Przetestuj ORAZ na czterech kombinacjach

Wróć do przykładu z premią: B2 oznacza wynik liczbowy, a C2 decyzję przełożonego. W kolumnie D wpisz formułę:

<div class="formula">=JEŻELI(ORAZ(B2>=100;C2="TAK");"Premia";"Brak")</div>

| B — wynik | C — akceptacja | D — rezultat |
|---|---|---|
| 120 | TAK | Premia |
| 99 | TAK | Brak |
| 120 | NIE | Brak |
| 100 | TAK | Premia |

Wystarczy jeden fałszywy test, żeby otrzymać **Brak**. W ostatnim wierszu próg 100 jest osiągnięty dokładnie, więc warunek **>=100** pozostaje prawdziwy.

## Uwaga na statusy po imporcie

Jeżeli C2 wygląda na TAK, ale rezultat to Brak, sprawdź, czy w danych nie ma dodatkowych spacji, np. „TAK ”. Porównanie tekstu z końcową spacją nie będzie równe zapisowi „TAK”. Jeżeli puste C2 powinno oznaczać „do uzupełnienia”, dodaj osobny warunek na brak wpisu — sama funkcja ORAZ nie powie, **który** warunek nie został spełniony.

## ORAZ czy kilka JEŻELI?

Jeżeli wszystkie warunki opisują jedną decyzję, ORAZ jest zwykle czytelniejsze. Zamiast budować kilka poziomów JEŻELI, zapisujesz warunki obok siebie i jasno pokazujesz, że muszą być spełnione wspólnie.

Jeśli wystarczy spełnienie któregokolwiek warunku, potrzebujesz funkcji LUB. To ważne rozróżnienie: ORAZ oznacza „wszystko naraz”, a LUB „co najmniej jeden”.