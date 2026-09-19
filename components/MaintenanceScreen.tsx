import Image from "next/image";
import { company } from "@/content/company";
import LeafIcon from "@/components/LeafIcon";

/**
 * ─────────────────────────────────────────────────────────────
 * MAINTENANCE / OFFLINE SCREEN
 * ─────────────────────────────────────────────────────────────
 * Added: 2026-09-19
 *
 * Shown when SITE_STATUS=OFF (set in Vercel Environment Variables).
 * Full-viewport overlay so the normal site chrome is fully covered.
 *
 * Message directs visitors to contact the hosting administrator.
 * To restore the live site: set SITE_STATUS=ON and Redeploy.
 * ─────────────────────────────────────────────────────────────
 */
export default function MaintenanceScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto bg-paper px-6 py-16">
      {/* Brand texture (same as main site hero sections) */}
      <div
        className="pointer-events-none absolute inset-0 furrow-texture opacity-60"
        aria-hidden="true"
      />

      {/* Top accent bar — field → harvest → field */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-field via-harvest to-field" />

      <div className="relative z-10 mx-auto w-full max-w-lg text-center">
        {/* Logo card */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone/10">
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={140}
              height={70}
              className="h-auto w-36 object-contain"
              priority
            />
          </div>
        </div>

        {/* Official notice label */}
        <div className="mb-2 flex items-center justify-center gap-2 text-field">
          <LeafIcon className="h-5 w-5" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-field">
            Official notice
          </span>
          <LeafIcon className="h-5 w-5" />
        </div>

        <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          {company.name}
        </h1>

        {/* Message card */}
        <div className="mx-auto mt-6 max-w-sm">
          <div className="rounded-2xl border border-stone/15 bg-white/80 px-8 py-8 shadow-sm backdrop-blur-sm">
            <p className="font-serif text-xl text-ink">
              Website temporarily unavailable
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">
              This website is currently offline.
            </p>
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-ink">
              Please contact the hosting administrator for assistance.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs tracking-wide text-stone/55">
          {company.tagline}
        </p>
        <p className="mt-1 text-[11px] text-stone/40">
          Serving farmers since {company.foundedYear}
        </p>
      </div>
    </div>
  );
}
