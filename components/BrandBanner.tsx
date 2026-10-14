import Image from "next/image";
import Link from "next/link";

/**
 * Client promotional banner (Gemini high-res recreation of the original poster).
 * 1376×768 — sharper than the WhatsApp source; displayed with a sensible max-width.
 */
export default function BrandBanner() {
  return (
    <section
      className="bg-field"
      aria-label="Busia Farmers Supplies product range"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-6 md:px-6 md:py-8">
        <div className="hero-banner banner-hover w-full max-w-[1100px] overflow-hidden rounded-sm shadow-lg ring-1 ring-black/15">
          <Image
            src="/images/brand/product-range-banner.jpg"
            alt="Busia Farmers Supplies Ltd — dealers in fertilizers, chemicals, quality seeds, consultation, field visits, contract farming and seedling raising. Call 0774 201 233 or 0772 898 049. Mbale City."
            width={1376}
            height={768}
            className="h-auto w-full object-contain"
            priority
            quality={92}
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-paper/90">
          <span>Fertilizers · Chemicals · Seeds · Advisory</span>
          <Link
            href="/products"
            className="font-medium text-harvest underline-offset-4 hover:underline"
          >
            Shop products
          </Link>
          <Link
            href="/contact"
            className="font-medium text-harvest underline-offset-4 hover:underline"
          >
            Contact us
          </Link>
          <a
            href="tel:+256774201233"
            className="font-medium text-paper underline-offset-4 hover:underline"
          >
            0774 201 233
          </a>
        </div>
      </div>
    </section>
  );
}
