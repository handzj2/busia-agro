import { FieldActivity } from "@/lib/types";

// Field work is concentrated in the Eastern region.
// Confirmed areas: Bududa, Manafwa, Busia, Butiru.
// Client note: activities took place last year and once this year.
// Replace titles/descriptions/photos with real records before launch.
export const fieldActivities: FieldActivity[] = [
  {
    slug: "field-support-bududa-2026",
    title: "Field Support — Bududa",
    date: "2026-03-15",
    location: "Bududa District",
    activityType: "Field Support",
    description:
      "On-ground support for farmers in Bududa — input guidance and follow-up on crop protection and fertilizer use in the Eastern highlands.",
    results: "To be confirmed with field notes and photos.",
    media: [
      {
        type: "image",
        src: "/images/activities/bududa-field-1.jpg",
        alt: "Field activity in Bududa"
      }
    ]
  },
  {
    slug: "field-support-manafwa-2025",
    title: "Field Support — Manafwa",
    date: "2025-09-20",
    location: "Manafwa District",
    activityType: "Field Support",
    description:
      "Field visit and farmer support in Manafwa — practical advice on inputs and crop management for local growers.",
    results: "To be confirmed with field notes and photos.",
    media: [
      {
        type: "image",
        src: "/images/activities/manafwa-field-1.jpg",
        alt: "Field activity in Manafwa"
      }
    ]
  },
  {
    slug: "field-support-busia-butiru-2025",
    title: "Field Support — Busia & Butiru",
    date: "2025-06-10",
    location: "Busia District / Butiru",
    activityType: "Field Support",
    description:
      "Support visits covering Busia and Butiru — serving farmers with input supply guidance and advisory in the Eastern region.",
    results: "To be confirmed with field notes and photos.",
    media: [
      {
        type: "image",
        src: "/images/activities/busia-butiru-field-1.jpg",
        alt: "Field activity in Busia and Butiru"
      }
    ]
  }
];
