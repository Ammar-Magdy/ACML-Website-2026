# Quick Start

## Local development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open `http://localhost:5173`.

### 3. Build production files

```bash
npm run build
```

Output is generated in `dist\`.

### 4. Preview the production build

```bash
npm run preview
```

## Useful commands

```bash
npm run lint
npm run typecheck
npm run deploy
```

- `lint`: runs ESLint
- `typecheck`: runs TypeScript checking
- `deploy`: publishes `dist\` to GitHub Pages

## Deploy in 3 steps (shared hosting)

1. Run `npm run build`
2. Upload everything from `dist\` to your web root (for example `public_html`)
3. Add SPA rewrite rules so routes resolve to `index.html`

For full hosting details and `.htaccess` examples, use `DEPLOYMENT.md`.

## Where to edit

- Routes: `src\App.tsx`
- Header navigation: `src\components\Header.tsx`
- Footer/contact details: `src\components\Footer.tsx` and `src\pages\Contact.tsx`
- Theme logic: `src\context\ThemeContext.tsx`
- Main pages and feature pages: `src\pages\`

## Notes

- GitHub Pages base path is configured in `vite.config.ts` (`/ACML-Website-2026/`).
- Router basename is already wired to `import.meta.env.BASE_URL`.
