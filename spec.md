# Specification

## Summary
**Goal:** Fix all 4xx errors blocking page indexation in Google Search Console for the Verdier Couverture website.

**Planned changes:**
- Audit and fix all frontend navigation links, CTA buttons, and anchor scroll targets to ensure they resolve correctly without 4xx errors
- Verify and correct `sitemap.xml` so it only references valid, reachable URLs, and update the `lastmod` date to 2025-07-28 or later
- Verify `robots.txt` does not disallow key pages and that the sitemap URL referenced within it is correct
- Ensure the Google Search Console verification file (`google2ea9c3e7d5d4abde.html`) is publicly accessible at the root without authentication or redirects
- Align all canonical URLs in `<link rel="canonical">`, Open Graph tags, Twitter Card meta tags, and JSON-LD structured data to use a consistent `https` production domain with no trailing slash mismatches

**User-visible outcome:** All pages of the site return 2xx responses, Google Search Console can successfully crawl and index the site without 4xx blocking errors, and the verification file is accessible for domain ownership confirmation.
