import Link from "next/link";
import Image from "next/image";
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
    <article className="reveal group border-b border-stone/20 py-8 transition-colors duration-300 first:pt-0 last:border-b-0 hover:bg-parchment/40">
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
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-parchment"
            >
              {m.type === "image" ? (
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  className="img-alive object-cover"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              ) : (
                <div
                  className="h-full w-full bg-parchment"
                  role="img"
                  aria-label={m.alt}
                />
              )}
            </div>
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
