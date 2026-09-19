import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Temporarily Unavailable",
  description: "The website is temporarily unavailable. Please contact us for assistance.",
  robots: {
    index: false,
    follow: false
  }
};

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <div className="mx-auto max-w-md">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/logo.png"
            alt={company.name}
            width={160}
            height={80}
            className="h-auto w-40 object-contain"
            priority
          />
        </div>

        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {company.name}
        </h1>

        <p className="mt-4 text-lg text-stone">
          Website temporarily unavailable.
        </p>

        <p className="mt-2 text-base text-stone/80">
          Please contact us for assistance.
        </p>

        <div className="mt-10 space-y-3 text-sm text-ink">
          {company.phone && (
            <p>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="font-medium text-field hover:text-harvest transition-colors"
              >
                {company.phone}
              </a>
            </p>
          )}
          {company.email && (
            <p>
              <a
                href={`mailto:${company.email}`}
                className="font-medium text-field hover:text-harvest transition-colors"
              >
                {company.email}
              </a>
            </p>
          )}
          {company.whatsapp && (
            <p>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-field hover:text-harvest transition-colors"
              >
                WhatsApp
              </a>
            </p>
          )}
        </div>

        <p className="mt-14 text-xs text-stone/60">
          We apologise for any inconvenience.
        </p>
      </div>
    </div>
  );
}
