"use strict";

// @ts-check
const { expect } = require("@playwright/test");

/**
 * Navigate to the game's home screen by clicking "Новая экспедиция"
 * from the title screen, or by reusing existing session.
 * @param {import('@playwright/test').Page} page
 */
async function startNewGame(page) {
  await page.goto("/");
  // Clear any saved state so tests start fresh
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator('section[data-screen="title"]')).toHaveClass(/is-active/);
  await page.click("#title-new");
  await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
}

/**
 * Navigate to a given screen using the dock navigation bar.
 * @param {import('@playwright/test').Page} page
 * @param {string} screenTarget
 */
async function navigateToDock(page, screenTarget) {
  await page.click(`.dock-button[data-screen-target="${screenTarget}"]`);
  await expect(page.locator("body")).toHaveAttribute("data-screen", screenTarget);
}

module.exports = { startNewGame, navigateToDock };
