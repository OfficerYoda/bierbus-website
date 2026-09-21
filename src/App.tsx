import { useEffect, useRef } from "react";
import termine from "./data/termine";
import sponsoren from "./data/sponsoren";
import crew from "./data/crew";
import galerie from "./data/galerie";

// ponytail: single-file App, no per-section component split — YAGNI for a one-pager
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <Header />
      <main id="main">
        <Hero />
        <Wagen />
        <div className="tape tape--divider" aria-hidden="true" />
        <Termine />
        <Galerie />
        <div className="tape tape--divider" aria-hidden="true" />
        <Team />
        <Sponsoren />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="tape tape--scroll" aria-hidden="true">
        <div className="tape__track">
          <span>⚠ Vorsicht Baustelle ⚠ Hier wird gefeiert ⚠ BierBus im Einsatz ⚠ Helau ⚠ Vorsicht Baustelle ⚠ Hier wird gefeiert ⚠ BierBus im Einsatz ⚠ Helau ⚠</span>
          <span>⚠ Vorsicht Baustelle ⚠ Hier wird gefeiert ⚠ BierBus im Einsatz ⚠ Helau ⚠ Vorsicht Baustelle ⚠ Hier wird gefeiert ⚠ BierBus im Einsatz ⚠ Helau ⚠</span>
        </div>
      </div>
      <nav className="nav" aria-label="Hauptnavigation">
        <a className="nav__logo" href="#top">🍺 BierBus</a>
        <ul className="nav__list">
          <li><a href="#wagen">Wagen</a></li>
          <li><a href="#termine">Termine</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__lights" aria-hidden="true">
        <span className="beacon beacon--1" />
        <span className="beacon beacon--2" />
        <span className="beacon beacon--3" />
      </div>
      <div className="sign sign--hero">
        <span className="screw screw--tl" aria-hidden="true" />
        <span className="screw screw--tr" aria-hidden="true" />
        <span className="screw screw--bl" aria-hidden="true" />
        <span className="screw screw--br" aria-hidden="true" />
        <p className="sign__eyebrow">⚠ Baustelle Fasching ⚠</p>
        <h1 className="sign__title">BierBus</h1>
        <p className="sign__sub">Unser Bollerwagen. Unser Stolz.<br />– Motto: Handwerker –</p>
        <div className="sign__ctas">
          <a className="btn btn--primary" href="#termine">Termine ansehen</a>
        </div>
      </div>
      <p className="hero__gag" aria-hidden="true">🚧 Hier wird gefeiert! 🚧</p>
    </section>
  );
}

const WAGEN_SPECS = [
  { icon: "📏", title: "Maße",        desc: "1,10 m × 2,20 m – passt durch jede Gasse" },
  { icon: "🔊", title: "Musikanlage", desc: "Sound für die ganze Straße" },
  { icon: "💨", title: "Nebelmaschine", desc: "Für den großen Auftritt" },
  { icon: "🍻", title: "Getränkebar", desc: "Immer gut gekühlt" },
  { icon: "💡", title: "Beleuchtung", desc: "Auch nachts einsatzbereit" },
  { icon: "💪", title: "Antrieb",     desc: "Pure Muskelkraft (Handwagen!)" },
];

function Wagen() {
  return (
    <Reveal>
      <section className="section" id="wagen">
        <h2 className="sign-heading"><span>🔧 Der Wagen &amp; Technik</span></h2>
        <ul className="spec-grid">
          {WAGEN_SPECS.map((s) => (
            <li key={s.title} className="spec-card">
              <span className="spec-card__icon" aria-hidden="true">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function Termine() {
  return (
    <Reveal>
      <section className="section" id="termine">
        <h2 className="sign-heading"><span>📅 Termine / Umzüge</span></h2>
        <ol className="termine">
          {termine.map((t) => (
            <li key={t.date} className={`termin${t.highlight ? " termin--highlight" : ""}`}>
              <time dateTime={t.date}>{formatDate(t.date)}</time>
              <span>{t.label}</span>
            </li>
          ))}
        </ol>
        <p className="hinweis">⚠ Termine ohne Gewähr – Details folgen.</p>
      </section>
    </Reveal>
  );
}

function Galerie() {
  return (
    <Reveal>
      <section className="section" id="galerie">
        <h2 className="sign-heading"><span>📸 Galerie</span></h2>
        <div className="galerie">
          {galerie.map((item) => (
            <figure key={item.src} className="foto">
              <img className="foto__img" src={item.src} alt={item.caption} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function Team() {
  return (
    <Reveal>
      <section className="section" id="team">
        <h2 className="sign-heading"><span>👷 Die Crew</span></h2>
        <div className="team">
          {crew.map((m) => (
            <article key={m.role} className="team-card">
              <span className="team-card__avatar" aria-hidden="true">{m.avatar}</span>
              <h3>{m.role}</h3>
              <p>{m.task}</p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

function Sponsoren() {
  return (
    <Reveal>
      <section className="section" id="sponsoren">
        <h2 className="sign-heading"><span>🤝 Sponsoren</span></h2>
        <ul className="sponsoren">
          {sponsoren.map((s) => (
            <li key={s.name} className="sponsor">{s.name}</li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="tape tape--static" aria-hidden="true" />
      <div className="site-footer__inner">
        <p>© 2026 BierBus – Impressum &amp; Datenschutz folgen</p>
        <p className="site-footer__gag">Gebaut mit Helau &amp; Muskelkraft 🔨</p>
        <p className="social">
          <a href="#">📸 Instagram</a>
          <a href="#">💬 WhatsApp</a>
        </p>
      </div>
    </footer>
  );
}

// ponytail: one IntersectionObserver per Reveal mount, no external lib
function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

// "2026-11-11" → "11.11.2026"
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
