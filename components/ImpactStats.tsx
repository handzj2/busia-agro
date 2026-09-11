import { ImpactStat } from "@/lib/types";

// Reusable "numbers build trust fast" strip — used below the hero on the
// homepage and again on the About page. In V1 the numbers are hard-coded
// in content/company.ts (all marked PLACEHOLDER pending client
// confirmation); in V2 the same shape can come from the admin-managed
// company_profile record instead.
export default function ImpactStats({
  stats,
  variant = "light"
}: {
  stats: ImpactStat[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid grid-cols-2 gap-6 border-y py-8 md:grid-cols-4 ${
        isDark ? "border-paper/15" : "border-stone/20"
      }`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className={`font-serif text-3xl md:text-4xl ${isDark ? "text-harvest" : "text-clay"}`}>
            {stat.value}
          </p>
          <p className={`mt-1 text-sm ${isDark ? "text-paper/70" : "text-stone"}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
