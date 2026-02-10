# Specification

## Summary
**Goal:** Render a true comic-reading experience by moving from string-only script content to a structured panel model and updating the UI to display distinct comic parts with consistent comic styling and color.

**Planned changes:**
- Replace the current story/credits string data with a structured array of comic panel objects (including panel type/kind and explicit fields for caption/narration, dialogue (speaker + text), and/or SFX).
- Update ComicViewer to render framed comic panels and distinct comic elements (caption boxes, speech bubbles, thought bubbles where present, SFX text) using a coherent, deliberate color scheme that remains readable in light and dark mode.
- Render credits using the same structured panel model rather than a plain string list.
- Keep the existing repetition-removal toggle working by deduplicating repeated text lines within panel parts (caption/dialogue/SFX) while preserving panel order.
- Update top-level UI labels so the experience is described as a comic viewer rather than a script/transcript viewer, keeping all user-facing text in English.

**User-visible outcome:** Users see an in-app comic viewer that displays actual comic-style panels with clearly differentiated parts (captions, bubbles, SFX) and consistent color styling; credits still appear; and the repetition-removal toggle continues to work without breaking rendering.
