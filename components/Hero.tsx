import React from "react";
import { Beer, Music, PartyPopper } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="Workshop and Engineering Background"
          className="w-full h-full object-cover opacity-40 grayscale transition-all duration-1000"
        />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950"></div>

        {/* Animated accent lights */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse transition-all duration-[3000ms]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-bounce mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-yellow-500/10 border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            <Beer className="w-12 h-12 text-yellow-500" />{" "}
          </div>
        </div>

        <h1 className="text-7xl md:text-[10rem] font-black text-white mb-2 drop-shadow-2xl uppercase tracking-tighter leading-none">
          <span className="beer-gradient">BIER</span>BUS
        </h1>

        <div className="inline-block px-4 py-1 bg-yellow-500 text-slate-950 font-black text-sm uppercase tracking-[0.3em] mb-8">
          Est. 2025 • Under Construction
        </div>

        <p className="text-xl md:text-2xl font-medium text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Wenn es scheppert, nebelt und das Bier fließt –
          <br className="hidden md:block" />
          dann sind wir da.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <a
            href="#events"
            className="group px-10 py-5 bg-yellow-500 hover:bg-white text-slate-950 font-extrabold text-xl rounded-none transition-all duration-300 flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <PartyPopper size={24} />
            TERMINE PRÜFEN
          </a>
          <a
            href="#features"
            className="px-10 py-5 bg-transparent border-2 border-white/20 hover:border-yellow-500 text-white font-bold text-xl rounded-none transition-all flex items-center gap-3"
          >
            <Music size={24} />
            TECH-STACK
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </div>
    </div>
  );
};
