
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
    phase: 'Setup and strategy development',
    days: 'Days 1–5',
    summary: 'Building the foundation of your outbound ecosystem.',
    subSteps: [
      {
        title: 'Welcome and initial setup',
        description: 'Immediately after signing, we trigger our high-touch onboarding sequence to get your campaign moving.',
        bullets: [
          'You receive a welcome email introducing your dedicated account manager (AM).',
          'We confirm key details, including contract specifics and primary campaign goals.',
          'Access to your reporting charts is provisioned.'
        ]
      },
      {
        title: 'Technical Infrastructure',
        description: 'We handle the heavy lifting of domain safety and deliverability.',
        bullets: [
          'Secondary domain registration to protect your primary workspace.',
          'DNS configuration (SPF, DKIM, DMARC) for maximum inbox placement.',
          'Initial mailbox "warm-up" protocols initiated.'
        ]
      }
    ]
  },
  {
    id: 1,
    phase: 'Content and research',
    days: 'Days 6–9',
    summary: 'Deep-diving into your ICP to find your future customers.',
    subSteps: [
      {
        title: 'Strategy and domain rollout',
        description: 'Our strategy team dissects your product to find the hooks that actually resonate.',
        bullets: [
          'Your AM interviews your top sales leaders to extract "tribal knowledge".',
          'Our research team reviews your Ideal Customer Profile (ICP) and historical wins.',
          'We finalize the target list of 500+ dream accounts for the pilot phase.'
        ]
      },
      {
        title: 'Data Enrichment',
        description: 'Precision targeting using our premium toolstack (Clay, HubSpot, etc.).',
        bullets: [
          'Manual verification of decision-maker contact details.',
          'Intent-signal mapping to identify prospects currently in a "buying window".',
          'Segmentation by persona and pain-point categories.'
        ]
      }
    ]
  },
  {
    id: 2,
    phase: 'Final steps and launch',
    days: 'Days 10–14',
    summary: 'Closing the loop and going live with your first sequences.',
    subSteps: [
      {
        title: 'Internal strategy session',
        description: 'The final alignment before we pull the trigger on your outbound engine.',
        bullets: [
          'Development of multi-threaded messaging scripts for Email, LinkedIn, and Voice.',
          'A/B testing variations for subject lines and value-prop hooks.',
          'Approval of the 30-day "Launch Roadmap" and KPIs.'
        ]
      },
      {
        title: 'Campaign Activation',
        description: 'Your outbound engine begins humming.',
        bullets: [
          'First sequence of personalized emails deployed.',
          'LinkedIn social-selling automation begins.',
          'SDRs initiate cold-calling sequences on high-intent leads.'
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
          We’ll launch your appointment<br />
          setting campaign in <span className="text-[#2e4841]">14 days</span>
        </h2>
        <p className="text-[#61756f] font-medium text-lg max-w-2xl mx-auto">
          Click through the phases below to see exactly how we build your growth engine from scratch.
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
