# BierBus – Gemeinsame Content-Spec (für ALLE Design-Varianten)

Jede Variante nutzt EXAKT diesen Inhalt (Wortlaut darf leicht ans Design angepasst werden,
Fakten und Sektionen bleiben identisch). Sprache: **Deutsch**, `lang="de"`.

## Basis-Fakten

- **Name:** BierBus
- **Was:** Faschingswagen – ein großer Bollerwagen (KEIN großer Umzugswagen)
- **Maße:** 1,10 m × 2,20 m
- **Motto der Saison:** „Handwerker"
- **Ausstattung:** Musikanlage, Nebelmaschine, Getränkebar, Beleuchtung
- **Vibe:** Karneval / Fasching, Helau/Alaaf-Energie, lustig, bodenständig

## Sektionen (in dieser Reihenfolge)

### 1. Hero
- Großer Name: **BierBus**
- Untertitel/Claim: „Unser Bollerwagen. Unser Stolz. – Motto: Handwerker"
- 1–2 CTAs: „Termine ansehen" und „Mitfahren / Kontakt"
- Karnevals-Atmosphäre (Konfetti, Luftschlangen – je nach Stil interpretiert)

### 2. Der Wagen & Technik
Spec-Liste (als Datenblatt/Feature-Grid/Checkliste – je nach Stil):
- Maße: 1,10 m × 2,20 m – passt durch jede Gasse
- Musikanlage: Sound für die ganze Straße
- Nebelmaschine: für den großen Auftritt
- Getränkebar: immer gut gekühlt
- Beleuchtung: auch nachts einsatzbereit
- Antrieb: pure Muskelkraft (Handwagen!)

### 3. Termine / Umzüge
PLATZHALTER-Termine (Saison 2026/2027):
- 11.11.2026 – Sessionseröffnung
- 04.02.2027 – Weiberfastnacht
- 08.02.2027 – Rosenmontagszug
- 09.02.2027 – Faschingsdienstag
Hinweis irgendwo: „Termine ohne Gewähr – Details folgen."

### 4. Galerie
6 Platzhalter-Bilder (CSS-Gradienten/SVG/Emoji-Kompositionen, KEINE externen Bild-URLs).
Captions z. B.: „Der BierBus in Aktion", „Rosenmontag", „Unsere Crew", „Nachrüstung Nebelmaschine", „Die Bar", „Nachtfahrt".
Klare Platzhalter-Optik, damit echte Fotos später 1:1 getauscht werden können.

### 5. Team
4 Mitglieder als Platzhalter (Initialen-Avatare oder CSS-Gesichter):
- „Der Vorarbeiter" – Orga & Planung
- „Der Polier" – hält die Truppe zusammen
- „Der Zapfmeister" – Bar & Verpflegung
- „Der Azubi" – Technik & Nebel

### 6. Sponsoren
4 Platzhalter-Logos (Text-/CSS-Logos): z. B. „Brauerei Muster", „Bauunternehmen Beispiel", „Metzgerei Schmidt", „Getränkemarkt Prost".

### 7. Kontakt / Mitfahren
Statisches Formular (kein Backend!): Name, E-Mail, Nachricht, Button „Absenden".
Hinweistext: „Demo-Formular – schreibt uns einfach direkt."
Plus Social-Platzhalter (Instagram/WhatsApp als Emoji/Text-Links, href="#").

### 8. Footer
- „© 2026 BierBus – Impressum & Datenschutz folgen" (Platzhalter)
- Kleiner Gag-Zeile erlaubt („Gebaut mit Helau & Muskelkraft")

## Technische Pflichtanforderungen (gelten für JEDE Variante)

- Reines HTML/CSS/JS, keine Frameworks, keine Build-Tools
- Dateien: `index.html` + `styles.css` (+ optional `script.js`) – alles innerhalb des eigenen Ordners
- Alle Verlinkungen relativ; KEINE externen Bilder/CDNs (Google Fonts via `<link>` ist erlaubt, muss aber graceful degradieren)
- Responsive, mobile-first (beim Umzug schaut man vom Handy); brauchbar von 320px bis Desktop
- Semantisches HTML (`header`, `main`, `section`, `footer`, korrekte Überschriften-Hierarchie)
- Kontraste mindestens WCAG AA für Fließtext
- **Animationen:** Signature-Animationen laut zugewiesener Stil-Beschreibung; nur `transform`/`opacity` animieren (60fps); Scroll-Reveals via IntersectionObserver; `@media (prefers-reduced-motion: reduce)` MUSS alle Animationen deaktivieren
- Kleiner, dezenter Link zurück zur Übersicht: `<a href="/">← Alle Designs</a>` (z. B. fixed unten rechts oder im Footer)
