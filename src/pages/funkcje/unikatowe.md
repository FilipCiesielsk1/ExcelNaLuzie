---
layout: ../../layouts/FunctionLayout.astro
slug: "unikatowe"
---

## Najprostszy przykład

<div class="formula">=UNIKATOWE(A2:A100)</div>

Formuła tworzy listę wartości bez duplikatów i automatycznie rozlewa wynik na kolejne komórki.

## Unikatowe wartości a wartości występujące dokładnie raz

Domyślnie UNIKATOWE zwraca po jednej pozycji dla każdej różnej wartości:

<div class="formula">=UNIKATOWE(A2:A100)</div>

Jeżeli interesują Cię tylko elementy, które w źródle występują **dokładnie jeden raz**, użyj trzeciego argumentu:

<div class="formula">=UNIKATOWE(A2:A100;;PRAWDA)</div>

To dwa różne scenariusze biznesowe.

## Całe rekordy

Zakres może obejmować kilka kolumn:

<div class="formula">=UNIKATOWE(A2:C100)</div>

Wtedy Excel porównuje całe wiersze. Dwa rekordy są duplikatami dopiero wtedy, gdy wartości we wszystkich zwracanych kolumnach są takie same.

## Sortowanie wyniku

Najczęstsze połączenie to:

<div class="formula">=SORTUJ(UNIKATOWE(A2:A100))</div>

Otrzymujesz dynamiczną listę bez duplikatów od razu w uporządkowanej kolejności.

## Unikatowe wartości po wcześniejszym filtrowaniu

Możesz połączyć UNIKATOWE z FILTRUJ:

<div class="formula">=UNIKATOWE(FILTRUJ(B2:B100;A2:A100=F2;""))</div>

Dzięki temu dostaniesz np. listę unikalnych produktów tylko dla regionu wybranego w F2.

## Wynik jest dynamiczny

Lista może rosnąć i maleć razem ze źródłem. Zostaw wolne komórki pod formułą, aby Excel miał miejsce na rozlanie wyników.

## Zastosowanie w praktyce

W raporcie magazynowym UNIKATOWE pomoże uzyskać listę kategorii lub produktów bez ręcznego usuwania duplikatów z tabeli źródłowej. Trzeba jednak odróżnić dwa scenariusze: listę różnych nazw oraz listę pozycji, które występują dokładnie raz. Pierwszy wariant jest przydatny do tworzenia filtrów, a drugi do kontroli wyjątków. Jeśli podasz kilka kolumn, funkcja porównuje całe rekordy, więc dwie pozycje z tym samym produktem i różnymi cenami nie będą uznane za identyczne wiersze. Wynik rozlewa się na sąsiednie komórki, dlatego nie powinno być w nich ręcznie wpisanych wartości. Przy braku danych lub po filtrowaniu sprawdź także, czy puste wartości mają pojawiać się na wygenerowanej liście.
