# Specification

## Summary
**Goal:** Prevent repeated dialogue/panel lines in generated comic content, clearly indicate repetition removal in the UI, and apply a consistent comic-inspired frontend theme.

**Planned changes:**
- Add a deduplication step that removes repeated identical lines while preserving the first occurrence and original order, including back-to-back duplicates.
- Apply deduplication consistently to both main scene panels and credits panels (when credits are generated from a list of lines).
- Add an English, user-facing indication (label and/or toggle) that repetition removal is active.
- Implement a coherent comic-inspired visual theme (colors, typography, spacing, panel styling) across the frontend, avoiding blue/purple as the primary palette.

**User-visible outcome:** Generated comics (including credits) no longer show duplicate dialogue/panel lines, users can see that repetition removal is active, and the app has a consistent comic-style look and feel.
