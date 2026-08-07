# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a single-page personal resume/portfolio site for Sreeju KS, built with React + TypeScript + Vite + Tailwind CSS. It is a static site (deployed to GitHub Pages / a custom domain, `resume.sreesreejuks.com`) with no backend, routing, or state management library — content is entirely data-driven from static files.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check via `tsc -b` then produce a production build with Vite (`dist/`)
- `npm run lint` — run ESLint over the project
- `npm run preview` — serve the production build locally

There is no test suite configured in this repo.

## Architecture

The app follows a strict **data/component separation**: every content section has a matching pair of files, and there is no other content source.

- `src/data/*.ts` — plain exported objects/arrays holding all page content (profile info, experience, skills, certifications, education, achievements). This is the *only* place resume content lives — editing content means editing these files, not the components.
- `src/components/*.tsx` — one presentational component per resume section (e.g. `ExperienceSection`, `SkillsSection`, `CertificationSection`). Each component declares a local TypeScript `interface` for its props shaped to match the corresponding data file, and takes data in via props — components hold no content of their own.
- `src/pages/HomePage.tsx` — composes the page by importing every `data/*` module and passing it into the matching component, in section order (Header → Profile → Experience → Skills → Certifications → Achievements → Education → Footer).
- `src/App.tsx` / `src/main.tsx` — trivial entry points; `App` just renders `HomePage`.

There is no client-side router — the whole site is one page rendered top to bottom.

### Adding or editing a resume section

1. Add/edit the data shape in `src/data/<section>.ts`.
2. Add/edit the corresponding component in `src/components/<Section>.tsx`, keeping its props `interface` in sync with the data shape.
3. Wire it into `src/pages/HomePage.tsx` if it's a new section.

### Static assets

Images (company logos, project screenshots, icons) live in `public/` and are referenced by root-relative path (e.g. `/inteution.jpg`) from the `src/data/*.ts` files. SEO metadata (Open Graph, Twitter cards, JSON-LD structured data) and Google Analytics (`gtag.js`) are hardcoded directly in `index.html`.

## Styling

Tailwind CSS utility classes are used directly in JSX — there are no separate CSS modules or styled-components. The custom font stack (`SF Pro Display` etc.) and an extra `3xl` border-radius are defined in `tailwind.config.js`.
