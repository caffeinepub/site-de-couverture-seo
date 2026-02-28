# Specification

## Summary
**Goal:** Improve page load performance by optimizing First Contentful Paint (FCP) and Largest Contentful Paint (LCP) through HTML-level loading strategy changes.

**Planned changes:**
- Add `preconnect` hints for Google Fonts and convert the Fonts stylesheet to load asynchronously with a `<noscript>` fallback in `index.html`
- Add `<link rel='preload' as='image'>` for the hero background image early in `<head>` of `index.html`
- Convert the hero background to an `<img>` tag with `loading='eager'` and `fetchpriority='high'` in `Hero.tsx`
- Add `loading='lazy'` to all below-the-fold images in `Services.tsx`, `About.tsx`, `Testimonials.tsx`, and `Footer.tsx`
- Inline critical above-the-fold CSS (hero, navigation, color variables) in a `<style>` block in `index.html`
- Add `dns-prefetch` hint for `fonts.googleapis.com` and ensure `<html lang='fr'>` is set in `index.html`

**User-visible outcome:** The page loads and displays above-the-fold content faster, with the hero image appearing sooner and off-screen images not blocking initial load. No visual changes to the site.
