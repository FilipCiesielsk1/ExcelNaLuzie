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
  {route:'/uslugi/excel-vba/', minOpeners:1},
  {route:'/realizacje/', minOpeners:1},
  {route:'/realizacje/sales-performance-dashboard/', minOpeners:1}
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
if (cardGroups.length !== 19 || new Set(cardGroups.map((match) => match[1])).size !== 3) {
  errors.push('UX v1: katalog narzędzi musi zawierać 19 sklasyfikowanych kart');
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
if ((toolsPageHtml.match(/data-tool-card(?=[\s>])/g) || []).length !== 19) {
  errors.push('UX v2: po buildzie brakuje 19 kart z filtrowaniem');
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
if (!templatesMarkup.includes('templateCatalog.filter(t=>t.pro).length') || !templatesMarkup.includes('pobieranie wszystkich plików XLSX jest tymczasowo wyłączone.')) errors.push('Feedback: brak aktualnego komunikatu o wstrzymaniu pobierania szablonów');
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

// Online Tools v2: every interactive page must be built, indexable and wired to its client app.
for (const [slug, marker] of [
  ['czyszczenie-danych','data-cleaner'],
  ['tekst-na-kolumny','data-splitter'],
  ['usuwanie-duplikatow','data-deduper'],
  ['kalkulator-czasu-pracy','data-worktime']
]) {
  const page=pageFile('/narzedzia/'+slug+'/');
  if (!fs.existsSync(page)) { errors.push('Narzędzia v2: brak trasy '+slug); continue; }
  const html=fs.readFileSync(page,'utf8');
  if (!html.includes(marker) || !html.includes('data-pagefind-body')) errors.push('Narzędzia v2: brak interakcji lub indeksowania '+slug);
  if (!html.includes('WebApplication') || !html.includes('BreadcrumbList')) errors.push('Narzędzia v2: brak danych SEO '+slug);
}

// Portfolio v1: real workbook-based feature descriptions, discoverability and import file.
for (const route of ['/realizacje/','/realizacje/sales-performance-dashboard/']) {
  const file = pageFile(route);
  if (!fs.existsSync(file)) {errors.push('Portfolio: missing '+route);continue;}
  const html=fs.readFileSync(file,'utf8');
  if (!html.includes('data-pagefind-body')) errors.push('Portfolio: Pagefind is missing from '+route);
  if (!html.includes('BreadcrumbList')) errors.push('Portfolio: structured breadcrumbs missing from '+route);
  if (/projekt fikcyjny|fikcyjna realizacja|zrealizowano dla klienta/i.test(html))
    errors.push('Portfolio: unsupported client attribution or description on '+route);
}
// Portfolio media: verify every uploaded asset is included in the publish artifact.
const portfolioMedia='/media/realizacje/sales-performance-dashboard/';
const mediaImages=[
 '01_dashboard_glowny.webp','02_dashboard_filtry.webp','03_dashboard_wykresy.webp',
 '04_dane_sprzedazy.webp','05_cele_sprzedazowe.webp','06_import_csv.webp','07_raport_pdf.webp'
];
const mediaClips=[
 '01_zmiana_miesiaca.webm','02_zmiana_regionu.webm','03_import_csv.webm','04_eksport_pdf.webm'
];
for(const name of [...mediaImages,...mediaClips]){
  const full=path.join(root,portfolioMedia,name);
  if(!fs.existsSync(full)){errors.push('Portfolio: brak pliku medialnego '+name);continue;}
  const head=fs.readFileSync(full).subarray(0,12);
  if(name.endsWith('.webp')&&(head.toString('ascii',0,4)!=='RIFF'||head.toString('ascii',8,12)!=='WEBP'))
    errors.push('Portfolio: uszkodzony WebP '+name);
  if(name.endsWith('.webm')&&(head[0]!==0x1a||head[1]!==0x45||head[2]!==0xdf||head[3]!==0xa3))
    errors.push('Portfolio: nieprawidłowy WebM '+name);
  if(name.endsWith('.webm')&&fs.statSync(full).size>750000)
    errors.push('Portfolio: film przekracza budżet 750 kB '+name);
}
const caseHtml=fs.readFileSync(pageFile('/realizacje/sales-performance-dashboard/'),'utf8');
const catalogHtml=fs.readFileSync(pageFile('/realizacje/'),'utf8');
for(const name of [...mediaImages,...mediaClips]){
  if(!caseHtml.includes(name)) errors.push('Portfolio: brak referencji do '+name+' na stronie realizacji');
}
if(!catalogHtml.includes('01_dashboard_glowny.webp'))
  errors.push('Portfolio: katalog nie pokazuje prawdziwego dashboardu');
if(caseHtml.includes('portfolio-dashboard-filters')||catalogHtml.includes('portfolio-dashboard-filters'))
  errors.push('Portfolio: pozostał syntetyczny podgląd HTML dashboardu');
if((caseHtml.match(/<video\b/g)||[]).length!==4)
  errors.push('Portfolio: oczekiwano 4 filmów z kontrolkami');
if((caseHtml.match(/<button\b[^>]*data-portfolio-open\b/g)||[]).length<7)
  errors.push('Portfolio: oczekiwano co najmniej 7 przycisków powiększenia zrzutów');
if(!caseHtml.includes('portfolio-lightbox')||!caseHtml.includes('data-portfolio-close'))
  errors.push('Portfolio: brak dostępnej galerii z zamykaniem');
// Demo is now supplied. Verify the actual downloadable XLSM, not just a visible CTA.
const dashboardDemoFilename='Sales_Performance_Dashboard_demo.xlsm';
const dashboardDemoPath=path.join(root,'downloads/realizacje',dashboardDemoFilename);
const dashboardDemoUrl='/downloads/realizacje/'+dashboardDemoFilename;
if(fs.existsSync(dashboardDemoPath)){
  const demoStat=fs.statSync(dashboardDemoPath);
  const demoSignature=fs.readFileSync(dashboardDemoPath).subarray(0,4);
  if(demoStat.size<10000||demoSignature.toString('hex')!=='504b0304')
    errors.push('Portfolio: demo XLSM jest puste lub nie jest prawidłowym archiwum Office');
  if(!caseHtml.includes(dashboardDemoUrl)||!caseHtml.includes('Pobierz wersję demo (.xlsm)'))
    errors.push('Portfolio: demo XLSM nie ma działającego odnośnika na stronie realizacji');
}else if(caseHtml.includes(dashboardDemoUrl)||caseHtml.includes('Pobierz wersję demo (.xlsm)')){
  errors.push('Portfolio: aktywny link do nieistniejącego demo XLSM');
}

// Portfolio v4: four complete-looking cards, no placeholder CTAs or dead links.
const catalogue=fs.readFileSync(pageFile('/realizacje/'),'utf8');
const servicesPage=fs.readFileSync(pageFile('/uslugi/excel-vba/'),'utf8');
const projects=['Sales Performance Dashboard PRO','Transport Planner PRO','Inventory Control PRO','CRM Workflow PRO'];
if(!catalogue.includes('id="projekty"')||!catalogue.includes('portfolio-showcase-grid'))
  errors.push('Portfolio v4: brak galerii projektów');
for(const project of projects){
  if(!catalogue.includes(project))errors.push('Portfolio v4: brak projektu w katalogu '+project);
  if(!servicesPage.includes(project))errors.push('Współpraca v4: brak karty projektu '+project);
}
if((catalogue.match(/class="portfolio-showcase-card"/g)||[]).length!==4)
  errors.push('Portfolio v4: oczekiwano czterech kompletnych kart');
if((servicesPage.match(/class="service-project-card(?: service-project-card-live)?"/g)||[]).length!==4)
  errors.push('Współpraca v4: oczekiwano czterech kompletnych kart');
if(/Miejsce na następne realizacje|Następna realizacja|Miejsce na kolejny projekt|W przygotowaniu/.test(catalogue))
  errors.push('Portfolio v4: usunąć techniczne placeholdery z prezentacji');
if(!catalogue.includes('Karty bez odnośników prezentują koncepcje')||
   !servicesPage.includes('Podglądy kart bez linków przedstawiają koncepcje'))
  errors.push('Portfolio v4: brak oznaczenia podglądów koncepcyjnych');
if(!catalogue.includes('portfolio-visual-transport')||!catalogue.includes('portfolio-visual-stock')||!catalogue.includes('portfolio-visual-crm'))
  errors.push('Portfolio v4: brak odrębnych podglądów graficznych dla kolejnych projektów');
if(!servicesPage.includes('href="/realizacje/"')||!servicesPage.includes('Sales Performance Dashboard PRO'))
  errors.push('Współpraca v4: brak przejścia do katalogu i gotowej realizacji');
const catalogSource=fs.readFileSync('src/pages/realizacje/index.astro','utf8');
const serviceSource=fs.readFileSync('src/pages/uslugi/excel-vba/index.astro','utf8');
if(/href=\{link\('\/realizacje\/(?:transport|inventory|crm)/.test(catalogSource+serviceSource))
  errors.push('Portfolio v4: niedozwolony link do niewydanego projektu');
if(!caseHtml.includes('Wszystkie dane wykorzystane w tej realizacji są demonstracyjne'))
  errors.push('Dashboard: brak informacji o demonstracyjnych danych');
const mobileHeader=fs.readFileSync('src/components/Header.astro','utf8');
const mobileNavPart=mobileHeader.split('class="mobile-menu-panel"')[1]?.split('</nav>')[0]||'';
if(!mobileNavPart.includes('"nav-item-featured"')||!mobileNavPart.includes('"nav-item-collab"'))
  errors.push('Menu mobilne: brak wyróżnienia Szablonów i Współpracy');
const mobileCss=fs.readFileSync('public/css/ux-polish-v1.css','utf8');
if(!mobileCss.includes('.site-header .mobile-menu-panel a.nav-item-featured')||
   !mobileCss.includes('.site-header .mobile-menu-panel a.nav-item-collab'))
  errors.push('Menu mobilne: brak stylów wyróżnienia ważnych linków');

// Download pause: none of the unfinished Excel templates may be reachable on Pages.
const publicTemplateDir=path.join(root,'downloads/szablony');
if(fs.existsSync(publicTemplateDir)){
  const exposed=walk(publicTemplateDir).filter(file=>/\.(xlsx|xlsm|xls|xlsb)$/i.test(file));
  if(exposed.length) errors.push('Bezpieczeństwo: opublikowano niedopracowane szablony: '+exposed.map(x=>path.basename(x)).join(', '));
}
for(const file of htmlFiles){
  const html=fs.readFileSync(file,'utf8');
  if(/href=["'][^"']*\/downloads\/szablony\/[^"']+\.(?:xlsx|xlsm|xls|xlsb)/i.test(html)||
     /contentUrl["']?\s*:\s*["']https?:\/\/[^"']*\/downloads\/szablony\//i.test(html))
    errors.push('Szablony: aktywny odnośnik do zablokowanego pliku w '+path.relative(root,file));
}
const libraryHtml=fs.readFileSync(pageFile('/szablony/'),'utf8');
if(!libraryHtml.includes('Szablony są chwilowo niedostępne do pobrania'))
  errors.push('Szablony: brak komunikatu o wstrzymaniu pobierania w bibliotece');
const {templateCatalog}=await import('../src/data/templateCatalog.js');
if(templateCatalog.length!==9)errors.push('Szablony: nieoczekiwana zmiana katalogu');
for(const template of templateCatalog){
  const page=pageFile('/szablony/'+template.slug+'/');
  if(!fs.existsSync(page)){errors.push('Szablony: brak podstrony '+template.slug);continue;}
  const html=fs.readFileSync(page,'utf8');
  if(!html.includes('Pobieranie szablonów jest tymczasowo wstrzymane')||
     !html.includes('template-download-disabled')||
     /href=["'][^"']*\/downloads\/szablony\//i.test(html))
    errors.push('Szablony: podstrona '+template.slug+' nie ma skutecznej blokady');
}

const csvPortfolio=path.join(root,'downloads/realizacje/sales-performance-import.csv');
if (!fs.existsSync(csvPortfolio)) errors.push('Portfolio: supplied CSV is missing');
else {
  const csvText=fs.readFileSync(csvPortfolio,'utf8');
  if (!csvText.includes('ID transakcji;Data;Numer zamówienia') || !csvText.includes('TEST-NEW-002'))
    errors.push('Portfolio: CSV content was changed');
}
const linksToPortfolio=[
  ['src/components/Header.astro',"/realizacje/"],
  ['src/components/Footer.astro',"/realizacje/"],
  ['src/pages/index.astro',"/realizacje/sales-performance-dashboard/"],
  ['src/pages/uslugi/excel-vba/index.astro',"/realizacje/sales-performance-dashboard/"]
];
for(const [src,target] of linksToPortfolio) if(!fs.readFileSync(src,'utf8').includes(target))
  errors.push('Portfolio: missing internal link '+src+' -> '+target);

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
