import type { MetadataRoute } from "next";
import { productCategories } from "@/content/products";
import { fieldActivities } from "@/content/activities";
import { projects } from "@/content/projects";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://www.busiafamerssuupplies.com";

function absolute(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  return path === "/" ? base : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absolute("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absolute("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absolute("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absolute("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absolute("/field-activities"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absolute("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absolute("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 }
  ];

  const productPages: MetadataRoute.Sitemap = productCategories.flatMap((cat) =>
    cat.products
      .filter((p) => p.slug)
      .map((p) => ({
        url: absolute(`/products/${p.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7
      }))
  );

  const activityPages: MetadataRoute.Sitemap = fieldActivities
    .filter((a) => a.slug)
    .map((a) => ({
      url: absolute(`/field-activities/${a.slug}`),
      lastModified: a.date ? new Date(a.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }));

  const projectPages: MetadataRoute.Sitemap = projects
    .filter((p) => p.slug)
    .map((p) => ({
      url: absolute(`/projects/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5
    }));

  return [...staticPages, ...productPages, ...activityPages, ...projectPages];
}
