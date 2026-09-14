PROJECT CONTROL
===============

PROJECT ID
----------

Name:           Busia Farmers Supplies Limited
Version:        0.1.0
Owner:          (Project Owner)
Created:        2026-09-11
Last Updated:   2026-09-12


1. WHAT IS THIS PRODUCT?
------------------------

Busia Farmers Supplies Limited is a professional agricultural company website for a fertilizer, pesticide, and farm-inputs retailer with multiple branches (started 2008). Primary presence includes Mbale Bus Park and other locations in Eastern Uganda.

It serves two audiences simultaneously:

- Everyday farmers and customers who need clear product information, advice, and easy contact (phone / WhatsApp).
- Potential partners, funders, and organizations who need evidence of real field presence, projects, and credibility.

The site is deliberately built as a foundation for later phases (self-service CMS in V2, tender/business platform in V3) without requiring a rewrite.


2. WHO USES IT?
---------------

Primary users:
- Local farmers buying fertilizer, pesticides, and farm inputs
- Walk-in customers at the Mbale Bus Park shop

Secondary users:
- NGOs, partners, and funders evaluating the business
- Potential wholesale / bulk buyers

Technical administrators:
- Currently: developer only (content is code-based)
- Future (V2): client admin users


3. PROBLEM BEING SOLVED
-----------------------

Farmers and partners currently have limited reliable online information about the company, its products, and its field activities. The business needs a credible digital presence that:

- Makes it easy for farmers to understand what is stocked and how to contact the shop
- Provides dated field evidence that builds trust with partners and funders
- Can grow into a self-managed platform without throwing away the current work


4. CORE VALUE
-------------

Instead of a generic product catalogue or a basic "small shop" website, this site presents the business as a serious regional agro-inputs supplier with real field activity records. Contact is frictionless (WhatsApp + phone + form). Content is structured so V2 can later turn the same data shapes into an admin-managed system.


5. PRODUCT TYPE
---------------

[x] Website
[ ] SaaS
[ ] Web application
[ ] Desktop application
[ ] Mobile application
[ ] Browser extension
[ ] Internal tool
[ ] API
[ ] Other


6. TECHNOLOGY
-------------

Frontend:       Next.js 14 (App Router) + TypeScript + Tailwind CSS
Backend:        None in V1 (static)
Database:       None in V1 (content in `/content/*.ts`)
Authentication: None in V1
Hosting:        Vercel (configured)
External services:
- Formspree (contact form — optional, currently not wired)
- Google Maps embed


7. CURRENT PHASE
----------------

Phase:      V1 — Professional Website
Objective:  Launch a credible, mobile-friendly company site with real (or confirmed) content, working contact paths, and clean foundation for V2.


8. CURRENT TASK
---------------

Task:       Install Project Control system + prepare content for launch readiness
Status:     In progress


9. SOURCE OF TRUTH
------------------

- The existing repository is the implementation source of truth.
- The approved project-control documents are the direction source of truth.
- Content lives in `/content/*.ts` until V2 moves it to a database.


10. DO NOT CHANGE WITHOUT APPROVAL
----------------------------------

Protected areas:

- Content data shapes in `lib/types.ts` (designed for V2 compatibility)
- URL structure and route names (Home, About, Services, Products, Field Activities, Projects, Contact)
- Design tokens and Product DNA (colors, typography, record-rule pattern)
- Existing component contracts used by multiple pages
- V1 → V2 data migration path described in `docs/BLUEPRINT.md` and `docs/DATABASE_SCHEMA.md`
- Contact / WhatsApp primary call-to-action pattern


11. CURRENT PRIORITIES
----------------------

1. Replace all PLACEHOLDER content with real client data (phone, WhatsApp, email, founding year, impact numbers, products, activities, projects)
2. Confirm or remove unconfirmed trust signals and impact stats
3. Add real photos where available
4. Wire Formspree (or alternative) for the contact form
5. Final UI / content audit before launch
6. Deploy to production domain


12. EXPLICITLY OUT OF SCOPE (V1)
--------------------------------

- Admin / login area
- Database or CMS
- Online ordering or payments
- User accounts
- Tender / funding management tools
- Invented services or products not confirmed by the client
- Generic SaaS dashboard patterns
- Third-party analytics or tracking without explicit request
