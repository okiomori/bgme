"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
  });

  test("rail buttons navigate to their target screens", async ({ page }) => {
    const railTargets = ["home", "quests", "party", "journal"];
    for (const target of railTargets) {
      await page.click(`.rail-button[data-screen-target="${target}"]`);
      await expect(page.locator("body")).toHaveAttribute("data-screen", target);
    }
  });

  test("dock buttons navigate to all available screens", async ({ page }) => {
    const dockTargets = ["quests", "party", "journal", "shop", "menu", "home"];
    for (const target of dockTargets) {
      await page.click(`.dock-button[data-screen-target="${target}"]`);
      await expect(page.locator("body")).toHaveAttribute("data-screen", target);
    }
  });

  test("active rail button updates when navigating", async ({ page }) => {
    await page.click('.rail-button[data-screen-target="quests"]');
    await expect(page.locator('.rail-button[data-screen-target="quests"]')).toHaveClass(/is-active/);
    await expect(page.locator('.rail-button[data-screen-target="home"]')).not.toHaveClass(/is-active/);
  });

  test("active dock button updates when navigating", async ({ page }) => {
    await page.click('.dock-button[data-screen-target="shop"]');
    await expect(page.locator('.dock-button[data-screen-target="shop"]')).toHaveClass(/is-active/);
    await expect(page.locator('.dock-button[data-screen-target="home"]')).not.toHaveClass(/is-active/);
  });

  test("keyboard shortcut '1' navigates to home screen", async ({ page }) => {
    await page.keyboard.press("1");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "home");
  });

  test("keyboard shortcut '2' navigates to quests screen", async ({ page }) => {
    await page.keyboard.press("2");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
  });

  test("keyboard shortcut '3' navigates to party screen", async ({ page }) => {
    await page.keyboard.press("3");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "party");
  });

  test("keyboard shortcut '4' navigates to journal screen", async ({ page }) => {
    await page.keyboard.press("4");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "journal");
  });

  test("only one screen is active at a time", async ({ page }) => {
    await page.click('.dock-button[data-screen-target="journal"]');
    const activeScreens = await page.locator(".screen.is-active").count();
    expect(activeScreens).toBe(1);
  });

  test("home screen 'Открыть экспедиции' button navigates to quests", async ({ page }) => {
    await navigateToDock(page, "home");
    await page.locator('section[data-screen="home"] .primary-button[data-screen-target="quests"]').click();
    await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
  });

  test("home screen 'Посмотреть отряд' button navigates to party", async ({ page }) => {
    await navigateToDock(page, "home");
    // Click the secondary button targeting party on the home screen (not rail/dock)
    await page.locator('section[data-screen="home"] .secondary-button[data-screen-target="party"]').click();
    await expect(page.locator("body")).toHaveAttribute("data-screen", "party");
  });
});
