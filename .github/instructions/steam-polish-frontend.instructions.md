---
description: "Use when polishing BGME frontend screens, typography, spacing, battle spectacle, character presentation, Steam-quality UI direction, atmospheric copy, and visual implementation in HTML/CSS/JS without breaking gameplay flows."
name: "BGME Steam Polish Frontend"
applyTo: "index.html, styles.css, src/**/*.js, docs/**/*.md"
---
# BGME Steam Polish Frontend Rules

## Primary Goal

Ship visual improvements that feel premium for a desktop-first Steam audience while preserving playability and flow continuity.

## Hard Priorities

- Prefer implementation over abstract advice when the task is clearly executable.
- Keep screens working after each visual pass.
- Raise visual quality through composition, hierarchy, material feel, motion, and readability.
- Preserve BGME tone: moss-gothic, quiet sacred tension, living ruins, restrained color accents.

## Text-Heavy Screen Rules

Apply strongly to journal, results, chapter, ending, and other narrative-heavy screens.

- Increase readability first: line-height, paragraph rhythm, and heading contrast.
- Build clear visual rhythm: consistent spacing tiers for title, lead, body, cards, and actions.
- Avoid dense text walls and cramped card interiors.
- Keep atmospheric writing concise and specific, not verbose.
- Use premium restraint: fewer, stronger typographic accents instead of many weak decorations.

## Battle Spectacle Rules

For battle scene upgrades, include spectacle that improves clarity and impact.

- Add layered battle feedback, not only hover polish.
- Use impact rings, directional telegraph cones, and richer enemy intent presentation where appropriate.
- Keep telegraphs readable under motion and blur.
- Ensure spectacle supports tactical readability, not visual noise.
- Avoid breaking target selection, turn order, or action commit flows.

## Character Presentation Rules

- Prefer real hero illustrations over placeholder-like silhouettes whenever assets exist.
- If a hero has no real art yet, keep placeholder treatment secondary and clearly subordinate to real-asset presentation.
- Do not fake missing assets; degrade gracefully with strong framing and material staging.
- Keep silhouette clarity strong at thumbnail and mid-size scales.

## Quality Guardrails

- Do not introduce generic mobile-gacha look.
- Do not copy other game IP; use high-end references only as quality benchmarks.
- Do not redesign core mechanics unless required for presentation integrity.
- Do not ship a pass without basic validation of affected frontend logic.

## Validation Expectations

After meaningful edits in frontend files:

- Run syntax checks for modified JS.
- Check for editor-reported errors in touched files.
- Confirm no obvious regressions in main screen transitions and battle interactions.