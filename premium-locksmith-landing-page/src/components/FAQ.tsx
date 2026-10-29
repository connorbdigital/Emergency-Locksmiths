import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, Mail, Search } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/locksmithData';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#070b16] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENT ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Everything you need to know about our 100% Free Property Security Check, British Standards, and our zero-sales-pressure policy.
          </p>

          {/* Search FAQ */}
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4 text-cyan-400" />
            </div>
            <input
              type="text"
              placeholder="Filter questions (e.g. free, snapping, insurance, fire)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-white/15 rounded-xl text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-cyan-500/40 bg-slate-900/80' : 'border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">
              No questions found matching "{searchQuery}". Give us a call directly!
            </div>
          )}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-cyan-500/20 text-center space-y-4">
          <h4 className="text-lg font-bold text-white">
            Have a specific domestic or commercial security inquiry?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Speak directly with our senior locksmith Mark on our 24/7 hotline or email our technical desk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center space-x-2 py-2.5 px-5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Office: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.mobileTel}
              className="inline-flex items-center space-x-2 py-2.5 px-5 rounded-xl bg-slate-900 border border-white/10 text-emerald-400 font-mono text-xs hover:border-emerald-500/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Mobile: {BUSINESS_INFO.mobileDisplay}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-flex items-center space-x-2 py-2.5 px-5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
