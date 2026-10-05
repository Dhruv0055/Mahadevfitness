import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Trophy, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface PersonalTrainingProps {
  onEnquirePT: () => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onEnquirePT }) => {
  const coaches = [
    {
      name: 'HEAD COACH',
      role: 'Heavy Strength & Power',
      experience: 'Olympic Specialist',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      icon: Dumbbell,
      focus: 'Olympic barbell lifting, form audits & progressive overload calibration.'
    },
    {
      name: 'TRANSFORMATION MENTOR',
      role: 'Hypertrophy & Physique',
      experience: 'Contest Prep Specialist',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
      icon: Trophy,
      focus: 'Muscle isolation splits, time-under-tension & aesthetic symmetry.'
    },
    {
      name: 'CONDITIONING COACH',
      role: 'Fat Loss & Diet Protocol',
      experience: 'Certified Nutritionist',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      icon: HeartHandshake,
      focus: 'Deficit diet plans, metabolic conditioning & cardiovascular fitness.'
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#0E1015] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none opacity-5 hidden lg:block">
        <span className="font-display text-[14rem] font-black uppercase text-white leading-none">
          COACH
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/[0.08]">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
                EXPERT COACHES
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              TEAM OF EXPERT <br className="hidden sm:inline" />
              <span className="text-[#FF0336] inline-block drop-shadow-[0_0_30px_rgba(255,3,54,0.5)]">
                FITNESS TRAINERS.
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
              Get 1-on-1 personal mentorship at Mansarovar Society, Yogi Chowk. We don't just count reps — we correct biomechanics and construct custom nutritional plans.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#FF0336]" />
              <span>Available in Morning (5:30-10:30 AM) & Evening (5-10 PM)</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Coaches Grid (Gymate Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {coaches.map((coach, index) => {
            const IconComp = coach.icon;
            return (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-[#141720] border border-white/10 hover:border-[#FF0336] transition-all duration-300 shadow-2xl flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Photo Top Frame */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.role}
                    className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-black/30" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF0336] text-white px-3 py-1 rounded">
                      {coach.experience}
                    </span>
                  </div>
                </div>

                {/* Bottom Details with Gymate Angled Cut Effect */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#FF0336]/20 border border-[#FF0336]/40 flex items-center justify-center text-[#FF0336] shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF0336] font-bold block">
                        {coach.name}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        {coach.role}
                      </h3>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {coach.focus}
                  </p>

                  <button
                    onClick={onEnquirePT}
                    className="w-full py-3 px-4 bg-white/[0.05] hover:bg-[#FF0336] text-white text-xs font-black uppercase tracking-wider rounded-lg border border-white/10 hover:border-[#FF0336] flex items-center justify-center space-x-2 transition-all group/btn"
                  >
                    <span>ENQUIRE COACHING</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <div className="relative group inline-block">
            <div className="absolute top-1.5 left-1.5 w-full h-full border-2 border-white/30 group-hover:border-[#FF0336] transition-all pointer-events-none" />
            <button
              onClick={onEnquirePT}
              className="relative bg-[#FF0336] group-hover:bg-[#E00230] text-white px-9 sm:px-12 py-4 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center space-x-3 transition-transform active:translate-x-1 active:translate-y-1 shadow-xl shadow-[#FF0336]/30"
            >
              <span>CLAIM FREE FITNESS CONSULTATION</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
