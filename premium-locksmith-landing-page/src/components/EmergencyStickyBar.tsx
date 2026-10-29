import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/locksmithData';

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
}

export const EmergencyStickyBar: React.FC<EmergencyStickyBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 transition-all duration-500 animate-in fade-in slide-in-from-bottom-5">
      <div className="glass-panel border border-cyan-500/40 rounded-2xl p-2.5 sm:p-3 shadow-2xl shadow-slate-950/80 flex items-center justify-between sm:space-x-4 max-w-lg mx-auto sm:max-w-none bg-slate-950/90 backdrop-blur-xl">
        
        {/* Status text */}
        <div className="hidden md:flex items-center space-x-2.5 pl-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="text-left font-mono">
            <div className="text-[11px] font-bold text-white flex items-center space-x-1.5">
              <span>Wirral Response Units Active</span>
              <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded border border-cyan-500/20">24/7</span>
            </div>
            <div className="text-[10px] text-slate-400">100% Free Property Check • No Obligation</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 py-2 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Free Check</span>
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss sticky bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
