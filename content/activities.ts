import { FieldActivity } from "@/lib/types";

// Field work is concentrated in the Eastern region.
// Photos: Bududa field support (client, 2026), Namisindwa inputs training (client).
export const fieldActivities: FieldActivity[] = [
  {
    slug: "field-support-bududa-2026",
    title: "Field Support — Bududa",
    date: "2026-03-15",
    location: "Bududa District",
    activityType: "Field Support",
    description:
      "On-ground support for farmers in Bududa — input guidance and follow-up on crop protection and fertilizer use in the Eastern highlands. Team worked with local farmers on prepared land, demonstrating practical application in the field.",
    results:
      "Farmers received hands-on guidance on inputs and field preparation; photo record from the visit is published below.",
    media: [
      {
        type: "image",
        src: "/images/activities/bududa-field-1.jpg",
        alt: "Busia Farmers Supplies team with farmers in a prepared field in Bududa District"
      }
    ]
  },
  {
    slug: "inputs-training-namisindwa",
    title: "Inputs Training — Namisindwa",
    date: "2025-11-12",
    location: "Namisindwa District",
    activityType: "Training",
    description:
      "Community training on agricultural inputs and crop protection products. Farmers reviewed fertilizers, herbicides and other chemicals with practical guidance on safe and effective use.",
    results:
      "Group training session with product samples displayed; farmers engaged on product selection and application.",
    media: [
      {
        type: "image",
        src: "/images/activities/namisindwa-training-1.jpg",
        alt: "Farmers at inputs training in Namisindwa with agrochemical products displayed on a table"
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
    results: "To be confirmed with additional field notes and photos.",
    media: []
  },
  {
    slug: "field-support-busia-butiru-2025",
    title: "Field Support — Busia & Butiru",
    date: "2025-06-10",
    location: "Busia District / Butiru",
    activityType: "Field Support",
    description:
      "Support visits covering Busia and Butiru — serving farmers with input supply guidance and advisory in the Eastern region.",
    results: "To be confirmed with additional field notes and photos.",
    media: []
  }
];
