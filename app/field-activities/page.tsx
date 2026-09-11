import SectionHeading from "@/components/SectionHeading";
import ActivityCard from "@/components/ActivityCard";
import { fieldActivities } from "@/content/activities";
import { company } from "@/content/company";

export const metadata = { title: `Field Activities | ${company.name}` };

export default function FieldActivitiesPage() {
  const sorted = [...fieldActivities].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="On the ground"
        title="Field Activities"
        description="A running record of trainings, demonstrations, and distribution work carried out in the communities we serve."
      />
      <div className="mt-12 divide-y divide-stone/20">
        {sorted.map((activity) => (
          <ActivityCard key={activity.slug} activity={activity} />
        ))}
      </div>
      {/* V2 note: once this list is admin-managed, add pagination and a
          location/activity-type filter here — the data shape already
          supports both. */}
    </div>
  );
}
