/* BierBus – Toolbox Pop: Reveals, Konfetti (einmalig), Formular-Demo */
document.documentElement.classList.add('js');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- Scroll-Reveals via IntersectionObserver --- */
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* --- Konfetti-Explosion im Hero (einmalig, ~26 Schnipsel) --- */
if (!reducedMotion) {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  const W = canvas.width = hero.offsetWidth;
  const H = canvas.height = hero.offsetHeight;

  const colors = ['#ffea00', '#39ff6a', '#ff8c00', '#ff5ca8', '#3d8bff'];
  const cx = W / 2, cy = H * 0.35;
  const pieces = Array.from({ length: 26 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 6;
    return {
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.25,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      color: colors[(Math.random() * colors.length) | 0],
    };
  });

  const start = performance.now();
  (function tick(now) {
    ctx.clearRect(0, 0, W, H);
    let alive = false;
    for (const p of pieces) {
      p.vy += 0.15;              // Schwerkraft
      p.vx *= 0.99;              // Luftwiderstand
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if (p.y < H + 30) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive && now - start < 4000) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove(); // einmalig, danach Ende
    }
  })(start);
} else {
  document.getElementById('confetti').remove();
}

/* --- Demo-Formular: kein Backend, nur Feedback --- */
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Abgeschickt! 🎉';
  btn.disabled = true;
  document.getElementById('form-note').textContent =
    'Demo-Formular – es wurde nichts versendet. Schreibt uns einfach direkt.';
});
