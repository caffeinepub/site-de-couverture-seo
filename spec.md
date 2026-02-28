# Specification

## Summary
**Goal:** Update testimonial dates to span realistically through January 2026 and replace service card icon placeholders with dedicated illustrative photos.

**Planned changes:**
- Update all testimonial dates in `Testimonials.tsx` so they are distributed across 2025 and early 2026, with at least one dated January 2026, keeping all other review content unchanged
- Replace the icon/square placeholder in each of the six service cards in `Services.tsx` with a dedicated photo image loaded from `frontend/public/assets/generated`, with French alt attributes and responsive `object-cover` sizing

**User-visible outcome:** Testimonials now show recent dates up to January 2026, and each service card displays a relevant illustrative photo instead of a generic icon placeholder.
