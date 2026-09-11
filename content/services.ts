import { Service } from "@/lib/types";

// Updated for Busia Agro Mbale retail focus. Confirm wording with client.
export const services: Service[] = [
  {
    slug: "fertilizer-supply",
    order: 1,
    title: "Fertilizer Supply",
    summary: "A full range of fertilizers for every stage of the crop cycle.",
    description:
      "We stock fertilizers for planting, top-dressing, and foliar feeding, with guidance on the right product and application rate for your crop and soil.",
    bullets: [
      "NPK, Urea, DAP and specialty blends",
      "Advice on rates and timing by crop",
      "Retail and bulk quantities"
    ]
  },
  {
    slug: "pesticide-supply",
    order: 2,
    title: "Pesticides & Crop Protection",
    summary: "Herbicides, insecticides, and fungicides for common local pests and diseases.",
    description:
      "We supply crop protection products for maize, coffee, vegetables, and other crops grown in the Mbale region, and can advise on which product fits the problem you're seeing in the field.",
    bullets: [
      "Herbicides, insecticides, fungicides",
      "Guidance for fall armyworm and common diseases",
      "Safe-use advice at the counter"
    ]
  },
  {
    slug: "farm-inputs",
    order: 3,
    title: "General Farm Inputs",
    summary: "Seeds, tools, and other everyday farm supplies.",
    description:
      "Beyond fertilizer and pesticides, we stock the seeds, hand tools, and other inputs farmers need throughout the season — all available at our shop at Mbale Bus Park.",
    bullets: [
      "Assorted seeds suited to the region",
      "Knapsack sprayers and hand tools",
      "Seasonal availability flagged clearly"
    ]
  },
  {
    slug: "product-advice",
    order: 4,
    title: "Product Advice",
    summary: "Straightforward guidance on what to use and when.",
    description:
      "Not sure which fertilizer or pesticide fits your crop or the problem you're facing? Stop by or reach out on WhatsApp and we'll help you choose — no hard sell.",
    bullets: [
      "Honest product recommendations",
      "WhatsApp and in-person support",
      "Focus on what works for your farm"
    ]
  }
];
