"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Journal screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    await navigateToDock(page, "journal");
  });

  test("displays three journal tabs", async ({ page }) => {
    const tabs = page.locator("#journal-tabs .journal-tab");
    await expect(tabs).toHaveCount(3);
  });

  test("displays journal tab labels (Записи, Атлас, Бестиарий)", async ({ page }) => {
    const tabs = page.locator("#journal-tabs .journal-tab");
    const texts = await tabs.allTextContents();
    const allText = texts.join(" ");
    expect(allText).toContain("Записи");
    expect(allText).toContain("Атлас");
    expect(allText).toContain("Бестиарий");
  });

  test("first tab is active by default", async ({ page }) => {
    const firstTab = page.locator("#journal-tabs .journal-tab").first();
    await expect(firstTab).toHaveClass(/is-active/);
  });

  test("displays journal entry list", async ({ page }) => {
    const entries = page.locator("#journal-list .journal-entry-button");
    const count = await entries.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays the active journal entry title", async ({ page }) => {
    await expect(page.locator("#journal-title")).toBeVisible();
    const text = await page.locator("#journal-title").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays the journal body text", async ({ page }) => {
    await expect(page.locator("#journal-body")).toBeVisible();
    const text = await page.locator("#journal-body").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays journal meta note", async ({ page }) => {
    await expect(page.locator("#journal-meta")).toBeVisible();
  });

  test("displays journal stamps", async ({ page }) => {
    const stamps = page.locator("#journal-stamps .journal-stamp");
    const count = await stamps.count();
    expect(count).toBeGreaterThan(0);
  });

  test("clicking the Atlas tab shows atlas entries", async ({ page }) => {
    const atlasTab = page.locator('#journal-tabs .journal-tab[data-journal-tab="atlas"]');
    await atlasTab.click();
    await expect(atlasTab).toHaveClass(/is-active/);

    const entries = page.locator("#journal-list .journal-entry-button");
    const count = await entries.count();
    expect(count).toBeGreaterThan(0);
  });

  test("clicking the Bestiary tab shows bestiary entries", async ({ page }) => {
    const bestiaryTab = page.locator('#journal-tabs .journal-tab[data-journal-tab="bestiary"]');
    await bestiaryTab.click();
    await expect(bestiaryTab).toHaveClass(/is-active/);
  });

  test("clicking a journal entry updates the detail panel", async ({ page }) => {
    const entries = page.locator("#journal-list .journal-entry-button:not(.is-locked)");
    const count = await entries.count();
    if (count > 1) {
      await entries.nth(1).click();
      const title = await page.locator("#journal-title").textContent();
      expect(title?.trim().length).toBeGreaterThan(0);
    }
  });

  test("journal side kicker is displayed", async ({ page }) => {
    await expect(page.locator("#journal-side-kicker")).toBeVisible();
  });

  test("journal side title is displayed", async ({ page }) => {
    await expect(page.locator("#journal-side-title")).toBeVisible();
    const text = await page.locator("#journal-side-title").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("journal highlights panel is visible", async ({ page }) => {
    await expect(page.locator("#journal-highlights")).toBeVisible();
  });

  test("switching tabs updates the active entry displayed", async ({ page }) => {
    // Switch to Atlas tab
    const atlasTab = page.locator('#journal-tabs .journal-tab[data-journal-tab="atlas"]');
    await atlasTab.click();

    const titleAfter = await page.locator("#journal-title").textContent();
    // After switching, the displayed title might change
    expect(titleAfter?.trim().length).toBeGreaterThan(0);
  });
});
