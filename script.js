const leadForm = document.querySelector("#leadForm");
const formMessage = document.querySelector("#formMessage");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

// Мобильное меню открывается без перезагрузки и закрывается после выбора раздела.
navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mainNav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Легкое появление блоков при скролле. Если браузер старый, страница просто останется статичной.
const animatedItems = document.querySelectorAll(".section-heading, .card, .benefit-item, .process-card, .audience-list span, .price-card, .cta-panel, .contact-form");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  animatedItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
} else {
  animatedItems.forEach((item) => item.classList.add("is-visible"));
}

// Форма имитирует успешную отправку: страницу не перезагружаем, поля очищаем.
leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent = "Спасибо! Я скоро свяжусь с вами.";
  leadForm.reset();
});
