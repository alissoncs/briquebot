# briquebot

A basic full-stack scaffold built with **Next.js** (App Router) and prepared for a
**Neon (Vercel) PostgreSQL** database.

## What's inside

- **Backend API** — `GET /api/hello` returns a Hello World JSON payload.
- **Frontend** — the home page (`app/page.tsx`) fetches `/api/hello` and displays the message.
- **Database (scaffolded)** — `lib/db.ts` and `.env.example` are ready for a Neon
  `DATABASE_URL`. No live query is wired up yet — Hello World only needs the API.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Neon DATABASE_URL (optional for now)
npm run dev
```

Open http://localhost:3000 — you should see the message served by `/api/hello`.

## Deploying

Designed for one-click deployment to **Vercel**. Add `DATABASE_URL` (from Neon /
Vercel Storage) as an environment variable when you're ready to use the database.
