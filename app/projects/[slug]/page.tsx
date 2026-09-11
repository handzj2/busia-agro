import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { company } from "@/content/company";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";

function formatRange(start: string, end?: string) {
  const s = new Date(start).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "short"
  });
  if (!end) return `${s} — ongoing`;
  const e = new Date(end).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "short"
  });
  return `${s} — ${e}`;
}

function projectTitle(p: (typeof projects)[0]) {
  return p.title || p.name || "Project";
}

function projectClient(p: (typeof projects)[0]) {
  return p.client || p.partner || "—";
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const title = projectTitle(project);
  return {
    title: `${title} | ${company.name}`,
    description: project.excerpt || project.summary || project.overview
  };
}

export default function ProjectDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const title = projectTitle(project);
  const client = projectClient(project);
  const status =
    project.status ||
    (project.endDate ? "completed" : "ongoing");
  const statusLabel =
    status === "completed"
      ? "Completed"
      : status === "ongoing"
      ? "Ongoing"
      : "Upcoming";

  const resultsList = Array.isArray(project.results)
    ? project.results
    : project.results
    ? [project.results]
    : [];

  const similar = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: title }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative mt-6">
        <div className="aspect-[21/9] w-full overflow-hidden bg-parchment md:aspect-[3/1]">
          <div className="flex h-full w-full items-end bg-gradient-to-t from-ink/70 via-ink/20 to-transparent">
            <div className="mx-auto w-full max-w-6xl px-6 pb-8 pt-16 text-paper">
              <span className="inline-block rounded-sm bg-harvest/90 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-ink">
                {statusLabel}
                {project.endDate
                  ? ` · ${new Date(project.endDate).getFullYear()}`
                  : ""}
              </span>
              <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Facts bar */}
      <section className="border-b border-stone/15 bg-parchment">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-5 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Client</p>
            <p className="mt-0.5 font-medium text-ink">{client}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Duration</p>
            <p className="mt-0.5 font-medium text-ink">
              {project.duration || formatRange(project.startDate, project.endDate)}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Location</p>
            <p className="mt-0.5 font-medium text-ink">{project.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-stone">Status</p>
            <p className="mt-0.5 font-medium text-ink">{statusLabel}</p>
          </div>
        </div>
      </section>

      {/* Main 70/30 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-10">
          <article className="lg:col-span-7">
            <h2 className="font-serif text-xl text-ink">Overview</h2>
            <p className="mt-4 leading-relaxed text-stone">
              {project.overview || project.summary}
            </p>

            {project.scope && project.scope.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-xl text-ink">Scope of work</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-stone">
                  {project.scope.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.activities && project.activities.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-xl text-ink">Activities undertaken</h2>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-stone">
                  {project.activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ol>
              </div>
            )}

            {(resultsList.length > 0 ||
              (project.metrics && project.metrics.length > 0)) && (
              <div className="mt-10">
                <h2 className="font-serif text-xl text-ink">Results & impact</h2>
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {project.metrics.map((m) => (
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

          <aside className="space-y-8 lg:col-span-3">
            {project.documents && project.documents.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-stone">
                  Documents
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.documents.map((d) => (
                    <li key={d.url}>
                      <a
                        href={d.url}
                        className="text-sm text-field underline-offset-2 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-stone">
                Share
              </h3>
              <div className="mt-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${title} — ${company.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-field underline-offset-2 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {similar.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-stone">
                  Similar projects
                </h3>
                <ul className="mt-3 space-y-2">
                  {similar.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="text-sm text-field underline-offset-2 hover:underline"
                      >
                        {projectTitle(p)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Gallery */}
      {project.media && project.media.length > 0 && (
        <section className="border-t border-stone/15 bg-parchment/50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="font-serif text-xl text-ink">Media gallery</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {project.media.map((m) => (
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

      {/* CTA */}
      <section className="bg-field text-paper">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <p className="font-serif text-xl">Similar project needed?</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Discuss a Project →
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
