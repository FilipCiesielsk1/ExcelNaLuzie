import fs from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const root = path.resolve('dist');
const errors = [];
if (!fs.existsSync(root)) {
  console.error('UI validation failed: brak katalogu dist.');
  process.exit(1);
}
const walk = (dir) => fs.readdirSync(dir, {withFileTypes:true}).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : [full];
});
const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const pageFile = (route) => path.join(root, route.replace(/^\//, ''), 'index.html');
const pages = [
  {route:'/', minOpeners:2},
  {route:'/formuly/', minOpeners:3},
  {route:'/poradniki/', minOpeners:1},
  {route:'/kontakt/', minOpeners:1},
  {route:'/vba/', minOpeners:3},
  {route:'/szablony/', minOpeners:2},
  {route:'/poradniki/xwyszukaj-podstawy/', minOpeners:2},
  {route:'/funkcje/jezeli/', minOpeners:1},
  {route:'/narzedzia/generator-jezeli/', minOpeners:1},
  {route:'/narzedzia/analizator-formul/', minOpeners:1},
  {route:'/narzedzia/konwerter-wyszukaj-pionowo/', minOpeners:1},
  {route:'/narzedzia/porownywarka-tabel/', minOpeners:1},
  {route:'/narzedzia/generator-tabel-przestawnych/', minOpeners:1},
  {route:'/formuly/formatowanie/', minOpeners:1},
  {route:'/narzedzia/generator-formatowania-warunkowego/', minOpeners:1},
  {route:'/uslugi/excel-vba/', minOpeners:1}
];

let checkedHtml = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const location = '/' + path.relative(root, file).replaceAll(path.sep, '/');
  checkedHtml++;
  if (/href=["'][^"']*(?:\/#szukaj|#szukaj)(?:["'?]|$)/i.test(html)) {
    errors.push(location + ': stary, niedziałający link do wyszukiwarki');
  }
  if (/id=["'](?:site-search|szukaj)["']/i.test(html)) {
    errors.push(location + ': stara wyszukiwarka nadal jest w HTML');
  }
  if ((html.match(/\bdata-global-search\b(?=[\s>])/g) || []).length !== 1) {
    errors.push(location + ': oczekiwano jednej globalnej wyszukiwarki');
  }
  if (!/<button\b[^>]*\bdata-global-search-open\b/i.test(html)) {
    errors.push(location + ': brak przycisku otwierającego wyszukiwarkę');
  }
  if (!/<meta\b[^>]*name=["']viewport["'][^>]*width=device-width/i.test(html)) {
    errors.push(location + ': brak responsywnego viewport');
  }
}
for (const {route, minOpeners} of pages) {
  const file = pageFile(route);
  if (!fs.existsSync(file)) {
    errors.push(route + ': brak strony testowej');
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const openers = (html.match(/<button\b[^>]*\bdata-global-search-open\b/gi) || []).length;
  if (openers < minOpeners) errors.push(route + ': zbyt mało aktywnych przycisków wyszukiwarki: ' + openers);
}

const sourceDir = path.resolve('src');
const sourceFiles = walk(sourceDir).filter((file) => /\.(?:astro|js)$/i.test(file));
for (const file of sourceFiles) {
  const source = fs.readFileSync(file,'utf8');
  if (source.includes('/#szukaj')) {
    errors.push(path.relative(sourceDir,file) + ': stary odnośnik /#szukaj w źródle');
  }
  if (/import\s+Search\s+from\s+['"][^'"]+\/Search\.astro['"]/.test(source)) {
    errors.push(path.relative(sourceDir,file) + ': import nieużywanej wyszukiwarki');
  }
}
const cssSource = fs.readFileSync('src/styles/global.css','utf8');
const uxCssSource = fs.readFileSync('public/css/ux-polish-v1.css','utf8');
const headerSource = fs.readFileSync('src/components/Header.astro','utf8');
const required = [
  ['mobilny panel od góry', /\.global-search-layer\s*\{[^}]*place-items:\s*start center/s.test(uxCssSource)],
  ['obsługa klawiatury w oknie wyszukiwania', /searchLayer\?\.addEventListener\('keydown'/.test(headerSource)],
  ['układ jednokolumnowy klastrów', /\.home-paths-grid,\.home-cluster-grid,\.home-tools-grid\{grid-template-columns:1fr\}/.test(cssSource)],
  ['mobilny układ formularza', /\.criteria-row\s*\{\s*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(0,\s*100px\)/.test(cssSource)],
  ['mobilny rozmiar pól formularzy', /font-size:\s*16px;/.test(cssSource)],
  ['przewijanie podglądu szablonu', /\.xlsx-preview-tabs\s*\{[^}]*overflow-x:\s*auto/s.test(cssSource)]
];
for (const [description, ok] of required) if (!ok) errors.push('Kontrola mobilna: ' + description);

// Polish v1 smoke checks: mobile navigation, functional directory filtering and legible guidance.
const baseLayoutSource = fs.readFileSync('src/layouts/BaseLayout.astro','utf8');
if (!baseLayoutSource.includes('/css/ux-polish-v1.css')) errors.push('UX v1: brak linku do arkusza wyszukiwania i czytelności');
const articleLayoutSource = fs.readFileSync('src/layouts/ArticleLayout.astro', 'utf8');
const toolsDirectorySource = fs.readFileSync('src/pages/narzedzia/index.astro', 'utf8');
if (!/\@media\s*\(max-width:\s*720px\)[\s\S]*?\.site-header\s+\.header-search\s*\{\s*display:\s*inline-flex;/.test(uxCssSource)) {
  errors.push('UX v1: wyszukiwarka musi pozostać widoczna na telefonie');
}
if (!articleLayoutSource.includes('data-article-toc-mobile') ||
    !articleLayoutSource.includes("mobileTocLinks.appendChild") ||
    !uxCssSource.includes('.article-toc-mobile nav a')) {
  errors.push('UX v1: brak aktywnego mobilnego spisu treści');
}
const cardGroups = [...toolsDirectorySource.matchAll(/data-tool-card data-tool-category="(formula|data|format)"/g)];
if (cardGroups.length !== 15 || new Set(cardGroups.map((match) => match[1])).size !== 3) {
  errors.push('UX v1: katalog narzędzi musi zawierać 15 sklasyfikowanych kart');
}
if (!toolsDirectorySource.includes('data-tool-filter') ||
    !toolsDirectorySource.includes('aria-pressed') ||
    !toolsDirectorySource.includes("card.hidden = !match")) {
  errors.push('UX v1: przyciski filtrowania narzędzi nie są prawidłowo podłączone');
}
if (!uxCssSource.includes(':focus-visible') ||
    !uxCssSource.includes('prefers-reduced-motion') ||
    !uxCssSource.includes('.article-meta>span')) {
  errors.push('UX v1: brak podstawowych usprawnień czytelności i dostępności');
}
const toolsPageHtml = fs.existsSync(pageFile('/narzedzia/'))
  ? fs.readFileSync(pageFile('/narzedzia/'), 'utf8') : '';
if ((toolsPageHtml.match(/data-tool-card(?=[\s>])/g) || []).length !== 15) {
  errors.push('UX v1: po buildzie brakuje 15 kart z filtrowaniem');
}
const sampleArticleHtml = fs.existsSync(pageFile('/poradniki/xwyszukaj-podstawy/'))
  ? fs.readFileSync(pageFile('/poradniki/xwyszukaj-podstawy/'), 'utf8') : '';
if (!sampleArticleHtml.includes('data-article-toc-mobile-links')) {
  errors.push('UX v1: mobilny spis treści nie został wyrenderowany w artykule');
}


/* UX feedback 2026-10-09: user-reviewed fixes for guides, contact, navigation and usability. */
const feedbackCss = uxCssSource;
const readSrc=(path)=>fs.readFileSync(path,'utf8');
const headerMarkup=readSrc('src/components/Header.astro');
const footerMarkup=readSrc('src/components/Footer.astro');
const functionsMarkup=readSrc('src/pages/funkcje/index.astro');
const toolsMarkup=readSrc('src/pages/narzedzia/index.astro');
const vbaMarkup=readSrc('src/pages/vba/index.astro');
const serviceMarkup=readSrc('src/pages/uslugi/excel-vba/index.astro');
const homepageMarkup=readSrc('src/pages/index.astro');
const templatesMarkup=readSrc('src/pages/szablony/index.astro');
if (!headerMarkup.includes("href: '/poradniki/'") ||
    !headerMarkup.includes('nav-item-featured') ||
    !headerMarkup.includes('nav-item-collab')) errors.push('Feedback: brak Poradników lub wyróżnienia nawigacji');
if (!footerMarkup.includes('link("/kontakt/")')) errors.push('Feedback: brak Kontaktu w stopce');
if (!functionsMarkup.includes('<a class="function-card"') ||
    functionsMarkup.includes("highlighted: fn.slug") ||
    functionsMarkup.includes('Jak czytać bazę')) errors.push('Feedback: kafelki funkcji nie są spójne i w całości klikalne');
if (vbaMarkup.includes('Standard poradników') || toolsMarkup.includes('Od pól do gotowej formuły')) errors.push('Feedback: zbędna sekcja nadal widoczna');
if (toolsMarkup.includes('Bez instalacji i bez przesyłania danych na serwer.') ||
    toolsMarkup.includes('Wszystko liczy się lokalnie w przeglądarce.')) errors.push('Feedback: zbędne komunikaty na Narzędziach');
if (!templatesMarkup.includes('Każdy plik zawiera przykładowe dane i osobny arkusz z instrukcją.')) errors.push('Feedback: błędny opis szablonów');
if (serviceMarkup.includes('Nie musisz znać nazw funkcji ani technologii.') ||
    serviceMarkup.includes('Bez konta i bez załączników') ||
    serviceMarkup.includes('Zapytania z formularza będą kierowane automatycznie na ten adres.')) errors.push('Feedback: nieusunięte komunikaty usługi');
if (!serviceMarkup.includes('service-hero-primary') ||
    !homepageMarkup.includes('Potrzebujesz własnego rozwiązania w Excelu?') ||
    !feedbackCss.includes('.service-home-strip h2')) errors.push('Feedback: brak wyróżnienia współpracy');
if (!feedbackCss.includes('.article-content a[href$=".xlsx"]')) errors.push('Feedback: brak globalnego stylu pobierania XLSX');
for(const route of ['/kontakt/','/poradniki/']) {
  const htmlFile=pageFile(route);
  if (!fs.existsSync(htmlFile)) continue;
  const html=fs.readFileSync(htmlFile,'utf8');
  if (!html.includes('application/ld+json')) errors.push('Feedback: brak danych strukturalnych na '+route);
  if (route==='/kontakt/' && !html.includes('mailto:excelnaluzie@gmail.com')) errors.push('Feedback: nieprawidłowy link e-mail w Kontakcie');
  if (route==='/poradniki/' && !html.includes('data-guide-search')) errors.push('Feedback: brak filtrowania poradników');
}
const funcsPage=pageFile('/funkcje/');
if(fs.existsSync(funcsPage)) {
  const html=fs.readFileSync(funcsPage,'utf8');
  if ((html.match(/<a class="function-card"/g)||[]).length < 10) errors.push('Feedback: pełne kafelki funkcji nie są linkami');
}

const cssAssets = files.filter((file) => file.endsWith('.css') && file.includes(path.sep + '_astro' + path.sep));
const jsAssets = files.filter((file) => file.endsWith('.js') && file.includes(path.sep + '_astro' + path.sep));
const largestCss = cssAssets.map((file)=>({file:path.relative(root,file),bytes:gzipSync(fs.readFileSync(file),{level:9}).length}))
  .sort((a,b)=>b.bytes-a.bytes);
const largestJs = jsAssets.map((file)=>({file:path.relative(root,file),bytes:gzipSync(fs.readFileSync(file),{level:9}).length}))
  .sort((a,b)=>b.bytes-a.bytes);
for (const asset of largestCss) if (asset.bytes > 36*1024) errors.push('CSS gzip >36 KiB: '+asset.file);
for (const asset of largestJs) if (asset.bytes > 35*1024) errors.push('JS gzip >35 KiB: '+asset.file);

if (errors.length) {
  console.error('UI/performance validation failed:');
  for (const error of errors) console.error(' - '+error);
  process.exit(1);
}
console.log('UI/mobile validation OK: ' + checkedHtml + ' stron HTML, ' + pages.length + ' tras kontrolnych.');
console.log('Largest CSS gzip: ' + (largestCss[0]?.bytes ?? 0) + ' B; largest JS gzip: ' + (largestJs[0]?.bytes ?? 0) + ' B.');
