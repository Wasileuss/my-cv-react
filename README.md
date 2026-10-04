# CV — Vasyl Bezkorovainyi

Personal CV / portfolio site: about, courses, projects and a contact form.

**Stack:** React 19, React Router 7, Vite, SCSS, GSAP, tsParticles, Formik + Yup, EmailJS.

## Getting started

```bash
npm install
cp .env.example .env   # fill in EmailJS credentials
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Dev server with HMR                 |
| `npm run build`   | Production build into `dist/`       |
| `npm run preview` | Serve the production build locally  |
| `npm run lint`    | ESLint (react-hooks, jsx-a11y)      |
| `npm run format`  | Prettier                            |

## Environment variables

| Name                       | Description          |
| -------------------------- | -------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service ID   |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID  |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key   |

## Project structure

```
src/
  components/   page sections (About, Courses, Projects, Contact, …)
  pages/        Layout and 404
  router/       routes and navigation items
  data/         JSON content (projects, courses, contacts)
  assets/       icons and images
  scss/         styles; style.scss is the entry, _tools.scss forwards config/variables/functions
```

## Adding a project

1. Put three screenshots into `src/assets/images/portfolio/` (`pc-NN.webp`, `tablet-NN.webp`, `mobile-NN.webp`).
2. Add an entry to the top of `src/data/projects.json`.

## Deployment

Netlify: build command `npm run build`, publish directory `dist`. SPA routing is handled by `public/_redirects`.
