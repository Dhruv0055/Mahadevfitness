import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import type { FacilityItem } from '../types';
import { Lightbox } from './Lightbox';

export const FacilitiesGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const facilities: FacilityItem[] = [
    {
      id: 'f1',
      title: 'Hammer Strength Power & Olympic Arena',
      category: 'HAMMER STRENGTH',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
      alt: 'Hammer Strength plate loaded stations and Olympic barbells at The Body Lab Surat',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'f2',
      title: 'Life Fitness Biomechanical Machines',
      category: 'LIFE FITNESS',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      alt: 'Selectorized and plate-loaded Life Fitness strength equipment',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'f3',
      title: 'Olympic Calibrated Power Racks & Platforms',
      category: 'STRENGTH',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80&fit=crop',
      alt: 'Power racks for squats, deadlifts, and bench pressing',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'f4',
      title: 'Life Fitness Cardio Deck & Stairmasters',
      category: 'CARDIO',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
      alt: 'Interactive touch treadmills and stairmasters',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'f5',
      title: 'Steam Bath & Luxury Recovery Suites',
      category: 'RECOVERY',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury steam bath, showers, and locker rooms',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'f6',
      title: 'Millennium Business Hub (MBH-1) Luxury Floor',
      category: 'INTERIORS',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
      alt: 'Spacious luxury gym interior at 2nd Floor MBH-1 Nana Varachha Surat',
      span: 'md:col-span-2 md:row-span-1'
    }
  ];

  const filters = ['ALL', 'HAMMER STRENGTH', 'LIFE FITNESS', 'STRENGTH', 'CARDIO', 'RECOVERY'];

  const filteredFacilities = activeFilter === 'ALL' 
    ? facilities 
    : facilities.filter(f => f.category === activeFilter);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % facilities.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + facilities.length) % facilities.length);
    }
  };

  return (
    <section id="facilities" className="relative py-12 sm:py-20 lg:py-32 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-8 border-b border-white/[0.08]"
        >
          <div>
            <div className="flex items-center space-x-2 text-[#FF2626] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1.5 sm:mb-3 font-bold">
              <span className="w-3 sm:w-4 h-[2px] bg-[#FF2626]" />
              <span>THE BODY LAB / SURAT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              BUILT FOR <span className="text-[#FF2626]">SERIOUS</span> TRAINING.
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-base text-zinc-400 max-w-md font-light leading-relaxed">
            Surat’s official Life Fitness, Hammer Strength & luxury recovery floor.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-200 shrink-0 ${
                activeFilter === filter
                  ? 'bg-[#FF2626] text-white font-bold shadow-md'
                  : 'bg-[#0E1015] text-zinc-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* 2-column Grid on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-5 auto-rows-[180px] sm:auto-rows-[290px]">
          {filteredFacilities.map((item, index) => {
            const globalIndex = facilities.findIndex(f => f.id === item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 45, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImageIndex(globalIndex)}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-[#0E1015] border border-white/[0.08] hover:border-[#FF2626]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(255,38,38,0.15)] flex flex-col justify-end ${
                  activeFilter === 'ALL' && item.span ? item.span : 'col-span-1 row-span-1'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:brightness-[0.75] group-hover:scale-105 transition-all duration-700 ease-out absolute inset-0"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent" />

                {/* Top Corner Icon */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-6 h-6 sm:w-8 sm:h-8 rounded bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-[#FF2626] transition-all shadow-md">
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                {/* Bottom Caption Area */}
                <div className="relative p-2.5 sm:p-6 z-10">
                  <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-[#FF2626] font-bold block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xs sm:text-2xl text-white font-bold tracking-tight leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox
          isOpen={selectedImageIndex !== null}
          currentIndex={selectedImageIndex}
          items={facilities}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};


