
import React, { useState } from 'react';

const AGENCY_STEPS = [
  {
    id: 0,
    title: 'Omnichannel engagement',
    desc: 'We develop a comprehensive plan that combines email, LinkedIn, and cold calling to reach your prospects at the right time.',
    stat: 'Up to 18,000* prospects',
    subStat: 'WITHIN YOUR CLIENT PROFILE',
    label: 'LEADS',
    width: 480,
    height: 130,
    path: 'M15 0 H465 L440 130 H40 Z'
  },
  {
    id: 1,
    title: 'Activation',
    desc: 'Prospects engage by replying to emails, clicking on ads, answering in WhatsApp, or attending a webinar.',
    stat: 'Up to 9,000*',
    subStat: 'MARKETING-QUALIFIED LEADS',
    label: 'MQLs',
    width: 410,
    height: 130,
    path: 'M15 0 H395 L370 130 H40 Z'
  },
  {
    id: 2,
    title: 'Conversion',
    desc: 'With persistent follow-ups, we ensure your prospects attend demo calls and meetings with your sales executives.',
    stat: '200* qualified meetings',
    subStat: 'WITH DECISION-MAKERS',
    label: 'SQLs',
    width: 340,
    height: 130,
    path: 'M15 0 H325 L300 130 H40 Z'
  }
];

const CLIENT_STEPS = [
  {
    id: 3,
    title: 'Deal closure',
    desc: 'All that’s left for you to do is attend booked appointments, run sales negotiations, and sign new deals.',
    stat: '10-30* deals',
    subStat: 'REVENUE OPPORTUNITIES',
    label: 'CONVERSIONS',
    width: 270,
    height: 130,
    path: 'M15 0 H255 L230 130 H40 Z'
  }
];

const ALL_STEPS = [...AGENCY_STEPS, ...CLIENT_STEPS];

const OmnichannelFunnel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const FunnelSegment: React.FC<{ step: any; index: number }> = ({ step, index }) => {
    const isActive = activeIndex === step.id;
    const isClientStep = step.id === 3;
    const isLast = index === ALL_STEPS.length - 1;
    
    return (
      <div className="flex flex-col items-center w-full">
        {/* Step Label - Improved visibility */}
        <div className={`mb-4 transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`}>
          <div className={`${isClientStep ? 'bg-orange-500 border-orange-400 text-white' : 'bg-[#2e4841] border-white/20 text-white'} px-5 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md`}>
            {step.label}
          </div>
        </div>

        {/* Funnel Segment SVG - Increased height to prevent text squash */}
        <div 
          className="relative transition-all duration-500 cursor-pointer group flex justify-center"
          onClick={() => setActiveIndex(step.id)}
        >
          <svg 
            viewBox={`0 0 ${step.width} ${step.height}`} 
            width={step.width} 
            height={step.height} 
            className={`transition-all duration-500 transform ${isActive ? 'scale-105' : 'hover:scale-102 opacity-80'}`}
          >
            <defs>
              <linearGradient id={`grad-${step.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isActive ? (isClientStep ? '#f97316' : '#3c5a52') : '#1e3a34'} />
                <stop offset="100%" stopColor={isActive ? (isClientStep ? '#ea580c' : '#142e28') : '#0a1a16'} />
              </linearGradient>
            </defs>
            <path 
              d={step.path} 
              fill={`url(#grad-${step.id})`} 
              stroke={isActive ? (isClientStep ? '#fb923c' : '#61756f') : 'rgba(255,255,255,0.05)'}
              strokeWidth="2"
              className="transition-all duration-500"
            />
            <foreignObject x="0" y="0" width={step.width} height={step.height}>
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center pointer-events-none select-none">
                <span className={`font-black tracking-tight leading-tight ${isActive ? 'text-white' : 'text-white/30'} text-xl md:text-2xl transition-all mb-1`}>
                  {step.stat}
                </span>
                {step.subStat && (
                  <span className={`text-[9px] uppercase tracking-[0.1em] font-black ${isActive ? (isClientStep ? 'text-orange-200' : 'text-[#9daaa6]') : 'text-white/5'} transition-all max-w-[90%] block`}>
                    {step.subStat}
                  </span>
                )}
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Improved Connector & Hands-off Label */}
        {!isLast && (
          <div className="h-10 w-[2px] relative my-2">
            <div className={`absolute inset-0 bg-gradient-to-b ${index === 2 ? 'from-[#2e4841] to-orange-500' : (isClientStep ? 'from-orange-500' : 'from-[#2e4841]')} to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`} />
            
            {/* Split Indicator - Visual anchor for "The Hands Off" */}
            {index === 2 && (
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-4 w-screen justify-center pointer-events-none">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#61756f]/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#61756f] bg-[#0a1f1a] px-3">
                  Agency Hand-Off
                </span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#61756f]/40" />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const TabButton: React.FC<{ step: any; isClientStep?: boolean }> = ({ step, isClientStep }) => {
    const isActive = activeIndex === step.id;
    return (
      <button 
        onClick={() => setActiveIndex(step.id)}
        className={`w-full text-left p-6 rounded-[24px] transition-all duration-500 group relative border ${
          isActive 
            ? isClientStep 
              ? 'bg-orange-500/10 border-orange-500/40 shadow-2xl scale-[1.02]' 
              : 'bg-white/10 border-white/30 shadow-2xl scale-[1.02]' 
            : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
        }`}
      >
        <div className="flex items-center gap-4 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-all ${isActive ? (isClientStep ? 'bg-orange-500 text-white' : 'bg-[#2e4841] text-white') : 'bg-white/10 text-[#61756f]'}`}>
            {step.id + 1}
          </div>
          <h3 className={`text-lg font-black ${isActive ? 'text-white' : 'text-[#9daaa6]'} transition-colors`}>
            {step.title}
          </h3>
        </div>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className={`text-sm leading-relaxed font-medium ${isClientStep ? 'text-orange-200/80' : 'text-[#9daaa6]'}`}>
            {step.desc}
          </p>
        </div>
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 bg-[#0a1f1a] rounded-[56px] text-white relative overflow-hidden border border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2e4841]/20 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />
      <div className="grain-overlay opacity-[0.03]" />

      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-[#2e4841] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
            THE PERFORMANCE PARTNERSHIP
          </span>
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            Our Engine. <span className="text-orange-500">Your Deals.</span>
          </h2>
          <p className="text-xl text-[#9daaa6] font-medium leading-relaxed max-w-2xl mx-auto">
            We handle the heavy lifting of pipeline generation until the discovery call is booked. Then, it's your time to shine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Interactive Toggle Menu */}
          <div className="lg:col-span-5 flex flex-col gap-12 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4 pl-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2e4841]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2e4841]">
                  KLUVO'S ACCOUNTABILITY
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2e4841]/30 to-transparent" />
              </div>
              <div className="flex flex-col gap-3">
                {AGENCY_STEPS.map(step => <TabButton key={step.id} step={step} />)}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 mb-4 pl-4">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-500">
                  YOUR INTERNAL FOCUS
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
              </div>
              <div className="flex flex-col gap-3">
                {CLIENT_STEPS.map(step => <TabButton key={step.id} step={step} isClientStep />)}
              </div>
            </div>
          </div>

          {/* Right: Visualization Column */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2">
             <div className="w-full max-w-xl flex flex-col items-center relative py-10">
                
                {/* Visual grouping labels - Side oriented with safe spacing */}
                <div className="absolute -left-12 top-10 h-[65%] w-[1px] border-l border-white/10 hidden xl:block">
                  <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#2e4841]/60">
                      AGENCY OPERATIONS
                    </span>
                  </div>
                </div>
                
                <div className="absolute -left-12 bottom-10 h-[22%] w-[1px] border-l border-orange-500/20 hidden xl:block">
                  <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500/60">
                      CLIENT SALES DESK
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full px-4">
                  {ALL_STEPS.map((step, i) => (
                    <FunnelSegment key={step.id} step={step} index={i} />
                  ))}
                </div>

                <div className="mt-16 text-center w-full max-w-md">
                   <div className="p-6 bg-white/5 border border-white/5 rounded-[24px] backdrop-blur-sm">
                     <p className="text-[10px] font-bold text-[#61756f] uppercase tracking-widest italic leading-relaxed">
                       * DATA REFLECTS 12-MONTH AVERAGE PERFORMANCE ACROSS B2B SECTORS. INDIVIDUAL RESULTS MAY VARY BASED ON MARKET DYNAMICS.
                     </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmnichannelFunnel;
