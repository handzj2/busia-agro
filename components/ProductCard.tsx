import Link from "next/link";
import { Product } from "@/lib/types";
import { company } from "@/content/company";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

function availabilityVariant(
  a: Product["availability"]
): "success" | "warning" | "muted" {
  const v = a.toLowerCase();
  if (v.includes("stock") || v === "available") return "success";
  if (v.includes("season")) return "warning";
  return "muted";
}

function availabilityLabel(a: Product["availability"]) {
  const v = a.toLowerCase();
  if (v.includes("stock") || v === "available") return "Available";
  if (v.includes("season")) return "Seasonal";
  if (v.includes("request") || v.includes("out")) return "On request";
  return a;
}

export default function ProductCard({
  product,
  categoryName
}: {
  product: Product;
  categoryName?: string;
}) {
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    `Hello, I'm interested in ${product.name}. Please share availability and pricing.`
  )}`;

  return (
    <article className="card-hover group flex flex-col border border-stone/20 bg-paper hover:border-harvest/50">
      <Link
        href={`/products/${product.slug}`}
        className="block aspect-[4/3] overflow-hidden bg-parchment"
      >
        <div
          className="h-full w-full bg-parchment transition-transform duration-300 ease-out group-hover:scale-105"
          role="img"
          aria-label={product.imageAlt || product.name}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        {categoryName && (
          <p className="text-xs uppercase tracking-wide text-stone">{categoryName}</p>
        )}
        <div className="mt-1 flex items-start justify-between gap-3">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-lg text-ink hover:text-clay">
              {product.name}
            </h3>
          </Link>
          <Badge variant={availabilityVariant(product.availability)}>
            {availabilityLabel(product.availability)}
          </Badge>
        </div>
        <p className="mt-2 flex-1 text-sm text-stone">
          {product.shortDescription || product.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button
            href={whatsappHref}
            variant="whatsapp"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Enquire
          </Button>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
