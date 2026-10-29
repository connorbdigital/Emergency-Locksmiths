import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Check, X, Sparkles, Lock, ArrowRight, Zap } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenBooking: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenBooking }) => {
  const [simulatedAttack, setSimulatedAttack] = useState<boolean>(false);
  const [selectedProductTab, setSelectedProductTab] = useState<'residential' | 'commercial'>('residential');

  const comparisonFeatures = [
    {
      feature: "Attack Resistance Time",
      standard: "Fails in < 9 seconds",
      standardDanger: true,
      diamond: "Impenetrable to snap attack",
      diamondSafe: true,
      notes: "Standard cylinders snap at the weak center cam screw point."
    },
    {
      feature: "Internal Lockdown Cam",
      standard: "None (cam exposed immediately)",
      standardDanger: true,
      diamond: "Patented molybdenum lockdown pin",
      diamondSafe: true,
      notes: "When attacked, the sacrificial end breaks while the core locks shut."
    },
    {
      feature: "British Standard Accreditation",
      standard: "Unrated / 0-Star standard",
      standardDanger: true,
      diamond: "TS007 3-Star & Sold Secure Diamond",
      diamondSafe: true,
      notes: "The highest grade of mechanical lock certification in Great Britain."
    },
    {
      feature: "Anti-Drill & Anti-Pick Core",
      standard: "Soft brass pins",
      standardDanger: true,
      diamond: "6 Tungsten carbide drill pins",
      diamondSafe: true,
      notes: "Resists heavy power drills and high-torque picking tools."
    },
    {
      feature: "Insurance Compliance Warranty",
      standard: "Risk of claim rejection",
      standardDanger: true,
      diamond: "100% Insurer Approved + £2,000 guarantee",
      diamondSafe: true,
      notes: "Protects against insurer disputes following an attempted burglary."
    },
    {
      feature: "Key Duplication Control",
      standard: "Freely cut on high street",
      standardDanger: true,
      diamond: "Encrypted key code card only",
      diamondSafe: true,
      notes: "No unauthorised keys can be cut by contractors or visitors."
    }
  ];

  return (
    <section id="hardware-showcase" className="py-20 lg:py-28 relative overflow-hidden bg-tech-grid">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>HARDWARE COMPARISON ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Standard Locks vs.{' '}
            <span className="text-gradient-cyan">TS007 3-Star Diamond</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            During your Free Security Check, we test your existing locks against British Standard TS007 & BS 3621. Here is why the difference matters for your property.
          </p>
        </div>

        {/* Interactive Snap Attack Simulation Banner */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-center lg:justify-start space-x-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Interactive Attack Simulation</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                What happens when an intruder attempts to snap your cylinder?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Click below to see the critical difference between standard builder-grade cylinders and our 3-Star Diamond British Standard upgrade.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSimulatedAttack(!simulatedAttack)}
              className="py-3 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer whitespace-nowrap"
            >
              <Zap className="w-4 h-4" />
              <span>{simulatedAttack ? 'Reset Simulation' : 'Simulate Snap Attack'}</span>
            </button>
          </div>

          {/* Simulation Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/10">
            {/* Standard Cylinder Attack Outcome */}
            <div className={`p-5 rounded-2xl border transition-all ${
              simulatedAttack
                ? 'bg-red-950/40 border-red-500/60 ring-1 ring-red-500/40'
                : 'bg-slate-900/60 border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">Standard Euro Cylinder</span>
                <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                  simulatedAttack ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-slate-800 text-slate-400'
                }`}>
                  {simulatedAttack ? 'BREACHED IN 8 SECONDS' : 'STANDBY'}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-300">
                  {simulatedAttack ? (
                    <strong className="text-red-300">
                      Snap pressure breaks cylinder at central fixing screw. Cam is exposed. Intruder turns the gearbox and unlocks your door silently.
                    </strong>
                  ) : (
                    "Exterior cylinder face protrudes > 3mm from handle escutcheon, vulnerable to basic mole-grip leverage."
                  )}
                </p>
                <div className="text-[11px] font-mono text-red-400 flex items-center space-x-1">
                  <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Found on over 70% of standard Wirral homes</span>
                </div>
              </div>
            </div>

            {/* Ultion 3-Star Diamond Attack Outcome */}
            <div className={`p-5 rounded-2xl border transition-all ${
              simulatedAttack
                ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/40'
                : 'bg-slate-900/60 border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">TS007 3-Star Diamond Upgrade</span>
                <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                  simulatedAttack ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                }`}>
                  {simulatedAttack ? 'LOCKDOWN ACTIVATED • ZERO ACCESS' : 'ARMED'}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-300">
                  {simulatedAttack ? (
                    <strong className="text-emerald-300">
                      Sacrificial front cut breaks cleanly away. Internal molybdenum lockdown pin shoots into place, deadlocking the cam. Door remains 100% secure.
                    </strong>
                  ) : (
                    "Hardened anti-snap core with 11 internal locking pins, drill defense, and Police-preferred Secured by Design standard."
                  )}
                </p>
                <div className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Backed by £2,000 Anti-Snap homeowner guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deep Feature Comparison Matrix */}
        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/10 flex items-center justify-between flex-wrap gap-4 bg-slate-900/40">
            <div>
              <h3 className="text-lg font-bold text-white">Full Security Hardware Specification</h3>
              <p className="text-xs text-slate-400">Inspected by our Master Locksmiths during your Free Property Check</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedProductTab('residential')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedProductTab === 'residential'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                Domestic Standard
              </button>
              <button
                onClick={() => setSelectedProductTab('commercial')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedProductTab === 'commercial'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                Commercial Master Suites
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-slate-950/40 font-mono text-slate-400 uppercase text-[11px]">
                  <th className="py-4 px-6 font-semibold">Security Feature</th>
                  <th className="py-4 px-6 font-semibold text-red-400">Standard Builder Lock</th>
                  <th className="py-4 px-6 font-semibold text-emerald-400">Locksmiths Wirral 3-Star Diamond</th>
                  <th className="py-4 px-6 font-semibold text-slate-400 hidden md:table-cell">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-red-300">
                      <div className="flex items-center space-x-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>{row.standard}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 stroke-[3]" />
                        <span>{row.diamond}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400 text-xs hidden md:table-cell">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Matrix Footer Callout */}
          <div className="p-6 bg-slate-900/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-300 text-center sm:text-left">
              <span className="font-bold text-white">Wondering which lock you have right now?</span> We test it for free.
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book My Free Lock Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
