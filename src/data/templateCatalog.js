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
];

export const templateBySlug = Object.fromEntries(
  templateCatalog.map((item) => [item.slug, item])
);
