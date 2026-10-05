import React, { useState, useEffect } from 'react';
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
      text: 'Best gym in Yogi Chowk area! Very clean and hygienic workout floor, heavy dumbbells up to 40+ kg, and extremely supportive trainers. The workout atmosphere is pure energy and discipline.',
      verified: true,
      timeAgo: 'Google Review'
    },
    {
      id: 't2',
      name: 'Sneha Desai',
      role: 'Nana Varachha Member',
      rating: 5,
      text: 'Joined Mahadev Fitness for weight loss and muscle toning. The trainers give personal attention and correct form on every single exercise. Lost 9 kg safely with their custom diet guidance!',
      verified: true,
      timeAgo: 'Google Review'
    },
    {
      id: 't3',
      name: 'Kevin Gajera',
      role: 'Regular Morning Lifter',
      rating: 5,
      text: 'Spacious workout floor near Ganga Jamuna with heavy plate-loaded stations and calibrated Olympic barbells. The dual morning and evening shift timings make it super easy for working professionals.',
      verified: true,
      timeAgo: 'Google Review'
    },
    {
      id: 't4',
      name: 'Bhavin Radadiya',
      role: 'Yogi Chowk Resident',
      rating: 5,
      text: 'The equipment quality here is top notch. Separate muscle zones, heavy dumbbells, and trainers who actually guide you on proper technique. Highly recommend to anyone in Surat.',
      verified: true,
      timeAgo: 'Google Review'
    },
    {
      id: 't5',
      name: 'Jaydeep Kathiriya',
      role: 'Evening Shift Member',
      rating: 5,
      text: 'Joined 6 months ago and gained great muscle definition. Great crowd, motivating environment, and flexible shift timings. Best value fitness center in Nana Varachha!',
      verified: true,
      timeAgo: 'Google Review'
    }
  ];

  // Automatically change reviews with fade animation every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[activeIndex];

  return (
    <section className="relative py-14 sm:py-20 bg-[#F4F5F7] text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-zinc-200 gap-3">
          <div>
            <div className="brush-badge bg-[#FF0336] text-white text-[11px] font-black tracking-widest uppercase mb-2">
              TESTIMONIALS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 uppercase tracking-tight">
              What Our <span className="text-[#FF0336]">Clients Say</span>
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="https://share.google/2BjOAnNhgow9Tl5RB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs font-mono font-bold text-zinc-800 hover:text-[#FF0336] transition-all shadow-xs"
            >
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span>5.0 (108+ Google Reviews)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FF0336]" />
            </a>

            <div className="flex space-x-1.5">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-md bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center transition-all active:scale-95 shadow-xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-md bg-[#FF0336] hover:bg-[#E00230] text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Review Card with Automatic Smooth Fade Animation */}
        <div className="relative rounded-2xl p-6 sm:p-8 bg-white border border-zinc-200 shadow-md min-h-[240px] flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Background Quote */}
          <div className="absolute top-4 right-6 text-zinc-100 pointer-events-none select-none">
            <Quote className="w-16 h-16 rotate-180" />
          </div>

          {/* Animated Progress Timer Bar at Top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-100 overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4.5, ease: 'linear' }}
              className="h-full bg-[#FF0336]"
            />
          </div>

          {/* Review Content with Smooth Fade Transitions */}
          <div className="relative z-10 flex-1 flex flex-col justify-between pt-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col justify-between space-y-4"
              >
                {/* Star Rating */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {Array.from({ length: currentReview.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-xs font-mono font-bold text-zinc-500 ml-2">
                    5.0 ★ VERIFIED MEMBER
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="font-display text-lg sm:text-2xl font-bold uppercase tracking-tight text-zinc-900 leading-snug">
                  "{currentReview.text}"
                </blockquote>

                {/* Member Details */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF0336] text-white font-display font-black text-lg flex items-center justify-center shadow-xs">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-black uppercase text-zinc-950">
                        {currentReview.name}
                      </h4>
                      <span className="text-xs text-zinc-500">
                        {currentReview.role}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {currentReview.timeAgo}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Smooth Pagination Dots Below */}
          <div className="flex items-center justify-center space-x-2 pt-5 relative z-10">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === dotIdx
                    ? 'w-7 bg-[#FF0336]'
                    : 'w-1.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
