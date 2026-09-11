import { Service } from "@/lib/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group border-l-2 border-harvest/50 pl-6 transition-all duration-200 ease-out hover:border-harvest hover:pl-8">
      <h3 className="font-serif text-xl text-ink">{service.title}</h3>
      <p className="mt-2 text-sm text-clay">{service.summary}</p>
      <p className="mt-3 text-stone">{service.description}</p>
    </article>
  );
}
