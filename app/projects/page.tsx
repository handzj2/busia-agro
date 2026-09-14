import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { company } from "@/content/company";

export const metadata = { title: `Projects | ${company.name}` };

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Track record"
        title="Projects"
        description="Eastern region field and partner work (Bududa, Manafwa, Busia, Butiru and surrounding areas). Detailed project records will be published here as they are confirmed."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.length === 0 ? (
          <p className="text-stone md:col-span-2">
            No project write-ups published yet. Contact us for current work in the Eastern region.
          </p>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        )}
      </div>
      {/* V2 note: add a "Download Company Profile" button here once that
          PDF exists — funders reading this page are the most likely
          audience for it. */}
    </div>
  );
}
