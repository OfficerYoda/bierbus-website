import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Events } from './components/Events';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-yellow-500 selection:text-slate-900">
      
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">
              BIER<span className="text-yellow-500">BUS</span>
            </span>
            <div className="hidden md:flex gap-10 text-xs font-black tracking-widest text-slate-400">
                <a href="#features" className="hover:text-yellow-500 transition-colors uppercase">Die Technik</a>
                <a href="#events" className="hover:text-yellow-500 transition-colors uppercase">Die Tour</a>
                <a href="#" className="hover:text-yellow-500 transition-colors uppercase opacity-30 cursor-not-allowed">Shop</a>
            </div>
            <div className="flex items-center gap-4">
               <span className="hidden sm:inline-block text-[10px] font-bold text-yellow-500/50 uppercase tracking-widest">Live Status: Building</span>
               <a href="#events" className="text-[11px] font-black bg-yellow-500 text-slate-950 px-4 py-2 rounded-none uppercase tracking-wider hover:bg-white transition-colors">
                  Dabei sein
               </a>
            </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Events />
        
        {/* Gallery Section with better imagery */}
        <section className="py-24 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter italic">Werkstatt<span className="text-yellow-500">Report</span></h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-slate-400 max-w-xl mx-auto font-medium">
                  Hier wird geschweißt, geschraubt und vor allem getestet. Unser BierBus nimmt Form an.
                </p>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-12 snap-x px-4 no-scrollbar">
                {[
                  "https://images.unsplash.com/photo-1513360335302-d8130f75a000?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1581092921461-7d65ef076459?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
                  "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&q=80&w=600"
                ].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-80 md:w-96 aspect-video bg-slate-900 rounded-none overflow-hidden relative snap-center border border-white/10 group">
                        <img 
                            src={src} 
                            alt={`Bauphase ${i+1}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">
                                Status: In Progress
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;