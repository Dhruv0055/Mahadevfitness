import React from 'react';
import { Tag, Star, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod?: string;
  description: string;
  isPopular?: boolean;
  popularBadgeText?: string;
  features: PricingFeature[];
  buttonText: string;
}

interface EnterprisePlan {
  title: string;
  description: string;
  buttonText: string;
  footnote: string;
}

interface MembershipPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const badgeText = "MEMBERSHIP OPTIONS";
  const title = "Choose Your Training Commitment";
  const subtitle = "Goal-oriented passes designed for consistent progression. Train with complete Olympic equipment across convenient morning and evening shifts.";

  const enterprisePlan: EnterprisePlan = {
    title: "1-ON-1 TRANSFORMATION COACHING",
    description: "Looking for dedicated private mentorship, personal form audits, and tailored daily macronutrient protocols at Yogi Chowk?",
    buttonText: "ENQUIRE 1-ON-1 COACHING",
    footnote: "Custom Shift Scheduling"
  };

  const plans: PricingPlan[] = [
    {
      id: 'consistent-builder',
      name: 'CONSISTENT BUILDER (3 MONTHS)',
      price: 'QUARTERLY PASS',
      billingPeriod: 'Most chosen by members',
      description: 'Our most popular commitment for visible body recomposition, muscle gain, and habitual discipline.',
      isPopular: true,
      popularBadgeText: 'MOST POPULAR (BEST VALUE)',
      buttonText: 'GET MEMBERSHIP PASS',
      features: [
        { text: 'Full Olympic floor, dumbbells & plate-loaded machines' },
        { text: 'Dual shift entry: 5:30–10:30 AM & 5:00–10:00 PM' },
        { text: 'Personalized 3-month progressive split roadmap' },
        { text: 'Monthly body composition & biometric audit' },
        { text: 'Macro & nutrition guidelines for muscle / fat loss' },
        { text: 'Priority trainer guidance on lifting floor' }
      ]
    },
    {
      id: 'starter-flex',
      name: 'MONTHLY STARTER PASS',
      price: 'MONTHLY PASS',
      billingPeriod: 'Flexible monthly renewal',
      description: 'Ideal starter plan for newcomers looking to establish routine and explore the workout floor.',
      isPopular: false,
      buttonText: 'START TODAY',
      features: [
        { text: 'Full access to free weights & cardio machines' },
        { text: 'Flexible morning or evening training shifts' },
        { text: 'Locker room & clean shower facilities' },
        { text: 'Machine induction & form calibration by floor trainer' },
        { text: 'Free initial fitness & mobility assessment' },
        { text: 'Zero long-term lock-in contract' }
      ]
    }
  ];

  const footerText = "Looking for student concessions, annual elite passes, or corporate group admissions? Contact front desk directly at Mansarovar Society, Yogi Chowk: +91 83201 02460.";

  return (
    <section id="membership" className="bg-[#F8F9FA] text-zinc-900 w-full py-16 sm:py-20 md:py-24 border-t border-zinc-200">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Header - 2 Columns (pricing-3 layout) */}
        <div className="mb-12 sm:mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
          
          {/* Left Column */}
          <div className="flex max-w-2xl flex-col items-start gap-4">
            {badgeText && (
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-mono font-bold text-zinc-800 shadow-xs">
                <Tag className="h-3.5 w-3.5 text-[#FF0336]" />
                <span className="uppercase tracking-wider">{badgeText}</span>
              </div>
            )}
            
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-zinc-950 sm:text-5xl md:text-6xl leading-[0.95]">
              {title}
            </h2>
            
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right Column (Personal Mentorship Callout from pricing-3) */}
          <div className="flex w-full flex-col gap-3.5 rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 shadow-sm lg:w-1/3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-zinc-700">
              <span>{enterprisePlan.title}</span>
              <Star className="h-3.5 w-3.5 fill-[#FF0336] text-[#FF0336]" />
            </div>
            
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              {enterprisePlan.description}
            </p>
            
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectPlan('Personal Training Mentorship')}
                className="group inline-flex items-center justify-center rounded-full bg-zinc-900 hover:bg-[#FF0336] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xs"
              >
                <span>{enterprisePlan.buttonText}</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF0336]" />
                {enterprisePlan.footnote}
              </span>
            </div>
          </div>

        </div>

        {/* Pricing Cards Grid (pricing-3 card split architecture) */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col gap-6 rounded-3xl border bg-white p-6 transition-all duration-300 sm:flex-row sm:p-8 ${
                plan.isPopular
                  ? "border-[#FF0336] ring-2 ring-[#FF0336]/20 shadow-lg bg-[#FFFCFC]"
                  : "border-zinc-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && plan.popularBadgeText && (
                <div className="absolute -top-3 left-6 sm:left-8 rounded-md bg-[#FF0336] px-3.5 py-1 text-[10px] font-mono font-black uppercase tracking-wider text-white shadow-sm">
                  {plan.popularBadgeText}
                </div>
              )}

              {/* Card Left Side (Name, Price, Button) */}
              <div className="flex flex-1 flex-col items-start border-b border-zinc-200 pb-6 sm:border-r sm:border-b-0 sm:pr-6 sm:pb-0 justify-between">
                <div>
                  <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-800 mb-3">
                    {plan.name}
                  </div>
                  
                  <div className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mb-1">
                    {plan.price}
                  </div>
                  
                  {plan.billingPeriod && (
                    <span className="text-xs font-mono text-zinc-500 block mb-3">
                      {plan.billingPeriod}
                    </span>
                  )}
                  
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>
                </div>

                <div className="w-full mt-auto">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`group flex h-11 w-full items-center justify-center rounded-xl px-5 text-xs font-black uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
                      plan.isPopular
                        ? "bg-[#FF0336] hover:bg-[#E00230] text-white shadow-[#FF0336]/30"
                        : "bg-zinc-900 hover:bg-[#FF0336] text-white"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Card Right Side (Features List) */}
              <div className="flex flex-1 flex-col justify-center sm:pl-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3 block">
                  PLAN SPECIFICATIONS:
                </span>
                <ul className="space-y-3 sm:space-y-3.5">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF0336]" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        {footerText && (
          <div className="mx-auto mt-10 sm:mt-12 max-w-3xl text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-zinc-200 px-4 py-2.5 text-xs text-zinc-600 shadow-xs">
              <Phone className="h-3.5 w-3.5 text-[#FF0336] shrink-0" />
              <span>{footerText}</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
