import { FieldActivity } from "@/lib/types";

// PLACEHOLDER CONTENT — replace with 3–6 real, recent field activities
// (with real photos) before launch. This is the section that proves the
// company is active on the ground, so real content matters most here.
//
// NOTE: this section was designed for a company running farmer training
// and field programmes. Confirm with the client whether Busia Agro Mbale
// does anything like this (e.g. demo plots, farmer days at the shop) —
// if not, this page/nav item can simply be removed from V1.
export const fieldActivities: FieldActivity[] = [
  {
    slug: "farmer-training-masaka-2026-06",
    title: "Farmer Training — Masaka",
    date: "2026-06-14",
    location: "Kyabakuza, Masaka District",
    activityType: "Training",
    description:
      "A one-day training session for 45 smallholder farmers on correct spacing, fertilizer application timing, and early pest identification for the first-season maize crop.",
    results: "45 farmers trained; 12 follow-up farm visits scheduled for the following month.",
    partners: ["Masaka District Farmers' Association"],
    media: [
      { type: "image", src: "/images/activities/masaka-training-1.jpg", alt: "Farmers gathered for training session in Masaka" },
      { type: "image", src: "/images/activities/masaka-training-2.jpg", alt: "Trainer demonstrating fertilizer application" }
    ]
  },
  {
    slug: "demonstration-farm-lwengo-2026-04",
    title: "Demonstration Farm Field Day",
    date: "2026-04-22",
    location: "Lwengo District",
    activityType: "Field Demonstration",
    description:
      "Field day at the company's demonstration plot comparing hybrid and local maize varieties under identical management conditions.",
    results: "Hybrid plot yielded 38% more than the local-variety control plot.",
    media: [
      { type: "image", src: "/images/activities/lwengo-demo-1.jpg", alt: "Demonstration maize plot in Lwengo" }
    ]
  },
  {
    slug: "input-distribution-rakai-2026-03",
    title: "Input Distribution Drive",
    date: "2026-03-05",
    location: "Rakai District",
    activityType: "Distribution",
    description:
      "Distribution of subsidized seed and fertilizer packages to 120 registered farmer households ahead of the first planting season.",
    results: "120 households received input packages.",
    media: [
      { type: "image", src: "/images/activities/rakai-distribution-1.jpg", alt: "Input packages being distributed in Rakai" }
    ]
  }
];
