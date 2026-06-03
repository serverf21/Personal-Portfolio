# Sarvagya Saxena — Portfolio (Next.js)

Personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js** (@react-three/fiber + drei). Visual theme: **Bright Cosmic Forge**.

Live site: [https://sarvagyasaxena.tech](https://sarvagyasaxena.tech)

## Requirements

- **Node.js 24.x** (see `package.json` `engines`)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | ESLint (Next.js)         |

## Project structure

```
src/
├── app/              # App Router (layout, page, globals)
├── components/       # UI + Three.js scenes
├── lib/              # constants, animations, hooks
└── assets/           # Images (portrait, projects)
```

## Customization

- **Content**: edit `src/lib/constants.ts` (projects, experience, skills, social links).
- **Resume**: place `resume.pdf` in `public/`.
- **Contact form**: Firebase Realtime Database endpoint in `SITE.firebaseContactUrl`.

## Deploy

Works on Vercel with default Next.js settings. Set production domain canonical to `https://sarvagyasaxena.tech` (configured in `src/app/layout.tsx`).

## Tech highlights

- SSR/SSG via Next.js (fixes blank JS-only initial load)
- Three.js canvases loaded with `dynamic(..., { ssr: false })` and viewport lazy-mount
- Mobile: CSS gradient fallbacks instead of WebGL on viewports `< 768px`
- Lenis smooth scroll, custom cursor (desktop), scroll progress bar
