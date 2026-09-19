import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

/**
 * ─────────────────────────────────────────────────────────────
 * /maintenance ROUTE
 * ─────────────────────────────────────────────────────────────
 * Added: 2026-09-19
 * Optional direct URL for the offline screen. The live switch is
 * controlled by SITE_STATUS in the root layout (app/layout.tsx).
 * ─────────────────────────────────────────────────────────────
 */
export const metadata: Metadata = {
  title: "Temporarily Unavailable",
  description:
    "The website is temporarily unavailable. Please contact us for assistance.",
  robots: { index: false, follow: false }
};

export default function MaintenancePage() {
  return <MaintenanceScreen />;
}
