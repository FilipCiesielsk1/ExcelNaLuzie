---
layout: ../../layouts/FunctionLayout.astro
slug: "nr-ser-daty"
---

## Do czego służy NR.SER.DATY?

NR.SER.DATY oblicza terminy umów, kolejnych płatności i odnowień abonamentów. Jest lepsza od dodawania stałej liczby dni, gdy chodzi o pełne miesiące.

<div class="formula">=NR.SER.DATY(A2;3)</div>

## Co oznacza wynik?

Pierwszy przykład przesuwa datę o trzy miesiące do przodu. Drugi cofa ją o jeden miesiąc; Excel sam uwzględnia przejścia między latami.

## Praktyczny wariant

<div class="formula">=NR.SER.DATY(A2;-1)</div>

Ujemny drugi argument cofa datę o pełne miesiące kalendarzowe. Funkcja pilnuje długości docelowego miesiąca, dlatego wynik dla 31. dnia może przypaść na 30., 29. lub 28. dzień.

## Najczęstsze pułapki

Dla dat leżących pod koniec miesiąca wynik może zostać dostosowany do ostatniego istniejącego dnia miesiąca docelowego. Nie zakładaj, że każdy miesiąc ma 30 dni.

## Sprawdź na konkretnych danych

Dla A2 równego **31.01.2026** formuła `=NR.SER.DATY(A2;1)` zwróci **28.02.2026**. Dla **31.01.2024** wynik to **29.02.2024**, bo rok jest przestępny. Takie przypadki przetestuj przed użyciem do terminów umów i faktur.

## Zastosowanie w praktyce

Przy planowaniu terminów odnawiania umów NR.SER.DATY zachowuje logikę pełnych miesięcy, ale nie wszystkie daty mają swój odpowiednik w każdym kolejnym miesiącu. Umowa zawarta 31 stycznia po przesunięciu o jeden miesiąc może zakończyć się 28 lub 29 lutego. Jeśli oczekujesz zawsze ostatniego dnia miesiąca, rozważ osobno NR.SER.OST.DN.MIES i ustal regułę biznesową przed tworzeniem arkusza. Daty przesuwane o dwanaście miesięcy również warto sprawdzać w latach przestępnych. Funkcja jest praktyczna do umów i subskrypcji, ale samo wyliczenie daty nie przesądza, czy termin powinien uwzględniać weekendy lub święta. Te zasady mogą wymagać dodatkowej korekty.
