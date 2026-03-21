import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const indexUrl = pathToFileURL(path.join(rootDir, "index.html")).href;

const browser = await chromium.launch({
  headless: true,
  args: ["--use-gl=angle", "--use-angle=swiftshader"],
});

const page = await browser.newPage({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 1,
});

await page.goto(indexUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(600);

for (let index = 0; index < 3; index += 1) {
  await page.click(".brand-mark");
  await page.waitForTimeout(120);
}

await page.waitForTimeout(300);
await page.screenshot({ path: path.join(rootDir, "output", "creator-cabin-open.png"), fullPage: true });

await page.fill("#creator-question-input", "почему экран отряда может выглядеть сыро и что исправлять первым?");
await page.click("#creator-send");
await page.waitForTimeout(250);
await page.screenshot({ path: path.join(rootDir, "output", "creator-cabin-answer.png"), fullPage: true });

await page.click("#creator-close");
await page.waitForTimeout(250);

await page.keyboard.press("3");
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(rootDir, "output", "party-portrait-pass.png"), fullPage: true });

const textState = await page.evaluate(() => {
  if (typeof window.render_game_to_text === "function") {
    return window.render_game_to_text();
  }
  return null;
});

if (textState) {
  console.log(textState);
}

await browser.close();
