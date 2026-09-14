import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, UserCheck, Shield, Award } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const pillars = [
    {
      title: 'DEDICATED FACILITY',
      label: '2nd Floor, MBH-1 Sarthana',
      icon: Dumbbell,
      sub: 'Spacious training floor'
    },
    {
      title: 'BIOMECHANICAL GEAR',
      label: 'Selected & Plate Loaded',
      icon: Award,
      sub: 'Heavy-duty ergonomics'
    },
    {
      title: '1-ON-1 COACHING',
      label: 'Certified Personal Mentors',
      icon: UserCheck,
      sub: 'Tailored protocols'
    },
    {
      title: 'HIGH ENERGY COMMUNITY',
      label: 'Nana Varachha, Surat',
      icon: Shield,
      sub: 'Results-driven culture'
    }
  ];

  return (
    <section className="relative py-8 sm:py-14 bg-[#08090C] border-y border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex flex-col sm:flex-row items-start sm:space-x-3.5 p-3.5 sm:p-5 rounded-xl bg-[#0E1015] border border-white/[0.06] hover:border-[#FF2626]/40 transition-all duration-300"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#FF2626]/10 border border-[#FF2626]/20 text-[#FF2626] shrink-0 mb-2 sm:mb-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#FF2626] mt-0.5 font-mono">
                    {item.label}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 font-light mt-0.5 hidden xs:block">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



