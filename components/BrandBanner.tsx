import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { productCategories } from "@/content/products";

/**
 * Web banner rebuilt from the client poster layout, using sharp site assets
 * instead of the low-res WhatsApp JPEG.
 */
const FEATURED_SLUGS = [
  "yaramila-winner-50kg",
  "yara-microp-topdressing-chapa-meli-50kg",
  "weed-master-glyphosate-50sc-herbicide",
  "advanta-adv2309w-hybrid-maize-seed",
  "western-seed-haraka-wh301-hybrid-maize-seed",
  "syngenta-galil-300sc-insecticide",
  "dryweed-396sl-herbicide",
  "dem-organic-fertilizer-25kg"
];

export default function BrandBanner() {
  const bySlug = Object.fromEntries(
    productCategories
      .flatMap((c) => c.products)
      .filter((p) => p.image)
      .map((p) => [p.slug, p])
  );
  const products = FEATURED_SLUGS.map((s) => bySlug[s]).filter(Boolean);

  return (
    <section className="bg-parchment" aria-label="Busia Farmers Supplies product range">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <div className="hero-banner overflow-hidden rounded-sm border border-stone/20 bg-paper shadow-md">
          {/* Header — logo + name */}
          <div className="flex flex-col items-center gap-4 border-b border-stone/15 px-4 py-5 sm:flex-row sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-nav-light.png"
                alt={company.name}
                width={72}
                height={64}
                className="h-14 w-auto object-contain dark:hidden"
              />
              <Image
                src="/images/logo-nav-dark.png"
                alt={company.name}
                width={72}
                height={64}
                className="hidden h-14 w-auto object-contain dark:block"
              />
              <div>
                <p className="font-serif text-xl font-semibold leading-tight tracking-tight text-field sm:text-2xl md:text-3xl">
                  BUSIA FARMERS
                  <br className="sm:hidden" /> SUPPLIES LTD
                </p>
                <p className="mt-0.5 text-xs text-stone sm:text-sm">{company.tagline}</p>
              </div>
            </div>
            <Link
              href="/products"
              className="btn-press hidden rounded-sm bg-field px-4 py-2 text-sm font-medium text-paper sm:inline-flex"
            >
              Browse products
            </Link>
          </div>

          {/* Services strip — exact poster wording */}
          <div className="bg-field px-4 py-3 text-center sm:px-6">
            <p className="text-xs font-medium leading-snug text-paper sm:text-sm md:text-base">
              Dealers In All Fertilizers, Chemicals, Quality Seeds, Consultation
              Services, Field Visits, Contract Farming &amp; Seedling Raising
            </p>
          </div>

          {/* Product strip — real catalog photos */}
          <div className="grid grid-cols-4 gap-2 bg-paper p-3 sm:grid-cols-8 sm:gap-3 sm:p-5">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col items-center"
                title={product.name}
              >
                <div className="hover-lift flex aspect-square w-full items-center justify-center overflow-hidden rounded-sm border border-stone/15 bg-parchment p-1.5">
                  <Image
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    width={120}
                    height={120}
                    className="hover-zoom h-full w-full object-contain"
                    sizes="(min-width: 640px) 12vw, 25vw"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer bar — phones, web, address from poster */}
          <div className="bg-field px-4 py-4 text-paper sm:px-6">
            <div className="flex flex-col items-center gap-3 text-center text-xs sm:flex-row sm:flex-wrap sm:justify-between sm:text-left sm:text-sm">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <a
                  href="tel:+256774201233"
                  className="font-medium text-paper transition-colors hover:text-harvest"
                >
                  0774 201 233
                </a>
                <a
                  href="tel:+256772898049"
                  className="font-medium text-paper transition-colors hover:text-harvest"
                >
                  0772 898 049
                </a>
              </div>
              <a
                href="https://www.busiafamerssuupplies.com"
                className="font-medium text-harvest transition-colors hover:underline"
              >
                www.busiafamerssuupplies.com
              </a>
              <p className="max-w-md text-paper/85">
                Mbale City, Industrial Division, South Central Ward — Mbale Bus
                Park Opp M.kopa · P.O. Box 312768
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
