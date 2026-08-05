
import React, { useState } from 'react';

interface FunnelStep {
  id: number;
  title: string;
  desc: string;
  stat: string;
  subStat: string;
  label: string;
  width: number;
  height: number;
  path: string;
}

// Funnel geometry: each segment tapers from `width` down to the next.
const segment = (width: number) => `M15 0 H${width - 15} L${width - 40} 130 H40 Z`;

const AGENCY_STEPS: FunnelStep[] = [
  {
    id: 0,
    title: 'Intent-based list building',
    desc: 'Multi-line enrichment across Clay, Apollo, BuiltWith and others, suppressed against your CRM. We look for people showing buying intent, not people matching a job title.',
    stat: 'Built on signals',
    subStat: 'REAL BUYING INTENT',
    label: 'LIST',
    width: 480,
    height: 130,
    path: segment(480)
  },
  {
    id: 1,
    title: 'Conversations, mostly on the phone',
    desc: 'Two dedicated SDRs working your accounts. The phone does the heavy lifting because it is the only channel where you can hear the hesitation in a prospect\'s answer.',
    stat: 'Phone-first',
    subStat: 'EMAIL AND LINKEDIN AROUND IT',
    label: 'CONTACT',
    width: 420,
    height: 130,
    path: segment(420)
  },
  {
    id: 2,
    title: 'We qualify out',
    desc: 'We test the partner objection, the timing, and whether there is real budget behind the interest. A prospect who does not hold up under that was never going to buy, and finding out here costs us a booking rather than costing your closer an hour.',
    stat: 'Tested on the call',
    subStat: 'TIMING, BUDGET AND FIT',
    label: 'FILTER',
    width: 360,
    height: 130,
    path: segment(360)
  },
  {
    id: 3,
    title: 'Qualified and sat',
    desc: 'A meeting only counts when it actually took place and the account fits your ICP. Anyone with real pain who will not act now is flagged as a future lead rather than pushed into your calendar.',
    stat: 'Qualified and sat',
    subStat: 'AGREED AGAINST YOUR ICP',
    label: 'MEETINGS',
    width: 300,
    height: 130,
    path: segment(300)
  }
];

const CLIENT_STEPS: FunnelStep[] = [
  {
    id: 4,
    title: 'You close',
    desc: 'Your closers walk into a call with someone who has already been tested on fit, timing and authority - and has still turned up.',
    stat: 'Your senior people',
    subStat: 'DOING THE WORK THEY COST',
    label: 'CLOSE',
    width: 250,
    height: 130,
    path: segment(250)
  }
];

const ALL_STEPS = [...AGENCY_STEPS, ...CLIENT_STEPS];
const CLIENT_STEP_ID = CLIENT_STEPS[0].id;
const HANDOFF_INDEX = AGENCY_STEPS.length - 1;

const QualificationFunnel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const FunnelSegment: React.FC<{ step: FunnelStep; index: number }> = ({ step, index }) => {
    const isActive = activeIndex === step.id;
    const isClientStep = step.id === CLIENT_STEP_ID;
    const isFilterStep = step.id === 2;
    const isLast = index === ALL_STEPS.length - 1;

    return (
      <div className="flex flex-col items-center w-full">
        {/* Step Label */}
        <div className={`mb-4 transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`}>
          <div className={`${isClientStep ? 'bg-orange-500 border-orange-400 text-white' : 'bg-[#2e4841] border-white/20 text-white'} px-5 py-2 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md`}>
            {step.label}
          </div>
        </div>

        {/* Funnel Segment SVG */}
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
              <linearGradient id={`qgrad-${step.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isActive ? (isClientStep ? '#f97316' : '#3c5a52') : '#1e3a34'} />
                <stop offset="100%" stopColor={isActive ? (isClientStep ? '#ea580c' : '#142e28') : '#0a1a16'} />
              </linearGradient>
            </defs>
            <path
              d={step.path}
              fill={`url(#qgrad-${step.id})`}
              stroke={isActive ? (isClientStep ? '#fb923c' : '#61756f') : 'rgba(255,255,255,0.05)'}
              strokeWidth="2"
              strokeDasharray={isFilterStep ? '6 4' : undefined}
              className="transition-all duration-500"
            />
            <foreignObject x="0" y="0" width={step.width} height={step.height}>
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center pointer-events-none select-none">
                <span className={`font-black tracking-tight leading-tight ${isActive ? 'text-white' : 'text-white/30'} text-lg md:text-xl transition-all mb-1`}>
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

        {/* Connector & Hand-off Label */}
        {!isLast && (
          <div className="h-10 w-[2px] relative my-2">
            <div className={`absolute inset-0 bg-gradient-to-b ${index === HANDOFF_INDEX ? 'from-[#2e4841] to-orange-500' : (isClientStep ? 'from-orange-500' : 'from-[#2e4841]')} to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`} />

            {index === HANDOFF_INDEX && (
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-4 w-screen justify-center pointer-events-none">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#61756f]/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#61756f] bg-[#0a1f1a] px-3">
                  Hand-Off
                </span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#61756f]/40" />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const TabButton: React.FC<{ step: FunnelStep; isClientStep?: boolean }> = ({ step, isClientStep }) => {
    const isActive = activeIndex === step.id;
    return (
      <button
        onClick={() => setActiveIndex(step.id)}
        className={`w-full text-left p-6 rounded-[24px] transition-all duration-500 group relative border ${isActive
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
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
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
            HOW WE QUALIFY
          </span>
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            We qualify hard <span className="text-orange-500">before booking.</span>
          </h2>
          <p className="text-xl text-[#9daaa6] font-medium leading-relaxed max-w-2xl mx-auto">
            Four stages between an intent-based list and a meeting in your calendar. The qualification happens at our end, on the call, before anything reaches your closers.
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

              <div className="absolute -left-12 top-10 h-[70%] w-[1px] border-l border-white/10 hidden xl:block">
                <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#2e4841]/60">
                    KLUVO SDR DESK
                  </span>
                </div>
              </div>

              <div className="absolute -left-12 bottom-10 h-[18%] w-[1px] border-l border-orange-500/20 hidden xl:block">
                <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-orange-500/60">
                    YOUR CLOSERS
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
                  <p className="text-[10px] font-bold text-[#61756f] uppercase tracking-widest leading-relaxed">
                    WHAT COUNTS AS A QUALIFIED MEETING IS AGREED WITH YOU DURING ONBOARDING, BEFORE ANY ACTIVITY STARTS. FULL TERMS ARE ON THE PRICING PAGE.
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

export default QualificationFunnel;
