export const functionCatalog = [
  {
    slug: 'jezeli',
    name: 'JEŻELI',
    category: 'Logika',
    description: 'Sprawdza warunek i zwraca jeden wynik, gdy warunek jest prawdziwy, oraz drugi, gdy jest fałszywy.',
    syntax: '=JEŻELI(test_logiczny;wartość_jeżeli_prawda;[wartość_jeżeli_fałsz])',
    example: '=JEŻELI(B2>=100;"TAK";"NIE")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['test_logiczny','Warunek, który ma zostać sprawdzony.'],
      ['wartość_jeżeli_prawda','Wynik zwracany, gdy warunek jest spełniony.'],
      ['wartość_jeżeli_fałsz','Opcjonalny wynik zwracany, gdy warunek nie jest spełniony.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/if-function-nested-formulas-and-avoiding-pitfalls',
    related: [
      ['Generator JEŻELI','/narzedzia/generator-jezeli/'],
      ['LICZ.WARUNKI','/funkcje/licz-warunki/'],
      ['SUMA.WARUNKÓW','/funkcje/suma-warunkow/']
    ]
  },
  {
    slug: 'xwyszukaj',
    name: 'X.WYSZUKAJ',
    category: 'Wyszukiwanie',
    description: 'Wyszukuje wartość w jednym zakresie i zwraca odpowiadający wynik z innego zakresu lub tablicy.',
    syntax: '=X.WYSZUKAJ(szukana_wartość;szukana_tablica;zwracana_tablica;[jeżeli_nie_znaleziono];[tryb_dopasowywania];[tryb_wyszukiwania])',
    example: '=X.WYSZUKAJ(F2;A2:A100;C2:C100;"Brak wyniku")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021'],
    arguments: [
      ['szukana_wartość','Wartość, którą chcesz znaleźć.'],
      ['szukana_tablica','Zakres lub tablica, w której Excel ma szukać.'],
      ['zwracana_tablica','Zakres lub tablica, z której ma zostać zwrócony wynik.'],
      ['jeżeli_nie_znaleziono','Opcjonalny wynik dla braku dopasowania.'],
      ['tryb_dopasowywania','Opcjonalnie: dokładne lub przybliżone dopasowanie.'],
      ['tryb_wyszukiwania','Opcjonalnie: kierunek i sposób przeszukiwania.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/xlookup-function',
    related: [
      ['Generator X.WYSZUKAJ','/narzedzia/generator-xwyszukaj/'],
      ['X.WYSZUKAJ — prosty przykład','/poradniki/xwyszukaj-podstawy/'],
      ['Wyszukiwanie danych','/formuly/wyszukiwanie/']
    ]
  },
  {
    slug: 'filtruj',
    name: 'FILTRUJ',
    category: 'Formuły dynamiczne',
    description: 'Zwraca tylko te wiersze lub kolumny, które spełniają wskazany warunek lub zestaw warunków.',
    syntax: '=FILTRUJ(tablica;zawiera;[jeśli_puste])',
    example: '=FILTRUJ(A2:C100;A2:A100=F2;"Brak wyników")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021'],
    arguments: [
      ['tablica','Zakres lub tablica, którą chcesz filtrować.'],
      ['zawiera','Tablica wartości PRAWDA/FAŁSZ określająca, które rekordy zwrócić.'],
      ['jeśli_puste','Opcjonalny wynik, gdy żaden rekord nie spełnia warunku.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/filter-function',
    related: [
      ['Jak zwrócić kilka wyników?','/poradniki/xwyszukaj-kilka-wynikow/'],
      ['X.WYSZUKAJ','/funkcje/xwyszukaj/'],
      ['SORTUJ','/funkcje/sortuj/']
    ]
  },
  {
    slug: 'tekst-po',
    name: 'TEKST.PO',
    category: 'Tekst',
    description: 'Zwraca fragment tekstu znajdujący się po wskazanym znaku lub ciągu znaków.',
    syntax: '=TEKST.PO(tekst;ogranicznik;[nr_wystąpienia];[tryb_dopasowania];[koniec_dopasowania];[jeśli_nie_znaleziono])',
    example: '=TEKST.PO(A1;"-")',
    versions: ['Microsoft 365','Excel 2024'],
    arguments: [
      ['tekst','Tekst lub komórka, w której ma zostać wykonane wyszukiwanie.'],
      ['ogranicznik','Znak lub ciąg wyznaczający miejsce rozpoczęcia wyniku.'],
      ['nr_wystąpienia','Opcjonalnie: które wystąpienie ogranicznika wykorzystać.'],
      ['tryb_dopasowania','Opcjonalnie: sposób uwzględniania wielkości liter.'],
      ['koniec_dopasowania','Opcjonalnie: czy koniec tekstu traktować jako ogranicznik.'],
      ['jeśli_nie_znaleziono','Opcjonalny wynik, jeśli ogranicznik nie występuje.']
    ],
    docs: 'https://support.microsoft.com/pl-PL/Excel/functions/textafter-function',
    related: [
      ['Jak pobrać tekst po znaku?','/poradniki/tekst-po-znaku/'],
      ['TEKST.PRZED','/funkcje/tekst-przed/'],
      ['Formuły tekstowe','/formuly/tekst/']
    ]
  },
  {
    slug: 'tekst-przed',
    name: 'TEKST.PRZED',
    category: 'Tekst',
    description: 'Zwraca fragment tekstu znajdujący się przed wskazanym znakiem lub ciągiem znaków.',
    syntax: '=TEKST.PRZED(tekst;ogranicznik;[numer_wystąpienia];[tryb_dopasowywania];[dopasowywanie_do_końca];[jeżeli_nie_znaleziono])',
    example: '=TEKST.PRZED(A1;"-")',
    versions: ['Microsoft 365','Excel 2024'],
    arguments: [
      ['tekst','Tekst lub komórka, w której ma zostać wykonane wyszukiwanie.'],
      ['ogranicznik','Znak lub ciąg wyznaczający koniec wyniku.'],
      ['numer_wystąpienia','Opcjonalnie: które wystąpienie ogranicznika wykorzystać.'],
      ['tryb_dopasowywania','Opcjonalnie: sposób uwzględniania wielkości liter.'],
      ['dopasowywanie_do_końca','Opcjonalnie: czy koniec tekstu traktować jako ogranicznik.'],
      ['jeżeli_nie_znaleziono','Opcjonalny wynik, jeśli ogranicznik nie występuje.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/textbefore-function',
    related: [
      ['Jak pobrać tekst przed znakiem?','/poradniki/tekst-przed-znakiem/'],
      ['TEKST.PO','/funkcje/tekst-po/'],
      ['Formuły tekstowe','/formuly/tekst/']
    ]
  },
  {
    slug: 'suma-warunkow',
    name: 'SUMA.WARUNKÓW',
    category: 'Liczenie i sumowanie',
    description: 'Sumuje wartości tylko w tych wierszach, które spełniają jeden lub kilka wskazanych warunków.',
    syntax: '=SUMA.WARUNKÓW(suma_zakres;kryteria_zakres1;kryteria1;[kryteria_zakres2;kryteria2];...)',
    example: '=SUMA.WARUNKÓW(C2:C100;A2:A100;F2;B2:B100;G2)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['suma_zakres','Zakres wartości, które mają zostać zsumowane.'],
      ['kryteria_zakres1','Pierwszy zakres sprawdzany według kryterium.'],
      ['kryteria1','Pierwszy warunek.'],
      ['kolejne pary','Opcjonalne kolejne zakresy kryteriów i odpowiadające im warunki.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/sumifs-function',
    related: [
      ['Generator SUMA.WARUNKÓW','/narzedzia/generator-suma-warunkow/'],
      ['LICZ.WARUNKI','/funkcje/licz-warunki/'],
      ['JEŻELI','/funkcje/jezeli/']
    ]
  },
  {
    slug: 'licz-warunki',
    name: 'LICZ.WARUNKI',
    category: 'Liczenie i sumowanie',
    description: 'Liczy rekordy, dla których wszystkie wskazane kryteria są spełnione jednocześnie.',
    syntax: '=LICZ.WARUNKI(zakres_kryterium1;kryterium1;[zakres_kryterium2;kryterium2];...)',
    example: '=LICZ.WARUNKI(A2:A100;F2;B2:B100;G2)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['zakres_kryterium1','Pierwszy zakres, w którym Excel sprawdza warunek.'],
      ['kryterium1','Pierwszy warunek.'],
      ['kolejne pary','Opcjonalne kolejne zakresy i warunki. Zakresy powinny mieć zgodne wymiary.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/countifs-function',
    related: [
      ['Generator LICZ.WARUNKI','/narzedzia/generator-licz-warunki/'],
      ['SUMA.WARUNKÓW','/funkcje/suma-warunkow/'],
      ['JEŻELI','/funkcje/jezeli/']
    ]
  },
  {
    slug: 'unikatowe',
    name: 'UNIKATOWE',
    category: 'Formuły dynamiczne',
    description: 'Tworzy dynamiczną listę unikatowych wartości lub rekordów z podanego zakresu.',
    syntax: '=UNIKATOWE(tablica;[wg_kol];[dokładnie_raz])',
    example: '=UNIKATOWE(A2:A100)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021'],
    arguments: [
      ['tablica','Zakres lub tablica, z której mają zostać pobrane unikatowe wartości.'],
      ['wg_kol','Opcjonalnie: określa, czy porównywane są kolumny zamiast wierszy.'],
      ['dokładnie_raz','Opcjonalnie: zwraca tylko wartości występujące dokładnie jeden raz.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/unique-function',
    related: [
      ['SORTUJ','/funkcje/sortuj/'],
      ['FILTRUJ','/funkcje/filtruj/'],
      ['Formuły Excel','/formuly/']
    ]
  },
  {
    slug: 'sortuj',
    name: 'SORTUJ',
    category: 'Formuły dynamiczne',
    description: 'Zwraca posortowaną wersję zakresu lub tablicy bez zmieniania kolejności danych źródłowych.',
    syntax: '=SORTUJ(tablica;[indeks_sortowania];[kolejność_sortowania];[według_kolumny])',
    example: '=SORTUJ(A2:C100;3;-1)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021'],
    arguments: [
      ['tablica','Zakres lub tablica do posortowania.'],
      ['indeks_sortowania','Opcjonalny numer wiersza lub kolumny, według którego sortujesz.'],
      ['kolejność_sortowania','Opcjonalnie: 1 rosnąco, -1 malejąco.'],
      ['według_kolumny','Opcjonalnie: określa kierunek sortowania.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/sort-function',
    related: [
      ['UNIKATOWE','/funkcje/unikatowe/'],
      ['FILTRUJ','/funkcje/filtruj/'],
      ['Formuły Excel','/formuly/']
    ]
  }
];

export const functionBySlug = Object.fromEntries(functionCatalog.map((item) => [item.slug, item]));
