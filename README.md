# Izabela Petrovicova

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description

Personal brand site for Izabela Petrovicova — Technical Architecture Director and Senior Salesforce Enterprise Architect, PADI Divemaster and mountaineer. Architect by profession, adventurer by instinct: the site treats her professional and adventure identities as two expressions of the same mindset rather than two separate personas. Built with React 19, Vite, Tailwind CSS 4, React Router and Framer Motion.

## Table of Contents

- [Live Site](#live-site)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Local Development](#local-development)
- [Contact Form Setup](#contact-form-setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)
- [Questions](#questions)

## Live Site

[izabela-petrovicova.com](https://izabela-petrovicova.com)

<!-- TODO: replace with a fresh screenshot once the new design is deployed; the previous preview image reflects the old layout. -->

## Pages

- **Home** — hero positioning, adventure stats, and entry points into Work and Adventures
- **Work** — case studies, experience timeline and certifications
- **Leadership** — leadership philosophy and team scope
- **Adventures** — hub with subpages for Mountains, Diving, Skiing and Travel, each listing individual expedition stories
- **About** — bio, focus areas and background
- **Now** — a lightweight "currently" page, linked from the footer
- **Field Notes** — short-form journal posts
- **Projects** — a selection of shipped side applications, each linking to its repo and live demo (linked from Work)
- **Contact** — a message form (no backend required, see [Contact Form Setup](#contact-form-setup))

Content models for experience, case studies, expeditions, journal posts and certifications live in `src/data/`. Fields not yet confirmed are marked `[VERIFY ...]` rather than filled with invented details — replace them with real content before publishing.

The nav bar includes a light/dark mode toggle, and the layout is fully responsive.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) - build tool and dev server
- [React Router](https://reactrouter.com/) - client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) - utility-first styling
- [Framer Motion](https://motion.dev/) - animations
- [ESLint](https://eslint.org/) - linting

## Local Development

```sh
git clone https://github.com/izabelacloud/izabela-petrovicova.git
cd izabela-petrovicova
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173).

## Contact Form Setup

The Contact page sends messages via [Web3Forms](https://web3forms.com/), a backend-less form-to-email service, so no server is required. To run the form locally or in your own deployment:

1. Get a free access key at [web3forms.com](https://web3forms.com/) (enter your email, the key arrives instantly).
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY` to your key.

The key is safe to expose in the client bundle; Web3Forms is designed for static sites and validates submissions server-side.

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot module reloading at [http://localhost:5173](http://localhost:5173).

### `npm run build`

Builds the app for production to the `dist` folder, minified and ready to deploy.

### `npm run preview`

Serves the production build locally to sanity-check it before deploying.

### `npm run lint`

Runs ESLint across the project.

### `npm run deploy`

Builds the app and publishes the `dist` folder to the `gh-pages` branch.

## Deployment

Deployed to GitHub Pages via [gh-pages](https://www.npmjs.com/package/gh-pages):

```sh
npm run deploy
```

## License

This project is licensed under the MIT license.

## Questions

If you have any questions about the repository, contact me directly at [i.petrovicova@gmail.com](mailto:i.petrovicova@gmail.com). You can find more of my work at [github.com/izabelacloud](https://github.com/izabelacloud).
