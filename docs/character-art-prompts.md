# Character Art Prompts

## Liora

Use case: `stylized-concept`

Asset type: full-body character key art

Primary request:
Full-body key art of Liora, the moss guide of a Steam-first tactical party RPG.

Prompt:
```text
Full-body key art of Liora, the moss guide of a Steam-first tactical party RPG. Tall slender adult fantasy heroine with long luminous silver-white hair, a calm but memorable silhouette, layered parchment robes with enclosed shoulders and covered chest, dew-colored enamel accents, restrained moss only on garments and ornaments, thin stained-gold trims, one hand holding a small lumen light forward, a subtle circular navigation halo behind her back. Premium painterly anime fantasy character illustration, high-end JRPG concept art, elegant and melancholic, grounded anatomy, dry material rendering, not 3D, not vector, not chibi. Single character only on a minimal neutral backdrop with a faint mossy ruined arch aura, entire figure visible from head to feet, clean silhouette readable at thumbnail size.
```

Structured art direction:
- Scene: minimal neutral backdrop with a faint mossy ruined arch aura
- Subject: single full-body heroine, Liora, moss guide, luminous silver-white hair, parchment and moss materials, soft halo ring
- Style: premium painterly anime fantasy character illustration, high-end JRPG concept art
- Composition: vertical full-body portrait, centered, three-quarter pose, entire figure visible, strong silhouette readability
- Lighting: soft sacred forest light with pale green and ivory glow, restrained atmospheric bloom
- Palette: bone ivory, dew teal, moss green, night charcoal, subtle gold
- Materials: parchment fabric, stained enamel, glowing moss, fine gold filigree, translucent cloth layers
- Constraints: single character only; no UI; no text; no watermark; no extra props except small lumen light and subtle halo ring; elegant, memorable silhouette; visible hands and feet; covered shoulders and covered chest; mature facial proportions
- Negative: mobile game UI, clutter, extra characters, cropped figure, cut off feet, ugly hands, 3D render, toy look, flat vector, sci-fi armor, modern fashion, doll face, wet glossy skin, liquid-body effect, exposed torso

Current guardrail for Liora busts:
- Avoid porcelain-doll face, wet skin, tear-like facial droplets, marine-nymph reading, and exposed upper torso.
- Prefer quiet sacred guide over ethereal waif design.

Recommended output:
- Size: `1024x1536`
- Quality: `high`
- Format: `png`

## Expansion Packs (Characters + Locations)

Added prompt packs for generating additional BGME-style content without copying existing game IP.

Files:
- `art/prompts/characters-ruins-pack.json`
- `art/prompts/locations-ruins-pack.json`
- `art/prompts/ruins-negative.txt`

How to use quickly:
1. Pick one entry from `heroes` or `locations`.
2. Use `prompt` as primary input and append negatives from `ruins-negative.txt`.
3. Keep default sizes:
	- Characters: `1024x1536`
	- Locations: `1536x1024`
4. Preserve BGME visual laws: moss-gothic palette, readable silhouette, restrained glow, no UI overlays.

Pack goals:
- New hero archetypes with clear silhouette/material/emotion laws.
- New explorable ruins and encounter spaces with strong depth and atmosphere.
