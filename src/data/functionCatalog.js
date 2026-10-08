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
  },
  {
    slug: 'oraz',
    name: 'ORAZ',
    category: 'Logika',
    description: 'Zwraca PRAWDA tylko wtedy, gdy wszystkie podane warunki są spełnione jednocześnie.',
    syntax: '=ORAZ(wartość_logiczna1;[wartość_logiczna2];...)',
    example: '=ORAZ(B2>=100;C2="Tak")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['wartość_logiczna1','Pierwszy warunek logiczny do sprawdzenia.'],
      ['kolejne warunki','Opcjonalne dodatkowe warunki, które również muszą mieć wartość PRAWDA.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/and-function',
    related: [
      ['JEŻELI + ORAZ','/poradniki/jezeli-oraz/'],
      ['LUB','/funkcje/lub/'],
      ['Warunki i logika','/formuly/logika/']
    ]
  },
  {
    slug: 'lub',
    name: 'LUB',
    category: 'Logika',
    description: 'Zwraca PRAWDA, gdy przynajmniej jeden z podanych warunków jest spełniony.',
    syntax: '=LUB(wartość_logiczna1;[wartość_logiczna2];...)',
    example: '=LUB(B2="VIP";C2="Pilne")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['wartość_logiczna1','Pierwszy warunek logiczny.'],
      ['kolejne warunki','Opcjonalne dodatkowe warunki; wystarczy, że jeden zwróci PRAWDA.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/or-function',
    related: [
      ['JEŻELI + LUB','/poradniki/jezeli-lub/'],
      ['ORAZ','/funkcje/oraz/'],
      ['Warunki i logika','/formuly/logika/']
    ]
  },
  {
    slug: 'jezeli-blad',
    name: 'JEŻELI.BŁĄD',
    category: 'Logika',
    description: 'Zwraca własny wynik, gdy sprawdzana formuła kończy się błędem, a w przeciwnym razie zwraca wynik tej formuły.',
    syntax: '=JEŻELI.BŁĄD(wartość;wartość_jeżeli_błąd)',
    example: '=JEŻELI.BŁĄD(A2/B2;"Brak wyniku")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['wartość','Formuła lub wyrażenie sprawdzane pod kątem błędu.'],
      ['wartość_jeżeli_błąd','Wartość zwracana, gdy pierwszy argument kończy się błędem.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/iferror-function',
    related: [
      ['JEŻELI.BŁĄD — poradnik','/poradniki/jezeli-blad/'],
      ['JEŻELI','/funkcje/jezeli/'],
      ['X.WYSZUKAJ','/funkcje/xwyszukaj/']
    ]
  },
  {
    slug: 'licz-jezeli',
    name: 'LICZ.JEŻELI',
    category: 'Liczenie i sumowanie',
    description: 'Liczy komórki w zakresie, które spełniają jedno wskazane kryterium.',
    syntax: '=LICZ.JEŻELI(zakres;kryteria)',
    example: '=LICZ.JEŻELI(A2:A100;"Gotowe")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['zakres','Zakres komórek, które Excel ma sprawdzić.'],
      ['kryteria','Warunek określający, które komórki mają zostać policzone.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/countif-function',
    related: [
      ['LICZ.JEŻELI — poradnik','/poradniki/licz-jezeli-podstawy/'],
      ['LICZ.WARUNKI','/funkcje/licz-warunki/'],
      ['Liczenie i sumowanie','/formuly/liczenie/']
    ]
  },
  {
    slug: 'suma-jezeli',
    name: 'SUMA.JEŻELI',
    category: 'Liczenie i sumowanie',
    description: 'Sumuje wartości powiązane z rekordami spełniającymi jedno wskazane kryterium.',
    syntax: '=SUMA.JEŻELI(zakres;kryteria;[suma_zakres])',
    example: '=SUMA.JEŻELI(A2:A100;"Warszawa";C2:C100)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['zakres','Zakres sprawdzany według kryterium.'],
      ['kryteria','Warunek decydujący, które rekordy uwzględnić.'],
      ['suma_zakres','Opcjonalny zakres wartości do zsumowania.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/sumif-function',
    related: [
      ['SUMA.JEŻELI — poradnik','/poradniki/suma-jezeli-podstawy/'],
      ['SUMA.WARUNKÓW','/funkcje/suma-warunkow/'],
      ['Liczenie i sumowanie','/formuly/liczenie/']
    ]
  },
  {
    slug: 'indeks',
    name: 'INDEKS',
    category: 'Wyszukiwanie',
    description: 'Zwraca wartość z zakresu lub tablicy na podstawie numeru wiersza i opcjonalnie numeru kolumny.',
    syntax: '=INDEKS(tablica;nr_wiersza;[nr_kolumny])',
    example: '=INDEKS(C2:C100;5)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['tablica','Zakres lub tablica, z której ma zostać pobrana wartość.'],
      ['nr_wiersza','Numer wiersza wewnątrz wskazanej tablicy.'],
      ['nr_kolumny','Opcjonalny numer kolumny wewnątrz tablicy.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/index-function',
    related: [
      ['INDEKS + PODAJ.POZYCJĘ','/poradniki/indeks-podaj-pozycje/'],
      ['PODAJ.POZYCJĘ','/funkcje/podaj-pozycje/'],
      ['Wyszukiwanie danych','/formuly/wyszukiwanie/']
    ]
  },
  {
    slug: 'podaj-pozycje',
    name: 'PODAJ.POZYCJĘ',
    category: 'Wyszukiwanie',
    description: 'Zwraca pozycję szukanej wartości we wskazanym zakresie lub tablicy.',
    syntax: '=PODAJ.POZYCJĘ(szukana_wartość;przeszukiwana_tablica;[typ_porównania])',
    example: '=PODAJ.POZYCJĘ(F2;A2:A100;0)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['szukana_wartość','Wartość, której pozycję chcesz ustalić.'],
      ['przeszukiwana_tablica','Zakres przeszukiwany przez Excel.'],
      ['typ_porównania','Opcjonalny sposób dopasowania; 0 oznacza dokładne dopasowanie.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/match-function',
    related: [
      ['INDEKS + PODAJ.POZYCJĘ','/poradniki/indeks-podaj-pozycje/'],
      ['INDEKS','/funkcje/indeks/'],
      ['X.WYSZUKAJ','/funkcje/xwyszukaj/']
    ]
  },
  {
    slug: 'data-roznica',
    name: 'DATA.RÓŻNICA',
    category: 'Daty i czas',
    description: 'Oblicza liczbę pełnych dni, miesięcy lub lat pomiędzy dwiema datami.',
    syntax: '=DATA.RÓŻNICA(data_początkowa;data_końcowa;jednostka)',
    example: '=DATA.RÓŻNICA(A2;B2;"M")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['data_początkowa','Pierwsza data badanego okresu.'],
      ['data_końcowa','Końcowa data badanego okresu.'],
      ['jednostka','Kod określający wynik, np. "D", "M" albo "Y".']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/datedif-function',
    related: [
      ['Liczba miesięcy między datami','/poradniki/liczba-miesiecy-miedzy-datami/'],
      ['Różnica między datami','/poradniki/roznica-miedzy-datami/'],
      ['Daty i czas','/formuly/daty/']
    ]
  },
  {
    slug: 'dni-robocze',
    name: 'DNI.ROBOCZE',
    category: 'Daty i czas',
    description: 'Zwraca liczbę pełnych dni roboczych pomiędzy dwiema datami z możliwością wykluczenia świąt.',
    syntax: '=DNI.ROBOCZE(data_początkowa;data_końcowa;[święta])',
    example: '=DNI.ROBOCZE(A2;B2;F2:F20)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['data_początkowa','Pierwszy dzień badanego okresu.'],
      ['data_końcowa','Ostatni dzień badanego okresu.'],
      ['święta','Opcjonalny zakres dat, które również mają być wyłączone.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/networkdays-function',
    related: [
      ['Liczba dni roboczych','/poradniki/liczba-dni-roboczych/'],
      ['DATA.RÓŻNICA','/funkcje/data-roznica/'],
      ['Daty i czas','/formuly/daty/']
    ]
  },
  {
    slug: 'sortuj-wedlug',
    name: 'SORTUJ.WEDŁUG',
    category: 'Formuły dynamiczne',
    description: 'Sortuje tablicę na podstawie wartości z jednego lub kilku osobnych zakresów sortujących.',
    syntax: '=SORTUJ.WEDŁUG(tablica;wg_tablicy1;[kolejność1];[wg_tablicy2;kolejność2];...)',
    example: '=SORTUJ.WEDŁUG(A2:B100;C2:C100;-1)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021'],
    arguments: [
      ['tablica','Zakres lub tablica zwracana w wyniku.'],
      ['wg_tablicy1','Zakres, według którego mają zostać uporządkowane dane.'],
      ['kolejność1','Opcjonalnie: 1 rosnąco albo -1 malejąco.'],
      ['kolejne pary','Opcjonalne następne zakresy i kierunki sortowania.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/sortby-function',
    related: [
      ['SORTUJ.WEDŁUG — poradnik','/poradniki/sortuj-wedlug/'],
      ['SORTUJ','/funkcje/sortuj/'],
      ['Formuły dynamiczne','/formuly/dynamiczne/']
    ]
  },
  {
    slug: 'sekwencja',
    name: 'SEKWENCJA',
    category: 'Formuły dynamiczne',
    description: 'Tworzy dynamiczną tablicę kolejnych liczb o wskazanej liczbie wierszy, kolumn, początku i kroku.',
    syntax: '=SEKWENCJA(wiersze;[kolumny];[początek];[etap])',
    example: '=SEKWENCJA(10;1;1;1)',
    versions: ['Microsoft 365','Excel 2024','Excel 2021'],
    arguments: [
      ['wiersze','Liczba wierszy w wyniku.'],
      ['kolumny','Opcjonalna liczba kolumn.'],
      ['początek','Opcjonalna pierwsza liczba serii.'],
      ['etap','Opcjonalna wartość zmiany między kolejnymi elementami.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/sequence-function',
    related: [
      ['SEKWENCJA — poradnik','/poradniki/sekwencja-excel/'],
      ['SORTUJ','/funkcje/sortuj/'],
      ['Formuły dynamiczne','/formuly/dynamiczne/']
    ]
  },
  {
    slug: 'tekst',
    name: 'TEKST',
    category: 'Tekst',
    description: 'Konwertuje liczbę lub datę na tekst zgodnie z podanym kodem formatu.',
    syntax: '=TEKST(wartość;format_tekst)',
    example: '=TEKST(A2;"mmmm")',
    versions: ['Microsoft 365','Excel 2024','Excel 2021','Excel 2019','Excel 2016'],
    arguments: [
      ['wartość','Liczba, data lub wynik obliczenia, który ma zostać sformatowany.'],
      ['format_tekst','Kod określający sposób zapisania wyniku tekstowego.']
    ],
    docs: 'https://support.microsoft.com/pl-pl/excel/functions/text-function',
    related: [
      ['Data na nazwę miesiąca','/poradniki/data-na-nazwe-miesiaca/'],
      ['TEKST.PO','/funkcje/tekst-po/'],
      ['Formuły tekstowe','/formuly/tekst/']
    ]
  },
  {
    "slug": "lewy",
    "name": "LEWY",
    "category": "Tekst",
    "description": "Zwraca określoną liczbę znaków z początku tekstu.",
    "syntax": "=LEWY(tekst;[liczba_znaków])",
    "example": "=LEWY(A2;3)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "tekst",
        "Napis źródłowy."
      ],
      [
        "liczba_znaków",
        "Liczba znaków od lewej; domyślnie 1."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/left-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst-po/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "prawy",
    "name": "PRAWY",
    "category": "Tekst",
    "description": "Zwraca końcowe znaki tekstu, np. numer zamówienia.",
    "syntax": "=PRAWY(tekst;[liczba_znaków])",
    "example": "=PRAWY(A2;4)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "tekst",
        "Napis źródłowy."
      ],
      [
        "liczba_znaków",
        "Liczba znaków liczonych od końca."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/right-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst-po/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "fragment-tekstu",
    "name": "FRAGMENT.TEKSTU",
    "category": "Tekst",
    "description": "Wyodrębnia fragment tekstu od wskazanej pozycji.",
    "syntax": "=FRAGMENT.TEKSTU(tekst;liczba_początkowa;liczba_znaków)",
    "example": "=FRAGMENT.TEKSTU(A2;4;5)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "tekst",
        "Tekst wejściowy."
      ],
      [
        "liczba_początkowa",
        "Pozycja pierwszego znaku, od 1."
      ],
      [
        "liczba_znaków",
        "Liczba pobieranych znaków."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/mid-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst-po/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "dl",
    "name": "DŁ",
    "category": "Tekst",
    "description": "Zlicza znaki w napisie, razem ze spacjami.",
    "syntax": "=DŁ(tekst)",
    "example": "=DŁ(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "tekst",
        "Wartość, której długość sprawdzasz."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/len-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "podstaw",
    "name": "PODSTAW",
    "category": "Tekst",
    "description": "Podmienia fragment tekstu na inny ciąg znaków.",
    "syntax": "=PODSTAW(tekst;stary_tekst;nowy_tekst;[nr_wystąpienia])",
    "example": "=PODSTAW(A2;\"-\";\"/\")",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "tekst",
        "Napis wejściowy."
      ],
      [
        "stary_tekst",
        "Znajdowany fragment."
      ],
      [
        "nowy_tekst",
        "Napis zastępujący."
      ],
      [
        "nr_wystąpienia",
        "Opcjonalny numer wystąpienia do zamiany."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/substitute-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "zastap",
    "name": "ZASTĄP",
    "category": "Tekst",
    "description": "Zamienia znaki na wybranej pozycji w napisie.",
    "syntax": "=ZASTĄP(stary_tekst;liczba_początkowa;liczba_znaków;nowy_tekst)",
    "example": "=ZASTĄP(A2;1;3;\"XXX\")",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "stary_tekst",
        "Napis wyjściowy."
      ],
      [
        "liczba_początkowa",
        "Pierwsza pozycja zamiany."
      ],
      [
        "liczba_znaków",
        "Liczba usuwanych znaków."
      ],
      [
        "nowy_tekst",
        "Nowy ciąg znaków."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/replace-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "usun-zbedne-odstepy",
    "name": "USUŃ.ZBĘDNE.ODSTĘPY",
    "category": "Tekst",
    "description": "Usuwa zbędne zwykłe spacje z tekstu.",
    "syntax": "=USUŃ.ZBĘDNE.ODSTĘPY(tekst)",
    "example": "=USUŃ.ZBĘDNE.ODSTĘPY(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "tekst",
        "Napis z potencjalnymi nadmiarowymi spacjami."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/trim-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "znajdz",
    "name": "ZNAJDŹ",
    "category": "Tekst",
    "description": "Znajduje pozycję frazy z rozróżnianiem wielkich liter.",
    "syntax": "=ZNAJDŹ(szukany_tekst;tekst;[liczba_początkowa])",
    "example": "=ZNAJDŹ(\"-\";A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "szukany_tekst",
        "Szukany znak lub fraza."
      ],
      [
        "tekst",
        "Przeszukiwany napis."
      ],
      [
        "liczba_początkowa",
        "Opcjonalny początek szukania."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/find-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/tekst-po/"
      ],
      [
        "Poradniki tekstowe",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "szukaj-tekst",
    "name": "SZUKAJ.TEKST",
    "category": "Tekst",
    "description": "Znajduje pozycję podciągu bez rozróżniania wielkich liter.",
    "syntax": "=SZUKAJ.TEKST(szukany_tekst;tekst;[liczba_początkowa])",
    "example": "=SZUKAJ.TEKST(\"excel\";A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "szukany_tekst",
        "Fraza, której szukasz."
      ],
      [
        "tekst",
        "Tekst do przeszukania."
      ],
      [
        "liczba_początkowa",
        "Opcjonalny numer pozycji startowej."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/search-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/znajdz/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/tekst/"
      ]
    ]
  },
  {
    "slug": "wyszukaj-pionowo",
    "name": "WYSZUKAJ.PIONOWO",
    "category": "Wyszukiwanie",
    "description": "Wyszukuje klucz w pierwszej kolumnie tabeli i zwraca wynik z innej.",
    "syntax": "=WYSZUKAJ.PIONOWO(szukana_wartość;tablica;nr_indeksu_kolumny;[przeszukiwany_zakres])",
    "example": "=WYSZUKAJ.PIONOWO(F2;A2:C100;3;FAŁSZ)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "szukana_wartość",
        "Wartość odnajdywana."
      ],
      [
        "tablica",
        "Tabela z kluczem w pierwszej kolumnie."
      ],
      [
        "nr_indeksu_kolumny",
        "Numer zwracanej kolumny."
      ],
      [
        "przeszukiwany_zakres",
        "FAŁSZ wymusza dopasowanie dokładne."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/vlookup-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/xwyszukaj/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/wyszukiwanie/"
      ]
    ]
  },
  {
    "slug": "wyszukaj-poziomo",
    "name": "WYSZUKAJ.POZIOMO",
    "category": "Wyszukiwanie",
    "description": "Szuka nagłówka poziomo i zwraca wartość z wybranego wiersza.",
    "syntax": "=WYSZUKAJ.POZIOMO(szukana_wartość;tablica;nr_indeksu_wiersza;[przeszukiwany_zakres])",
    "example": "=WYSZUKAJ.POZIOMO(F2;B1:G4;3;FAŁSZ)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "szukana_wartość",
        "Wartość z nagłówka."
      ],
      [
        "tablica",
        "Zakres z nagłówkami w pierwszym wierszu."
      ],
      [
        "nr_indeksu_wiersza",
        "Numer wiersza wyniku we wskazanym zakresie."
      ],
      [
        "przeszukiwany_zakres",
        "FAŁSZ oznacza dokładne dopasowanie."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/hlookup-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/xwyszukaj/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/wyszukiwanie/"
      ]
    ]
  },
  {
    "slug": "wybierz",
    "name": "WYBIERZ",
    "category": "Wyszukiwanie",
    "description": "Wybiera jedną z podanych wartości według numeru.",
    "syntax": "=WYBIERZ(nr_indeksu;wartość1;[wartość2];...)",
    "example": "=WYBIERZ(A2;\"Niski\";\"Średni\";\"Wysoki\")",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "nr_indeksu",
        "Numer od 1 wskazujący wybraną pozycję."
      ],
      [
        "wartość1",
        "Pierwsza możliwa wartość."
      ],
      [
        "wartość2",
        "Opcjonalne następne wartości."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/choose-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/indeks/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/wyszukiwanie/"
      ]
    ]
  },
  {
    "slug": "czy-pusta",
    "name": "CZY.PUSTA",
    "category": "Logika",
    "description": "Sprawdza, czy komórka rzeczywiście nie zawiera wartości ani formuły.",
    "syntax": "=CZY.PUSTA(wartość)",
    "example": "=CZY.PUSTA(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "wartość",
        "Badana komórka lub odwołanie."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/isblank-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/jezeli/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/logika/"
      ]
    ]
  },
  {
    "slug": "czy-liczba",
    "name": "CZY.LICZBA",
    "category": "Logika",
    "description": "Sprawdza, czy argument jest liczbą, a nie tekstem.",
    "syntax": "=CZY.LICZBA(wartość)",
    "example": "=CZY.LICZBA(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "wartość",
        "Wartość, komórka lub wynik innej funkcji."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/isnumber-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/jezeli/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/logika/"
      ]
    ]
  },
  {
    "slug": "data",
    "name": "DATA",
    "category": "Daty i czas",
    "description": "Tworzy rzeczywistą datę z roku, miesiąca i dnia.",
    "syntax": "=DATA(rok;miesiąc;dzień)",
    "example": "=DATA(2026;10;15)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "rok",
        "Rok daty."
      ],
      [
        "miesiąc",
        "Numer miesiąca."
      ],
      [
        "dzień",
        "Numer dnia."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/date-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "dzis",
    "name": "DZIŚ",
    "category": "Daty i czas",
    "description": "Zwraca bieżącą datę systemową bez części godzinowej.",
    "syntax": "=DZIŚ()",
    "example": "=DZIŚ()",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "brak",
        "Nie przyjmuje argumentów, ale wymaga nawiasów."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/today-function",
    "related": [
      [
        "Zobacz także",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki z tematu",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "teraz",
    "name": "TERAZ",
    "category": "Daty i czas",
    "description": "Zwraca bieżącą datę razem z godziną.",
    "syntax": "=TERAZ()",
    "example": "=TERAZ()",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "brak",
        "Brak argumentów"
      ],
      [
        " wymagane są puste nawiasy."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/now-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "rok",
    "name": "ROK",
    "category": "Daty i czas",
    "description": "Wyodrębnia rok z daty zapisanej w Excelu.",
    "syntax": "=ROK(liczba_seryjna)",
    "example": "=ROK(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba_seryjna",
        "Data Excela lub komórka z datą."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/year-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "miesiac",
    "name": "MIESIĄC",
    "category": "Daty i czas",
    "description": "Zwraca numer miesiąca od 1 do 12.",
    "syntax": "=MIESIĄC(liczba_seryjna)",
    "example": "=MIESIĄC(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba_seryjna",
        "Data, z której odczytywany jest miesiąc."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/month-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "dzien",
    "name": "DZIEŃ",
    "category": "Daty i czas",
    "description": "Zwraca dzień miesiąca jako liczbę 1–31.",
    "syntax": "=DZIEŃ(liczba_seryjna)",
    "example": "=DZIEŃ(A2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba_seryjna",
        "Rzeczywista data Excela."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/day-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "dzien-tyg",
    "name": "DZIEŃ.TYG",
    "category": "Daty i czas",
    "description": "Wyznacza numer dnia tygodnia dla wskazanej daty.",
    "syntax": "=DZIEŃ.TYG(liczba_seryjna;[zwracany_typ])",
    "example": "=DZIEŃ.TYG(A2;2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba_seryjna",
        "Data do sprawdzenia"
      ],
      [
        "zwracany_typ",
        "Opcjonalny schemat numerowania dni."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/weekday-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/dni-robocze/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "nr-ser-daty",
    "name": "NR.SER.DATY",
    "category": "Daty i czas",
    "description": "Przesuwa datę o określoną liczbę miesięcy.",
    "syntax": "=NR.SER.DATY(data_początkowa;miesiące)",
    "example": "=NR.SER.DATY(A2;3)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "data_początkowa",
        "Data wyjściowa"
      ],
      [
        "miesiące",
        "Liczba miesięcy do dodania lub odjęcia."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/edate-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "nr-ser-ost-dn-mies",
    "name": "NR.SER.OST.DN.MIES",
    "category": "Daty i czas",
    "description": "Zwraca ostatni dzień wskazanego miesiąca.",
    "syntax": "=NR.SER.OST.DN.MIES(data_początkowa;miesiące)",
    "example": "=NR.SER.OST.DN.MIES(A2;0)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "data_początkowa",
        "Początkowa data"
      ],
      [
        "miesiące",
        "Liczba miesięcy przesunięcia."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/eomonth-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/data-roznica/"
      ],
      [
        "Poradniki",
        "/formuly/daty/"
      ]
    ]
  },
  {
    "slug": "suma",
    "name": "SUMA",
    "category": "Liczenie i sumowanie",
    "description": "Dodaje liczby z jednego lub wielu zakresów.",
    "syntax": "=SUMA(liczba1;[liczba2];...)",
    "example": "=SUMA(B2:B100)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba1",
        "Liczba, zakres lub tablica do zsumowania"
      ],
      [
        "kolejne_liczby",
        "Opcjonalne dodatkowe wartości i zakresy."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/sum-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/suma-warunkow/"
      ],
      [
        "Poradniki",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "srednia",
    "name": "ŚREDNIA",
    "category": "Liczenie i sumowanie",
    "description": "Oblicza średnią arytmetyczną podanych wartości liczbowych.",
    "syntax": "=ŚREDNIA(liczba1;[liczba2];...)",
    "example": "=ŚREDNIA(B2:B100)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba1",
        "Pierwsza liczba lub zakres"
      ],
      [
        "kolejne_liczby",
        "Dodatkowe wartości i zakresy."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/average-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/suma/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "min",
    "name": "MIN",
    "category": "Liczenie i sumowanie",
    "description": "Zwraca najmniejszą wartość liczbową z zakresu.",
    "syntax": "=MIN(liczba1;[liczba2];...)",
    "example": "=MIN(B2:B100)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba1",
        "Pierwsza wartość lub zakres"
      ],
      [
        "kolejne_liczby",
        "Opcjonalne dodatkowe argumenty."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/min-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/suma/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "max",
    "name": "MAX",
    "category": "Liczenie i sumowanie",
    "description": "Zwraca największą wartość liczbową w zestawie danych.",
    "syntax": "=MAX(liczba1;[liczba2];...)",
    "example": "=MAX(B2:B100)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba1",
        "Pierwsza liczba lub obszar"
      ],
      [
        "kolejne_liczby",
        "Dodatkowe wartości lub zakresy."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/max-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/suma/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "ile-liczb",
    "name": "ILE.LICZB",
    "category": "Liczenie i sumowanie",
    "description": "Zlicza komórki zawierające wartości liczbowe.",
    "syntax": "=ILE.LICZB(wartość1;[wartość2];...)",
    "example": "=ILE.LICZB(B2:B100)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "wartość1",
        "Pierwszy zakres lub liczba"
      ],
      [
        "kolejne_wartości",
        "Opcjonalne następne argumenty."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/count-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/licz-jezeli/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "ile-niepustych",
    "name": "ILE.NIEPUSTYCH",
    "category": "Liczenie i sumowanie",
    "description": "Zlicza wszystkie komórki mające zawartość, niezależnie od typu.",
    "syntax": "=ILE.NIEPUSTYCH(wartość1;[wartość2];...)",
    "example": "=ILE.NIEPUSTYCH(A2:A100)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "wartość1",
        "Pierwszy zakres do sprawdzenia"
      ],
      [
        "kolejne_wartości",
        "Opcjonalne dodatkowe zakresy."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/counta-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/licz-jezeli/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "zaokr",
    "name": "ZAOKR",
    "category": "Liczenie i sumowanie",
    "description": "Zaokrągla liczbę do wskazanej precyzji.",
    "syntax": "=ZAOKR(liczba;liczba_cyfr)",
    "example": "=ZAOKR(A2;2)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba",
        "Wartość do zaokrąglenia"
      ],
      [
        "liczba_cyfr",
        "Liczba pozycji dziesiętnych, zero lub liczba ujemna."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/round-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/suma/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "zaokr-gora",
    "name": "ZAOKR.GÓRA",
    "category": "Liczenie i sumowanie",
    "description": "Zaokrągla liczbę od zera do wskazanej liczby cyfr.",
    "syntax": "=ZAOKR.GÓRA(liczba;liczba_cyfr)",
    "example": "=ZAOKR.GÓRA(A2;0)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba",
        "Liczba do zaokrąglenia"
      ],
      [
        "liczba_cyfr",
        "Żądana liczba miejsc dziesiętnych."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/roundup-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/zaokr/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  },
  {
    "slug": "zaokr-dol",
    "name": "ZAOKR.DÓŁ",
    "category": "Liczenie i sumowanie",
    "description": "Zaokrągla liczbę w kierunku zera.",
    "syntax": "=ZAOKR.DÓŁ(liczba;liczba_cyfr)",
    "example": "=ZAOKR.DÓŁ(A2;0)",
    "versions": [
      "Microsoft 365",
      "Excel 2024",
      "Excel 2021",
      "Excel 2019",
      "Excel 2016"
    ],
    "arguments": [
      [
        "liczba",
        "Liczba do zaokrąglenia"
      ],
      [
        "liczba_cyfr",
        "Liczba zachowanych miejsc dziesiętnych."
      ]
    ],
    "docs": "https://support.microsoft.com/pl-pl/excel/functions/rounddown-function",
    "related": [
      [
        "Powiązana funkcja",
        "/funkcje/zaokr/"
      ],
      [
        "Poradniki liczenia",
        "/formuly/liczenie/"
      ]
    ]
  }
];

export const functionBySlug = Object.fromEntries(functionCatalog.map((item) => [item.slug, item]));
