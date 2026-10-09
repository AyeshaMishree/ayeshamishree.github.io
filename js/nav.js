/* ============================================================
   NAV.JS — mobile nav toggle + active-tab highlighting (v2: top navbar)
   Include on every page, after the .navbar markup.

   Expected markup:
   <header class="navbar">
     <div class="navbar__inner">
       <a class="navbar__brand" href="index.html">Ayesha<span>.</span></a>
       <button class="navbar__toggle" id="menuToggle" aria-expanded="false" aria-controls="navMenu">
         <span></span><span></span><span></span>
       </button>
       <nav class="navbar__menu" id="navMenu" aria-label="Primary">
         <a class="navbar__link" href="index.html">Home</a>
         <a class="navbar__link" href="projects.html">Projects</a>
         <a class="navbar__link" href="fyp.html">FYP</a>
         <a class="navbar__link" href="mental-health.html">Mental Health Tech</a>
       </nav>
     </div>
   </header>
   ============================================================ */

(function () {
  'use strict';

  /* ---- Active-tab highlighting ---- */
  function setActiveLink() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.navbar__link');

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var isActive = href === current || (current === '' && href === 'index.html');

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ---- Mobile nav toggle ---- */
  function initMobileToggle() {
    var toggle = document.getElementById('menuToggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close the dropdown after choosing a page */
    document.querySelectorAll('.navbar__menu .navbar__link').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Escape key closes it too */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveLink();
    initMobileToggle();
  });
})();