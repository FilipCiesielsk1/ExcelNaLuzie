---
layout: ../../layouts/FunctionLayout.astro
slug: "dni-robocze"
---

## Co robi DNI.ROBOCZE?

DNI.ROBOCZE oblicza liczbę pełnych dni roboczych pomiędzy dwiema datami.

<div class="formula">=DNI.ROBOCZE(A2;B2)</div>

Standardowo wykluczane są soboty i niedziele.

## Uwzględnianie świąt

Jeżeli lista dni wolnych znajduje się w F2:F20:

<div class="formula">=DNI.ROBOCZE(A2;B2;F2:F20)</div>

Daty z tego zakresu również nie zostaną zaliczone do dni roboczych.

## Przykład zastosowania

Możesz obliczyć liczbę dni pracy potrzebnych do realizacji zadania, liczbę dni roboczych w okresie rozliczeniowym albo czas pomiędzy zgłoszeniem a zamknięciem sprawy.

## Prawdziwe daty zamiast tekstu

Komórki A2, B2 i lista świąt powinny zawierać prawidłowe wartości daty. Dane zaimportowane jako tekst mogą prowadzić do nieoczekiwanych wyników.

## Niestandardowy weekend

Jeżeli weekend w Twojej organizacji nie przypada na sobotę i niedzielę, użyj funkcji DNI.ROBOCZE.NIESTAND. Pozwala ona określić własny układ dni wolnych.

## Czy daty graniczne są uwzględniane?

DNI.ROBOCZE uwzględnia **oba końce przedziału**, jeśli przypadają w dni robocze. Dla poniedziałku 19.10.2026 i piątku 23.10.2026 funkcja zwróci **5**, nie 4. Gdy początek i koniec oznaczają ten sam poniedziałek, wynikiem jest **1**. Jeśli data wypada w weekend lub została podana na liście świąt, nie jest wliczana.

## Kiedy funkcja jest najlepszym wyborem?

W harmonogramach, rozliczeniach czasu pracy, raportach operacyjnych i analizie terminowości. Zamiast odejmować daty i ręcznie korygować weekendy, możesz od razu pracować na dniach roboczych i opcjonalnej liście świąt.
