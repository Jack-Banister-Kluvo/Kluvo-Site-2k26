
import React from 'react';

const CHALLENGES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    title: 'Revenue stagnation',
    desc: "Your revenue boost is lagging 2–3 times behind projections, and you're struggling to find enough qualified opportunities."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Slow deal closure',
    desc: "Meeting sales quotas takes an unacceptably long time frame of 6–12 months. Lead quality is the bottleneck."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15-4 1 1-4" />
        <path d="m17 9 4-1-1 4" />
        <path d="M21 21s-2-3-10-3-10 3-10 3" />
        <path d="M18 3s-2 3-10 3-10-3-10-3" />
      </svg>
    ),
    title: 'Disconnected sales & marketing',
    desc: "Marketing pushes leads that sales can’t close, while sales feedback gets lost in the void."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Internal bottlenecks',
    desc: "Your team is overburdened with routine tasks, missing sales KPIs and failing to innovate."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Inconsistent lead quality',
    desc: "Despite trying new tools, you're struggling to convert cold outreach into qualified sales appointments."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Bad past experience',
    desc: "Previous agencies left you skeptical. You need a partner that actually delivers on ROI promises."
  }
];

const Challenges: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#0d2b23] mb-6">
          Challenges you can entrust to us
        </h2>
        <p className="text-[#61756f] text-lg max-w-2xl mx-auto font-medium">
          Most of our clients had pipeline generation issues that seemed unbeatable, but we proved otherwise with Kluvo methodology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CHALLENGES.map((item, idx) => (
          <div key={idx} className="p-10 rounded-[32px] bg-white border border-slate-100 hover:border-[#2e4841]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="w-16 h-16 bg-[#fcfcfc] rounded-2xl flex items-center justify-center text-[#61756f] shadow-sm mb-8 group-hover:bg-[#0d2b23] transition-all duration-500 group-hover:text-white">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-[#0d2b23] mb-4 group-hover:text-[#2e4841] transition-colors duration-500">{item.title}</h3>
            <p className="text-[#61756f] leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
