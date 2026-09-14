import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { ProgramItem } from '../types';

interface TrainingProgramsProps {
  onSelectProgram: (programTitle: string) => void;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onSelectProgram }) => {
  const [selectedId, setSelectedId] = useState<string>('strength');

  const programs: ProgramItem[] = [
    {
      id: 'strength',
      title: 'STRENGTH',
      subtitle: 'Raw Power',
      description: 'Heavy compound lifts & progressive power building for maximum force production.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
      tags: ['Olympic Barbell', 'Heavy Squat/Deadlift', 'Progressive Overload']
    },
    {
      id: 'muscle',
      title: 'HYPERTROPHY',
      subtitle: 'Muscle Mass',
      description: 'Targeted tension, time-under-tension protocols, and balanced aesthetic symmetry.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
      tags: ['Hypertrophy Split', 'Volume & Form', 'Plate-Loaded Machines']
    },
    {
      id: 'fat-loss',
      title: 'FAT LOSS',
      subtitle: 'Metabolic Conditioning',
      description: 'High-intensity conditioning circuits engineered to accelerate metabolic burn.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=85',
      tags: ['Metabolic Burn', 'HIIT Circuit', 'Cardiovascular Output']
    },
    {
      id: 'conditioning',
      title: 'STAMINA',
      subtitle: 'Functional Agility',
      description: 'VO2 max capacity, athletic stamina, and functional movement agility.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85',
      tags: ['Agility Drills', 'Functional Stamina', 'Mobility & Recovery']
    },
    {
      id: 'personal-training',
      title: '1-ON-1 COACHING',
      subtitle: 'Personal Mentorship',
      description: 'Dedicated coaching, biomechanical calibration, and tailored daily nutrition.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85',
      tags: ['1-on-1 Mentor', 'Form Audit', 'Custom Nutrition Split']
    }
  ];

  const activeIndex = programs.findIndex((p) => p.id === selectedId);
  const activeProgram = programs[activeIndex !== -1 ? activeIndex : 0];

  return (
    <section id="training" className="relative py-12 sm:py-20 lg:py-28 bg-[#0B0D12] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 pb-4 sm:pb-6 border-b border-white/[0.08]"
        >
          <div>
            <div className="flex items-center space-x-2 text-[#FF2626] font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1.5 sm:mb-2 font-bold">
              <span className="w-3 sm:w-4 h-[2px] bg-[#FF2626]" />
              <span>TRAINING DISCIPLINES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              TRAIN FOR <span className="text-[#FF2626]">MORE.</span>
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-zinc-400 max-w-sm font-normal">
            Click any discipline to explore training focus and split breakdown.
          </p>
        </motion.div>

        {/* Interactive Flagship Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Interactive Featured Spotlight Frame */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl min-h-[420px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-8 bg-[#08090C]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProgram.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="w-full h-full object-cover filter brightness-[0.38]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Top Tag & Index */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2626] font-bold bg-[#FF2626]/20 border border-[#FF2626]/40 px-2.5 py-1 rounded">
                ACTIVE DISCIPLINE
              </span>
              <span className="text-[10px] font-mono text-zinc-300 bg-black/70 px-2.5 py-1 rounded border border-white/10 font-bold">
                0{activeIndex + 1} / 05
              </span>
            </div>

            {/* Bottom Info Content */}
            <div className="relative z-10">
              <span className="text-xs font-mono text-[#FF2626] font-bold uppercase tracking-wider block mb-1">
                {activeProgram.subtitle}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                {activeProgram.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4">
                {activeProgram.description}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProgram.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-zinc-300 bg-white/[0.08] backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center space-x-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#FF2626]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Explicit CTA button to join this exact program */}
              <button
                onClick={() => onSelectProgram(activeProgram.title)}
                className="btn-primary-red w-full py-3.5 px-5 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow-lg group active:scale-95"
              >
                <span>JOIN {activeProgram.title} PROGRAM</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Other Discipline Selectors */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3 sm:gap-3.5">
            {programs.map((prog, index) => {
              const isSelected = prog.id === selectedId;
              return (
                <div
                  key={prog.id}
                  onClick={() => setSelectedId(prog.id)}
                  className={`group relative rounded-xl p-3.5 sm:p-4 border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/[0.08] border-[#FF2626] shadow-[0_0_20px_rgba(255,38,38,0.25)] pl-5 sm:pl-6'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/20 hover:pl-5'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 sm:space-x-4">
                    {/* Small Photo Thumb */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border transition-colors ${
                      isSelected ? 'border-[#FF2626]' : 'border-white/10 group-hover:border-white/30'
                    }`}>
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-0.5">
                        <span className={`text-[9px] font-mono uppercase font-bold ${
                          isSelected ? 'text-[#FF2626]' : 'text-zinc-400'
                        }`}>
                          {prog.subtitle}
                        </span>
                        <span className="text-[8px] font-mono text-zinc-500">• 0{index + 1}</span>
                      </div>
                      <h4 className="font-display text-base sm:text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                        {prog.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-zinc-400 font-normal line-clamp-1">
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0 ml-2 ${
                    isSelected
                      ? 'bg-[#FF2626] border-[#FF2626] text-white shadow-md'
                      : 'bg-white/[0.03] border-white/10 text-zinc-400 group-hover:text-white group-hover:bg-white/10'
                  }`}>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};



