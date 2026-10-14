import { Service } from "@/lib/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-accent group border-l-2 border-harvest/50 pl-6 transition-all duration-300 ease-out hover:border-harvest hover:pl-8">
      <h3 className="font-serif text-xl text-ink transition-colors duration-200 group-hover:text-clay">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-clay transition-colors duration-200">
        {service.summary}
      </p>
      <p className="mt-3 text-stone transition-colors duration-200 group-hover:text-ink/80">
        {service.description}
      </p>
    </article>
  );
}
