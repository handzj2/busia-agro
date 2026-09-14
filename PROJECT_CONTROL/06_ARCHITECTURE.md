ARCHITECTURE
============

CURRENT (V1)
------------

- Framework: Next.js 14 App Router
- Language: TypeScript
- Styling: Tailwind CSS + custom CSS in `app/globals.css`
- Content: Static TypeScript modules in `/content/`
- Types: Centralized in `lib/types.ts`
- Deployment: Vercel
- No server-side data layer, no database, no authentication


KEY DESIGN DECISIONS
--------------------

1. Content shapes in `lib/types.ts` are deliberately compatible with the V2 PostgreSQL schema documented in `docs/DATABASE_SCHEMA.md`.
2. Pages and components consume content through the typed modules. When V2 arrives, only the data source changes — not the consuming code.
3. URL structure is stable and SEO-friendly.
4. Design tokens live in Tailwind config + CSS variables / classes. Product DNA must be respected when extending.


PROTECTED BOUNDARIES
--------------------

- Do not change the public route structure without approval.
- Do not introduce new global state libraries or heavy UI frameworks.
- Do not add dependencies unless they solve a clear, approved need.
- Keep the admin UI (V2) visually distinct from the public site (different density and purpose).


FUTURE MIGRATION PATH (V2)
--------------------------

1. Introduce PostgreSQL + ORM (or query layer)
2. Create API routes or server actions that return the same TypeScript shapes
3. Replace imports from `/content/*.ts` with fetches from the new data layer
4. Add authentication and `/admin` routes
5. Public site continues to use the same components and types
