---
description: "Use when creating or polishing BGME character art prompts, portrait staging, hero card presentation, portrait fallback behavior, and real-asset integration in UI and docs."
name: "BGME Character Art Pipeline"
applyTo: "src/**/*.js, styles.css, index.html, art/prompts/**/*.txt, docs/character-art-prompts.md, docs/local-art-setup.md"
---
# BGME Character Art Pipeline Rules

## Goal

Increase hero presentation quality by prioritizing real character illustrations while keeping the UI honest and production-ready when assets are missing.

## Asset Priority

- Real hero illustration always wins over procedural silhouette treatment.
- If a hero has a real image, make that image the primary focal layer in portrait and related cards.
- If a hero has no real image yet, use a restrained fallback stage that does not pretend to be final art.

## Fallback Integrity

- Never fake missing hero art with over-polished placeholder layers presented as final quality.
- Keep placeholder staging visibly secondary: lower emphasis, less contrast, smaller narrative weight.
- Do not copy one hero image for another hero as a temporary shortcut.

## Composition Standards

- Keep silhouette readable at capsule and mid-size scale.
- Ensure face or core focal area stays clear under overlays and effects.
- Avoid over-blur, over-bloom, and heavy fog that hides anatomy and costume read.
- Use framing that supports desktop Steam thumbnails and full-size panel views.

## Prompt and Art-Doc Standards

- Prompts must be specific about silhouette, material language, lighting, and constraints.
- Negative prompts must explicitly block low-quality artifacts and generic mobile-gacha look.
- Keep style references as quality direction only; never request direct imitation of another game's IP.
- Align prompts and docs with BGME tone: moss-gothic, lived materials, quiet sacred tension.

## UI Integration Standards

- In portrait components, real art should be the main readable layer.
- Overlay cards and glass panels must not cover key facial zones by default.
- When art exists, reduce procedural placeholder intensity automatically.
- Preserve legibility of name, epithet, and role without competing with the artwork.

## Production Workflow

- Prefer incremental pipeline: portrait bust -> waist-up concept -> full body -> expression variant -> key art export.
- Record prompt decisions in docs when visual direction changes materially.
- Keep file naming consistent and deterministic for easy binding in UI.

## Validation Checklist

After character presentation edits:

- Verify no broken image links for hero assets.
- Verify portrait panels remain readable in desktop layout.
- Verify fallback behavior still works for heroes without art.
- Verify no gameplay or navigation regressions from presentation updates.