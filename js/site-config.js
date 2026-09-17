/* ============================================================
   BUDH IoT SOLUTIONS — SITE CONFIG
   ------------------------------------------------------------
   Flip these switches to turn whole sections on/off without
   touching any HTML/CSS. true = show, false = hide.
   ============================================================ */

const SITE_CONFIG = {

  // ---- Contact details (placeholders — fill in when ready) ----
  EMAIL: "hello@budhiotsolutions.com",

  // WhatsApp: leave WHATSAPP_NUMBER empty ("") to auto-hide the
  // floating WhatsApp button, even if SHOW_WHATSAPP is true.
  // Use full international format, no + or spaces, e.g. "919812345678"
  SHOW_WHATSAPP: true,
  WHATSAPP_NUMBER: "7756070589",

  // ---- Section toggles ----
  SHOW_BLOG: true,
  SHOW_COURSES_SERVICE: true,     // the Python/IoT courses service card
  SHOW_EMBEDDED_REVIEWS: true,    // reviews from data/reviews.js
  SHOW_WORK_GALLERY: true,        // small auto-scrolling image strip from data/gallery.js

  // ---- Promo banner ----
  // A big poster/banner image at the very top of the page, just under
  // the header, for promoting something time-limited (an offer, an
  // event, a workshop batch opening, etc.).
  // Set SHOW_PROMO_BANNER to false to hide it instantly — the block
  // stays in index.html so you can flip it back on any time, or you
  // can delete/comment out the <!-- PROMO BANNER --> block in
  // index.html by hand if you'd rather remove it outright.
  SHOW_PROMO_BANNER: false,
  PROMO_BANNER_IMAGE: "assets/promo-banner.jpg",  // recommended wide image, e.g. 1600x500px
  PROMO_BANNER_ALT: "Featured announcement",
  PROMO_BANNER_LINK: "#contact",  // where clicking the banner goes; leave "" to make it non-clickable

  // ---- Forms ----
  // GitHub Pages can't process form submissions on its own — you need
  // a form backend. Formspree's free tier is the easiest to set up:
  //   1. Create a free account at formspree.io
  //   2. Create a form, copy the endpoint (looks like
  //      https://formspree.io/f/abc123xy)
  //   3. Paste it below, replacing the placeholder.
  // Until you do, the forms on this site will show a friendly
  // "email me directly" message instead of failing silently.
  FORM_ENDPOINT: "https://formspree.io/f/YOUR_FORM_ID",

  // ---- Projects list pagination ----
  PROJECTS_PER_PAGE: 6,

  // ---- Social links (leave "" to hide that icon in the footer) ----
  SOCIAL: {
    linkedin: "",
    instagram: "",
    youtube: "",
    twitter: "",
    github: ""
  }
};
