// Neon (Vercel Postgres) database scaffold.
//
// This is scaffolded for future use — the Hello World endpoint does not
// query the database yet. To enable it:
//   1. Add your Neon connection string to .env.local as DATABASE_URL
//   2. Install a driver, e.g. `npm install @neondatabase/serverless`
//   3. Uncomment the client below and use it in your routes.
//
// import { neon } from "@neondatabase/serverless";
//
// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not set. See .env.example");
// }
//
// export const sql = neon(process.env.DATABASE_URL);

export const DATABASE_URL = process.env.DATABASE_URL;
