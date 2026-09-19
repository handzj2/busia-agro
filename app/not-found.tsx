import Link from "next/link";
import { company } from "@/content/company";

/**
 * ─────────────────────────────────────────────────────────────
 * CUSTOM 404 PAGE
 * ─────────────────────────────────────────────────────────────
 * Added: 2026-09-19 (alongside maintenance mode)
 * Ensures Next.js has an explicit not-found route so Vercel builds
 * do not fail with "Failed to collect page data for /_not-found".
 * ─────────────────────────────────────────────────────────────
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-stone">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-stone">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-field px-6 py-2.5 text-sm font-medium text-paper transition hover:bg-fieldlight"
      >
        Back to home
      </Link>
      <p className="mt-10 text-xs text-stone/60">{company.name}</p>
    </div>
  );
}
