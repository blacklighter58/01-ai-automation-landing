const leadForm = document.querySelector("#leadForm");
const formMessage = document.querySelector("#formMessage");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

// Мобильное меню открывается без перезагрузки страницы.
navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Форма имитирует успешную отправку: страницу не перезагружаем, поля очищаем.
leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent = "Спасибо! Я скоро свяжусь с вами.";
  leadForm.reset();
});
