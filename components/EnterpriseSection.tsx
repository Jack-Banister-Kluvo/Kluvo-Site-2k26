
import React from 'react';

interface EnterpriseSectionProps {
  onCtaClick: () => void;
}

const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({ onCtaClick }) => {
  const perks = [
    'Fully customized omnichannel strategy',
    'Custom integrations with your CRM and internal tools',
    'Dedicated Center of Excellence access',
    'Team size tailored to your internal workflows',
    'SOC 2, ISO, and data privacy compliance',
    'Custom SLAs and enterprise contract terms'
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative p-10 md:p-16 bg-[#0d2b23] rounded-[48px] overflow-hidden text-white shadow-2xl">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2e4841]/30 rounded-full blur-[150px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2e4841]/20 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="relative flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-6xl font-black mb-8 leading-tight">Enterprise</h2>
            <p className="text-xl text-[#9daaa6] font-medium leading-relaxed mb-10">
              Tailored for teams that need bespoke growth strategies and want to shape every detail of their outreach.
            </p>
            <button 
              onClick={onCtaClick}
              className="bg-white text-[#0d2b23] px-10 py-5 rounded-2xl text-xl font-black hover:bg-[#9daaa6] transition-colors"
            >
              Talk to Enterprise Sales
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-[#9daaa6]" />
                <span className="text-lg font-medium text-white/90 leading-tight">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
