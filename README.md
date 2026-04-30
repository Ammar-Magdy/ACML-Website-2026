# ACML Website 2026

Modern React + TypeScript website for ACML (Alex Centre for Multimedia & Libraries), covering company profile, services, publishers, projects, and contact workflows.

## Live site

- GitHub Pages: https://ammar-magdy.github.io/ACML-Website-2026/

## What this project includes

- Multi-section corporate website with 50+ routes
- Main navigation for Home, About, Services, Partners, Projects, Publishers, and Contact
- Publisher and product detail pages with rich media (images, video, PDFs, DOCX, PPTX, and more)
- Dark/light theme toggle with persisted preference
- Cookie consent component and floating quick actions
- Responsive layout built for desktop and mobile

## Tech stack

- React 18
- TypeScript
- React Router
- Tailwind CSS
- Vite
- Lucide React
- Framer Motion

## Local development

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build production bundle

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

### Code quality commands

```bash
npm run lint
npm run typecheck
```

## Deployment

### GitHub Pages

This project is configured for GitHub Pages (`base: /ACML-Website-2026/` in `vite.config.ts` and `basename={import.meta.env.BASE_URL}` in router setup).

```bash
npm run deploy
```

### Shared hosting (static upload)

1. Run `npm run build`
2. Upload all files from `dist\` to your web root
3. Add SPA rewrite rules so non-file routes resolve to `index.html`

For full shared-hosting instructions, see `DEPLOYMENT.md`.

## Project structure

```text
src\
  components\   # Header, Footer, shared UI pieces
  context\      # Theme context
  pages\        # Main pages and nested feature pages
  App.tsx       # Route definitions
  main.tsx      # App entry
public\         # Static public assets
dist\           # Production output (generated)
```

## Notes for content updates

- Main route wiring is in `src\App.tsx`
- Navigation menus are in `src\components\Header.tsx`
- Theme behavior is in `src\context\ThemeContext.tsx`
- Replace/update media assets under `src\assets\` and `public\` as needed

## License

Copyright (c) ACML. All rights reserved.
