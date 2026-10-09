import fs from 'node:fs';
import path from 'node:path';
import { articleClusters } from '../src/data/articleClusters.js';
import { functionCatalog, functionBySlug } from '../src/data/functionCatalog.js';
import {
  contextualArticleLinks,
  articleFunctionRules,
  articleFunctionOverrides,
  articleToolRules,
  articleToolOverrides,
  toolRelationships,
  getArticleFunctionSlugs,
  getArticleToolSlugs,
  getArticleNextSteps,
  getFunctionNextSteps,
  getToolNextSteps
} from '../src/data/contentRelationships.js';

const errors = [];
const allArticles = Object.entries(articleClusters).flatMap(([categorySlug, cluster]) =>
  cluster.articles.map((article) => ({...article, categorySlug}))
);
const articleSlugs = new Set(allArticles.map((article) => article.slug));
const toolSlugs = new Set(Object.keys(toolRelationships));
const functionSlugs = new Set(functionCatalog.map((fn) => fn.slug));

const checkFunctionSlugs = (slugs, context) => {
  for (const slug of slugs) if (!functionSlugs.has(slug))
    errors.push(context + ': brak funkcji ' + slug);
};

const checkToolSlugs = (slugs, context) => {
  for (const slug of slugs) if (!toolSlugs.has(slug))
    errors.push(context + ': brak narzędzia ' + slug);
};

const checkArticleSlugs = (slugs, context) => {
  for (const slug of slugs) if (!articleSlugs.has(slug))
    errors.push(context + ': brak poradnika ' + slug);
};

for (const [slug, targets] of Object.entries(contextualArticleLinks)) {
  checkArticleSlugs([slug], 'link kontekstowy źródło');
  checkArticleSlugs(targets, 'link kontekstowy ' + slug);
}

for (const rule of articleFunctionRules)
  checkFunctionSlugs(rule.slugs, 'reguła funkcji ' + rule.prefix);

for (const [slug, targets] of Object.entries(articleFunctionOverrides)) {
  checkArticleSlugs([slug], 'wyjątek funkcji');
  checkFunctionSlugs(targets, 'wyjątek funkcji ' + slug);
}

for (const rule of articleToolRules)
  checkToolSlugs(rule.slugs, 'reguła narzędzia ' + rule.prefix);

for (const [slug, targets] of Object.entries(articleToolOverrides)) {
  checkArticleSlugs([slug], 'wyjątek narzędzia');
  checkToolSlugs(targets, 'wyjątek narzędzia ' + slug);
}

for (const [slug, tool] of Object.entries(toolRelationships)) {
  const file = path.resolve('src/pages/narzedzia', slug + '.astro');
  if (!fs.existsSync(file)) errors.push('Narzędzie ' + slug + ': brak pliku ' + file);
  if (!tool.title?.trim()) errors.push('Narzędzie ' + slug + ': brak tytułu');
  checkFunctionSlugs(tool.functions, 'narzędzie ' + slug);
  checkArticleSlugs(tool.articles, 'narzędzie ' + slug);
}

let linkedArticles = 0;
for (const article of allArticles) {
  checkFunctionSlugs(getArticleFunctionSlugs(article.slug), 'poradnik ' + article.slug);
  checkToolSlugs(getArticleToolSlugs(article.slug), 'poradnik ' + article.slug);
  const links = getArticleNextSteps(article);
  if (links.length) linkedArticles++;
  if (!links.some((link) => link.category === 'Poradnik'))
    errors.push('Poradnik ' + article.slug + ': brak następnego poradnika');
}

const functionSourceFiles = new Set(
  fs.readdirSync('src/pages/funkcje')
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -3))
);
if (functionCatalog.length < 50) {
  errors.push('Katalog ma mniej niż 50 funkcji: ' + functionCatalog.length);
}
if (functionSourceFiles.size !== functionCatalog.length) {
  errors.push('Liczba stron funkcji nie zgadza się z katalogiem: ' +
    functionSourceFiles.size + ' plików vs ' + functionCatalog.length + ' wpisów');
}
const knownCategories = new Set([
  'Wyszukiwanie', 'Tekst', 'Daty i czas',
  'Liczenie i sumowanie', 'Logika', 'Formuły dynamiczne'
]);
const seenFunctionSlugs = new Set();
for (const fn of functionCatalog) {
  if (seenFunctionSlugs.has(fn.slug)) errors.push('Zduplikowany slug funkcji: ' + fn.slug);
  seenFunctionSlugs.add(fn.slug);
  if (!functionSourceFiles.has(fn.slug)) errors.push('Brak pliku MD funkcji: ' + fn.slug);
  if (!knownCategories.has(fn.category)) errors.push('Nieznana kategoria funkcji: ' + fn.slug);
  if (!fn.name || !fn.description || !fn.syntax || !fn.example ||
      !fn.arguments?.length || !fn.versions?.length || !fn.docs) {
    errors.push('Niekompletne metadane funkcji: ' + fn.slug);
  }
  if (!/^https:\/\/support\.microsoft\.com\//.test(fn.docs)) {
    errors.push('Nieprawidłowy adres dokumentacji: ' + fn.slug);
  }
  if (!functionBySlug[fn.slug]) errors.push('Brak funkcji w katalogu: ' + fn.slug);
  getFunctionNextSteps(fn.slug, fn.related);
}
for (const slug of functionSourceFiles) {
  if (!seenFunctionSlugs.has(slug)) errors.push('Nieosierocony plik funkcji wymagany: ' + slug);
}

for (const slug of toolSlugs) getToolNextSteps(slug);

const expectedCategories = ['/poradniki/', '/funkcje/', '/narzedzia/'];
for (const article of allArticles) {
  for (const link of getArticleNextSteps(article)) {
    if (!link.title || !link.url || !link.category)
      errors.push('Niekompletny link dla ' + article.slug);
    if (expectedCategories.some((prefix) => link.url.startsWith(prefix))) {
      if (link.url.startsWith('/poradniki/') &&
          !articleSlugs.has(link.url.split('/')[2])) errors.push('Martwy link: ' + link.url);
      if (link.url.startsWith('/funkcje/') &&
          !functionSlugs.has(link.url.split('/')[2])) errors.push('Martwy link: ' + link.url);
      if (link.url.startsWith('/narzedzia/') &&
          !toolSlugs.has(link.url.split('/')[2])) errors.push('Martwy link: ' + link.url);
    }
  }
}

if (errors.length) {
  console.error('Content relationships validation failed:');
  for (const error of errors) console.error(' - ' + error);
  process.exit(1);
}

console.log(
  'Content relationships OK: ' + linkedArticles + '/' + allArticles.length +
  ' poradników, ' + functionSlugs.size + ' funkcji, ' + toolSlugs.size + ' narzędzi.'
);
