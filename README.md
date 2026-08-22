# React Portfolio - Izabela Petrovicova

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description

Personal portfolio for Izabela Petrovicova, showcasing background, projects, resume and contact information. Built with React 19, Vite, Tailwind CSS and React Router.

## Table of Contents

- [Deployed Application](#deployed-application)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)
- [Questions](#questions)

## Deployed Application

[React Portfolio](https://izabelacloud.github.io/React-Portfolio/)

![Preview](https://github.com/izabelacloud/React-Portfolio/blob/master/src/assets/cover/mainpage.png?raw=true)

## Features

- Four routed sections: About, Projects, Resume, Contact
- Light/dark mode toggle with persisted preference
- Animated page transitions and scroll-in effects
- Responsive layout, from mobile to desktop
- Validated contact form with a `mailto:` submission flow

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) - build tool and dev server
- [React Router](https://reactrouter.com/) - client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) - utility-first styling
- [Framer Motion](https://motion.dev/) - animations
- [ESLint](https://eslint.org/) - linting

## Usage

The site has four sections, reachable from the top navigation: About, Projects, Resume and Contact. It supports light and dark mode (toggle in the nav bar) and is fully responsive.

## Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm (bundled with Node.js)

## Getting Started

```bash
git clone https://github.com/izabelacloud/React-Portfolio.git
cd React-Portfolio
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

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

## Project Structure

```
src/
  components/   Shared UI components (Navigation, Footer, ProjectCard, PageHeading)
  pages/        Route-level pages (About, Projects, Resume, Contact, NotFound)
  data/         Static content (projects.js, resume.js)
  hooks/        Custom hooks (useDarkMode)
  utils/        Helper functions (validation, formatting)
  assets/       Images used across the site
```

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
