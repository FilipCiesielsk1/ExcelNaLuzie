import fs from 'node:fs';
import path from 'node:path';

const dist=path.resolve('dist');
const origin='https://excelnaluzie.pl';
const walk=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const files=walk(dist).filter(p=>p.endsWith('.html'));
const errors=[],warnings=[],pages=new Map(),incoming=new Map(),sitemap=new Set();
const attr=(tag,key)=>tag.match(new RegExp('\\b'+key+'=["\\x27]([^"\\x27]+)["\\x27]','i'))?.[1]||'';
const absolute=(v,base)=>{try{return new URL(v,base)}catch{return null}};
const parseJsonLd=(html)=>[...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].flatMap(m=>{
 try {const data=JSON.parse(m[1]);return data['@graph']||[data]} catch {return []}
});
const cleanPath=(p)=>p.endsWith('/')?p:p+'/';
for(const file of files){
 const relative=path.relative(dist,file).replaceAll(path.sep,'/');
 const url=origin+'/'+(relative==='index.html'?'':relative.replace(/index\.html$/,''));
 const html=fs.readFileSync(file,'utf8');
 const canonicalTag=[...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi)][0]?.[0]||'';
 const canonical=attr(canonicalTag,'href');
 const noindex=/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);
 const schema=parseJsonLd(html);
 pages.set(url,{relative,html,canonical,noindex,schema});
 incoming.set(url,new Set());
 if(!canonical.startsWith(origin+'/'))errors.push(relative+': invalid canonical');
 if(!noindex&&canonical!==url)errors.push(relative+': canonical not self-referencing ('+canonical+' vs '+url+')');
 const breadcrumb=schema.find(n=>n['@type']==='BreadcrumbList');
 if(breadcrumb){
  const list=breadcrumb.itemListElement||[];
  if(!list.length)errors.push(relative+': empty breadcrumbs');
  for(let i=0;i<list.length;i++){
   if(list[i].position!==i+1)errors.push(relative+': breadcrumb position sequence incorrect');
   const crumb=absolute(list[i].item,url);
   if(crumb?.origin===origin&&crumb.pathname!=="/"&&!fs.existsSync(path.join(dist,crumb.pathname,'index.html')))errors.push(relative+': breadcrumb target missing '+crumb.pathname);
  }
  const last=list.at(-1)?.item;
  if(last&&last!==canonical)warnings.push(relative+': last breadcrumb does not match canonical');
 }
 const article=schema.find(n=>n['@type']==='Article'||n['@type']==='BlogPosting');
 if(article){
  if(article.mainEntityOfPage?.['@id']!==canonical)errors.push(relative+': article mainEntityOfPage differs from canonical');
  if(!article.headline||!article.datePublished||!article.dateModified)errors.push(relative+': incomplete Article schema');
 }
}
for(const [url,page] of pages){
 for(const match of page.html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)){
  const target=absolute(match[1],url);
  if(!target||target.origin!==origin)continue;
  const normalized=origin+cleanPath(target.pathname);
  if(pages.has(normalized)&&normalized!==url)incoming.get(normalized).add(url);
 }
}
const sitemapXml=fs.readFileSync(path.join(dist,'sitemap-0.xml'),'utf8');
for(const m of sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g))sitemap.add(m[1]);
for(const [url,page] of pages){
 if(page.noindex)continue;
 if(!sitemap.has(url))errors.push(page.relative+': missing from sitemap');
 if(incoming.get(url).size===0&&url!==origin+'/')warnings.push(page.relative+': no internal incoming links');
}
for(const url of sitemap){
 const page=pages.get(url);
 if(!page)errors.push('Sitemap references missing HTML page: '+url);
 else if(page.noindex)errors.push('Sitemap includes noindex: '+url);
}
const report={generatedAt:new Date().toISOString(),pages:pages.size,indexable:[...pages.values()].filter(p=>!p.noindex).length,sitemapUrls:sitemap.size,errors,warnings,orphanCandidates:warnings.filter(x=>x.includes('no internal incoming links'))};
fs.mkdirSync('dist/seo-audit',{recursive:true});
fs.writeFileSync('dist/seo-audit/report.json',JSON.stringify(report,null,2));
console.log('SEO Technical v1: '+report.pages+' HTML pages, '+report.sitemapUrls+' sitemap URLs, '+warnings.length+' warnings, '+errors.length+' errors');
warnings.slice(0,25).forEach(x=>console.warn('WARN '+x));
errors.slice(0,50).forEach(x=>console.error('ERROR '+x));
if(errors.length)process.exitCode=1;
