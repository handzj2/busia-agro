import type { MetadataRoute } from "next";
import { absoluteUrl, getSiteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/maintenance", "/api/"]
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: origin.replace(/^https?:\/\//, "")
  };
}
