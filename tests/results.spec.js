"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame } = require("./helpers");

/**
 * Drive the battle to victory by spamming the commit button.
 * @param {import('@playwright/test').Page} page
 * @param {number} maxAttempts
 */
async function driveBattleToEnd(page, maxAttempts = 50) {
  for (let i = 0; i < maxAttempts; i++) {
    const screen = await page.locator("body").getAttribute("data-screen");
    if (screen !== "battle") break;
    await page.click("#battle-commit");
  }
}

test.describe("Results screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    // Go to battle
    await page.click("#open-battle");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "battle");
    // Drive the battle to its end
    await driveBattleToEnd(page);
    await expect(page.locator("body")).toHaveAttribute("data-screen", "results");
  });

  test("results screen becomes active after battle ends", async ({ page }) => {
    await expect(page.locator('section[data-screen="results"]')).toHaveClass(/is-active/);
  });

  test("displays the result title", async ({ page }) => {
    const title = page.locator("#result-title");
    await expect(title).toBeVisible();
    const text = await title.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays a rank grade", async ({ page }) => {
    const grade = page.locator("#result-grade");
    await expect(grade).toBeVisible();
    const gradeText = await grade.textContent();
    expect(gradeText).toMatch(/Rank [SABCD]/);
  });

  test("displays result rewards section", async ({ page }) => {
    await expect(page.locator("#result-reward-list")).toBeVisible();
  });

  test("displays result notes section", async ({ page }) => {
    await expect(page.locator("#result-note-list")).toBeVisible();
    const items = page.locator("#result-note-list article");
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays next action title", async ({ page }) => {
    const nextTitle = page.locator("#result-next-title");
    await expect(nextTitle).toBeVisible();
    const text = await nextTitle.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("primary result button is visible", async ({ page }) => {
    await expect(page.locator("#result-primary")).toBeVisible();
  });

  test("secondary result button navigates back to quests", async ({ page }) => {
    await page.click("#result-secondary");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
  });

  test("primary result button claims reward and advances", async ({ page }) => {
    const resultText = await page.locator("#result-title").textContent();
    await page.click("#result-primary");
    // After claiming, should navigate away from results
    const screen = await page.locator("body").getAttribute("data-screen");
    expect(["quests", "chapter", "ending", "home"]).toContain(screen);
  });

  test("metrics panel shows battle statistics", async ({ page }) => {
    const burstList = page.locator("#result-burst-list");
    await expect(burstList).toBeVisible();
  });
});
