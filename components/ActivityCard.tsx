import Link from "next/link";
import { FieldActivity } from "@/lib/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function ActivityCard({ activity }: { activity: FieldActivity }) {
  return (
    <article className="border-b border-stone/20 py-8 first:pt-0 last:border-b-0">
      <div className="record-rule border-t-0 pt-0">
        <span className="font-serif text-lg text-ink">{formatDate(activity.date)}</span>
        <span className="text-sm text-stone">{activity.location}</span>
        <span className="ml-auto text-sm text-clay">{activity.activityType}</span>
      </div>
      <Link href={`/field-activities/${activity.slug}`}>
        <h3 className="mt-4 font-serif text-2xl text-ink hover:text-clay">{activity.title}</h3>
      </Link>
      <p className="mt-2 max-w-2xl text-stone">{activity.description}</p>
      {activity.results && (
        <p className="mt-3 text-sm text-fieldlight">
          <span className="text-ink">Results: </span>
          {Array.isArray(activity.results) ? activity.results.join(" ") : activity.results}
        </p>
      )}
      {activity.media.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
          {activity.media.slice(0, 3).map((m) => (
            <div
              key={m.src}
              className="aspect-[4/3] overflow-hidden rounded-sm bg-parchment transition-transform duration-300 ease-out hover:scale-[1.03]"
              role="img"
              aria-label={m.alt}
              // NOTE: swap this placeholder block for a real next/image once
              // client photos are supplied — see /public/images/README.md
            />
          ))}
        </div>
      )}
      <Link
        href={`/field-activities/${activity.slug}`}
        className="mt-4 inline-block text-sm text-clay underline decoration-clay/40 underline-offset-4 hover:decoration-clay"
      >
        Read full record →
      </Link>
    </article>
  );
}
