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
  {route:'/vba/', minOpeners:3},
  {route:'/szablony/', minOpeners:2},
  {route:'/poradniki/xwyszukaj-podstawy/', minOpeners:2},
  {route:'/funkcje/jezeli/', minOpeners:1},
  {route:'/narzedzia/generator-jezeli/', minOpeners:1},
  {route:'/narzedzia/analizator-formul/', minOpeners:1},
  {route:'/narzedzia/konwerter-wyszukaj-pionowo/', minOpeners:1},
  {route:'/narzedzia/porownywarka-tabel/', minOpeners:1},
  {route:'/narzedzia/generator-tabel-przestawnych/', minOpeners:1}
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
const headerSource = fs.readFileSync('src/components/Header.astro','utf8');
const required = [
  ['mobilny panel od góry', /\.global-search-layer\s*\{[^}]*place-items:\s*start center/s.test(headerSource)],
  ['obsługa klawiatury w oknie wyszukiwania', /searchLayer\?\.addEventListener\('keydown'/.test(headerSource)],
  ['układ jednokolumnowy klastrów', /\.home-paths-grid,\.home-cluster-grid,\.home-tools-grid\{grid-template-columns:1fr\}/.test(cssSource)],
  ['mobilny układ formularza', /\.criteria-row\s*\{\s*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(0,\s*100px\)/.test(cssSource)],
  ['mobilny rozmiar pól formularzy', /font-size:\s*16px;/.test(cssSource)],
  ['przewijanie podglądu szablonu', /\.xlsx-preview-tabs\s*\{[^}]*overflow-x:\s*auto/s.test(cssSource)]
];
for (const [description, ok] of required) if (!ok) errors.push('Kontrola mobilna: ' + description);

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
