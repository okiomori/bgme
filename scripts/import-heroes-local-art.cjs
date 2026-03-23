const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const PROMPTS_PATH = path.join(ROOT, "art", "prompts", "heroes.json");
const EXPORTS_DIR = path.join(ROOT, "art", "exports");
const REFS_DIR = path.join(ROOT, "art", "refs");
const CHAR_DIR = path.join(ROOT, "art", "characters");

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

function readConfig() {
  if (!fs.existsSync(PROMPTS_PATH)) {
    throw new Error(`Не найден конфиг промптов: ${PROMPTS_PATH}`);
  }
  return JSON.parse(fs.readFileSync(PROMPTS_PATH, "utf8"));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function buildCandidates(id) {
  const names = [];
  for (const ext of EXTENSIONS) {
    names.push(`${id}-canon-bust${ext}`);
    names.push(`${id}-bust${ext}`);
    names.push(`${id}${ext}`);
  }
  return names;
}

function findSourceForHero(id) {
  const candidates = buildCandidates(id);
  const sourceDirs = [EXPORTS_DIR, REFS_DIR, CHAR_DIR];

  for (const dir of sourceDirs) {
    for (const fileName of candidates) {
      const abs = path.join(dir, fileName);
      if (fs.existsSync(abs)) {
        return abs;
      }
    }
  }

  return "";
}

function importOne(heroId) {
  const sourcePath = findSourceForHero(heroId);
  if (!sourcePath) {
    return { heroId, ok: false, reason: "not-found" };
  }

  const ext = path.extname(sourcePath).toLowerCase() || ".png";
  const destName = `${heroId}-canon-bust${ext}`;
  const destPath = path.join(CHAR_DIR, destName);

  if (path.resolve(sourcePath) !== path.resolve(destPath)) {
    fs.copyFileSync(sourcePath, destPath);
  }

  return {
    heroId,
    ok: true,
    source: path.relative(ROOT, sourcePath).replace(/\\/g, "/"),
    dest: path.relative(ROOT, destPath).replace(/\\/g, "/"),
  };
}

function main() {
  ensureDir(CHAR_DIR);

  const config = readConfig();
  const heroes = Array.isArray(config.heroes) ? config.heroes : [];
  if (!heroes.length) {
    throw new Error("В heroes.json нет героев для импорта.");
  }

  const ids = heroes.map((hero) => hero.id).filter(Boolean);
  const rows = ids.map(importOne);

  console.log("Локальный импорт арт-ассетов:");
  for (const row of rows) {
    if (row.ok) {
      console.log(`- ${row.heroId}: ${row.source} -> ${row.dest}`);
    } else {
      console.log(`- ${row.heroId}: не найден локальный файл в art/exports, art/refs или art/characters`);
    }
  }

  const okCount = rows.filter((row) => row.ok).length;
  console.log(`Импорт завершен: ${okCount}/${rows.length}`);
}

try {
  main();
} catch (err) {
  console.error(err.message || err);
  process.exitCode = 1;
}
