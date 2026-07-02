const heroImages = [
  "./assets/images/avito-hero-1.jpeg",
  "./assets/images/avito-hero-2.jpeg",
  "./assets/images/avito-hero-3.jpeg",
  "./assets/images/avito-hero-5.jpeg",
];

const heroImage = document.getElementById("hero-image");
const siteHeader = document.querySelector(".site-header");
const contactForm = document.querySelector(".contact-form");
const routeLinks = document.querySelectorAll("[data-route-link]");

if (heroImage) {
  let currentIndex = heroImages.indexOf(heroImage.getAttribute("src"));
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % heroImages.length;
    heroImage.src = heroImages[currentIndex];
  }, 3600);
}

const syncHeaderCompactState = () => {
  if (!siteHeader) {
    return;
  }

  if (window.innerWidth > 860) {
    siteHeader.classList.remove("is-compact");
    return;
  }

  const isCompact = siteHeader.classList.contains("is-compact");

  if (!isCompact && window.scrollY > 96) {
    siteHeader.classList.add("is-compact");
  }

  if (isCompact && window.scrollY < 16) {
    siteHeader.classList.remove("is-compact");
  }
};

syncHeaderCompactState();
window.addEventListener("scroll", syncHeaderCompactState, { passive: true });
window.addEventListener("resize", syncHeaderCompactState);

const buildYandexRouteUrl = (fromLat, fromLon, destination) => {
  const from = `${fromLat.toFixed(6)},${fromLon.toFixed(6)}`;
  return `https://yandex.ru/maps/?mode=routes&rtext=${encodeURIComponent(`${from}~${destination}`)}&rtt=auto`;
};

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const destination = link.dataset.routeLat && link.dataset.routeLon
      ? `${link.dataset.routeLat},${link.dataset.routeLon}`
      : link.dataset.routeAddress || "";

    if (!destination || !navigator.geolocation) {
      return;
    }

    event.preventDefault();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const url = buildYandexRouteUrl(
          position.coords.latitude,
          position.coords.longitude,
          destination
        );
        window.open(url, "_blank", "noopener,noreferrer");
      },
      () => {
        window.open(link.href, "_blank", "noopener,noreferrer");
      },
      {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 60000,
      }
    );
  });
});

const ribbons = document.querySelectorAll("[data-ribbon]");

ribbons.forEach((ribbon) => {
  const slides = Array.from(ribbon.querySelectorAll(".portfolio-slide"));
  const prevButton = ribbon.parentElement?.querySelector("[data-ribbon-prev]");
  const nextButton = ribbon.parentElement?.querySelector("[data-ribbon-next]");
  const dotsHost = ribbon.querySelector(".slider-dots");

  if (!slides.length || !prevButton || !nextButton || !dotsHost) {
    return;
  }

  let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (activeIndex < 0) {
    activeIndex = 0;
  }

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Показать кейс ${index + 1}`);
    dot.addEventListener("click", () => {
      activeIndex = index;
      render();
    });
    dotsHost.appendChild(dot);
    return dot;
  });

  const render = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  };

  prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    render();
  });

  nextButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % slides.length;
    render();
  });

  render();
});

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = lightbox?.querySelector(".lightbox-close");
const lightboxBackdrop = lightbox?.querySelector("[data-lightbox-close]");
const lightboxPrev = lightbox?.querySelector(".lightbox-prev");
const lightboxNext = lightbox?.querySelector(".lightbox-next");
const galleryImages = Array.from(document.querySelectorAll(".service-tile img, .portfolio-slide img, .portfolio-gallery-card img"));
let activeGalleryIndex = -1;

const renderLightboxImage = () => {
  if (!lightboxImage || !lightboxCaption || activeGalleryIndex < 0 || activeGalleryIndex >= galleryImages.length) {
    return;
  }

  const activeImage = galleryImages[activeGalleryIndex];
  lightboxImage.src = activeImage.currentSrc || activeImage.src;
  lightboxImage.alt = activeImage.alt || "";
  lightboxCaption.textContent = activeImage.alt || "";
};

const openLightbox = (index) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  activeGalleryIndex = index;
  renderLightboxImage();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
  activeGalleryIndex = -1;
  document.body.style.overflow = "";
};

const showPreviousImage = () => {
  if (!galleryImages.length) {
    return;
  }

  activeGalleryIndex = (activeGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
  renderLightboxImage();
};

const showNextImage = () => {
  if (!galleryImages.length) {
    return;
  }

  activeGalleryIndex = (activeGalleryIndex + 1) % galleryImages.length;
  renderLightboxImage();
};

galleryImages.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openLightbox(index);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxBackdrop?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", showPreviousImage);
lightboxNext?.addEventListener("click", showNextImage);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }

  if (event.key === "ArrowLeft" && lightbox && !lightbox.hidden) {
    showPreviousImage();
  }

  if (event.key === "ArrowRight" && lightbox && !lightbox.hidden) {
    showNextImage();
  }
});

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const statusNode = document.createElement("p");
  statusNode.className = "form-status";
  statusNode.hidden = true;
  contactForm.appendChild(statusNode);

  const showFormError = (message) => {
    statusNode.textContent = message;
    statusNode.hidden = false;
    statusNode.classList.remove("is-success");
    statusNode.classList.add("is-error");
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    
    const name = String(formData.get("Имя клиента") || "").trim();
    const phone = String(formData.get("Телефон") || "").trim();

    if (!name || !phone) {
      showFormError("Укажите имя и телефон, чтобы мы смогли связаться с вами.");
      return;
    }

    if (submitButton) {
      submitButton.setAttribute("disabled", "disabled");
      submitButton.textContent = "Отправляем...";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        contactForm.reset();
        statusNode.textContent = "Заявка принята. Свяжемся с вами в ближайшее время.";
        statusNode.classList.remove("is-error");
        statusNode.classList.add("is-success");
      } else {
        const data = await response.json();
        statusNode.textContent = data.errors ? data.errors.map(error => error.message).join(', ') : "Ошибка отправки. Попробуйте еще раз.";
        statusNode.classList.remove("is-success");
        statusNode.classList.add("is-error");
      }
    } catch (error) {
      statusNode.textContent = "Не удалось отправить форму. Проверьте подключение к сети.";
      statusNode.classList.remove("is-success");
      statusNode.classList.add("is-error");
    } finally {
      statusNode.hidden = false;
      if (submitButton) {
        submitButton.removeAttribute("disabled");
        submitButton.textContent = "Отправить заявку";
      }
    }
  });
}
