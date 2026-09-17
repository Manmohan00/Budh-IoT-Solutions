# Budh IoT Solutions — Website

Static site, no build step. Plain HTML/CSS/JS — works as-is on GitHub Pages.

## Folder structure

```
index.html              Main site (one page, anchored sections)
catalog.html            Standalone student project catalog (NOT linked from main nav, on purpose)
blog.html                Full blog listing page
blog/sample-post.html    Template for individual blog posts — duplicate this file per post
privacy.html             Basic privacy policy starting point

css/                     Stylesheets (base tokens, components, layout, section styles)
js/
  site-config.js         <-- Most-edited file. Feature toggles + contact details.
  main.js                 All rendering/interaction logic. Shouldn't need edits for content changes.
data/
  projects.js            Your portfolio projects — add new ones here
  reviews.js              Embedded testimonials
  blogs.js                Blog post index (title/date/excerpt/link)
  catalog-projects.js     Student catalog listings (used by catalog.html only)

assets/logo.svg          Placeholder logo — replace with your real logo (keep the filename
                          or update references in index.html, catalog.html, blog.html, privacy.html)
favicon.svg               Placeholder favicon (same as logo currently)
manifest.json, robots.txt, sitemap.xml, CNAME   SEO / GitHub Pages config
```

## The three files you'll edit most

**`js/site-config.js`** — turn sections on/off, set your email, WhatsApp number,
and form backend endpoint. Every toggle has a comment explaining it.

**`data/projects.js`** — add a project by copying one `{ ... }` block and editing
the fields. No other file needs to change.

**`data/reviews.js`** and **`data/blogs.js`** — same copy-a-block pattern.

## Before going live, you'll want to:

1. **Add your logo** — replace `assets/logo.svg` (and `favicon.svg`) with your real
   logo. For full favicon support across all devices, run your logo through a
   favicon generator (e.g. realfavicongenerator.net) once you have a final logo —
   the SVG favicon here covers modern browsers but not every older device.
2. **Connect a form backend** — GitHub Pages can't process form submissions.
   Sign up at formspree.io (free tier is fine to start), create a form, and paste
   the endpoint into `FORM_ENDPOINT` in `js/site-config.js`. Until you do this,
   the forms will politely tell visitors to email you directly instead of failing
   silently.
3. **Fill in placeholders** — search the project for `[Add` and `[Placeholder`
   to find every spot expecting real content (bio, stats, city, etc.).
4. **Add real project photos/videos** — set the `image` path or `youtubeId` field
   per project in `data/projects.js`. Projects without either still render fine
   with a placeholder graphic — nothing looks broken either way.
5. **Set up Google Reviews (optional)** — see the note above
   `GOOGLE_REVIEWS_NOTE` in `site-config.js` for two setup paths.
6. **Replace stats with real numbers** — anything written as `[Add count]+` in
   `index.html` is a placeholder, not a real claim. Search for `[Add` to find them all.

## About the "no-code admin panel" question

A true non-technical admin panel on GitHub Pages needs a small backend for
authentication (e.g. Decap CMS with a GitHub OAuth app) — it's doable, but is
its own separate setup outside of static files. Since you said you're comfortable
editing files directly, this build skips it for now; the data files above are
structured to make manual edits as low-friction as possible. Happy to set up
Decap CMS later if you'd rather have a form-based editor.

## Deploying to GitHub Pages with your domain

You mentioned you'll ask for help with this separately — when you're ready:
1. Push this folder to a GitHub repo.
2. In repo Settings → Pages, set the source branch.
3. The `CNAME` file already points to `budhiotsolutions.com` — you'll need to
   add the matching DNS records at your domain registrar (A/ALIAS + CNAME per
   GitHub's custom domain docs).

## Testing local server

Because `data/*.js` and `js/site-config.js` are loaded as plain `<script src>`
tags (not `fetch`), you can open `index.html` directly in a browser — including
on a tablet/phone — with no local server required.

## Testing YouTube video embeds specifically

Everything on this site works fine opened directly from a file (`file://`) —
**except the "Watch demo" video embeds.** YouTube's player requires the page
embedding it to have a real web origin (`http://` or `https://`), which a
locally opened file doesn't have. If you test a video and see **"Error 153 /
Video player configuration error,"** that's this — not a bug in the project
data or code.

To actually test video playback before your domain is live, get the folder
onto any real http(s) URL. Two fast, free options that need no setup:
- **Netlify Drop** (drop.netlify.com) — drag the whole project folder onto
  the page, get an instant live URL. No account required for a quick test.
- **GitHub Pages** — if you're already pushing the repo, video embeds will
  just work once Pages is live, no extra step needed.

Also double check on the video itself: "Allow embedding" must be turned on
in YouTube Studio's advanced settings, and the video can't be set to Private
(Unlisted or Public both work).
