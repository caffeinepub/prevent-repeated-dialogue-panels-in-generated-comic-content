# Specification

## Summary
**Goal:** Improve story narration by removing explicit speaker labels, adding per-character voice selection for TTS playback, and updating Miles’ visual description in panel metadata.

**Planned changes:**
- Update narration script generation so dialogue and thoughts are narrated naturally without prepending speaker labels (e.g., avoid “Miles says:” / “Miles thinks:”).
- Add “Voice Style” controls in the Story Narration area to choose TTS voices for Miles, Jefferson, and a default for all other characters (with rate/pitch controls if supported), and apply them on playback without requiring reload.
- Update the first story panel illustration alt text to explicitly describe Miles as Black with curly hair, without removing or altering existing dialogue content.

**User-visible outcome:** Narration plays without “X says/thinks” labels, users can select distinct system/browser TTS voices for Miles and Jefferson (plus a default for others), and the opening panel alt text reflects Miles as Black with curly hair while the story dialogue remains intact.
