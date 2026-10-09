# Ayesha — Portfolio

Personal portfolio site built to support a fully-funded scholarship application in Europe.
Static HTML/CSS/JS — no build step, no dependencies, no framework. Open `index.html` in a
browser or serve the folder with any static file server.

## Pages

| File                  | Purpose                                                              |
|------------------------|-----------------------------------------------------------------------|
| `index.html`           | Home — intro, experience, education, skills, highlight links out     |
| `projects.html`        | All 14 university projects, in a fixed display order                 |
| `fyp.html`              | Final Year Project deep-dive — EmoCare                                |
| `mental-health.html`   | Dedicated page for mental-health-tech work (FYP, exhibition, award, research paper) |

Pages cross-link via buttons: Home → FYP / Mental Health Tech / Research, Projects → FYP,
Mental Health Tech → FYP.

## Folder structure

```
Portfolio/
├── index.html
├── projects.html
├── fyp.html
├── mental-health.html
│
├── css/
│   ├── variables.css     → design tokens (color, type, spacing)
│   ├── base.css           → resets, typography, page shell
│   ├── components.css     → nav rail, buttons, badges, cards, lightbox
│   └── pages.css          → page-specific layout
│
├── js/
│   ├── nav.js              → mobile nav toggle + active-tab highlighting
│   └── lightbox.js         → click-to-enlarge image behavior
│
├── assets/
│   ├── images/
│   │   ├── profile/        → home page photo
│   │   ├── projects/       → one image per project (01–14)
│   │   ├── mental-health/  → FYP exhibition photo, science fair award photo, overview image
│   │   ├── research-paper/ → optional paper preview image
│   │   └── awards/         → NASA certificate (reused on Projects + Awards)
│   └── icons/
│       └── favicon.png
│
└── README.md
```

## Design system

Two accent colors carry meaning across every page:

- **Teal (`#1F6B68`)** — engineering / systems / technical work
- **Garnet (`#8E3B46`)** — mental-health / human-centered work

Typefaces: **Space Grotesk** (headings, nav, UI), **Source Serif 4** (body text),
**IBM Plex Mono** (tech-stack chips and the research citation block only — reserved for
genuinely technical/literal content, not decoration).

Full token reference lives in `css/variables.css`.

## Required `<head>` on every page

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<link rel="icon" href="assets/icons/favicon.png" type="image/png">

<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages.css">
```

## Required scripts before `</body>` on every page

```html
<!-- Lightbox markup — once per page -->
<div class="lightbox" id="lightbox">
  <button class="lightbox__close" id="lightboxClose">Close</button>
  <img id="lightboxImg" src="" alt="">
</div>

<script src="js/nav.js"></script>
<script src="js/lightbox.js"></script>
```

## Image checklist

- [ ] `assets/images/profile/` — your photo for the Home page
- [ ] `assets/images/projects/01-emocare.jpg` ... `14-employee-management.jpg`
- [ ] `assets/images/mental-health/fyp-exhibition-top10.jpg`
- [ ] `assets/images/mental-health/science-fair-award.jpg`
- [ ] `assets/images/awards/nasa-certificate.jpg` (used on Projects page + Mental Health/Awards section)
- [ ] `assets/images/research-paper/emocare-paper-preview.jpg` (optional)

## Status

- [x] Design system (`css/`)
- [x] Shared behavior (`js/`)
- [ ] `index.html`
- [ ] `projects.html`
- [ ] `fyp.html`
- [ ] `mental-health.html`