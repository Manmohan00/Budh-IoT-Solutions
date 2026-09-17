/* ============================================================
   BLOG DATA
   ------------------------------------------------------------
   HOW TO ADD A NEW POST:
   1. Copy one { ... } block, edit the fields.
   2. "url" can point to:
      - an internal page you create (e.g. "blog/my-post.html" —
        duplicate blog/sample-post.html as a starting template), or
      - an external post (Medium, LinkedIn Articles, etc.) if you'd
        rather write there and just link out from here.
   To remove the whole Blog section + nav link site-wide, set
   SHOW_BLOG to false in js/site-config.js — no need to touch this file.
   ============================================================ */

const BLOG_POSTS = [
  {
    id: "b001",
    title: "What makes an IoT idea actually worth building",
    date: "2026-01-15",
    excerpt: "A short framework for separating IoT ideas that are genuinely worth prototyping from ones that sound good in a pitch meeting.",
    url: "blog/sample-post.html"
  },
  {
    id: "b002",
    title: "Running a hands-on IoT workshop for 60 students",
    date: "2025-11-02",
    excerpt: "Notes on structuring a one-day workshop so every student leaves with something that actually blinks, moves, or sends data.",
    url: "#"
  },
  {
    id: "b003",
    title: "Choosing between BLE, LoRa and cellular for a new project",
    date: "2025-09-20",
    excerpt: "A plain-language walkthrough of how to pick a connectivity option based on range, power budget and cost — not hype.",
    url: "#"
  }
];
