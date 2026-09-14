import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ResultsShowcaseProps {
  onStartTransformation: () => void;
}

export const ResultsShowcase: React.FC<ResultsShowcaseProps> = ({ onStartTransformation }) => {
  const stories = [
    {
      name: 'Hardik V.',
      tag: 'Fat Loss & Conditioning',
      stat: '-13 KG',
      statLabel: 'Body Recomp',
      duration: '14 Weeks',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      description: 'Structured progressive split combined with calibrated deficit nutrition.'
    },
    {
      name: 'Mehul S.',
      tag: 'Hypertrophy & Mass',
      stat: '+7.5 KG',
      statLabel: 'Lean Muscle',
      duration: '20 Weeks',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
      description: 'Progressive overload tension targeting aesthetic balance and symmetry.'
    },
    {
      name: 'Ankit P.',
      tag: 'Strength & Powerlifting',
      stat: '205 KG',
      statLabel: 'Deadlift PR',
      duration: '16 Weeks',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      description: 'Biomechanical form calibration and Olympic barbell micro-loading.'
    }
  ];

  return (
    <section id="results" className="relative py-12 sm:py-20 lg:py-28 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Editorial Header */}
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
              <span>MEASURABLE PROGRESS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              RESULTS THAT <span className="text-[#FF2626]">SPEAK.</span>
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-zinc-400 max-w-sm font-normal">
            Real member transformations built on consistency, coaching, and progressive overload.
          </p>
        </motion.div>

        {/* 3 Simple, Clean Visual Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF2626]/50 min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              {/* Image with Dark Vignette */}
              <img
                src={story.image}
                alt={story.name}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/50 to-transparent" />

              {/* Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF2626] font-bold bg-[#FF2626]/20 border border-[#FF2626]/40 px-2.5 py-1 rounded">
                  {story.tag}
                </span>
                <span className="text-[10px] font-mono text-zinc-300 bg-black/60 px-2 py-0.5 rounded border border-white/10 font-medium">
                  {story.duration}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                    {story.stat}
                  </span>
                  <span className="text-xs font-mono uppercase text-[#FF2626] font-bold">
                    {story.statLabel}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {story.name}
                </h3>
                
                <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Editorial Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/[0.08]"
        >
          <div className="pl-3 sm:pl-4 border-l-2 border-[#FF2626]">
            <span className="font-display text-2xl sm:text-4xl font-black text-white leading-none block">
              500+
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 font-bold block mt-1">
              Surat Members
            </span>
          </div>

          <div className="pl-3 sm:pl-4 border-l-2 border-[#FF2626]/40 hover:border-[#FF2626] transition-colors">
            <span className="font-display text-2xl sm:text-4xl font-black text-white leading-none block">
              98%
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 font-bold block mt-1">
              Goal Completion
            </span>
          </div>

          <div className="pl-3 sm:pl-4 border-l-2 border-[#FF2626]">
            <span className="font-display text-2xl sm:text-4xl font-black text-white leading-none block">
              +40KG
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 font-bold block mt-1">
              Avg. Strength Gain
            </span>
          </div>

          <div className="flex items-center md:justify-end">
            <button
              onClick={onStartTransformation}
              className="btn-primary-red w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-1.5 shadow-lg active:scale-95"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};




