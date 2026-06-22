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

const byId = new Map(worksItems.map((item) => [item.id, item]));

const getPageSize = () => mobileQuery.matches ? 1 : 4;

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

const stageLeads = {
  "до/после": [
    "Сравнительный кадр по объекту «{project}».",
    "Фото из серии до и после для направления «{project}».",
    "На снимке зафиксирован переходный результат по задаче «{project}».",
  ],
  "пескоструй": [
    "Пескоструйный этап по объекту «{project}».",
    "Очистка поверхности перед дальнейшей защитой: «{project}».",
    "Фрагмент подготовки металла в работе «{project}».",
  ],
  "покраска": [
    "Финишный окрасочный этап по объекту «{project}».",
    "На фото виден слой покрытия и итоговая геометрия цвета.",
    "Покраска показывает, насколько ровно была подготовлена основа.",
  ],
  "детали": [
    "Крупный план по узлу или отдельной детали.",
    "Фрагмент, где важны стыки, края и состояние поверхности.",
    "Детальный кадр помогает оценить качество обработки на малой зоне.",
  ],
};

const getEnhancedDescription = (item) => {
  const leads = stageLeads[item.stage] || stageLeads["до/после"];
  const lead = leads[item.id % leads.length].replace("{project}", item.project);
  const phrase = phraseBank[item.id % phraseBank.length];
  const step = item.step ? `Этап: ${item.step}.` : "";
  return `${lead} ${step} ${phrase}`.trim();
};

const getSearchText = (item) => [
  item.title,
  item.description,
  getEnhancedDescription(item),
  item.project,
  item.stage,
  item.step,
  ...(item.tags || []),
].join(" ").toLowerCase();

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
    const matchesFilter = activeFilter === "all" || item.stage.includes(activeFilter);
    const matchesSearch = !activeSearch || getSearchText(item).includes(activeSearch);
    return matchesFilter && matchesSearch;
  });
};

const renderGrid = () => {
  const visibleItems = getVisibleItems();
  const pageSize = getPageSize();
  const pageCount = Math.max(1, Math.ceil(visibleItems.length / pageSize));
  activePage = Math.min(activePage, pageCount - 1);
  const pageItems = visibleItems.slice(activePage * pageSize, activePage * pageSize + pageSize);

  if (worksCount) {
    worksCount.textContent = `${visibleItems.length} фото`;
  }

  if (worksTotal) {
    worksTotal.textContent = `${worksItems.length} фото`;
  }

  worksGrid.classList.remove("is-changing", "turn-next", "turn-prev");
  void worksGrid.offsetWidth;
  worksGrid.classList.add("is-changing", lastGalleryDirection === "prev" ? "turn-prev" : "turn-next");

  worksGrid.innerHTML = pageItems.map((item) => `
    <article class="works-card" data-work-id="${item.id}" tabindex="0">
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
      <div class="works-card-body">
        <div class="works-card-meta">
          <span>${item.stage}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${getEnhancedDescription(item)}</p>
      </div>
    </article>
  `).join("");

  if (!pageItems.length) {
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
    worksPagePrev.disabled = visibleItems.length <= pageSize;
  }

  if (worksPageNext) {
    worksPageNext.disabled = visibleItems.length <= pageSize;
  }
};

const openWork = (id) => {
  const item = byId.get(Number(id));

  if (!item || !worksLightbox || !worksLightboxImage) {
    return;
  }

  worksLightboxImage.src = item.src;
  worksLightboxImage.alt = item.alt;
  worksLightboxMeta.textContent = `${item.project} · ${item.stage}`;
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
renderGrid();
