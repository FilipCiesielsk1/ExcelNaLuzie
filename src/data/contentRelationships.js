import { articleClusters } from './articleClusters.js';
import { functionBySlug } from './functionCatalog.js';

/**
 * Centralna mapa połączeń między poradnikami, funkcjami i narzędziami.
 * Reguły działają automatycznie także dla przyszłych artykułów o podobnych slugach.
 * Wyjątki dotyczą artykułów, dla których prosty prefiks byłby mylący.
 */
export const articleFunctionRules = [
  { prefix: 'xwyszukaj-', slugs: ['xwyszukaj'] },
  { prefix: 'jezeli-', slugs: ['jezeli'] },
  { prefix: 'licz-jezeli-', slugs: ['licz-jezeli'] },
  { prefix: 'licz-warunki-', slugs: ['licz-warunki'] },
  { prefix: 'suma-jezeli-', slugs: ['suma-jezeli'] },
  { prefix: 'suma-warunkow-', slugs: ['suma-warunkow'] },
  { prefix: 'filtruj-', slugs: ['filtruj'] },
  { prefix: 'unikatowe-', slugs: ['unikatowe'] },
  { prefix: 'sortuj-', slugs: ['sortuj'] },
  { prefix: 'sekwencja-', slugs: ['sekwencja'] },
  { prefix: 'tekst-po-', slugs: ['tekst-po'] },
  { prefix: 'tekst-przed-', slugs: ['tekst-przed'] },
  { prefix: 'policz-unikalne-', slugs: ['unikatowe'] },
  { prefix: 'liczba-dni-roboczych', slugs: ['dni-robocze'] },
  { prefix: 'liczba-miesiecy-miedzy-', slugs: ['data-roznica'] },
  { prefix: 'liczba-dni-miedzy-', slugs: ['data-roznica'] },
  { prefix: 'roznica-miedzy-', slugs: ['data-roznica'] }
];

export const articleFunctionOverrides = {
  'jezeli-oraz': ['oraz', 'jezeli'],
  'jezeli-lub': ['lub', 'jezeli'],
  'jezeli-blad': ['jezeli-blad', 'jezeli'],
  'podziel-tekst-po-przecinku': ['tekst-przed', 'tekst-po'],
  'xwyszukaj-kilka-wynikow': ['filtruj', 'xwyszukaj'],
  'indeks-podaj-pozycje': ['indeks', 'podaj-pozycje'],
  'jak-znalezc-wartosc-w-tabeli': ['xwyszukaj', 'indeks'],
  'wyszukaj-pionowo-dwa-warunki': ['indeks', 'podaj-pozycje'],
  'policz-unikalne-wartosci': ['unikatowe'],
  'sortuj-wedlug': ['sortuj-wedlug', 'sortuj'],
  'filtruj-sortuj-unikatowe': ['filtruj', 'unikatowe', 'sortuj'],
  'data-na-nazwe-miesiaca': ['tekst']
};

export const articleToolRules = [
  { prefix: 'jezeli-', slugs: ['generator-jezeli'] },
  { prefix: 'xwyszukaj-', slugs: ['generator-xwyszukaj'] },
  { prefix: 'filtruj-', slugs: ['generator-filtruj'] },
  { prefix: 'suma-warunkow-', slugs: ['generator-suma-warunkow'] },
  { prefix: 'licz-warunki-', slugs: ['generator-licz-warunki'] }
];

export const articleToolOverrides = {
  'jezeli-blad': [],
  'xwyszukaj-kilka-wynikow': ['generator-filtruj'],
  'indeks-podaj-pozycje': ['generator-indeks-podaj-pozycje'],
  'wyszukaj-pionowo-dwa-warunki': ['generator-indeks-podaj-pozycje'],
  'jak-znalezc-wartosc-w-tabeli': ['generator-xwyszukaj'],
  'suma-jezeli-podstawy': ['generator-suma-warunkow'],
  'roznica-miedzy-datami': ['kalkulator-dat'],
  'liczba-dni-miedzy-datami': ['kalkulator-dat'],
  'liczba-miesiecy-miedzy-datami': ['kalkulator-dat'],
  'liczba-dni-roboczych': ['kalkulator-dat'],
  'data-na-nazwe-miesiaca': ['generator-formatow']
};

export const toolRelationships = {
  'generator-jezeli': {
    title: 'Generator JEŻELI',
    functions: ['jezeli'],
    articles: ['jezeli-podstawy', 'jezeli-oraz']
  },
  'generator-xwyszukaj': {
    title: 'Generator X.WYSZUKAJ',
    functions: ['xwyszukaj'],
    articles: ['xwyszukaj-podstawy', 'xwyszukaj-dwa-warunki']
  },
  'generator-suma-warunkow': {
    title: 'Generator SUMA.WARUNKÓW',
    functions: ['suma-warunkow', 'suma-jezeli'],
    articles: ['suma-warunkow-wiele-kryteriow', 'suma-warunkow-daty']
  },
  'generator-licz-warunki': {
    title: 'Generator LICZ.WARUNKI',
    functions: ['licz-warunki'],
    articles: ['licz-warunki-wiele-kryteriow', 'licz-jezeli-wieksze-mniejsze']
  },
  'generator-filtruj': {
    title: 'Generator FILTRUJ',
    functions: ['filtruj'],
    articles: ['filtruj-podstawy', 'filtruj-wiele-warunkow']
  },
  'generator-indeks-podaj-pozycje': {
    title: 'Generator INDEKS + PODAJ.POZYCJĘ',
    functions: ['indeks', 'podaj-pozycje'],
    articles: ['indeks-podaj-pozycje', 'jak-znalezc-wartosc-w-tabeli']
  },
  'kalkulator-dat': {
    title: 'Kalkulator dat',
    functions: ['data-roznica', 'dni-robocze'],
    articles: ['roznica-miedzy-datami', 'liczba-dni-roboczych']
  },
  'generator-formatow': {
    title: 'Generator formatów liczb i dat',
    functions: ['tekst'],
    articles: ['data-na-nazwe-miesiaca']
  },
  'kolumna-numer-litera': {
    title: 'Kolumna ↔ numer',
    functions: [],
    articles: []
  },
  'tlumacz-funkcji-excel': {
    title: 'Tłumacz funkcji PL ↔ EN',
    functions: [],
    articles: []
  },
  'analizator-formul': {
    title: 'Analizator formuł Excela',
    functions: ['jezeli', 'xwyszukaj'],
    articles: ['jezeli-podstawy', 'xwyszukaj-podstawy']
  },
  'konwerter-wyszukaj-pionowo': {
    title: 'Konwerter WYSZUKAJ.PIONOWO → X.WYSZUKAJ',
    functions: ['wyszukaj-pionowo', 'xwyszukaj'],
    articles: ['xwyszukaj-podstawy', 'indeks-podaj-pozycje']
  },
  'porownywarka-tabel': {
    title: 'Porównywarka tabel Excel',
    functions: ['xwyszukaj', 'licz-warunki'],
    articles: ['jak-znalezc-wartosc-w-tabeli', 'xwyszukaj-podstawy']
  }
};

const articles = Object.values(articleClusters).flatMap((cluster) => cluster.articles);
const articleBySlug = new Map(articles.map((item) => [item.slug, item]));

const functionLink = (slug) => {
  const fn = functionBySlug[slug];
  return fn ? {
    title: fn.name,
    url: '/funkcje/' + slug + '/',
    category: 'Funkcja',
    description: 'Składnia i argumenty'
  } : null;
};

const toolLink = (slug) => {
  const tool = toolRelationships[slug];
  return tool ? {
    title: tool.title,
    url: '/narzedzia/' + slug + '/',
    category: 'Narzędzie',
    description: 'Wygeneruj formułę'
  } : null;
};

const articleLink = (slug) => {
  const article = articleBySlug.get(slug);
  return article ? {
    title: article.title,
    url: '/poradniki/' + slug + '/',
    category: 'Poradnik',
    description: 'Praktyczny przykład'
  } : null;
};

const uniqueLinks = (links, currentUrl = '', limit = 4) => {
  const seen = new Set([currentUrl]);
  return links.filter((item) => {
    if (!item?.url || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  }).slice(0, limit);
};

const fromRules = (slug, overrides, rules) => {
  if (Object.hasOwn(overrides, slug)) return overrides[slug];
  return rules.find((rule) => slug.startsWith(rule.prefix))?.slugs ?? [];
};

export const getArticleFunctionSlugs = (slug) =>
  fromRules(slug, articleFunctionOverrides, articleFunctionRules);

export const getArticleToolSlugs = (slug) =>
  fromRules(slug, articleToolOverrides, articleToolRules);

export const getArticleNextSteps = ({ slug, categorySlug, related = [] }) => {
  const cluster = articleClusters[categorySlug];
  const index = cluster?.articles.findIndex((item) => item.slug === slug) ?? -1;
  const siblingSlugs = index >= 0
    ? [
      ...cluster.articles.slice(index + 1),
      ...cluster.articles.slice(0, index).reverse()
    ].map((item) => item.slug)
    : [];

  return uniqueLinks([
    ...getArticleFunctionSlugs(slug).slice(0, 1).map(functionLink),
    ...getArticleToolSlugs(slug).slice(0, 1).map(toolLink),
    ...related.map((item) => ({
      title: item.title,
      url: item.url,
      category: item.category || 'Poradnik'
    })),
    ...siblingSlugs.map(articleLink),
    ...getArticleFunctionSlugs(slug).slice(1).map(functionLink),
    cluster ? { title: cluster.title, url: cluster.hub, category: 'Cały temat' } : null
  ], '/poradniki/' + slug + '/');
};

export const getFunctionNextSteps = (slug, manualRelated = []) => {
  const tools = Object.entries(toolRelationships)
    .filter(([, tool]) => tool.functions.includes(slug))
    .map(([toolSlug]) => toolLink(toolSlug));

  const guides = articles
    .filter((article) => getArticleFunctionSlugs(article.slug).includes(slug))
    .sort((a, b) => {
      const aPrimary = getArticleFunctionSlugs(a.slug)[0] === slug;
      const bPrimary = getArticleFunctionSlugs(b.slug)[0] === slug;
      return Number(bPrimary) - Number(aPrimary);
    })
    .map((article) => articleLink(article.slug));

  return uniqueLinks([
    ...tools.slice(0, 1),
    ...guides.slice(0, 3),
    ...manualRelated.map(([title, url]) => ({title, url, category: 'Powiązane'})),
    ...tools.slice(1)
  ], '/funkcje/' + slug + '/');
};

export const getToolNextSteps = (slug) => {
  const tool = toolRelationships[slug];
  if (!tool) return [];
  return uniqueLinks([
    ...tool.functions.slice(0, 1).map(functionLink),
    ...tool.articles.map(articleLink),
    ...tool.functions.slice(1).map(functionLink)
  ], '/narzedzia/' + slug + '/', 3);
};
