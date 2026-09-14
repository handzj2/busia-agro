import { CompanyProfile } from "@/lib/types";

// Source: official company profile document (uploaded 2026-09-14)
// Legal name: Busia Farmers Supplies Limited
// Operations since 2008; formal registration 2019 (TIN 1001099284)
// Branches confirmed by client: Mbale, Busia, Kampala
// Phone / WhatsApp: +256 774 201 233
export const company: CompanyProfile = {
  name: "Busia Farmers Supplies Limited",
  tagline: "With diligence and excellence, we serve farmers.",
  foundedYear: 2008,
  mission:
    "To provide farmers with high quality agricultural inputs, professional advice, and reliable services that improve productivity and livelihoods.",
  vision:
    "To become the leading agricultural supply company in Uganda that empowers farmers with reliable inputs and modern farming solutions.",
  values: [
    "Quality products",
    "Affordable prices",
    "Fast delivery",
    "Professional customer care",
    "Reliable services"
  ],
  regionsServed: ["Mbale", "Busia", "Kampala", "Bududa", "Manafwa", "Butiru"],
  phone: "+256 774 201 233",
  whatsapp: "256774201233",
  email: "busiafarmsupply@gmail.com",
  address:
    "Industrial Division, South Central Ward Park, Mbale, Uganda (P.O. Box 312768)",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Industrial+Division+South+Central+Ward+Park+Mbale+Uganda&output=embed",
  socials: [
    { label: "Facebook", url: "https://facebook.com" },
    { label: "Instagram", url: "https://instagram.com" },
    { label: "LinkedIn", url: "https://linkedin.com" }
  ],
  impactStats: [
    { value: "18+", label: "Years serving farmers" },
    { value: "3", label: "Branches" },
    { value: "TIN registered", label: "Formal business" },
    { value: "Uganda-wide", label: "Supply reach" }
  ],
  hours: [
    { day: "Mon–Fri", hours: "8am–5pm" },
    { day: "Sat", hours: "9am–1pm" },
    { day: "Sun", hours: "Closed" }
  ],
  trustSignals: [
    "TIN registered (1001099284)",
    "Serving farmers since 2008",
    "Branches in Mbale, Busia & Kampala",
    "Quality inputs · professional advice"
  ]
};
