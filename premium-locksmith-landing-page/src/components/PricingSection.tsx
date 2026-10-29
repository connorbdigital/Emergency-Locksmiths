import React from 'react';
import { Check, ShieldCheck, Sparkles, ArrowRight, Phone, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/locksmithData';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT VALUE COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            100% Free Property Check.{' '}
            <span className="text-gradient-cyan">Zero Hidden Charges.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Our diagnostic inspection is always completely free. If repairs or anti-snap upgrades are required, we provide fixed, up-front prices before any work begins.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Card: The 100% Free Security Check */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-8 border-2 border-cyan-400 relative overflow-hidden shadow-2xl shadow-cyan-950/60 flex flex-col justify-between">
            {/* Top popular ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-slate-950 font-black text-[11px] font-mono tracking-wider py-1.5 px-6 rounded-bl-2xl uppercase">
              MOST POPULAR • 100% FREE
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Comprehensive Diagnostic Audit
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  36-Point Physical Security Check
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Complete on-site inspection for domestic homes, rental portfolios, and commercial business properties in Wirral.
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline space-x-2 py-4 border-y border-white/10">
                <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white font-mono">
                  £0.00
                </span>
                <span className="text-sm text-slate-400 font-mono">
                  / Completely Free Forever
                </span>
              </div>

              {/* What's included checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Included In Your Free Visit:
                </div>
                {[
                  "Zero Call-Out Fee across all CH Postcodes",
                  "Physical anti-snap test of all external door cylinders",
                  "uPVC / Composite multi-point gearbox and alignment check",
                  "Patio, bifold & French door vulnerability assessment",
                  "Window locks, friction stays & egress safety check",
                  "British Standard BS 3621 insurance compliance audit",
                  "Commercial fire exit panic bar inspection (BS EN 1125)",
                  "Official written security health report with zero sales pressure"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 space-y-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 100% Free Property Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No credit card needed • Zero obligation • Certified Master Locksmith</span>
              </div>
            </div>
          </div>

          {/* Secondary Card: Transparent Upgrade Menu */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Optional Upgrades & Repairs
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Clear, Up-Front Fixed Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                If vulnerabilities are identified during your free check, you have total control. We never pressure you, and all replacement parts include manufacturer warranties.
              </p>

              {/* Fixed service breakdown list */}
              <div className="mt-6 space-y-3">
                {[
                  {
                    service: "TS007 3-Star Diamond Anti-Snap Upgrade",
                    price: "From £95",
                    desc: "Includes Ultion or Yale Diamond cylinder, 3 keys, registration card & £2,000 security guarantee.",
                    popular: true
                  },
                  {
                    service: "uPVC Multi-Point Realignment & Gearbox Fix",
                    price: "From £85",
                    desc: "Cures stiff lifting handles, replaces broken center gearboxes, and eliminates crowbar leverage gaps."
                  },
                  {
                    service: "Commercial Master Key Suite & Access",
                    price: "From £145",
                    desc: "Custom tiered key hierarchies, fire escape panic hardware (BS EN 1125), and digital access locks."
                  },
                  {
                    service: "24/7 Emergency Lockout Assistance",
                    price: "Fixed Quote",
                    desc: "Non-destructive entry specialists. No Call-Out Charge. No Fix, No Fee."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl glass-card-subtle border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center space-x-2">
                        <span>{item.service}</span>
                        {item.popular && (
                          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">
                            Top Recommendation
                          </span>
                        )}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct consultation call */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Need a quick quote over the phone?</span>
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-cyan-400 hover:text-cyan-300 font-bold font-mono flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
