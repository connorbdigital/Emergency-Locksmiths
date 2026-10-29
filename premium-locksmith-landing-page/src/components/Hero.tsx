import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Phone, CheckCircle, Sparkles, Building2, Home, MapPin, AlertTriangle, KeyRound, Star } from 'lucide-react';
import { BUSINESS_INFO, WIRRAL_POSTCODES } from '../data/locksmithData';

interface HeroProps {
  onOpenBooking: (type: 'residential' | 'commercial', postcode?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const [postcodeInput, setPostcodeInput] = useState('');
  const [postcodeStatus, setPostcodeStatus] = useState<{ checked: boolean; valid: boolean; areaName?: string }>({
    checked: false,
    valid: false
  });

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcodeInput.trim().toUpperCase();
    if (!clean) return;

    const matched = WIRRAL_POSTCODES.find(p => clean.startsWith(p.postcode));
    if (matched) {
      setPostcodeStatus({ checked: true, valid: true, areaName: matched.name });
    } else {
      // Still valid since we cover all Wirral
      setPostcodeStatus({ checked: true, valid: true, areaName: 'Wirral & Merseyside Service Area' });
    }
  };

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-tech-grid">
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag & Sector Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 font-semibold font-mono tracking-wider">
              100% FREE PROPERTY AUDIT • ZERO SALES PRESSURE
            </span>
          </div>

          {/* Audience switch segmented control */}
          <div className="p-1 rounded-2xl glass-panel border border-white/10 flex items-center space-x-1 text-xs">
            <button
              onClick={() => setActiveTab('residential')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                activeTab === 'residential'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Domestic & Homeowners</span>
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                activeTab === 'commercial'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Business</span>
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Dynamic Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                {activeTab === 'residential' ? (
                  <>
                    Fortify Your Home Against Lock Snapping.{' '}
                    <span className="text-gradient-cyan">100% Free</span> Security Check.
                  </>
                ) : (
                  <>
                    Secure Your Commercial Premises.{' '}
                    <span className="text-gradient-cyan">100% Free</span> Access & Fire Audit.
                  </>
                )}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                {activeTab === 'residential' ? (
                  <>
                    Did you know standard euro cylinders on Wirral doors can be snapped in under <strong className="text-white font-semibold">9 seconds</strong>? 
                    Our CRB/DBS-vetted Master Locksmiths conduct a comprehensive <strong className="text-white font-semibold">36-point physical audit</strong> of your doors, multi-point locks, and windows. Zero charge. No obligation.
                  </>
                ) : (
                  <>
                    Eliminate unauthorized access, verify your <strong className="text-white font-semibold">British Standard BS 3621</strong> insurance validity, and audit <strong className="text-white font-semibold">BS EN 1125 fire exit panic hardware</strong>. Tailored for retail, corporate offices, warehouses, and rental portfolios across Wirral.
                  </>
                )}
              </p>
            </div>

            {/* Value badges pill grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl glass-card-subtle flex items-start space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">£0.00 Survey Fee</div>
                  <div className="text-[11px] text-slate-400">Zero hidden costs or call-out charges</div>
                </div>
              </div>

              <div className="p-3 rounded-xl glass-card-subtle flex items-start space-x-2.5">
                <KeyRound className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">36-Point Audit</div>
                  <div className="text-[11px] text-slate-400">Full written vulnerability report</div>
                </div>
              </div>

              <div className="p-3 rounded-xl glass-card-subtle flex items-start space-x-2.5 col-span-2 sm:col-span-1">
                <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Insurer Approved</div>
                  <div className="text-[11px] text-slate-400">BS 3621 & TS007 3★ compliance</div>
                </div>
              </div>
            </div>

            {/* Interactive Postcode Instant Eligibility Input */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-cyan-500/25 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Check Instant Free Check Availability</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Wirral & Surrounds</span>
              </div>

              <form onSubmit={handlePostcodeCheck} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter Postcode (e.g. CH45, CH48, CH41)"
                    value={postcodeInput}
                    onChange={(e) => {
                      setPostcodeInput(e.target.value);
                      if (postcodeStatus.checked) {
                        setPostcodeStatus({ checked: false, valid: false });
                      }
                    }}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-white/15 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-mono text-sm uppercase"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking(activeTab, postcodeInput)}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Check Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {postcodeStatus.checked ? (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center space-x-2 text-xs text-emerald-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    <strong>Confirmed:</strong> {postcodeStatus.areaName} is fully covered for a 100% Free Physical Check!
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-3 text-[11px] text-slate-400 pt-0.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Serving Wallasey, Birkenhead, Heswall, West Kirby, Bebington, Caldy & all CH postcodes.</span>
                </div>
              )}
            </div>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center space-x-2 text-sm text-slate-300 hover:text-white"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400">Prefer to call? 24/7 Hotline</div>
                  <div className="font-mono font-bold text-white text-sm">{BUSINESS_INFO.phoneDisplay}</div>
                </div>
              </a>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span>(380+ Verified Wirral Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Visual with Interactive Floating HUD Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-emerald-500/30 blur-xl opacity-75" />

              {/* Main Visual Container */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/80 shadow-2xl">
                
                {/* Tech image */}
                <div className="relative h-96 sm:h-[480px] w-full">
                  <img
                    src={activeTab === 'residential' ? "/images/hero-security.jpg" : "/images/commercial-security.jpg"}
                    alt={activeTab === 'residential' ? "Modern British high-security entrance door" : "Commercial access security check"}
                    className="w-full h-full object-cover object-center transition-all duration-700"
                  />
                  {/* Subtle vignette and gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-0 bg-cyan-950/10 mix-blend-overlay" />
                </div>

                {/* Floating Glassmorphic Diagnostics Pill 1 (Top Left) */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl glass-panel border border-white/20 shadow-xl max-w-[210px] transform hover:scale-105 transition-transform backdrop-blur-xl">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-cyan-300 font-bold mb-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>DIAGNOSTIC AUDIT</span>
                  </div>
                  <div className="text-xs font-bold text-white">
                    {activeTab === 'residential' ? 'Anti-Snap Tested' : 'Biometric & Fire Egress'}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    TS007 3-Star Diamond Rated
                  </div>
                </div>

                {/* Floating Glassmorphic Diagnostics Pill 2 (Bottom Right) */}
                <div className="absolute bottom-4 right-4 p-3.5 rounded-2xl glass-panel border border-emerald-500/30 shadow-xl max-w-[230px] transform hover:scale-105 transition-transform backdrop-blur-xl">
                  <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-bold mb-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Insurance Certified</span>
                  </div>
                  <div className="text-[11px] text-slate-200 font-mono">
                    BS 3621 / SS312 Sold Secure
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-1">
                    On-Site Cost: £0.00
                  </div>
                </div>

                {/* Snapping Warning Alert Pill (Bottom Left) */}
                <div className="absolute bottom-4 left-4 hidden sm:flex items-center space-x-2 px-3 py-2 rounded-xl bg-amber-950/80 border border-amber-500/40 text-[11px] text-amber-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Lock Snapping Prevention</span>
                </div>
              </div>

              {/* Bottom live inspection ribbon */}
              <div className="mt-3 p-3 rounded-2xl glass-panel border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-mono">Next Available Slot:</span>
                  <span className="text-white font-bold">Today / Tomorrow across CH Postcodes</span>
                </div>
                <button
                  onClick={() => onNavigateSection('security-calculator')}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs flex items-center space-x-1"
                >
                  <span>Test Your Risk</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
