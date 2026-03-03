# Dubbin Frontend

Public-safe premium frontend for `Dubbin OS`, prepared for a separate open repository and GitHub Pages deployment.

## Architecture

- `app/`: route layer only
- `components/atoms`, `components/molecules`, `components/templates`: reusable UI composition
- `content/`: locale-based copy and market positioning data
- `config/`: deployment and public lead-capture configuration
- `lib/`: locale and utility helpers

This keeps the public site presentation-focused while private AI logic, corpora, and real authentication stay in the private repository.

## Routes

- `/`: language gateway
- `/en`, `/tr`: localized landing pages
- `/en/login`, `/tr/login`: public login preview
- `/en/demo`, `/tr/demo`: demo request intake
- `/en/request`, `/tr/request`: custom request intake
- `/en/dashboard`, `/tr/dashboard`: premium dashboard preview

## Local Run

```bash
cd frontend
npm install
npm run dev
```

## Static Export For GitHub Pages

```bash
cd frontend
npm install
npm run build:pages
```

The static site is generated in `out/`.

## Public Lead Capture

Do not hardcode a personal email address into a public static site.

Instead, configure one or both of these build-time variables:

- `NEXT_PUBLIC_DEMO_REQUEST_URL`
- `NEXT_PUBLIC_GENERAL_REQUEST_URL`

These should point to a professional intake surface such as `Tally`, `Typeform`, `Formspark`, or a custom hosted form. The public site saves the draft locally in the browser first, then opens the external intake URL if configured.

## GitHub Pages Workflow

When this folder is used as the root of the public repository, the workflow at `.github/workflows/deploy-pages.yml` will build and publish the site to GitHub Pages.
