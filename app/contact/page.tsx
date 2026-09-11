import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { company } from "@/content/company";

export const metadata = { title: `Contact | ${company.name}` };

// Formspree: replace YOUR_FORM_ID with the ID from https://formspree.io
// Or set NEXT_PUBLIC_FORMSPREE_ID in .env.local
const FORMSPREE_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

export default function ContactPage() {
  const formAction = `https://formspree.io/f/${FORMSPREE_ID}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact us"
        description="We respond within 24 hours. WhatsApp is usually fastest."
      />

      {/* Contact channels — 3 primary actions */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-sm border border-stone/20 bg-paper p-6 text-center transition-all hover:border-harvest/60 hover:shadow-md"
        >
          <span className="text-2xl" aria-hidden>
            💬
          </span>
          <h3 className="mt-3 font-serif text-lg text-ink">WhatsApp</h3>
          <p className="mt-1 text-sm text-stone">Fastest response</p>
          <span className="mt-4 text-sm font-medium text-field">Chat Now →</span>
        </a>
        <a
          href={`tel:${company.phone.replace(/\s+/g, "")}`}
          className="flex flex-col items-center rounded-sm border border-stone/20 bg-paper p-6 text-center transition-all hover:border-harvest/60 hover:shadow-md"
        >
          <span className="text-2xl" aria-hidden>
            📞
          </span>
          <h3 className="mt-3 font-serif text-lg text-ink">Call</h3>
          <p className="mt-1 text-sm text-stone">Mon–Fri 8am–5pm</p>
          <span className="mt-4 text-sm font-medium text-field">Call Now →</span>
        </a>
        <a
          href={`mailto:${company.email}`}
          className="flex flex-col items-center rounded-sm border border-stone/20 bg-paper p-6 text-center transition-all hover:border-harvest/60 hover:shadow-md"
        >
          <span className="text-2xl" aria-hidden>
            ✉️
          </span>
          <h3 className="mt-3 font-serif text-lg text-ink">Email</h3>
          <p className="mt-1 text-sm text-stone">Response in 24hrs</p>
          <span className="mt-4 text-sm font-medium text-field">Send Email →</span>
        </a>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <div>
          <h2 className="font-serif text-xl text-ink">Send us a message</h2>
          <form
            className="mt-6 space-y-5"
            action={formAction}
            method="POST"
          >
            {/* Formspree honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_subject" value={`New enquiry — ${company.name}`} />

            <div>
              <label htmlFor="name" className="text-sm text-ink">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full border border-stone/30 bg-paper px-4 py-3 text-sm transition-colors focus:border-harvest focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-ink">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full border border-stone/30 bg-paper px-4 py-3 text-sm transition-colors focus:border-harvest focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm text-ink">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full border border-stone/30 bg-paper px-4 py-3 text-sm transition-colors focus:border-harvest focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm text-ink">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="mt-1 w-full border border-stone/30 bg-paper px-4 py-3 text-sm transition-colors focus:border-harvest focus:outline-none"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="Product enquiry">Product enquiry</option>
                <option value="Bulk / contract supply">Bulk / contract supply</option>
                <option value="Training request">Training request</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-ink">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full border border-stone/30 bg-paper px-4 py-3 text-sm transition-colors focus:border-harvest focus:outline-none"
              />
            </div>
            <Button type="submit" variant="primary">
              Send Message →
            </Button>
            {FORMSPREE_ID === "YOUR_FORM_ID" && (
              <p className="text-xs text-clay">
                Form is not yet connected. Set{" "}
                <code className="rounded bg-parchment px-1">NEXT_PUBLIC_FORMSPREE_ID</code> in
                .env.local (or replace YOUR_FORM_ID in the page) before launch.
              </p>
            )}
          </form>
        </div>

        {/* Visit + hours + social */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl text-ink">Visit us</h2>
            <p className="mt-3 text-stone">📍 {company.address}</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-sm border border-stone/20">
              <iframe
                src={company.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                title="Location map"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-stone">
              Opening hours
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-ink">
              {(company.hours || [
                { day: "Mon–Fri", hours: "8am–5pm" },
                { day: "Sat", hours: "9am–1pm" },
                { day: "Sun", hours: "Closed" }
              ]).map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-stone">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {company.socials.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone">
                Follow us
              </h3>
              <div className="mt-3 flex flex-wrap gap-4">
                {company.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-field underline-offset-2 hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
