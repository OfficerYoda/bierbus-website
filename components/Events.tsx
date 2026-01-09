import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

const events: Event[] = [
  {
    id: 1,
    title: "Faschingsumzug Hockenheim",
    date: "Sa. 14.02.",
    location: "Innenstadt Hockenheim",
    description: "Der Startschuss! Wir rollen den BierBus zum ersten Mal richtig aus. Eskalation vorprogrammiert.",
    status: 'confirmed'
  },
  {
    id: 2,
    title: "Umzug Altlußheim",
    date: "Mo. 16.02.",
    location: "Altlußheim",
    description: "Rosenmontag wird wild. Der BierBus zieht weiter zur nächsten Station.",
    status: 'confirmed'
  },
  {
    id: 3,
    title: "Erster Mai",
    date: "01.05.",
    location: "TBA",
    description: "Traditionelle Wanderung. Route steht noch nicht fest, aber der Durst ist sicher.",
    status: 'tentative'
  }
];

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase mb-2">
              Tour <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Daten</span>
            </h2>
            <p className="text-slate-400">Hier findet ihr uns (und das Bier).</p>
          </div>
          <div className="mt-4 md:mt-0">
             <div className="text-right hidden md:block">
                <span className="text-xs font-bold bg-yellow-500 text-slate-900 px-2 py-1 rounded">SEASON 2025</span>
             </div>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="relative overflow-hidden bg-slate-900 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center border-l-4 border-yellow-500 hover:bg-slate-800 transition-colors">
              
              {/* Date Badge */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center bg-slate-800 rounded-lg p-4 min-w-[100px] text-center border border-slate-700">
                <span className="text-yellow-500 font-bold text-xl md:text-2xl">{event.date.split('.')[0]}</span>
                <span className="text-slate-400 uppercase text-sm font-bold">{event.date.split('.')[1]}.</span>
              </div>

              {/* Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                  {event.status === 'tentative' && (
                    <span className="px-2 py-0.5 rounded text-xs bg-slate-700 text-slate-300 border border-slate-600">Geplant</span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-yellow-500" />
                    {event.location}
                  </div>
                  {event.status === 'confirmed' && (
                     <div className="flex items-center gap-1">
                       <Clock size={16} className="text-yellow-500" />
                       Startzeit TBA
                     </div>
                  )}
                </div>
                
                <p className="text-slate-300">
                  {event.description}
                </p>
              </div>

              {/* Action */}
              <div className="mt-4 md:mt-0 flex-shrink-0">
                 <button className="w-full md:w-auto px-6 py-3 rounded-lg bg-slate-800 hover:bg-yellow-500 hover:text-slate-900 text-slate-300 font-semibold transition-all duration-300 border border-slate-700 hover:border-yellow-500">
                    Info
                 </button>
              </div>
            </div>
          ))}
          
          <div className="p-8 text-center bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
            <p className="text-slate-400 italic">
              "Wir werden sicherlich noch andere Gründe finden zu feiern."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};