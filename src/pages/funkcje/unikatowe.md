---
layout: ../../layouts/FunctionLayout.astro
slug: "unikatowe"
---

## Najprostszy przykład

<div class="formula">=UNIKATOWE(A2:A100)</div>

Formuła tworzy listę wartości bez duplikatów i automatycznie rozlewa wynik na kolejne komórki.

## Unikatowe całe wiersze

Możesz podać zakres składający się z kilku kolumn:

<div class="formula">=UNIKATOWE(A2:C100)</div>

Excel potraktuje wtedy cały wiersz jako rekord.

## Tylko wartości występujące dokładnie raz

Trzeci argument pozwala odróżnić „lista bez duplikatów” od wartości, które w źródle pojawiają się dokładnie jeden raz.

## Połącz z SORTUJ

Bardzo częsty wzorzec to automatyczna, uporządkowana lista:

<div class="formula">=SORTUJ(UNIKATOWE(A2:A100))</div>

Po dopisaniu nowych danych lista może aktualizować się automatycznie.
