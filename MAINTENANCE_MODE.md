# Maintenance Mode — Change Log

**Added:** 2026-09-19  
**Purpose:** Put the production site offline for client payment / service hold without deleting anything.

## How it works

| Env var | Result |
|---------|--------|
| `SITE_STATUS=ON` (or unset) | Normal website |
| `SITE_STATUS=OFF` | Offline page for every visitor |

Toggle in **Vercel → Project → Settings → Environment Variables**, then **Redeploy**.

## Files added / changed

| File | Status | Role |
|------|--------|------|
| `app/layout.tsx` | **Modified** | Reads `SITE_STATUS` and switches between normal site and offline screen |
| `components/MaintenanceScreen.tsx` | **New** | Professional offline UI (logo, message, Call / WhatsApp / Email) |
| `app/maintenance/page.tsx` | **New** | Optional `/maintenance` route |
| `app/not-found.tsx` | **New** | Explicit 404 so Vercel builds do not fail |
| `.env.example` | **Modified** | Documents `SITE_STATUS` |
| `DEPLOY.md` | **Modified** | Instructions for turning maintenance on/off |
| `MAINTENANCE_MODE.md` | **New** | This file |

## What was NOT changed

- No middleware
- No deletion of pages, content, or assets
- Domain, GitHub repo, Vercel project, and deployment history stay intact

## Restore the live site

1. Vercel → Environment Variables → set `SITE_STATUS` = `ON`
2. Redeploy production
