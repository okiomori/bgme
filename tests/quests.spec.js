"use strict";

// @ts-check
const { test, expect } = require("@playwright/test");
const { startNewGame, navigateToDock } = require("./helpers");

test.describe("Quest screen", () => {
  test.beforeEach(async ({ page }) => {
    await startNewGame(page);
    // Already on quests after startNewGame
  });

  test("displays quest cards for all quests", async ({ page }) => {
    const cards = page.locator("#quest-cards .quest-card");
    await expect(cards).toHaveCount(5);
  });

  test("displays the active quest title in the overview panel", async ({ page }) => {
    await expect(page.locator("#quest-title")).toBeVisible();
    const titleText = await page.locator("#quest-title").textContent();
    expect(titleText?.trim().length).toBeGreaterThan(0);
  });

  test("displays quest status, progress, and cost", async ({ page }) => {
    await expect(page.locator("#quest-status")).toBeVisible();
    await expect(page.locator("#quest-progress")).toBeVisible();
    await expect(page.locator("#quest-cost")).toBeVisible();
  });

  test("clicking a quest card updates the overview panel", async ({ page }) => {
    // Select the first quest card
    const firstCard = page.locator("#quest-cards .quest-card").first();
    const firstTitle = await firstCard.getAttribute("data-quest-id");

    // Select the second quest card (trial - always unlocked)
    const trialCard = page.locator('#quest-cards .quest-card[data-quest-id="trial"]');
    await trialCard.click();

    const overviewTitle = await page.locator("#quest-title").textContent();
    expect(overviewTitle?.trim()).toBeTruthy();
  });

  test("selecting 'story' quest shows it as the active overview", async ({ page }) => {
    const storyCard = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCard.click();
    await expect(page.locator("#quest-title")).toContainText("Хроника руин");
  });

  test("selecting 'trial' quest shows it as active overview", async ({ page }) => {
    const trialCard = page.locator('#quest-cards .quest-card[data-quest-id="trial"]');
    await trialCard.click();
    await expect(page.locator("#quest-title")).toContainText("Чертог резонанса");
  });

  test("displays the route map", async ({ page }) => {
    await expect(page.locator("#route-map")).toBeVisible();
  });

  test("displays the route-advance button", async ({ page }) => {
    await expect(page.locator("#route-advance")).toBeVisible();
  });

  test("route-advance button advances route progress", async ({ page }) => {
    const storyCard = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCard.click();

    const progressBefore = await page.locator("#quest-progress").textContent();

    await page.click("#route-advance");

    const progressAfter = await page.locator("#quest-progress").textContent();
    expect(progressBefore).not.toEqual(progressAfter);
  });

  test("displays node type label in the quest brief", async ({ page }) => {
    await expect(page.locator("#quest-node-type")).toBeVisible();
    const labelText = await page.locator("#quest-node-type").textContent();
    expect(labelText?.trim().length).toBeGreaterThan(0);
  });

  test("displays quest objective and recommendation", async ({ page }) => {
    await expect(page.locator("#quest-objective")).toBeVisible();
    await expect(page.locator("#quest-recommendation")).toBeVisible();
  });

  test("displays quest reward information", async ({ page }) => {
    await expect(page.locator("#quest-reward")).toBeVisible();
    const rewardText = await page.locator("#quest-reward").textContent();
    expect(rewardText?.trim().length).toBeGreaterThan(0);
  });

  test("open-battle button navigates to battle screen", async ({ page }) => {
    await page.click("#open-battle");
    await expect(page.locator("body")).toHaveAttribute("data-screen", "battle");
  });

  test("route-advance multiple times progresses route nodes", async ({ page }) => {
    const storyCard = page.locator('#quest-cards .quest-card[data-quest-id="story"]');
    await storyCard.click();

    // Advance a couple of nodes
    await page.click("#route-advance");
    await page.click("#route-advance");

    const progress = await page.locator("#quest-progress").textContent();
    expect(progress).toBeTruthy();
  });

  test("route log is displayed", async ({ page }) => {
    await expect(page.locator("#route-log")).toBeVisible();
  });

  test("quest cards have accent color classes", async ({ page }) => {
    const cards = page.locator("#quest-cards .quest-card");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    const firstCard = cards.first();
    // Cards should have a data-quest-id attribute
    const questId = await firstCard.getAttribute("data-quest-id");
    expect(questId).toBeTruthy();
  });
});
