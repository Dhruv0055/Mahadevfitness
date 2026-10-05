import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Flame, Dumbbell, Clock } from 'lucide-react';

interface ResultsShowcaseProps {
  onStartTransformation: () => void;
}

export const ResultsShowcase: React.FC<ResultsShowcaseProps> = ({ onStartTransformation }) => {
  const stories = [
    {
      name: 'Hardik V.',
      tag: 'Fat Loss Protocol',
      stat: '-13 KG',
      statLabel: 'Body Recomposition',
      duration: '14 WEEKS',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      description: 'Structured progressive split combined with calibrated deficit nutrition at Yogi Chowk floor.',
      icon: Flame
    },
    {
      name: 'Mehul S.',
      tag: 'Hypertrophy & Mass',
      stat: '+7.5 KG',
      statLabel: 'Lean Muscle Mass',
      duration: '20 WEEKS',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
      description: 'Progressive overload tension targeting upper body symmetry & heavy compound lifts.',
      icon: Dumbbell
    },
    {
      name: 'Ankit P.',
      tag: 'Strength & Powerlifting',
      stat: '205 KG',
      statLabel: 'Deadlift PR',
      duration: '16 WEEKS',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Biomechanical form calibration on Olympic barbells & power platforms.',
      icon: Trophy
    }
  ];

  return (
    <section id="results" className="relative py-20 sm:py-28 lg:py-36 bg-[#0B0D12] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Watermark */}
      <div className="absolute top-1/4 right-0 z-0 pointer-events-none select-none opacity-5 hidden lg:block">
        <span className="font-display text-[15rem] font-black uppercase text-white leading-none">
          SHAPE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gymate Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                REAL TRANSFORMATIONS
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              WE CAN CHANGE <br className="hidden sm:inline" />
              <span className="text-[#FF0336] inline-block drop-shadow-[0_0_30px_rgba(255,3,54,0.5)]">
                YOUR BODY.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-0 max-w-md"
          >
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
              Real transformations from members right here at Mahadev Fitness Gym, Yogi Chowk. Consistent attendance, certified coaching, and measurable metrics.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>100% Verified Progress Across Morning & Evening Shifts</span>
            </div>
          </motion.div>
        </div>

        {/* 3 High-Impact Transformation Cards (Gymate Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stories.map((story, index) => {
            const IconComp = story.icon;
            return (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-[#12141A] border border-white/10 hover:border-[#FF0336] transition-all duration-300 shadow-2xl flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Photo Top Frame */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover filter brightness-[0.55] group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF0336] text-white px-3 py-1 rounded">
                      {story.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#FF0336]" />
                      <span>{story.duration}</span>
                    </span>
                  </div>

                  {/* Floating Stat Indicator */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-none drop-shadow-md">
                        {story.stat}
                      </span>
                      <span className="text-xs font-mono uppercase text-[#FF0336] font-bold">
                        {story.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Lower Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FF0336]/15 border border-[#FF0336]/30 flex items-center justify-center text-[#FF0336]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                        {story.name}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {story.description}
                    </p>
                  </div>

                  <button
                    onClick={onStartTransformation}
                    className="w-full py-2.5 px-4 bg-white/[0.05] hover:bg-[#FF0336] text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-[#FF0336] flex items-center justify-center space-x-2 transition-all group/btn"
                  >
                    <span>START SIMILAR ROUTINE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner (Gymate Style) */}
        <div className="text-center">
          <div className="relative group inline-block">
            <div className="absolute top-1.5 left-1.5 w-full h-full border-2 border-white/30 group-hover:border-[#FF0336] transition-all pointer-events-none" />
            <button
              onClick={onStartTransformation}
              className="relative bg-[#FF0336] group-hover:bg-[#E00230] text-white px-9 sm:px-12 py-4 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center space-x-3 transition-transform active:translate-x-1 active:translate-y-1 shadow-xl shadow-[#FF0336]/30"
            >
              <span>START YOUR TRANSFORMATION TODAY</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
