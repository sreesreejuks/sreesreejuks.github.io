# Sreeju KS — Resume / Portfolio

A single-page personal resume site built with React, TypeScript, Vite, and Tailwind CSS. Live at [resume.sreesreejuks.com](https://resume.sreesreejuks.com/).

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — dev server and build tooling
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Scripts

| Command           | Description                                      |
| ------------------ | ------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                        |
| `npm run build`   | Type-check and build for production into `dist/` |
| `npm run lint`    | Run ESLint over the project                      |
| `npm run preview` | Preview the production build locally             |

## Project Structure

```
src/
  components/   # One presentational component per resume section
  data/         # All resume content (profile, experience, skills, etc.)
  pages/        # HomePage composes the components with data
  utils/        # Small helper functions (e.g. age calculation)
public/         # Static assets (images, favicon, robots.txt, sitemap.xml)
```

Content and presentation are kept separate: each resume section has a component in `src/components/` and a matching data file in `src/data/`, wired together in `src/pages/HomePage.tsx`.

## Updating Content

All resume content lives in `src/data/*.ts` — update the relevant file to change what's displayed:

- `profile.ts` — name, contact info, profile image, apps, interests
- `experience.ts` — work history
- `skills.ts` — skill categories
- `certifications.ts` — certifications and training
- `education.ts` — education history
- `achievements.ts` — achievements

Age is calculated automatically from a date of birth in `profile.ts` and does not need manual updates.

## License

Personal project — all rights reserved.
