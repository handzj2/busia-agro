/**
 * Canonical production origin for Busia Farmers Supplies.
 * Always use this host for sitemap, robots, and absolute public URLs.
 */
export const CANONICAL_SITE_ORIGIN = "https://www.busiafamerssuupplies.com";

/**
 * Resolve a safe absolute HTTPS origin for metadata, robots, and sitemap.
 *
 * Handles common misconfigurations of NEXT_PUBLIC_SITE_URL:
 * - missing protocol (e.g. "busiafamerssuupplies.com")
 * - missing www
 * - trailing slash
 * - empty / invalid values
 *
 * Returns an origin with no trailing slash, e.g.
 * "https://www.busiafamerssuupplies.com"
 */
export function getSiteOrigin(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || "").trim();

  if (!raw) {
    return CANONICAL_SITE_ORIGIN;
  }

  // Ensure a protocol so the URL constructor accepts the value
  let candidate = raw;
  if (!/^https?:\/\//i.test(candidate)) {
    candidate = `https://${candidate.replace(/^\/+/, "")}`;
  }

  try {
    const url = new URL(candidate);
    // Force HTTPS
    url.protocol = "https:";
    // Prefer the known production www host when the env points at this domain
    // without www (or with a typo-free host match)
    const host = url.hostname.replace(/^www\./i, "").toLowerCase();
    if (host === "busiafamerssuupplies.com") {
      return CANONICAL_SITE_ORIGIN;
    }
    // Other hosts (preview deployments): keep hostname, drop path/query
    return `https://${url.hostname}`;
  } catch {
    return CANONICAL_SITE_ORIGIN;
  }
}

/**
 * Build an absolute public URL for a path (always https, no double slashes).
 * Homepage is returned with a trailing slash for sitemap clarity.
 */
export function absoluteUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  if (!path || path === "/") {
    return `${origin}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}
