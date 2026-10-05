import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import type { PlanItem } from '../types';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const plans: PlanItem[] = [
    {
      id: 'flexible',
      name: 'FLEXIBLE',
      description: 'Ideal for short-term goals and training schedule flexibility.',
      priceNote: 'CONTACT FOR PRICING',
      popular: false,
      features: [
        'Full gym floor & equipment access',
        'Olympic free weights & cardio deck',
        'Locker & shower facilities',
        'Flexible monthly renewal terms'
      ],
      ctaText: 'GET MEMBERSHIP DETAILS'
    },
    {
      id: 'consistent',
      name: 'CONSISTENT',
      badge: 'MOST POPULAR',
      description: 'For committed members dedicated to continuous progression.',
      priceNote: 'CONTACT FOR PRICING',
      popular: true,
      features: [
        'Priority floor & equipment access',
        'Workout programming guidance',
        'Quarterly body composition review',
        'Functional turf & rig access',
        'Member workshops & guest passes'
      ],
      ctaText: 'GET MEMBERSHIP DETAILS'
    },
    {
      id: 'transform',
      name: 'TRANSFORM',
      badge: 'ELITE PROTOCOL',
      description: 'Intensive, guided physique and lifestyle transformation.',
      priceNote: 'CONTACT FOR PRICING',
      popular: false,
      features: [
        'Dedicated 1-on-1 Personal Trainer',
        'Custom nutrition & macro plan',
        'Bi-weekly bio-metric assessment',
        'Direct coach WhatsApp support',
        'Priority peak equipment booking'
      ],
      ctaText: 'GET MEMBERSHIP DETAILS'
    }
  ];

  return (
    <section id="membership" className="relative py-12 sm:py-20 lg:py-28 bg-[#08090C] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-[#FF2626] font-mono text-xs tracking-widest uppercase mb-3 font-bold">
            <span className="w-4 h-[2px] bg-[#FF2626]" />
            <span>MEMBERSHIP OPTIONS</span>
            <span className="w-4 h-[2px] bg-[#FF2626]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none mb-4 sm:mb-6">
            CHOOSE YOUR <span className="text-[#FF2626]">COMMITMENT.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Goal-oriented membership tiers tailored to your training cadence. Connect with our front desk at Yogi Chowk, Nana Varachha for current plans.
          </p>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(255,38,38,0.18)] ${
                  isPopular
                    ? 'bg-[#12141A] text-white border-2 border-[#FF2626] shadow-[0_20px_40px_rgba(255,38,38,0.15)] md:-translate-y-2'
                    : 'bg-[#0E1015] border border-white/[0.08] text-white hover:border-[#FF2626]/50'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                    <span
                      className={`inline-block px-3.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap ${
                        isPopular
                          ? 'bg-[#FF2626] text-white shadow-[0_4px_12px_rgba(255,38,38,0.4)]'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-normal mt-1.5 text-zinc-400 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Slot */}
                  <div className="my-4 sm:my-6 p-3.5 sm:p-4 rounded-xl border border-white/[0.06] bg-[#08090C] flex flex-col items-center text-center">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest font-semibold text-zinc-400">
                      MEMBERSHIP INVESTMENT
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-extrabold text-[#FF2626] mt-1">
                      {plan.priceNote}
                    </span>
                    <span className="text-[10px] sm:text-[11px] mt-0.5 font-normal text-zinc-500">
                      Custom schedules available upon desk inquiry
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 sm:space-y-3 my-4 sm:my-6">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest block mb-2 font-semibold text-zinc-400">
                      TIER SPECIFICATIONS:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5">
                        <div className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[#FF2626]/20 text-[#FF2626] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-normal text-zinc-300 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/[0.08] mt-4">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 group ${
                      isPopular
                        ? 'btn-primary-red shadow-lg'
                        : 'bg-zinc-900 hover:bg-[#FF2626] text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 text-center text-xs text-zinc-500">
          Looking for trainer allocation or corporate memberships?{' '}
          <a href="#contact" className="text-[#FF2626] underline font-semibold hover:text-white transition-colors">
            Speak directly with the Mahadev Fitness team.
          </a>
        </div>

      </div>
    </section>
  );
};


