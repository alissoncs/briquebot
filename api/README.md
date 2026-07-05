# api

Minimal [NestJS](https://nestjs.com/) scaffold for the Briquebot backend, with Postgres wired through [TypeORM](https://typeorm.io/). The database connection is driven by `DATABASE_URL` and stays optional until real entities exist, so the service boots and answers the health check with no database attached. Run it in watch mode with `npm run start:dev -w api` (from the repo root) and check `GET /health`, which returns `{ "status": "ok", "db": <boolean>, "ts": <iso> }`.

