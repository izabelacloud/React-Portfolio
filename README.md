# React Portfolio - Izabela Petrovicova

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description

Personal portfolio for Izabela Petrovicova, showcasing background, projects, resume and contact information. Built with React 19, Vite, Tailwind CSS and React Router.

## Table of Contents

- [Deployed Application](#deployed-application)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Contact Form Setup](#contact-form-setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)
- [Questions](#questions)

## Deployed Application

[React Portfolio](https://izabelacloud.github.io/React-Portfolio/)

![Preview](https://github.com/izabelacloud/React-Portfolio/blob/develop/src/assets/cover/mainpage.png?raw=true)

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) - build tool and dev server
- [React Router](https://reactrouter.com/) - client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) - utility-first styling
- [Framer Motion](https://motion.dev/) - animations
- [ESLint](https://eslint.org/) - linting

## Usage

The site has four sections, reachable from the top navigation: About, Projects, Resume and Contact. It supports light and dark mode (toggle in the nav bar) and is fully responsive.

## Contact Form Setup

The Contact page sends messages via [Web3Forms](https://web3forms.com/), a backend-less form-to-email service, so no server is required. To run the form locally or in your own deployment:

1. Get a free access key at [web3forms.com](https://web3forms.com/) (enter your email, the key arrives instantly).
2. Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY` to your key.

The key is safe to expose in the client bundle; Web3Forms is designed for static sites and validates submissions server-side.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot module reloading at [http://localhost:5173](http://localhost:5173).

### `npm run build`

Builds the app for production to the `dist` folder, minified and ready to deploy.

### `npm run preview`

Serves the production build locally to sanity-check it before deploying.

### `npm run lint`

Runs ESLint across the project.

## Deployment

Deployed to GitHub Pages via [gh-pages](https://www.npmjs.com/package/gh-pages):

```
npm run deploy
```

This builds the app and pushes the `dist` folder to the `gh-pages` branch.

## License

This project is licensed under the MIT license.

## Questions

If you have any questions about the repository, contact me directly at i.petrovicova@gmail.com. You can find more of my work at https://github.com/izabelacloud.
