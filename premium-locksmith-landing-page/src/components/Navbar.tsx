import React, { useState, useEffect } from 'react';
import { Shield, Phone, Calendar, Menu, X, CheckCircle, ChevronDown, Building, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../data/locksmithData';

interface NavbarProps {
  onOpenBooking: (type?: 'residential' | 'commercial') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
    setActiveDropdown(false);
  };

  return (
    <>
      {/* Top emergency dispatch ticker */}
      <div className="bg-[#030712] border-b border-cyan-500/20 text-xs py-1.5 px-4 font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-semibold tracking-wide hidden sm:inline">
              Wirral Rapid Response Units:
            </span>
            <span className="text-emerald-400">Wallasey, Birkenhead, West Kirby, Heswall & Chester Active</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hidden md:inline-flex items-center space-x-1 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>BS 3621 Certified</span>
            </span>
            <span className="hidden md:inline-flex items-center space-x-1 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>CRB/DBS Vetted</span>
            </span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>24/7 Line: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-xl shadow-slate-950/60 border-b border-white/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    LOCKSMITHS<span className="text-cyan-400">WIRRAL</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    NW LOCKS
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                  Master Locksmiths & Free Security Audits
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollTo('audit-breakdown')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                36-Point Check
              </button>

              <button
                onClick={() => scrollTo('security-calculator')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center space-x-1"
              >
                <span>Risk Calculator</span>
                <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded font-mono font-bold">Free</span>
              </button>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(!activeDropdown)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors flex items-center space-x-1"
                >
                  <span>Sectors</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {activeDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl glass-panel border border-white/10 shadow-2xl p-2 z-50">
                    <button
                      onClick={() => scrollTo('residential-solutions')}
                      className="w-full flex items-center space-x-3 p-2.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Residential Homes</div>
                        <div className="text-[10px] text-slate-400">Anti-snap & uPVC door security</div>
                      </div>
                    </button>
                    <button
                      onClick={() => scrollTo('commercial-solutions')}
                      className="w-full flex items-center space-x-3 p-2.5 rounded-xl text-left hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Commercial & Retail</div>
                        <div className="text-[10px] text-slate-400">Master suites & fire exit compliance</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollTo('hardware-showcase')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                3★ Diamond Locks
              </button>

              <button
                onClick={() => scrollTo('coverage-map')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Wirral Postcodes
              </button>

              <button
                onClick={() => scrollTo('testimonials')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Reviews (4.9★)
              </button>

              <button
                onClick={() => scrollTo('faq')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                FAQ
              </button>
            </nav>

            {/* Direct Call & CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-cyan-400 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onOpenBooking('residential')}
                className="relative group overflow-hidden px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span className="relative z-10 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Free Check</span>
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                aria-label="Call Locksmiths Wirral"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-out drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden glass-panel border-b border-white/15 px-4 pt-3 pb-6 mt-2 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
              <button
                onClick={() => scrollTo('residential-solutions')}
                className="p-3 rounded-xl bg-white/5 text-left text-xs"
              >
                <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold mb-1">
                  <Home className="w-3.5 h-3.5" />
                  <span>Domestic Home</span>
                </div>
                <div className="text-[11px] text-slate-400">Anti-snap security</div>
              </button>
              <button
                onClick={() => scrollTo('commercial-solutions')}
                className="p-3 rounded-xl bg-white/5 text-left text-xs"
              >
                <div className="flex items-center space-x-1.5 text-blue-400 font-semibold mb-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>Commercial</span>
                </div>
                <div className="text-[11px] text-slate-400">Master suites & fire</div>
              </button>
            </div>

            <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-300">
              <button
                onClick={() => scrollTo('audit-breakdown')}
                className="py-2 px-3 rounded-lg text-left hover:bg-white/5"
              >
                36-Point Check Details
              </button>
              <button
                onClick={() => scrollTo('security-calculator')}
                className="py-2 px-3 rounded-lg text-left hover:bg-white/5 flex items-center justify-between"
              >
                <span>Security Risk Calculator</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded font-mono">100% Free</span>
              </button>
              <button
                onClick={() => scrollTo('hardware-showcase')}
                className="py-2 px-3 rounded-lg text-left hover:bg-white/5"
              >
                Anti-Snap Lock Comparison
              </button>
              <button
                onClick={() => scrollTo('coverage-map')}
                className="py-2 px-3 rounded-lg text-left hover:bg-white/5"
              >
                Wirral Postcode Coverage
              </button>
              <button
                onClick={() => scrollTo('pricing')}
                className="py-2 px-3 rounded-lg text-left hover:bg-white/5"
              >
                Transparent Guarantee (£0 Check)
              </button>
              <button
                onClick={() => scrollTo('faq')}
                className="py-2 px-3 rounded-lg text-left hover:bg-white/5"
              >
                Frequently Asked Questions
              </button>
            </nav>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('residential');
                }}
                className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/30 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 100% Free Property Check</span>
              </button>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white font-mono text-center block text-xs"
              >
                Call Office: {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                href={BUSINESS_INFO.mobileTel}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 font-mono text-center block text-xs"
              >
                Direct Mobile: {BUSINESS_INFO.mobileDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
