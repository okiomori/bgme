Original prompt: отлично теперь заполни все недостающие окошки следуй инструкии и вдозновляйся папкой референсы

- Added data-driven journal, shop, and menu flows.
- Wired top resources to quest route rewards and shop purchases.
- Added keyboard navigation for screens 4/5/6 and kept arrows for party heroes.
- Added render_game_to_text and advanceTime(ms) for automated UI checks.
- Added desktop-first layout pass for 1080p, 1440p, and wider PC monitors.
- Fixed rail-button desktop alignment and reworked portrait silhouettes to read more like characters.
- Added a full tactical battle screen with queue, target selection, skill bar, combat log, and route-linked encounter setup.
- Added a player-facing guide document in docs/game-guide.md.
- TODO: connect route nodes to real combat encounters and post-battle rewards.
- TODO: add save/load so menu state persists across sessions.

- 2026-03-21: added a full desktop title flow with `new run`, `continue`, and guide access.
- 2026-03-21: wired real `results`, `chapter complete`, and `ending` screens into the game loop.
- 2026-03-21: connected battle rewards to shared material inventory and hero upgrades.
- 2026-03-21: added quest unlock rules for campaign progression: `story -> gathering -> raid -> event`.
- 2026-03-21: made hero upgrades spend real resources and affect future battle stats.
- 2026-03-21: verified the complete campaign in Playwright from a fresh save to the ending screen.
- 2026-03-21: captured fresh desktop verification images:
  - `output/final-title.png`
  - `output/final-results.png`
  - `output/final-chapter.png`
  - `output/final-ending.png`
  - `output/final-party-upgrade.png`
- 2026-03-21: note about tooling: the bundled `develop-web-game` client still captures only the ambient canvas in its PNG output for this project, so visual verification was done with direct Playwright screenshots in addition to the required client run.
- 2026-03-21: synced the title-screen `Continue` state with actual save presence so a clean boot no longer claims there is a save when there is not.
- Current status: the vertical slice is now fully finishable as a Steam-style demo loop.
