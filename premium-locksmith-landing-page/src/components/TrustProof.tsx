import React from 'react';
import { ShieldCheck, Award, Lock, FileCheck, CheckCircle2 } from 'lucide-react';

export const TrustProof: React.FC = () => {
  const trustBadges = [
    {
      title: "BS 3621 Certified",
      subtitle: "British Standard compliant for complete insurer peace of mind",
      icon: ShieldCheck,
      color: "text-cyan-400"
    },
    {
      title: "TS007 3-Star Diamond",
      subtitle: "Sold Secure SS312 highest anti-snap rating against break-ins",
      icon: Lock,
      color: "text-emerald-400"
    },
    {
      title: "Enhanced DBS Checked",
      subtitle: "Fully vetted, trusted engineers with verified identification",
      icon: Award,
      color: "text-amber-400"
    },
    {
      title: "£5M Liability Cover",
      subtitle: "Fully insured commercial and residential workmanship",
      icon: FileCheck,
      color: "text-indigo-400"
    }
  ];

  const statHighlights = [
    { number: "100%", label: "Free Security Audit", sublabel: "Zero obligation, no call-out fee" },
    { number: "14+", label: "Years Serving Wirral", sublabel: "Local Wallasey family business" },
    { number: "4,850+", label: "Properties Inspected", sublabel: "Domestic & commercial premises" },
    { number: "15-30m", label: "Average Response Time", sublabel: "Mobile units across CH postcodes" },
  ];

  return (
    <section className="py-12 bg-slate-950/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-panel border border-white/5 hover:border-white/20 transition-all flex items-start space-x-3.5 group"
              >
                <div className={`p-2.5 rounded-xl bg-white/5 ${badge.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                    <span>{badge.title}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter Stats Strip */}
        <div className="p-6 rounded-3xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-slate-900/90 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {statHighlights.map((stat, i) => (
              <div key={i} className={`pt-4 md:pt-0 ${i !== 0 ? 'md:pl-4' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-white font-mono tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
