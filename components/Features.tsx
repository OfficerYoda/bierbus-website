import React from "react";
import { Speaker, CloudFog, Beer, Zap } from "lucide-react";
import { Feature } from "../types";

const features: Feature[] = [
  {
    id: 1,
    title: "Sound System",
    description:
      "Kein 0815 Bluetooth-Lautsprecher. Unsere Anlage scheppert so ordentlich, dass man uns schon drei Straßen weiter hört.",
    icon: Speaker
  },
  {
    id: 2,
    title: "Die Bar",
    description:
      "Vollausgestattete Bar an Bord. Egal ob Pils, Weizen oder Spezial-Mischen – niemand bleibt trocken.",
    icon: Beer
  },
  {
    id: 3,
    title: "Nebelmaschine",
    description:
      "Für die richtige Atmosphäre und dramatische Auftritte im Umzug. Wir vernebeln die Konkurrenz.",
    icon: CloudFog
  },
  {
    id: 4,
    title: "Die Bier-Bank",
    description:
      "Wenn die Beine schwer werden, bietet unsere integrierte Bier-Bank Platz zum Verschnaufen (und Nachtanken).",
    icon: Zap
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Das <span className="text-yellow-500">Gerät</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Der BierBus ist nicht einfach nur ein Bollerwagen. Er ist eine
            mobile Party-Zentrale auf vier Rädern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-slate-900 group-hover:bg-yellow-500/20 transition-colors">
                <feature.icon className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

