// Shared content types for the site.
// Shapes intentionally support the V1 content layer and the V2 API swap
// described in the component inventory. Page/component code should not need
// to change when data moves from content/*.ts to API endpoints.

export interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
}

// ─── Site / Company ───────────────────────────────
export interface ImpactStat {
  value: string;
  label: string;
  icon?: string;
}

export interface TrustItem {
  icon?: string;
  label: string;
}

export interface CompanyProfile {
  name: string;
  tagline: string;
  foundedYear: number;
  mission: string;
  vision: string;
  values: string[];
  regionsServed: string[];
  phone: string;
  whatsapp: string; // digits only, e.g. "256700000000"
  email: string;
  address: string;
  mapEmbedUrl: string;
  socials: { label: string; url: string }[];
  impactStats: ImpactStat[];
  trustSignals: string[]; // simple labels; TrustStrip can render them
  hours?: { day: string; hours: string }[];
}

// ─── Service ────────────────────────────
export interface Service {
  slug: string;
  order?: number;
  title: string;
  summary: string; // shortDescription
  description: string; // fullDescription
  bullets?: string[];
  image?: string;
  imageAlt?: string;
}

// ─── Product ────────────────────────────
export interface Product {
  slug: string;
  name: string;
  category?: "seeds" | "inputs" | "equipment" | "other" | string;
  shortDescription?: string;
  description: string;
  specifications?: { label: string; value: string }[];
  image: string;
  imageAlt?: string;
  availability: "available" | "out-of-stock" | "seasonal" | "In stock" | "Seasonal" | "On request";
}

export interface ProductCategory {
  slug: string;
  name: string;
  products: Product[];
}

// ─── Activity (Field Activity) ───────────────────────────
export interface Activity {
  slug: string;
  title: string;
  date: string; // ISO
  location: string;
  activityType: "Training" | "Distribution" | "Demonstration" | "Assessment" | "Other" | string;
  excerpt?: string;
  description: string;
  objectives?: string[];
  results?: string | string[];
  metrics?: { value: string; label: string }[];
  participants?: number;
  partners?: { name: string; logo?: string }[] | string[];
  coverImage?: string;
  coverImageAlt?: string;
  media: MediaItem[];
  gallery?: { src: string; alt: string }[];
  videoUrl?: string;
  featured?: boolean;
}

// Keep alias for existing imports
export type FieldActivity = Activity;

// ─── Project ────────────────────────────
export interface Project {
  slug: string;
  title?: string; // preferred
  name?: string; // legacy alias used in some content
  client?: string;
  partner?: string; // legacy alias
  location: string;
  startDate: string;
  endDate?: string;
  duration?: string;
  status?: "completed" | "ongoing" | "upcoming";
  excerpt?: string;
  summary?: string;
  overview?: string;
  scope: string[];
  activities?: string[];
  results?: string | string[];
  metrics?: { value: string; label: string }[];
  coverImage?: string;
  coverImageAlt?: string;
  media: MediaItem[];
  gallery?: { src: string; alt: string }[];
  videoUrl?: string;
  documents?: { label: string; url: string }[];
  featured?: boolean;
}

// ─── UI helper types ────────────────────
export type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";
