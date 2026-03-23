const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const PROMPTS_PATH = path.join(ROOT, "art", "prompts", "heroes.json");
const OUTPUT_DIR = path.join(ROOT, "art", "characters");

function readConfig() {
  if (!fs.existsSync(PROMPTS_PATH)) {
    throw new Error(`Не найден конфиг промптов: ${PROMPTS_PATH}`);
  }
  return JSON.parse(fs.readFileSync(PROMPTS_PATH, "utf8"));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function composePrompt(defaults, hero) {
  const parts = [
    defaults.styleGuide,
    hero.prompt,
    `Character name: ${hero.name}.`,
    "Portrait composition: bust portrait, clean readable silhouette, centered for game UI portrait frame.",
  ];

  if (hero.negative) {
    parts.push(`Negative constraints: ${hero.negative}.`);
  }

  return parts.join(" ");
}

async function generateOneHero(hero, defaults, apiKey) {
  const model = process.env.BGME_IMAGE_MODEL || defaults.model || "gpt-image-1";
  const size = process.env.BGME_IMAGE_SIZE || defaults.size || "1024x1536";
  const quality = process.env.BGME_IMAGE_QUALITY || defaults.quality || "high";
  const format = defaults.format || "png";
  const fileName = `${hero.id}-canon-bust.${format}`;
  const outPath = path.join(OUTPUT_DIR, fileName);

  const body = {
    model,
    prompt: composePrompt(defaults, hero),
    size,
    quality,
  };

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Ошибка генерации ${hero.id}: ${response.status} ${errText}`);
  }

  const json = await response.json();
  const item = json?.data?.[0];

  if (!item) {
    throw new Error(`Пустой ответ генерации для ${hero.id}`);
  }

  let imageBuffer;
  if (item.b64_json) {
    imageBuffer = Buffer.from(item.b64_json, "base64");
  } else if (item.url) {
    const imageRes = await fetch(item.url);
    if (!imageRes.ok) {
      throw new Error(`Не удалось скачать изображение по URL для ${hero.id}`);
    }
    const arr = await imageRes.arrayBuffer();
    imageBuffer = Buffer.from(arr);
  } else {
    throw new Error(`Нет b64_json/url в ответе для ${hero.id}`);
  }

  fs.writeFileSync(outPath, imageBuffer);
  return outPath;
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY не задан. Установите ключ и запустите снова.");
  }

  const config = readConfig();
  const defaults = config.defaults || {};
  const heroes = Array.isArray(config.heroes) ? config.heroes : [];

  if (heroes.length === 0) {
    throw new Error("В heroes.json нет героев для генерации.");
  }

  ensureDir(OUTPUT_DIR);

  console.log(`Генерация ${heroes.length} героев...`);
  for (const hero of heroes) {
    if (!hero.id || !hero.prompt || !hero.name) {
      console.log(`Пропуск записи без обязательных полей: ${JSON.stringify(hero)}`);
      continue;
    }
    const resultPath = await generateOneHero(hero, defaults, apiKey);
    console.log(`OK: ${hero.id} -> ${path.relative(ROOT, resultPath)}`);
  }

  console.log("Генерация завершена.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exitCode = 1;
});
