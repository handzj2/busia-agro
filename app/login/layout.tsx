import type { Metadata } from "next";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: `Staff sign in | ${company.name}`,
  robots: { index: false, follow: false }
};

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
