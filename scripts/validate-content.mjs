import fs from 'node:fs';
import path from 'node:path';
import { articleClusters } from '../src/data/articleClusters.js';

const root = path.resolve('src/pages/poradniki');
const functionRoot = path.resolve('src/pages/funkcje');

const countWords = (body) => body
  .replace(/<[^>]+>/g, ' ')
  .replace(/`+/g, ' ')
  .replace(/[|#*_=>-]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .length;

const required = [
  'title',
  'description',
  'slug',
  'category',
  'categorySlug',
  'date',
  'updated',
  'author',
  'readingTime',
  'difficulty',
  'excelVersions',
  'verified'
];

const files = fs.existsSync(root)
  ? fs.readdirSync(root).filter((name) => name.endsWith('.md'))
  : [];

const errors = [];
const clusterByArticleSlug = new Map();

const englishExcelFunctions = [
  'IF','IFS','AND','OR','NOT','IFERROR',
  'XLOOKUP','VLOOKUP','HLOOKUP','LOOKUP',
  'INDEX','MATCH','FILTER','UNIQUE','SORT',
  'TEXTAFTER','TEXTBEFORE','TEXT','LEFT','RIGHT','MID','LEN','SUBSTITUTE','REPLACE','SEARCH','FIND',
  'SUMIF','SUMIFS','COUNTIF','COUNTIFS',
  'TODAY','NOW','DATE','YEAR','MONTH','WEEKNUM','ISOWEEKNUM','NETWORKDAYS','NETWORKDAYS.INTL','EDATE','EOMONTH'
];

const validatePolishFormulaNames = (body, label) => {
  const formulaBlocks = [...body.matchAll(/<div class="formula">([\s\S]*?)<\/div>/gi)]
    .map((match) => match[1]);

  for (const formula of formulaBlocks) {
    for (const name of englishExcelFunctions) {
      const escaped = name.replace('.', '\\.');
      if (new RegExp(`(^|[^A-ZĄĆĘŁŃÓŚŹŻ.])${escaped}\\s*\\(`, 'i').test(formula)) {
        errors.push(`${label}: angielska nazwa funkcji "${name}" w formule; strona ma używać nazw polskiego Excela`);
      }
    }

    if (/\b(?:TRUE|FALSE)\b/i.test(formula)) {
      errors.push(`${label}: angielska wartość logiczna TRUE/FALSE w formule; użyj PRAWDA/FAŁSZ`);
    }
  }

  const englishErrors = ['#VALUE!', '#REF!', '#DIV/0!', '#NAME?', '#NUM!', '#N/A'];
  for (const token of englishErrors) {
    if (body.includes(token)) {
      errors.push(`${label}: angielski kod błędu "${token}"; użyj polskiego odpowiednika Excela`);
    }
  }
};

const readFrontmatterString = (frontmatter, key) => {
  const prefix = key + ':';
  const line = frontmatter
    .split(/\r?\n/)
    .find((item) => item.startsWith(prefix));

  if (!line) return '';

  let value = line.slice(prefix.length).trim();
  if (
    value.length >= 2 &&
    ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'")))
  ) {
    value = value.slice(1, -1);
  }
  return value.trim();
};

for (const [categorySlug, cluster] of Object.entries(articleClusters)) {
  const hubSegments = cluster.hub.split('/').filter(Boolean);
  const hubPath = path.resolve('src/pages', ...hubSegments, 'index.astro');

  if (!fs.existsSync(hubPath)) {
    errors.push(`klaster "${categorySlug}": brak strony hub ${cluster.hub}`);
  }

  for (const article of cluster.articles) {
    if (clusterByArticleSlug.has(article.slug)) {
      errors.push(`articleClusters: slug "${article.slug}" występuje w więcej niż jednym klastrze`);
      continue;
    }
    clusterByArticleSlug.set(article.slug, categorySlug);
  }
}

const articleFileSlugs = new Set(files.map((file) => file.replace(/\.md$/, '')));

for (const file of files) {
  const full = path.join(root, file);
  const source = fs.readFileSync(full, 'utf8');
  const parts = source.split('---');

  if (parts.length < 3) {
    errors.push(`${file}: brak frontmatter YAML`);
    continue;
  }

  const frontmatter = parts[1];
  const body = parts.slice(2).join('---');
  const filenameSlug = file.replace(/\.md$/, '');
  const slug = readFrontmatterString(frontmatter, 'slug');
  const categorySlug = readFrontmatterString(frontmatter, 'categorySlug');

  if (slug && slug !== filenameSlug) {
    errors.push(`${file}: slug "${slug}" nie zgadza się z nazwą pliku "${filenameSlug}"`);
  }

  const clusterCategory = clusterByArticleSlug.get(filenameSlug);
  if (!clusterCategory) {
    errors.push(`${file}: artykuł "${filenameSlug}" nie jest przypisany do articleClusters — grozi stroną osieroconą`);
  } else if (categorySlug && clusterCategory !== categorySlug) {
    errors.push(`${file}: categorySlug "${categorySlug}" nie zgadza się z klastrem "${clusterCategory}"`);
  }

  for (const key of required) {
    const pattern = new RegExp(`^${key}:`, 'm');
    if (!pattern.test(frontmatter)) {
      errors.push(`${file}: brak pola frontmatter "${key}"`);
    }
  }

  if (!/^layout:\s+\.\.\/\.\.\/layouts\/ArticleLayout\.astro\s*$/m.test(frontmatter)) {
    errors.push(`${file}: nieprawidłowy lub brakujący layout ArticleLayout.astro`);
  }

  if (/^\s*import\s+/m.test(body)) {
    errors.push(`${file}: import w zwykłym Markdownie będzie wyświetlany jako tekst. Importy są zabronione w .md`);
  }

  if (/<FormulaBox\b/i.test(body)) {
    errors.push(`${file}: użyj <div class="formula">...</div> zamiast FormulaBox`);
  }

  const h1Count = (body.match(/^#\s+/gm) || []).length;
  if (h1Count > 0) {
    errors.push(`${file}: nie dodawaj H1 w treści — H1 generuje layout z pola title`);
  }

  if (!/<div class="answer">/i.test(body)) {
    errors.push(`${file}: brak szybkiej odpowiedzi <div class="answer">...</div>`);
  }

  if (!/<div class="formula">/i.test(body)) {
    errors.push(`${file}: brak co najmniej jednego bloku formuły`);
  }

  validatePolishFormulaNames(body, file);

  const wordCount = countWords(body);
  if (wordCount < 220) {
    errors.push(`${file}: treść ma tylko ${wordCount} słów; minimum jakościowe to 220`);
  }

  const description = readFrontmatterString(frontmatter, 'description');
  if (description.length > 165) {
    errors.push(`${file}: description ma ${description.length} znaków; celuj w maks. 165`);
  }
}

for (const [slug, categorySlug] of clusterByArticleSlug.entries()) {
  if (!articleFileSlugs.has(slug)) {
    errors.push(`articleClusters: "${slug}" w klastrze "${categorySlug}" nie ma pliku poradnika`);
  }
}

const functionFiles = fs.existsSync(functionRoot)
  ? fs.readdirSync(functionRoot).filter((name) => name.endsWith('.md'))
  : [];

for (const file of functionFiles) {
  const full = path.join(functionRoot, file);
  const source = fs.readFileSync(full, 'utf8');
  const parts = source.split('---');

  if (parts.length < 3) {
    errors.push(`funkcje/${file}: brak frontmatter YAML`);
    continue;
  }

  const frontmatter = parts[1];
  const body = parts.slice(2).join('---');

  if (!/^layout:\s+\.\.\/\.\.\/layouts\/FunctionLayout\.astro\s*$/m.test(frontmatter)) {
    errors.push(`funkcje/${file}: nieprawidłowy lub brakujący FunctionLayout.astro`);
  }

  if (!/^slug:/m.test(frontmatter)) {
    errors.push(`funkcje/${file}: brak pola slug`);
  }

  if (!/<div class="formula">/i.test(body)) {
    errors.push(`funkcje/${file}: brak praktycznego bloku formuły`);
  }

  validatePolishFormulaNames(body, `funkcje/${file}`);

  const wordCount = countWords(body);
  if (wordCount < 180) {
    errors.push(`funkcje/${file}: treść ma tylko ${wordCount} słów; minimum jakościowe to 180`);
  }
}

if (errors.length) {
  console.error('\nContent validation failed:\n');
  for (const error of errors) console.error(' - ' + error);
  console.error('');
  process.exit(1);
}

console.log(`Content validation OK: ${files.length} article(s), ${functionFiles.length} function page(s).`);
