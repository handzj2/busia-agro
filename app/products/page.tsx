"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { productCategories } from "@/content/products";
import { company } from "@/content/company";

const ALL = "all";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [query, setQuery] = useState("");

  const filters = [
    { slug: ALL, name: "All" },
    ...productCategories.map((c) => ({ slug: c.slug, name: c.name }))
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productCategories
      .filter((c) => activeCategory === ALL || c.slug === activeCategory)
      .map((c) => ({
        ...c,
        products: c.products.filter((p) => {
          if (!q) return true;
          return (
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            (p.shortDescription || "").toLowerCase().includes(q)
          );
        })
      }))
      .filter((c) => c.products.length > 0);
  }, [activeCategory, query]);

  const total = filtered.reduce((n, c) => n + c.products.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeading
        eyebrow="Catalogue"
        title="Our Products"
        description="Quality farm inputs, seeds, and equipment. Check availability and enquire on WhatsApp."
      />

      {/* Search + category filters */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-stone/30 bg-paper px-4 py-2.5 text-sm transition-colors focus:border-harvest focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = activeCategory === f.slug;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => setActiveCategory(f.slug)}
                className={`rounded-sm px-4 py-2 text-sm transition-colors ${
                  active
                    ? "bg-field text-paper"
                    : "border border-stone/30 text-ink hover:border-field hover:text-field"
                }`}
              >
                {f.name}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-sm text-stone">
        {total} product{total === 1 ? "" : "s"}
        {query ? ` matching “${query}”` : ""}
      </p>

      <div className="mt-10 space-y-14">
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-stone">
            No products match your search. Try a different term or category.
          </p>
        ) : (
          filtered.map((category) => (
            <div key={category.slug}>
              <h2 className="font-serif text-2xl text-ink">{category.name}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    categoryName={category.name}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bulk order CTA */}
      <section className="mt-16 rounded-sm bg-field px-6 py-12 text-center text-paper">
        <h2 className="font-serif text-2xl">Looking for bulk supply?</h2>
        <p className="mx-auto mt-3 max-w-lg text-paper/80">
          Contract farming, NGO programmes, or large seasonal orders — talk to
          our team.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="secondary">
            Talk to Our Team →
          </Button>
          <Button
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              "Hello, I'm interested in bulk supply / contract farming."
            )}`}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </Button>
        </div>
      </section>
    </div>
  );
}
