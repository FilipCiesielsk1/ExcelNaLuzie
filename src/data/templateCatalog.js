export const templateCatalog = [
  {
    slug: 'budzet-domowy',
    title: 'Budżet domowy',
    type: 'Finanse',
    icon: 'PLN',
    file: '/downloads/szablony/budzet-domowy.xlsx',
    version: 'Excel 2016+',
    description: 'Rozbudowany budżet domowy z rejestrem transakcji, miesięcznym dashboardem, planem wydatków, kontrolą realizacji budżetu i wykresami.',
    sheets: ['Podsumowanie', 'Transakcje', 'Instrukcja'],
    features: [
      'Dashboard z przychodami, wydatkami, bilansem i stopą oszczędności',
      'Plan budżetu vs rzeczywiste wydatki dla 10 kategorii',
      'Wykresy kategorii oraz trendu przychodów i wydatków',
      'Listy rozwijane dla typu, kategorii i konta oraz kolorowe alerty'
    ],
    steps: [
      'Otwórz arkusz „Transakcje”.',
      'Usuń przykładowe wpisy albo zastąp je własnymi transakcjami.',
      'Dodawaj każdy przychód i wydatek w osobnym wierszu.',
      'W arkuszu „Podsumowanie” ustaw budżety kategorii i wybierz miesiąc — KPI, realizacja planu oraz wykresy przeliczą się automatycznie.'
    ],
    preview: {
      label1: 'Przychody',
      value1: '8 920 zł',
      label2: 'Wydatki',
      value2: '3 768 zł',
      label3: 'Bilans',
      value3: '5 152 zł',
      rows: [
        ['Mieszkanie', '2 400 zł'],
        ['Jedzenie', '459 zł'],
        ['Transport', '280 zł']
      ]
    }
  },
  {
    slug: 'lista-zadan',
    title: 'Lista zadań',
    type: 'Organizacja',
    icon: '✓',
    file: '/downloads/szablony/lista-zadan.xlsx',
    version: 'Excel 2016+',
    description: 'Tracker zadań z dashboardem, priorytetami, terminami, procentem postępu i automatycznym wyróżnianiem zaległości.',
    sheets: ['Dashboard', 'Zadania', 'Instrukcja'],
    features: [
      'Dashboard z KPI, statusem, zaległościami i średnim postępem',
      'Priorytety, statusy i kategorie z list rozwijanych',
      'Automatyczne wyróżnianie zadań po terminie oraz pilnych',
      'Wykresy statusów i priorytetów oraz paski postępu'
    ],
    steps: [
      'Przejdź do arkusza „Zadania”.',
      'Usuń przykładowe zadania lub wykorzystaj je jako wzór.',
      'Ustaw priorytet, status i termin dla każdego zadania.',
      'Dashboard automatycznie pokaże statusy, zadania po terminie, średni postęp i strukturę priorytetów.'
    ],
    preview: {
      label1: 'Wszystkie',
      value1: '8',
      label2: 'W toku',
      value2: '2',
      label3: 'Gotowe',
      value3: '2',
      rows: [
        ['Raport miesięczny', 'W toku'],
        ['Odpisać klientowi', 'Do zrobienia'],
        ['Spotkanie', 'Gotowe']
      ]
    }
  },
  {
    slug: 'ewidencja-czasu-pracy',
    title: 'Ewidencja czasu pracy',
    type: 'Czas pracy',
    icon: '8h',
    file: '/downloads/szablony/ewidencja-czasu-pracy.xlsx',
    version: 'Excel 2016+',
    description: 'Ewidencja czasu pracy z automatycznym liczeniem godzin netto, stawek i wartości pracy oraz dashboardem miesięcznym i analizą projektów.',
    sheets: ['Podsumowanie', 'Czas pracy', 'Instrukcja'],
    features: [
      'Automatyczne obliczanie godzin netto po odjęciu przerwy',
      'Opcjonalna stawka godzinowa i automatyczna wartość pracy',
      'Dashboard miesięczny z KPI i podsumowaniem według projektu',
      'Wykres godzin projektowych, trend miesięczny i alert dni powyżej 8 h'
    ],
    steps: [
      'Otwórz arkusz „Czas pracy”.',
      'Wpisz datę, projekt, zadanie oraz godzinę rozpoczęcia i zakończenia.',
      'Podaj przerwę w minutach oraz opcjonalnie stawkę godzinową.',
      'Wybierz miesiąc w arkuszu „Podsumowanie”, aby przeanalizować czas, wartość i projekty.'
    ],
    preview: {
      label1: 'Godziny',
      value1: '25,75 h',
      label2: 'Wartość',
      value2: '3 475 zł',
      label3: 'Wpisy',
      value3: '7',
      rows: [
        ['Projekt A', '12,50 h'],
        ['Projekt B', '7,25 h'],
        ['Projekt C', '6,00 h']
      ]
    }
  }
,
{
  "slug": "dashboard-sprzedazy",
  "title": "Dashboard sprzedaży PRO",
  "type": "Sprzedaż",
  "icon": "KPI",
  "file": "/downloads/szablony/dashboard-sprzedazy.xlsx",
  "version": "Excel 2016+",
  "pro": true,
  "description": "Dashboard sprzedaży Excel XLSX z automatycznym zliczaniem przychodów, marży i realizacji miesięcznych celów. Rejestr 120 transakcji.",
  "sheets": [
    "Dashboard",
    "Sprzedaż",
    "Cele",
    "Instrukcja"
  ],
  "features": [
    "Roczne i miesięczne KPI: przychód, marża, średnia transakcja oraz realizacja planu",
    "120 pozycji sprzedaży z automatycznym przychodem, kosztem i marżą",
    "Roczny wybór okresu i 12 miesięcznych celów z analizą odchyleń",
    "Listy handlowców, produktów i regionów oraz alert ujemnej marży"
  ],
  "steps": [
    "Uzupełnij transakcje w arkuszu Sprzedaż — datę, handlowca, klienta, produkt, ilość, cenę i koszt.",
    "Nie edytuj obliczanych kolumn: Przychód, Koszt i Marża.",
    "W arkuszu Cele ustaw plany miesięczne.",
    "Na Dashboardzie ustaw rok w B5 i sprawdź miesięczne oraz roczne KPI."
  ],
  "preview": {
    "label1": "Przychód",
    "value1": "144 000 zł",
    "label2": "Marża",
    "value2": "62 000 zł",
    "label3": "Realizacja",
    "value3": "92%",
    "rows": [
      [
        "Styczeń",
        "15 800 zł"
      ],
      [
        "Luty",
        "20 400 zł"
      ],
      [
        "Marzec",
        "19 200 zł"
      ]
    ]
  },
  "audience": "Dla analityków, kierowników sprzedaży i małych firm.",
  "faq": [
    [
      "Czy mogę zmienić rok raportu?",
      "Tak. Wybierz rok na Dashboardzie; obliczenia miesięczne odczytają transakcje z danego roku."
    ],
    [
      "Czy przychód i marża liczą się automatycznie?",
      "Tak. Wprowadzasz ilości, ceny i koszty, a skoroszyt oblicza wyniki."
    ]
  ]
},
{
  "slug": "harmonogram-gantta",
  "title": "Harmonogram Gantta PRO",
  "type": "Projekty",
  "icon": "GANTT",
  "file": "/downloads/szablony/harmonogram-gantta.xlsx",
  "version": "Excel 2016+",
  "pro": true,
  "description": "Harmonogram projektu Excel z widokiem Gantta, terminami, statusem zadań, alertami opóźnień i dashboardem postępu. Darmowy XLSX.",
  "sheets": [
    "Dashboard",
    "Harmonogram",
    "Zespół",
    "Instrukcja"
  ],
  "features": [
    "Automatycznie kolorowana oś czasu z datami realizacji zadań",
    "80 miejsc na zadania, daty rozpoczęcia i zakończenia oraz postęp",
    "Alerty opóźnień i oznaczanie zadań ukończonych lub zablokowanych",
    "Dashboard liczby zadań, średniego postępu i zaległości"
  ],
  "steps": [
    "Przejdź do Harmonogram i wpisz nazwę, start, koniec, status i postęp każdego zadania.",
    "Obserwuj zaznaczone dni na osi Gantta (szablon startowy: 35 dni od 1.10.2026).",
    "Ustaw Gotowe, aby wyróżnić zakończone zadania.",
    "Zobacz zbiorcze KPI i opóźnienia w Dashboardzie."
  ],
  "preview": {
    "label1": "Zadania",
    "value1": "14",
    "label2": "Gotowe",
    "value2": "3",
    "label3": "W toku",
    "value3": "5",
    "rows": [
      [
        "Analiza",
        "1–4 paź"
      ],
      [
        "Projekt",
        "4–11 paź"
      ],
      [
        "Testy",
        "12–18 paź"
      ]
    ]
  },
  "audience": "Dla osób planujących projekty, wdrożenia i pracę zespołu.",
  "faq": [
    [
      "Czy oś czasu przesuwa się sama?",
      "Oś startowego pliku obejmuje 35 dni od 1 października 2026; dla innych okresów zmień daty nagłówków lub rozszerz zakres."
    ],
    [
      "Czy opóźnienia są oznaczone?",
      "Tak. Reguły wyróżniają niedokończone zadania, których termin już minął."
    ]
  ]
},
{
  "slug": "magazyn-stany",
  "title": "Magazyn i stany PRO",
  "type": "Magazyn",
  "icon": "SKU",
  "file": "/downloads/szablony/magazyn-stany.xlsx",
  "version": "Excel 2016+",
  "pro": true,
  "description": "Ewidencja magazynowa Excel: przyjęcia i wydania towaru, stany bieżące, wartość zapasów i ostrzeżenia o niskich stanach. Szablon XLSX.",
  "sheets": [
    "Dashboard",
    "Produkty",
    "Ruchy",
    "Instrukcja"
  ],
  "features": [
    "Stan magazynu obliczany z przyjęć i wydań po kodzie SKU",
    "70 produktów, 130 operacji i podstawowa wycena stanów",
    "Progi minimalnego zapasu i alerty Zamów / Brak towaru",
    "Dashboard wartości zapasu oraz zbiorczej liczby ruchów"
  ],
  "steps": [
    "W arkuszu Produkty wpisz SKU, nazwę, stan początkowy, próg minimalny i cenę netto.",
    "W Ruchy wpisuj kolejne przyjęcia i wydania z tym samym kodem SKU.",
    "Nie nadpisuj kolumn z automatycznymi sumami, stanem i wartością.",
    "Na Dashboardzie zobacz zapasy do zamówienia i szacowaną wartość magazynu."
  ],
  "preview": {
    "label1": "Produkty",
    "value1": "12",
    "label2": "Zapasy",
    "value2": "42 400 zł",
    "label3": "Alerty",
    "value3": "3",
    "rows": [
      [
        "SKU-001",
        "Zamów"
      ],
      [
        "SKU-002",
        "OK"
      ],
      [
        "SKU-003",
        "OK"
      ]
    ]
  },
  "audience": "Dla małych magazynów, sklepów i ewidencji wyposażenia.",
  "faq": [
    [
      "Czy mogę śledzić wszystkie operacje?",
      "Tak. Każde przyjęcie i wydanie wpisujesz w osobnym wierszu arkusza Ruchy."
    ],
    [
      "Czy program ma numery partii i FIFO?",
      "Nie. To lekka ewidencja ilościowa ze stanem początkowym i wyceną według wprowadzonej ceny."
    ]
  ]
},
{
  "slug": "kontrola-faktur",
  "title": "Kontrola faktur i płatności PRO",
  "type": "Finanse",
  "icon": "FV",
  "file": "/downloads/szablony/kontrola-faktur.xlsx",
  "version": "Excel 2016+",
  "pro": true,
  "description": "Rejestr faktur Excel z obliczaniem kwoty brutto, należności, częściowych wpłat, terminów i zaległych płatności. Darmowy plik XLSX.",
  "sheets": [
    "Dashboard",
    "Faktury",
    "Kontrahenci",
    "Instrukcja"
  ],
  "features": [
    "120 rekordów faktur ze stawką VAT, wartością brutto i saldem należności",
    "Obsługa częściowych wpłat i automatyczny status opłacenia",
    "Alerty po terminie oraz liczba dni opóźnienia",
    "Dashboard należności, zaległości i terminów płatności"
  ],
  "steps": [
    "W Faktury dodaj numer, datę wystawienia, termin, kontrahenta, kwotę netto i stawkę VAT.",
    "W kolumnie Zapłacono wpisz rzeczywiście otrzymaną kwotę — również częściową wpłatę.",
    "Saldo, status i dni zaległości przeliczą się automatycznie.",
    "Na Dashboardzie sprawdź stan należności i zaległych faktur."
  ],
  "preview": {
    "label1": "Faktury",
    "value1": "26",
    "label2": "Do zapłaty",
    "value2": "28 500 zł",
    "label3": "Po terminie",
    "value3": "7",
    "rows": [
      [
        "FV/2026/001",
        "Opłacona"
      ],
      [
        "FV/2026/002",
        "Do zapłaty"
      ],
      [
        "FV/2026/003",
        "Po terminie"
      ]
    ]
  },
  "audience": "Dla freelancerów, firm i działów rozliczeń.",
  "faq": [
    [
      "Czy obsługuje płatność częściową?",
      "Tak. Pozostała kwota jest obliczana na podstawie wartości brutto i sumy dotychczasowych wpłat."
    ],
    [
      "Czy zastępuje program księgowy?",
      "Nie. To pomocniczy rejestr należności, a nie system fakturowy lub księgowy."
    ]
  ]
},
{
  "slug": "crm-sprzedaz",
  "title": "CRM i pipeline sprzedaży PRO",
  "type": "CRM",
  "icon": "CRM",
  "file": "/downloads/szablony/crm-sprzedaz.xlsx",
  "version": "Excel 2016+",
  "pro": true,
  "description": "Darmowy CRM w Excelu: klienci, szanse sprzedażowe, etapy, prognoza ważona prawdopodobieństwem i alerty następnych kontaktów.",
  "sheets": [
    "Dashboard",
    "Szanse",
    "Kontakty",
    "Instrukcja"
  ],
  "features": [
    "120 szans sprzedażowych z etapami Nowy, Kontakt, Oferta, Negocjacje, Wygrana i Przegrana",
    "Automatyczne prawdopodobieństwo i prognoza ważona wartością transakcji",
    "Alerty zaległych kontaktów i zamknięcie szans wygranych lub przegranych",
    "Dashboard lejka: liczba szans, wartości, prognozy i priorytety"
  ],
  "steps": [
    "Uzupełnij Szanse: ID, klienta, opiekuna, etap i wartość transakcji.",
    "Wybierz etap z listy, aby skoroszyt wyliczył prawdopodobieństwo i prognozę.",
    "Dodaj kolejny krok i termin kontaktu, aby korzystać z alertów.",
    "Na Dashboardzie sprawdź liczbę szans w etapach i prognozę sprzedaży."
  ],
  "preview": {
    "label1": "Szanse",
    "value1": "28",
    "label2": "Prognoza",
    "value2": "68 400 zł",
    "label3": "Pilny kontakt",
    "value3": "5",
    "rows": [
      [
        "Nowy",
        "6"
      ],
      [
        "Oferta",
        "5"
      ],
      [
        "Negocjacje",
        "4"
      ]
    ]
  },
  "audience": "Dla handlowców, konsultantów i małych zespołów sprzedaży.",
  "faq": [
    [
      "Skąd bierze się prognoza?",
      "Wartość każdej szansy jest mnożona przez prawdopodobieństwo przypisane etapowi sprzedaży."
    ],
    [
      "Czy CRM wysyła przypomnienia?",
      "Nie. Termin zaległego kontaktu jest wyróżniany w pliku po jego otwarciu, bez automatycznych powiadomień."
    ]
  ]
},
{
  "slug": "kalkulator-ofert",
  "title": "Kalkulator ofert i wycen PRO",
  "type": "Oferty",
  "icon": "PLN",
  "file": "/downloads/szablony/kalkulator-ofert.xlsx",
  "version": "Excel 2016+",
  "pro": true,
  "description": "Kalkulator wycen w Excelu z cennikiem, ilościami, rabatami, kosztami, marżą netto i VAT. Automatyczne liczenie kwoty oferty.",
  "sheets": [
    "Dashboard",
    "Kalkulator",
    "Cennik",
    "Instrukcja"
  ],
  "features": [
    "25 pozycji oferty pobierających opis, cenę i koszt z cennika",
    "Rabaty procentowe, stawki VAT i obliczenie brutto dla pozycji",
    "Marża netto na pozycji oraz podsumowanie rentowności",
    "Dashboard z kwotą netto, brutto, kosztami i wartością rabatów"
  ],
  "steps": [
    "W Cennik wprowadź kody, nazwy, ceny i koszty usług lub produktów.",
    "W Kalkulator wybierz kod pozycji, wprowadź ilość, rabat i stawkę VAT.",
    "Opis, cena, koszt, marża i kwota brutto pojawią się automatycznie.",
    "Sprawdź łączne kwoty i rentowność w Dashboardzie."
  ],
  "preview": {
    "label1": "Netto",
    "value1": "11 500 zł",
    "label2": "Marża",
    "value2": "49%",
    "label3": "Brutto",
    "value3": "14 145 zł",
    "rows": [
      [
        "Audyt",
        "650 zł"
      ],
      [
        "Dashboard",
        "3 400 zł"
      ],
      [
        "Automatyzacja",
        "4 200 zł"
      ]
    ]
  },
  "audience": "Dla osób tworzących wyceny usług, produktów i projektów.",
  "faq": [
    [
      "Czy cena pobiera się z cennika?",
      "Tak. Po wybraniu kodu pozycji Excel automatycznie odczytuje cenę i koszt z arkusza Cennik."
    ],
    [
      "Czy stawkę VAT można zmienić?",
      "Tak. Możesz ustawić stawkę oddzielnie dla każdej pozycji; dostosuj ją do rzeczywistej sprzedaży."
    ]
  ]
}
];

export const templateBySlug = Object.fromEntries(
  templateCatalog.map((item) => [item.slug, item])
);
