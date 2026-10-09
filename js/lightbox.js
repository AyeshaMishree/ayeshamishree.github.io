/* ============================================================
   LIGHTBOX.JS — click-to-enlarge image behavior
   Include on every page that shows framed images.

   1. Add this markup once, right before </body>:
      <div class="lightbox" id="lightbox">
        <button class="lightbox__close" id="lightboxClose">Close</button>
        <img id="lightboxImg" src="" alt="">
      </div>

   2. Any image you want click-to-enlarge should sit inside a
      frame element using one of these classes (already styled
      with cursor: zoom-in in components.css / pages.css):
        .project-card__media
        .detail-hero__media
        .media-row__item
      ...or tag any custom element with data-lightbox="true".
   ============================================================ */

(function () {
  'use strict';

  var TRIGGER_SELECTOR =
    '.project-card__media, .detail-hero__media, .media-row__item, [data-lightbox="true"]';

  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var closeBtn = document.getElementById('lightboxClose');

    if (!lightbox || !lightboxImg) return; /* markup not present on this page */

    var lastFocused = null;

    function openLightbox(img) {
      lastFocused = document.activeElement;
      lightboxImg.src = img.getAttribute('src');
      lightboxImg.alt = img.getAttribute('alt') || '';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    }

    /* Open on click of any framed image's trigger container */
    document.querySelectorAll(TRIGGER_SELECTOR).forEach(function (frame) {
      var img = frame.tagName === 'IMG' ? frame : frame.querySelector('img');
      if (!img) return;

      frame.setAttribute('tabindex', '0');
      frame.setAttribute('role', 'button');
      frame.setAttribute('aria-label', 'Enlarge image: ' + (img.getAttribute('alt') || 'image'));

      frame.addEventListener('click', function () {
        openLightbox(img);
      });

      frame.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img);
        }
      });
    });

    /* Close on button click, backdrop click, or Escape */
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initLightbox);
})();