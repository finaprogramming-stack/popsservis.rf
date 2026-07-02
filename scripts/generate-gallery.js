const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const imagesRoot = path.join(rootDir, "assets", "allimages");
const groupsRoot = path.join(rootDir, "gallery-groups");

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

const sections = [
  { slug: "bitumovoz", label: "Битумовоз", folder: "bitumovoz", project: "Битумовоз" },
  { slug: "vodnaya-tehnika", label: "Водная техника", folder: "vodnaya-tehnika", project: "Водная техника" },
  { slug: "drugoe", label: "Другое", folder: "drugoe", project: "Другое" },
  { slug: "kmd", label: "КМД", folder: "kmd", project: "КМД" },
  { slug: "krany-kmu", label: "Краны и КМУ", folder: "krany-kmu", project: "Краны и КМУ" },
  { slug: "kuzova-ramy", label: "Кузова и рамы", folder: "kuzova-ramy", project: "Кузова и рамы" },
  { slug: "svar-raboty", label: "Свар. работы", folder: "svar-raboty", project: "Свар. работы" },
  { slug: "traly-pricepy", label: "Тралы и прицепы", folder: "traly-pricepy", project: "Тралы и прицепы" },
  { slug: "truby-metallokonstrukcii", label: "Трубы и металлоконструкции", folder: "truby-metallokonstrukcii", project: "Трубы и металлоконструкции" },
  { slug: "fasady", label: "Фасады", folder: "fasady", project: "Фасады" },
];

const stageByIndex = [
  "состояние до работ",
  "этап подготовки",
  "промежуточный контроль",
  "готовый результат",
];

const naturalSortKey = (fileName) => {
  const base = path.parse(fileName).name.trim();
  const numeric = base.match(/^\d+/);

  return {
    number: numeric ? Number(numeric[0]) : Number.MAX_SAFE_INTEGER,
    text: base.toLowerCase(),
  };
};

const compareFiles = (a, b) => {
  const left = naturalSortKey(a);
  const right = naturalSortKey(b);

  if (left.number !== right.number) {
    return left.number - right.number;
  }

  return left.text.localeCompare(right.text, "ru", { numeric: true });
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const readJson = (filePath, fallback) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
};

const toWebPath = (...parts) => `./${parts.join("/")}`.replace(/\\/g, "/");

const getImageFiles = (dir) => {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort(compareFiles);
};

const makeItem = (section, fileName, sectionIndex, photoIndex) => {
  const fileKey = path.parse(fileName).name;
  const displayNumber = photoIndex + 1;
  const stage = stageByIndex[photoIndex % stageByIndex.length];
  const title = `${section.project}: ${stage}`;
  const id = (sectionIndex + 1) * 10000 + displayNumber;

  return {
    id,
    name: fileKey,
    fileName,
    src: toWebPath("assets", "allimages", section.folder, fileName),
    alt: title,
    project: section.project,
    stage,
    step: stage,
    date: "",
    title: "",
    description: "",
    tags: [section.project, fileKey],
    category: section.slug,
    categoryLabel: section.label,
  };
};

const writeGroupConfig = (section, fileNames) => {
  const filePath = path.join(groupsRoot, `${section.slug}.json`);
  const previousRows = readJson(filePath, []);
  const previousByName = new Map(
    Array.isArray(previousRows)
      ? previousRows
        .filter((row) => row && row.name)
        .map((row) => [String(row.name), row])
      : []
  );

  const rows = fileNames.map((fileName) => {
    const name = path.parse(fileName).name;
    const previous = previousByName.get(name) || {};
    const count = Number(previous.count ?? previous.merge ?? 0);

    return {
      name,
      count: Number.isFinite(count) ? count : 0,
      title: String(previous.title || ""),
      description: String(previous.description || ""),
    };
  });

  fs.writeFileSync(filePath, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
};

const main = () => {
  ensureDir(imagesRoot);
  ensureDir(groupsRoot);

  const items = [];

  sections.forEach((section, sectionIndex) => {
    const sectionDir = path.join(imagesRoot, section.folder);
    ensureDir(sectionDir);

    const files = getImageFiles(sectionDir);
    writeGroupConfig(section, files);

    files.forEach((fileName, photoIndex) => {
      items.push(makeItem(section, fileName, sectionIndex, photoIndex));
    });
  });

  const output = [
    "const worksCases = [];",
    "",
    `const worksItems = ${JSON.stringify(items, null, 2)};`,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(rootDir, "works-data.js"), output, "utf8");
  console.log(`Галерея пересобрана: ${items.length} фото.`);
};

main();
