import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Events } from './components/Events';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-yellow-500 selection:text-slate-900">
      
      {/* Sticky Banner if needed in future, essentially a minimal nav */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <span className="font-bold text-xl tracking-tighter text-white">BIER<span className="text-yellow-500">BUS</span></span>
            <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-300">
                <a href="#features" className="hover:text-yellow-400 transition-colors">AUSTATTUNG</a>
                <a href="#events" className="hover:text-yellow-400 transition-colors">TERMINE</a>
            </div>
            <a href="#events" className="md:hidden text-xs font-bold bg-yellow-500 text-slate-900 px-3 py-1 rounded-full">
                TERMINE
            </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Events />
        
        {/* Gallery Placeholder - Visual Break */}
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold uppercase mb-4">Work in Progress</h2>
                <p className="text-slate-400">Ein kleiner Einblick in die Werkstatt.</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x mx-4 no-scrollbar">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex-shrink-0 w-80 h-60 bg-slate-800 rounded-2xl overflow-hidden relative snap-center border-2 border-slate-800 hover:border-yellow-500 transition-colors">
                        <img 
                            src={`https://picsum.photos/seed/construction${i}/600/400?grayscale`} 
                            alt="Construction placeholder" 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        <span className="absolute bottom-4 left-4 bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded">
                            BAUPHASE
                        </span>
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