import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MaintenanceScreen from "@/components/MaintenanceScreen";
import { company } from "@/content/company";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  weight: ["400", "500", "600"]
});

// Safe metadataBase — empty/invalid NEXT_PUBLIC_SITE_URL must not break the build
function getMetadataBase(): URL {
  const fallback = "https://busia-farmers-supplies.vercel.app";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || "").trim();
  if (!raw) return new URL(fallback);
  try {
    return new URL(raw);
  } catch {
    return new URL(fallback);
  }
}

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`
  },
  description: company.mission,
  metadataBase: getMetadataBase(),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

/**
 * ─────────────────────────────────────────────────────────────
 * MAINTENANCE MODE (SITE_STATUS)
 * ─────────────────────────────────────────────────────────────
 * Added: 2026-09-19 — controlled site suspension for client payment /
 * service hold. Does NOT delete the project, domain, GitHub code,
 * or deployment history.
 *
 * Toggle in Vercel → Project → Settings → Environment Variables:
 *   SITE_STATUS = OFF  → show offline / maintenance screen
 *   SITE_STATUS = ON   → normal website (default if unset)
 *
 * After changing the variable, Redeploy production.
 * See DEPLOY.md → "Site suspension / maintenance mode".
 * ─────────────────────────────────────────────────────────────
 */
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // [MAINTENANCE] Read the suspension switch. Default ON so a missing
  // env var never accidentally takes the site offline.
  const siteOff =
    (process.env.SITE_STATUS || "ON").toUpperCase().trim() === "OFF";

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased transition-colors duration-200">
        {/* [MAINTENANCE] When OFF: full-screen offline page only */}
        {siteOff ? (
          <MaintenanceScreen />
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </>
        )}
        {/*
          [MAINTENANCE] Always keep {children} in the React tree (hidden)
          so Next.js can collect page data during `next build` on Vercel.
          Without this, SITE_STATUS=OFF caused:
          "Failed to collect page data for /_not-found"
        */}
        {siteOff && <div className="hidden">{children}</div>}
      </body>
    </html>
  );
}
