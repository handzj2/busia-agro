import { ProductCategory } from "@/lib/types";

// Product photos live in /public/images/products/<category-slug>/<slug>.jpg.
// Names and descriptions are taken from what is printed on each pack.
// Availability is "On request" until the shop confirms live stock.
// Entries with image: "" are older placeholders with no photo yet.
export const productCategories: ProductCategory[] = [
  {
    slug: "seeds",
    name: "Seeds",
    products: [
      {
        slug: "advanta-adv2309w-hybrid-maize-seed",
        name: "Advanta ADV2309W Hybrid Maize",
        description: "Advanta hybrid maize seed, variety ADV2309W.",
        image: "/images/products/seeds/advanta-adv2309w-hybrid-maize-seed.jpg",
        imageAlt: "Advanta ADV2309W hybrid maize seed bag",
        availability: "On request"
      },
      {
        slug: "easeed-kh500-43a-hybrid-maize-seed",
        name: "Easeed KH 500-43A Hybrid Maize",
        description: "KALRO-released medium-altitude double-cobber hybrid maize, 2 kg pack.",
        image: "/images/products/seeds/easeed-kh500-43a-hybrid-maize-seed.jpg",
        imageAlt: "Easeed KH 500-43A hybrid maize seed pack",
        availability: "On request"
      },
      {
        slug: "western-seed-haraka-wh301-hybrid-maize-seed",
        name: "Haraka WH301 Hybrid Maize",
        description: "Early-maturing certified hybrid maize seed from Western Seed Company, 2 kg pack.",
        image: "/images/products/seeds/western-seed-haraka-wh301-hybrid-maize-seed.jpg",
        imageAlt: "Haraka WH301 hybrid maize seed pack",
        availability: "On request"
      },
      {
        slug: "starke-ayres-onion-red-creole-seed",
        name: "Onion Red Creole (Starke Ayres)",
        description: "Red Creole onion seed in a Starke Ayres tin.",
        image: "/images/products/seeds/starke-ayres-onion-red-creole-seed.jpg",
        imageAlt: "Starke Ayres Onion Red Creole seed tin",
        availability: "On request"
      },
      {
        slug: "monarch-onion-red-creole-seed",
        name: "Onion Red Creole (Monarch Seed)",
        description: "Red Creole onion seed, 250 g tin.",
        image: "/images/products/seeds/monarch-onion-red-creole-seed.jpg",
        imageAlt: "Monarch Seed Onion Red Creole tin",
        availability: "On request"
      },
      {
        slug: "syova-onion-early-red-max-seed",
        name: "Onion Early Red Max (Syova)",
        description: "Early Red Max onion seed in a Syova tin.",
        image: "/images/products/seeds/syova-onion-early-red-max-seed.jpg",
        imageAlt: "Syova Onion Early Red Max seed tin",
        availability: "On request"
      },
      {
        slug: "starke-ayres-watermelon-bunuzi-f1-seed",
        name: "Watermelon Bunuzi F1 (Starke Ayres)",
        description: "Bunuzi F1 hybrid watermelon seed.",
        image: "/images/products/seeds/starke-ayres-watermelon-bunuzi-f1-seed.jpg",
        imageAlt: "Starke Ayres Watermelon Bunuzi F1 seed tin",
        availability: "On request"
      },
      {
        slug: "syova-watermelon-sukari-f1-seed",
        name: "Watermelon Sukari F1 (Syova)",
        description: "Sukari F1 hybrid watermelon seed.",
        image: "/images/products/seeds/syova-watermelon-sukari-f1-seed.jpg",
        imageAlt: "Syova Watermelon Sukari F1 seed tin",
        availability: "On request"
      },
      {
        slug: "starke-ayres-sweet-pepper-california-wonder-seed",
        name: "Sweet Pepper California Wonder (Starke Ayres)",
        description: "California Wonder sweet pepper seed.",
        image: "/images/products/seeds/starke-ayres-sweet-pepper-california-wonder-seed.jpg",
        imageAlt: "Starke Ayres Sweet Pepper California Wonder seed tin",
        availability: "On request"
      },
      {
        slug: "super-bell-f1-hybrid-green-pepper-seed",
        name: "Hybrid Green Pepper Super Bell F1",
        description: "Super Bell F1 hybrid green pepper seed.",
        image: "/images/products/seeds/super-bell-f1-hybrid-green-pepper-seed.jpg",
        imageAlt: "Super Bell F1 hybrid green pepper seed tin",
        availability: "On request"
      }
    ]
  },
  {
    slug: "fertilizers",
    name: "Fertilizers",
    products: [
      {
        slug: "dem-organic-fertilizer-25kg",
        name: "DEM Organic Fertilizer (25 kg)",
        description: "Organic fertilizer for planting and top dressing, 25 kg bag.",
        image: "/images/products/fertilizers/dem-organic-fertilizer-25kg.jpg",
        imageAlt: "DEM Organic Fertilizer 25 kg bag",
        availability: "On request"
      },
      {
        slug: "npk-fertilizer",
        name: "NPK Fertilizer",
        description: "Balanced compound fertilizer for staple and horticultural crops.",
        image: "",
        availability: "In stock"
      },
      {
        slug: "urea",
        name: "Urea",
        description: "High-nitrogen fertilizer for top-dressing maize and other cereals.",
        image: "",
        availability: "In stock"
      },
      {
        slug: "dap",
        name: "DAP (Diammonium Phosphate)",
        description: "Phosphate-rich fertilizer for strong root development at planting.",
        image: "",
        availability: "In stock"
      }
    ]
  },
  {
    slug: "foliar-fertilizers",
    name: "Foliar Fertilizers",
    products: [
      {
        slug: "gencrest-satva-biostimulant",
        name: "Satva Biostimulant",
        description: "Gencrest biostimulant.",
        image: "/images/products/foliar-fertilizers/gencrest-satva-biostimulant.jpg",
        imageAlt: "Satva biostimulant bottle",
        availability: "On request"
      },
      {
        slug: "aglukon-wuxal-macromix-24-24-18-te",
        name: "Wuxal Macromix 24-24-18+TE",
        description: "Aglukon liquid foliar fertilizer with trace elements.",
        image: "/images/products/foliar-fertilizers/aglukon-wuxal-macromix-24-24-18-te.jpg",
        imageAlt: "Wuxal Macromix 24-24-18+TE bottle",
        availability: "On request"
      },
      {
        slug: "faida-sc-amino-acid-supplement",
        name: "Faida SC Amino Acid Supplement",
        description: "Amino acid supplement with chelated micro-elements for foliar feeding and fertigation, 1 L.",
        image: "/images/products/foliar-fertilizers/faida-sc-amino-acid-supplement.jpg",
        imageAlt: "Faida SC amino acid supplement 1 L bottle",
        availability: "On request"
      },
      {
        slug: "falcon-gold-cal-max-liquid-fertilizer",
        name: "Falcon Gold Cal-Max",
        description: "Premium liquid calcium fertilizer (40% calcium), 1 L.",
        image: "/images/products/foliar-fertilizers/falcon-gold-cal-max-liquid-fertilizer.jpg",
        imageAlt: "Falcon Gold Cal-Max 1 L bottle",
        availability: "On request"
      },
      {
        slug: "folcrop-b-mo-foliar-fertilizer",
        name: "Folcrop B-Mo",
        description: "Inorganic foliar fertilizer: amino acids with boron and molybdenum.",
        image: "/images/products/foliar-fertilizers/folcrop-b-mo-foliar-fertilizer.jpg",
        imageAlt: "Folcrop B-Mo foliar fertilizer bottle",
        availability: "On request"
      }
    ]
  },
  {
    slug: "herbicides",
    name: "Herbicides",
    products: [
      {
        slug: "dryweed-396sl-herbicide",
        name: "Dryweed 396 SL",
        description: "Herbicide, 1 L.",
        image: "/images/products/herbicides/dryweed-396sl-herbicide.jpg",
        imageAlt: "Dryweed 396 SL herbicide 1 L bottle",
        availability: "On request"
      },
      {
        slug: "rainbow-rid-out-480sl-herbicide",
        name: "Rid Out 480 SL",
        description: "Rainbow glyphosate (480 g/L) non-selective herbicide, 1 L.",
        image: "/images/products/herbicides/rainbow-rid-out-480sl-herbicide.jpg",
        imageAlt: "Rainbow Rid Out 480 SL herbicide 1 L bottle",
        availability: "On request"
      },
      {
        slug: "hangzhou-beansclean-super-15-5ec-herbicide",
        name: "Beansclean Super 15.5% EC",
        description: "Herbicide for use in beans.",
        image: "/images/products/herbicides/hangzhou-beansclean-super-15-5ec-herbicide.jpg",
        imageAlt: "Beansclean Super 15.5% EC herbicide bottle",
        availability: "On request"
      },
      {
        slug: "cleaner-maize-40od-herbicide",
        name: "Cleaner Maize 40 OD",
        description: "Nicosulfuron 40 g/L selective herbicide for maize.",
        image: "/images/products/herbicides/cleaner-maize-40od-herbicide.jpg",
        imageAlt: "Cleaner Maize 40 OD herbicide bottle",
        availability: "On request"
      },
      {
        slug: "weed-master-glyphosate-50sc-herbicide",
        name: "Weed Master Glyphosate 50% SC",
        description: "Glyphosate herbicide for general weed control.",
        image: "/images/products/herbicides/weed-master-glyphosate-50sc-herbicide.jpg",
        imageAlt: "Weed Master glyphosate herbicide bottle",
        availability: "On request"
      }
    ]
  },
  {
    slug: "fungicides",
    name: "Fungicides",
    products: [
      {
        slug: "rainbow-twinstar-75wg-fungicide",
        name: "Twinstar 75 WG",
        description: "Rainbow fungicide for powdery mildew in roses and yellow rust and stem rust in wheat, 30 g.",
        image: "/images/products/fungicides/rainbow-twinstar-75wg-fungicide.jpg",
        imageAlt: "Rainbow Twinstar 75 WG fungicide sachet",
        availability: "On request"
      },
      {
        slug: "carzal-250ec-fungicide",
        name: "Carzal 250 EC",
        description: "Fungicide for control of powdery mildew.",
        image: "/images/products/fungicides/carzal-250ec-fungicide.jpg",
        imageAlt: "Carzal 250 EC fungicide bottle",
        availability: "On request"
      },
      {
        slug: "osho-sulcop-50df-copper-fungicide",
        name: "Sulcop 50 DF Green Copper Fungicide",
        description: "Copper fungicide for rust, bacterial and fungal diseases on vegetables, flowers and fruits, 1 kg.",
        image: "/images/products/fungicides/osho-sulcop-50df-copper-fungicide.jpg",
        imageAlt: "Osho Sulcop 50 DF green copper fungicide 1 kg pack",
        availability: "On request"
      },
      {
        slug: "syngenta-quadris-50wg-fungicide",
        name: "Quadris 50 WG",
        description: "Syngenta systemic fungicide (azoxystrobin) for coffee berry disease, 20 g.",
        image: "/images/products/fungicides/syngenta-quadris-50wg-fungicide.jpg",
        imageAlt: "Syngenta Quadris 50 WG fungicide sachet",
        availability: "On request"
      },
      {
        slug: "stanes-bio-cure-b-biofungicide",
        name: "Bio Cure-B",
        description: "Stanes Pseudomonas fluorescens biofungicide.",
        image: "/images/products/fungicides/stanes-bio-cure-b-biofungicide.jpg",
        imageAlt: "Stanes Bio Cure-B bottle",
        availability: "On request"
      }
    ]
  },
  {
    slug: "insecticides",
    name: "Insecticides",
    products: [
      {
        slug: "rainbow-abamet-18ec-insecticide",
        name: "Abamet 18 EC",
        description: "Rainbow abamectin 18 g/L insecticide, miticide and acaricide, 1 L.",
        image: "/images/products/insecticides/rainbow-abamet-18ec-insecticide.jpg",
        imageAlt: "Rainbow Abamet 18 EC insecticide 1 L bottle",
        availability: "On request"
      },
      {
        slug: "syova-magic-50ec-insecticide",
        name: "Magic 50 EC",
        description: "Syova malathion 50% insecticide, 250 ml.",
        image: "/images/products/insecticides/syova-magic-50ec-insecticide.jpg",
        imageAlt: "Syova Magic 50 EC insecticide bottle",
        availability: "On request"
      },
      {
        slug: "tricel-chlorpyrifos-48ec-insecticide",
        name: "Tricel Chlorpyrifos 48% EC",
        description: "Ant and termite killer.",
        image: "/images/products/insecticides/tricel-chlorpyrifos-48ec-insecticide.jpg",
        imageAlt: "Tricel chlorpyrifos 48% EC bottle",
        availability: "On request"
      },
      {
        slug: "syngenta-galil-300sc-insecticide",
        name: "Galil 300 SC",
        description: "Syngenta insecticide for coffee twig borer and coffee berry borer.",
        image: "/images/products/insecticides/syngenta-galil-300sc-insecticide.jpg",
        imageAlt: "Syngenta Galil 300 SC insecticide bottle",
        availability: "On request"
      }
    ]
  },
  {
    slug: "farm-inputs",
    name: "Farm Inputs",
    products: [
      {
        slug: "knapsack-sprayer",
        name: "Knapsack Sprayer",
        description: "16-litre manual sprayer for applying pesticides and foliar feeds.",
        image: "",
        availability: "In stock"
      }
    ]
  }
];
