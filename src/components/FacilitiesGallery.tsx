import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import type { FacilityItem } from '../types';
import { Lightbox } from './Lightbox';

export const FacilitiesGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const facilities: FacilityItem[] = [
    {
      id: 'f1',
      title: 'Olympic Dumbbell & Free Weight Floor',
      category: 'FREE WEIGHTS',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
      alt: 'Heavy dumbbells and Olympic barbells at Mahadev Fitness Gym Surat',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'f2',
      title: 'Biomechanical Plate-Loaded Stations',
      category: 'MACHINES',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      alt: 'Selectorized and plate-loaded strength equipment at Mahadev Fitness',
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
      title: 'Cardio Deck & Endurance Stations',
      category: 'CARDIO',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
      alt: 'High-performance treadmills and cardio stations',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'f5',
      title: 'Functional Training & Core Conditioning',
      category: 'STRENGTH',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      alt: 'Functional movement and mobility zone',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 'f6',
      title: 'Spacious Mansarovar Society Workout Floor',
      category: 'INTERIORS',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
      alt: 'Spacious clean gym interior at Yogi Chowk Nana Varachha Surat',
      span: 'md:col-span-2 md:row-span-1'
    }
  ];

  const filters = ['ALL', 'FREE WEIGHTS', 'MACHINES', 'STRENGTH', 'CARDIO', 'INTERIORS'];

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
    <section id="facilities" className="relative py-16 sm:py-24 lg:py-32 bg-[#08090C] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Subtle Red Smoke Glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#FF0336]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#FF0336]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gymate Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/[0.08]">
          <div>
            {/* Red Brush Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                OUR FACILITIES
              </div>
            </motion.div>

            {/* Big Bold Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              LOOK AT OUR <br className="hidden sm:inline" />
              <span className="text-[#FF0336] inline-block drop-shadow-[0_0_30px_rgba(255,3,54,0.5)]">
                GYM FLOOR.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-0 max-w-md"
          >
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3">
              Surat’s premier strength training ground at Mansarovar Society, Yogi Chowk. Fitted with heavy Olympic free weights, dedicated isolation stations & spacious muscle zones.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#FF0336]" />
              <span>Dual Shift Floor Access: 5:30 AM & 5:00 PM</span>
            </div>
          </motion.div>
        </div>

        {/* Gymate Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#FF0336] text-white shadow-lg shadow-[#FF0336]/40 scale-105'
                    : 'bg-[#12141A] text-zinc-400 hover:text-white border border-white/10 hover:border-[#FF0336]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-[190px] sm:auto-rows-[300px]">
          {filteredFacilities.map((item, index) => {
            const globalIndex = facilities.findIndex(f => f.id === item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                onClick={() => setSelectedImageIndex(globalIndex)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0E1015] border border-white/10 hover:border-[#FF0336] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(255,3,54,0.25)] flex flex-col justify-end ${
                  activeFilter === 'ALL' && item.span ? item.span : 'col-span-1 row-span-1'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:brightness-[0.8] group-hover:scale-108 transition-all duration-700 ease-out absolute inset-0"
                  loading="lazy"
                />

                {/* Dark & Crimson Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/40 to-transparent group-hover:via-[#FF0336]/10 transition-colors" />

                {/* Top Corner Maximize Icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-[#FF0336] group-hover:border-[#FF0336] transition-all shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Bottom Caption Area */}
                <div className="relative p-3.5 sm:p-6 z-10">
                  <span className="text-[9px] sm:text-[11px] font-mono uppercase tracking-widest text-[#FF0336] font-extrabold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-sm sm:text-2xl text-white font-black uppercase tracking-tight leading-tight line-clamp-2 group-hover:text-white transition-colors">
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
