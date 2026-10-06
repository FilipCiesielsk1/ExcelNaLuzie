# ExcelNaLuzie — instrukcje dla AI

## Cel projektu
ExcelNaLuzie.pl to polski portal problem-solvingowy o Excelu. Priorytetem jest ruch organiczny z Google, szybkość strony i realna użyteczność treści.

## Zasady tworzenia artykułów
- Nowe poradniki twórz wyłącznie w `src/pages/poradniki/` jako pliki `.md`.
- Używaj `templates/article-seo.md` jako wzoru.
- Nie używaj importów ani komponentów Astro wewnątrz zwykłego Markdownu.
- Nie dodawaj własnego H1. H1 jest generowany z `title` przez `ArticleLayout.astro`.
- Formuły Excela zapisuj jako `<div class="formula">=...</div>`. Layout automatycznie doda przycisk kopiowania.
- Najważniejsze rozwiązanie ma znaleźć się na początku artykułu, przed pierwszym H2.
- Każdy artykuł ma odpowiadać jednej głównej intencji wyszukiwania.
- Nie pisz ogólnych wstępów typu „Excel to popularny program...”.
- Dodawaj realny przykład danych i wynik.
- Dodawaj warianty rozwiązania tylko wtedy, gdy pomagają użytkownikowi.
- Dodawaj linki wewnętrzne przez pole `related`.
- Pole `verified` ustawiaj na `true` wyłącznie po faktycznym sprawdzeniu przykładu.
- Nie twórz masowo cienkich stron tylko po to, by zwiększyć liczbę URL-i.
- Nie dodawaj FAQ schema. FAQ w treści może być użyteczne, ale nie traktuj go jako sztuczki SEO.

## Wymagane frontmatter
`title`, `description`, `slug`, `category`, `categorySlug`, `date`, `updated`, `author`, `readingTime`, `difficulty`, `excelVersions`, `verified`.

## Styl
- Konkret przed teorią.
- Krótkie akapity.
- Polski Excel: polskie nazwy funkcji i średniki w formułach, chyba że artykuł dotyczy wersji angielskiej.
- Bez keyword stuffingu.
- Bez sztucznego wydłużania tekstu.
- Ton praktyczny i profesjonalny, ale prosty.

## Przed publikacją
Uruchom `npm run build`. Build zawiera walidację treści i ma zakończyć się sukcesem.
