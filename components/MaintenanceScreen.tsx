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
 * Design matches the Busia Farmers Supplies brand (field green,
 * harvest gold, parchment paper, Fraunces + Work Sans).
 *
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
              We are currently performing scheduled maintenance or service
              updates. The site will return shortly.
            </p>
            <p className="mt-4 text-sm text-stone/80">
              Please contact us if you need immediate assistance.
            </p>
          </div>
        </div>

        {/* Contact actions */}
        <div className="mt-10 grid gap-3">
          {company.phone && (
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-center gap-3 rounded-xl border border-stone/15 bg-white px-5 py-3.5 text-sm font-medium text-ink shadow-sm transition hover:border-harvest/40 hover:bg-parchment/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-field/10 text-field transition group-hover:bg-harvest/15 group-hover:text-harvest">
                <PhoneIcon />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-normal uppercase tracking-wider text-stone">
                  Call us
                </span>
                {company.phone}
              </span>
            </a>
          )}

          {company.whatsapp && (
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl border border-stone/15 bg-white px-5 py-3.5 text-sm font-medium text-ink shadow-sm transition hover:border-harvest/40 hover:bg-parchment/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-field/10 text-field transition group-hover:bg-harvest/15 group-hover:text-harvest">
                <WhatsAppIcon />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-normal uppercase tracking-wider text-stone">
                  WhatsApp
                </span>
                Message us
              </span>
            </a>
          )}

          {company.email && (
            <a
              href={`mailto:${company.email}`}
              className="group flex items-center justify-center gap-3 rounded-xl border border-stone/15 bg-white px-5 py-3.5 text-sm font-medium text-ink shadow-sm transition hover:border-harvest/40 hover:bg-parchment/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-field/10 text-field transition group-hover:bg-harvest/15 group-hover:text-harvest">
                <MailIcon />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-normal uppercase tracking-wider text-stone">
                  Email
                </span>
                {company.email}
              </span>
            </a>
          )}
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

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
