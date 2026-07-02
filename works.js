const worksGrid = document.getElementById("works-grid");
const worksCasesHost = document.getElementById("works-cases");
const worksCount = document.getElementById("works-count");
const worksTotal = document.getElementById("works-total");
const worksPageStatus = document.getElementById("works-page-status");
const worksPagePrev = document.querySelector("[data-page-prev]");
const worksPageNext = document.querySelector("[data-page-next]");
const worksCasesPrev = document.querySelector("[data-cases-prev]");
const worksCasesNext = document.querySelector("[data-cases-next]");
const filterButtons = document.querySelectorAll("[data-filter]");
const worksSectionDescription = document.getElementById("works-section-description");
const worksLightbox = document.getElementById("works-lightbox");
const worksLightboxImage = document.getElementById("works-lightbox-image");
const worksLightboxMeta = document.getElementById("works-lightbox-meta");
const worksLightboxTitle = document.getElementById("works-lightbox-title");
const worksLightboxDescription = document.getElementById("works-lightbox-description");
const worksLightboxClose = document.querySelector(".works-lightbox-close");
const worksLightboxBackdrop = document.querySelector("[data-works-lightbox-close]");
const worksLightboxCard = document.querySelector(".works-lightbox-card");
const closeWorksButton = document.querySelector("[data-close-works]");

const mobileQuery = window.matchMedia("(max-width: 860px)");

const categoryOrder = [
  "bitumovoz",
  "vodnaya-tehnika",
  "kmd",
  "krany-kmu",
  "kuzova-ramy",
  "traly-pricepy",
  "truby-metallokonstrukcii",
  "fasady",
  "drugoe",
];

const sectionLabels = {
  "bitumovoz": "Битумовоз",
  "vodnaya-tehnika": "Водная техника",
  "drugoe": "Другое",
  "kmd": "КМД",
  "krany-kmu": "Краны и КМУ",
  "kuzova-ramy": "Кузова и рамы",
  "traly-pricepy": "Тралы и прицепы",
  "truby-metallokonstrukcii": "Трубы и металлоконструкции",
  "fasady": "Фасады",
};

const byId = new Map(worksItems.map((item) => [item.id, item]));
const bySectionAndName = new Map(worksItems.map((item) => [`${item.category}:${item.name}`, item]));

let activeFilter = document.querySelector(".works-filter.is-active")?.dataset.filter || categoryOrder[0];
let activePage = 0;
let activeCasePage = 0;
let lastGalleryDirection = "next";
let lastCasesDirection = "next";
let galleryGroupConfigs = new Map();
let gallerySectionDescriptions = new Map();
let currentWorkId = null;
let lightboxTouchStartX = 0;
let lightboxTouchStartY = 0;
let galleryTouchStartX = 0;
let galleryTouchStartY = 0;
let lastGalleryWheelAt = 0;

const getRequestedSection = () => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("section") || params.get("filter") || window.location.hash.replace(/^#/, "");
  return categoryOrder.includes(requested) ? requested : "";
};

const requestedSection = getRequestedSection();

if (requestedSection) {
  activeFilter = requestedSection;
  filterButtons.forEach((filterButton) => {
    filterButton.classList.toggle("is-active", filterButton.dataset.filter === activeFilter);
  });
}

const getPageSize = () => mobileQuery.matches ? 1 : 4;
const groupPageSize = 4;

const getEnhancedDescription = (item) => {
  const meta = getItemMeta(item);
  return meta.description || "";
};

const getItemMeta = (item) => {
  const configs = galleryGroupConfigs.get(item.category) || [];
  const config = configs.find((row) => String(row.name || "").trim() === item.name) || {};

  return {
    title: String(config.title || ""),
    description: String(config.description || ""),
  };
};

const getVisibleItems = () => worksItems
  .filter((item) => item.category === activeFilter);

const getVisibleCategoryLabel = (item) => sectionLabels[item.category] || item.categoryLabel || item.stage;

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
  await Promise.all(categoryOrder.map((scope) => loadGalleryGroupFile(scope)));
};

const loadGallerySectionDescriptions = async () => {
  const response = await fetch(`./gallery-sections/descriptions.json?v=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    gallerySectionDescriptions = new Map();
    return;
  }

  const rows = await response.json();

  gallerySectionDescriptions = new Map(
    Array.isArray(rows)
      ? rows
        .filter((row) => row && row.slug)
        .map((row) => [String(row.slug), String(row.description || "").trim()])
      : []
  );
};

const normalizeGroupConfig = (config, entries) => {
  const count = Math.min(4, Math.max(0, Number(config.count ?? config.merge) || 0));
  const name = String(config.name || "").trim();

  if (!name || count < 2) {
    return null;
  }

  const startIndex = entries.findIndex((entry) => entry.type === "item" && entry.item.name === name);

  if (startIndex === -1) {
    return null;
  }

  const ids = entries
    .slice(startIndex, startIndex + count)
    .filter((entry) => entry.type === "item")
    .map((entry) => entry.item.id);

  if (ids.length < 2) {
    return null;
  }

  const firstPhoto = bySectionAndName.get(`${activeFilter}:${name}`) || byId.get(ids[0]);

  return {
    startIndex,
    count: ids.length,
    ids,
    title: String(config.title || ""),
    description: String(config.description || ""),
  };
};

const applyGalleryGroup = (entries, config) => {
  const normalized = normalizeGroupConfig(config, entries);

  if (!normalized) {
    return entries;
  }

  const selectedIds = new Set(normalized.ids);
  const nextEntries = [];

  entries.forEach((entry, index) => {
    if (index === normalized.startIndex) {
      nextEntries.push({
        type: "group",
        group: {
          ids: normalized.ids,
          title: normalized.title,
          description: normalized.description,
        },
      });
    }

    if (entry.type === "item" && selectedIds.has(entry.item.id)) {
      return;
    }

    nextEntries.push(entry);
  });

  return nextEntries;
};

const getVisibleEntries = () => {
  const baseEntries = getVisibleItems().map((item) => ({ type: "item", item }));
  const configs = galleryGroupConfigs.get(activeFilter) || [];

  return configs.reduce((entries, config) => applyGalleryGroup(entries, config), baseEntries);
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

  entries.forEach((entry) => {
    const slotSize = getEntrySlotSize(entry, pageSize);

    if (currentPage.length && currentSlots + slotSize > pageSize) {
      pages.push(currentPage);
      currentPage = [];
      currentSlots = 0;
    }

    currentPage.push(entry);
    currentSlots += slotSize;

    if (currentSlots >= pageSize) {
      pages.push(currentPage);
      currentPage = [];
      currentSlots = 0;
    }
  });

  if (currentPage.length) {
    pages.push(currentPage);
  }

  return pages.length ? pages : [[]];
};

const getPageSlotCount = (entries, pageSize) => {
  return entries.reduce((total, entry) => total + getEntrySlotSize(entry, pageSize), 0);
};

const getGalleryPageCount = () => {
  const pageSize = getPageSize();
  return paginateEntries(getVisibleEntries(), pageSize).length;
};

const navigateGallery = (direction) => {
  const pageCount = getGalleryPageCount();

  if (pageCount <= 1) {
    return;
  }

  activePage = (activePage + direction + pageCount) % pageCount;
  lastGalleryDirection = direction < 0 ? "prev" : "next";
  renderGrid();
};

const renderWorkCard = (item) => {
  const meta = getItemMeta(item);
  const hasText = Boolean(meta.title || meta.description);

  return `
    <article class="works-card${hasText ? " works-card-has-body" : ""}" data-work-id="${item.id}" tabindex="0">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      ${hasText ? `
        <div class="works-card-body">
          ${meta.title ? `<h3>${meta.title}</h3>` : ""}
          ${meta.description ? `<p>${meta.description}</p>` : ""}
        </div>
      ` : ""}
    </article>
  `;
};

const renderWorkGroup = (group) => {
  const photos = group.ids.map((id) => byId.get(id)).filter(Boolean);
  const firstPhoto = photos[0];
  const hasText = Boolean(group.title || group.description);

  if (!firstPhoto) {
    return "";
  }

  return `
    <article class="works-card works-card-group${hasText ? " works-card-has-body" : ""}" data-work-id="${firstPhoto.id}" data-group-size="${photos.length}" tabindex="0" style="--group-span: ${photos.length};">
      <div class="works-card-group-media">
        ${photos.map((photo) => `<img src="${photo.src}" alt="${photo.alt}" loading="lazy" data-work-id="${photo.id}">`).join("")}
      </div>
      ${hasText ? `
        <div class="works-card-body works-card-group-body">
          ${group.title ? `<h3>${group.title}</h3>` : ""}
          ${group.description ? `<p>${group.description}</p>` : ""}
        </div>
      ` : ""}
    </article>
  `;
};

const renderWorkEntry = (entry) => entry.type === "group"
  ? renderWorkGroup(entry.group)
  : renderWorkCard(entry.item);

const renderGrid = () => {
  const visibleItems = getVisibleItems();
  const visibleEntries = getVisibleEntries();
  const pageSize = getPageSize();
  const pages = paginateEntries(visibleEntries, pageSize);
  const pageCount = pages.length;
  activePage = Math.min(activePage, pageCount - 1);
  const pageEntries = pages[activePage] || [];
  const pageSlotCount = Math.max(1, Math.min(pageSize, getPageSlotCount(pageEntries, pageSize)));
  const sectionDescription = gallerySectionDescriptions.get(activeFilter) || "";

  if (worksSectionDescription) {
    worksSectionDescription.textContent = sectionDescription;
    worksSectionDescription.hidden = !sectionDescription;
  }

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
        В этот раздел ещё не закинули фото.
      </div>
    `;
  }

  if (worksPageStatus) {
    worksPageStatus.textContent = `${activePage + 1} / ${pageCount}`;
  }

  if (worksPagePrev) {
    worksPagePrev.disabled = pageCount <= 1;
  }

  if (worksPageNext) {
    worksPageNext.disabled = pageCount <= 1;
  }
};

const renderCases = () => {
  const section = worksCasesHost?.closest(".works-cases-section");

  if (!worksCasesHost || !worksCases.length) {
    section?.setAttribute("hidden", "");
    return;
  }

  section?.removeAttribute("hidden");
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
  if (!worksCasesHost || !worksCases.length) {
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

const openWork = (id) => {
  const item = byId.get(Number(id));

  if (!item || !worksLightbox || !worksLightboxImage) {
    return;
  }

  currentWorkId = item.id;
  const meta = getItemMeta(item);
  const hasMeta = Boolean(meta.title || meta.description);

  worksLightboxImage.src = item.src;
  worksLightboxImage.alt = item.alt;
  worksLightboxMeta.textContent = "";
  worksLightboxTitle.textContent = meta.title;
  worksLightboxDescription.textContent = meta.description;
  worksLightboxCard?.classList.toggle("is-image-only", !hasMeta);
  worksLightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeWork = () => {
  if (!worksLightbox || !worksLightboxImage) {
    return;
  }

  worksLightbox.hidden = true;
  worksLightboxImage.src = "";
  worksLightboxCard?.classList.remove("is-image-only");
  currentWorkId = null;
  document.body.style.overflow = "";
};

const getLightboxItems = () => getVisibleItems();

const navigateWork = (direction) => {
  if (!worksLightbox || worksLightbox.hidden || currentWorkId === null) {
    return;
  }

  const items = getLightboxItems();

  if (!items.length) {
    return;
  }

  const currentIndex = items.findIndex((item) => item.id === currentWorkId);
  const fallbackIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextIndex = (fallbackIndex + direction + items.length) % items.length;

  openWork(items[nextIndex].id);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || categoryOrder[0];

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("is-active", filterButton === button);
    });

    activePage = 0;
    lastGalleryDirection = "next";
    renderGrid();
  });
});

worksPagePrev?.addEventListener("click", () => {
  navigateGallery(-1);
});

worksPageNext?.addEventListener("click", () => {
  navigateGallery(1);
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
  const target = event.target.closest("[data-work-id]");
  if (target) {
    openWork(target.dataset.workId);
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

worksGrid?.addEventListener("wheel", (event) => {
  const primaryDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

  if (Math.abs(primaryDelta) < 22 || getGalleryPageCount() <= 1) {
    return;
  }

  const now = Date.now();

  if (now - lastGalleryWheelAt < 520) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  lastGalleryWheelAt = now;
  navigateGallery(primaryDelta > 0 ? 1 : -1);
}, { passive: false });

worksGrid?.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];

  if (!touch) {
    return;
  }

  galleryTouchStartX = touch.clientX;
  galleryTouchStartY = touch.clientY;
}, { passive: true });

worksGrid?.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];

  if (!touch || getGalleryPageCount() <= 1) {
    return;
  }

  const deltaX = touch.clientX - galleryTouchStartX;
  const deltaY = touch.clientY - galleryTouchStartY;

  if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
    return;
  }

  navigateGallery(deltaX < 0 ? 1 : -1);
}, { passive: true });

worksLightboxClose?.addEventListener("click", closeWork);
worksLightboxBackdrop?.addEventListener("click", closeWork);

document.addEventListener("keydown", (event) => {
  if (!worksLightbox || worksLightbox.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeWork();
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigateWork(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    navigateWork(1);
  }
});

worksLightboxCard?.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];

  if (!touch) {
    return;
  }

  lightboxTouchStartX = touch.clientX;
  lightboxTouchStartY = touch.clientY;
}, { passive: true });

worksLightboxCard?.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];

  if (!touch) {
    return;
  }

  const deltaX = touch.clientX - lightboxTouchStartX;
  const deltaY = touch.clientY - lightboxTouchStartY;

  if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
    return;
  }

  navigateWork(deltaX < 0 ? 1 : -1);
}, { passive: true });

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
  loadGalleryGroups(),
  loadGallerySectionDescriptions(),
])
  .catch((error) => {
    console.error("Gallery config failed:", error);
  })
  .finally(() => {
    renderGrid();
  });
