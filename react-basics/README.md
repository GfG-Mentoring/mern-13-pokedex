# react-basics

Vite + React + TypeScript app (Tailwind CSS, TanStack Query) that lists Pokémon from the public PokéAPI.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes `npm`)

## Getting started

From the repository root:

```bash
cd react-basics
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`). Open it in your browser.

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start Vite dev server with HMR       |
| `npm run build`| Typecheck and production build       |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint                           |

## Expanding the ESLint configuration

If you are developing a production application, you can enable type-aware lint rules. See the [typescript-eslint docs](https://typescript-eslint.io/getting-started/typed-linting/) and the comments in `eslint.config.js`.
