const worksGrid = document.getElementById("works-grid");
const worksCasesHost = document.getElementById("works-cases");
const worksCount = document.getElementById("works-count");
const worksTotal = document.getElementById("works-total");
const worksSearch = document.getElementById("works-search");
const worksPageStatus = document.getElementById("works-page-status");
const worksPagePrev = document.querySelector("[data-page-prev]");
const worksPageNext = document.querySelector("[data-page-next]");
const worksCasesPrev = document.querySelector("[data-cases-prev]");
const worksCasesNext = document.querySelector("[data-cases-next]");
const filterButtons = document.querySelectorAll("[data-filter]");
const worksLightbox = document.getElementById("works-lightbox");
const worksLightboxImage = document.getElementById("works-lightbox-image");
const worksLightboxMeta = document.getElementById("works-lightbox-meta");
const worksLightboxTitle = document.getElementById("works-lightbox-title");
const worksLightboxDescription = document.getElementById("works-lightbox-description");
const worksLightboxClose = document.querySelector(".works-lightbox-close");
const worksLightboxBackdrop = document.querySelector("[data-works-lightbox-close]");
const closeWorksButton = document.querySelector("[data-close-works]");

const mobileQuery = window.matchMedia("(max-width: 860px)");

let activeFilter = "all";
let activeSearch = "";
let activePage = 0;
let activeCasePage = 0;
let lastGalleryDirection = "next";
let lastCasesDirection = "next";
let galleryOrderMaps = new Map();
let galleryGroupConfigs = new Map();
let gallerySectionMap = new Map();
let showPhotoIds = false;

const byId = new Map(worksItems.map((item) => [item.id, item]));

const getPageSize = () => mobileQuery.matches ? 1 : 4;
const groupPageSize = 4;

const categoryOrder = [
  "kamazy",
  "traly",
  "kater",
  "bortovaya-tehnika",
  "krany-manipulyatory",
  "detali-zapchasti",
  "truby-profil",
  "kuzova-ramy",
  "drugie-raboty",
  "prom-oborudovanie",
  "metall-fasad-derevo",
  "prochee",
];

const sectionLabels = {
  "all": "Все",
  "kamazy": "Битумовозы",
  "traly": "Тралы-прицепы",
  "kater": "Катер",
  "bortovaya-tehnika": "КМД",
  "krany-manipulyatory": "Краны|манипуляторы",
  "detali-zapchasti": "Детали и запчасти",
  "truby-profil": "Трубы и профиль",
  "kuzova-ramy": "Кузова и рамы",
  "drugie-raboty": "Другие работы",
  "svarochnye-raboty": "Сварочные работы",
  "prom-oborudovanie": "Промышленное оборудование",
  "metall-fasad-derevo": "Металл, фасады и дерево",
  "prochee": "Прочее",
};

const sectionAliases = new Map(Object.entries({
  "all": "all",
  "все": "all",
  "всё": "all",
  "kamazy": "kamazy",
  "камазы": "kamazy",
  "битумовозы": "kamazy",
  "битумовоз": "kamazy",
  "traly": "traly",
  "тралы": "traly",
  "тралы-прицепы": "traly",
  "прицепы": "traly",
  "трал": "traly",
  "kater": "kater",
  "катер": "kater",
  "bortovaya-tehnika": "bortovaya-tehnika",
  "бортовая техника": "bortovaya-tehnika",
  "бортовая": "bortovaya-tehnika",
  "krany-manipulyatory": "krany-manipulyatory",
  "краны": "krany-manipulyatory",
  "манипуляторы": "krany-manipulyatory",
  "краны|манипуляторы": "krany-manipulyatory",
  "краны и манипуляторы": "krany-manipulyatory",
  "detali-zapchasti": "detali-zapchasti",
  "детали": "detali-zapchasti",
  "запчасти": "detali-zapchasti",
  "детали и запчасти": "detali-zapchasti",
  "truby-profil": "truby-profil",
  "трубы": "truby-profil",
  "профиль": "truby-profil",
  "трубы и профиль": "truby-profil",
  "kuzova-ramy": "kuzova-ramy",
  "кузова": "kuzova-ramy",
  "рамы": "kuzova-ramy",
  "кузова и рамы": "kuzova-ramy",
  "svarochnye-raboty": "svarochnye-raboty",
  "сварочные работы": "svarochnye-raboty",
  "сварочные": "svarochnye-raboty",
  "сварка": "svarochnye-raboty",
  "drugie-raboty": "drugie-raboty",
  "другие работы": "drugie-raboty",
  "другие": "drugie-raboty",
  "prom-oborudovanie": "prom-oborudovanie",
  "промышленное оборудование": "prom-oborudovanie",
  "пром оборудование": "prom-oborudovanie",
  "metall-fasad-derevo": "metall-fasad-derevo",
  "металл фасады дерево": "metall-fasad-derevo",
  "металл, фасады и дерево": "metall-fasad-derevo",
  "prochee": "prochee",
  "прочее": "prochee",
}));

const getCategoryOrder = (category) => {
  const index = categoryOrder.indexOf(category);
  return index === -1 ? categoryOrder.length : index;
};

const getManualOrder = (item) => {
  const scope = activeFilter === "all" ? "all" : activeFilter;
  const orderMap = galleryOrderMaps.get(scope);
  return orderMap?.get(item.id) ?? Number.MAX_SAFE_INTEGER;
};

const compareWorksItems = (a, b) => {
  const orderDiff = getManualOrder(a) - getManualOrder(b);
  if (orderDiff !== 0) {
    return orderDiff;
  }

  const categoryDiff = getCategoryOrder(a.category) - getCategoryOrder(b.category);
  if (categoryDiff !== 0) {
    return categoryDiff;
  }

  return a.id - b.id;
};

const loadGalleryOrderFile = async (scope) => {
  const response = await fetch(`./gallery-order/${scope}.json?v=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Не загрузился ${scope}.json`);
  }

  const rows = await response.json();
  const orderMap = new Map();

  rows.forEach((row) => {
    const order = Number(row.id);
    const photoId = Number(row.photoId);

    if (Number.isFinite(order) && Number.isFinite(photoId)) {
      orderMap.set(photoId, order);
    }
  });

  galleryOrderMaps.set(scope, orderMap);
};

const loadGalleryOrders = async () => {
  const scopes = ["all", ...categoryOrder];
  await Promise.all(scopes.map((scope) => loadGalleryOrderFile(scope)));
};

const loadGalleryGroupFile = async (scope) => {
  const response = await fetch(`./gallery-groups/${scope}.json?v=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    galleryGroupConfigs.set(scope, []);
    return;
  }

  const rows = await response.json();
  galleryGroupConfigs.set(scope, Array.isArray(rows) ? rows : []);
};

const loadGalleryGroups = async () => {
  const scopes = ["all", ...categoryOrder];
  await Promise.all(scopes.map((scope) => loadGalleryGroupFile(scope)));
};

const normalizeSectionName = (value) => {
  const key = String(value || "").trim().toLowerCase();
  return sectionAliases.get(key) || "";
};

const getDefaultSections = (item) => ["all", item.category].filter(Boolean);

const normalizeSections = (sections) => {
  const rawSections = Array.isArray(sections)
    ? sections
    : String(sections || "").split(",").map((section) => section.trim());

  return [...new Set(rawSections
    .map(normalizeSectionName)
    .filter(Boolean))];
};

const loadGallerySections = async () => {
  gallerySectionMap = new Map();

  const response = await fetch(`./gallery-sections/photos.json?v=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return;
  }

  const rows = await response.json();

  if (!Array.isArray(rows)) {
    return;
  }

  rows.forEach((row) => {
    const photoId = Number(row.photoId ?? row.id);

    if (!Number.isFinite(photoId)) {
      return;
    }

    gallerySectionMap.set(photoId, normalizeSections(row.sections));
  });
};

const loadGallerySettings = async () => {
  const response = await fetch(`./gallery-settings/show-photo-ids.json?v=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return;
  }

  const settings = await response.json();
  showPhotoIds = settings.showPhotoIds === true;
};

const phraseBank = [
  "Работа уже взята в оборот: поверхность читается по кромкам, переходам и следам старого покрытия.",
  "Здесь результат делают не на глазок: сначала чистая база, потом спокойный переход к финишу.",
  "Хорошо видна рабочая кухня процесса: металл выводят из уставшего состояния к нормальной основе.",
  "Дело сдвинулось с мертвой точки: участок уже прошёл важный этап подготовки.",
  "Тут нельзя рубить с плеча: важны углы, ребра и зоны вокруг крепежа.",
  "Качество держится на терпении: шаг за шагом убирается лишнее и проявляется ровная основа.",
  "Техника получает второе дыхание: старые следы уходят, поверхность готовится к защите.",
  "Всё разложено по полочкам: подготовка, контроль состояния и следующий рабочий шаг.",
  "Рабочий момент без прикрас: такой участок требует больше внимания, чем кажется с первого взгляда.",
  "Масштаб виден сразу: металл приводят в порядок не точечно, а по всей ответственной зоне."
];

const categoryLeads = {
  "kamazy": [
    "Кадр по грузовой технике КамАЗ: кабина, кузов или самосвальная часть после подготовки.",
    "Работа с КамАЗом: виден участок, где важны геометрия кузова, кромки и защита металла.",
    "Серия по КамАЗу: подготовка и окраска читаются по состоянию кабины, рамы или кузова.",
  ],
  "traly": [
    "Трал или полуприцеп: на фото видна несущая часть, борт, аппарель или зона креплений.",
    "Работа с прицепной техникой: здесь важны плоскости, ребра жёсткости и состояние металла.",
    "Кадр по тралу: обработка нужна не только для вида, но и для защиты рабочей поверхности.",
  ],
  "kater": [
    "Корпус катера: видны этапы очистки, грунта или финишного покрытия по борту.",
    "Серия по катеру: поверхность корпуса готовится к ровному защитному слою.",
    "Кадр по водной технике: важны чистая база, маскировка и аккуратная линия покрытия.",
  ],
  "bortovaya-tehnika": [
    "КМД или спецкузов: в кадре рабочая платформа, борт либо ёмкость.",
    "Фото по бортовой машине: проверяется состояние металла на больших открытых плоскостях.",
    "Кадр по грузовой надстройке: важны борта, стойки, сварные зоны и будущая защита.",
  ],
  "krany-manipulyatory": [
    "Крановая техника или манипулятор: виден элемент стрелы, опоры либо силовой конструкции.",
    "Работа с крановым узлом: здесь нельзя терять контроль по стыкам и нагруженным местам.",
    "Кадр по подъёмной технике: подготовка нужна для долговечного покрытия на сложной геометрии.",
  ],
  "detali-zapchasti": [
    "Отдельная деталь или запчасть: крупный план помогает оценить поверхность без лишнего шума.",
    "Детальный кадр: видно, как обрабатываются диски, плиты, навесные элементы или мелкие узлы.",
    "Работа с запчастью: на такой площади особенно заметны края, раковины и следы старого слоя.",
  ],
  "truby-profil": [
    "Трубы и профиль: показана наружная или внутренняя очистка протяжённой металлической секции.",
    "Кадр по трубному металлу: важны равномерность обработки и отсутствие пропущенных зон.",
    "Работа с профилем: поверхность готовится под дальнейшую защиту по всей длине элемента.",
  ],
  "kuzova-ramy": [
    "Кузов или рама: в кадре несущая часть, где подготовка напрямую влияет на долговечность.",
    "Работа с рамой/кузовом: видны проблемные зоны старого покрытия и коррозии.",
    "Кадр по восстановлению основы: металл приводится в состояние под грунт и покраску.",
  ],
  "drugie-raboty": [
    "Рабочий кадр по нестандартной задаче: важны состояние поверхности и аккуратная подготовка.",
    "Отдельный участок работ: видно, как металл приводится к нормальной базе под следующий этап.",
    "Кадр из другой категории работ: здесь важны контроль зоны, очистка и защита поверхности.",
  ],
  "prom-oborudovanie": [
    "Промышленный агрегат: видна окраска или подготовка крупного рабочего корпуса.",
    "Кадр по оборудованию: покрытие должно выдерживать эксплуатацию, а не только выглядеть ровно.",
    "Работа с промышленной деталью: важны плоскости, углы и аккуратный финиш.",
  ],
  "metall-fasad-derevo": [
    "Объект вне спецтехники: фасад, металл, конструкция или деревянная поверхность.",
    "Кадр по строительной/декоративной поверхности: задача в аккуратной очистке и защите.",
    "Работа с нестандартным объектом: важно сохранить геометрию и получить ровную основу.",
  ],
  "prochee": [
    "Сводный кадр из рабочих материалов: видно один из этапов подготовки или результата.",
    "Фото из общей серии: участок показывает фактуру, состояние поверхности и ход работ.",
    "Кадр из архива работ: его можно уточнить позже, когда будем удалять лишние фото.",
  ],
};

const getEnhancedDescription = (item) => {
  const leads = categoryLeads[item.category] || categoryLeads.prochee;
  const lead = leads[item.id % leads.length];
  const phrase = phraseBank[item.id % phraseBank.length];
  const step = item.stage ? `Этап: ${item.stage}.` : "";
  return `${lead} ${step} ${phrase}`.trim();
};

const getSearchText = (item) => [
  item.title,
  item.description,
  getEnhancedDescription(item),
  item.project,
  item.categoryLabel,
  item.category,
  item.stage,
  item.step,
  ...(item.tags || []),
].join(" ").toLowerCase();

const getItemSections = (item) => {
  if (!gallerySectionMap.has(item.id)) {
    return getDefaultSections(item);
  }

  return gallerySectionMap.get(item.id);
};

const itemMatchesActiveScope = (item) => {
  const sections = getItemSections(item);
  const scope = getActiveScope();

  return sections.includes(scope);
};

const getVisibleCategoryLabel = (item) => {
  const scope = getActiveScope();

  if (scope !== "all" && getItemSections(item).includes(scope)) {
    return sectionLabels[scope] || item.categoryLabel || item.stage;
  }

  return item.categoryLabel || item.stage;
};

const renderCases = () => {
  if (!worksCasesHost) {
    return;
  }

  worksCasesHost.innerHTML = worksCases.map((item) => {
    const before = item.before.map((id) => byId.get(id)).filter(Boolean);
    const after = item.after.map((id) => byId.get(id)).filter(Boolean);
    const media = [...before.slice(0, 1), ...after.slice(0, 1)];

    return `
      <article class="works-case">
        <div class="works-case-media">
          ${media.map((photo) => `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`).join("")}
        </div>
        <div class="works-case-labels">
          <span>до / после</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </article>
    `;
  }).join("");

  updateCasesSlider();
};

const updateCasesSlider = () => {
  if (!worksCasesHost) {
    return;
  }

  const isMobile = mobileQuery.matches;
  const caseCards = worksCasesHost.querySelectorAll(".works-case");
  const pageCount = Math.max(1, caseCards.length);
  activeCasePage = Math.min(activeCasePage, pageCount - 1);

  worksCasesHost.classList.remove("turn-next", "turn-prev");

  if (!isMobile) {
    worksCasesHost.style.transform = "";
    caseCards.forEach((card) => {
      card.removeAttribute("aria-hidden");
    });
    return;
  }

  void worksCasesHost.offsetWidth;
  worksCasesHost.classList.add(lastCasesDirection === "prev" ? "turn-prev" : "turn-next");
  worksCasesHost.scrollTo({
    left: worksCasesHost.clientWidth * activeCasePage,
    behavior: "smooth",
  });

  caseCards.forEach((card, index) => {
    card.setAttribute("aria-hidden", String(index !== activeCasePage));
  });
};

const getVisibleItems = () => {
  return worksItems.filter((item) => {
    const matchesCategory = itemMatchesActiveScope(item);
    const matchesSearch = !activeSearch || getSearchText(item).includes(activeSearch);
    return matchesCategory && matchesSearch;
  }).sort(compareWorksItems);
};

const getActiveScope = () => activeFilter === "all" ? "all" : activeFilter;

const getEntryItemIdSet = (entries) => new Set(entries
  .filter((entry) => entry.type === "item")
  .map((entry) => entry.item.id));

const getPagePhotoIds = (config, entries) => {
  if (!Array.isArray(config.photoIds)) {
    return [];
  }

  const entryItemIds = getEntryItemIdSet(entries);
  return config.photoIds
    .map(Number)
    .filter((id) => Number.isFinite(id) && entryItemIds.has(id));
};

const applyPagePhotoOrder = (entries, config) => {
  const page = Math.max(1, Number(config.page) || 1);
  const startIndex = (page - 1) * groupPageSize;

  if (startIndex >= entries.length) {
    return entries;
  }

  const requestedIds = [...new Set(getPagePhotoIds(config, entries))].slice(0, groupPageSize);

  if (!requestedIds.length) {
    return entries;
  }

  const currentItems = entries
    .slice(startIndex, startIndex + requestedIds.length)
    .filter((entry) => entry.type === "item")
    .map((entry) => entry.item);

  const changed = requestedIds.some((id, index) => currentItems[index]?.id !== id);

  if (!changed) {
    return entries;
  }

  const selectedIds = new Set(requestedIds);
  const displacedItems = currentItems.filter((item) => !selectedIds.has(item.id));
  const selectedById = new Map(requestedIds.map((id) => [id, byId.get(id)]).filter(([, item]) => Boolean(item)));
  const nextEntries = [];
  let targetIndex = 0;
  let displacedIndex = 0;

  entries.forEach((entry, index) => {
    if (index >= startIndex && index < startIndex + requestedIds.length) {
      const requestedItem = selectedById.get(requestedIds[targetIndex]);
      targetIndex += 1;

      if (requestedItem) {
        nextEntries.push({ type: "item", item: requestedItem });
      }

      return;
    }

    if (entry.type === "item" && selectedIds.has(entry.item.id)) {
      const replacement = displacedItems[displacedIndex];
      displacedIndex += 1;

      if (replacement) {
        nextEntries.push({ type: "item", item: replacement });
      }

      return;
    }

    nextEntries.push(entry);
  });

  return nextEntries;
};

const normalizeGroupConfig = (config, entries) => {
  const page = Math.max(1, Number(config.page) || 1);
  const merge = Math.min(4, Math.max(0, Number(config.merge) || 0));
  const startIndex = (page - 1) * groupPageSize;

  if (merge < 2 || startIndex >= entries.length) {
    return null;
  }

  const blockItems = entries
    .slice(startIndex, startIndex + merge)
    .filter((entry) => entry.type === "item")
    .map((entry) => entry.item);

  if (!blockItems.length) {
    return null;
  }

  const requestedIds = getPagePhotoIds(config, entries);

  const ids = [...new Set(requestedIds)].slice(0, merge);

  blockItems.forEach((item) => {
    if (ids.length < merge && !ids.includes(item.id)) {
      ids.push(item.id);
    }
  });

  if (ids.length < 2) {
    return null;
  }

  return {
    page,
    merge: ids.length,
    startIndex,
    ids,
    title: config.title,
    description: config.description,
  };
};

const applyGalleryGroup = (entries, config) => {
  const normalized = normalizeGroupConfig(config, entries);

  if (!normalized) {
    return entries;
  }

  const { startIndex, merge, ids } = normalized;
  const selectedIds = new Set(ids);
  const selectedPhotos = ids.map((id) => byId.get(id)).filter(Boolean);

  if (selectedPhotos.length < 2) {
    return entries;
  }

  const displacedItems = entries
    .slice(startIndex, startIndex + merge)
    .filter((entry) => entry.type === "item" && !selectedIds.has(entry.item.id))
    .map((entry) => entry.item);

  const nextEntries = [];
  let displacedIndex = 0;

  entries.forEach((entry, index) => {
    if (index === startIndex) {
      nextEntries.push({
        type: "group",
        group: {
          ids,
          title: normalized.title,
          description: normalized.description,
        },
      });
    }

    if (index >= startIndex && index < startIndex + merge) {
      return;
    }

    if (entry.type === "item" && selectedIds.has(entry.item.id)) {
      const replacement = displacedItems[displacedIndex];
      displacedIndex += 1;

      if (replacement) {
        nextEntries.push({ type: "item", item: replacement });
      }

      return;
    }

    nextEntries.push(entry);
  });

  return nextEntries;
};

const getVisibleEntries = () => {
  const scope = getActiveScope();
  const configs = galleryGroupConfigs.get(scope) || [];
  const baseEntries = getVisibleItems().map((item) => ({ type: "item", item }));
  const sortedConfigs = configs.sort((a, b) => (Number(a.page) || 1) - (Number(b.page) || 1));
  const orderedEntries = sortedConfigs
    .reduce((entries, config) => applyPagePhotoOrder(entries, config), baseEntries);

  return sortedConfigs
    .filter((config) => Number(config.merge) >= 2)
    .reduce((entries, config) => applyGalleryGroup(entries, config), orderedEntries);
};

const getPageSlotLimit = (pageIndex, pageSize) => {
  if (pageSize <= 1) {
    return 1;
  }

  const scope = getActiveScope();
  const configs = galleryGroupConfigs.get(scope) || [];
  const pageConfig = configs.find((config) => Number(config.page) === pageIndex + 1);
  const cardCount = Number(pageConfig?.cardCount);

  if (!Number.isFinite(cardCount) || cardCount < 1) {
    return pageSize;
  }

  return Math.min(pageSize, Math.max(1, Math.floor(cardCount)));
};

const getEntrySlotSize = (entry, pageSize) => {
  if (entry.type !== "group") {
    return 1;
  }

  return Math.min(pageSize, Math.max(1, entry.group.ids.length));
};

const paginateEntries = (entries, pageSize) => {
  const pages = [];
  let currentPage = [];
  let currentSlots = 0;
  let pageIndex = 0;

  entries.forEach((entry) => {
    const slotSize = getEntrySlotSize(entry, pageSize);
    let pageLimit = getPageSlotLimit(pageIndex, pageSize);

    if (currentPage.length && currentSlots + slotSize > pageLimit) {
      pages.push(currentPage);
      currentPage = [];
      currentSlots = 0;
      pageIndex += 1;
      pageLimit = getPageSlotLimit(pageIndex, pageSize);
    }

    currentPage.push(entry);
    currentSlots += slotSize;

    if (currentSlots >= pageLimit) {
      pages.push(currentPage);
      currentPage = [];
      currentSlots = 0;
      pageIndex += 1;
    }
  });

  if (currentPage.length) {
    pages.push(currentPage);
  }

  return pages.length ? pages : [[]];
};

const renderPhotoId = (item) => showPhotoIds
  ? `<strong class="works-photo-id">ID ${item.id}</strong>`
  : "";

const renderGroupPhotoIds = (photos) => showPhotoIds
  ? `<strong class="works-photo-id">ID ${photos.map((photo) => photo.id).join(", ")}</strong>`
  : "";

const renderWorkCard = (item) => `
  <article class="works-card" data-work-id="${item.id}" tabindex="0">
    <img src="${item.src}" alt="${item.alt}" loading="lazy">
    <div class="works-card-body">
      <div class="works-card-meta">
        <span>${getVisibleCategoryLabel(item)}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${getEnhancedDescription(item)}</p>
      ${renderPhotoId(item)}
    </div>
  </article>
`;

const renderWorkGroup = (group) => {
  const photos = group.ids.map((id) => byId.get(id)).filter(Boolean);
  const firstPhoto = photos[0];

  if (!firstPhoto) {
    return "";
  }

  return `
    <article class="works-card works-card-group" data-work-id="${firstPhoto.id}" data-group-size="${photos.length}" tabindex="0" style="--group-span: ${photos.length};">
      <div class="works-card-group-media">
        ${photos.map((photo) => `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`).join("")}
      </div>
      <div class="works-card-body works-card-group-body">
        <div class="works-card-meta">
          <span>${getVisibleCategoryLabel(firstPhoto)}</span>
        </div>
        <h3>${group.title || firstPhoto.title}</h3>
        <p>${group.description || getEnhancedDescription(firstPhoto)}</p>
        ${renderGroupPhotoIds(photos)}
      </div>
    </article>
  `;
};

const renderWorkEntry = (entry) => {
  if (entry.type === "group") {
    return renderWorkGroup(entry.group);
  }

  return renderWorkCard(entry.item);
};

const getPageSlotCount = (entries, pageSize) => {
  return entries.reduce((total, entry) => total + getEntrySlotSize(entry, pageSize), 0);
};

const renderGrid = () => {
  const visibleItems = getVisibleItems();
  const visibleEntries = getVisibleEntries();
  const pageSize = getPageSize();
  const pages = paginateEntries(visibleEntries, pageSize);
  const pageCount = pages.length;
  activePage = Math.min(activePage, pageCount - 1);
  const pageEntries = pages[activePage] || [];
  const pageSlotCount = Math.max(1, Math.min(pageSize, getPageSlotCount(pageEntries, pageSize)));

  if (worksCount) {
    worksCount.textContent = `${visibleItems.length} фото`;
  }

  if (worksTotal) {
    worksTotal.textContent = `${worksItems.length} фото`;
  }

  worksGrid.classList.remove("is-changing", "turn-next", "turn-prev");
  worksGrid.dataset.pageSlots = String(pageSlotCount);
  void worksGrid.offsetWidth;
  worksGrid.classList.add("is-changing", lastGalleryDirection === "prev" ? "turn-prev" : "turn-next");

  worksGrid.innerHTML = pageEntries.map((entry) => renderWorkEntry(entry)).join("");

  if (!pageEntries.length) {
    worksGrid.innerHTML = `
      <div class="works-empty glass">
        Ничего не найдено. Попробуйте другое слово или сбросьте фильтр.
      </div>
    `;
  }

  if (worksPageStatus) {
    worksPageStatus.textContent = `${activePage + 1} / ${pageCount}`;
  }

  if (worksPagePrev) {
    worksPagePrev.disabled = visibleEntries.length <= pageSize;
  }

  if (worksPageNext) {
    worksPageNext.disabled = visibleEntries.length <= pageSize;
  }
};

const openWork = (id) => {
  const item = byId.get(Number(id));

  if (!item || !worksLightbox || !worksLightboxImage) {
    return;
  }

  worksLightboxImage.src = item.src;
  worksLightboxImage.alt = item.alt;
  worksLightboxMeta.textContent = `${getVisibleCategoryLabel(item) || item.project} · ${item.stage}`;
  worksLightboxTitle.textContent = item.title;
  worksLightboxDescription.textContent = getEnhancedDescription(item);
  worksLightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeWork = () => {
  if (!worksLightbox || !worksLightboxImage) {
    return;
  }

  worksLightbox.hidden = true;
  worksLightboxImage.src = "";
  document.body.style.overflow = "";
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("is-active", filterButton === button);
    });

    activePage = 0;
    lastGalleryDirection = "next";
    renderGrid();
  });
});

worksSearch?.addEventListener("input", () => {
  activeSearch = worksSearch.value.trim().toLowerCase();
  activePage = 0;
  lastGalleryDirection = "next";
  renderGrid();
});

worksPagePrev?.addEventListener("click", () => {
  const visibleItems = getVisibleItems();
  const pageSize = getPageSize();
  const pageCount = Math.max(1, Math.ceil(visibleItems.length / pageSize));
  activePage = (activePage - 1 + pageCount) % pageCount;
  lastGalleryDirection = "prev";
  renderGrid();
});

worksPageNext?.addEventListener("click", () => {
  const visibleItems = getVisibleItems();
  const pageSize = getPageSize();
  const pageCount = Math.max(1, Math.ceil(visibleItems.length / pageSize));
  activePage = (activePage + 1) % pageCount;
  lastGalleryDirection = "next";
  renderGrid();
});

worksCasesPrev?.addEventListener("click", () => {
  const pageCount = Math.max(1, worksCases.length);
  activeCasePage = (activeCasePage - 1 + pageCount) % pageCount;
  lastCasesDirection = "prev";
  updateCasesSlider();
});

worksCasesNext?.addEventListener("click", () => {
  const pageCount = Math.max(1, worksCases.length);
  activeCasePage = (activeCasePage + 1) % pageCount;
  lastCasesDirection = "next";
  updateCasesSlider();
});

mobileQuery.addEventListener("change", () => {
  activePage = 0;
  activeCasePage = 0;
  lastGalleryDirection = "next";
  lastCasesDirection = "next";
  renderGrid();
  updateCasesSlider();
});

worksGrid?.addEventListener("click", (event) => {
  const card = event.target.closest(".works-card");
  if (card) {
    openWork(card.dataset.workId);
  }
});

worksGrid?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const card = event.target.closest(".works-card");
  if (card) {
    openWork(card.dataset.workId);
  }
});

worksLightboxClose?.addEventListener("click", closeWork);
worksLightboxBackdrop?.addEventListener("click", closeWork);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && worksLightbox && !worksLightbox.hidden) {
    closeWork();
  }
});

closeWorksButton?.addEventListener("click", () => {
  const homeUrl = new URL("./index.html", window.location.href).href;

  if (window.opener && !window.opener.closed) {
    window.opener.location.href = homeUrl;
    window.opener.focus();
    window.close();
  }

  window.location.href = homeUrl;
});

renderCases();
Promise.all([
  loadGalleryOrders(),
  loadGalleryGroups(),
  loadGallerySections(),
  loadGallerySettings(),
])
  .catch((error) => {
    console.error("Gallery config failed:", error);
  })
  .finally(() => {
    renderGrid();
  });
