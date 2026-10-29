import React from 'react';
import { Shield, Phone, Mail, MapPin, CheckCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, WIRRAL_POSTCODES } from '../data/locksmithData';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060f] border-t border-white/10 text-slate-400 text-xs relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
                <Shield className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-white block">
                  LOCKSMITHS<span className="text-cyan-400">WIRRAL</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  NORTH WEST EMERGENCY LOCKSMITHS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing certified 100% Free Property Security Checks, BS 3621 British Standard lock upgrades, and 24/7 emergency locksmith services to domestic homes and commercial businesses across the Wirral peninsula.
            </p>

            <div className="space-y-2 pt-1 font-mono text-[11px] text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="hover:text-cyan-400 text-white font-bold">
                  Office: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={BUSINESS_INFO.mobileTel} className="hover:text-emerald-400 text-emerald-400">
                  24/7 Mobile Direct: {BUSINESS_INFO.mobileDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-cyan-400">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Security Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenBooking()} className="hover:text-cyan-400 transition-colors">
                  100% Free Security Check
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('hardware-showcase')} className="hover:text-cyan-400 transition-colors">
                  Anti-Snap 3★ Diamond Cylinders
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('audit-breakdown')} className="hover:text-cyan-400 transition-colors">
                  uPVC Multi-Point Gearbox Servicing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('residential-solutions')} className="hover:text-cyan-400 transition-colors">
                  Patio & Bifold Door Reinforcement
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('commercial-solutions')} className="hover:text-cyan-400 transition-colors">
                  Commercial Master Key Suites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('commercial-solutions')} className="hover:text-cyan-400 transition-colors">
                  Fire Exit Panic Hardware (BS EN 1125)
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage Areas Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Wirral Coverage Zones
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px]">
              {WIRRAL_POSTCODES.slice(0, 10).map((a) => (
                <button
                  key={a.postcode}
                  onClick={() => onNavigateSection('coverage-map')}
                  className="hover:text-cyan-400 text-left transition-colors truncate"
                  title={a.name}
                >
                  <span className="font-mono text-cyan-400 mr-1">{a.postcode}</span>
                  <span>{a.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => onNavigateSection('coverage-map')}
              className="text-cyan-400 text-[11px] font-mono hover:underline block pt-1"
            >
              + View all 16 Wirral coverage areas
            </button>
          </div>

          {/* Credentials Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Credentials & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>British Standard BS 3621</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>TS007 3-Star Sold Secure</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Enhanced DBS/CRB Vetted</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>£5M Public Liability Cover</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>No Call-Out Fee Ever</span>
              </li>
              <li className="flex items-center space-x-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>10-Year Mechanical Warranty</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} North West Emergency Locksmiths t/a Locksmiths Wirral. All rights reserved. 20 Mount Pleasant Road, Wallasey, Wirral CH45 5EW.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigateSection('pricing')}
              className="hover:text-slate-300 transition-colors"
            >
              Zero Fee Guarantee
            </button>
            <button
              onClick={() => onNavigateSection('faq')}
              className="hover:text-slate-300 transition-colors"
            >
              Security FAQ
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
