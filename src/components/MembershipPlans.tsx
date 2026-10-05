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
      description: 'Ideal for kickstarting your fitness journey with full floor guidance.',
      priceNote: 'AFFORDABLE MONTHLY',
      popular: false,
      features: [
        'Full Olympic floor & equipment access',
        'Dual shift entry: Morning & Evening',
        'Locker room & clean shower access',
        'Basic workout split & machine induction',
        'Free fitness assessment on joining'
      ],
      ctaText: 'PURCHASE NOW'
    },
    {
      id: 'consistent',
      name: 'CONSISTENT BUILDER',
      badge: 'MOST POPULAR (3 MONTHS)',
      description: 'Our most sought-after plan for committed muscle growth & fat loss.',
      priceNote: 'BEST VALUE QUARTERLY',
      popular: true,
      features: [
        'Priority floor & free weight rig access',
        'Personalized 3-month progressive split',
        'Monthly body composition & metric audit',
        'Nutrition guidelines & diet consultation',
        'Priority front-desk trainer support'
      ],
      ctaText: 'PURCHASE NOW'
    },
    {
      id: 'transform',
      name: 'ELITE TRANSFORMATION',
      badge: 'ANNUAL PRO MEMBERSHIP',
      description: 'Full 1-year transformation commitment with dedicated trainer mentorship.',
      priceNote: 'ANNUAL ELITE ACCESS',
      popular: false,
      features: [
        '1-on-1 Personal Trainer allocation option',
        'Custom macro & daily nutrition protocol',
        'Bi-weekly biomechanical progress audit',
        'Direct WhatsApp support from head trainer',
        'Complimentary gym merchandise / shaker'
      ],
      ctaText: 'PURCHASE NOW'
    }
  ];

  return (
    <section id="membership" className="relative py-20 sm:py-28 lg:py-36 bg-[#08090C] border-t border-white/[0.08] overflow-hidden text-white">
      
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF0336]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Gymate Style) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <div className="brush-badge bg-[#FF0336] text-white text-xs sm:text-sm font-black tracking-widest uppercase">
              PRICING CHART
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.92] tracking-tight mb-4"
          >
            EXCLUSIVE <span className="text-[#FF0336]">PRICING PLAN</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xs sm:text-base leading-relaxed"
          >
            Transparent and goal-driven gym passes for Yogi Chowk residents. Contact our front desk directly at <strong className="text-white">08320102460</strong> for current rate card and admission offers.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid (Gymate Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2.5 ${
                  isPopular
                    ? 'bg-[#12141A] border-2 border-[#FF0336] shadow-[0_20px_50px_rgba(255,3,54,0.3)] md:-translate-y-3'
                    : 'bg-[#0E1015] border border-white/10 hover:border-[#FF0336]/60 shadow-xl'
                }`}
              >
                {/* Header Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider rounded ${
                        isPopular
                          ? 'bg-[#FF0336] text-white shadow-md'
                          : 'bg-white/10 text-zinc-300 border border-white/10'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing Slot */}
                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-center mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF0336] font-black block">
                      OFFICIAL PASS
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-black text-white mt-1 block">
                      {plan.priceNote}
                    </span>
                    <span className="text-[10px] text-zinc-400 mt-0.5 block">
                      Daily Shifts: 5:30-10:30 AM & 5-10 PM
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                      INCLUDED WITH PLAN:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5">
                        <div className="mt-0.5 w-4 h-4 rounded bg-[#FF0336]/20 border border-[#FF0336]/40 text-[#FF0336] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs text-zinc-300 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA with Gymate Offset Frame */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="relative group inline-block w-full">
                    <div
                      className={`absolute top-1 left-1 w-full h-full border-2 transition-all pointer-events-none ${
                        isPopular ? 'border-white/50 group-hover:border-[#FF0336]' : 'border-white/20 group-hover:border-white'
                      }`}
                    />
                    <button
                      onClick={() => onSelectPlan(plan.name)}
                      className={`relative w-full py-3.5 px-4 text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-2 transition-transform active:translate-x-0.5 active:translate-y-0.5 shadow-lg ${
                        isPopular
                          ? 'bg-[#FF0336] hover:bg-[#E00230] text-white'
                          : 'bg-zinc-900 hover:bg-[#FF0336] text-white border border-white/10'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desk Call Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 bg-zinc-900/60 border border-white/10 rounded-2xl max-w-2xl mx-auto text-xs text-zinc-300 text-center sm:text-left">
          <Phone className="w-4 h-4 text-[#FF0336] shrink-0" />
          <span>Have special questions about shifts or trainer packages? Call front desk:</span>
          <a
            href="tel:08320102460"
            className="text-[#FF0336] font-bold hover:underline font-mono text-sm whitespace-nowrap"
          >
            +91 83201 02460
          </a>
        </div>

      </div>
    </section>
  );
};
