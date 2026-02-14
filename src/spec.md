# Specification

## Summary
**Goal:** Update existing comic panel assets so Miles Morales is clearly depicted as Black wherever shown, and ensure fight/action scenes render as dynamic comic-style illustrations; update corresponding alt text.

**Planned changes:**
- Edit existing `/assets/generated/spiderverse-panel-*.dim_1024x768.png` images to depict Miles Morales as Black in every panel where he appears (including partial/shadowed visibility), while keeping compositions and filenames unchanged.
- Edit existing fight/action panel images so they clearly read as comic-style action scenes (no blank/placeholder visuals) and continue to fit the Comic Viewer layout.
- Revise `illustrationAlt` strings in `frontend/src/lib/comicData.ts` for the updated Miles panels and fight/action panels to accurately describe the updated visuals in clear English.

**User-visible outcome:** The comic viewer shows updated panels where Miles is correctly depicted as Black and action scenes display proper comic-style fight illustrations, with accurate English alt text for those panels.
