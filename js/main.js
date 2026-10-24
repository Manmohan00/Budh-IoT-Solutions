/* ============================================================
   BUDH IoT SOLUTIONS — MAIN SITE SCRIPT
   Loads after site-config.js and the data/*.js files.
   ============================================================ */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hides every nav link matching `selector` (header nav items have no
  // wrapping <li>; footer nav items do — hide the <li> there so no empty
  // row is left behind in the list).
  function hideNavLinks(selector) {
    document.querySelectorAll(selector).forEach(link => {
      const li = link.closest("li");
      (li || link).style.display = "none";
    });
  }

  const ICONS = {
    star: '<svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.3 1.2 6.1L10 15.1l-5.4 3.1 1.2-6.1L1.3 7.8l6.1-.7z"/></svg>',
    play: '<svg viewBox="0 0 20 20"><path d="M6 4l10 6-10 6z"/></svg>',
    check: '<svg viewBox="0 0 20 20"><path d="M4 10.5l3.5 3.5L16 5"/></svg>',
    chip: '<svg viewBox="0 0 48 48"><rect x="14" y="14" width="20" height="20" rx="2"/><path d="M14 20H6M14 28H6M42 20h-8M42 28h-8M20 14V6M28 14V6M20 42v-8M28 42v-8"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.32h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9v-12z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.4 3.6 12 3.6 12 3.6h0s-4.4 0-7.7.3c-.5.1-1.5.1-2.4 1C1.2 5.6 1 7.2 1 7.2S.8 9 .8 10.9v1.9c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.4 0 7.7-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.9c0-1.9-.2-3.7-.2-3.7zM9.7 14.9V8.7l6 3.1z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.4c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.2 8.2 0 012 18.4a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.5 1 2.6 0 3.8-2.4 4.6-4.6 4.9.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0012 2z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 9h3V5.5h-3c-2.2 0-4 1.8-4 4V12H7.5v3.5H10V22h3.5v-6.5H16l.5-3.5h-3V9.5c0-.3.2-.5.5-.5z"/></svg>',
    googleMaps: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2C9.6 21 3 14.4 3 6a2 2 0 011-2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>'
  };

  /* ============================================================
     NAV TOGGLE (mobile)
     ============================================================ */
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    siteNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }));
  }

  /* ============================================================
     COOKIE CONSENT
     ============================================================ */
  const CONSENT_KEY = "bis_cookie_consent"; // "accepted" | "declined"
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAccept = document.getElementById("cookieAccept");
  const cookieDecline = document.getElementById("cookieDecline");

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* ignore */ }
    document.dispatchEvent(new CustomEvent("bis:consent-changed", { detail: value }));
  }

  if (cookieBanner) {
    if (!getConsent()) cookieBanner.classList.add("is-visible");
    cookieAccept && cookieAccept.addEventListener("click", () => {
      setConsent("accepted");
      cookieBanner.classList.remove("is-visible");
    });
    cookieDecline && cookieDecline.addEventListener("click", () => {
      setConsent("declined");
      cookieBanner.classList.remove("is-visible");
    });
  }

  function hasVideoConsent() {
    return getConsent() === "accepted";
  }

  const reviewCookieChoice = document.getElementById("reviewCookieChoice");
  if (reviewCookieChoice && cookieBanner) {
    reviewCookieChoice.addEventListener("click", (e) => {
      e.preventDefault();
      cookieBanner.classList.add("is-visible");
    });
  }

  /* ============================================================
     BACK TO TOP
     ============================================================ */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 600);
    });
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  /* ============================================================
     WHATSAPP FLOAT
     ============================================================ */
  const waFloat = document.getElementById("whatsappFloat");
  const waNum = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.WHATSAPP_NUMBER) || "";
  const waShow = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.SHOW_WHATSAPP) && waNum.trim() !== "";
  const waLink = `https://wa.me/${waNum}?text=${encodeURIComponent("Hi Budh IoT Solutions, I'd like to talk about a project.")}`;

  if (waFloat) {
    if (waShow) {
      waFloat.href = waLink;
      waFloat.style.display = "flex";
    } else {
      waFloat.style.display = "none";
    }
  }

  // Contact-card WhatsApp line: once a number is actually configured,
  // swap the "once enabled in site-config.js" placeholder for a real,
  // clickable WhatsApp link instead — same condition as the float button.
  const contactWhatsappText = document.getElementById("contactWhatsappText");
  if (contactWhatsappText && waShow) {
    contactWhatsappText.innerHTML =
      `<a href="${waLink}" target="_blank" rel="noopener">Chat with us on WhatsApp</a>`;
    contactWhatsappText.style.color = "";
  }

  /* ============================================================
     PROMO BANNER (config-driven, image + optional link)
     ============================================================ */
  const promoBanner = document.getElementById("promoBanner");
  const promoBannerImg = document.getElementById("promoBannerImg");
  if (promoBanner && promoBannerImg) {
    const show = typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.SHOW_PROMO_BANNER;
    if (show) {
      const link = (SITE_CONFIG.PROMO_BANNER_LINK || "").trim();
      if (link) {
        promoBanner.href = link;
        promoBanner.classList.remove("no-link");
      } else {
        promoBanner.removeAttribute("href");
        promoBanner.classList.add("no-link");
      }
      promoBannerImg.src = SITE_CONFIG.PROMO_BANNER_IMAGE || "";
      promoBannerImg.alt = SITE_CONFIG.PROMO_BANNER_ALT || "";
      promoBanner.style.display = "block";
    } else {
      promoBanner.style.display = "none";
    }
  }

  /* ============================================================
     FOOTER SOCIAL ICONS (config-driven)
     ============================================================ */
  function renderSocialLinks(containerId) {
    const wrap = document.getElementById(containerId);
    if (!wrap || typeof SITE_CONFIG === "undefined") return;
    const links = SITE_CONFIG.SOCIAL || {};
    const order = ["linkedin", "instagram", "facebook", "youtube", "twitter", "github", "googleMaps"];
    let html = "";
    order.forEach(key => {
      const entry = links[key];
      if (entry && entry.show && entry.url && entry.url.trim() !== "") {
        const label = key === "googleMaps" ? "Google Maps" : key;
        html += `<a href="${entry.url}" target="_blank" rel="noopener" aria-label="${label}">${ICONS[key]}</a>`;
      }
    });
    wrap.innerHTML = html;
    wrap.style.display = html ? "flex" : "none";
    // In the Contact card, an icon-less "Follow us" row would look like a
    // broken label — hide the whole row, not just the empty icon strip.
    if (!html) {
      const row = wrap.closest(".contact-row");
      if (row) row.style.display = "none";
    }
  }
  renderSocialLinks("footerSocial");
  renderSocialLinks("contactSocial");

  // CSS hides the trailing divider on the LAST .contact-row via
  // :last-child — but a hidden (display:none) "Follow us" row is still
  // the last DOM child, so the row above it would otherwise keep a
  // dangling divider with nothing after it. Move the "no divider"
  // treatment to whichever row is actually last and visible.
  document.querySelectorAll(".contact-info-card").forEach(card => {
    const rows = Array.from(card.querySelectorAll(":scope > .contact-row"));
    const visible = rows.filter(r => getComputedStyle(r).display !== "none");
    rows.forEach(r => r.style.borderBottom = "");
    const last = visible[visible.length - 1];
    if (last) last.style.borderBottom = "none";
  });

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  function initReveal(selectorList) {
    const els = document.querySelectorAll(selectorList);
    els.forEach(el => el.classList.add("reveal"));
    if (reduceMotion) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
  }

  /* ============================================================
     REVIEWS — horizontal scroll row of cards (drag/swipe/scroll).
     "Read more" appears only when a review is actually long enough
     to need it.
     ============================================================ */
  const reviewScroll = document.getElementById("reviewScroll");
  const reviewsSection = document.getElementById("reviewsSection");
  const reviewsOuter = document.getElementById("reviews");

  function starRow(rating) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
      html += i <= rating ? ICONS.star : ICONS.star.replace("<svg", '<svg class="empty"');
    }
    return `<div class="review-stars">${html}</div>`;
  }

  function reviewCardHTML(r) {
    return `
      <article class="card review-card">
        ${starRow(r.rating)}
        <p class="review-text">${r.text}</p>
        <button class="review-toggle" data-review-toggle>+ Read more</button>
        <div class="review-author">
          <div class="review-avatar">${r.initials}</div>
          <div>
            <div class="review-author-name">${r.name}</div>
            <div class="review-author-role">${r.role}</div>
          </div>
        </div>
      </article>`;
  }

  if (reviewScroll && typeof SITE_CONFIG !== "undefined") {
    if (SITE_CONFIG.SHOW_EMBEDDED_REVIEWS && typeof REVIEWS !== "undefined" && REVIEWS.length) {
      const setHTML = REVIEWS.map(reviewCardHTML).join("");

      function hideUnneededToggles() {
        reviewScroll.querySelectorAll(".review-card").forEach(card => {
          const textEl = card.querySelector(".review-text");
          const toggleEl = card.querySelector("[data-review-toggle]");
          if (toggleEl.dataset.measured) return;
          textEl.classList.add("is-expanded");
          const fullHeight = textEl.scrollHeight;
          textEl.classList.remove("is-expanded");
          const clampedHeight = textEl.clientHeight;
          if (fullHeight <= clampedHeight + 2) {
            toggleEl.style.visibility = "hidden";
          }
          toggleEl.dataset.measured = "1";
        });
      }

      let openCount = 0;
      reviewScroll.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-review-toggle]");
        if (!btn) return;
        const textEl = btn.previousElementSibling;
        const isOpen = textEl.classList.toggle("is-expanded");
        btn.textContent = isOpen ? "− Show less" : "+ Read more";
        openCount += isOpen ? 1 : -1;
      });

      if (reduceMotion) {
        reviewScroll.innerHTML = setHTML;
        requestAnimationFrame(hideUnneededToggles);
      } else {
        // Start with 2 copies (minimum for any seamless loop), then keep
        // adding more if the container's native max scroll distance
        // turns out to be shorter than one full set's width — otherwise,
        // with few reviews on a wide screen, the browser's own scroll
        // ceiling gets hit before the wrap-back point, and it just stops.
        reviewScroll.innerHTML = setHTML + setHTML;
        let copies = 2;

        requestAnimationFrame(() => {
          let oneSetWidth = reviewScroll.scrollWidth / copies;
          let maxScroll = reviewScroll.scrollWidth - reviewScroll.clientWidth;
          let guard = 0;
          while (maxScroll < oneSetWidth && guard < 8) {
            copies += 1;
            reviewScroll.insertAdjacentHTML("beforeend", setHTML);
            oneSetWidth = reviewScroll.scrollWidth / copies;
            maxScroll = reviewScroll.scrollWidth - reviewScroll.clientWidth;
            guard += 1;
          }

          hideUnneededToggles();

          // Continuous auto-scroll using the container's own native
          // scrollLeft (not a CSS transform), so the existing manual
          // scrollbar/drag/swipe keeps working exactly as before — this
          // just nudges it forward automatically when nobody's
          // interacting with it. Pauses on hover/touch and whenever a
          // card is expanded.
          let hovered = false;
          let lastTime = null;
          const pxPerSecond = 36;

          function tick(timestamp) {
            if (lastTime === null) lastTime = timestamp;
            const dt = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            if (!hovered && openCount === 0) {
              reviewScroll.scrollLeft += pxPerSecond * dt;
              if (reviewScroll.scrollLeft >= oneSetWidth) {
                reviewScroll.scrollLeft -= oneSetWidth;
              }
            }
            requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);

          reviewScroll.addEventListener("mouseenter", () => { hovered = true; });
          reviewScroll.addEventListener("mouseleave", () => { hovered = false; });
          reviewScroll.addEventListener("touchstart", () => { hovered = true; }, { passive: true });
          reviewScroll.addEventListener("touchend", () => { hovered = false; });
        });
      }

      initReveal("#reviewScroll .review-card");
    } else {
      reviewScroll.style.display = "none";
    }

    if (reviewsSection && !SITE_CONFIG.SHOW_EMBEDDED_REVIEWS) {
      // Hide the whole <section> (not just the inner wrap) — otherwise
      // the section's own top/bottom padding is left behind as a big
      // blank gap even with no visible content inside it.
      (reviewsOuter || reviewsSection).style.display = "none";
      hideNavLinks(".nav-reviews-link");
    }
  }


  /* ============================================================
     BLOG (toggle + render)
     ============================================================ */
  const blogSection = document.getElementById("blogSection");
  const blogOuter = document.getElementById("blog");
  const blogGrid = document.getElementById("blogGrid");

  if (typeof SITE_CONFIG !== "undefined" && !SITE_CONFIG.SHOW_BLOG) {
    // Hide the whole <section>, not just the inner wrap — same reasoning
    // as the reviews section above (section-level padding otherwise
    // survives as a blank gap).
    (blogOuter || blogSection) && ((blogOuter || blogSection).style.display = "none");
    hideNavLinks(".nav-blog-link");
  } else if (blogGrid && typeof BLOG_POSTS !== "undefined") {
    const fmt = d => new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    blogGrid.innerHTML = BLOG_POSTS.map(p => `
      <article class="card blog-card">
        <div class="blog-card-media"></div>
        <div class="blog-card-body">
          <span class="blog-date">${fmt(p.date)}</span>
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
          <a class="blog-readmore" href="${p.url}">Read post →</a>
        </div>
      </article>`).join("");
    initReveal("#blogGrid .blog-card");
  }

  /* ============================================================
     GENERAL REVEAL for static sections
     ============================================================ */
  initReveal(".process-step, .pillar-card, .section-head, .interest-strip");

  /* ============================================================
     CONTACT EMAIL PLACEHOLDER FILL-IN
     ============================================================ */
  document.querySelectorAll("[data-site-email]").forEach(el => {
    const email = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.EMAIL) || "hello@budhiotsolutions.com";
    if (el.tagName === "A") { el.href = `mailto:${email}`; el.textContent = email; }
    else el.textContent = email;
  });

})();