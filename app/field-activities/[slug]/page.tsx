import Link from "next/link";
import { notFound } from "next/navigation";
import { fieldActivities } from "@/content/activities";
import { company } from "@/content/company";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";

const sorted = [...fieldActivities].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function formatShortDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-UG", {
    day: "numeric",
    month: "short",
    year: "2-digit"
  });
}

export function generateStaticParams() {
  return fieldActivities.map((activity) => ({ slug: activity.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const activity = fieldActivities.find((a) => a.slug === params.slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | ${company.name}`,
    description: activity.excerpt || activity.description.slice(0, 160)
  };
}

export default function FieldActivityDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const index = sorted.findIndex((a) => a.slug === params.slug);
  if (index === -1) notFound();
  const activity = sorted[index];
  const prev = sorted[index - 1];
  const next = sorted[index + 1];

  const resultsList = Array.isArray(activity.results)
    ? activity.results
    : activity.results
    ? [activity.results]
    : [];

  const partnersList = (activity.partners || []).map((p) =>
    typeof p === "string" ? { name: p } : p
  );

  return (
    <>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Field Activities", href: "/field-activities" },
            { label: activity.title }
          ]}
        />
      </div>

      {/* Hero image + overlay title */}
      <section className="relative mt-6">
        <div className="aspect-[21/9] w-full overflow-hidden bg-parchment md:aspect-[3/1]">
          {/* Placeholder until real coverImage is supplied */}
          <div className="flex h-full w-full items-end bg-gradient-to-t from-ink/70 via-ink/20 to-transparent">
            <div className="mx-auto w-full max-w-6xl px-6 pb-8 pt-16 text-paper">
              <span className="inline-block rounded-sm bg-harvest/90 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-ink">
                {activity.activityType}
              </span>
              <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
                {activity.title}
              </h1>
              <p className="mt-3 flex flex-wrap gap-4 text-sm text-paper/85">
                <span>📅 {formatDate(activity.date)}</span>
                <span>📍 {activity.location}</span>
                {activity.participants != null && (
                  <span>👥 {activity.participants} participants</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts bar */}
      <section className="border-b border-stone/15 bg-parchment">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-5 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Date</p>
            <p className="mt-0.5 font-medium text-ink">{formatShortDate(activity.date)}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Location</p>
            <p className="mt-0.5 font-medium text-ink">{activity.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Type</p>
            <p className="mt-0.5 font-medium text-ink">{activity.activityType}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">People</p>
            <p className="mt-0.5 font-medium text-ink">
              {activity.participants ?? "—"}
            </p>
          </div>
        </div>
      </section>

      {/* Main content 70/30 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-10">
          {/* Content column */}
          <article className="lg:col-span-7">
            <h2 className="font-serif text-xl text-ink">About this activity</h2>
            <p className="mt-4 leading-relaxed text-stone">{activity.description}</p>

            {activity.objectives && activity.objectives.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-xl text-ink">Objectives</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-stone">
                  {activity.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            )}

            {(resultsList.length > 0 || (activity.metrics && activity.metrics.length > 0)) && (
              <div className="mt-10">
                <h2 className="font-serif text-xl text-ink">Results</h2>
                {activity.metrics && activity.metrics.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {activity.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-sm border border-stone/20 bg-paper px-4 py-3 text-center"
                      >
                        <p className="font-serif text-2xl text-field">{m.value}</p>
                        <p className="mt-1 text-xs text-stone">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                {resultsList.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-stone">
                    {resultsList.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:col-span-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-stone">
                Share
              </h3>
              <div className="mt-3 flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${activity.title} — ${company.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-field underline-offset-2 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {partnersList.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-stone">
                  Partners
                </h3>
                <ul className="mt-3 space-y-2">
                  {partnersList.map((p) => (
                    <li key={p.name} className="text-sm text-ink">
                      {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-stone">
                Related
              </h3>
              <ul className="mt-3 space-y-2">
                {sorted
                  .filter((a) => a.slug !== activity.slug)
                  .slice(0, 3)
                  .map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/field-activities/${a.slug}`}
                        className="text-sm text-field underline-offset-2 hover:underline"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {activity.media && activity.media.length > 0 && (
        <section className="border-t border-stone/15 bg-parchment/50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="font-serif text-xl text-ink">Photo gallery</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {activity.media.map((m) => (
                <div
                  key={m.src}
                  className="aspect-[4/3] overflow-hidden rounded-sm bg-parchment"
                  role="img"
                  aria-label={m.alt}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <section className="border-t border-stone/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link
              href={`/field-activities/${prev.slug}`}
              className="text-sm text-field hover:underline"
            >
              ← Previous: {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/field-activities/${next.slug}`}
              className="text-sm text-field hover:underline sm:text-right"
            >
              Next: {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-field text-paper">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <p className="font-serif text-xl">Interested in similar training or field work?</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Talk to Us →
            </Button>
            <Button
              href={`https://wa.me/${company.whatsapp}`}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
