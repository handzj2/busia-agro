# V2 Database Schema (for planning — not built in V1)

This defines the data model V2 will introduce when the client needs to
manage content herself. It's designed now, alongside V1, so the V1
codebase's content shapes (see `/lib/types.ts`) don't need to change when
V2 arrives — only their data source does (hard-coded objects → API calls
against this schema).

Target stack for V2: PostgreSQL + a lightweight API layer (e.g. Next.js
route handlers, or a small Express/Fastify service) on Railway, with media
files stored in Cloudinary or Supabase Storage — never as binary blobs in
Postgres.

## Core tables

```sql
-- Company-wide singleton content (About page, footer, contact details)
CREATE TABLE company_profile (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  tagline TEXT,
  mission TEXT,
  vision TEXT,
  values TEXT[],
  regions_served TEXT[],
  phone TEXT,
  whatsapp TEXT,
  email TEXT,
  address TEXT,
  map_embed_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Admin users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor', -- 'admin' | 'editor'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Reusable media reference table. Any entity below can attach media rows
-- via (entity_type, entity_id) rather than duplicating file-handling logic.
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type TEXT NOT NULL,   -- 'product' | 'project' | 'field_activity' | 'news' | 'tender'
  entity_id UUID NOT NULL,
  type TEXT NOT NULL,          -- 'image' | 'video' | 'document'
  url TEXT NOT NULL,           -- Cloudinary/Supabase Storage URL
  alt_text TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_media_entity ON media (entity_type, entity_id);

CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  description TEXT,
  sort_order INT DEFAULT 0,
  published BOOLEAN DEFAULT true
);

CREATE TABLE product_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES product_categories(id) ON DELETE SET NULL,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  availability TEXT DEFAULT 'On request', -- 'In stock' | 'Seasonal' | 'On request'
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE field_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  activity_date DATE NOT NULL,
  location TEXT NOT NULL,
  activity_type TEXT NOT NULL, -- 'Training' | 'Field Demonstration' | 'Distribution' | ...
  description TEXT,
  results TEXT,
  partners TEXT[],
  published BOOLEAN DEFAULT true,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_activities_date ON field_activities (activity_date DESC);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  partner TEXT,
  location TEXT,
  start_date DATE,
  end_date DATE, -- null = ongoing
  summary TEXT,
  scope TEXT[],
  results TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  body TEXT,
  published_at TIMESTAMPTZ,
  published BOOLEAN DEFAULT true
);

CREATE TABLE tenders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  organization TEXT,
  description TEXT,
  opening_date DATE,
  closing_date DATE,
  status TEXT NOT NULL DEFAULT 'OPEN', -- 'OPEN' | 'CLOSED' | 'AWARDED' | 'CANCELLED'
  contact_note TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tender_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tender_id UUID REFERENCES tenders(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  label TEXT
);

CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new', -- 'new' | 'read' | 'replied' | 'archived'
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL
);
```

## Relationships at a glance

```
company_profile (singleton)

users ──< field_activities (created_by)

media >── (entity_type, entity_id) ──< products
                                   ──< projects
                                   ──< field_activities
                                   ──< news

product_categories ──< products

tenders ──< tender_documents

contact_messages (standalone inbox)
```

## Migration notes for when V2 starts

- The V1 `/content/*.ts` objects map almost 1:1 onto these tables — the V2
  API's first job can literally be to seed the database from that file's
  contents, so nothing already published gets lost.
- Keep `slug` fields as the stable public identifier (used in URLs); never
  reuse a slug for a different record even after "deleting" one — prefer a
  `published` flag over hard deletes for anything already publicly linked.
- `media` is intentionally a single polymorphic table rather than one media
  table per entity, so the admin's media manager and upload flow only need
  to be built once.
