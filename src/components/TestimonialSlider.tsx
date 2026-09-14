import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight } from 'lucide-react';
import type { TestimonialItem } from '../types';

export const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 't1',
      name: 'Parth Patel',
      role: 'Nana Varachha, Surat',
      rating: 5,
      text: 'Hands down the best gym in Surat. The official Hammer Strength and Life Fitness setup makes every heavy lift feel biomechanically smooth. The luxury space at MBH-1 is unmatched.',
      verified: true,
      timeAgo: 'Google Review'
    },
    {
      id: 't2',
      name: 'Sneha Desai',
      role: 'Sarthana Jakat Naka',
      rating: 5,
      text: 'Joined for body recomposition and strength. The 1-on-1 coaching helped me lose 11 kg in 3 months safely. Plus, having the steam recovery room after training is amazing!',
      verified: true,
      timeAgo: 'Google Review'
    },
    {
      id: 't3',
      name: 'Kevin Gajera',
      role: 'Varachha Lifter',
      rating: 5,
      text: 'Huge 6,000+ sq. ft floor opposite Zoo Road with heavy plate-loaded stations and calibrated bars. Clean atmosphere, disciplined lifters, and genuine coaches.',
      verified: true,
      timeAgo: 'Google Review'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-12 sm:py-20 lg:py-28 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]"
        >
          <div>
            <div className="flex items-center space-x-2 text-[#FF2626] font-mono text-xs tracking-widest uppercase mb-3 font-bold">
              <span className="w-4 h-[2px] bg-[#FF2626]" />
              <span>MEMBER FEEDBACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              REAL PEOPLE. <span className="text-[#FF2626]">REAL COMMITMENT.</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="mt-4 md:mt-0 flex items-center space-x-3 sm:space-x-4">
            <a
              href="https://maps.app.goo.gl/7wocmV93Zsbbyy3B9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-zinc-300 transition-colors font-semibold"
            >
              <span className="text-amber-400 font-bold">★★★★★</span>
              <span className="font-mono text-[11px] sm:text-xs">Google Reviews</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2626]" />
            </a>

            <div className="flex space-x-1.5 sm:space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-2.5 rounded-md bg-[#0E1015] hover:bg-[#FF2626] text-white border border-white/10 transition-colors focus:outline-none"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-2.5 rounded-md bg-[#0E1015] hover:bg-[#FF2626] text-white border border-white/10 transition-colors focus:outline-none"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => {
            const isCenter = idx === activeIndex;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-[#0E1015] border shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(255,38,38,0.15)] ${
                  isCenter 
                    ? 'border-[#FF2626]/60 shadow-[0_20px_40px_rgba(255,38,38,0.1)] ring-1 ring-[#FF2626]/40 md:-translate-y-1' 
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-700" />
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed mb-4 sm:mb-6 italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 font-normal">
                      {t.role}
                    </p>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded font-semibold">
                    {t.timeAgo}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


