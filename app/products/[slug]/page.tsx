import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories } from "@/content/products";
import { company } from "@/content/company";

const allProducts = productCategories.flatMap((category) =>
  category.products.map((product) => ({ ...product, category }))
);

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) return {};
  return { title: `${product.name} | ${company.name}` };
}

// Product detail template — the page a customer lands on from a WhatsApp
// share or a search result, so it carries the full pitch: what it is, why
// it fits, and a direct enquiry path. Kept separate from the compact
// ProductCard used in list/grid views.
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = product.category.products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hello, I'm interested in ${product.name}. Please share more details.`
  )}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/products"
        className="text-sm text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
      >
        ← Back to Products
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-parchment" />
        <div>
          <p className="text-sm text-clay">{product.category.name}</p>
          <h1 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-stone">{product.description}</p>
          <p className="mt-4 text-sm">
            <span className="text-ink">Availability: </span>
            <span className="text-fieldlight">{product.availability}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-sm bg-harvest px-6 py-3 text-sm font-medium text-ink transition-transform duration-150 hover:scale-[1.02]"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="inline-flex min-h-[44px] items-center rounded-sm border border-ink px-6 py-3 text-sm text-ink transition-all duration-200 hover:bg-ink hover:text-paper"
            >
              Call to check stock
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-stone/20 pt-10">
          <h2 className="font-serif text-xl text-ink">More in {product.category.name}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="card-hover block border border-stone/20 bg-paper p-4 hover:border-harvest/50"
              >
                <div className="aspect-[4/3] overflow-hidden bg-parchment" />
                <p className="mt-3 font-serif text-ink">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
