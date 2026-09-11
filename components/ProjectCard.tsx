import Link from "next/link";
import { Project } from "@/lib/types";

function formatRange(start: string, end?: string) {
  const s = new Date(start).toLocaleDateString("en-UG", { year: "numeric", month: "short" });
  if (!end) return `${s} — ongoing`;
  const e = new Date(end).toLocaleDateString("en-UG", { year: "numeric", month: "short" });
  return `${s} — ${e}`;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover border border-stone/20 bg-paper p-7 hover:border-harvest/50">
      <div className="record-rule border-t-0 pt-0">
        <span className="text-sm text-stone">{formatRange(project.startDate, project.endDate)}</span>
        <span className="ml-auto text-sm text-clay">{project.location}</span>
      </div>
      <Link href={`/projects/${project.slug}`}>
        <h3 className="mt-4 font-serif text-2xl text-ink hover:text-clay">{project.title || project.name}</h3>
      </Link>
      <p className="mt-1 text-sm text-fieldlight">Partner: {project.client || project.partner}</p>
      <p className="mt-3 text-stone">{project.excerpt || project.summary || project.overview}</p>
      <div className="mt-4">
        <p className="text-sm text-ink">Scope of work</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-stone">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {project.results && (
        <p className="mt-4 text-sm text-fieldlight">
          <span className="text-ink">Results: </span>
          {Array.isArray(project.results) ? project.results.join(" ") : project.results}
        </p>
      )}
      <Link
        href={`/projects/${project.slug}`}
        className="mt-4 inline-block text-sm text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
      >
        View full project →
      </Link>
    </article>
  );
}
