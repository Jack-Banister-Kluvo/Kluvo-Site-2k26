
import React from 'react';

interface PricingProps {
  onCtaClick: () => void;
}

const INCLUDED = [
  {
    key: 'sdrs',
    label: '2 dedicated SDRs',
    detail: 'Assigned to your account, not shared across a client roster.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    key: 'management',
    label: 'Two layers of management',
    detail: 'An account manager on strategy and a day-to-day manager on execution, coaching and QA.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="14" y="8" width="3" height="10" />
      </svg>
    )
  },
  {
    key: 'lists',
    label: 'Intent-based list building',
    detail: 'Multi-line enrichment across Clay, Apollo, BuiltWith and others, suppressed against your CRM.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    key: 'phone',
    label: 'Phone-first outreach',
    detail: 'The phone does the heavy lifting, with email and LinkedIn built around it.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  },
  {
    key: 'reporting',
    label: 'Weekly segment-level reporting',
    detail: 'You see which parts of the market are responding, not just a total.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" />
      </svg>
    )
  },
  {
    key: 'tooling',
    label: 'Data and tooling included',
    detail: 'The enrichment and dialling stack sits inside the retainer, not on top of it.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    )
  }
];

const GUARANTEE_RANGES = [
  {
    range: '6-12',
    who: 'Software and IT ICPs',
    detail: 'Wider addressable market, shorter cycles, more people worth speaking to in a day.'
  },
  {
    range: '3-6',
    who: 'Consultancy-type ICPs',
    detail: 'Higher-value, longer-cycle, services-led sales with heavier stakeholder management.'
  }
];

const MODES = [
  {
    tag: 'Mode A',
    name: 'Phone-led',
    when: 'Wide addressable market',
    desc: 'Where speaking to a lot of people in a day is simply the efficient move. Around 80% phone, parallel dialling, wide reach collated into meetings.',
    fit: 'Suits more transactional software and IT sales with shorter cycles.'
  },
  {
    tag: 'Mode B',
    name: 'Targeted / account-based',
    when: 'Defined set of accounts',
    desc: 'A known target list, monitored for signals, with personalised email and LinkedIn alongside the phone and timed around specific triggers.',
    fit: 'Suits higher-value, longer-cycle, services-led sales with heavy stakeholder management.'
  }
];

const FAQS = [
  {
    q: "How soon does live activity start?",
    a: "Ten working days after your 90-minute onboarding call. You are not charged for those ten days - the first invoice buys live SDR activity, not the ramp-up."
  },
  {
    q: "How does your guaranteed number compare with other agencies?",
    a: "It is measured differently, so the figures are not directly comparable. Ours only counts meetings that actually took place and fit your ICP, and we qualify prospects out on the call as hard as we qualify them in. That means we book fewer meetings than an agency counting everything booked - but a larger share of them are worth attending."
  },
  {
    q: "What happens if you miss the number?",
    a: "We keep working at no additional cost until it is hit. We would rather absorb that than pad the figure with meetings your closers resent sitting in."
  },
  {
    q: "How much of my team's time does this take?",
    a: "Roughly three to four hours in month one, almost all of it front-loaded into onboarding. After go-live you get weekly segment-level reporting."
  },
  {
    q: "Who actually makes the calls?",
    a: "Two SDRs dedicated to your account. Every SDR is proven on Kluvo's own outbound first - our internal standard is 22 connected calls - before being placed on a client campaign, so you are not funding someone's first month in the job."
  },
  {
    q: "Will you work inside our CRM?",
    a: "Yes. Your list is suppressed against your CRM so we never approach a live opportunity or an existing customer, and we integrate with the usual CRMs including HubSpot, Salesforce and Pipedrive."
  }
];

const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
            Pricing
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0d2b23] mb-6 tracking-tighter">
          One offering. <span className="text-[#2e4841] italic">One price.</span>
        </h2>
        <p className="text-[#61756f] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          No tiers that differ only by how many meetings we're willing to promise. One team, one retainer, and a guaranteed number agreed honestly against your ICP.
        </p>
      </div>

      {/* The Offering */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
        {/* Price Panel */}
        <div className="lg:col-span-5 bg-[#0d2b23] text-white rounded-[40px] p-10 md:p-12 shadow-2xl shadow-[#0d2b23]/30 flex flex-col">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50 block mb-6">
            The retainer
          </span>
          <div className="mb-2 flex items-baseline gap-2">
            <span className="text-6xl md:text-7xl font-black tracking-tighter leading-none">£4,000</span>
            <span className="text-lg font-black opacity-60">/month</span>
          </div>
          <p className="text-[#9daaa6] font-bold text-sm mb-10">or £10,800 per quarter</p>

          <div className="p-6 bg-white/5 border border-white/10 rounded-[24px] mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9daaa6] mb-3">
              Plus 10 working days unpaid onboarding
            </p>
            <p className="text-sm text-white/80 font-medium leading-relaxed">
              The onboarding period is never charged. Your first invoice buys live SDR activity, not the ramp-up.
            </p>
          </div>

          <button
            data-cal-link="sales-team/sales-discovery"
            data-cal-namespace="sales-discovery"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            className="w-full bg-white text-[#0d2b23] py-4 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all hover:bg-[#9daaa6] active:scale-95 mt-auto"
          >
            Talk through your ICP
          </button>
        </div>

        {/* Included Panel */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[40px] p-10 md:p-12 shadow-sm">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#9daaa6] block mb-8">
            What every account gets
          </span>
          <div className="space-y-7">
            {INCLUDED.map((item) => (
              <div key={item.key} className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-[#fcfcfc] border border-slate-100 flex items-center justify-center text-[#61756f] flex-shrink-0 group-hover:bg-[#0d2b23] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <p className="font-black text-[#0d2b23] text-[15px] mb-1">{item.label}</p>
                  <p className="text-[#61756f] text-[13px] font-medium leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Guarantee */}
      <div className="mb-32">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500 block mb-4">
            The guarantee
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-[#0d2b23] mb-6 tracking-tighter">
            A set number of qualified-and-sat meetings every month
          </h3>
          <p className="text-[#61756f] text-lg font-medium leading-relaxed">
            Agreed with you during onboarding and set against your ICP. A meeting only counts if it took place and the account fits. If we fall short, we keep working at no extra cost until the number is hit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {GUARANTEE_RANGES.map((r) => (
            <div key={r.who} className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm text-center">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-black text-[#0d2b23] tracking-tighter">{r.range}</span>
                <span className="text-sm font-black text-[#9daaa6] uppercase tracking-widest">/ month</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2e4841] mb-4">{r.who}</p>
              <p className="text-[#61756f] text-sm font-medium leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#9daaa6] text-sm font-bold max-w-2xl mx-auto leading-relaxed">
          These are honest ranges, not a ceiling to sell against. We would rather agree a number we can hit than one that reads better on a proposal.
        </p>
      </div>

      {/* Two Modes */}
      <div className="mb-32">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500 block mb-4">
            How it runs
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-[#0d2b23] mb-6 tracking-tighter">
            One offering, two modes
          </h3>
          <p className="text-[#61756f] text-lg font-medium leading-relaxed">
            Which mode you run isn't something you pick off a menu. We diagnose it during onboarding, based on the size and shape of your addressable market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {MODES.map((mode) => (
            <div key={mode.tag} className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white bg-[#2e4841] px-3 py-1.5 rounded-full">
                  {mode.tag}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9daaa6]">{mode.when}</span>
              </div>
              <h4 className="text-2xl font-black text-[#0d2b23] mb-5 tracking-tight">{mode.name}</h4>
              <p className="text-[#61756f] font-medium leading-relaxed mb-6">{mode.desc}</p>
              <p className="text-[#0d2b23] text-sm font-bold leading-relaxed mt-auto pt-6 border-t border-slate-50">{mode.fit}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#fcfcfc] border border-slate-200 border-dashed rounded-[32px] p-8 text-center max-w-4xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2e4841] mb-3">Most clients land in the middle</p>
          <p className="text-[#61756f] font-medium leading-relaxed">
            In practice that often looks like around 200 target accounts, run as a blend of dialling lists and account monitoring.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto pb-32">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-black text-[#0d2b23] mb-3">Questions</h3>
          <p className="text-[#61756f] text-sm font-medium">The things people ask before they sign.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[24px] hover:shadow-md transition-shadow">
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
