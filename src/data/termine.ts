export interface Termin {
  date: string; // ISO 8601, e.g. "2026-11-11"
  label: string;
  highlight?: boolean;
}

// Neue Termine hier einfach hinzufügen
const termine: Termin[] = [
  { date: "2026-11-11", label: "Sessionseröffnung" },
  { date: "2027-02-04", label: "Weiberfastnacht" },
  { date: "2027-02-08", label: "Rosenmontagszug ⭐", highlight: true },
  { date: "2027-02-09", label: "Faschingsdienstag" },
];

export default termine;
