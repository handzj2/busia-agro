import Link from "next/link";
import { company } from "@/content/company";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/field-activities", label: "Field Activities" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-serif text-lg text-paper">{company.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
            {company.tagline}
          </p>
        </div>
        <div className="text-sm">
          <p className="text-paper">Quick links</p>
          <ul className="mt-3 space-y-2 text-paper/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-harvest">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-paper">Contact</p>
          <ul className="mt-3 space-y-2 text-paper/70">
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li>{company.address}</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-paper">Regions served</p>
          <ul className="mt-3 space-y-2 text-paper/70">
            {company.regionsServed.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
          <p className="mt-6 text-paper">Follow us</p>
          <div className="mt-3 flex gap-4">
            {company.socials.map((s) => (
              <Link key={s.label} href={s.url} className="hover:text-harvest">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10 px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-paper/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved. Built by Handzj Tech Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
