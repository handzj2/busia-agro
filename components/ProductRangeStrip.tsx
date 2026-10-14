import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { productCategories } from "@/content/products";

/**
 * Web product strip — rebuilt from poster layout using real catalog photos.
 * Mixed categories: fertilizers, seeds, herbicides, insecticides, foliar.
 */
const MIXED_SLUGS = [
  "yaramila-winner-50kg",
  "yaramila-java-50kg",
  "yara-microp-topdressing-chapa-meli-50kg",
  "weed-master-glyphosate-50sc-herbicide",
  "dryweed-396sl-herbicide",
  "advanta-adv2309w-hybrid-maize-seed",
  "western-seed-haraka-wh301-hybrid-maize-seed",
  "syngenta-galil-300sc-insecticide",
  "syngenta-quadris-50wg-fungicide",
  "aglukon-wuxal-macromix-24-24-18-te",
  "falcon-gold-cal-max-liquid-fertilizer",
  "dem-organic-fertilizer-25kg"
];

type Props = {
  /** Show fewer items on tight layouts */
  limit?: number;
  /** Slightly tighter padding */
  compact?: boolean;
};

export default function ProductRangeStrip({ limit = 12, compact = false }: Props) {
  const bySlug = Object.fromEntries(
    productCategories
      .flatMap((c) => c.products)
      .filter((p) => p.image)
      .map((p) => [p.slug, p])
  );
  const products = MIXED_SLUGS.map((s) => bySlug[s])
    .filter(Boolean)
    .slice(0, limit);

  return (
    <section
      className={compact ? "bg-paper" : "bg-parchment"}
      aria-label="Featured product range"
    >
      <div
        className={
          compact
            ? "mx-auto max-w-6xl px-4 py-6 md:px-6"
            : "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10"
        }
      >
        <div className="overflow-hidden rounded-sm border border-stone/20 bg-paper shadow-sm">
          {/* Title row */}
          <div className="flex flex-col items-start justify-between gap-2 border-b border-stone/15 px-4 py-4 sm:flex-row sm:items-center sm:px-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-clay">
                In stock &amp; on request
              </p>
              <h2 className="mt-1 font-serif text-lg text-ink sm:text-xl">
                Fertilizers, seeds &amp; crop protection
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-medium text-field underline-offset-4 hover:underline"
            >
              View all products →
            </Link>
          </div>

          {/* Mixed product grid */}
          <div className="grid grid-cols-3 gap-2 p-3 sm:grid-cols-4 md:grid-cols-6 md:gap-3 md:p-5">
            {products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col"
                title={product.name}
              >
                <div className="hover-lift flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-stone/15 bg-parchment p-2">
                  <Image
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    width={140}
                    height={140}
                    className="hover-zoom h-full w-full object-contain"
                    sizes="(min-width: 768px) 15vw, 33vw"
                    priority={i < 4}
                  />
                </div>
                <p className="mt-1.5 line-clamp-2 text-center text-[10px] leading-tight text-stone transition-colors group-hover:text-ink sm:text-xs">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Contact strip */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-stone/15 bg-field px-4 py-3 text-center text-xs text-paper sm:flex-row sm:text-left sm:text-sm">
            <p className="text-paper/90">
              Dealers in fertilizers, chemicals, quality seeds &amp; advisory
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <a
                href={`tel:${company.phone.replace(/\s+/g, "")}`}
                className="font-medium text-harvest hover:underline"
              >
                {company.phone.replace("+256 ", "0")}
              </a>
              <Link href="/contact" className="text-paper/90 hover:text-harvest">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
