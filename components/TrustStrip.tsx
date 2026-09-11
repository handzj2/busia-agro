import { company } from "@/content/company";

interface TrustStripProps {
  items?: string[];
  variant?: "light" | "dark" | "green";
  className?: string;
}

export default function TrustStrip({
  items,
  variant = "green",
  className = ""
}: TrustStripProps) {
  const signals = items ?? company.trustSignals;

  const bg =
    variant === "green"
      ? "bg-field text-paper"
      : variant === "dark"
      ? "bg-ink text-paper"
      : "bg-parchment text-ink";

  return (
    <section className={`${bg} ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 text-sm">
        {signals.map((label) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-harvest" aria-hidden>
              ✓
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
