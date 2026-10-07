export const articleClusters = {
  'formuly/tekst': {
    title: 'Formuły tekstowe',
    hub: '/formuly/tekst/',
    articles: [
      { slug: 'tekst-po-znaku', title: 'Jak pobrać tekst po znaku?', label: 'TEKST.PO' },
      { slug: 'tekst-przed-znakiem', title: 'Jak pobrać tekst przed znakiem?', label: 'TEKST.PRZED' },
      { slug: 'tekst-miedzy-znakami', title: 'Jak pobrać tekst między dwoma znakami?', label: 'FRAGMENT.TEKSTU' },
      { slug: 'usun-pierwsze-znaki', title: 'Jak usunąć pierwsze znaki?', label: 'PRAWY + DŁ' },
      { slug: 'usun-ostatnie-znaki', title: 'Jak usunąć ostatnie znaki?', label: 'LEWY + DŁ' },
      { slug: 'podziel-tekst-po-przecinku', title: 'Jak podzielić tekst po przecinku?', label: 'TEKST.PRZED / PO' },
      { slug: 'polacz-tekst-z-komorek', title: 'Jak połączyć tekst z kilku komórek?', label: '&' },
      { slug: 'czy-komorka-zawiera-tekst', title: 'Czy komórka zawiera tekst?', label: 'SZUKAJ.TEKST' },
      { slug: 'policz-wystapienia-tekstu', title: 'Jak policzyć wystąpienia tekstu?', label: 'DŁ + PODSTAW' },
      { slug: 'zamien-fragment-tekstu', title: 'Jak zamienić fragment tekstu?', label: 'PODSTAW / ZASTĄP' }
    ]
  },
  'formuly/wyszukiwanie': {
    title: 'Wyszukiwanie danych',
    hub: '/formuly/wyszukiwanie/',
    articles: [
      { slug: 'xwyszukaj-podstawy', title: 'X.WYSZUKAJ — prosty przykład', label: 'X.WYSZUKAJ' },
      { slug: 'xwyszukaj-dwa-warunki', title: 'X.WYSZUKAJ z dwoma warunkami', label: '2 warunki' },
      { slug: 'xwyszukaj-kilka-warunkow', title: 'X.WYSZUKAJ z kilkoma warunkami', label: '3+ warunki' },
      { slug: 'xwyszukaj-w-lewo', title: 'X.WYSZUKAJ w lewo', label: 'w lewo' },
      { slug: 'xwyszukaj-kilka-wynikow', title: 'Jak zwrócić kilka wyników?', label: 'FILTRUJ' },
      { slug: 'xwyszukaj-najblizsza-wartosc', title: 'X.WYSZUKAJ — najbliższa wartość', label: '-1 / 1' },
      { slug: 'xwyszukaj-brak-wyniku', title: 'Co zrobić przy braku wyniku?', label: '#N/D' },
      { slug: 'wyszukaj-pionowo-dwa-warunki', title: 'WYSZUKAJ.PIONOWO z dwoma warunkami', label: 'WYSZUKAJ.PIONOWO' },
      { slug: 'indeks-podaj-pozycje', title: 'INDEKS + PODAJ.POZYCJĘ', label: 'INDEKS' },
      { slug: 'jak-znalezc-wartosc-w-tabeli', title: 'Jak znaleźć wartość w tabeli?', label: 'wybór metody' }
    ]
  },
  'formuly/daty': {
    title: 'Daty i czas',
    hub: '/formuly/daty/',
    articles: [
      { slug: 'roznica-miedzy-datami', title: 'Różnica między datami', label: 'dni / miesiące / lata' },
      { slug: 'liczba-dni-miedzy-datami', title: 'Liczba dni między datami', label: 'odejmowanie dat' },
      { slug: 'liczba-miesiecy-miedzy-datami', title: 'Liczba miesięcy między datami', label: 'DATA.RÓŻNICA' },
      { slug: 'data-na-nazwe-miesiaca', title: 'Data na nazwę miesiąca', label: 'TEKST' },
      { slug: 'numer-tygodnia-w-excelu', title: 'Numer tygodnia w Excelu', label: 'NUM.TYG' },
      { slug: 'poniedzialek-z-numeru-tygodnia', title: 'Poniedziałek z numeru tygodnia', label: 'DATA + DZIEŃ.TYG' },
      { slug: 'pierwszy-dzien-miesiaca', title: 'Pierwszy dzień miesiąca', label: 'DATA' },
      { slug: 'ostatni-dzien-miesiaca', title: 'Ostatni dzień miesiąca', label: 'NR.SER.OST.DN.MIES' },
      { slug: 'dodawanie-miesiecy-do-daty', title: 'Dodawanie miesięcy do daty', label: 'NR.SER.DATY' },
      { slug: 'liczba-dni-roboczych', title: 'Liczba dni roboczych', label: 'DNI.ROBOCZE' }
    ]
  }
};
