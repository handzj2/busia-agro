import { company } from "@/content/company";

export const metadata = {
  title: `Products | ${company.name}`,
  description: `Browse quality seeds, fertilizers, herbicides, fungicides, insecticides and foliar products from ${company.name}.`,
  alternates: { canonical: "/products" }
};

export default function ProductsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
