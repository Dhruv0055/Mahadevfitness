import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ShieldCheck, Wind, Lock, Car, Dumbbell } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      alt: 'Heavy dumbbells and Olympic barbells at Mahadev Fitness Gym Surat'
    },
    {
      id: 'f2',
      title: 'Biomechanical Plate-Loaded Stations',
      category: 'MACHINES',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      alt: 'Selectorized and plate-loaded strength equipment at Mahadev Fitness'
    },
    {
      id: 'f3',
      title: 'Olympic Calibrated Power Racks & Platforms',
      category: 'STRENGTH',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      alt: 'Power racks for squats, deadlifts, and bench pressing'
    },
    {
      id: 'f4',
      title: 'Cardio Deck & Endurance Stations',
      category: 'CARDIO',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
      alt: 'High-performance treadmills and cardio stations'
    },
    {
      id: 'f5',
      title: 'Functional Training & Mobility Rig',
      category: 'STRENGTH',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      alt: 'Functional movement and mobility zone'
    },
    {
      id: 'f6',
      title: 'Spacious Mansarovar Society Workout Floor',
      category: 'INTERIORS',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80',
      alt: 'Spacious clean gym interior at Yogi Chowk Nana Varachha Surat'
    }
  ];

  const amenities = [
    { icon: Dumbbell, label: 'Olympic Free Weights', desc: 'Dumbbells up to 40+ kg & power racks' },
    { icon: Wind, label: 'Well Ventilated Floor', desc: 'Fresh airflow & air-conditioned comfort' },
    { icon: Lock, label: 'Locker & Changing Zone', desc: 'Clean, secure personal storage' },
    { icon: Car, label: 'Ample Ground Parking', desc: 'Easy two-wheeler & car parking space' },
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
    <section id="facilities" className="relative py-16 sm:py-24 bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-minimal opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean Gymate Light Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-zinc-200">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                OUR FACILITIES
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight"
            >
              Look At Our <br className="hidden sm:inline" />
              <span className="text-[#FF0336]">Gym Floor</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0 max-w-md text-zinc-600 text-xs sm:text-sm leading-relaxed"
          >
            <p className="mb-2">
              Surat’s premier strength training ground at Mansarovar Society, Yogi Chowk. Fitted with heavy Olympic free weights, dedicated isolation stations & spacious muscle zones.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#FF0336]" />
              <span>Dual Shift Floor Access: 5:30 AM & 5:00 PM</span>
            </div>
          </motion.div>
        </div>

        {/* Clean Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#FF0336] text-white shadow-md shadow-[#FF0336]/30'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200 border border-zinc-200'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Compact, Balanced 3-Column Photo Grid (Not oversized!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filteredFacilities.map((item) => {
            const globalIndex = facilities.findIndex(f => f.id === item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImageIndex(globalIndex)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Photo Frame (Compact ~220px height) */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-108 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FF0336] text-white font-black px-2.5 py-1 rounded shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Top Zoom Icon */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="font-display text-lg sm:text-xl text-white font-black uppercase tracking-tight leading-tight drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* New Feature: Compact Facility Amenities Strip (New value-add!) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#F4F5F7] rounded-2xl border border-zinc-200 shadow-sm">
          {amenities.map((amenity, idx) => {
            const IconC = amenity.icon;
            return (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#FF0336] shadow-sm shrink-0">
                  <IconC className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-black text-zinc-900 uppercase tracking-tight">
                    {amenity.label}
                  </h4>
                  <p className="text-[11px] text-zinc-500 leading-snug">
                    {amenity.desc}
                  </p>
                </div>
              </div>
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
