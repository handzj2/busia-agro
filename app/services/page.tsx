import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { services } from "@/content/services";
import { company } from "@/content/company";

export const metadata = { title: `Services | ${company.name}` };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeading
        eyebrow="What we do"
        title="Our Services"
        description="What we offer to farmers, businesses, and partners."
      />

      {/* Alternating 2-col rows */}
      <div className="mt-14 space-y-16">
        {services.map((service, index) => {
          const reverse = index % 2 === 1;
          const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
            `Hello, I'm interested in your service: ${service.title}. Please share more details.`
          )}`;
          const number = String(index + 1).padStart(2, "0");

          return (
            <article
              key={service.slug}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-parchment">
                <div
                  className="h-full w-full bg-parchment"
                  role="img"
                  aria-label={service.imageAlt || service.title}
                />
              </div>

              {/* Content */}
              <div>
                <p className="font-serif text-3xl text-harvest/80">{number}</p>
                <h2 className="mt-2 font-serif text-2xl text-ink md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-stone">{service.description}</p>
                {service.bullets && service.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-stone">
                    {service.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {!service.bullets && service.summary && (
                  <p className="mt-3 text-sm text-clay">{service.summary}</p>
                )}
                <div className="mt-6">
                  <Button
                    href={whatsappHref}
                    variant="whatsapp"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire on WhatsApp →
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA */}
      <section className="mt-16 rounded-sm border border-stone/20 bg-parchment/60 px-6 py-12 text-center">
        <p className="font-serif text-xl text-ink">
          Need a service not listed here?
        </p>
        <p className="mt-2 text-stone">Talk to us — we can often help or point you to the right partner.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Contact Us →
          </Button>
          <Button
            href={`https://wa.me/${company.whatsapp}`}
            variant="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
