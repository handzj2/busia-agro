"use client";

import { useState } from "react";
import Link from "next/link";
import { company } from "@/content/company";
import LeafIcon from "@/components/LeafIcon";
import ThemeToggle from "@/components/ThemeToggle";

// Grouped so the top-level nav stays at 5 items on desktop and doesn't
// force a cramped hamburger-only experience on mobile. "What We Do" and
// "Our Work" are dropdowns on desktop (pure CSS, no JS needed) and flat,
// expanded sections in the mobile drawer.
interface NavGroup {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
}

const navGroups: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "What We Do",
    children: [
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" }
    ]
  },
  {
    label: "Our Work",
    children: [
      { href: "/field-activities", label: "Field Activities" },
      { href: "/projects", label: "Projects" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-field text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl tracking-tight">
          <LeafIcon className="h-6 w-6 text-harvest" />
          {company.name}
        </Link>

        {/* Desktop nav — dropdowns are pure CSS (group-hover/focus-within),
            so no JS is needed except for the mobile drawer below. */}
        <nav className="hidden gap-7 text-sm md:flex">
          {navGroups.map((group) =>
            group.children ? (
              <div key={group.label} className="group relative">
                <button
                  type="button"
                  className="nav-link flex items-center gap-1"
                  aria-haspopup="true"
                >
                  {group.label}
                  <span aria-hidden="true" className="text-xs">
                    ▾
                  </span>
                </button>
                <div
                  className="invisible absolute left-0 top-full min-w-[10rem] translate-y-1 rounded-sm bg-ink py-2 opacity-0 shadow-lg shadow-black/20 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                >
                  {group.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-paper/85 hover:bg-field hover:text-harvest"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={group.href} href={group.href ?? "/"} className="nav-link">
                {group.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-sm border border-harvest px-4 py-2 text-sm text-harvest transition-all duration-200 hover:bg-harvest hover:text-ink hover:shadow-md md:inline-block"
          >
            Talk to us
          </Link>

          {/* Mobile menu toggle — 44px+ tap target */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-sm text-paper md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer — slides in from the right, flat link list, one
          consistent tap target size throughout (min 44px). */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-ink/60"
          />
          <div className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-field text-paper shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-serif text-lg">{company.name}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="flex h-11 w-11 items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col overflow-y-auto px-2 py-2 text-base">
              {navGroups.flatMap((group) =>
                group.children
                  ? group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDrawerOpen(false)}
                        className="flex min-h-[44px] items-center border-b border-paper/10 px-4 py-3"
                      >
                        {child.label}
                      </Link>
                    ))
                  : [
                      <Link
                        key={group.href}
                        href={group.href ?? "/"}
                        onClick={() => setDrawerOpen(false)}
                        className="flex min-h-[44px] items-center border-b border-paper/10 px-4 py-3"
                      >
                        {group.label}
                      </Link>
                    ]
              )}
            </nav>
            <div className="p-4">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center rounded-sm bg-harvest px-6 py-3 text-sm font-medium text-ink"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}