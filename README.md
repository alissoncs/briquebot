# Briquebot.io

Turn a WhatsApp group/community into an official, monetized classifieds channel for its owner.

## What it does

Briquebot.io is a classifieds/marketplace SaaS built for **group owners (donos de grupo)** in Brazil. It lets a community owner create an official trading channel where their members buy, sell, and trade in a trusted, curated space the owner controls.

Members pay a small per-listing contribution fee via PIX to post; the owner earns a share of the fees, turning their community into recurring revenue.

The product is single-audience: it targets group owners only — there is no separate advertiser/seller product.

## How it works

1. **Owner sets up their channel** — creates and configures their classifieds channel, including the per-listing contribution fee.
2. **Member creates a listing** — adds photos and details, then pays the fee via PIX.
3. **Listing goes live** — the paid listing is posted to the owner's WhatsApp channel (semi-automated share intent), with a public product page and a direct-contact button.

## Monorepo structure

This repository is an [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) monorepo with two packages:

- **`web/`** — the Next.js 14 (App Router) frontend: landing page, auth flows, and setup wizards. This is the original app, moved intact.
- **`api/`** — a minimal NestJS + Postgres (TypeORM) backend scaffold. It boots and serves `GET /health`; the database is optional until real entities land. See [`api/README.md`](api/README.md).

A single lockfile (`package-lock.json`) and `node_modules` live at the root. Common tasks run from the repo root via the workspace scripts:

| Script | Runs |
| --- | --- |
| `npm run dev:web` | Next.js dev server (`web`) |
| `npm run dev:api` | NestJS watch mode (`api`) |
| `npm run build` | Build both `web` and `api` |
| `npm run build:web` / `npm run build:api` | Build a single workspace |
| `npm run start:web` / `npm run start:api` | Start a single workspace |

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** (`web`)
- **NestJS 10** + **TypeORM** + **PostgreSQL** driver (`api`)
- **Tailwind CSS**
- **PostgreSQL (Neon)** + **Drizzle ORM**
- **Auth.js** (Google / Facebook OAuth)
- **Pagar.me** (PIX payments)
- **Vercel Blob** (image storage)
- Semi-automated WhatsApp posting via share intent

## Status

- Landing page (institutional pt-BR home) is built and live.
- Core MVP — auth, group/channel setup, listing creation, PIX checkout, WhatsApp posting — is in progress.

Deferred for later phases: tiered plans, custom subdomains, Discord bot, and automatic owner payouts.

## Getting started

From the repo root, install all workspace dependencies once:

```bash
npm install
```

Then run the frontend:

```bash
npm run dev:web
```

Open http://localhost:3000. To run the backend scaffold in watch mode:

```bash
npm run dev:api
```

GET http://localhost:3001/health returns the service status.

Once auth, database, and payment features land, you'll need environment variables for the Neon database, Auth.js OAuth providers, Pagar.me, and Vercel Blob (see `web/.env.example`), and `DATABASE_URL` for the API (see `api/.env.example`).
