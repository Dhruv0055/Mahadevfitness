import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import type { TestimonialItem } from '../types';

export const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: 't1',
      name: 'Parth Patel',
      role: 'Mansarovar Society Resident',
      rating: 5,
      text: 'Best gym in the entire Yogi Chowk area! Very clean and hygienic workout floor, heavy dumbbells up to 40+ kg, and extremely supportive trainers. The workout atmosphere is pure energy and discipline.',
      verified: true,
      timeAgo: 'Google Verified Review'
    },
    {
      id: 't2',
      name: 'Sneha Desai',
      role: 'Nana Varachha Member',
      rating: 5,
      text: 'Joined Mahadev Fitness for weight loss and muscle toning. The trainers give personal attention and correct form on every single exercise. Lost 9 kg safely with their custom diet guidance!',
      verified: true,
      timeAgo: 'Google Verified Review'
    },
    {
      id: 't3',
      name: 'Kevin Gajera',
      role: 'Regular Morning Lifter',
      rating: 5,
      text: 'Spacious workout floor near Ganga Jamuna with heavy plate-loaded stations and calibrated Olympic barbells. The dual morning and evening shift timings make it super easy for working professionals.',
      verified: true,
      timeAgo: 'Google Verified Review'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[activeIndex];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#08090C] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Subtle Watermark */}
      <div className="absolute -bottom-10 right-10 pointer-events-none select-none opacity-5 hidden lg:block">
        <span className="font-display text-[16rem] font-black uppercase text-white leading-none">
          REVIEWS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gymate Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                TESTIMONIALS
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              WHAT OUR <br className="hidden sm:inline" />
              <span className="text-[#FF0336] inline-block drop-shadow-[0_0_30px_rgba(255,3,54,0.5)]">
                CLIENTS SAY.
              </span>
            </motion.h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <a
              href="https://share.google/2BjOAnNhgow9Tl5RB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 hover:border-[#FF0336] text-xs font-mono font-bold text-zinc-300 hover:text-white transition-all shadow-md"
            >
              <span className="text-amber-400 font-bold">★★★★★</span>
              <span>5.0 (108+ Reviews on Google)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FF0336]" />
            </a>

            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-all active:scale-95 shadow-md"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-lg bg-[#FF0336] hover:bg-[#E00230] text-white flex items-center justify-center transition-all shadow-lg shadow-[#FF0336]/30 active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Card with Gymate Red Quote Accent */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#12141A] border-2 border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Gymate Oversized Red Quote Icon in Background */}
              <div className="absolute top-6 right-8 text-[#FF0336]/15 pointer-events-none select-none">
                <Quote className="w-24 sm:w-32 h-24 sm:h-32 rotate-180" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1.5 mb-6 text-amber-400">
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-zinc-400 ml-2">
                  5.0 ★ EXCELLENT
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-snug mb-8 relative z-10">
                "{currentReview.text}"
              </blockquote>

              {/* Author Row */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF0336] text-white font-display font-black text-xl flex items-center justify-center shadow-md">
                    {currentReview.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                      {currentReview.name}
                    </h4>
                    <span className="text-xs text-zinc-400 font-medium">
                      {currentReview.role}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                  {currentReview.timeAgo}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
