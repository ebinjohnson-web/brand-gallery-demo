const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const form = document.getElementById("signupForm");
const formSuccess = document.getElementById("formSuccess");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form && formSuccess) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formSuccess.textContent = "Thanks. We'll send the next drop.";
    form.reset();
  });
}
