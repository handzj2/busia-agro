# Decision: Mock login UI (no real auth)

**Date:** 2026-09-14  
**Status:** Approved by owner  

## Decision
Add a **UI-only** mock login page at `/login`.

## Scope
- Visual form only (email + password)
- Submit shows demo success message
- **No** authentication, sessions, cookies, or protected routes
- **Not** linked from main navbar (URL only)

## Out of scope (V2)
Real staff login, admin dashboard, CMS, password storage.

## Rationale
Owner requested demo UI for presentation. Control rules require real auth to stay in V2.
