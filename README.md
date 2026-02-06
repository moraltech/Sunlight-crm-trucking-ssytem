# Sunlight Trucking Company

Enterprise CRM and logistics management SaaS platform.

This repository provides a working system scaffold with:

* NestJS API (multi-tenant, RBAC-ready) backed by PostgreSQL
* Next.js admin portal with a role-based dashboard shell
* Docker Compose for local PostgreSQL and Redis

The product vision and requirements are captured in the
`sunlight crm` document at the repository root.

## Repo Layout

```
apps/
  api/         NestJS API with Prisma schema
  web/         Next.js admin portal
```

## Quick Start (Local)

1. Copy environment variables:

```
cp .env.example .env
```

2. Start infrastructure:

```
docker compose up -d
```

3. Install and run the API:

```
cd apps/api
npm install
npm run prisma:generate
npm run dev
```

4. Install and run the web app:

```
cd apps/web
npm install
npm run dev
```

## Environment Variables

See `.env.example` for local defaults.
