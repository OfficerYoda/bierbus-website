import React from 'react';
import { Beer, Music, PartyPopper } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/party/1920/1080" 
          alt="Party Background" 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-down mb-6 flex justify-center">
             <div className="p-4 rounded-full bg-yellow-500/10 border-2 border-yellow-500 animate-pulse">
                <Beer className="w-12 h-12 text-yellow-500" />
             </div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white mb-4 drop-shadow-lg uppercase tracking-wider">
          <span className="beer-gradient">Bier</span>Bus
        </h1>
        
        <p className="text-xl md:text-3xl font-light text-slate-300 mb-8 max-w-2xl mx-auto">
          Wenn es scheppert, nebelt und das Bier fließt – dann sind wir da.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a href="#events" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-lg rounded-full transition-transform hover:scale-105 flex items-center gap-2">
            <PartyPopper size={24} />
            Zu den Terminen
          </a>
          <a href="#features" className="px-8 py-4 bg-transparent border-2 border-slate-500 hover:border-white text-slate-300 hover:text-white font-bold text-lg rounded-full transition-all flex items-center gap-2">
             <Music size={24} />
             Die Technik
          </a>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
    </div>
  );
};