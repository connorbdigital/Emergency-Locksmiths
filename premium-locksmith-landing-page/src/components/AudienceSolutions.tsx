import React, { useState } from 'react';
import { Home, Building2, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Key, FileSpreadsheet, Lock } from 'lucide-react';

interface AudienceSolutionsProps {
  onOpenBooking: (type: 'residential' | 'commercial') => void;
}

export const AudienceSolutions: React.FC<AudienceSolutionsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  const residentialPillars = [
    {
      title: "Anti-Snap Defense for uPVC & Composite",
      desc: "Stop snap burglars in their tracks. We inspect every external door and verify cylinder flush alignment to eliminate leverage points.",
      points: [
        "TS007 3-Star Diamond Sold Secure cylinders",
        "Flush fitting check (eliminating >3mm projection)",
        "Internal lock down cam mechanism",
        "£2,000 anti-snap homeowner guarantee"
      ]
    },
    {
      title: "Patio, Bifold & French Door Reinforcement",
      desc: "Rear entries account for 64% of Wirral home break-ins. We check interlocking leaves, secondary drop bolts, and anti-lift track pins.",
      points: [
        "Multi-point gearbox alignment and tension check",
        "Anti-lift security blocks on sliding tracks",
        "Sash jammers on vulnerable patio leaf sections",
        "Weatherproof security seals"
      ]
    },
    {
      title: "Landlords & HMO Regulations Check",
      desc: "Ensure rental compliance with fire escape thumbturn cylinders on final exit doors and complete key-change peace of mind between tenancies.",
      points: [
        "Internal thumbturn cylinders for rapid fire egress",
        "Certificate of BS 3621 compliance for HMO licensing",
        "Suite keyed-alike locks for multi-unit properties",
        "Eviction & tenant turnover re-key service"
      ]
    }
  ];

  const commercialPillars = [
    {
      title: "Master Key Suites & Key Hierarchy",
      desc: "Simplify access for managers, cleaning crews, and employees. One Grand Master Key opens every door, while individual keys open only designated rooms.",
      points: [
        "Tiered access control (Grand Master, Sub-Master, Servant)",
        "Restricted key profiles (strictly no unauthorised duplication)",
        "Numbered key tracking register and audit logs",
        "Instant cylinder re-coding if an employee leaves"
      ]
    },
    {
      title: "BS EN 1125 Fire Exit & Panic Hardware",
      desc: "Failure to comply with UK fire escape laws can lead to severe fines and immediate insurance voiding. We audit all emergency push bars and panic bolts.",
      points: [
        "BS EN 1125 panic push bars for public access areas",
        "BS EN 179 emergency push pads for non-public staff exits",
        "Alarmed exit bar devices to prevent stock shrinkage",
        "Official commercial fire door clearance certificates"
      ]
    },
    {
      title: "Retail Shopfronts, Warehouses & Shutters",
      desc: "Heavy-duty perimeter defense against ramming and pry attacks. From high-tensile bullet locks to digital access keypads.",
      points: [
        "Roller shutter bullet locks and ground anchors",
        "Aluminium shopfront hook-bolt and deadlock servicing",
        "Commercial digital keypad & biometric locks",
        "High-tensile padlocks and hardened hasps (CEN 5/6 rating)"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 relative bg-[#070b16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>TAILORED PROPERTY PROTECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Both <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Homes & Commercial Enterprises</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Whether securing a family residence in Caldy or managing a multi-door retail hub in Birkenhead, our free physical inspection delivers tailored, insurance-compliant solutions.
          </p>

          {/* Toggle pill */}
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 mt-8">
            <button
              onClick={() => setActiveTab('residential')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'residential'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Domestic & Residential (Homes, Landlords)</span>
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'commercial'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Commercial & Business (Offices, Retail, Industrial)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Solution Cards */}
        <div id={activeTab === 'residential' ? 'residential-solutions' : 'commercial-solutions'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(activeTab === 'residential' ? residentialPillars : commercialPillars).map((pillar, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {i === 0 ? <Lock className="w-6 h-6" /> : i === 1 ? <Key className="w-6 h-6" /> : <FileSpreadsheet className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(activeTab)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-white font-semibold text-xs transition-all border border-white/10 flex items-center justify-center space-x-2 group-hover:border-cyan-500/40"
                >
                  <span>Book Free Inspection For This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits strip highlight */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-900/60 to-cyan-950/20 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                100% Free • Written Vulnerability Certificate
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Zero Sales Pressure. Pure Engineering Peace of Mind.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                We believe security begins with truth. If your property's locks meet all British Standards and your multi-point doors are perfectly aligned, we gladly confirm it in writing and charge you exactly £0.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking(activeTab)}
              className="py-3.5 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center space-x-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Free Audit Slot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
