document.documentElement.classList.add("js");

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Selbstzeichnende SVG-Linien (stroke-dashoffset)
const shapes = document.querySelectorAll(".draw");
if (!reduced) {
  shapes.forEach((s, i) => {
    const len = s.getTotalLength();
    s.style.strokeDasharray = `${len} ${len}`;
    s.style.strokeDashoffset = len;
    s.style.transition = `stroke-dashoffset 1.1s ease ${0.1 + i * 0.05}s`;
  });
}

function startDrawing() {
  document.querySelector(".drawing").classList.add("in");
  shapes.forEach((s) => (s.style.strokeDashoffset = "0"));
}

// Scroll-Reveal + Start der Zeichnung
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      if (e.target.classList.contains("drawing")) startDrawing();
      else e.target.classList.add("in");
      io.unobserve(e.target);
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal, .drawing").forEach((el) => io.observe(el));

// Falls das SVG beim Laden schon sichtbar ist (Hero), sofort starten
if (reduced) startDrawing();
