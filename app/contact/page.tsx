import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { MapPinIcon } from "@/components/Icons";
import { company } from "@/content/company";

export const metadata = { title: `Contact | ${company.name}` };

const FORMSPREE_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_ID || "xzebwpva";

function IconWhatsApp({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPhone({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function IconEmail({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

export default function ContactPage() {
  const formAction = `https://formspree.io/f/${FORMSPREE_ID}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact us"
        description="We respond within 24 hours. WhatsApp is usually fastest."
      />

      {/* Contact channels */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-sm border border-stone/20 bg-paper p-6 text-center transition-all hover:border-[#25D366]/50 hover:shadow-md"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-transform group-hover:scale-110">
            <IconWhatsApp className="h-7 w-7" />
          </span>
          <h3 className="mt-4 font-serif text-lg text-ink">WhatsApp</h3>
          <p className="mt-1 text-sm text-stone">Fastest response</p>
          <span className="mt-4 text-sm font-medium text-field group-hover:text-[#25D366]">
            Chat Now →
          </span>
        </a>

        <a
          href={`tel:${company.phone.replace(/\s+/g, "")}`}
          className="group flex flex-col items-center rounded-sm border border-stone/20 bg-paper p-6 text-center transition-all hover:border-harvest/60 hover:shadow-md"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-harvest/15 text-clay transition-transform group-hover:scale-110">
            <IconPhone className="h-7 w-7" />
          </span>
          <h3 className="mt-4 font-serif text-lg text-ink">Call</h3>
          <p className="mt-1 text-sm text-stone">Mon–Fri 8am–5pm</p>
          <span className="mt-4 text-sm font-medium text-field">Call Now →</span>
        </a>

        <a
          href={`mailto:${company.email}`}
          className="group flex flex-col items-center rounded-sm border border-stone/20 bg-paper p-6 text-center transition-all hover:border-field/40 hover:shadow-md"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-field/10 text-field transition-transform group-hover:scale-110">
            <IconEmail className="h-7 w-7" />
          </span>
          <h3 className="mt-4 font-serif text-lg text-ink">Email</h3>
          <p className="mt-1 text-sm text-stone">Response in 24hrs</p>
          <span className="mt-4 text-sm font-medium text-field">Send Email →</span>
        </a>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl text-ink">Send us a message</h2>
          <form className="mt-6 space-y-5" action={formAction} method="POST">
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
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl text-ink">Visit us</h2>
            <p className="mt-3 flex items-start gap-2 text-stone">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <span>{company.address}</span>
            </p>
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
              {(
                company.hours || [
                  { day: "Mon–Fri", hours: "8am–5pm" },
                  { day: "Sat", hours: "9am–1pm" },
                  { day: "Sun", hours: "Closed" }
                ]
              ).map((h) => (
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
