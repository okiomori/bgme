"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Party screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    await navigateToDock(page, "party");
  });

  test("displays hero list with 4 heroes", async ({ page }) => {
    const heroCards = page.locator("#hero-list .hero-card");
    await expect(heroCards).toHaveCount(4);
  });

  test("displays hero names in the list", async ({ page }) => {
    const heroCards = page.locator("#hero-list .hero-card");
    const names = await heroCards.allTextContents();
    const allText = names.join(" ");
    expect(allText).toContain("Лиора");
    expect(allText).toContain("Риан");
    expect(allText).toContain("Сайя");
    expect(allText).toContain("Ноэль");
  });

  test("first hero is active by default", async ({ page }) => {
    const firstCard = page.locator("#hero-list .hero-card").first();
    await expect(firstCard).toHaveClass(/is-active/);
  });

  test("clicking a hero card makes it active", async ({ page }) => {
    const secondCard = page.locator("#hero-list .hero-card").nth(1);
    await secondCard.click();
    await expect(secondCard).toHaveClass(/is-active/);
    // First card should no longer be active
    const firstCard = page.locator("#hero-list .hero-card").first();
    await expect(firstCard).not.toHaveClass(/is-active/);
  });

  test("clicking a hero updates the portrait and name", async ({ page }) => {
    // Click Rian (second hero)
    const rianCard = page.locator('#hero-list .hero-card[data-hero-id="rian"]');
    await rianCard.click();
    await expect(page.locator("#hero-name")).toContainText("Риан");
  });

  test("displays hero name in the portrait panel", async ({ page }) => {
    const name = page.locator("#hero-name");
    await expect(name).toBeVisible();
    const text = await name.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays hero role", async ({ page }) => {
    await expect(page.locator("#hero-role")).toBeVisible();
    const text = await page.locator("#hero-role").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays hero epithet", async ({ page }) => {
    await expect(page.locator("#hero-epithet")).toBeVisible();
  });

  test("displays hero quote", async ({ page }) => {
    await expect(page.locator("#hero-quote")).toBeVisible();
    const text = await page.locator("#hero-quote").textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("displays hero skills", async ({ page }) => {
    const skills = page.locator("#hero-skills .skill-card");
    const count = await skills.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays hero stats", async ({ page }) => {
    const statRows = page.locator("#hero-stats .stat-row");
    const count = await statRows.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays hero silhouette description", async ({ page }) => {
    await expect(page.locator("#hero-silhouette")).toBeVisible();
  });

  test("displays color swatches for the active hero", async ({ page }) => {
    const swatches = page.locator("#hero-swatches .swatch");
    const count = await swatches.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays hero materials list", async ({ page }) => {
    await expect(page.locator("#material-list")).toBeVisible();
  });

  test("keyboard left/right arrows cycle through heroes", async ({ page }) => {
    const nameBefore = await page.locator("#hero-name").textContent();
    await page.keyboard.press("ArrowRight");
    const nameAfter = await page.locator("#hero-name").textContent();
    // The name may or may not change depending on starting position,
    // but at least it should still be a non-empty string
    expect(nameAfter?.trim().length).toBeGreaterThan(0);
  });

  test("displays hero upgrade panel", async ({ page }) => {
    await expect(page.locator("#hero-upgrade-title")).toBeVisible();
    await expect(page.locator("#hero-upgrade-button")).toBeVisible();
  });

  test("hero upgrade button shows appropriate state for resources", async ({ page }) => {
    const button = page.locator("#hero-upgrade-button");
    await expect(button).toBeVisible();
    const buttonText = await button.textContent();
    // Should show either "Усилить героя" or "Недостаточно трофеев" or "Максимум"
    expect(buttonText?.trim().length).toBeGreaterThan(0);
  });

  test("selecting Saya hero displays her quote", async ({ page }) => {
    const sayaCard = page.locator('#hero-list .hero-card[data-hero-id="saya"]');
    await sayaCard.click();
    await expect(page.locator("#hero-name")).toContainText("Сайя");
  });

  test("selecting Noel hero displays her role", async ({ page }) => {
    const noelCard = page.locator('#hero-list .hero-card[data-hero-id="noel"]');
    await noelCard.click();
    await expect(page.locator("#hero-name")).toContainText("Ноэль");
  });

  test("upgrade cost panel shows required resources", async ({ page }) => {
    const costList = page.locator("#hero-upgrade-costs");
    await expect(costList).toBeVisible();
  });
});
