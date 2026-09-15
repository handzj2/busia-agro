# Busia Farmers Supplies Limited — Master Blueprint

This is the full product blueprint the site is designed against. **Only
V1 is built right now.** V2 and V3 are documented here so every V1
decision (data shapes, URL structure, component boundaries) is made with
them in mind — no rebuild required to reach them later.

## Product vision

Two audiences, one site:

- **Customers** — understand what the company does, browse products and
  services, see field activities and projects, make contact easily
  (phone, WhatsApp, email, map).
- **Business partners / funders / organizations** — evaluate the company
  professionally: track record, field evidence (photos/video), project
  scope and results, and (eventually) tender and partnership information.

This is a professional agricultural company website + activity/portfolio
platform + future business management portal — not a simple product
catalogue site.

## Version roadmap

### V1 — Professional website (built now)
Static Next.js site. Pages: Home, About, Services, Products, Field
Activities, Projects, Contact. Content is hard-coded in `/content/*.ts`.
No database, no backend, no admin login, no CMS, no payments.

### V2 — Self-service website
Add an authenticated `/admin` area, a Postgres database (see
`DATABASE_SCHEMA.md`), and CRUD screens for Products, Projects, Field
Activities, and News, plus a media manager and a contact-message inbox.
The client can then publish a field activity herself, same day, without a
developer.

### V3 — Business platform
Add tender/opportunity management, funding and partnership information
management, document management, and basic reporting — turning the site
into a tool for managing bids and partner relationships, not just
displaying them.

### V4 — Commerce / operations (only if actually needed)
Online enquiries → orders → inventory → payments → invoicing. Not assumed;
only build if the business model calls for it.

## Full content structure (target state, V1 subset in bold)

- **Home** — hero, about/intro, services, products, featured projects,
  field activities, impact, partnership CTA, contact
- **About** — company intro, mission, vision, values, team, company
  profile PDF *(team + PDF are V2+)*
- **Services** — company-provided services (confirmed with client, not
  invented)
- **Products** — category → product catalogue, no checkout in V1
- **Field Activities** — dated records: date, location, description,
  photos/video, results, partners
- **Projects** — name, partner, location, dates, scope, results, media
- News/Updates *(V2+)*
- Tenders/Opportunities *(V3)*
- Partnerships/Funding *(V3, folded into About/Contact in V1)*
- **Contact** — phone, WhatsApp, email, address, map, contact form,
  socials

## Technology blueprint

**V1:** Next.js + TypeScript + Tailwind CSS → GitHub → Vercel. No backend,
no database, no Railway, no auth.

**V2:** Next.js frontend (same codebase) + a small API layer + PostgreSQL
+ authentication + admin dashboard. Hosting: frontend on Vercel, backend
on Railway, media on Cloudinary/Supabase Storage.

**V3:** Same stack, additional tables/endpoints for tenders, funding, and
documents (see `DATABASE_SCHEMA.md`).

## Business model path

One-time V1 build → optional ongoing hosting/maintenance → paid V2
upgrade (self-service CMS) when the client outgrows "send me the update" →
paid V3 upgrade when tender/funding volume justifies it. Each stage is a
natural, low-pressure upsell rather than a single large upfront sell.
