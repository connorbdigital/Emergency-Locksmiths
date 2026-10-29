import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, ArrowRight, Sparkles, RefreshCw, Key, DoorClosed, Clock, CheckCircle } from 'lucide-react';

interface SecurityCalculatorProps {
  onOpenBooking: (type: 'residential' | 'commercial') => void;
}

export const SecurityCalculator: React.FC<SecurityCalculatorProps> = ({ onOpenBooking }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [lockType, setLockType] = useState<string>('standard-euro');
  const [lockAge, setLockAge] = useState<string>('5plus');
  const [vulnerabilities, setVulnerabilities] = useState<string[]>([
    'patio-bifold',
    'lost-keys'
  ]);

  const toggleVulnerability = (id: string) => {
    if (vulnerabilities.includes(id)) {
      setVulnerabilities(vulnerabilities.filter(v => v !== id));
    } else {
      setVulnerabilities([...vulnerabilities, id]);
    }
  };

  // Calculate score out of 100
  const calculateScore = () => {
    let score = 50;

    // Lock type impact
    if (lockType === 'anti-snap-diamond') score += 35;
    else if (lockType === 'bs-mortice') score += 30;
    else if (lockType === 'smart-access') score += 25;
    else if (lockType === 'standard-euro') score -= 25;
    else if (lockType === 'rim-only') score -= 30;
    else if (lockType === 'not-sure') score -= 15;

    // Age impact
    if (lockAge === 'under2') score += 15;
    else if (lockAge === '2to5') score += 5;
    else if (lockAge === '5plus') score -= 15;
    else if (lockAge === 'unknown-movein') score -= 25;

    // Vulnerabilities
    score -= vulnerabilities.length * 8;

    return Math.max(12, Math.min(98, score));
  };

  const score = calculateScore();

  const getRiskStatus = () => {
    if (score < 45) {
      return {
        label: "HIGH VULNERABILITY",
        badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
        barColor: "bg-red-500",
        message: "Your property is critically exposed to 9-second lock snapping or insurance claim rejection.",
        recommendation: "Immediate free physical inspection recommended to verify cylinder projection and gearbox alignment."
      };
    } else if (score < 75) {
      return {
        label: "MODERATE RISK",
        badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
        barColor: "bg-amber-500",
        message: "Some baseline security is present, but secondary vulnerabilities leave entry points exposed.",
        recommendation: "Book our free security audit to certify BS 3621 compliance and patio door reinforcement."
      };
    } else {
      return {
        label: "OPTIMAL SECURITY",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
        barColor: "bg-emerald-500",
        message: "Strong security foundation detected. Multi-point locking and anti-snap standard appears robust.",
        recommendation: "Let us verify your complete 36-point physical perimeter for total peace of mind at zero cost."
      };
    }
  };

  const status = getRiskStatus();

  return (
    <section id="security-calculator" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE VULNERABILITY DIAGNOSTIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Secure Is Your <span className="text-gradient-cyan">Wirral Property?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Answer 4 quick questions below to calculate your estimated security rating and uncover potential insurance or lock-snapping risks before an intruder does.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 shadow-2xl">
            
            {/* Step 1: Sector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-bold">1</span>
                  <span>Property Type</span>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`p-3.5 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
                    propertyType === 'residential'
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span>Domestic Residence / Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`p-3.5 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-center space-x-2 ${
                    propertyType === 'commercial'
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span>Commercial / Business Unit</span>
                </button>
              </div>
            </div>

            {/* Step 2: Lock Type */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-bold">2</span>
                  <span>Primary Entrance Lock Mechanism</span>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'standard-euro', title: 'Standard Euro Cylinder', desc: 'Standard builder uPVC/composite cylinder', icon: DoorClosed },
                  { id: 'anti-snap-diamond', title: 'TS007 3-Star Diamond Anti-Snap', desc: 'Ultion, Yale Platinum or Sold Secure', icon: Key },
                  { id: 'bs-mortice', title: '5-Lever Mortice Deadlock', desc: 'Engraved British Standard BS 3621 Kitemark', icon: ShieldCheck },
                  { id: 'rim-only', title: 'Standard Nightlatch / Rim Only', desc: 'Single cylinder without secondary deadlock', icon: AlertTriangle },
                  { id: 'smart-access', title: 'Digital / Smart Keypad / Access', desc: 'Electronic commercial access or code lock', icon: Sparkles },
                  { id: 'not-sure', title: "I'm Not Sure", desc: 'Locksmith inspection recommended', icon: RefreshCw },
                ].map(item => {
                  const isSelected = lockType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLockType(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-400 ring-1 ring-cyan-400 text-white'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>{item.title}</span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Lock Age */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-bold">3</span>
                  <span>When Were Your Locks Last Changed?</span>
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'under2', label: '< 2 Years Ago' },
                  { id: '2to5', label: '2 - 5 Years' },
                  { id: '5plus', label: '5+ Years' },
                  { id: 'unknown-movein', label: 'Moved In With Same Keys' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setLockAge(opt.id)}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      lockAge === opt.id
                        ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                        : 'bg-slate-900 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Vulnerability Checklist */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[11px] font-bold">4</span>
                  <span>Check All That Apply to Your Premises</span>
                </label>
              </div>
              <div className="space-y-2">
                {[
                  { id: 'patio-bifold', text: 'Property features patio, French, or sliding bifold doors' },
                  { id: 'lost-keys', text: 'Keys have been lost, lent, or handed to builders/previous tenants' },
                  { id: 'stiff-handle', text: 'Door handle feels stiff or multi-point lock requires hard lifting to lock' },
                  { id: 'insurance-unsure', text: 'Not 100% sure if current locks satisfy insurance BS 3621 terms' },
                ].map(vuln => {
                  const checked = vulnerabilities.includes(vuln.id);
                  return (
                    <button
                      key={vuln.id}
                      type="button"
                      onClick={() => toggleVulnerability(vuln.id)}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                        checked
                          ? 'bg-cyan-950/30 border-cyan-500/60 text-slate-200'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <span>{vuln.text}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        checked ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {checked && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Diagnostics Output Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
            {/* Ambient corner light */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400">ESTIMATED SECURITY HEALTH</span>
              <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${status.badgeColor}`}>
                {status.label}
              </span>
            </div>

            {/* Score Ring / Bar */}
            <div className="py-6 text-center space-y-3">
              <div className="text-6xl sm:text-7xl font-black font-mono tracking-tighter text-white">
                {score}<span className="text-2xl text-slate-500 font-normal">/100</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-white/10">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${status.barColor}`}
                  style={{ width: `${score}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm mx-auto">
                {status.message}
              </p>
            </div>

            {/* Breakdown alerts */}
            <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Inspection Duration:</span>
                  <span className="text-slate-400 text-[11px]">20–30 mins on site. Full written certificate issued.</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/80 border border-white/5">
                <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Lock Snapping Exposure:</span>
                  <span className="text-slate-400 text-[11px]">
                    {lockType === 'standard-euro'
                      ? 'Critically Vulnerable (Can be snapped quietly in under 9 seconds)'
                      : lockType === 'anti-snap-diamond'
                      ? 'Low Exposure (3-Star Sacrificial Lockdown Active)'
                      : 'Requires On-Site Physical Inspection'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 space-y-3">
              <button
                type="button"
                onClick={() => onOpenBooking(propertyType)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book 100% Free On-Site Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Always £0.00 • No Call-Out Charge • No Sales Pressure</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
