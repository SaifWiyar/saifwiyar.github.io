import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
let ts;
try { ts=(await import('typescript')).default; } catch { ts=(await import('file:///opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js')).default; }

const root=process.cwd();
const required=[
  'src/App.tsx','src/data/translations.ts','src/data/content.ts','src/components/AcademicHub.tsx',
  'public/robots.txt','public/sitemap.xml','public/manifest.webmanifest','public/favicon.svg','public/404.html','public/Saif-Wiyar-CV.pdf',
];
const missing=required.filter(file=>!existsSync(path.join(root,file)));
if(missing.length)throw new Error(`Required source files missing: ${missing.join(', ')}`);

const textFiles=[];
function walk(directory){
  for(const entry of readdirSync(directory)){
    if(entry==='node_modules'||entry==='dist'||entry==='.git'||entry==='scripts')continue;
    const full=path.join(directory,entry);
    if(statSync(full).isDirectory())walk(full);
    else if(/\.(?:ts|tsx|js|mjs|html|md|json|xml|txt|css)$/.test(entry))textFiles.push(full);
  }
}
walk(root);
const forbidden=[new RegExp('Software'+' Engineer','gi'),new RegExp('Software'+' Architect','gi'),/REPLACE_ME/g,/YOUR_[A-Z0-9_]+/g];
for(const file of textFiles){
  const content=readFileSync(file,'utf8');
  for(const pattern of forbidden){
    pattern.lastIndex=0;
    const match=pattern.exec(content);
    if(match)throw new Error(`Forbidden or unresolved text "${match[0]}" found in ${path.relative(root,file)}`);
  }
}

const approved='Data Scientist | AI Engineer | Full Stack Developer | Machine Learning Engineer | Deep Learning & NLP Researcher | University Lecturer | Founder of Saif Tech Studio & Saif Online Academy';
for(const file of ['src/data/content.ts','src/data/translations.ts']){
  if(!readFileSync(file,'utf8').includes(approved))throw new Error(`Approved identity missing from ${file}`);
}
const index=readFileSync('index.html','utf8');
for(const marker of ['Saif Tech Studio','Saif Online Academy','application/ld+json','ProfilePage','canonical','og:title','twitter:card']){
  if(!index.includes(marker))throw new Error(`SEO/identity marker missing from index.html: ${marker}`);
}

const source=readFileSync('src/data/translations.ts','utf8');
const output=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const module={exports:{}};
vm.runInNewContext(`(function(exports,module){${output}\n})(module.exports,module);`,{module,exports:module.exports});
const translations=module.exports.translations;
if(!translations||!translations.en||!translations.ps||!translations.fa)throw new Error('English, Pashto, and Dari translation objects are required.');
const flatten=(value,prefix='',result=[])=>{for(const[key,item]of Object.entries(value)){const next=prefix?`${prefix}.${key}`:key;if(item&&typeof item==='object'&&!Array.isArray(item))flatten(item,next,result);else result.push(next);}return result.sort();};
const baseline=flatten(translations.en);
for(const locale of ['ps','fa']){
  const keys=flatten(translations[locale]);
  const missingKeys=baseline.filter(key=>!keys.includes(key));
  const extraKeys=keys.filter(key=>!baseline.includes(key));
  if(missingKeys.length||extraKeys.length)throw new Error(`${locale} translation mismatch. Missing: ${missingKeys.join(', ')||'none'}; extra: ${extraKeys.join(', ')||'none'}`);
}
console.log(`Source verification passed: ${textFiles.length} files checked and translation keys match.`);
