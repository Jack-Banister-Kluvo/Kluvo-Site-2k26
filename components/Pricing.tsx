
import React from 'react';

interface PricingProps {
  onCtaClick: () => void;
}

const PRICING_PLANS = [
  {
    name: 'Core',
    desc: 'Ideal for startups testing new market-product fit.',
    appointments: '100+',
    cta: 'Get a Quote',
    features: { email: true, linkedin: true, calling: true, voicemails: false, messenger: true, abm: false, ads: false },
    highlight: false
  },
  {
    name: 'Scale',
    desc: 'Aggressive scale for mid-market SaaS companies.',
    appointments: '200+',
    cta: 'Talk to an Expert',
    features: { email: true, linkedin: true, calling: true, voicemails: true, messenger: true, abm: true, ads: true },
    highlight: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    desc: 'Bespoke strategies for complex buying committees.',
    appointments: 'Unlimited',
    cta: 'Contact Sales',
    features: { email: true, linkedin: true, calling: true, voicemails: true, messenger: true, abm: true, ads: true },
    highlight: false
  }
];

const FEATURE_ROWS = [
  {
    key: 'email',
    label: 'Cold email outreach',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    key: 'linkedin',
    label: 'LinkedIn social selling',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    key: 'calling',
    label: 'Intent-based cold calling',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  },
  {
    key: 'voicemails',
    label: 'Direct-to-voicemail Drops',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="4" /><circle cx="18" cy="12" r="4" /><line x1="6" y1="16" x2="18" y2="16" />
      </svg>
    )
  },
  {
    key: 'messenger',
    label: 'Multi-platform Messenger',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    key: 'abm',
    label: 'Targeted ABM Campaigns',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    key: 'ads',
    label: 'Lead-Gen Paid Ads',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
];

const FAQS = [
  {
    q: "How soon will I see booked meetings?",
    a: "Our typical launch window is 14 days. Most clients start seeing their first qualified appointments appearing in their calendar between day 21 and day 30."
  },
  {
    q: "Is there a long-term commitment?",
    a: "We operate on a month-to-month basis after the initial 3-month 'Pilot Phase'."
  },
  {
    q: "How do you guarantee lead quality?",
    a: "We only charge for 'Sales Qualified' meetings based on your pre-defined ICP criteria."
  },
  {
    q: "Will you integrate with our CRM?",
    a: "Yes. We offer native integrations with HubSpot, Salesforce, Pipedrive, and Apollo."
  }
];

const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-[#2e4841]/10 flex items-center justify-center text-[#2e4841]">
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-[#9daaa6]/30">
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </div>
);

const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
            Pricing & Performance
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0d2b23] mb-6 tracking-tighter">
          Built for <span className="text-[#2e4841] italic">Scale</span>
        </h2>
        <p className="text-[#61756f] text-lg max-w-xl mx-auto leading-relaxed font-medium">
          Performance-led models designed for predictable growth velocity.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-[32px] border transition-all duration-500 flex flex-col hover:shadow-xl ${plan.highlight
                ? 'bg-[#0d2b23] border-[#2e4841] text-white shadow-2xl shadow-[#0d2b23]/30 z-10'
                : 'bg-white border-slate-100 text-[#0d2b23] shadow-sm'
              }`}
          >
            {plan.badge && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2e4841] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-white z-20 whitespace-nowrap">
                {plan.badge}
              </div>
            )}

            <div className="mb-8 text-center">
              <span className={`text-[9px] font-black uppercase tracking-[0.2em] mb-3 block opacity-50`}>
                Annual Target
              </span>
              <div className="mb-6 h-16 md:h-20 flex flex-col justify-center">
                <span className={`font-black tracking-tighter leading-none block break-words ${plan.appointments.length > 5 ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'
                  }`}>
                  {plan.appointments}
                </span>
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] mt-2 block opacity-40`}>
                  Qualified Meetings
                </span>
              </div>
              <h3 className="text-lg font-black mb-2">{plan.name}</h3>
              <p className="text-[13px] font-medium leading-relaxed opacity-60 px-2 line-clamp-2">
                {plan.desc}
              </p>
            </div>

            <div className="space-y-3 mb-8 flex-1 py-6 border-t border-dashed border-slate-100/10">
              {['Dedicated Strategist', 'Manual Lead Research', 'CRM Integration', 'Weekly Strategy Syncs'].map(feat => (
                <div key={feat} className="flex items-center gap-2.5">
                  <div className={`w-1 h-1 rounded-full flex-shrink-0 ${plan.highlight ? 'bg-white' : 'bg-[#2e4841]'}`} />
                  <span className="text-[13px] font-bold opacity-80">{feat}</span>
                </div>
              ))}
            </div>

            <button
              data-cal-link="sales-team/sales-discovery"
              data-cal-namespace="sales-discovery"
              data-cal-config='{"layout":"month_view","theme":"light"}'
              className={`w-full py-3.5 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all ${plan.highlight
                  ? 'bg-white text-[#0d2b23] hover:bg-[#9daaa6]'
                  : 'bg-[#0d2b23] text-white hover:bg-[#2e4841]'
                }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mb-32">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-black text-[#0d2b23]">Feature Matrix</h3>
        </div>

        <div className="overflow-x-auto rounded-[24px] border border-slate-100 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#fcfcfc]">
                <th className="p-6 border-b border-slate-100 w-1/3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#9daaa6]">Core Channels</span>
                </th>
                <th className="p-6 border-b border-slate-100 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0d2b23]">Core</span>
                </th>
                <th className="p-6 border-b border-slate-100 text-center bg-[#2e4841]/5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#2e4841]">Scale</span>
                </th>
                <th className="p-6 border-b border-slate-100 text-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0d2b23]">Enterprise</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {FEATURE_ROWS.map((row) => (
                <tr key={row.key} className="hover:bg-slate-50 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="text-[#9daaa6] group-hover:text-[#2e4841] transition-colors scale-90">
                        {row.icon}
                      </div>
                      <span className="font-bold text-[#0d2b23] text-[13px]">{row.label}</span>
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <div className="inline-flex scale-90">
                      {(PRICING_PLANS[0].features as any)[row.key] ? <CheckIcon /> : <CrossIcon />}
                    </div>
                  </td>
                  <td className="p-5 text-center bg-[#2e4841]/5">
                    <div className="inline-flex scale-90">
                      {(PRICING_PLANS[1].features as any)[row.key] ? <CheckIcon /> : <CrossIcon />}
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <div className="inline-flex scale-90">
                      <CheckIcon />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto pb-32">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-black text-[#0d2b23] mb-3">Questions</h3>
          <p className="text-[#61756f] text-sm font-medium">Common details about the Kluvo partnership.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-[24px] hover:shadow-md transition-shadow">
              <h4 className="text-[15px] font-black text-[#0d2b23] mb-3">{faq.q}</h4>
              <p className="text-[13px] text-[#61756f] leading-relaxed font-medium opacity-80">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
