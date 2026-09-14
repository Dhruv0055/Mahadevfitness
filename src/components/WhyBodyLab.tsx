import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const WhyBodyLab: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'HAMMER STRENGTH & LIFE FITNESS',
      tag: 'Official Setup',
      description: 'Surat’s premier floor equipped with heavy plate-loaded and selectorized biomechanical machines.'
    },
    {
      number: '02',
      title: 'LUXURY MBH-1 SPACES & STEAM SPA',
      tag: 'Luxury Gym',
      description: 'Spacious 2nd-floor facility at Millennium Business Hub with steam bath and luxury locker suites.'
    },
    {
      number: '03',
      title: 'MEASURABLE 1-ON-1 PROGRESSION',
      tag: 'Coaching',
      description: 'Progressive overload tracking, form screening, and custom nutrition splits for real gains.'
    },
    {
      number: '04',
      title: 'PRIME NANA VARACHHA GROUND',
      tag: 'Opp. Zoo Road',
      description: 'High energy community opposite Zoo Road, Sarthana Jakat Naka. Open 7 days a week.'
    }
  ];

  return (
    <section id="why-us" className="relative py-8 sm:py-16 lg:py-24 bg-[#08090C] text-white overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
              <span>THE BODY LAB ADVANTAGE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              WHY THE <span className="text-[#FF2626]">BODY LAB</span>
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-zinc-400 max-w-sm font-normal">
            Engineered for disciplined individuals who demand high standards.
          </p>
        </motion.div>

        {/* Editorial 4-Pillar Layout (Clean, non-boxy, no duplicate images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group py-4 sm:py-6 pl-4 sm:pl-6 border-l-2 border-white/10 hover:border-[#FF2626] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-[#FF2626]">
                      {feature.number}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 font-semibold">
                      {feature.tag}
                    </span>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.03] group-hover:bg-[#FF2626] border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white transition-all shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



