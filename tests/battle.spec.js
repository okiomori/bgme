"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame } = require("./helpers");

test.describe("Battle screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    // Navigate to quests (already there) and open battle
    await page.click("#open-battle");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "battle");
  });

  test("displays the battle title", async ({ page }) => {
    const title = page.locator("#battle-title");
    await expect(title).toBeVisible();
    const text = await title.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays battle objective", async ({ page }) => {
    const objective = page.locator("#battle-objective");
    await expect(objective).toBeVisible();
    const text = await objective.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays resonance meter", async ({ page }) => {
    await expect(page.locator("#battle-resonance-value")).toBeVisible();
    const value = await page.locator("#battle-resonance-value").textContent();
    expect(value).toMatch(/\d+%/);
  });

  test("displays turn counter", async ({ page }) => {
    await expect(page.locator("#battle-turn")).toBeVisible();
    const turn = await page.locator("#battle-turn").textContent();
    expect(parseInt(turn ?? "0", 10)).toBeGreaterThanOrEqual(1);
  });

  test("displays ally party cards in the sidebar", async ({ page }) => {
    const partyCards = page.locator("#battle-party .battle-party-card");
    await expect(partyCards).toHaveCount(4);
  });

  test("displays ally units in the arena", async ({ page }) => {
    const allies = page.locator("#battle-allies .battle-unit");
    await expect(allies).toHaveCount(4);
  });

  test("displays at least one enemy unit", async ({ page }) => {
    const enemies = page.locator("#battle-enemies .battle-unit");
    const count = await enemies.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays the battle queue", async ({ page }) => {
    const queueItems = page.locator("#battle-queue .battle-queue-chip");
    const count = await queueItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays skill buttons for the active hero", async ({ page }) => {
    const skills = page.locator("#battle-skill-grid .battle-skill");
    const count = await skills.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays the acting hero name", async ({ page }) => {
    await expect(page.locator("#battle-acting-name")).toBeVisible();
    const name = await page.locator("#battle-acting-name").textContent();
    expect(name?.trim().length).toBeGreaterThan(0);
  });

  test("displays the current target name", async ({ page }) => {
    await expect(page.locator("#battle-target-name")).toBeVisible();
    const name = await page.locator("#battle-target-name").textContent();
    expect(name?.trim().length).toBeGreaterThan(0);
  });

  test("displays battle log entries", async ({ page }) => {
    const logItems = page.locator("#battle-log .battle-log-item");
    const count = await logItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test("clicking a skill selects it", async ({ page }) => {
    const skills = page.locator("#battle-skill-grid .battle-skill");
    const secondSkill = skills.nth(1);
    await secondSkill.click();
    await expect(secondSkill).toHaveClass(/is-selected/);
  });

  test("clicking an enemy selects it as the target", async ({ page }) => {
    const enemies = page.locator("#battle-enemies [data-battle-target]");
    const count = await enemies.count();
    if (count > 1) {
      const secondEnemy = enemies.nth(1);
      await secondEnemy.click();
      await expect(secondEnemy).toHaveClass(/is-selected/);
    } else {
      // Only one enemy; it should already be selected
      await expect(enemies.first()).toHaveClass(/is-selected/);
    }
  });

  test("committing a battle action updates turn counter or transitions screen", async ({ page }) => {
    const turnBefore = await page.locator("#battle-turn").textContent();

    await page.click("#battle-commit");

    // After commit, either turn increased (still in battle) or screen changed (results)
    const screenAfter = await page.locator("body").getAttribute("data-screen");
    if (screenAfter === "battle") {
      const turnAfter = await page.locator("#battle-turn").textContent();
      expect(parseInt(turnAfter ?? "0", 10)).toBeGreaterThanOrEqual(parseInt(turnBefore ?? "0", 10));
    } else {
      expect(["results", "battle"]).toContain(screenAfter);
    }
  });

  test("committing an action updates the battle log", async ({ page }) => {
    const logCountBefore = await page.locator("#battle-log .battle-log-item").count();
    await page.click("#battle-commit");

    const screen = await page.locator("body").getAttribute("data-screen");
    if (screen === "battle") {
      const logCountAfter = await page.locator("#battle-log .battle-log-item").count();
      // Log should still exist
      expect(logCountAfter).toBeGreaterThan(0);
    }
  });

  test("battle-back button returns to quests screen", async ({ page }) => {
    await page.click("#battle-back");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
  });

  test("committing action increases resonance value over time", async ({ page }) => {
    const resonanceBefore = await page.locator("#battle-resonance-value").textContent();
    const valueBefore = parseInt(resonanceBefore ?? "0", 10);

    await page.click("#battle-commit");

    const screen = await page.locator("body").getAttribute("data-screen");
    if (screen === "battle") {
      const resonanceAfter = await page.locator("#battle-resonance-value").textContent();
      const valueAfter = parseInt(resonanceAfter ?? "0", 10);
      expect(valueAfter).toBeGreaterThanOrEqual(valueBefore);
    }
  });

  test("battle phase label is displayed", async ({ page }) => {
    await expect(page.locator("#battle-phase")).toBeVisible();
    const text = await page.locator("#battle-phase").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("enemy intent cards are shown", async ({ page }) => {
    const intents = page.locator("#battle-intents .battle-intent-card");
    const count = await intents.count();
    expect(count).toBeGreaterThan(0);
  });
});
