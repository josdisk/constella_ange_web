# Constella Ange Web

Cloud control plane for **Constella Ange** (product) / **Constellation** (engine).

This repo is the Vercel + [v0](https://v0.dev) surface: organizations, projects, libraries, and remote management. **Live venue production never depends on this path** — that stays in the native offline-first engine:

- Native monorepo: [josdisk/constella_ange_app](https://github.com/josdisk/constella_ange_app)

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy target: [Vercel](https://vercel.com)
- UI iteration: paste / sync with [v0.dev](https://v0.dev)

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

1. Import this GitHub repo in the Vercel dashboard, or  
2. `npx vercel` from this directory.

Copy `.env.example` → `.env.local` when adding Clerk / Supabase.

## Domain north star

`Source → Origin → Constellation → Target → Output`

A Constellation is a virtual group of Sources, Origins, and Targets. Targets own Outputs (monitors, OBS, streams, …).
