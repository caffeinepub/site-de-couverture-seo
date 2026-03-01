# Specification

## Summary
**Goal:** Remove all references to the draft subdomain URL and ensure every SEO-related file points exclusively to the production domain `https://verdiercouverture.fr`.

**Planned changes:**
- Replace all occurrences of `https://everyday-silver-qev-draft.caffeine.xyz` with `https://verdiercouverture.fr` in `frontend/index.html` (canonical link, Open Graph `og:url`, Twitter Card url, and JSON-LD structured data)
- Update `frontend/public/sitemap.xml` to list only `https://verdiercouverture.fr/` as the canonical URL
- Update `frontend/public/robots.txt` Sitemap directive to point to `https://verdiercouverture.fr/sitemap.xml`
- Verify no draft-domain references remain in any component files or the Google Site Verification file

**User-visible outcome:** Google Search Console will no longer report a disallowed origin error for the draft subdomain, and all SEO metadata consistently references the production domain.
