export interface GalerieItem {
  src: string;    // Dateiname in public/galerie/, z.B. "bierbus-1.jpg"
  caption: string;
}

// Neue Bilder: Foto in public/galerie/ ablegen und hier eintragen
const galerie: GalerieItem[] = [
  { src: "/galerie/karneval-crowd.jpg", caption: "Der BierBus in Aktion" },
  { src: "/galerie/parade-night.jpg",   caption: "Rosenmontag" },
  { src: "/galerie/crew.jpg",           caption: "Unsere Crew" },
  { src: "/galerie/fog-stage.jpg",      caption: "Nachrüstung Nebelmaschine" },
  { src: "/galerie/beer-bar.jpg",       caption: "Die Bar" },
  { src: "/galerie/street-lights.jpg",  caption: "Nachtfahrt" },
];

export default galerie;
