import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Dumbbell, Flame, HeartHandshake, Zap, Trophy, Clock } from 'lucide-react';

interface TrainingProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onSelectProgram }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const classes = [
    {
      id: 'strength',
      title: 'Olympic Strength & CrossFit',
      category: 'Power Discipline',
      timing: 'Daily Shifts: 5:30-10:30 AM & 5-10 PM',
      description: 'Heavy compound barbell lifts, Olympic plate training & progressive overload for maximal power.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=85',
      icon: Dumbbell
    },
    {
      id: 'hypertrophy',
      title: 'Hypertrophy & Muscle Build',
      category: 'Body Transformation',
      timing: 'Daily Shifts: 5:30-10:30 AM & 5-10 PM',
      description: 'Time-under-tension protocols, targeted muscle hypertrophy and high-volume isolation splits.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=85',
      icon: Trophy
    },
    {
      id: 'fat-loss',
      title: 'Fat Loss & Conditioning',
      category: 'Metabolic Burn',
      timing: 'Morning Shift: 5:30 AM – 10:30 AM',
      description: 'High-intensity conditioning circuits designed to strip body fat and boost cardiovascular endurance.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=85',
      icon: Flame
    },
    {
      id: 'coaching',
      title: '1-on-1 Personal Mentorship',
      category: 'Dedicated Coaching',
      timing: 'Reserved Slots: Morning & Evening',
      description: 'Private trainer guidance, biomechanical movement correction, and customized dietary roadmap.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85',
      icon: HeartHandshake
    },
    {
      id: 'agility',
      title: 'Functional Stamina & Mobility',
      category: 'Athletic Agility',
      timing: 'Evening Shift: 5:00 PM – 10:00 PM',
      description: 'Core stability, mobility routines, and functional athletic endurance for peak agility.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=85',
      icon: Zap
    }
  ];

  // Automatic fade transition every 4.5 seconds with pause-on-hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % classes.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, classes.length]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % classes.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + classes.length) % classes.length);
  };

  // Visible items based on current index
  const visibleClasses = [
    classes[startIndex],
    classes[(startIndex + 1) % classes.length],
    classes[(startIndex + 2) % classes.length]
  ];

  // Animation variants for smooth staggered card transitions
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25 }
    }
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 18, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
    },
    exit: {
      opacity: 0,
      y: -12,
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="training" className="relative py-20 sm:py-28 lg:py-36 bg-[#F4F5F7] text-zinc-900 overflow-hidden border-t border-zinc-200">
      
      {/* Background Subtle Dot Pattern from Gymate Design */}
      <div className="absolute inset-0 bg-grid-minimal opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Watermark & Carousel Controls */}
          <div className="lg:col-span-4 relative">
            
            {/* Giant Faded Watermark: NO DAYS OFF */}
            <div className="absolute -top-16 -left-6 z-0 pointer-events-none select-none opacity-20 hidden md:block">
              <span className="font-display text-7xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-zinc-400 leading-none block">
                NO<br />DAYS<br />OFF
              </span>
            </div>

            <div className="relative z-10">
              {/* Red Brush Badge */}
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase mb-3">
                UPCOMING SESSIONS
              </div>

              {/* Bold Display Heading */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight mb-4">
                We Offer Body <br />
                Changes Classes
              </h2>

              {/* Description with Mahadev Fitness Details */}
              <p className="text-zinc-600 text-sm leading-relaxed mb-6 max-w-sm">
                Train at Surat's dedicated strength ground in Mansarovar Society, Yogi Chowk. We offer structured daily training across convenient morning and evening shifts.
              </p>

              {/* Shift Hours Capsule */}
              <div className="mb-6 p-3.5 bg-white rounded-xl border border-zinc-200 shadow-sm text-xs font-mono space-y-1.5">
                <div className="flex items-center space-x-2 text-zinc-900 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
                  <span>Morning Shift: 5:30 AM – 10:30 AM</span>
                </div>
                <div className="flex items-center space-x-2 text-zinc-900 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
                  <span>Evening Shift: 5:00 PM – 10:00 PM</span>
                </div>
              </div>

              {/* Enhanced Carousel Controls with Arrows, Counter & Interactive Jump Dots */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white flex items-center justify-center transition-all shadow-md active:scale-95 border border-zinc-700/50"
                    aria-label="Previous Class"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-lg bg-[#FF0336] hover:bg-[#E00230] text-white flex items-center justify-center transition-all shadow-lg shadow-[#FF0336]/30 active:scale-95"
                    aria-label="Next Class"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Active Index Counter */}
                  <div className="flex items-center space-x-2 pl-3 border-l border-zinc-300 font-mono text-xs font-bold text-zinc-500 select-none">
                    <span className="text-[#FF0336] text-sm font-black">0{startIndex + 1}</span>
                    <span>/</span>
                    <span>0{classes.length}</span>
                  </div>
                </div>

                {/* Interactive Jump Dots */}
                <div className="flex items-center space-x-2 pt-1">
                  {classes.map((cls, idx) => (
                    <button
                      key={cls.id}
                      onClick={() => setStartIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        startIndex === idx
                          ? 'w-8 bg-[#FF0336] shadow-sm shadow-[#FF0336]/40'
                          : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                      }`}
                      aria-label={`Jump to ${cls.title}`}
                      title={cls.title}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Multi-Card Staggered Fade Carousel */}
          <div
            className="lg:col-span-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleClasses.map((item, idx) => {
                  const IconComp = item.icon;
                  const responsiveClasses =
                    idx === 0
                      ? 'flex'
                      : idx === 1
                      ? 'hidden sm:flex'
                      : 'hidden lg:flex';

                  return (
                    <motion.div
                      key={item.id}
                      variants={cardVariants}
                      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-200/80 flex-col justify-between ${responsiveClasses}`}
                    >
                      {/* Top Photo */}
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover filter contrast-[1.1] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 rounded">
                          {item.category}
                        </span>
                      </div>

                      {/* Angled White Overlay Card (Gymate Signature Diagonal Cut) */}
                      <div className="relative -mt-8 bg-white p-5 pt-6 rounded-t-3xl flex-1 flex flex-col justify-between border-t border-zinc-100 shadow-sm">
                        
                        {/* Red Line Icon Badge */}
                        <div className="flex justify-center -mt-10 mb-3">
                          <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-zinc-100 flex items-center justify-center text-[#FF0336] group-hover:scale-110 group-hover:bg-[#FF0336] group-hover:text-white transition-all duration-300">
                            <IconComp className="w-7 h-7" />
                          </div>
                        </div>

                        {/* Title, Description & Timing */}
                        <div className="text-center mb-4">
                          <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-2 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs text-zinc-600 leading-relaxed mb-3 line-clamp-2">
                            {item.description}
                          </p>
                          <div className="inline-flex items-center justify-center space-x-1.5 text-[10px] sm:text-[11px] font-mono text-zinc-600 font-medium bg-zinc-50 border border-zinc-200/60 rounded-md py-1.5 px-2.5 max-w-full">
                            <Clock className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
                            <span className="truncate">{item.timing}</span>
                          </div>
                        </div>

                        {/* Red CTA Button */}
                        <div className="mt-2 text-center">
                          <div className="relative inline-block w-full">
                            <button
                              onClick={() => onSelectProgram(item.title)}
                              className="w-full bg-[#FF0336] hover:bg-[#E00230] text-white py-2.5 px-4 text-xs font-black uppercase tracking-wider rounded-md flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg hover:shadow-[#FF0336]/30 active:scale-95 group/btn"
                            >
                              <span>JOIN NOW</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
