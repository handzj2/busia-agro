# Deploy to Vercel (GitHub Desktop)

You already have **GitHub Desktop**. Follow these steps once; after that, every push updates the live site.

---

## 1. Put the project on GitHub

1. Open **GitHub Desktop**.
2. **File → Add Local Repository** → choose the `busia-farmers-supplies` folder  
   (if it says “not a git repository”, click **create a repository**).
3. Commit message: `Initial V1 Busia Farmers Supplies website` → **Commit to main**.
4. **Publish repository** (top bar)  
   - Name: e.g. `busia-farmers-supplies`  
   - Keep it **Private** if you prefer  
   - Publish.

You should see the repo on github.com under your account.

---

## 2. Connect the repo to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub** (same account).
2. **Add New… → Project**.
3. Import the `busia-farmers-supplies` repository.
4. Settings on the import screen:
   - **Framework Preset:** Next.js (auto)
   - **Root Directory:** leave blank (or `busia-farmers-supplies` only if the repo root is a parent folder)
   - **Build Command:** `next build` (default)
   - **Install Command:** `npm install` (default)
5. **Environment Variables** — click to add **before** first deploy:

   | Name | Value | Environment |
   |------|--------|-------------|
   | `NEXT_PUBLIC_FORMSPREE_ID` | your Formspree form ID (or leave `YOUR_FORM_ID` for now) | Production, Preview |
   | `NEXT_PUBLIC_SITE_URL` | leave empty for first deploy; update after you get the URL | Production |

6. Click **Deploy**.

Wait 1–2 minutes. Vercel gives you a URL like:

`https://busia-farmers-supplies-xxxx.vercel.app`

Open it in the browser — that is your live test site.

---

## 3. Update the site later (everyday workflow)

1. Edit files in the project (or in Cursor/VS Code).
2. Open **GitHub Desktop** → you will see changed files.
3. Write a short summary → **Commit to main**.
4. **Push origin**.
5. Vercel automatically rebuilds and updates the live URL (usually under 2 minutes).

Pull requests / other branches get their **own Preview URLs** — useful to show the client before merging.

---

## 4. After first deploy (optional but recommended)

1. Copy the live URL (e.g. `https://busia-farmers-supplies-xxxx.vercel.app`).
2. Vercel → Project → **Settings → Environment Variables**.
3. Set:
   - `NEXT_PUBLIC_SITE_URL` = `https://busia-farmers-supplies-xxxx.vercel.app`
4. **Deployments → … on latest → Redeploy** (so metadata uses the real URL).

When you have a real domain later, change `NEXT_PUBLIC_SITE_URL` to that domain and redeploy.

---

## 5. Formspree (contact form)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form ID.
3. In Vercel → Environment Variables → set `NEXT_PUBLIC_FORMSPREE_ID` = that ID.
4. Redeploy.

Until this is set, the contact form shows a reminder and will not deliver messages.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build fails on Vercel | Run `npm run build` locally first; fix errors, commit, push |
| Env var “undefined” | Variable must be added in Vercel UI, then **Redeploy** |
| Wrong folder deployed | In Vercel project settings, set **Root Directory** to the folder that contains `package.json` |
| 404 on refresh of a route | Should not happen with Next.js on Vercel; if it does, check Framework Preset is Next.js |

---

## Files already in the project for Vercel

- `vercel.json` — framework + security headers
- `.env.example` — documents `NEXT_PUBLIC_FORMSPREE_ID`
- `.gitignore` — ignores `.env*`, `.vercel`, `node_modules`, `.next`

You do **not** need the Vercel CLI if you use GitHub Desktop + the Vercel dashboard.
