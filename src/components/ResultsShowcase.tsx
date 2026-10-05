import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Flame, Dumbbell, Clock, CheckCircle2, Calculator } from 'lucide-react';

interface ResultsShowcaseProps {
  onStartTransformation: () => void;
}

export const ResultsShowcase: React.FC<ResultsShowcaseProps> = ({ onStartTransformation }) => {
  const [selectedGoalTab, setSelectedGoalTab] = useState<'fat-loss' | 'muscle' | 'strength'>('muscle');

  const stories = [
    {
      id: 'fat-loss',
      name: 'Hardik V.',
      tag: 'FAT LOSS & TONING',
      stat: '-13 KG',
      statLabel: 'Body Recomposition',
      duration: '14 WEEKS',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      description: 'Structured progressive split combined with calibrated deficit nutrition at Yogi Chowk floor.',
      icon: Flame,
      metrics: ['Waist: -5.5 inches', 'Body Fat: 26% → 14%', 'Shift: Morning (6:00 AM)']
    },
    {
      id: 'muscle',
      name: 'Mehul S.',
      tag: 'LEAN MUSCLE MASS',
      stat: '+7.5 KG',
      statLabel: 'Lean Hypertrophy',
      duration: '20 WEEKS',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
      description: 'Progressive overload tension targeting upper body symmetry & heavy compound lifts.',
      icon: Dumbbell,
      metrics: ['Chest: +4.2 inches', 'Arm size: +2.8 cm', 'Shift: Evening (6:30 PM)']
    },
    {
      id: 'strength',
      name: 'Ankit P.',
      tag: 'OLYMPIC POWERLIFTING',
      stat: '205 KG',
      statLabel: 'Deadlift PR',
      duration: '16 WEEKS',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Biomechanical form calibration on Olympic barbells & power platforms.',
      icon: Trophy,
      metrics: ['Squat PR: 165 KG', 'Bench PR: 125 KG', 'Shift: Morning (7:00 AM)']
    }
  ];

  return (
    <section id="results" className="relative py-16 sm:py-24 bg-[#F8F9FB] text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      {/* Background Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-grid-minimal opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Gymate Light Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-zinc-200">
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
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight"
            >
              We Can Change <br className="hidden sm:inline" />
              <span className="text-[#FF0336]">Your Body</span>
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
              Measurable physical results built through consistency, coach accountability, and progressive nutrition guidance at Yogi Chowk.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-900 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Genuine Member Records from Mahadev Fitness</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Compact Transformation Cards (White cards with Red accents) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stories.map((story) => {
            const IconComp = story.icon;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Photo Top Frame */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-108 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-[#FF0336] text-white px-2.5 py-1 rounded shadow-sm">
                      {story.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/20 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#FF0336]" />
                      <span>{story.duration}</span>
                    </span>
                  </div>

                  {/* Big Stat in Photo Overlay */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-none drop-shadow-md">
                        {story.stat}
                      </span>
                      <span className="text-xs font-mono uppercase text-[#FF0336] font-extrabold bg-white/90 px-2 py-0.5 rounded">
                        {story.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Lower Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#FF0336]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-xl font-black text-zinc-900 uppercase tracking-tight">
                        {story.name}
                      </h3>
                    </div>

                    <p className="text-zinc-600 text-xs leading-relaxed mb-4">
                      {story.description}
                    </p>

                    {/* Breakdown Pill Metrics */}
                    <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700">
                      {story.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Red CTA Button */}
                  <button
                    onClick={onStartTransformation}
                    className="w-full py-2.5 px-4 bg-[#FF0336] hover:bg-[#E00230] text-white text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95 group/btn"
                  >
                    <span>START SIMILAR ROUTINE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Transformation Estimate Calculator Box (New & Better!) */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-zinc-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF0336] flex items-center justify-center shrink-0 border border-red-100">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-xl font-black text-zinc-950 uppercase tracking-tight">
                  Calculate Your Transformation Timeline
                </h4>
                <p className="text-xs text-zinc-500">
                  Select your primary fitness objective to see estimated milestones
                </p>
              </div>
            </div>

            {/* Goal Toggle */}
            <div className="flex items-center space-x-2 bg-zinc-100 p-1 rounded-xl">
              <button
                onClick={() => setSelectedGoalTab('fat-loss')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  selectedGoalTab === 'fat-loss'
                    ? 'bg-[#FF0336] text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Fat Loss
              </button>
              <button
                onClick={() => setSelectedGoalTab('muscle')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  selectedGoalTab === 'muscle'
                    ? 'bg-[#FF0336] text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Muscle Mass
              </button>
              <button
                onClick={() => setSelectedGoalTab('strength')}
                className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  selectedGoalTab === 'strength'
                    ? 'bg-[#FF0336] text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Strength
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                Estimated Timeline
              </span>
              <span className="font-display text-2xl font-black text-[#FF0336]">
                {selectedGoalTab === 'fat-loss' ? '12 - 16 Weeks' : selectedGoalTab === 'muscle' ? '16 - 24 Weeks' : '8 - 12 Weeks'}
              </span>
            </div>
            <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                Optimal Attendance
              </span>
              <span className="font-display text-2xl font-black text-zinc-900">
                4 to 5 Days / Week
              </span>
            </div>
            <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">
                Recommended Shift
              </span>
              <span className="font-display text-2xl font-black text-zinc-900">
                5:30 AM or 6:00 PM
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
