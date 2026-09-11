# Image assets needed before launch

All product/activity/project images currently render as plain placeholder
blocks (`bg-parchment`) instead of real photos. Replace them by:

1. Dropping real photos into this `public/images/` folder, matching the
   subfolders referenced in `/content/*.ts` (`products/`, `activities/`,
   `projects/`).
2. Swapping the placeholder `<div>` in `ActivityCard.tsx` / `ProductCard.tsx`
   for a `next/image` `<Image>` component pointing at the real path.

Recommended minimums for a credible launch:
- 2–4 photos per field activity
- 1–2 photos per project
- 1 photo per product (can reuse a category shot if individual product
  photos aren't available yet)
- A hero/company photo for the homepage and About page

Keep originals at reasonable web sizes (under ~500KB each) to keep the
site fast on mobile data connections.
