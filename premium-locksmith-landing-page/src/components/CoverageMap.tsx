import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Search, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WIRRAL_POSTCODES, BUSINESS_INFO } from '../data/locksmithData';

interface CoverageMapProps {
  onOpenBooking: (type: 'residential' | 'commercial', postcode?: string) => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<'all' | 'north' | 'central' | 'south'>('all');

  const filteredAreas = WIRRAL_POSTCODES.filter(area => {
    const matchesSearch = 
      area.postcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.zones.some(z => z.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeRegion === 'north') {
      return ['CH44', 'CH45', 'CH46', 'CH47', 'CH48'].includes(area.postcode);
    }
    if (activeRegion === 'central') {
      return ['CH41', 'CH42', 'CH43', 'CH49', 'CH62', 'CH63'].includes(area.postcode);
    }
    if (activeRegion === 'south') {
      return ['CH60', 'CH61', 'CH64', 'CH65', 'CH1'].includes(area.postcode);
    }
    return true;
  });

  return (
    <section id="coverage-map" className="py-20 lg:py-28 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            <span>RAPID DISPATCH FLEET ACROSS WIRRAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wirral & Merseyside <span className="text-gradient-cyan">Coverage Zones</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Headquartered at 20 Mount Pleasant Road, Wallasey, our mobile locksmith vans patrol all CH postcodes daily. Our 100% Free Property Security Check is available to every domestic and commercial address with zero travel or call-out fees.
          </p>
        </div>

        {/* Live Dispatch Command Console */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Live Dispatch Status: Online
                </span>
                <h3 className="text-sm font-bold text-white">
                  Locksmiths Wirral Patrol Command • Avg Response: 18 Minutes
                </h3>
              </div>
            </div>

            {/* Region quick filter pills */}
            <div className="flex items-center space-x-1.5 p-1 rounded-xl glass-card-subtle text-xs">
              {(['all', 'north', 'central', 'south'] as const).map(reg => (
                <button
                  key={reg}
                  onClick={() => setActiveRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg capitalize font-semibold transition-all ${
                    activeRegion === reg
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {reg === 'all' ? 'All Areas' : reg + ' Wirral'}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="pt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 pt-6">
              <Search className="w-4 h-4 text-cyan-400" />
            </div>
            <input
              type="text"
              placeholder="Search your town, street or postcode (e.g. Wallasey, Caldy, Heswall, CH48, Birkenhead...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-white/15 rounded-2xl text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>

          {/* Postcode Area Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6">
            {filteredAreas.map((area) => (
              <div
                key={area.postcode}
                onClick={() => onOpenBooking('residential', area.postcode)}
                className="p-4 rounded-2xl glass-card-subtle border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-black text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                      {area.postcode}
                    </span>
                    <div className="flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
                      <Clock className="w-3 h-3" />
                      <span>{area.dispatchTime}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {area.name}
                  </h4>

                  <div className="text-[11px] text-slate-400 mt-1 flex flex-wrap gap-1">
                    {area.zones.map((zone, zIdx) => (
                      <span key={zIdx} className="bg-white/5 px-1.5 py-0.5 rounded text-[10px]">
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400">
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>100% Free Check</span>
                  </span>
                  <div className="flex items-center space-x-1 text-[11px] font-bold">
                    <span>Book Slot</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAreas.length === 0 && (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <p className="text-sm">No specific postcode matching "{searchQuery}" found in the filter.</p>
              <p className="text-xs text-cyan-400">Good news: We cover all CH and Merseyside postcodes! Simply book directly.</p>
              <button
                onClick={() => onOpenBooking('residential', searchQuery)}
                className="mt-2 py-2 px-5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                Book Free Check for This Area
              </button>
            </div>
          )}

          {/* Bottom HQ info */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>
                <strong>Operations Base:</strong> {BUSINESS_INFO.address}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero call-out charge across the entire Wirral peninsula</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
