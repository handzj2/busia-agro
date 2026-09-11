// A simple, literal leaf-sprig mark — used as a brand accent next to the
// company name and as a decorative element on the hero. Deliberately plain
// (not a generic abstract logo mark) so it reads immediately as "agro"
// rather than as generic tech-startup iconography.
export default function LeafIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 20c7-1 11-5 12-15-9 1-13 6-12 15Z"
        fill="currentColor"
      />
      <path
        d="M4.5 19.5c3-3 6-6.5 10.5-13"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
