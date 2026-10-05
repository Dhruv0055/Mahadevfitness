import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExploreGym: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onExploreGym }) => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2400&q=85',
      title: 'Olympic Athlete Training'
    },
    {
      id: 2,
      video: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-with-dumbbells-in-a-gym-44169-large.mp4',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85',
      title: 'Power & Olympic Floor'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2400&q=85',
      title: 'Heavy Barbell Lifts'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=2400&q=85',
      title: 'Fighter & Strength Conditioning'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 bg-[#08090C]"
    >
      {/* Background Slideshow / Video (Prominently Visible) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {slides[currentSlide].video ? (
            <motion.div
              key="hero-video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={slides[currentSlide].image}
                className="w-full h-full object-cover object-[75%_center] filter brightness-[0.85] contrast-[1.1]"
              >
                <source src={slides[currentSlide].video} type="video/mp4" />
              </video>
            </motion.div>
          ) : (
            <motion.div
              key={`hero-slide-${currentSlide}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover object-[75%_center] filter brightness-[0.82] contrast-[1.12]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean Directional Contrast Gradient - Dark on left for text, completely clear on right for athlete */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[68%] bg-gradient-to-r from-[#08090C] via-[#08090C]/85 to-transparent pointer-events-none" />
        
        {/* Subtle Top & Bottom Section Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090C] via-[#08090C]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08090C]/80 to-transparent pointer-events-none" />
        
        {/* Ambient Crimson Glow behind Athlete (Matches Pinterest Red Smoke) */}
        <div className="absolute top-1/3 right-10 sm:right-24 w-96 h-96 bg-[#FF0336]/20 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* Decorative Graphic Accents from Pin Design */}
      {/* 1. Zigzag wave lines top left */}
      <div className="absolute top-36 left-6 sm:left-16 z-10 pointer-events-none hidden sm:block opacity-75">
        <svg width="64" height="24" viewBox="0 0 64 24" fill="none" stroke="#FF0336" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12L12 4L22 20L32 4L42 20L52 4L62 12" />
        </svg>
      </div>

      {/* 2. Dotted Matrix Pattern bottom left */}
      <div className="absolute bottom-16 left-6 sm:left-14 z-10 pointer-events-none hidden md:grid grid-cols-6 gap-2.5 opacity-40">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Red Brush Badge from Pin: FIND YOUR ENERGY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 sm:mb-6 flex items-center space-x-3"
          >
            <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase shadow-[0_4px_15px_rgba(255,3,54,0.4)]">
              FIND YOUR ENERGY
            </div>
            <div className="flex items-center space-x-1 text-amber-400 text-xs font-mono font-bold bg-black/60 px-2.5 py-1 rounded border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 (108+ Reviews)</span>
            </div>
          </motion.div>

          {/* Iconic High-Impact Headline from Pin */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black uppercase text-white leading-[0.92] tracking-tight mb-5 sm:mb-7 drop-shadow-xl"
          >
            MAKE YOUR BODY <br />
            <span className="text-white">HEALTHY</span>{' '}
            <span className="text-[#FF0336] inline-block drop-shadow-[0_0_35px_rgba(255,3,54,0.7)]">
              & FIT
            </span>
          </motion.h1>

          {/* Descriptive Copy with Mahadev Fitness Yogi Chowk Details */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-200 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8 sm:mb-10 drop-shadow-md"
          >
            Surat’s premier fitness ground located at Mansarovar Society, Yogi Chowk. Equipped with heavy Olympic strength gear, certified trainers, and dynamic morning & evening shifts.
          </motion.p>

          {/* Dual Action Buttons with Gymate Offset Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 sm:gap-7"
          >
            {/* Gymate Signature Offset Border Button: OUR CLASSES */}
            <div className="relative group inline-block">
              <div className="absolute top-1.5 left-1.5 w-full h-full border-2 border-white/60 group-hover:border-[#FF0336] transition-all duration-200 pointer-events-none" />
              <button
                onClick={onExploreGym}
                className="relative bg-[#FF0336] group-hover:bg-[#E00230] text-white px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center space-x-3 transition-transform active:translate-x-1 active:translate-y-1 shadow-xl shadow-[#FF0336]/40"
              >
                <span>OUR CLASSES</span>
                <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Secondary Action: Join Now */}
            <button
              onClick={onStartJourney}
              className="text-white hover:text-[#FF0336] font-display text-sm sm:text-base font-extrabold tracking-wider uppercase flex items-center space-x-2 py-3 px-4 border-b-2 border-white/50 hover:border-[#FF0336] transition-all drop-shadow"
            >
              <span>JOIN TODAY (5:30 AM & 5 PM SHIFTS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Bottom Quick Feature Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 sm:mt-16 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono text-zinc-300 uppercase tracking-wider"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FF0336]" />
              <span className="text-white font-bold">Mansarovar Society</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FF0336]" />
              <span className="text-white font-bold">Olympic Free Weights</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">Direct Phone: 08320102460</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
