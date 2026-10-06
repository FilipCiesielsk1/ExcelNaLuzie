---
layout: ../../layouts/ArticleLayout.astro
title: "Jak usunąć pierwsze znaki w Excelu?"
description: "Usuń pierwsze 1, 2, 3 lub dowolną liczbę znaków z komórki w Excelu za pomocą prostej formuły."
slug: "usun-pierwsze-znaki"
category: "Formuły tekstowe"
date: "2026-10-06"
updated: "2026-10-06"
---
import FormulaBox from '../../components/FormulaBox.astro';

<div class="answer"><strong>Przykład:</strong> aby usunąć pierwsze 3 znaki z A1, użyj:</div>

<FormulaBox formula='=PRAWY(A1;DŁ(A1)-3)' />

Dla `ABC12345` wynikiem będzie `12345`.

## Dowolna liczba znaków

Zmień `3` na liczbę znaków, które chcesz usunąć.
