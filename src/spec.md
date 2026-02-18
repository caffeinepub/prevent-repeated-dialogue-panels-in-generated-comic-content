# Specification

## Summary
**Goal:** Fix the Radix/Shadcn Select runtime crash while keeping the existing comic viewer intact and updating Aaron’s character appearance.

**Planned changes:**
- Audit all Select components and replace any `<SelectItem value="">` usage with a non-empty sentinel value while keeping the “Default/None” meaning and default-voice behavior.
- Ensure the comic viewer and characters gallery still render all existing content (panels and character tiles) after the crash fix.
- Update Aaron’s character artwork to depict dark skin and short/visible hair, and ensure the gallery references the updated asset.

**User-visible outcome:** The app loads without the Radix Select crash, the comic panels and characters gallery still display as before, and Aaron’s character tile shows him as a Black character with a bit of hair.
