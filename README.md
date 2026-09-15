# Busia Farmers Supplies Limited — Website V1

A static Next.js + TypeScript + Tailwind CSS site for an agricultural
company, built to scale into a full CMS/admin platform (V2) and a
business/tender management platform (V3) without a rewrite. See
`docs/BLUEPRINT.md` for the full plan and `docs/DATABASE_SCHEMA.md` for
the data model V2 will use.

## What's in this folder

```
app/                Next.js App Router pages (Home, About, Services,
                     Products, Field Activities, Projects, Contact),
                     plus [slug] detail-page templates for Products,
                     Field Activities, and Projects
components/          Shared UI: Navbar (desktop dropdowns + mobile
                     drawer), Footer, cards, WhatsApp button,
                     ImpactStats, TrustStrip
content/             ALL site copy and data — edit these files to update
                     the site (see "Editing content" below)
lib/types.ts         Shared TypeScript types, mirrored by the V2 DB schema
public/images/       Real photos go here (currently placeholders)
docs/
  BLUEPRINT.md       Full product blueprint (V1 through V4)
  DATABASE_SCHEMA.md V2 PostgreSQL schema, ready for when V2 starts
  DESIGN.md          Design system rationale (colors, type, layout)
  PROPOSAL.md         Client-facing Phase 1 proposal document
```

## Getting started

**Easiest way (Windows):** double-click `launch.bat`. It checks that
Node.js is installed, runs `npm install` the first time only, creates
`.env.local` from `.env.example` if missing, and starts the dev server —
no manual steps needed.

**Easiest way (macOS/Linux):** run `./launch.sh` (same behavior as
`launch.bat`).

**Manual way (any OS):**

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Node.js doesn't use Python-style `venv` + `requirements.txt`. `npm
> install` reads `package.json` and installs everything into a local
> `node_modules` folder scoped to this project only — that folder is
> the Node equivalent of a virtual environment. Both launch scripts
> create it automatically; nothing is installed globally on your machine.

## Editing content (no code changes needed)

Everything a client would want to change lives in `/content`:

- `content/company.ts` — name, tagline, mission, vision, values, contact
  details, socials
- `content/services.ts` — the services list
- `content/products.ts` — product categories and products
- `content/activities.ts` — field activities (training, demos, etc.)
- `content/projects.ts` — project portfolio entries

**Every value in these files right now is placeholder content** — replace
it with the real client's details before launch. Search for
`PLACEHOLDER CONTENT` comments to find every spot that needs real input.
This includes `company.impactStats` and `company.trustSignals` (the
numbers/checklist shown by `<ImpactStats>` and `<TrustStrip>` on the
homepage and About page) — confirm every figure and claim before launch.

## Adding real photos

Currently every image is a plain colored placeholder block. See
`public/images/README.md` for how to drop in real photos and swap the
placeholder for a `next/image` component.

## Wiring the contact form

The contact form is ready for [Formspree](https://formspree.io):

1. Create a form at formspree.io and copy the form ID.
2. Set `NEXT_PUBLIC_FORMSPREE_ID=your_id` in `.env.local` (see `.env.example`).
3. Redeploy / restart the dev server.

Until the ID is set, the form shows a reminder and will not deliver messages.

## Deploying

This project is set up for [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard for automatic
deploys on every push.

## Roadmap

See `docs/BLUEPRINT.md` for the full V1 → V4 plan. In short: this site
gets a CMS/admin area in V2 (backed by the schema in
`docs/DATABASE_SCHEMA.md`), tender/funding management in V3, and
commerce/operations features in V4 only if the business actually needs
them.
