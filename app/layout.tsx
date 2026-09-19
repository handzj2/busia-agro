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

export const metadata: Metadata = {
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`
  },
  description: company.mission,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://busia-farmers-supplies.vercel.app"
  ),
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

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // SITE_STATUS=OFF → overlay the maintenance screen on top of the normal tree.
  // We always render {children} so Next.js can collect page data during build
  // (this fixes the Vercel "/_not-found" build error when SITE_STATUS is OFF).
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
          Always include children in the React tree for static generation.
          When site is OFF they are hidden; when ON they are already shown above.
        */}
        {siteOff && <div className="hidden">{children}</div>}
      </body>
    </html>
  );
}
