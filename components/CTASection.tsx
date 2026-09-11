import Button from "@/components/Button";
import { company } from "@/content/company";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
  variant?: "green" | "dark" | "light";
}

export default function CTASection({
  title,
  description,
  primaryLabel = "Talk to Us →",
  primaryHref = "/contact",
  showWhatsApp = true,
  variant = "green"
}: CTASectionProps) {
  const bg =
    variant === "green"
      ? "bg-field text-paper"
      : variant === "dark"
      ? "bg-ink text-paper"
      : "bg-parchment text-ink";

  return (
    <section className={bg}>
      <div className="mx-auto max-w-6xl px-6 py-14 text-center">
        <p className="font-serif text-2xl md:text-3xl">{title}</p>
        {description && (
          <p className="mx-auto mt-3 max-w-xl opacity-80">{description}</p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            href={primaryHref}
            variant={variant === "light" ? "primary" : "secondary"}
          >
            {primaryLabel}
          </Button>
          {showWhatsApp && (
            <Button
              href={`https://wa.me/${company.whatsapp}`}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
