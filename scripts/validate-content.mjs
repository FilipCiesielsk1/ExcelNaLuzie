import fs from 'node:fs';
import path from 'node:path';

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

  const wordCount = countWords(body);
  if (wordCount < 220) {
    errors.push(`${file}: treść ma tylko ${wordCount} słów; minimum jakościowe to 220`);
  }

  const description = frontmatter.match(/^description:\s*["']?(.*?)["']?\s*$/m)?.[1] ?? '';
  if (description.length > 165) {
    errors.push(`${file}: description ma ${description.length} znaków; celuj w maks. 165`);
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
