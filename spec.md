# Specification

## Summary
**Goal:** Fix the Google Rich Results structured data error "Champ itemReviewed manquant" in the JSON-LD block of `frontend/index.html`.

**Planned changes:**
- Add an `itemReviewed` property to each `Review` object inside the `review` array of the `LocalBusiness` JSON-LD schema, referencing `{ "@type": "LocalBusiness", "name": "VERDIER COUVERTURE" }`
- Ensure `AggregateRating` remains correctly nested inside the `LocalBusiness` entity

**User-visible outcome:** The structured data passes Google's Rich Results Test without the "itemReviewed missing" error, improving SEO validation with no visible change to the page content.
