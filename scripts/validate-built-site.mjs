import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const productionOrigin = 'https://excelnaluzie.pl';

if (!fs.existsSync(dist)) {
  console.error('Built-site validation failed: brak katalogu dist.');
  process.exit(1);
}

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : [full];
});

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const errors = [];
const warnings = [];
const canonicals = new Map();

// Performance budget: keep the static site lightweight.
// Pagefind assets are intentionally excluded because they are loaded lazily by the search UI.
const kib = (bytes) => Math.round(bytes / 1024);
for (const file of files) {
  const relative = rel(file);
  const size = fs.statSync(file).size;

  if (file.endsWith('.html') && size > 100 * 1024) {
    errors.push(`${relative}: HTML ma ${kib(size)} KiB; budżet to 100 KiB`);
  }

  if (relative.startsWith('/_astro/') && file.endsWith('.css') && size > 100 * 1024) {
    errors.push(`${relative}: CSS ma ${kib(size)} KiB; budżet to 100 KiB`);
  }

  if (relative.startsWith('/_astro/') && file.endsWith('.js') && size > 80 * 1024) {
    errors.push(`${relative}: JS ma ${kib(size)} KiB; budżet to 80 KiB`);
  }

  if (/\.(png|jpe?g|webp|avif)$/i.test(file) && size > 350 * 1024) {
    warnings.push(`${relative}: obraz ma ${kib(size)} KiB; sprawdź kompresję`);
  }
}

const rel = (file) => '/' + path.relative(dist, file).replaceAll(path.sep, '/');
const textOf = (html, tag) => html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1]?.replace(/<[^>]+>/g, '').trim() ?? '';
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, 'i'))?.[1] ?? '';

const resolveInternalTarget = (href) => {
  if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;

  let url;
  try {
    url = href.startsWith('http')
      ? new URL(href)
      : new URL(href, productionOrigin);
  } catch {
    return null;
  }

  if (url.origin !== productionOrigin) return null;
  const pathname = decodeURIComponent(url.pathname);

  if (/\.[a-z0-9]{2,8}$/i.test(pathname)) {
    return path.join(dist, pathname.replace(/^\/+/, ''));
  }

  return path.join(dist, pathname.replace(/^\/+/, ''), 'index.html');
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const page = rel(file);

  if (!/<html\b[^>]*lang=["']pl["']/i.test(html)) {
    errors.push(`${page}: brak lang="pl" na elemencie html`);
  }

  if (!/<meta\b[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width[^"']*initial-scale=1/i.test(html)) {
    errors.push(`${page}: brak kompletnego viewport width=device-width, initial-scale=1`);
  }

  if (!/<main\b[^>]*id=["']main-content["']/i.test(html)) {
    errors.push(`${page}: brak głównego regionu #main-content`);
  }

  if (!/<a\b[^>]*class=["'][^"']*skip-link[^"']*["'][^>]*href=["']#main-content["']/i.test(html)) {
    errors.push(`${page}: brak linku „Przejdź do treści”`);
  }

  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((m) => m[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  for (const id of duplicateIds) errors.push(`${page}: zduplikowany id="${id}"`);

  if (/filipciesielsk1\.github\.io|\/ExcelNaLuzie\//i.test(html)) {
    errors.push(`${page}: zawiera stary adres GitHub Pages lub ścieżkę /ExcelNaLuzie/`);
  }

  const title = textOf(html, 'title');
  if (!title) errors.push(`${page}: brak <title>`);
  else if (title.length > 70) warnings.push(`${page}: title ma ${title.length} znaków`);

  const descriptions = [...html.matchAll(/<meta\b[^>]*name=["']description["'][^>]*>/gi)];
  if (descriptions.length !== 1) {
    errors.push(`${page}: oczekiwano 1 meta description, znaleziono ${descriptions.length}`);
  } else {
    const description = attr(descriptions[0][0], 'content');
    if (!description) errors.push(`${page}: puste meta description`);
    else if (description.length > 170) warnings.push(`${page}: description ma ${description.length} znaków`);
  }

  const canonicalTags = [...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi)];
  if (canonicalTags.length !== 1) {
    errors.push(`${page}: oczekiwano 1 canonical, znaleziono ${canonicalTags.length}`);
  } else {
    const canonical = attr(canonicalTags[0][0], 'href');
    if (!canonical.startsWith(productionOrigin + '/')) {
      errors.push(`${page}: canonical nie wskazuje na HTTPS excelnaluzie.pl: ${canonical}`);
    } else {
      const previous = canonicals.get(canonical);
      if (previous) errors.push(`${page}: duplikat canonical ${canonical} (także ${previous})`);
      else canonicals.set(canonical, page);
    }
  }

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`${page}: oczekiwano dokładnie 1 H1, znaleziono ${h1Count}`);

  const hrefs = [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
  for (const href of hrefs) {
    const target = resolveInternalTarget(href);
    if (!target) continue;
    if (!fs.existsSync(target)) {
      errors.push(`${page}: niedziałający link wewnętrzny ${href}`);
    }
  }
}

const sitemapIndex = path.join(dist, 'sitemap-index.xml');
const sitemapMain = path.join(dist, 'sitemap-0.xml');
const robots = path.join(dist, 'robots.txt');

if (!fs.existsSync(sitemapIndex)) errors.push('/sitemap-index.xml: brak pliku');
if (!fs.existsSync(sitemapMain)) errors.push('/sitemap-0.xml: brak pliku');

let sitemapUrls = new Set();
if (fs.existsSync(sitemapMain)) {
  const xml = fs.readFileSync(sitemapMain, 'utf8');
  if (/http:\/\/excelnaluzie\.pl/i.test(xml)) errors.push('/sitemap-0.xml: zawiera adres HTTP zamiast HTTPS');
  sitemapUrls = new Set([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim()));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const canonical = [...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi)]
    .map((m) => attr(m[0], 'href'))[0];

  const noindex = /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);
  if (!canonical) continue;

  if (noindex && sitemapUrls.has(canonical)) {
    errors.push(`${rel(file)}: strona noindex znajduje się w sitemap: ${canonical}`);
  }
  if (!noindex && !sitemapUrls.has(canonical)) {
    errors.push(`${rel(file)}: indeksowalna strona nie znajduje się w sitemap: ${canonical}`);
  }
}

if (!fs.existsSync(robots)) {
  errors.push('/robots.txt: brak pliku');
} else {
  const body = fs.readFileSync(robots, 'utf8');
  if (!body.includes('Sitemap: https://excelnaluzie.pl/sitemap-index.xml')) {
    errors.push('/robots.txt: brak poprawnego adresu sitemap HTTPS');
  }
}

if (warnings.length) {
  console.warn('\nBuilt-site validation warnings:\n');
  for (const warning of warnings) console.warn(' - ' + warning);
}

if (errors.length) {
  console.error('\nBuilt-site validation failed:\n');
  for (const error of [...new Set(errors)]) console.error(' - ' + error);
  console.error('');
  process.exit(1);
}

console.log(`Built-site validation OK: ${htmlFiles.length} HTML page(s), ${sitemapUrls.size} sitemap URL(s).`);
