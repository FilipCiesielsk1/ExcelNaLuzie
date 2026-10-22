---
layout: ../../layouts/FunctionLayout.astro
slug: "wybierz"
---

## Kiedy używać WYBIERZ?

WYBIERZ dobrze sprawdza się w krótkich, stałych słownikach wartości. Może zamieniać liczbowe priorytety z rejestru zgłoszeń na nazwy czytelne dla użytkowników.

<div class="formula">=WYBIERZ(A2;"Niski";"Średni";"Wysoki")</div>

## Co oznacza wynik?

Dla indeksu 2 wynik to Średni. Drugi przykład wykorzystuje numer dnia tygodnia, by zwrócić skrót od Pon do Nd bez osobnej tabeli pomocniczej.

## Rozszerzony przykład

<div class="formula">=WYBIERZ(DZIEŃ.TYG(A2;2);"Pon";"Wt";"Śr";"Czw";"Pt";"Sob";"Nd")</div>

Drugi przykład zamienia numer dnia tygodnia 1–7 na skrót dnia. DZIEŃ.TYG z argumentem 2 zwraca numer od poniedziałku, dlatego kolejność nazw musi zaczynać się od `Pon`.

## Na co uważać?

Numer indeksu zaczyna się od 1; poza zakresem dostępnych pozycji Excel zwraca błąd. Przy często zmieniającej się liście kategorii wygodniejsza będzie tabela słownikowa.

## Sprawdź na konkretnych danych

Dla A2 = **19.10.2026** (poniedziałek) formuła z WYBIERZ zwróci **Pon**. Dla **25.10.2026** (niedziela) zwróci **Nd**. Jeśli użyjesz samego WYBIERZ z indeksem 0 lub większym od liczby opcji, otrzymasz błąd; do zmiennego słownika lepsza jest osobna tabela.

## Zastosowanie w praktyce

W arkuszu rejestrującym priorytety zgłoszeń WYBIERZ pozwala szybko przełożyć liczby 1, 2 i 3 na etykiety zrozumiałe dla pracowników. Sprawdza się dobrze, gdy lista możliwości jest krótka i prawie nigdy się nie zmienia. Jeśli jednak dodasz nowy priorytet 4, wszystkie miejsca wykorzystujące stały zestaw argumentów trzeba będzie przejrzeć. W większym systemie łatwiejsza do utrzymania jest tabela słownikowa i funkcja wyszukująca. Zadbaj także o walidację indeksu: pusty wpis, zero lub wartość spoza listy nie powinny prowadzić do mylącej etykiety. W przypadku numerów dni tygodnia pamiętaj o ustawieniu poprawnego wariantu DZIEŃ.TYG; źle dobrany system numeracji przesunie wszystkie nazwy dni.
