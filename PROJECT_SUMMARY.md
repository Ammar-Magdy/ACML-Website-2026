# ACML Website 2026 - Project Summary

## Overview

This repository contains the ACML corporate website built as a React + TypeScript single-page application with static output from Vite.  
It is designed for content-rich publishing and service pages, with deployment support for both GitHub Pages and standard shared hosting.

## Current scope

- Multi-section site with **50+ routed pages**
- Core navigation areas: Home, About, Services, Partners, Projects, Publishers, Contact
- Deep content sections for:
  - Chairman and organizational information
  - Donations and grants
  - Software product pages (Librarian, MAC, L-MAC, MBC)
  - Publisher/partner profiles and standards resources
- Rich media support across pages (images, videos, audio, PDFs, DOCX, PPTX, XLS)

## Technical implementation

- **Framework**: React 18 + TypeScript
- **Routing**: React Router (`BrowserRouter` with `basename={import.meta.env.BASE_URL}`)
- **Styling**: Tailwind CSS
- **Build tool**: Vite
- **UI libraries**: Lucide React, Framer Motion
- **Theme system**: Light/dark mode via `ThemeContext` with localStorage persistence

## Key UI capabilities

- Responsive layout for mobile, tablet, and desktop
- Mega-menu navigation in header
- Floating quick actions
- Cookie consent component
- Shared header/footer and route-level page composition

## Project structure (high level)

```text
src\
  components\    # Shared UI components
  context\       # Theme and app-level context
  pages\         # All main and nested routed pages
  data\          # Structured content/constants
  hooks\         # Reusable hooks
  App.tsx        # Full route map
  main.tsx       # App bootstrap
public\          # Public static assets
dist\            # Production build output
```

## Build and deployment

- Local dev: `npm run dev`
- Production build: `npm run build`
- Local preview: `npm run preview`
- GitHub Pages deploy: `npm run deploy`

Deployment notes:

- Vite base path is set to `/ACML-Website-2026/` in `vite.config.ts`
- Shared hosting deployments require SPA rewrite rules to `index.html`
- Full hosting instructions are documented in `DEPLOYMENT.md`

## Current status

- Codebase is active and significantly expanded beyond the original 6-page structure
- Documentation has been aligned with the current route depth and deployment workflow
- Production build command is in place and outputs the static bundle to `dist\`
