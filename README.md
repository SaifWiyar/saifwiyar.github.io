# Saif Wiyar Portfolio V3.0

A production-oriented multilingual portfolio for **Saif Wiyar**, built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons.

## Why this stack

- **Vite + React + TypeScript:** ideal for a fast static GitHub Pages site with a modern component architecture.
- **Tailwind CSS:** consistent design system and responsive styling.
- **Motion:** professional animation with reduced-motion support.
- **Formspree:** best default contact backend for GitHub Pages because no private server is required.
- **GitHub Actions:** automatic verified builds and deployments.

## Features

- English, Pashto, and Dari language switcher
- RTL Pashto and Dari interfaces with LTR English
- Persistent locale and theme preferences
- Light, dark, and system themes with persistence
- Animated hero, typing headline, particles, scroll reveals, and micro-interactions
- Responsive navigation, scroll progress, back-to-top, and loading screen
- Skills with animated proficiency indicators
- Searchable and filterable project portfolio
- Research, teaching, timeline, achievements, optional verified testimonials, FAQ, and contact sections
- Contact form with validation, honeypot, minimum completion time, attachment checks, loading, success, and error states
- Formspree integration with email fallback
- PWA manifest, icons, service worker, favicon, 404 fallback
- Canonical URL, Open Graph, Twitter cards, JSON-LD ProfilePage/Person schema, sitemap, and robots.txt
- Accessibility: semantic landmarks, keyboard navigation, focus states, labels, live regions, reduced motion
- GitHub Actions deployment and build verification

## Folder structure

```text
saifwiyar-portfolio-v2/
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/profile.webp
│   ├── assets/projects/*.svg
│   ├── icons/icon-192.png
│   ├── icons/icon-512.png
│   ├── Saif-Wiyar-CV.pdf
│   ├── 404.html
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   └── sw.js
├── scripts/verify.mjs
├── src/
│   ├── components/
│   ├── context/AppContext.tsx
│   ├── data/content.ts
│   ├── data/translations.ts
│   ├── lib/form.ts
│   ├── types/index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig*.json
└── vite.config.ts
```

## 1. Software to install

Install:

1. **Git**
2. **Node.js 22 LTS or newer**
3. **Visual Studio Code**

Check:

```bash
git --version
node --version
npm --version
```

## 2. Install and run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## 3. Quality checks and build

```bash
npm run typecheck
npm run lint
npm run build
node scripts/verify.mjs
```

Or run everything:

```bash
npm run verify
```

## 4. Deploy to GitHub Pages

This project is configured for the user site repository:

```text
SaifWiyar/saifwiyar.github.io
```

1. Back up the current repository.
2. Upload all project files to the repository root.
3. Commit and push to `main`.
4. Open **Settings > Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Open the **Actions** tab and wait for `Build and deploy portfolio` to finish.
7. Visit `https://saifwiyar.github.io/`.

Vite needs a build step, so do not choose `/root` branch deployment for this React version.

## 5. Configure Formspree (recommended)

Formspree is the easiest option for a static GitHub Pages contact form.

1. Create a Formspree account and a new form.
2. Copy the form ID from an endpoint such as:

```text
https://formspree.io/f/abcdwxyz
```

The ID is `abcdwxyz`.

### Local development

Create `.env.local`:

```env
VITE_FORMSPREE_ID=abcdwxyz
```

### GitHub Actions

1. Open repository **Settings > Secrets and variables > Actions > Variables**.
2. Create a repository variable named `VITE_FORMSPREE_ID`.
3. Paste the public Formspree form ID.
4. Re-run the workflow or push a commit.

The Formspree ID is public in the browser bundle. Never put private API secrets in `VITE_` variables.

### Attachment note

The UI validates PDF, DOCX, PNG, and JPG up to 10 MB. Confirm that your Formspree plan supports file uploads. If not, remove the attachment field or switch to Firebase Storage with strict rules.

## Contact backend options

### Option 1: Formspree - recommended

Best for this site: simplest setup, works with static hosting, supports AJAX states, spam controls, email notifications, and optional file uploads.

### Option 2: EmailJS

Good when you need email templates and direct email-service integration. You would install `@emailjs/browser` and replace the fetch logic in `src/components/Contact.tsx`. Use only public EmailJS keys in the browser.

### Option 3: Netlify Forms

Excellent if the site is hosted on Netlify, but GitHub Pages does not process Netlify form attributes. Use this only after moving deployment to Netlify.

### Option 4: Firebase

Best for advanced workflows, saved leads, file storage, dashboards, authentication, and automation. It requires Firestore/Storage setup and carefully tested Security Rules.

### Option 5: GitHub Actions

Not recommended for public contact submissions. GitHub Actions is event/workflow automation, not a secure public form API. Do not expose a GitHub token in browser code.

## 6. Replace profile information

- Main content and projects: `src/data/content.ts`
- English and Pashto UI text: `src/data/translations.ts`
- SEO title, description, social metadata, and JSON-LD: `index.html`
- Contact details: `src/components/Contact.tsx` and `src/components/Footer.tsx`

## 7. Add projects

Add a new object to `projects` in `src/data/content.ts`. Put its image in `public/assets/projects/`.

## 8. Add certificates

Create `src/data/certificates.ts`, add certificate images to `public/assets/certificates/`, and create a section component following the same pattern as `Achievements.tsx`.

Do not publish certificates containing ID numbers or sensitive data.

## 9. Add research and publications

Update the cards in `src/components/Research.tsx`. Add only accurate publication status such as `In progress`, `Submitted`, `Accepted`, or `Published`.

## 10. Change colors and typography

- Global utilities and component styles: `src/index.css`
- Tailwind content and font settings: `tailwind.config.js`
- Main blue/violet gradients: search for `from-blue-600` and `to-violet-600`

## 11. Change animations

Motion animations are inside components using `initial`, `animate`, and `whileInView`. CSS particle and caret animations are at the end of `src/index.css`.

The site respects `prefers-reduced-motion`.

## 12. Replace profile photo

Replace:

```text
public/assets/profile.webp
```

Use a square or portrait WebP image around 1200 x 1200, ideally under 250 KB.

## 13. Update CV

Replace:

```text
public/Saif-Wiyar-CV.pdf
```

Keep the same filename so all download buttons continue working.

## 14. Custom domain and HTTPS

1. Buy a domain.
2. In GitHub, open **Settings > Pages > Custom domain**.
3. Add the DNS records GitHub provides.
4. Create `public/CNAME` containing your domain, for example:

```text
www.saifwiyar.com
```

5. After DNS verifies, enable **Enforce HTTPS**.
6. Update canonical, Open Graph URL, JSON-LD URL, `robots.txt`, and `sitemap.xml` from `saifwiyar.github.io` to the custom domain.

## 15. Search indexing

After deployment:

1. Add the site to Google Search Console.
2. Verify the property.
3. Submit `https://saifwiyar.github.io/sitemap.xml`.
4. Inspect the homepage URL and request indexing.
5. Link the website from GitHub, LinkedIn, Saif Tech Studio, Saif Online Academy, and other verified profiles.

Search visibility improves over time. No implementation can guarantee a fixed Lighthouse score or first position for broad keywords because results depend on hosting, content, competition, network, and search-engine decisions.

## Maintenance routine

- Monthly: update dependencies and run `npm run verify`.
- After each project: add a project card, repository link, screenshot, and concise case study.
- After research milestones: update status, dataset cards, metrics, and links.
- Quarterly: check Search Console, broken links, contact-form delivery, accessibility, mobile layouts, and PWA behavior.
- Never commit `.env.local`, passwords, private keys, client data, private datasets, or production databases.

## Add verified testimonials

Open `src/data/testimonials.ts` and add only genuine feedback for which you have permission. The testimonials section is intentionally hidden while the list is empty, so the production site never displays fabricated reviews.
