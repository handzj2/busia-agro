import { Project } from "@/lib/types";

// PLACEHOLDER CONTENT — replace with 2–5 real past or current projects.
// This section is what funders and partners will read most closely.
//
// NOTE: this section was designed for companies doing funded/partner
// project work. Confirm with the client whether that applies to Busia
// Agro Mbale (a retail shop) — if not, this page/nav item can be removed
// from V1, or repurposed as a simple "Why choose us" / testimonials page.
export const projects: Project[] = [
  {
    slug: "smallholder-maize-productivity-2025",
    name: "Smallholder Maize Productivity Programme",
    partner: "Central Region Agricultural Trust",
    location: "Masaka & Rakai Districts",
    startDate: "2025-02-01",
    endDate: "2025-11-30",
    summary:
      "A ten-month programme supporting 500 smallholder maize farmers with training, input access, and post-harvest handling to raise yields and reduce losses.",
    scope: [
      "Farmer registration and baseline survey",
      "Seasonal agronomy training",
      "Input distribution and monitoring",
      "Post-harvest handling training",
      "End-of-season impact reporting"
    ],
    results: "Average yield increase of 27% across participating farms; post-harvest losses reduced by an estimated 15%.",
    media: [
      { type: "image", src: "/images/projects/maize-programme-1.jpg", alt: "Farmers in the maize productivity programme" }
    ]
  },
  {
    slug: "outgrower-scheme-development-2024",
    name: "Bean Outgrower Scheme Development",
    partner: "Private off-taker (name withheld pending permission)",
    location: "Sembabule District",
    startDate: "2024-05-01",
    endDate: "2024-12-15",
    summary:
      "Set up and managed an outgrower scheme connecting 80 farmer households to a guaranteed bean off-take agreement.",
    scope: [
      "Farmer recruitment and grouping",
      "Contract terms facilitation",
      "Seed and input pre-financing coordination",
      "Quality-assured aggregation at harvest"
    ],
    media: [
      { type: "image", src: "/images/projects/bean-outgrower-1.jpg", alt: "Bean outgrower farmers at aggregation point" }
    ]
  }
];
