export interface CrewMember {
  role: string;
  task: string;
  avatar: string; // emoji
}

// Neue Crew-Mitglieder hier einfach hinzufügen
const crew: CrewMember[] = [
  { role: "Der Vorarbeiter", task: "Orga & Planung", avatar: "👷" },
  { role: "Der Polier", task: "Hält die Truppe zusammen", avatar: "🦺" },
  { role: "Der Zapfmeister", task: "Bar & Verpflegung", avatar: "🍺" },
  { role: "Der Azubi", task: "Technik & Nebel", avatar: "🔧" },
];

export default crew;
