# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Camber Racing website - a static HTML site for SRM IST's Formula Student combustion racing team. Built with vanilla HTML/CSS/JS using Bootstrap 4.4.1, jQuery, and supporting libraries (AOS, Swiper, Font Awesome, Vanilla Tilt).

## Development Setup

**Local server:** Use VSCode Live Server extension (configured on port 5501)
```powershell path=null start=null
# Install Live Server in VSCode, then right-click any HTML file → "Open with Live Server"
```

No build step or npm scripts are required - the site runs directly from HTML files.

## Architecture

### Shared Components (JavaScript-injected)
`res/js/header-footer.js` injects the navbar and footer into all pages via `<header>` and `<footer>` empty tags. This file also handles:
- Navbar scroll behavior (glass effect)
- Go-to-top button
- Dropdown hover behavior

### Page Structure
Each page follows this pattern:
- HTML file at root (e.g., `index.html`, `aboutus.html`)
- Corresponding CSS at `res/css/{page}.css`
- Page-specific JS at `res/js/{page}.js` (when needed)

### Cars Page Dynamic Routing
`cars.html` uses URL query parameters (`?car=CR18`) to render different car data. Car specifications are stored as JS objects in `res/js/cars.js`.

### CSS Organization
- `res/css/global.css` - Base styles, navbar, footer
- `res/css/landing.css` - Landing/banner sections (shared across pages)
- `res/css/{page}.css` - Page-specific styles

### Assets
- `res/img/` - Images organized by category (cars/, sponsors/, Team-Camber/, logos/)
- `res/fonts/` - Custom fonts (Roboto)
- `res/video/` - Video assets

## External Services
- **Formspree** (`formspree.io`) - Contact form submissions
- **Elfsight** - Instagram feed widget
- **Font Awesome** - Icons via kit script

## Conventions

- Use Bootstrap 4 utility classes for spacing/layout
- AOS (Animate on Scroll) for scroll animations: add `data-aos="fade-up"` attributes
- CSS class naming: `.camber-{element}` for branded elements, `.section-title` for headings
- New sponsor logos go in `res/img/sponsors/` and must be added to both the original and duplicated track sections in `index.html` for infinite scroll effect
