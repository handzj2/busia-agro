import { company } from "@/content/company";

export const metadata = {
  title: `Products | ${company.name}`,
  description: "Quality farm inputs, seeds, and equipment from " + company.name
};

export default function ProductsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
