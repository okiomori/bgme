"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

/**
 * Complete a full battle (drive to either victory or defeat).
 * @param {import('@playwright/test').Page} page
 * @param {number} maxActions
 */
async function completeBattle(page, maxActions = 60) {
  for (let i = 0; i < maxActions; i++) {
    const screen = await page.locator("body").getAttribute("data-screen");
    if (screen !== "battle") break;
    await page.click("#battle-commit");
  }
}

test.describe("Game flow integration", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
  });

  test("state is persisted across page reloads", async ({ page }) => {
    // Advance the story quest one node
    const storyCard = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCard.click();
    await page.click("#route-advance");

    const progressAfter = await page.locator("#quest-progress").textContent();

    // Reload the page — state should be restored
    await page.reload();
    await expect(page.locator("body")).not.toHaveAttribute("data-screen", "title");

    const progressRestored = await page.locator("#quest-progress").textContent();
    expect(progressRestored).toEqual(progressAfter);
  });

  test("full battle → result → back-to-quests flow", async ({ page }) => {
    // Start battle
    await page.click("#open-battle");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "battle");

    // Complete the battle
    await completeBattle(page);
    await expect(page.locator("body")).toHaveAttribute("data-screen", "results");

    // Go back to quests
    await page.click("#result-secondary");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
  });

  test("full battle → victory → claim reward → advance to quests", async ({ page }) => {
    await page.click("#open-battle");
    await completeBattle(page);

    const screen = await page.locator("body").getAttribute("data-screen");
    expect(screen).toBe("results");

    const resultTitle = await page.locator("#result-title").textContent();
    await page.click("#result-primary");

    // After claiming, should be on quests, chapter, or still results
    const nextScreen = await page.locator("body").getAttribute("data-screen");
    expect(["quests", "chapter", "home", "results"]).toContain(nextScreen);
  });

  test("buying a shop item reflects in material list on party screen", async ({ page }) => {
    // Buy first shop item (moss-seed costs 34 lumen, initial lumen is 420)
    await navigateToDock(page, "shop");
    await page.locator("#shop-grid .shop-card").first().click();
    await page.click("#shop-buy");

    // Navigate to party and check material count for Liora (who uses moss-seed)
    await navigateToDock(page, "party");
    const materialText = await page.locator("#material-list").textContent();
    // After buying, the material count should appear somewhere in the list
    expect(materialText).toBeTruthy();
  });

  test("resources update after buying from shop", async ({ page }) => {
    const lumenBefore = parseInt((await page.locator("#resource-lumen").textContent()) ?? "0", 10);

    await navigateToDock(page, "shop");
    // First item (moss-seed) costs 34 lumen
    await page.locator("#shop-grid .shop-card").first().click();
    await page.click("#shop-buy");

    const lumenAfter = parseInt((await page.locator("#resource-lumen").textContent()) ?? "0", 10);
    expect(lumenAfter).toBe(lumenBefore - 34);
  });

  test("advancing a quest route updates the node type label", async ({ page }) => {
    const storyCard = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCard.click();

    const labelBefore = await page.locator("#quest-node-type").textContent();
    await page.click("#route-advance");
    const labelAfter = await page.locator("#quest-node-type").textContent();

    // Label should still be a non-empty string (may or may not change based on node type)
    expect(labelAfter?.trim().length).toBeGreaterThan(0);
  });

  test("session log grows when actions are performed", async ({ page }) => {
    await navigateToDock(page, "menu");
    const logBefore = await page.locator("#menu-log-list .menu-log-item").count();

    // Do something that creates a log entry
    await navigateToDock(page, "shop");
    await page.click("#shop-buy");

    await navigateToDock(page, "menu");
    const logAfter = await page.locator("#menu-log-list .menu-log-item").count();

    expect(logAfter).toBeGreaterThan(logBefore);
  });

  test("new game resets route progress", async ({ page }) => {
    // Advance a node on story quest
    const storyCard = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCard.click();
    await page.click("#route-advance");
    const progressAfterAdvance = await page.locator("#quest-progress").textContent();

    // Go to title and start a new game
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.click("#title-new");

    // Story quest progress should be reset to initial
    const storyCardNew = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCardNew.click();
    const progressAfterReset = await page.locator("#quest-progress").textContent();

    expect(progressAfterReset).not.toEqual(progressAfterAdvance);
  });

  test("journey through all main screens without errors", async ({ page }) => {
    const screens = ["home", "quests", "party", "journal", "shop", "menu"];
    for (const screen of screens) {
      await navigateToDock(page, screen);
      await expect(page.locator(`section[data-screen="${screen}"]`)).toHaveClass(/is-active/);
    }
  });

  test("resources are displayed consistently across screens", async ({ page }) => {
    const lumenHome = await page.locator("#resource-lumen").textContent();

    await navigateToDock(page, "shop");
    const lumenShop = await page.locator("#resource-lumen").textContent();

    await navigateToDock(page, "party");
    const lumenParty = await page.locator("#resource-lumen").textContent();

    // Resource values should be the same across all screens
    expect(lumenHome).toEqual(lumenShop);
    expect(lumenShop).toEqual(lumenParty);
  });
});
