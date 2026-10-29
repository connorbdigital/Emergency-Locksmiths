import React from 'react';
import { ShieldCheck, Sparkles, Phone, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/locksmithData';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-tech-grid">
      {/* Intense ambient cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-cyan-500/40 relative overflow-hidden shadow-2xl shadow-cyan-950/60 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90">
          
          {/* Top highlight */}
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIMITED WEEKLY AUDIT SLOTS ACROSS WIRRAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Don't Wait For A Break-In.{' '}
              <span className="text-gradient-cyan">Fortify Your Doors Today.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Book your 100% Free 36-Point Physical Property Security Check. We evaluate cylinders, multi-point gearboxes, patio sliders, and insurance compliance at zero cost and with zero pushy sales talk.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-cyan-500/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 100% Free Property Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-slate-900 border border-white/20 hover:border-cyan-400 text-white font-bold text-sm sm:text-base flex items-center justify-center space-x-2 transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Hotline: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center space-x-1 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>£0.00 Call-Out Fee</span>
              </span>
              <span className="flex items-center space-x-1 text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <span>BS 3621 Certified</span>
              </span>
              <span className="flex items-center space-x-1 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Wallasey, Birkenhead, West Kirby, Heswall & All CH</span>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
