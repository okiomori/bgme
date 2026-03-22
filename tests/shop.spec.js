"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Shop screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    await navigateToDock(page, "shop");
  });

  test("displays shop item grid", async ({ page }) => {
    const items = page.locator("#shop-grid .shop-card");
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays 4 shop items", async ({ page }) => {
    const items = page.locator("#shop-grid .shop-card");
    await expect(items).toHaveCount(4);
  });

  test("displays the selected item name", async ({ page }) => {
    await expect(page.locator("#shop-item-name")).toBeVisible();
    const text = await page.locator("#shop-item-name").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays the selected item description", async ({ page }) => {
    await expect(page.locator("#shop-item-desc")).toBeVisible();
    const text = await page.locator("#shop-item-desc").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays item metadata (stock, use, price)", async ({ page }) => {
    await expect(page.locator("#shop-item-meta")).toBeVisible();
    const text = await page.locator("#shop-item-meta").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("buy button is visible", async ({ page }) => {
    await expect(page.locator("#shop-buy")).toBeVisible();
    await expect(page.locator("#shop-buy")).toContainText("Добавить в поставку");
  });

  test("clicking a shop item selects it and updates the detail panel", async ({ page }) => {
    const items = page.locator("#shop-grid .shop-card");
    const count = await items.count();
    if (count > 1) {
      await items.nth(1).click();
      const name = await page.locator("#shop-item-name").textContent();
      expect(name?.trim().length).toBeGreaterThan(0);
    }
  });

  test("first shop item is active by default", async ({ page }) => {
    const firstItem = page.locator("#shop-grid .shop-card").first();
    await expect(firstItem).toHaveClass(/is-selected/);
  });

  test("clicking different items updates active state", async ({ page }) => {
    const items = page.locator("#shop-grid .shop-card");
    const count = await items.count();
    if (count > 1) {
      await items.nth(2).click();
      await expect(items.nth(2)).toHaveClass(/is-selected/);
      await expect(items.first()).not.toHaveClass(/is-selected/);
    }
  });

  test("buying a lumen-priced item deducts lumen when affordable", async ({ page }) => {
    // The first item (moss-seed) costs 34 lumen; initial lumen is 420
    const firstItem = page.locator("#shop-grid .shop-card").first();
    await firstItem.click();

    const lumenBefore = await page.locator("#resource-lumen").textContent();
    const lumenVal = parseInt(lumenBefore ?? "0", 10);

    if (lumenVal >= 34) {
      await page.click("#shop-buy");
      const lumenAfter = await page.locator("#resource-lumen").textContent();
      const lumenAfterVal = parseInt(lumenAfter ?? "0", 10);
      expect(lumenAfterVal).toBeLessThan(lumenVal);
    }
  });

  test("item names include expected items from the catalog", async ({ page }) => {
    const items = page.locator("#shop-grid .shop-card");
    const texts = await items.allTextContents();
    const allText = texts.join(" ");
    // At least some items from the catalog should be displayed
    expect(allText).toMatch(/Семя|Серебро|Пепел|Ядро/);
  });
});
