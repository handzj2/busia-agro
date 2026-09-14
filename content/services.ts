import { Service } from "@/lib/types";

// Aligned with official company profile (2026-09-14)
// Core: farm inputs, advisory, equipment, crop support, delivery
// Client notes: seedling raising projects, contract farming
export const services: Service[] = [
  {
    slug: "farm-inputs",
    order: 1,
    title: "Farm Inputs",
    summary:
      "Fertilizers, seeds, agro-chemicals and everyday inputs for large and small-scale farmers.",
    description:
      "We supply agricultural farm inputs mainly fertilizers, top quality seeds and other agricultural chemicals to large-scale farmers, agricultural input stockists and agricultural institutions countrywide.",
    bullets: [
      "Fertilizers (NPK, Urea, DAP and specialty blends)",
      "Top quality seeds",
      "Agricultural chemicals and crop protection",
      "Retail and bulk supply"
    ]
  },
  {
    slug: "farmer-advisory",
    order: 2,
    title: "Farmer Advisory Services",
    summary:
      "Professional advice on what to use, when to use it, and how to improve results on the farm.",
    description:
      "We provide professional customer care and agronomic guidance so farmers can choose the right products and apply them correctly — improving productivity and livelihoods.",
    bullets: [
      "Product selection guidance",
      "Application timing and rates",
      "Support for improved crop production",
      "In-person and WhatsApp support"
    ]
  },
  {
    slug: "equipment-supplies",
    order: 3,
    title: "Agricultural Equipment & Supplies",
    summary:
      "Tools and equipment that support day-to-day farm work and crop protection.",
    description:
      "Beyond inputs, we stock agricultural equipment and supplies that farmers and stockists need for spraying, handling and general field work.",
    bullets: [
      "Sprayers and application tools",
      "General farm supplies",
      "Items suited to local crop systems"
    ]
  },
  {
    slug: "delivery-services",
    order: 4,
    title: "Delivery Services",
    summary: "Fast, reliable delivery so inputs reach the farm when they are needed.",
    description:
      "We offer delivery services to support farmers, stockists and institutions — helping you get quality products on time.",
    bullets: [
      "Timely delivery",
      "Support for stockists and institutions",
      "Reliable fulfilment"
    ]
  },
  {
    slug: "seedling-contract",
    order: 5,
    title: "Seedling Raising & Contract Farming",
    summary:
      "Support for seedling raising projects and contract farming arrangements.",
    description:
      "We support seedling raising projects and contract farming — helping partners and farmers plan production with reliable input supply and practical advice.",
    bullets: [
      "Seedling raising project support",
      "Contract farming input supply",
      "Coordination with stockists and institutions"
    ]
  }
];
