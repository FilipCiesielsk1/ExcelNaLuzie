import fs from 'node:fs';
import path from 'node:path';
import { functionCatalog } from '../src/data/functionCatalog.js';

const directory = path.resolve('src/pages/funkcje');
const markdown = fs.readdirSync(directory).filter(file => file.endsWith('.md')).sort();
const catalogSlugs = new Set(functionCatalog.map(item => item.slug));
const errors = [];

if (markdown.length !== 53 || functionCatalog.length !== 53)
  errors.push('Oczekiwano 53 opisów Markdown i 53 pozycji w katalogu.');
if (catalogSlugs.size !== functionCatalog.length)
  errors.push('Katalog zawiera powtarzające się slugi.');

const filler = [
  'Drugi zapis łączy funkcję',
  'Ten wariant pokazuje zastosowanie funkcji',
  'Druga formuła pokazuje dodatkowy sposób użycia funkcji',
  'Druga formuła przedstawia kolejny wariant tego samego działania',
  'Zacznij od pojedynczego przykładu, którego poprawny wynik',
  'Na początku przetestuj obliczenie na małym zestawie liczb',
  'Przy pierwszym użyciu wstaw formułę do komórki obok danych testowych',
  'Zacznij od komórki testowej i porównaj wynik'
];

for (const filename of markdown) {
  const slug = path.basename(filename, '.md');
  const content = fs.readFileSync(path.join(directory, filename), 'utf8');
  const item = functionCatalog.find(entry => entry.slug === slug);

  if (!item) { errors.push(slug + ': brak w functionCatalog.js'); continue; }
  if (!new RegExp('^slug:\\s*["' + "'" + ']' + slug + '["' + "'" + ']\\s*$', 'm').test(content))
    errors.push(slug + ': brak poprawnego slug we frontmatter');
  if (!item.name || !item.description || !item.syntax || !item.example ||
      !Array.isArray(item.arguments) || !item.arguments.length ||
      !Array.isArray(item.versions) || !item.versions.length)
    errors.push(slug + ': niepełne dane funkcji w katalogu');
  if (!item.docs?.startsWith('https://support.microsoft.com/'))
    errors.push(slug + ': brak poprawnego źródła dokumentacji Microsoft');

  const titles = [...content.matchAll(/^## (.+)$/gm)].map(match => match[1]);
  if (new Set(titles).size !== titles.length)
    errors.push(slug + ': powtarzający się nagłówek H2');
  if (titles.length < 3)
    errors.push(slug + ': za mało opisów zastosowania i pułapek');
  const formulas = [...content.matchAll(/<div class="formula">([\s\S]*?)<\/div>/g)].map(match => match[1].trim());
  if (!formulas.length)
    errors.push(slug + ': brak przykładu formuły w treści');
  const counts = new Map();
  for (const formula of formulas) counts.set(formula, (counts.get(formula) || 0) + 1);
  if ([...counts.values()].some(count => count > 2))
    errors.push(slug + ': formuła wklejona więcej niż dwukrotnie');
  if (filler.some(phrase => content.includes(phrase)))
    errors.push(slug + ': ogólny powtarzalny tekst zamiast przykładu');
  if (/cite|turn[0-9]+search[0-9]+/.test(content))
    errors.push(slug + ': pozostał tymczasowy znacznik cytowania');
}

for (const item of functionCatalog)
  if (!markdown.includes(item.slug + '.md'))
    errors.push(item.slug + ': metadane nie mają strony Markdown');

if (errors.length) {
  console.error('Audit funkcji NIEZALICZONY:\n' + errors.map(x => ' - ' + x).join('\n'));
  process.exit(1);
}
console.log('Audyt funkcji OK: 53 strony, katalog, dane referencyjne, przykłady, nagłówki i brak tekstów szablonowych.');
