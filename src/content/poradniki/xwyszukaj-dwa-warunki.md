---
layout: ../../layouts/ArticleLayout.astro
title: "X.WYSZUKAJ z dwoma warunkami w Excelu"
description: "Jak użyć X.WYSZUKAJ z dwoma warunkami bez kolumny pomocniczej. Gotowa formuła i prosty przykład."
slug: "xwyszukaj-dwa-warunki"
category: "Wyszukiwanie danych"
date: "2026-10-06"
updated: "2026-10-06"
---
import FormulaBox from '../../components/FormulaBox.astro';

<div class="answer"><strong>Dwa warunki można połączyć przez mnożenie tablic logicznych.</strong></div>

<FormulaBox formula='=X.WYSZUKAJ(1;(A2:A100=F2)*(B2:B100=G2);C2:C100)' />

Formuła szuka wiersza, w którym oba warunki są jednocześnie spełnione, a następnie zwraca wartość z kolumny C.

## Jak to działa?

Każde porównanie tworzy serię wartości PRAWDA/FAŁSZ. Po przemnożeniu są one zamieniane na 1 i 0. Tylko wiersz spełniający oba kryteria daje `1`, którego szuka X.WYSZUKAJ.
