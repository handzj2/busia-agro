import Image from "next/image";
import Link from "next/link";

type BrandBannerProps = {
  /** Compact spacing for inner pages under a page hero */
  compact?: boolean;
  /** Load eagerly (home / products). Default true for compact=false */
  priority?: boolean;
};

/**
 * Client promotional banner — Gemini recreation of the official poster.
 * Use full on Home; compact under heroes on Products, About, Services, Contact.
 */
export default function BrandBanner({
  compact = false,
  priority
}: BrandBannerProps) {
  const eager = priority ?? !compact;

  return (
    <section
      className={compact ? "bg-parchment" : "bg-field"}
      aria-label="Busia Farmers Supplies product range"
    >
      <div
        className={
          compact
            ? "mx-auto flex max-w-6xl flex-col items-center px-4 py-6 md:px-6 md:py-8"
            : "mx-auto flex max-w-6xl flex-col items-center px-4 py-6 md:px-6 md:py-8"
        }
      >
        <div
          className={
            compact
              ? "hero-banner banner-hover w-full max-w-[1000px] overflow-hidden rounded-sm border border-stone/20 bg-paper shadow-md ring-1 ring-black/5"
              : "hero-banner banner-hover w-full max-w-[1100px] overflow-hidden rounded-sm shadow-lg ring-1 ring-black/15"
          }
        >
          <Image
            src="/images/brand/product-range-banner.jpg"
            alt="Busia Farmers Supplies Ltd — dealers in fertilizers, chemicals, quality seeds, consultation, field visits, contract farming and seedling raising. Call 0774 201 233 or 0772 898 049. Mbale City."
            width={1376}
            height={768}
            className="h-auto w-full object-contain"
            priority={eager}
            quality={92}
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
        <div
          className={
            compact
              ? "mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-sm text-stone"
              : "mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-paper/90"
          }
        >
          <span>Fertilizers · Chemicals · Seeds · Advisory</span>
          <Link
            href="/products"
            className={
              compact
                ? "font-medium text-field underline-offset-4 hover:underline"
                : "font-medium text-harvest underline-offset-4 hover:underline"
            }
          >
            Shop products
          </Link>
          <Link
            href="/contact"
            className={
              compact
                ? "font-medium text-field underline-offset-4 hover:underline"
                : "font-medium text-harvest underline-offset-4 hover:underline"
            }
          >
            Contact us
          </Link>
          <a
            href="tel:+256774201233"
            className={
              compact
                ? "font-medium text-ink underline-offset-4 hover:underline"
                : "font-medium text-paper underline-offset-4 hover:underline"
            }
          >
            0774 201 233
          </a>
        </div>
      </div>
    </section>
  );
}
