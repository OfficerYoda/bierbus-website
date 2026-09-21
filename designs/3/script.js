// Scroll-Reveals via IntersectionObserver (transform/opacity only, 60fps)
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('in');
    e.target.closest('.section')?.classList.add('lit');
    io.unobserve(e.target);
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
