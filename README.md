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

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
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

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

Once auth, database, and payment features land, you'll need environment variables for the Neon database, Auth.js OAuth providers, Pagar.me, and Vercel Blob (see `.env.example` when available).
