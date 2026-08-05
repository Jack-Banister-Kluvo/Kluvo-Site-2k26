
import React from 'react';

interface DeRiskedSectionProps {
  onCtaClick: () => void;
}

const DeRiskedSection: React.FC<DeRiskedSectionProps> = ({ onCtaClick }) => {
  const mechanics = [
    'Ten working days of onboarding you are never charged for',
    'We keep working at no cost until the guaranteed number is hit',
    'Every SDR proven on Kluvo\'s own outbound before they touch your campaign',
    'Two SDRs dedicated to your account, not shared across a roster',
    'Your list suppressed against your CRM, so no live opportunity gets touched',
    'Around three to four hours of your time in month one, front-loaded into onboarding'
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative p-10 md:p-16 bg-[#0d2b23] rounded-[48px] overflow-hidden text-white shadow-2xl">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2e4841]/30 rounded-full blur-[150px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2e4841]/20 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="relative flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9daaa6] block mb-6">
              De-risked delivery
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
              How we de-risk the engagement
            </h2>
            <p className="text-xl text-[#9daaa6] font-medium leading-relaxed mb-10">
              Most of what an agency asks you to take on faith, we have moved onto our side of the table.
            </p>
            <button
              data-cal-link="sales-team/sales-discovery"
              data-cal-namespace="sales-discovery"
              data-cal-config='{"layout":"month_view","theme":"light"}'
              className="bg-white text-[#0d2b23] px-10 py-5 rounded-2xl text-xl font-black hover:bg-[#9daaa6] transition-colors"
            >
              Book a call
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanics.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-[#9daaa6] flex-shrink-0 mt-2" />
                <span className="text-base font-medium text-white/90 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeRiskedSection;
