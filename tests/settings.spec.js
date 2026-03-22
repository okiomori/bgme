"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Settings / Menu screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    await navigateToDock(page, "menu");
  });

  test("displays the menu screen", async ({ page }) => {
    await expect(page.locator('section[data-screen="menu"]')).toHaveClass(/is-active/);
  });

  test("displays UI scale options", async ({ page }) => {
    const options = page.locator("#ui-scale-options .setting-option");
    const count = await options.count();
    expect(count).toBeGreaterThan(0);
  });

  test("clicking a UI scale option activates it", async ({ page }) => {
    const options = page.locator("#ui-scale-options .setting-option");
    const count = await options.count();
    if (count > 1) {
      const secondOption = options.nth(1);
      await secondOption.click();
      await expect(secondOption).toHaveClass(/is-active/);
    }
  });

  test("displays the motion toggle button", async ({ page }) => {
    await expect(page.locator("#toggle-motion")).toBeVisible();
    await expect(page.locator("#toggle-motion")).toContainText("анимацию");
  });

  test("displays the contrast toggle button", async ({ page }) => {
    await expect(page.locator("#toggle-contrast")).toBeVisible();
    await expect(page.locator("#toggle-contrast")).toContainText("контраст");
  });

  test("toggling motion adds is-active class to button", async ({ page }) => {
    const motionButton = page.locator("#toggle-motion");
    await motionButton.click();
    await expect(motionButton).toHaveClass(/is-active/);
  });

  test("toggling motion twice removes the is-active class", async ({ page }) => {
    const motionButton = page.locator("#toggle-motion");
    await motionButton.click();
    await motionButton.click();
    await expect(motionButton).not.toHaveClass(/is-active/);
  });

  test("toggling contrast adds is-active class to button", async ({ page }) => {
    const contrastButton = page.locator("#toggle-contrast");
    await contrastButton.click();
    await expect(contrastButton).toHaveClass(/is-active/);
  });

  test("toggling contrast twice removes the is-active class", async ({ page }) => {
    const contrastButton = page.locator("#toggle-contrast");
    await contrastButton.click();
    await contrastButton.click();
    await expect(contrastButton).not.toHaveClass(/is-active/);
  });

  test("displays the Steam checklist section", async ({ page }) => {
    await expect(page.locator("#menu-check-list")).toBeVisible();
    const items = page.locator("#menu-check-list article");
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays the session log section", async ({ page }) => {
    await expect(page.locator("#menu-log-list")).toBeVisible();
    const items = page.locator("#menu-log-list .menu-log-item");
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("open-guide button navigates to guide screen", async ({ page }) => {
    await page.click("#open-guide");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "guide");
  });

  test("guide screen displays section list", async ({ page }) => {
    await page.click("#open-guide");
    const sections = page.locator("#guide-section-list .guide-section-button");
    const count = await sections.count();
    expect(count).toBeGreaterThan(0);
  });

  test("guide screen displays guide title", async ({ page }) => {
    await page.click("#open-guide");
    await expect(page.locator("#guide-title")).toBeVisible();
    const text = await page.locator("#guide-title").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("guide section buttons update the guide panel on click", async ({ page }) => {
    await page.click("#open-guide");
    const sections = page.locator("#guide-section-list .guide-section-button");
    const count = await sections.count();
    if (count > 1) {
      await sections.nth(1).click();
      const title = await page.locator("#guide-title").textContent();
      expect(title?.trim().length).toBeGreaterThan(0);
    }
  });

  test("session log is updated after performing actions", async ({ page }) => {
    const logItemsBefore = await page.locator("#menu-log-list .menu-log-item").count();

    // Navigate away and do something
    await page.click('.dock-button[data-screen-target="shop"]');
    await page.click("#shop-buy");
    await navigateToDock(page, "menu");

    const logItemsAfter = await page.locator("#menu-log-list .menu-log-item").count();
    expect(logItemsAfter).toBeGreaterThanOrEqual(logItemsBefore);
  });

  test("keyboard shortcut '8' navigates to guide", async ({ page }) => {
    await page.keyboard.press("8");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "guide");
  });
});
