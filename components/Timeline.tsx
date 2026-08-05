
import React, { useState } from 'react';

interface StepDetail {
  title: string;
  description: string;
  bullets: string[];
}

interface TimelineStep {
  id: number;
  phase: string;
  days: string;
  summary: string;
  subSteps: StepDetail[];
}

const STEPS: TimelineStep[] = [
  {
    id: 0,
    phase: 'Absorbing what already works',
    days: 'Days 1-3',
    summary: 'Learning your angles before we write a single one of our own.',
    subSteps: [
      {
        title: 'The 90-minute onboarding call',
        description: 'The ten working days start here. You pay the first invoice, we issue a booking link, and this call is where the clock begins.',
        bullets: [
          'You meet your account manager (strategy) and your day-to-day manager (execution and QA).',
          'We agree the ICP, the disqualifiers, and what "qualified and sat" means for your business.',
          'We set the guaranteed monthly number against that ICP - honestly, not optimistically.'
        ]
      },
      {
        title: 'We build on what works',
        description: 'We do not arrive with a clever new angle. We take the ones your team has already proven and scale them.',
        bullets: [
          'Your closers walk us through the objections they actually hear and how they handle them.',
          'We pull the hooks from your won deals, not from a template library.',
          'SDRs are reskinned in your brand so prospects experience one company, not an agency.'
        ]
      }
    ]
  },
  {
    id: 1,
    phase: 'List building and infrastructure',
    days: 'Days 4-7',
    summary: 'Finding people with a reason to take the call this quarter.',
    subSteps: [
      {
        title: 'Intent-based list building',
        description: 'Multi-line enrichment rather than a job-title filter, so the list reflects buying intent.',
        bullets: [
          'Enrichment across Clay, Apollo, BuiltWith and others to build multiple lines on each account.',
          'Suppressed against your CRM so we never touch a live opportunity or existing customer.',
          'Segmented so reporting later tells you which segment is actually responding.'
        ]
      },
      {
        title: 'Technical setup',
        description: 'The unglamorous work that stops the campaign breaking in week three.',
        bullets: [
          'Secondary domain registration to protect your primary workspace.',
          'DNS configuration (SPF, DKIM, DMARC) for inbox placement.',
          'Dialler, numbers and call recording configured for QA from day one.'
        ]
      }
    ]
  },
  {
    id: 2,
    phase: 'Calibration and go-live',
    days: 'Days 8-10',
    summary: 'Agreeing the bar for a meeting before anyone starts booking.',
    subSteps: [
      {
        title: 'Calibrating the qualification bar',
        description: 'We agree the qualification bar, so nobody is surprised by a low booking count in week one.',
        bullets: [
          'Scripts built around your proven angles, including the objections we will deliberately test on the call.',
          'Agreement on what gets flagged as a future lead rather than forced into your calendar.',
          'Your two dedicated SDRs are named, and both have already been proven on Kluvo\'s own outbound.'
        ]
      },
      {
        title: 'Live activity begins',
        description: 'The first invoice buys live SDR activity. It does not buy the ten days above - those are unpaid.',
        bullets: [
          'Phone-led activity starts, with email and LinkedIn built around it.',
          'Call recordings reviewed daily by your day-to-day manager in the opening weeks.',
          'Weekly segment-level reporting from go-live, so you see which parts of the market respond.'
        ]
      }
    ]
  }
];

const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-[#0d2b23] mb-4">
          Ten working days of onboarding<br />
          that we <span className="text-[#2e4841]">don't charge you for</span>
        </h2>
        <p className="text-[#61756f] font-medium text-lg max-w-2xl mx-auto">
          The clock starts at your 90-minute onboarding call. Your first invoice buys live SDR activity, not the ramp-up. Around three to four hours of your time is needed in month one, nearly all of it here.
        </p>
      </div>

      {/* Visual Timeline Bar - Interactive */}
      <div className="relative mb-20">
        {/* The horizontal line */}
        <div className="h-[2px] bg-slate-100 absolute top-[52px] left-0 right-0 w-full z-0 hidden md:block" />
        <div 
          className="h-[2px] bg-[#2e4841] absolute top-[52px] left-0 transition-all duration-700 z-0 hidden md:block" 
          style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full md:w-1/3">
              {/* Phase Badge */}
              <button
                onClick={() => setActiveStep(i)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 transition-all border ${
                  activeStep === i 
                    ? 'bg-white border-slate-200 text-[#0d2b23] shadow-lg -translate-y-1' 
                    : 'bg-[#fcfcfc] border-transparent text-[#9daaa6] hover:text-[#0d2b23]'
                }`}
              >
                {step.phase}
              </button>

              {/* Interaction Node */}
              <button 
                onClick={() => setActiveStep(i)}
                className={`w-8 h-8 rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-all duration-500 transform ${
                  activeStep === i 
                    ? 'bg-[#2e4841] scale-125 ring-4 ring-[#2e4841]/10' 
                    : activeStep > i 
                    ? 'bg-[#2e4841] scale-100' 
                    : 'bg-white ring-2 ring-slate-100'
                }`}
              >
                {activeStep > i && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {activeStep === i && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </button>

              {/* Days Label */}
              <div className={`mt-4 text-xs font-black uppercase tracking-widest transition-colors ${activeStep === i ? 'text-[#0d2b23]' : 'text-[#9daaa6]'}`}>
                {step.days}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Area */}
      <div className="relative min-h-[400px]">
        {STEPS.map((step, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-700 transform ${
              activeStep === idx 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : activeStep > idx 
                ? 'opacity-0 -translate-y-8 pointer-events-none' 
                : 'opacity-0 translate-y-8 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {step.subSteps.map((sub, sIdx) => (
                <div key={sIdx} className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group">
                  <div className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2e4841] block mb-4">
                      {step.days} • Step 0{sIdx + 1}
                    </span>
                    <h3 className="text-3xl font-black text-[#0d2b23] mb-6 group-hover:text-[#2e4841] transition-colors leading-tight">
                      {sub.title}
                    </h3>
                    <p className="text-[#61756f] text-lg font-medium leading-relaxed mb-8">
                      {sub.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-5 mt-auto">
                    {sub.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#fcfcfc] border border-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0d2b23] transition-colors">
                           <div className="w-1.5 h-1.5 bg-[#2e4841] rounded-full group-hover:bg-white" />
                        </div>
                        <span className="text-[#61756f] font-medium leading-relaxed group-hover:text-[#0d2b23] transition-colors">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="mt-20 flex flex-col items-center gap-6">
        <div className="h-px w-24 bg-slate-100" />
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`p-4 rounded-2xl border border-slate-100 bg-white transition-all ${activeStep === 0 ? 'opacity-30' : 'hover:bg-[#fcfcfc] active:scale-95'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setActiveStep(prev => Math.min(STEPS.length - 1, prev + 1))}
            disabled={activeStep === STEPS.length - 1}
            className={`p-4 rounded-2xl border border-slate-100 bg-white transition-all ${activeStep === STEPS.length - 1 ? 'opacity-30' : 'hover:bg-[#fcfcfc] active:scale-95'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
