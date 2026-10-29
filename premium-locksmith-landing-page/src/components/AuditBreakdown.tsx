import React, { useState } from 'react';
import { Shield, AlertTriangle, ArrowRight, Wrench, FileText, Check } from 'lucide-react';
import { AUDIT_CHECKLIST_CATEGORIES } from '../data/locksmithData';

interface AuditBreakdownProps {
  onOpenBooking: () => void;
}

export const AuditBreakdown: React.FC<AuditBreakdownProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>(AUDIT_CHECKLIST_CATEGORIES[0].id);

  const currentCategory = AUDIT_CHECKLIST_CATEGORIES.find(c => c.id === activeCategory) || AUDIT_CHECKLIST_CATEGORIES[0];

  return (
    <section id="audit-breakdown" className="py-20 lg:py-28 relative bg-[#060a14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXHAUSTIVE 36-POINT PROPERTY AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Happens During Your <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Free Physical Security Check?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            We don't just glance at your front door. Our CRB/DBS-checked locksmiths conduct an exhaustive multi-point engineering audit of every perimeter access point, issuing an official written report with zero sales pressure.
          </p>
        </div>

        {/* Interactive Category Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {AUDIT_CHECKLIST_CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'glass-panel border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Content Card & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
                <Shield className="w-4 h-4" />
                <span>Inspection Protocol</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {currentCategory.title}
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                {currentCategory.subtitle}
              </p>
            </div>

            {/* Vulnerability Alert Box */}
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-start space-x-3 text-xs sm:text-sm text-amber-200">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-white block mb-0.5">The Hidden Danger:</strong>
                <span>{currentCategory.vulnerabilityWarning}</span>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Physical Checks Conducted:
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {currentCategory.points.map((pt, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25"
              >
                <span>Book This Audit Free (£0.00)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 font-mono">
                Average time on site: 25 minutes
              </div>
            </div>

          </div>

          {/* Right Image Showcase: Technician Inspection Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/images/technician-inspection.jpg"
                alt="Master Locksmith performing security diagnostic inspection in Wirral"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Technician badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/15">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-1">
                  <span className="flex items-center space-x-1.5 font-bold">
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    <span>ON-SITE PHYSICAL AUDIT</span>
                  </span>
                  <span className="text-emerald-400 font-bold">NO FEE</span>
                </div>
                <p className="text-xs text-slate-200">
                  CRB/DBS-checked master locksmith carrying full digital diagnostic and micrometer gauge kits.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {[
            {
              step: "Step 01",
              title: "Free On-Site Arrival",
              desc: "Our marked van arrives at your Wirral address at your scheduled time with zero call-out fee."
            },
            {
              step: "Step 02",
              title: "36-Point Physical Audit",
              desc: "We test cylinders, gearboxes, frames, window latches, and fire safety compliance."
            },
            {
              step: "Step 03",
              title: "Written Certificate & Advice",
              desc: "You receive an itemised report. If safe, you're certified. If vulnerable, receive transparent fixed quotes with zero pressure."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl glass-card-subtle border border-white/5 space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">{item.step}</span>
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
