import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquareQuote, Home, Building2, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/locksmithData';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');

  const filtered = TESTIMONIALS.filter(t => {
    if (filter === 'all') return true;
    return t.category === filter;
  });

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>VERIFIED WIRRAL COMMUNITY REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Hundreds of <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Wirral Homes & Businesses</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Read firsthand experiences from homeowners, estate agents, shop managers, and facility supervisors who booked our Free Security Check.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Reviews ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'residential'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Residential</span>
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'commercial'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Stars and date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{item.date}</span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  "{item.title}"
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">{item.name}</span>
                  <div className="flex items-center space-x-1 text-[11px] text-cyan-400 font-mono">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span>Verified Visit</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{item.location}</span>
                  <span className="text-slate-400 capitalize">{item.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <MessageSquareQuote className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Google Rating {BUSINESS_INFO.googleRating} / 5.0 Across Merseyside
              </div>
              <div className="text-xs text-slate-400">
                Over 380 five-star reviews for North West Emergency Locksmiths / Locksmiths Wirral
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer whitespace-nowrap"
          >
            <span>Book Your Free Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
