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
      value1: '8 500 zł',
      label2: 'Wydatki',
      value2: '3 160 zł',
      label3: 'Bilans',
      value3: '5 340 zł',
      rows: [
        ['Mieszkanie', '2 400 zł'],
        ['Jedzenie', '321 zł'],
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
    description: 'Tracker zadań z priorytetem, statusem, terminem, właścicielem oraz prostym dashboardem pokazującym postęp pracy.',
    sheets: ['Dashboard', 'Zadania', 'Instrukcja'],
    features: [
      'Statusy: Do zrobienia, W toku, Wstrzymane i Gotowe',
      'Priorytety z listy rozwijanej',
      'Automatyczne liczniki zadań na dashboardzie',
      'Wyróżnianie przeterminowanych, niezakończonych zadań'
    ],
    steps: [
      'Przejdź do arkusza „Zadania”.',
      'Usuń przykładowe zadania lub wykorzystaj je jako wzór.',
      'Ustaw priorytet, status i termin dla każdego zadania.',
      'Dashboard automatycznie pokaże liczbę wszystkich, trwających i zakończonych zadań.'
    ],
    preview: {
      label1: 'Wszystkie',
      value1: '6',
      label2: 'W toku',
      value2: '1',
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
    description: 'Rejestr czasu z projektami, startem, końcem, przerwą, godzinami netto, stawką i automatycznym podsumowaniem wartości pracy.',
    sheets: ['Podsumowanie', 'Czas pracy', 'Instrukcja'],
    features: [
      'Automatyczne obliczanie godzin netto po odjęciu przerwy',
      'Opcjonalna stawka godzinowa i automatyczna wartość pracy',
      'Podsumowanie godzin według projektu',
      'Lista projektów i gotowa tabela do dalszego rozszerzania'
    ],
    steps: [
      'Otwórz arkusz „Czas pracy”.',
      'Wpisz datę, projekt, zadanie oraz godzinę rozpoczęcia i zakończenia.',
      'Podaj przerwę w minutach oraz opcjonalnie stawkę godzinową.',
      'Arkusz „Podsumowanie” automatycznie pokaże łączny czas i wartość pracy.'
    ],
    preview: {
      label1: 'Godziny',
      value1: '21,75 h',
      label2: 'Wartość',
      value2: '2 745 zł',
      label3: 'Wpisy',
      value3: '7',
      rows: [
        ['Projekt A', '11,25 h'],
        ['Projekt B', '6,50 h'],
        ['Projekt C', '3,00 h']
      ]
    }
  }
];

export const templateBySlug = Object.fromEntries(
  templateCatalog.map((item) => [item.slug, item])
);
