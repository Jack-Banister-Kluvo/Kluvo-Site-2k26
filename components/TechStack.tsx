
import React from 'react';

const TechStack: React.FC = () => {
  const tools = [
    { 
      name: 'Sales Navigator', 
      desc: 'Advanced search and sales intelligence on LinkedIn', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    { 
      name: 'ZoomInfo', 
      desc: 'Premium B2B contact data and intent signals', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l3.3 5H5l3.3-5C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z"/>
        </svg>
      )
    },
    { 
      name: 'HubSpot', 
      desc: 'CRM and marketing automation partner', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/>
        </svg>
      )
    },
    { 
      name: 'Clay', 
      desc: 'Sales intelligence and engagement', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.5-1 1-4c2 0 3.03 0 3.03 0"/>
          <path d="M12 15v5s1-.5 4-1c0-2 0-3.03 0-3.03"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-[#fcfcfc] border border-slate-100 rounded-[48px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2e4841]/5 blur-[80px] -ml-32 -mt-32" />
        
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0d2b23] mb-6">Top-tier tools at no extra cost</h2>
          <p className="text-[#61756f] text-lg max-w-2xl mx-auto font-medium">
            Save up to $10,000 annually on premium lead generation and marketing tools included in our retainer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="group bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 bg-[#fcfcfc] rounded-2xl flex items-center justify-center text-[#61756f] mb-8 group-hover:bg-[#0d2b23] group-hover:text-white transition-all duration-500">
                {tool.icon}
              </div>
              <h4 className="text-xl font-black text-[#0d2b23] mb-3 group-hover:text-[#2e4841] transition-colors">{tool.name}</h4>
              <p className="text-[#61756f] font-medium text-sm leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
