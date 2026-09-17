/* ============================================================
   WORK GALLERY DATA
   ------------------------------------------------------------
   Small images for the auto-scrolling strip that sits just above
   the Reviews section — quick, informal snapshots of the work
   (builds, site visits, workshops, demo days, etc.), separate
   from the full case studies in data/projects.js.

   HOW TO ADD AN IMAGE:
   1. Copy one { ... } block, edit the fields, keep the commas.
   2. "image" is a path to the image file, e.g. "assets/gallery/g01.jpg"
      Leave as "" if you don't have the photo yet — the tile will
      show a small placeholder graphic instead, same as elsewhere
      on the site, so nothing looks broken either way.
   3. "alt" is accessibility/SEO text only — nothing is shown on
      the tile itself (no captions), per how this strip is designed.

   Turn the whole strip on/off with SHOW_WORK_GALLERY in
   js/site-config.js — no need to touch this file to hide it.
   ============================================================ */

const GALLERY_IMAGES = [
  { id: "g001", image: "", alt: "Workshop session in progress" },
  { id: "g002", image: "", alt: "Prototype board close-up" },
  { id: "g003", image: "", alt: "Field deployment" },
  { id: "g004", image: "", alt: "Sensor assembly on the bench" },
  { id: "g005", image: "", alt: "Client site visit" },
  { id: "g006", image: "", alt: "Demo day with students" },
  { id: "g007", image: "", alt: "Enclosure and wiring detail" },
  { id: "g008", image: "", alt: "Testing under field conditions" }
];
