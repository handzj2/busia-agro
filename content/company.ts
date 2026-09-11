import { CompanyProfile } from "@/lib/types";

// Real client details filled in below. Remaining PLACEHOLDER fields
// (phone, email, WhatsApp, founded year, socials, map link) still need to
// come from the client before launch — search for "PLACEHOLDER" to find them.
export const company: CompanyProfile = {
  name: "Busia Agro Mbale",
  tagline: "Mbale's trusted source for fertilizer, pesticides, and farm inputs.",
  foundedYear: 2016, // PLACEHOLDER — confirm actual founding year
  mission:
    "To supply farmers in and around Mbale with quality fertilizers, pesticides, and farm inputs, backed by honest advice on what to use and when.",
  vision:
    "To be the first stop for every farmer in the Mbale region looking for reliable agro-inputs and support.",
  values: [
    "Integrity in every transaction",
    "Farmer-first thinking",
    "Evidence-based agronomy",
    "Long-term partnership over one-off sales"
  ],
  regionsServed: ["Mbale", "Eastern Region"],
  phone: "+256 700 000 000", // PLACEHOLDER — confirm real phone number
  whatsapp: "256700000000", // PLACEHOLDER — confirm real WhatsApp number
  email: "info@busiaagrombale.co.ug", // PLACEHOLDER — confirm real email
  address: "Mbale Bus Park, opposite M-Kopa Shop, Mbale, Uganda",
  mapEmbedUrl: "https://www.google.com/maps?q=Mbale+Bus+Park,Mbale,Uganda&output=embed",
  socials: [
    { label: "Facebook", url: "https://facebook.com" }, // PLACEHOLDER — confirm real page
    { label: "Instagram", url: "https://instagram.com" }, // PLACEHOLDER — confirm real page
    { label: "LinkedIn", url: "https://linkedin.com" } // PLACEHOLDER — confirm real page
  ],
  // PLACEHOLDER — all four numbers need confirming with the client before
  // launch. Used by <ImpactStats> on the homepage and About page. Keep to
  // 4 numbers max so the strip stays legible on mobile.
  impactStats: [
    { value: "10+", label: "Years serving farmers" },
    { value: "3", label: "Product categories" },
    { value: "2", label: "Regions served" },
    { value: "1", label: "Shop location" }
  ],
  // PLACEHOLDER — confirm each of these against reality before launch
  // (e.g. is the business actually registered, does it hold any
  // certifications). Used by <TrustStrip>. Never display a checklist item
  // here that hasn't been confirmed true.
  hours: [
    { day: "Mon–Fri", hours: "8am–5pm" },
    { day: "Sat", hours: "9am–1pm" },
    { day: "Sun", hours: "Closed" }
  ],
  trustSignals: [
    "Registered business", // PLACEHOLDER — confirm registration status
    "Serving farmers since 2016", // PLACEHOLDER — keep this year in sync with foundedYear above
    "Based at Mbale Bus Park",
    "Straightforward product advice, no hard sell"
  ]
};
