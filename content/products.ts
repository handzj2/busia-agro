import { ProductCategory } from "@/lib/types";

// Updated to reflect the shop's real focus: fertilizer, pesticides, and
// general farm inputs. Individual product names below are still
// PLACEHOLDER — replace with the actual brands/products the shop stocks.
export const productCategories: ProductCategory[] = [
  {
    slug: "fertilizers",
    name: "Fertilizers",
    products: [
      {
        slug: "npk-fertilizer",
        name: "NPK Fertilizer",
        description: "Balanced compound fertilizer for staple and horticultural crops.",
        image: "/images/products/npk-fertilizer.jpg",
        availability: "In stock"
      },
      {
        slug: "urea",
        name: "Urea",
        description: "High-nitrogen fertilizer for top-dressing maize and other cereals.",
        image: "/images/products/urea.jpg",
        availability: "In stock"
      },
      {
        slug: "dap",
        name: "DAP (Diammonium Phosphate)",
        description: "Phosphate-rich fertilizer for strong root development at planting.",
        image: "/images/products/dap.jpg",
        availability: "In stock"
      }
    ]
  },
  {
    slug: "pesticides",
    name: "Pesticides",
    products: [
      {
        slug: "herbicide",
        name: "Herbicide",
        description: "Broad-spectrum weed control for maize, coffee, and vegetable plots.",
        image: "/images/products/herbicide.jpg",
        availability: "In stock"
      },
      {
        slug: "insecticide",
        name: "Insecticide",
        description: "Crop protection against common pests including fall armyworm and aphids.",
        image: "/images/products/insecticide.jpg",
        availability: "In stock"
      },
      {
        slug: "fungicide",
        name: "Fungicide",
        description: "Disease control for coffee, bananas, and vegetable crops.",
        image: "/images/products/fungicide.jpg",
        availability: "On request"
      }
    ]
  },
  {
    slug: "farm-inputs",
    name: "Farm Inputs",
    products: [
      {
        slug: "assorted-seeds",
        name: "Assorted Seeds",
        description: "Maize, bean, and vegetable seed varieties suited to the Mbale region.",
        image: "/images/products/seeds.jpg",
        availability: "Seasonal"
      },
      {
        slug: "knapsack-sprayer",
        name: "Knapsack Sprayer",
        description: "16-litre manual sprayer for applying pesticides and foliar feeds.",
        image: "/images/products/sprayer.jpg",
        availability: "In stock"
      }
    ]
  }
];
