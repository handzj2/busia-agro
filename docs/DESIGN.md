# Design system notes

## Why this direction

The brief is an agricultural company that needs to read as credible to two
very different audiences at once: everyday customers, and funders/NGOs
evaluating it for contracts. That ruled out both a "small shop" look and a
generic SaaS-startup look. The direction taken instead: an **editorial
field-record aesthetic** — the site treats real dates, locations, and
partners as structural content (not decoration), because that specificity
is exactly what makes a funder trust the organization has real field
presence.

## Color

| Token       | Hex       | Use                                          |
|-------------|-----------|-----------------------------------------------|
| `ink`       | `#16241A` | Headings, dark section backgrounds            |
| `field`     | `#1F4D2B` | Nav bar, dark section backgrounds             |
| `fieldlight`| `#3E7A45` | Secondary accents on dark backgrounds         |
| `harvest`   | `#E0A526` | Primary CTA accent (buttons, WhatsApp button) |
| `clay`      | `#9C4A24` | Secondary accent — dates, eyebrows, links     |
| `parchment` | `#F3ECDD` | Section background alternate, image placeholders |
| `paper`     | `#FCFAF4` | Default page background                       |
| `stone`     | `#5C5646` | Body/secondary text                           |

Deliberately avoided the near-cream `#F4F1EA` + terracotta `#D97757`
combination common in AI-generated pages — this palette instead pulls from
actual soil, foliage, and harvest tones, pushed more saturated and
specific than a first pass so it reads as rich and intentional rather than
washed-out.

## Texture — grounding the "agro" feel

Flat color blocks alone read as generic SaaS, regardless of hue. Two
lightweight, deliberately subtle devices ground the palette in agriculture
without resorting to stock photography:

- **Furrow texture** (`.furrow-texture` / `.furrow-texture-dark` in
  `globals.css`) — a diagonal repeating-line pattern evoking ploughed
  field rows, layered at very low opacity (3–4%) under the hero and dark
  CTA sections. It reads as texture, not decoration, and never competes
  with foreground text.
- **Leaf mark** (`components/LeafIcon.tsx`) — a literal leaf-sprig shape
  used small and solid next to the company name in the nav, and large,
  rotated, and near-transparent (`text-field/10`) as a corner accent on
  the hero. One shape, used twice, at two very different scales and
  opacities — not scattered as generic decoration across the page.

Both are pure CSS/SVG (no image assets), so they render immediately and
never need to wait on client-supplied photography.

## Type

- **Headlines:** Fraunces (serif) — has enough editorial weight to read as
  a credible institution, not a shop flyer.
- **Body/UI:** Work Sans — a plain, highly legible grotesk that stays out
  of the way of real content (dates, locations, descriptions).

No all-caps labels, no single-word-in-italic headline tricks — see
`/mnt/skills/public/frontend-design/SKILL.md` for the reasoning.

## Layout concept

The recurring structural device is the **record rule**: a thin top border
pairing a date/location/type on one line, used on Field Activities and
Projects. It's only used where the content genuinely is a dated record —
not applied decoratively elsewhere (e.g. not on Services or Products,
which aren't chronological).

The homepage hero is intentionally asymmetric (3-col statement / 2-col
"latest field record" panel) rather than a centered headline + gradient,
so the very first thing a visitor sees is evidence of real activity.

## Motion and interaction

Kept deliberately restrained, per the two rules that matter most: one
orchestrated moment beats scattered effects, and motion should answer a
person's action rather than run on its own.

- **One entrance, not per-section reveals.** Only the homepage hero
  animates in on load (`.hero-in*` classes in `globals.css`), staggered
  slightly across its four elements. No other section fades in on scroll —
  that per-section-on-scroll pattern is the most common AI-generated-page
  tell and was deliberately avoided.
- **Cards respond to hover** (`.card-hover` in `globals.css`): a small
  lift + shadow, used identically on product, project, and hero-panel
  cards so the interaction vocabulary stays consistent site-wide.
- **Nav links** get a harvest-gold underline that grows in from the left
  on hover/focus (`.nav-link`), instead of just a color change.
- **The WhatsApp button** pulses a few times shortly after load
  (`.whatsapp-pulse`) to draw attention to the primary contact channel,
  then stops — it's a fixed-count animation, not an infinite loop.
- All of the above respects `prefers-reduced-motion` (handled globally in
  `globals.css`), so it never overrides a visitor's OS-level motion
  preference.

## What to preserve when extending

- Keep the record-rule pattern reserved for genuinely dated content.
- Keep one accent doing the "loud" work (`harvest`) and one doing the
  "quiet structural" work (`clay`) — don't introduce a third bright color.
- When V2's admin UI is built, it should NOT reuse this exact visual
  language — an internal dashboard has different needs (density, forms,
  tables) and pretending otherwise usually produces a worse admin UI.
