import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, UserCheck } from 'lucide-react';

interface PersonalTrainingProps {
  onEnquirePT: () => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onEnquirePT }) => {
  const benefits = [
    'Biomechanical form calibration & injury prevention',
    'Custom split programming built for your goals',
    'Nutritional targets & macro tracking guidance',
    'Weekly progressive load & bio-metric monitoring'
  ];

  return (
    <section className="relative py-12 sm:py-20 lg:py-28 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Dark Editorial Photo Frame */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0E1015] shadow-2xl group hover:border-[#FF2626]/50 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Personal coaching at The Body Lab Surat"
                className="w-full h-[320px] sm:h-[480px] object-cover object-top filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-transparent to-transparent" />

              {/* Floating Dark Glass Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-[#08090C]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#FF2626] flex items-center justify-center text-white shadow-md shrink-0">
                    <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide block">
                      1-on-1 Mentorship
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-400 font-normal">
                      Biomechanically tailored
                    </span>
                  </div>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#FF2626] bg-[#FF2626]/15 px-2 sm:px-2.5 py-1 rounded border border-[#FF2626]/30 font-bold shrink-0">
                  SURAT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <div className="flex items-center space-x-2 text-[#FF2626] font-mono text-xs tracking-widest uppercase mb-2 font-bold">
              <span className="w-4 h-[2px] bg-[#FF2626]" />
              <span>PERSONAL TRAINING</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.02] mb-3 sm:mb-4">
              DON'T JUST WORK OUT.<br />
              <span className="text-[#FF2626]">TRAIN WITH PURPOSE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
              Focused guidance, structured programming, and direct accountability to break through lifting plateaus.
            </p>

            {/* Checkpoints */}
            <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
              {benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start space-x-2 sm:space-x-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#FF2626]/20 text-[#FF2626] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300 font-normal leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onEnquirePT}
                className="btn-primary-red w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider rounded-lg inline-flex items-center justify-center space-x-2 group shadow-lg"
              >
                <span>ENQUIRE ABOUT PERSONAL TRAINING</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


