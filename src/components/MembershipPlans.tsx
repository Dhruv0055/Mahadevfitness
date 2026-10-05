import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone } from 'lucide-react';
import type { PlanItem } from '../types';

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const plans: PlanItem[] = [
    {
      id: 'flexible',
      name: 'BEGINNER PASS',
      badge: 'MONTHLY STARTER',
      description: 'Ideal starter plan for building consistency and habit.',
      priceNote: 'AFFORDABLE MONTHLY',
      popular: false,
      features: [
        'Full Olympic floor & equipment access',
        'Dual shift entry: Morning & Evening',
        'Locker & changing room facilities',
        'Machine induction & basic workout split'
      ],
      ctaText: 'PURCHASE NOW'
    },
    {
      id: 'consistent',
      name: 'CONSISTENT BUILDER',
      badge: 'MOST POPULAR (3 MONTHS)',
      description: 'Best value for committed body recomposition.',
      priceNote: 'QUARTERLY VALUE PASS',
      popular: true,
      features: [
        'Priority floor & free weight rig access',
        'Personalized 3-month progressive split',
        'Monthly bio-metric assessment & audit',
        'Nutrition guidelines & meal consultation'
      ],
      ctaText: 'PURCHASE NOW'
    },
    {
      id: 'transform',
      name: 'ELITE TRANSFORMATION',
      badge: 'ANNUAL PRO',
      description: 'Full 1-year transformation with priority mentorship.',
      priceNote: 'ANNUAL ELITE ACCESS',
      popular: false,
      features: [
        '1-on-1 Personal Trainer allocation option',
        'Custom macro & daily nutrition protocol',
        'Bi-weekly biomechanical progress review',
        'Direct WhatsApp support from head trainer'
      ],
      ctaText: 'PURCHASE NOW'
    }
  ];

  return (
    <section id="membership" className="relative py-16 sm:py-20 bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Compact & Clean) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-2.5"
          >
            <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
              PRICING CHART
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-zinc-950 leading-[0.95] tracking-tight mb-3"
          >
            Exclusive <span className="text-[#FF0336]">Pricing Plan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-600 text-xs sm:text-sm leading-relaxed"
          >
            Affordable fitness passes at Mansarovar Society, Yogi Chowk. Call <strong className="text-zinc-900">08320102460</strong> for current rate card and admission offers.
          </motion.p>
        </div>

        {/* 3 Compact Pricing Cards (Clean Gymate Light Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-6xl mx-auto mb-8">
          {plans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  isPopular
                    ? 'bg-[#FFF8F8] border-2 border-[#FF0336] shadow-md md:-translate-y-1'
                    : 'bg-[#F9FAFB] border border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {/* Badge Tag */}
                {plan.badge && (
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded ${
                        isPopular
                          ? 'bg-[#FF0336] text-white shadow-sm'
                          : 'bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-2xl font-black uppercase text-zinc-900 tracking-tight mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-4 line-clamp-1">
                    {plan.description}
                  </p>

                  {/* Compact Pricing Block */}
                  <div className="p-3 rounded-xl bg-white border border-zinc-200 text-center mb-5 shadow-xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF0336] font-extrabold block">
                      OFFICIAL PASS
                    </span>
                    <span className="font-display text-2xl font-black text-zinc-950 mt-0.5 block">
                      {plan.priceNote}
                    </span>
                    <span className="text-[10px] text-zinc-500 block">
                      Shifts: 5:30-10:30 AM & 5-10 PM
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <div className="mt-0.5 w-3.5 h-3.5 rounded bg-red-100 text-[#FF0336] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs text-zinc-700 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Button */}
                <div className="pt-3 border-t border-zinc-200 mt-auto">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-2.5 px-4 text-xs font-black uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-sm ${
                      isPopular
                        ? 'bg-[#FF0336] hover:bg-[#E00230] text-white shadow-[#FF0336]/30'
                        : 'bg-zinc-900 hover:bg-[#FF0336] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small Desk Call Strip */}
        <div className="flex items-center justify-center space-x-2 text-xs text-zinc-600 bg-zinc-50 border border-zinc-200 py-2.5 px-4 rounded-xl max-w-md mx-auto">
          <Phone className="w-3.5 h-3.5 text-[#FF0336] shrink-0" />
          <span>Front Desk Hotline:</span>
          <a href="tel:08320102460" className="text-[#FF0336] font-bold font-mono hover:underline">
            +91 83201 02460
          </a>
        </div>

      </div>
    </section>
  );
};
