interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "muted";
  className?: string;
}

const variants = {
  default: "bg-field/10 text-field",
  success: "bg-fieldlight/15 text-field",
  warning: "bg-harvest/20 text-ink",
  muted: "bg-stone/10 text-stone"
};

export default function Badge({
  children,
  variant = "default",
  className = ""
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
