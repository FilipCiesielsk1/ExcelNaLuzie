# SEO Technical v1 — 2026-10-09

## Zakres audytu
- Canonical: absolutny HTTPS, jeden adres na stronę, zgodność z rzeczywistą ścieżką.
- Sitemap: wszystkie indeksowalne strony w mapie, bez 404 i noindex.
- Dane strukturalne: Article i BreadcrumbList — poprawność pozycji, celów i zgodność adresów.
- Linkowanie: wykrywanie kandydatów na strony osierocone (brak wewnętrznych odnośników).
- Metadane, linki 404, budżety zasobów, robots: istniejący `validate-built-site.mjs`.
- Raport JSON: `dist/seo-audit/report.json` (tworzony w buildzie).
- Audyt wykonuje się automatycznie przez `npm run audit:seo` w `npm run build`.

## Dane z Google Search Console
Własność `sc-domain:excelnaluzie.pl` jest podłączona. Sam build nie może potwierdzić indeksowania przez Google. Po wdrożeniu warto sprawdzić raport **Strony** oraz inspekcję kilku nowych adresów.

## Uwagi
Zewnętrzny odczyt publicznych adresów robots.txt i sitemap-index.xml nie był dostępny podczas audytu. Testy sprawdzają rzeczywiste pliki wynikowe z kompilacji.
Nie zmieniano logo V1 ani żadnych plików XLSX.
