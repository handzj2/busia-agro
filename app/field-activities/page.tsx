import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ActivityCard from "@/components/ActivityCard";
import { fieldActivities } from "@/content/activities";
import { company } from "@/content/company";

export const metadata = {
  title: `Field Activities | ${company.name}`,
  description: `Field support, training and on-ground farmer activities by ${company.name} in Bududa, Manafwa, Busia and surrounding districts.`,
  alternates: { canonical: "/field-activities" }
};

export default function FieldActivitiesPage() {
  const sorted = [...fieldActivities].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero — merged field + inputs training image */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative mx-auto aspect-[16/9] w-full max-w-6xl md:aspect-[21/9]">
          <Image
            src="/images/activities/field-activities-hero.jpg"
            alt="Field training in Bududa and inputs training in Namisindwa — Busia Farmers Supplies on the ground"
            fill
            priority
            quality={90}
            className="hero-live object-cover object-center"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pt-16 md:pb-10">
            <p className="text-sm font-medium uppercase tracking-wide text-harvest">
              On the ground
            </p>
            <h1 className="mt-2 max-w-2xl font-serif text-3xl text-paper md:text-4xl lg:text-5xl">
              Field Activities
            </h1>
            <p className="mt-3 max-w-xl text-sm text-paper/90 md:text-base">
              Trainings, demonstrations and distribution work with farmers across
              Bududa, Namisindwa, Manafwa, Busia and surrounding districts.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          eyebrow="Records"
          title="Recent field work"
          description="A running record of support visits and training sessions carried out in the communities we serve."
        />

        <div className="mt-10 divide-y divide-stone/20">
          {sorted.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </div>
    </>
  );
}
