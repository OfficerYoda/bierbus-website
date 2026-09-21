// Scroll-Reveal via IntersectionObserver: Stempel schlagen ein, Blöcke snappen rein.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".stamp-me, .reveal").forEach((el) => el.classList.add("in"));
} else {
  // Blöcke markieren (außer Stempel-Elementen, die .stamp-me schon haben)
  document
    .querySelectorAll(".spec-list, .termin, .platte, .member, .sponsoren li, .kontakt-form, .section-intro")
    .forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".stamp-me, .reveal").forEach((el) => io.observe(el));
}
