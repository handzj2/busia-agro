import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ImpactStats from "@/components/ImpactStats";
import TrustStrip from "@/components/TrustStrip";
import Button from "@/components/Button";
import { MissionIcon, VisionIcon } from "@/components/Icons";
import { company } from "@/content/company";

export const metadata = { title: `About Us | ${company.name}` };

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-stone/15 bg-parchment">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm text-stone">
            <Link href="/" className="hover:text-clay">
              Home
            </Link>{" "}
            › About Us
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            About {company.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone">
            Growing with Uganda&apos;s farmers since {company.foundedYear}.
          </p>
        </div>
      </section>

      <TrustStrip variant="green" />

      {/* Company intro 2-col */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-parchment">
            <div
              className="h-full w-full bg-parchment"
              role="img"
              aria-label="Team and field work"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">Who we are</h2>
            <p className="mt-4 leading-relaxed text-stone">{company.mission}</p>
            <p className="mt-4 leading-relaxed text-stone">
              Based at {company.address}, we serve farmers across{" "}
              {company.regionsServed.join(", ")} with quality inputs and
              straightforward advice.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Get in touch →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission · Vision cards */}
      <section className="bg-parchment/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2">
          <div className="rounded-sm border border-stone/20 bg-paper p-8">
            <MissionIcon className="h-7 w-7 text-harvest" />
            <h2 className="mt-3 font-serif text-xl text-ink">Our Mission</h2>
            <p className="mt-3 text-stone">{company.mission}</p>
          </div>
          <div className="rounded-sm border border-stone/20 bg-paper p-8">
            <VisionIcon className="h-7 w-7 text-harvest" />
            <h2 className="mt-3 font-serif text-xl text-ink">Our Vision</h2>
            <p className="mt-3 text-stone">{company.vision}</p>
          </div>
        </div>
      </section>

      {/* Core values grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Values" title="What we stand for" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.values.map((value) => (
            <div
              key={value}
              className="rounded-sm border border-stone/20 bg-paper p-6 text-center"
            >
              <p className="font-serif text-lg text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact stats */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <ImpactStats stats={company.impactStats} />
      </section>

      {/* Areas of operation */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-serif text-2xl text-ink">Areas of operation</h2>
        <p className="mt-3 max-w-2xl text-stone">
          We currently operate across the following areas, with capacity to
          support project-based work elsewhere in Uganda when needed.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {company.regionsServed.map((r) => (
            <span
              key={r}
              className="rounded-sm border border-field/30 bg-field/5 px-4 py-2 text-sm text-field"
            >
              {r}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-field text-paper">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="font-serif text-2xl">Ready to work with us?</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Talk to Us →
            </Button>
            <Button href="/projects" variant="ghost" className="!text-paper hover:!underline">
              See Our Work →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
