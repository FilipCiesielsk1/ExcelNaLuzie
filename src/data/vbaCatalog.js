export const vbaCatalog = [
  {
    "slug": "ostatni-wiersz",
    "title": "VBA — jak znaleźć ostatni wiersz w Excelu?",
    "shortTitle": "Ostatni wiersz",
    "description": "Gotowe makro VBA do znalezienia ostatniego użytego wiersza w wybranej kolumnie. Kod, wyjaśnienie i najczęstsze błędy.",
    "category": "Komórki i zakresy",
    "difficulty": "Podstawowy",
    "readingTime": "5 min",
    "intro": "Najczęściej używany wzorzec to zejście od ostatniego wiersza arkusza w górę metodą End(xlUp).",
    "code": "Sub OstatniWiersz()\n    Dim ws As Worksheet\n    Dim lastRow As Long\n\n    Set ws = ThisWorkbook.Worksheets(\"Dane\")\n\n    lastRow = ws.Cells(ws.Rows.Count, \"A\").End(xlUp).Row\n\n    MsgBox \"Ostatni wiersz: \" & lastRow\nEnd Sub",
    "customize": [
      "Zmień \"Dane\" na nazwę swojego arkusza.",
      "Zmień \"A\" na kolumnę, która zawsze jest wypełniona dla każdego rekordu.",
      "Jeśli pierwszy wiersz jest nagłówkiem, wynik 1 może oznaczać brak danych."
    ],
    "explanation": [
      "ws.Rows.Count zwraca numer ostatniego możliwego wiersza w danym arkuszu.",
      "Cells(..., \"A\").End(xlUp) działa podobnie do Ctrl+strzałka w górę i zatrzymuje się na pierwszej niepustej komórce.",
      "Dopisanie .Row zwraca sam numer wiersza jako Long."
    ],
    "mistakes": [
      "Nie opieraj się na kolumnie, która może mieć puste komórki na końcu danych.",
      "Kwalifikuj Cells i Rows przez konkretny arkusz, zamiast polegać na ActiveSheet.",
      "Jeśli chcesz znaleźć ostatnią używaną komórkę niezależnie od kolumny, potrzebujesz innego podejścia, np. Find."
    ]
  },
  {
    "slug": "ostatnia-kolumna",
    "title": "VBA — jak znaleźć ostatnią kolumnę w Excelu?",
    "shortTitle": "Ostatnia kolumna",
    "description": "Jak w VBA znaleźć ostatnią używaną kolumnę w wybranym wierszu. Gotowy kod z End(xlToLeft) i praktyczne wskazówki.",
    "category": "Komórki i zakresy",
    "difficulty": "Podstawowy",
    "readingTime": "4 min",
    "intro": "Najprostszy i szybki sposób to rozpocząć od ostatniej kolumny arkusza i przesunąć się w lewo.",
    "code": "Sub OstatniaKolumna()\n    Dim ws As Worksheet\n    Dim lastCol As Long\n\n    Set ws = ThisWorkbook.Worksheets(\"Dane\")\n\n    lastCol = ws.Cells(1, ws.Columns.Count).End(xlToLeft).Column\n\n    MsgBox \"Ostatnia kolumna: \" & lastCol\nEnd Sub",
    "customize": [
      "Zmień \"Dane\" na właściwy arkusz.",
      "Liczba 1 w Cells(1, ...) oznacza wiersz, w którym szukasz ostatniej kolumny.",
      "Jeśli nagłówki znajdują się w innym wierszu, np. 3, użyj Cells(3, ...)."
    ],
    "explanation": [
      "ws.Columns.Count wskazuje ostatnią możliwą kolumnę arkusza.",
      "End(xlToLeft) przesuwa się w lewo do pierwszej niepustej komórki.",
      ".Column zwraca numer kolumny, np. A = 1, AB = 28."
    ],
    "mistakes": [
      "Wiersz używany do wyszukiwania powinien zawierać dane we wszystkich istotnych kolumnach.",
      "Nie używaj ActiveSheet, jeśli makro ma działać niezależnie od aktualnie klikniętego arkusza.",
      "Jeżeli cały analizowany wiersz jest pusty, wynik może być mylący."
    ]
  },
  {
    "slug": "petla-po-wierszach",
    "title": "VBA — pętla po wierszach w Excelu",
    "shortTitle": "Pętla po wierszach",
    "description": "Praktyczna pętla For w VBA przechodząca po wszystkich rekordach od drugiego do ostatniego wiersza. Gotowy przykład.",
    "category": "Komórki i zakresy",
    "difficulty": "Podstawowy",
    "readingTime": "6 min",
    "intro": "Najczęściej najpierw wyznaczasz ostatni wiersz, a następnie przechodzisz przez rekordy pętlą For.",
    "code": "Sub PetlaPoWierszach()\n    Dim ws As Worksheet\n    Dim lastRow As Long\n    Dim i As Long\n\n    Set ws = ThisWorkbook.Worksheets(\"Dane\")\n    lastRow = ws.Cells(ws.Rows.Count, \"A\").End(xlUp).Row\n\n    For i = 2 To lastRow\n        If ws.Cells(i, \"C\").Value = \"\" Then\n            ws.Cells(i, \"C\").Value = \"BRAK\"\n        End If\n    Next i\nEnd Sub",
    "customize": [
      "Pętla zaczyna się od 2, ponieważ zakładamy nagłówki w pierwszym wierszu.",
      "Kolumna A służy do ustalenia końca danych, a kolumna C jest modyfikowana.",
      "Warunek wewnątrz If możesz zastąpić własną logiką."
    ],
    "explanation": [
      "For i = 2 To lastRow wykonuje kod po kolei dla każdego numeru wiersza.",
      "Cells(i, \"C\") oznacza komórkę w aktualnym wierszu i kolumnie C.",
      "Next i przechodzi do następnego rekordu aż do ostatniego wiersza."
    ],
    "mistakes": [
      "Pętle po komórkach są proste, ale przy setkach tysięcy wierszy mogą być wolniejsze niż praca na tablicach.",
      "Nie używaj całej kolumny jako zakresu pętli, jeśli wystarczy zakres faktycznie zajęty przez dane.",
      "Przy zmianie wartości w arkuszu rozważ wyłączenie ScreenUpdating i zdarzeń dla większych operacji."
    ]
  },
  {
    "slug": "petla-po-arkuszach",
    "title": "VBA — pętla po wszystkich arkuszach",
    "shortTitle": "Pętla po arkuszach",
    "description": "Jak wykonać ten sam kod dla każdego arkusza skoroszytu. Gotowa pętla For Each po Worksheets i przykłady zastosowania.",
    "category": "Arkusze i skoroszyty",
    "difficulty": "Podstawowy",
    "readingTime": "5 min",
    "intro": "Do przejścia po wszystkich arkuszach najczytelniejsza jest pętla For Each po kolekcji ThisWorkbook.Worksheets.",
    "code": "Sub PetlaPoArkuszach()\n    Dim ws As Worksheet\n\n    For Each ws In ThisWorkbook.Worksheets\n        ws.Range(\"A1\").Value = \"Raport\"\n        Debug.Print ws.Name\n    Next ws\nEnd Sub",
    "customize": [
      "Zastąp wpisywanie \"Raport\" własną operacją.",
      "ThisWorkbook oznacza skoroszyt, w którym znajduje się kod VBA.",
      "Jeżeli chcesz pominąć jeden arkusz, dodaj wewnątrz pętli warunek If ws.Name <> \"...\" Then."
    ],
    "explanation": [
      "For Each pobiera po kolei każdy obiekt Worksheet z kolekcji Worksheets.",
      "Zmienna ws zawsze odnosi się do aktualnego arkusza pętli.",
      "Debug.Print ws.Name wypisuje nazwę arkusza w oknie Immediate i pomaga podczas testów."
    ],
    "mistakes": [
      "Nie używaj ActiveSheet wewnątrz takiej pętli, jeśli nie aktywujesz każdego arkusza celowo.",
      "Kolekcja Worksheets nie obejmuje arkuszy wykresów; do wszystkich typów arkuszy służy Sheets.",
      "Uważaj na arkusze chronione, jeśli kod ma zmieniać ich zawartość."
    ]
  },
  {
    "slug": "kopiowanie-danych",
    "title": "VBA — kopiowanie danych między arkuszami",
    "shortTitle": "Kopiowanie danych",
    "description": "Gotowe makro VBA do kopiowania zakresu danych między arkuszami. Automatyczne wykrycie ostatniego wiersza i wariant tylko wartości.",
    "category": "Komórki i zakresy",
    "difficulty": "Podstawowy",
    "readingTime": "6 min",
    "intro": "Najbezpieczniej jawnie wskazać arkusz źródłowy, docelowy oraz zakres, zamiast opierać się na zaznaczeniu użytkownika.",
    "code": "Sub KopiujDane()\n    Dim src As Worksheet\n    Dim dst As Worksheet\n    Dim lastRow As Long\n\n    Set src = ThisWorkbook.Worksheets(\"Dane\")\n    Set dst = ThisWorkbook.Worksheets(\"Raport\")\n\n    lastRow = src.Cells(src.Rows.Count, \"A\").End(xlUp).Row\n\n    src.Range(\"A2:D\" & lastRow).Copy Destination:=dst.Range(\"A2\")\nEnd Sub",
    "customize": [
      "Zmień nazwy arkuszy \"Dane\" i \"Raport\".",
      "Zakres A2:D określa kolumny kopiowane do arkusza docelowego.",
      "Jeśli chcesz kopiować tylko wartości, przypisz .Value bez używania schowka."
    ],
    "explanation": [
      "lastRow pozwala zbudować zakres o dynamicznej długości.",
      "Copy Destination kopiuje dane bez konieczności używania Select lub Activate.",
      "Miejsce docelowe A2 oznacza lewy górny róg wklejanego zakresu."
    ],
    "mistakes": [
      "Jeśli w arkuszu docelowym są stare dane poniżej nowego zakresu, wyczyść je przed kopiowaniem.",
      "Kopiowanie całych kolumn jest zwykle niepotrzebnie ciężkie.",
      "Jeżeli potrzebujesz tylko wartości, kopiowanie formatów i formuł może być niepożądane."
    ]
  },
  {
    "slug": "otwieranie-wybor-pliku",
    "title": "VBA — wybór i otwieranie pliku w Excelu",
    "shortTitle": "Wybór i otwieranie pliku",
    "description": "Jak w VBA pokazać okno wyboru pliku i otworzyć wskazany skoroszyt. Obsługa anulowania oraz filtr plików Excel.",
    "category": "Pliki i foldery",
    "difficulty": "Podstawowy",
    "readingTime": "6 min",
    "intro": "Application.GetOpenFilename pozwala użytkownikowi wskazać plik bez wpisywania ścieżki na sztywno.",
    "code": "Sub WybierzIOtworzPlik()\n    Dim filePath As Variant\n    Dim wb As Workbook\n\n    filePath = Application.GetOpenFilename( _\n        FileFilter:=\"Pliki Excel (*.xlsx;*.xlsm),*.xlsx;*.xlsm\", _\n        Title:=\"Wybierz plik Excel\")\n\n    If VarType(filePath) = vbBoolean Then Exit Sub\n\n    Set wb = Workbooks.Open(CStr(filePath))\n\n    MsgBox \"Otwarto: \" & wb.Name\nEnd Sub",
    "customize": [
      "FileFilter możesz rozszerzyć o inne typy plików, np. .xlsb.",
      "Po Workbooks.Open możesz od razu przypisać otwarty skoroszyt do zmiennej i pracować na nim dalej.",
      "Warunek z VarType zabezpiecza makro, gdy użytkownik kliknie Anuluj."
    ],
    "explanation": [
      "GetOpenFilename zwraca wybraną ścieżkę, ale sam nie otwiera pliku.",
      "Workbooks.Open otwiera skoroszyt i zwraca obiekt Workbook.",
      "CStr zamienia zwróconą wartość Variant na tekstową ścieżkę."
    ],
    "mistakes": [
      "Nie zakładaj, że użytkownik zawsze wybierze plik — obsłuż przycisk Anuluj.",
      "Nie używaj ActiveWorkbook jako jedynego odniesienia po otwarciu pliku; lepiej zachować go w zmiennej wb.",
      "Przy plikach tylko do odczytu możesz potrzebować dodatkowych argumentów Workbooks.Open."
    ]
  },
  {
    "slug": "zapis-pliku",
    "title": "VBA — jak zapisać plik Excela?",
    "shortTitle": "Zapis pliku",
    "description": "Jak zapisać skoroszyt z VBA oraz czym różnią się Save i SaveAs. Gotowy kod i najważniejsze pułapki przy formatach plików.",
    "category": "Pliki i foldery",
    "difficulty": "Podstawowy",
    "readingTime": "5 min",
    "intro": "Jeżeli chcesz zapisać bieżące zmiany w tym samym pliku, wystarczy metoda Save na właściwym obiekcie Workbook.",
    "code": "Sub ZapiszPlik()\n    If ThisWorkbook.Path = \"\" Then\n        MsgBox \"Najpierw zapisz skoroszyt ręcznie pod wybraną nazwą.\"\n        Exit Sub\n    End If\n\n    ThisWorkbook.Save\n\n    MsgBox \"Plik zapisany.\"\nEnd Sub",
    "customize": [
      "ThisWorkbook zapisuje skoroszyt zawierający kod VBA, a niekoniecznie aktualnie aktywny plik.",
      "Jeśli potrzebujesz nowej nazwy lub lokalizacji, użyj SaveAs.",
      "Przy SaveAs dobierz rozszerzenie i FileFormat do tego, czy plik ma zachować makra."
    ],
    "explanation": [
      "Path jest pusty dla nowego skoroszytu, który nigdy nie został zapisany.",
      "Save zapisuje zmiany w istniejącej lokalizacji bez wyświetlania okna dialogowego.",
      "Jawne wskazanie ThisWorkbook ogranicza ryzyko zapisania nie tego pliku."
    ],
    "mistakes": [
      "Nie zapisuj skoroszytu z makrami jako .xlsx, jeśli chcesz zachować kod VBA.",
      "ActiveWorkbook może być innym plikiem niż ten, w którym działa makro.",
      "Przy automatycznym SaveAs testuj, czy plik docelowy już istnieje i czy może zostać nadpisany."
    ]
  },
  {
    "slug": "eksport-do-pdf",
    "title": "VBA — eksport arkusza do PDF",
    "shortTitle": "Eksport do PDF",
    "description": "Gotowe makro VBA eksportujące arkusz Excela do PDF. Automatyczna nazwa pliku, ścieżka skoroszytu i ustawienia ExportAsFixedFormat.",
    "category": "Pliki i foldery",
    "difficulty": "Podstawowy",
    "readingTime": "6 min",
    "intro": "Do eksportu arkusza do PDF służy metoda ExportAsFixedFormat. Nie musisz instalować dodatkowej biblioteki.",
    "code": "Sub EksportujPDF()\n    Dim ws As Worksheet\n    Dim filePath As String\n\n    Set ws = ThisWorkbook.Worksheets(\"Raport\")\n\n    If ThisWorkbook.Path = \"\" Then\n        MsgBox \"Najpierw zapisz skoroszyt.\"\n        Exit Sub\n    End If\n\n    filePath = ThisWorkbook.Path & \"\\Raport.pdf\"\n\n    ws.ExportAsFixedFormat _\n        Type:=xlTypePDF, _\n        Filename:=filePath, _\n        Quality:=xlQualityStandard, _\n        IncludeDocProperties:=True, _\n        IgnorePrintAreas:=False, _\n        OpenAfterPublish:=False\n\n    MsgBox \"PDF zapisany: \" & filePath\nEnd Sub",
    "customize": [
      "Zmień \"Raport\" na nazwę eksportowanego arkusza.",
      "Możesz budować nazwę PDF dynamicznie, np. dodając Format(Date, \"yyyymmdd\").",
      "IgnorePrintAreas:=False powoduje respektowanie ustawionego obszaru wydruku."
    ],
    "explanation": [
      "ExportAsFixedFormat zapisuje arkusz bezpośrednio jako plik PDF.",
      "ThisWorkbook.Path używa tego samego folderu, w którym zapisany jest skoroszyt.",
      "OpenAfterPublish:=False zapobiega automatycznemu otwieraniu PDF po eksporcie."
    ],
    "mistakes": [
      "Sprawdź ustawienia strony i obszar wydruku, jeśli PDF jest źle podzielony.",
      "Niezapisany skoroszyt nie ma folderu w ThisWorkbook.Path.",
      "Nazwa pliku nie może zawierać znaków niedozwolonych w Windows, np. dwukropka."
    ]
  },
  {
    "slug": "outlook-email",
    "title": "VBA — wysyłanie maila z Excela przez Outlook",
    "shortTitle": "E-mail przez Outlook",
    "description": "Jak z Excela utworzyć wiadomość e-mail przez VBA i klasyczny Outlook. Gotowy kod z odbiorcą, tematem, treścią i bezpiecznym Display.",
    "category": "E-mail i Outlook",
    "difficulty": "Średni",
    "readingTime": "7 min",
    "intro": "Najbezpieczniejszy wzorzec tworzy wiadomość przez klasyczny Outlook i wyświetla ją użytkownikowi przed wysłaniem.",
    "code": "Sub UtworzEmailOutlook()\n    Dim olApp As Object\n    Dim olMail As Object\n\n    Set olApp = CreateObject(\"Outlook.Application\")\n    Set olMail = olApp.CreateItem(0)\n\n    With olMail\n        .To = \"odbiorca@example.com\"\n        .Subject = \"Raport z Excela\"\n        .Body = \"Dzień dobry,\" & vbCrLf & vbCrLf & _\n                \"W załączeniu przesyłam raport.\"\n        .Display\n    End With\n\n    Set olMail = Nothing\n    Set olApp = Nothing\nEnd Sub",
    "customize": [
      "Zmień adres odbiorcy, temat i treść wiadomości.",
      "Zostaw .Display podczas testów. Dopiero świadomie zamień na .Send, jeśli wiadomości mają być wysyłane automatycznie.",
      "Do załącznika użyj .Attachments.Add z pełną ścieżką do istniejącego pliku."
    ],
    "explanation": [
      "CreateObject(\"Outlook.Application\") uruchamia automatyzację obiektowego modelu klasycznego Outlooka.",
      "CreateItem(0) tworzy nową wiadomość e-mail.",
      "Late binding przez Object nie wymaga ręcznego zaznaczania biblioteki Outlook w References."
    ],
    "mistakes": [
      "Ten sposób dotyczy klasycznego Outlooka dla Windows. Nowy Outlook nie obsługuje automatyzacji COM/VBA.",
      "Nie używaj .Send na etapie testów, jeśli odbiorcy i treść mogą być jeszcze błędne.",
      "Automatyzacja może zależeć od polityk bezpieczeństwa i konfiguracji Office w organizacji."
    ],
    "note": "Nowy Outlook dla Windows nie obsługuje COM/VBA. Ten przykład jest przeznaczony dla klasycznego Outlooka."
  },
  {
    "slug": "przyspieszanie-makr",
    "title": "VBA — jak przyspieszyć makro w Excelu?",
    "shortTitle": "Przyspieszanie makr",
    "description": "Jak przyspieszyć VBA przez ScreenUpdating, Calculation i EnableEvents oraz bezpiecznie przywrócić ustawienia nawet po błędzie.",
    "category": "Wydajność",
    "difficulty": "Średni",
    "readingTime": "7 min",
    "intro": "Największy szybki zysk daje ograniczenie odświeżania ekranu, automatycznych przeliczeń i zdarzeń na czas ciężkiej operacji.",
    "code": "Sub SzybkieMakro()\n    Dim oldCalc As XlCalculation\n\n    oldCalc = Application.Calculation\n    On Error GoTo CleanUp\n\n    Application.ScreenUpdating = False\n    Application.EnableEvents = False\n    Application.Calculation = xlCalculationManual\n\n    ' --- tutaj właściwy kod ---\n    ThisWorkbook.Worksheets(\"Dane\").Range(\"A1\").Value = \"Gotowe\"\n\nCleanUp:\n    Application.Calculation = oldCalc\n    Application.EnableEvents = True\n    Application.ScreenUpdating = True\n\n    If Err.Number <> 0 Then\n        MsgBox \"Błąd \" & Err.Number & \": \" & Err.Description\n    End If\nEnd Sub",
    "customize": [
      "Wstaw właściwą operację w oznaczonym miejscu.",
      "Jeśli kod korzysta z formuł wymagających aktualnego wyniku, wykonaj Calculate w odpowiednim momencie.",
      "Przy bardzo dużych danych największą poprawę zwykle daje ograniczenie odczytów i zapisów komórka po komórce."
    ],
    "explanation": [
      "ScreenUpdating=False wyłącza odświeżanie ekranu podczas działania makra.",
      "EnableEvents=False zapobiega uruchamianiu zdarzeń, np. Worksheet_Change, przez zmiany wykonywane przez kod.",
      "Calculation=xlCalculationManual zatrzymuje automatyczne przeliczanie po każdej zmianie.",
      "Sekcja CleanUp przywraca ustawienia również wtedy, gdy w głównym kodzie wystąpi błąd."
    ],
    "mistakes": [
      "Nigdy nie kończ makra bez przywrócenia Application.EnableEvents i ScreenUpdating.",
      "Wyłączanie Calculation nie pomoże, jeśli głównym problemem jest milion operacji na pojedynczych komórkach.",
      "Select, Activate i częste przełączanie arkuszy zwykle spowalniają kod i utrudniają jego utrzymanie."
    ]
  }
];

export const vbaBySlug = Object.fromEntries(vbaCatalog.map((item) => [item.slug, item]));
