import type { Metadata } from "next";
import MaintenanceScreen from "@/components/MaintenanceScreen";

export const metadata: Metadata = {
  title: "Temporarily Unavailable",
  description: "The website is temporarily unavailable. Please contact us for assistance.",
  robots: { index: false, follow: false }
};

export default function MaintenancePage() {
  return <MaintenanceScreen />;
}
