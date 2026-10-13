import type { MetadataRoute } from "next";
import { productCategories } from "@/content/products";
import { fieldActivities } from "@/content/activities";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/field-activities"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 }
  ];

  const productPages: MetadataRoute.Sitemap = productCategories.flatMap((cat) =>
    cat.products
      .filter((p) => p.slug)
      .map((p) => ({
        url: absoluteUrl(`/products/${p.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7
      }))
  );

  const activityPages: MetadataRoute.Sitemap = fieldActivities
    .filter((a) => a.slug)
    .map((a) => ({
      url: absoluteUrl(`/field-activities/${a.slug}`),
      lastModified: a.date ? new Date(a.date) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }));

  const projectPages: MetadataRoute.Sitemap = projects
    .filter((p) => p.slug)
    .map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5
    }));

  return [...staticPages, ...productPages, ...activityPages, ...projectPages];
}
