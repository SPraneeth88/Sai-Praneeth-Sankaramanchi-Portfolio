# Deploying Your Portfolio (Free, ~5 Minutes)

Your GitHub Pages site is **already enabled** for this repo — it just had no
`index.html`, so nothing rendered. Push these files and it goes live at:

**https://spraneeth88.github.io/Sai-Praneeth-Sankaramanchi-Portfolio/**

## Step 1 — Fill in two placeholders (required)

Open `index.html` and replace:

1. `YOUR_EMAIL_HERE@example.com` → your real email (appears in the Contact section's "Email me" button)
2. `https://www.linkedin.com/in/YOUR_LINKEDIN_HERE` → your LinkedIn profile URL

Search for `YOUR_` to find both instantly.

## Step 2 — Push to GitHub

From your local clone of the repo:

```bash
cd Sai-Praneeth-Sankaramanchi-Portfolio

# Copy in the three new files (index.html, style.css, script.js),
# replacing the old style.css and script.js

git add index.html style.css script.js
git commit -m "Launch portfolio site"
git push origin main
```

Or, without the command line: on the repo page on github.com, click
**Add file → Upload files**, drag in the three files, and commit. GitHub will
ask to replace `style.css` and `script.js` — confirm.

## Step 3 — Verify

Wait 1–2 minutes, then open:
https://spraneeth88.github.io/Sai-Praneeth-Sankaramanchi-Portfolio/

Hard-refresh (Ctrl+Shift+R) if you see an old cached version.

## Strongly recommended cleanup

- **Delete or rewrite `RESUME.md`** in this repo. It currently contains
  placeholder claims (published research paper, "Best Innovator 2025" award,
  R/Tableau skills) that don't match your actual résumé. A recruiter who
  clicks through and spots the inconsistency will trust everything else less.
- **Update `README.md`** to just link to the live site + your key repos.

## Optional upgrades (still free)

- **Shorter URL:** rename the repo to `SPraneeth88.github.io` and the site
  becomes your root URL: `https://spraneeth88.github.io/`. (Do this only if
  you want this to be your one canonical site.)
- **Custom domain later:** a `.dev` or `.com` domain (~$10/year) can be
  pointed at GitHub Pages in repo Settings → Pages → Custom domain. Hosting
  stays free; only the domain costs money.
- **Add project screenshots:** drop images into an `assets/` folder and add
  `<img>` tags inside the project cards — architecture diagrams especially.

## What's in the design

- The animated hero diagram is a LangGraph-style pipeline "executing" —
  input → orchestrator → three specialist agents → validated output. It's
  your actual craft as the site's signature, not stock decoration.
- Project cards carry mono "trace labels" (e.g. `[ node:sentinel ] pytest ✓ 8 passing`)
  echoing execution traces.
- Everything respects `prefers-reduced-motion`, works down to mobile widths,
  and has visible keyboard focus states.
