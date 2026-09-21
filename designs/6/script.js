// BierBus – Design 6 „Vintage Zollstock"
// 1) Zollstock-Trenner: Zahlen 10–100 einzeichnen
// 2) Scroll-Reveals + Aufklappen der Glieder via IntersectionObserver

document.querySelectorAll('.ruler').forEach((r) => {
  for (let i = 1; i <= 10; i++) {
    const s = document.createElement('span');
    s.textContent = i * 10;
    r.appendChild(s);
  }
});

const targets = document.querySelectorAll('.reveal, .specs, .stamp--scroll');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  targets.forEach((el) => io.observe(el));
} else {
  targets.forEach((el) => el.classList.add('is-in'));
}
