"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Title screen", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test("shows the title screen on first load", async ({ page }) => {
    await expect(page.locator('section[data-screen="title"]')).toHaveClass(/is-active/);
    await expect(page.locator("body")).toHaveAttribute("data-screen", "title");
  });

  test("displays the game title", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Последняя Ступень");
  });

  test("displays new-game and continue buttons", async ({ page }) => {
    await expect(page.locator("#title-new")).toBeVisible();
    await expect(page.locator("#title-continue")).toBeVisible();
  });

  test("clicking 'Новая экспедиция' navigates to quests screen", async ({ page }) => {
    await page.click("#title-new");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "quests");
    await expect(page.locator('section[data-screen="quests"]')).toHaveClass(/is-active/);
  });

  test("clicking 'Открыть руководство' navigates to guide screen", async ({ page }) => {
    await page.click("#title-guide");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "guide");
  });

  test("continue button is disabled with no save data", async ({ page }) => {
    const continueButton = page.locator("#title-continue");
    await expect(continueButton).toBeDisabled();
  });

  test("displays resource strip in the topbar", async ({ page }) => {
    await expect(page.locator("#resource-ap")).toBeVisible();
    await expect(page.locator("#resource-fragments")).toBeVisible();
    await expect(page.locator("#resource-lumen")).toBeVisible();
  });

  test("displays initial resource values", async ({ page }) => {
    await expect(page.locator("#resource-ap")).toHaveText("15 / 15");
    await expect(page.locator("#resource-lumen")).toHaveText("420");
  });
});
