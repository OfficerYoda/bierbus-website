// BierBus "Baustelle" – Scroll-Reveals via IntersectionObserver
(function () {
  const sections = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((el) => observer.observe(el));

  // Demo-Formular: kein Backend, nur Bestätigung
  const form = document.querySelector(".kontakt-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button[type=submit]");
      button.textContent = "✔ Auftrag erhalten!";
      button.disabled = true;
    });
  }
})();
