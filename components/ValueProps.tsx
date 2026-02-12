
import React, { useState } from 'react';

interface ValuePropsProps {
  onCtaClick: () => void;
}

const VALUE_PROPS = [
  {
    id: 0,
    title: "Tailored omnichannel strategies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    desc: "Unlike other agencies’ cookie-cutter approaches, we craft personalized go-to-market plans that align with your unique business objectives.",
    tag: "STRATEGY",
    metric: "4.2x ROI"
  },
  {
    id: 1,
    title: "World-class talent",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    desc: "Rest assured, you’ll get dedicated specialists with narrow industry knowledge and relevant certifications who operate as an extension of your team.",
    tag: "EXPERTISE",
    metric: "98% Ret."
  },
  {
    id: 2,
    title: "First results within a month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "We set up and launch your campaign in the first 14 days. By day 30, you’ll start seeing the first appointments appearing in your calendar.",
    tag: "VELOCITY",
    metric: "30 Days"
  },
  {
    id: 3,
    title: "B2B-focused expertise",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    desc: "Our deep understanding of the B2B landscape empowers us to deliver targeted, result-oriented outbound solutions that actually move the needle.",
    tag: "IMPACT",
    metric: "50+ Indust."
  }
];

const ValueProps: React.FC<ValuePropsProps> = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-32 bg-[#fcfcfc] overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-slate-50 rounded-full blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Balanced Font Sizes */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-orange-500 block">
            The Selection Criteria
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-black text-[#0d2b23] leading-[0.9] tracking-tighter">
            What sets <span className="text-slate-300 italic">us apart</span>
          </h2>
        </div>

        {/* Luxury Segmented Control (Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 relative">
          <div className="bg-white border border-slate-100 p-2 rounded-[28px] shadow-sm flex flex-wrap gap-1 relative">
            {VALUE_PROPS.map((prop) => (
              <button
                key={prop.id}
                onClick={() => setActiveTab(prop.id)}
                className={`
                  relative px-8 py-4 rounded-[20px] text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 z-10
                  ${activeTab === prop.id ? 'text-white' : 'text-[#61756f] hover:text-[#0d2b23]'}
                `}
              >
                {prop.tag}
                {activeTab === prop.id && (
                  <div className="absolute inset-0 bg-[#0d2b23] rounded-[20px] -z-10 shadow-2xl shadow-[#0d2b23]/10 transition-all duration-500 animate-in fade-in zoom-in-95" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Showcase */}
        <div className="relative h-[700px] md:h-[600px] bg-white rounded-[48px] border border-slate-100 shadow-[0_40px_120px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-stretch">

            {/* Content Side */}
            <div className="lg:col-span-6 p-10 lg:p-24 flex flex-col justify-center relative z-20">
              {VALUE_PROPS.map((prop, i) => (
                <div
                  key={prop.id}
                  className={`
                    absolute inset-0 p-10 lg:p-24 flex flex-col justify-center transition-all duration-700
                    ${activeTab === i ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}
                  `}
                >
                  <div className="space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#0d2b23]/5 flex items-center justify-center">
                        <span className="text-2xl font-black text-[#0d2b23]">0{i + 1}</span>
                      </div>
                      <div className="h-px flex-1 bg-slate-100" />
                      <div className="px-6 py-1.5 bg-orange-50 border border-orange-100 rounded-full">
                        <span className="text-[12px] font-black text-orange-600 uppercase tracking-widest">{prop.metric}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-6xl font-black text-[#0d2b23] leading-[0.85] tracking-tighter">
                      {prop.title}
                    </h3>

                    <p className="text-base md:text-xl text-[#61756f] font-medium leading-relaxed max-w-[90%]">
                      {prop.desc}
                    </p>

                    <div className="pt-8">
                      <button
                        data-cal-link="sales-team/sales-discovery"
                        data-cal-namespace="sales-discovery"
                        data-cal-config='{"layout":"month_view","theme":"light"}'
                        className="group flex items-center gap-6 text-[#0d2b23] font-black text-[14px] uppercase tracking-[0.5em] hover:text-orange-500 transition-colors"
                      >
                        Learn our process
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0d2b23] group-hover:text-white transition-all shadow-sm">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Side */}
            <div className="lg:col-span-6 bg-[#fcfcfc] relative overflow-hidden h-[300px] lg:h-full border-t lg:border-t-0 lg:border-l border-slate-100">
              {VALUE_PROPS.map((prop, i) => (
                <div
                  key={prop.id}
                  className={`
                    absolute inset-0 transition-all duration-1000 ease-out
                    ${activeTab === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                  `}
                >
                  <img
                    src={prop.image}
                    alt=""
                    className="w-full h-full object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-25" />
                  <div className="grain-overlay opacity-[0.05]" />
                </div>
              ))}

              {/* Decorative Window Reflection */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/15 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
