---
layout: ../src/layouts/ArticleLayout.astro
title: "[GŁÓWNY TYTUŁ / INTENCJA WYSZUKIWANIA]"
description: "[140–160 znaków: problem + rozwiązanie + konkret]"
slug: "[slug-bez-polskich-znakow]"
category: "[np. Formuły tekstowe]"
categorySlug: "formuly"
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
author: "Filip Ciesielski"
readingTime: "4 min"
difficulty: "Podstawowy"
excelVersions:
  - "Microsoft 365"
verified: false
related:
  - title: "[Powiązany poradnik]"
    url: "/poradniki/[slug]/"
    category: "[Kategoria]"
---

<div class="answer"><strong>Najkrótsza odpowiedź:</strong> [od razu rozwiąż problem użytkownika].</div>

<div class="formula">=[GŁÓWNA FORMUŁA]</div>

[1–2 zdania: co otrzymasz i dla jakiego przykładu.]

## Przykład

| Dane wejściowe | Wynik |
|---|---|
| [wartość] | [wynik] |

[Krótko wyjaśnij przykład.]

## Jak działa formuła?

[Wyjaśnij tylko elementy potrzebne do zrozumienia rozwiązania.]

## [Najważniejszy wariant problemu]

<div class="formula">=[WARIANT FORMUŁY]</div>

[Kiedy użyć tego wariantu.]

## Starsze wersje Excela

[Jeżeli temat tego wymaga: kompatybilność i alternatywa.]

## Najczęstsze błędy

[2–4 konkretne problemy i rozwiązania.]

## Podsumowanie

[2–3 zdania. Bez sztucznego upychania słów kluczowych.]

<!--
ZASADY:
- Nie dodawaj H1 — generuje go ArticleLayout z pola title.
- Nie używaj importów ani komponentów Astro w pliku .md.
- Formuły zapisuj jako <div class="formula">...</div>.
- Pierwsza konkretna odpowiedź ma pojawić się przed pierwszym H2.
- verified: true dopiero po faktycznym sprawdzeniu przykładu w Excelu.
- Jeden artykuł = jedna główna intencja wyszukiwania.
-->
