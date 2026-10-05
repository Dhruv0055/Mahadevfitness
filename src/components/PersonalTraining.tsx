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
    <section className="relative py-16 sm:py-24 bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Light Theme) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-zinc-200">
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
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight"
            >
              Team Of Expert <br className="hidden sm:inline" />
              <span className="text-[#FF0336]">Fitness Trainers</span>
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
              Get 1-on-1 personal mentorship at Mansarovar Society, Yogi Chowk. We don't just count reps — we correct biomechanics and construct custom nutritional plans.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-900 font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#FF0336]" />
              <span>Available in Morning (5:30-10:30 AM) & Evening (5-10 PM)</span>
            </div>
          </motion.div>
        </div>

        {/* 3 Compact Coaches Grid (Clean Light Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {coaches.map((coach) => {
            const IconComp = coach.icon;
            return (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Photo Top Frame */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={coach.image}
                    alt={coach.role}
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-108 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-[#FF0336] text-white px-2.5 py-1 rounded shadow-sm">
                      {coach.experience}
                    </span>
                  </div>
                </div>

                {/* Details Bottom Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#FF0336] shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF0336] font-bold block">
                          {coach.name}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-black text-zinc-950 uppercase tracking-tight">
                          {coach.role}
                        </h3>
                      </div>
                    </div>

                    <p className="text-zinc-600 text-xs leading-relaxed mb-4">
                      {coach.focus}
                    </p>
                  </div>

                  <button
                    onClick={onEnquirePT}
                    className="w-full py-2.5 px-4 bg-zinc-100 hover:bg-[#FF0336] text-zinc-900 hover:text-white text-xs font-black uppercase tracking-wider rounded-lg border border-zinc-200 hover:border-[#FF0336] flex items-center justify-center space-x-2 transition-all active:scale-95 group/btn"
                  >
                    <span>ENQUIRE COACHING</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
