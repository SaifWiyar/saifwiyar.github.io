import { existsSync, readFileSync } from 'node:fs';
const required = ['dist/index.html','dist/manifest.webmanifest','dist/robots.txt','dist/sitemap.xml','dist/favicon.svg','dist/404.html','dist/Saif-Wiyar-CV.pdf'];
const missing = required.filter((file) => !existsSync(file));
if (missing.length) throw new Error(`Missing build files: ${missing.join(', ')}`);
const html = readFileSync('dist/index.html', 'utf8');
for (const marker of ['<title>', 'application/ld+json', 'og:title', 'canonical']) if (!html.includes(marker)) throw new Error(`SEO marker missing: ${marker}`);
if (html.includes('YOUR_') || html.includes('REPLACE_ME')) throw new Error('Unresolved placeholder found in build.');
console.log('Build verification passed.');
