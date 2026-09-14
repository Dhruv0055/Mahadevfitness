import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExploreGym: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onExploreGym }) => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85',
      title: 'Dumbbell & Olympic Floor'
    },
    {
      id: 'video',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-with-dumbbells-in-a-gym-44169-large.mp4',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2200&q=85',
      title: 'Live Athlete Training'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2200&q=85',
      title: 'Heavy Barbell & Power Racks'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=85',
      title: '1-on-1 Coaching Floor'
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
      className="relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-4 sm:pt-28 sm:pb-8 lg:min-h-screen"
    >
      {/* Background Slideshow & Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {slides[currentSlide].video ? (
            <motion.div
              key="video-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={slides[currentSlide].image}
                className="w-full h-full object-cover object-[center_35%] sm:object-center filter brightness-[0.55] contrast-[1.15]"
              >
                <source src={slides[currentSlide].video} type="video/mp4" />
              </video>
            </motion.div>
          ) : (
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover object-[center_35%] sm:object-center filter brightness-[0.55] contrast-[1.15]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Smooth Dark Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/50 to-[#08090C]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/80 via-transparent to-[#08090C]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center mb-5 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0E1015]/90 border border-white/10 backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-200 font-bold">
              Open Daily • 5:30 AM – 10:00 PM
            </span>
          </div>
        </motion.div>

        {/* Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-[-0.02em] uppercase text-white leading-[0.94] mb-4 sm:mb-6 max-w-5xl"
        >
          <span className="sr-only">The Body Lab Gym Surat | </span>
          BUILD YOUR<br />
          <span className="text-white">
            STRONGEST
          </span>{' '}
          <span className="text-[#FF2626] inline-block filter drop-shadow-[0_0_25px_rgba(255,38,38,0.6)]">
            SELF.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs sm:text-base md:text-lg text-zinc-300 font-normal max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8"
        >
          Surat’s premier luxury fitness centre with official Hammer Strength & Life Fitness setup.
        </motion.p>

        {/* Action Buttons - Side-by-side on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onStartJourney}
            className="btn-primary-red flex-1 sm:flex-none px-5 sm:px-8 py-3.5 sm:py-4 text-xs font-black uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 group active:scale-95 shadow-lg shadow-[#FF2626]/20"
          >
            <span>START JOURNEY</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreGym}
            className="flex-1 sm:flex-none px-4 sm:px-7 py-3.5 sm:py-4 bg-[#0E1015]/90 hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/15 backdrop-blur-md transition-all flex items-center justify-center shadow-lg active:scale-95"
          >
            FACILITIES
          </button>
        </motion.div>

        {/* Clean, Breathable Metric Strip (3 Core Pillars, No Duplication) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-8 mt-7 sm:mt-10 pt-5 border-t border-white/10 max-w-3xl w-full text-left"
        >
          <div className="pl-2.5 sm:pl-4 border-l-2 border-[#FF2626] transition-colors py-0.5">
            <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-[#FF2626] font-bold block mb-0.5 truncate">
              EQUIPMENT
            </span>
            <span className="font-display text-xs sm:text-xl font-bold text-white block leading-tight">
              Hammer Strength
            </span>
            <span className="text-[9px] sm:text-[11px] text-zinc-400 font-normal hidden sm:block">Official Life Fitness</span>
          </div>

          <div className="pl-2.5 sm:pl-4 border-l-2 border-white/20 hover:border-[#FF2626] transition-colors py-0.5">
            <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-0.5 truncate">
              RECOVERY
            </span>
            <span className="font-display text-xs sm:text-xl font-bold text-white block leading-tight">
              Steam & Spa
            </span>
            <span className="text-[9px] sm:text-[11px] text-zinc-400 font-normal hidden sm:block">Luxury Showers</span>
          </div>

          <div className="pl-2.5 sm:pl-4 border-l-2 border-[#FF2626] transition-colors py-0.5">
            <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-[#FF2626] font-bold block mb-0.5 truncate">
              TRAINING
            </span>
            <span className="font-display text-xs sm:text-xl font-bold text-white block leading-tight">
              1-on-1 Mentors
            </span>
            <span className="text-[9px] sm:text-[11px] text-zinc-400 font-normal hidden sm:block">Custom Split & Diet</span>
          </div>
        </motion.div>

        {/* Scroll Down Trigger - Compact & Cleanly Spaced */}
        <motion.a
          href="#why-us"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-3 sm:mt-5 mb-1 flex flex-col items-center space-y-0.5 text-zinc-500 hover:text-white transition-colors cursor-pointer group z-20"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
            SCROLL
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#FF2626] animate-bounce" />
        </motion.a>

      </div>
    </section>
  );
};

