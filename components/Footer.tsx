import React from "react";
import { Beer, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <Beer className="text-yellow-500" />
          <span className="text-2xl font-black text-white uppercase tracking-wider">
            BierBus.fun
          </span>
        </div>

        <div className="flex gap-6 mb-8">
          {/* Placeholders for social media */}
          <a
            href="#"
            className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-pink-600 transition-all"
          >
            <Instagram size={20} />
          </a>
        </div>

        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} BierBus Crew. Bauphase läuft.
        </p>
        <p className="text-slate-700 text-xs mt-2">
          Don't drink and drive the Bollerwagen.
        </p>
      </div>
    </footer>
  );
};

