const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const MAIN_JS = path.join(ROOT, "src", "main.js");
const HEROES_CONFIG_PATH = path.join(ROOT, "art", "prompts", "heroes.json");
const CHAR_DIR = path.join(ROOT, "art", "characters");

const EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

const BUST_CANDIDATES = [
  (id, ext) => `${id}-canon-bust.${ext}`,
  (id, ext) => `${id}-bust.${ext}`,
  (id, ext) => `${id}.${ext}`,
];

function findFirstExisting(id) {
  for (const ext of EXTENSIONS) {
    for (const candidateFn of BUST_CANDIDATES) {
      const name = candidateFn(id, ext);
      const abs = path.join(CHAR_DIR, name);
      if (fs.existsSync(abs)) {
        return `art/characters/${name}`.replace(/\\/g, "/");
      }
    }
  }
  return "";
}

function getHeroIdsFromConfig() {
  if (!fs.existsSync(HEROES_CONFIG_PATH)) {
    throw new Error(`Не найден конфиг: ${HEROES_CONFIG_PATH}`);
  }

  const parsed = JSON.parse(fs.readFileSync(HEROES_CONFIG_PATH, "utf8"));
  const heroes = Array.isArray(parsed.heroes) ? parsed.heroes : [];
  const ids = heroes.map((hero) => hero.id).filter(Boolean);

  if (!ids.length) {
    throw new Error("В art/prompts/heroes.json не найдены hero id");
  }

  return ids;
}

function main() {
  if (!fs.existsSync(MAIN_JS)) {
    throw new Error(`Не найден файл: ${MAIN_JS}`);
  }

  let source = fs.readFileSync(MAIN_JS, "utf8");

  const heroIds = getHeroIdsFromConfig();

  const changes = [];
  for (const id of heroIds) {
    const artPath = findFirstExisting(id);
    const pattern = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?art:\\s*)"[^"]*"`);

    if (!pattern.test(source)) {
      continue;
    }

    source = source.replace(pattern, `$1"${artPath}"`);
    changes.push({ id, art: artPath || "<пусто>" });
  }

  fs.writeFileSync(MAIN_JS, source);

  console.log("Обновлены art-пути героев:");
  for (const row of changes) {
    console.log(`- ${row.id}: ${row.art}`);
  }
}

try {
  main();
} catch (err) {
  console.error(err.message || err);
  process.exitCode = 1;
}
