import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ActivityCard from "@/components/ActivityCard";
import ProjectCard from "@/components/ProjectCard";
import LeafIcon from "@/components/LeafIcon";
import ImpactStats from "@/components/ImpactStats";
import TrustStrip from "@/components/TrustStrip";
import Button from "@/components/Button";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { fieldActivities } from "@/content/activities";
import { projects } from "@/content/projects";
import { productCategories } from "@/content/products";

export default function HomePage() {
  const featuredActivities = fieldActivities.slice(0, 2);
  const featuredProjects = projects.slice(0, 1);

  return (
    <>
      {/* HERO — asymmetric split: statement on the left, a running field
          record on the right, so the first thing a visitor sees is proof
          of activity rather than a stock statement + gradient. A faint
          furrow texture and leaf accent ground it visually as "agro"
          without leaning on stock photography. */}
      <section className="furrow-texture relative overflow-hidden bg-parchment">
        <LeafIcon className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 text-field/10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-3">
            <p className="hero-in text-sm text-clay">
              Serving {company.regionsServed.slice(0, 2).join(" and ")} since{" "}
              {company.foundedYear}
            </p>
            <h1 className="hero-in-delay-1 mt-4 max-w-lg font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
              {company.tagline}
            </h1>
            <p className="hero-in-delay-2 mt-6 max-w-md text-stone">{company.mission}</p>
            {/* Split by intent — customers and funders/partners are
                looking for different things from the first click, so the
                hero routes each straight to it instead of one generic CTA. */}
            <div className="hero-in-delay-3 mt-8 flex flex-wrap gap-4">
              <Button href="/products" variant="primary">
                For Buyers — Browse Products
              </Button>
              <Button href="/projects" variant="secondary">
                For Partners — See Our Work
              </Button>
            </div>
          </div>
          <div className="hero-in-delay-2 relative md:col-span-2">
            {/* Aligned product shelf — 6 featured items, clear grid, subtle motion */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {(() => {
                const withImage = productCategories.flatMap((c) =>
                  c.products.filter((p) => p.image)
                );
                const preferred = [
                  "yaramila-winner-50kg",
                  "yaramila-java-50kg",
                  "yara-microp-topdressing-chapa-meli-50kg",
                  "weed-master-glyphosate-50sc-herbicide",
                  "advanta-adv2309w-hybrid-maize-seed",
                  "syngenta-galil-300sc-insecticide"
                ];
                const bySlug = Object.fromEntries(withImage.map((p) => [p.slug, p]));
                const showcase = preferred
                  .map((s) => bySlug[s])
                  .filter(Boolean)
                  .slice(0, 6);
                return showcase.map((product, i) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group block"
                    title={product.name}
                  >
                    <div className="hover-lift overflow-hidden rounded-sm border border-stone/20 bg-paper p-2 shadow-sm group-hover:border-harvest/50">
                      <span
                        className={`hero-bag hero-bag-${(i % 6) + 1} block`}
                      >
                        <Image
                          src={product.image}
                          alt={product.imageAlt || product.name}
                          width={160}
                          height={200}
                          className="hover-zoom mx-auto h-28 w-auto object-contain sm:h-32 md:h-36"
                          priority={i < 3}
                        />
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-center text-[11px] leading-tight text-stone transition-colors duration-200 group-hover:text-ink sm:text-xs">
                      {product.name}
                    </p>
                  </Link>
                ));
              })()}
            </div>
            <p className="mt-4 text-center text-sm text-stone">
              <Link
                href="/products"
                className="font-medium text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
              >
                Browse all fertilizers, seeds & chemicals →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* BRAND BANNER — sharpened client artwork, full visual weight */}
      <section className="bg-field">
        <div className="mx-auto max-w-6xl px-0 sm:px-4 md:px-6">
          <div className="hero-banner banner-hover overflow-hidden sm:rounded-sm sm:my-6 md:my-8 shadow-lg ring-1 ring-black/10">
            <Image
              src="/images/brand/product-range-banner.jpg"
              alt="Busia Farmers Supplies Ltd — fertilizers, chemicals, quality seeds, consultation, field visits, contract farming and seedling raising. Contact 0774201233"
              width={1430}
              height={934}
              className="h-auto w-full object-cover"
              priority
              quality={90}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-field px-4 pb-6 text-center text-sm text-paper/90">
            <span>Fertilizers · Chemicals · Seeds · Advisory</span>
            <Link href="/products" className="font-medium text-harvest underline-offset-4 hover:underline">
              Shop products
            </Link>
            <Link href="/contact" className="font-medium text-harvest underline-offset-4 hover:underline">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip variant="green" />

      {/* CREDIBILITY STRIP — numbers, right after the hero, before asking
          for any more attention. See content/company.ts for the source
          data (marked PLACEHOLDER pending client confirmation). */}
      <section className="mx-auto max-w-6xl px-6">
        <ImpactStats stats={company.impactStats} />
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Services built around the farming season"
          description="From training to input supply to full project implementation for partners."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* FIELD ACTIVITIES PREVIEW */}
      <section className="furrow-texture-dark bg-field text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="On the ground"
              title="Recent field activities"
            />
            <Link
              href="/field-activities"
              className="text-sm text-harvest underline decoration-harvest/40 underline-offset-4 hover:decoration-harvest"
            >
              View all activities
            </Link>
          </div>
          <div className="mt-10 divide-y divide-paper/15">
            {featuredActivities.map((activity) => (
              <div key={activity.slug} className="text-paper [&_*]:text-paper/90 [&_h3]:text-paper">
                <ActivityCard activity={activity} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Track record"
          title="Featured project"
          description="Partner and field work across the Eastern region — details added as records are confirmed."
        />
        <div className="mt-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
        >
          See all projects
        </Link>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="furrow-texture-dark relative overflow-hidden bg-ink text-paper">
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Looking to fund or partner on a field project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            We work with NGOs, government programmes, and private partners to
            deliver agricultural projects on the ground in the Eastern
            Region.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" className="!bg-harvest !text-ink hover:!bg-harvest/90">
              Start a conversation
            </Button>
            <Button href="/contact" variant="secondary" className="!border-paper !text-paper hover:!bg-paper hover:!text-ink">
              Download profile
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
