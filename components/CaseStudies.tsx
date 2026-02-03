
import React, { useState, useEffect } from 'react';

interface CaseStudy {
  id: string;
  company: string;
  logo: string;
  results: string;
  challenge: string;
  fullStory: {
    heroTitle: string;
    overview: string;
    challengeDetail: string;
    solutionDetail: string;
    impactDetail: string;
    stats: { label: string; val: string }[];
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "flarie",
    company: "Flarie",
    logo: "/Kluvo-Site-2k26/flarie-logo.png",
    results: "Restored a 100% consistent flow of qualified meetings across 4 channels.",
    challenge: "A severe lack of meetings despite having capable and experienced account executives.",
    fullStory: {
      heroTitle: "Restoring predictable meeting volume for high-performance sales teams.",
      overview: "Flarie had a strong product and a solid sales team, but a clear bottleneck at the very top of the funnel. Account executives simply didn’t have enough qualified conversations booked to operate at full capacity.",
      challengeDetail: "The internal motion wasn't generating enough initial touchpoints in the FMCG sector. Account executives were operating below capacity due to a thin pipeline and inconsistent prospecting.",
      solutionDetail: "We rebuilt the top of the pipeline from first principles. Re-identified decision-makers in fast-moving goods across the UK and executed a 4-channel outreach combining cold calling, email, LinkedIn, and WhatsApp.",
      impactDetail: "The outcome was a structured, repeatable outbound system that materially increased meeting volume and gave Flarie’s sales team the calendar density they needed to operate effectively.",
      stats: [
        { label: "Engagement Channels", val: "4" },
        { label: "Target Sector", val: "FMCG" },
        { label: "Setup Time", val: "4 Wks" }
      ]
    }
  },
  {
    id: "big-red-jelly",
    company: "Big Red Jelly",
    logo: "/Kluvo-Site-2k26/big-red-jelly-logo.svg",
    results: "Sustained increase in qualified meetings feeding into 100% in-house closers.",
    challenge: "Pipeline volume — experienced closers, but not enough qualified meetings to sustain growth.",
    fullStory: {
      heroTitle: "Decoupling prospecting from closing to drive sustainable agency growth.",
      overview: "Big Red Jelly already had an established sales process and capable account executives. Their issue wasn’t closing — it was volume at the top of the funnel.",
      challengeDetail: "Experienced closers were being pressured to prospect, reducing their effectiveness in actual sales conversations. Lead sourcing lacked precision and buying signal alignment.",
      solutionDetail: "Introduced a dedicated SDR layer whose sole responsibility was booking qualified appointments. Prioritized relevance by identifying companies actively hiring for marketing roles.",
      impactDetail: "The model proved repeatable and scalable, to the point that Big Red Jelly later internalized the function using the specific framework and scripts we implemented.",
      stats: [
        { label: "Strategy Layer", val: "SDR" },
        { label: "Handover Rate", val: "100%" },
        { label: "Optimization", val: "6 Wks" }
      ]
    }
  },
  {
    id: "lumi",
    company: "Lumi",
    logo: "/Kluvo-Site-2k26/lumi-logo.svg",
    results: "Outbound performance across 2 global regions with 0 internal hiring friction.",
    challenge: "Scaling top-of-funnel generation across markets without being limited by internal hiring speed.",
    fullStory: {
      heroTitle: "Powering global expansion through localized outbound engines.",
      overview: "Lumi operates in a competitive SaaS environment where outbound consistency is critical. Early UK success created pressure to expand internationally, but internal hiring was a constraint.",
      challengeDetail: "Scaling top-of-funnel across new markets was limited by internal recruitment speeds and a lack of specific regional outreach expertise.",
      solutionDetail: "Built a structured multichannel motion. Once the UK motion stabilized, we expanded into the GCC region, adapted outreach for regional norms, and deployed native Arabic-speaking resources.",
      impactDetail: "The result was a repeatable outbound engine that could flex by geography without Lumi needing to rebuild the function internally for every new market entry.",
      stats: [
        { label: "Target Regions", val: "2" },
        { label: "Approach", val: "Localized" },
        { label: "Reporting", val: "Unified" }
      ]
    }
  },
  {
    id: "outbound-solutions",
    company: "Outbound Solutions",
    logo: "/Kluvo-Site-2k26/outbound-solutions-logo.svg",
    results: "100s of positive email replies converted into booked discovery calls weekly.",
    challenge: "High reply volume was being under-monetized due to slow or inconsistent follow-up.",
    fullStory: {
      heroTitle: "Solving the 'last-mile' problem of high-volume email outreach.",
      overview: "Outbound Solutions generates high volumes of positive replies through email campaigns. The bottleneck sat at the final step: converting interest into booked meetings.",
      challengeDetail: "Speed-to-lead was the primary failure point. Interest was high, but inconsistent follow-up meant discovery calls weren't being booked while the lead was still hot.",
      solutionDetail: "Implemented a dedicated 'Last-Mile' calling team trained specifically to qualify positive replies rapidly. Speed-to-lead became the core KPI for the operation.",
      impactDetail: "Created a reliable, stable, and scalable reply-to-call operation that ensured no demand or positive interest went to waste.",
      stats: [
        { label: "Weekly Replies", val: "100s" },
        { label: "Core KPI", val: "Speed" },
        { label: "Stability", val: "100%" }
      ]
    }
  },
  {
    id: "silverlight-research",
    company: "Silverlight Research",
    logo: "/Kluvo-Site-2k26/silverlight-logo.png",
    results: "Consistent output from a team of 6 managed agents for 18 months.",
    challenge: "Limited internal capacity to manage a growing outbound- and admin-heavy operation.",
    fullStory: {
      heroTitle: "Eliminating management bottlenecks in high-volume research operations.",
      overview: "Silverlight Research’s model relies heavily on outbound activity. As volumes grew, internal managers became stretched, limiting overall scalability.",
      challengeDetail: "The management burden of a growing outbound team was distracting leadership from core strategic goals, creating an administrative bottleneck.",
      solutionDetail: "Supplied and fully managed a flexible team of agents. Took over recruitment, onboarding, training, and day-to-day operational oversight for the entire outbound function.",
      impactDetail: "Removed the management bottleneck while keeping output stable and adaptable. The partnership has run for 18+ months with consistent delivery results.",
      stats: [
        { label: "Peak Team Size", val: "6" },
        { label: "Partnership", val: "18+ Mo" },
        { label: "Management", val: "100%" }
      ]
    }
  }
];

const PREDICTABLE_TABS = [
  { id: 0, title: "Tailored strategies", content: { title: "You get an extra pair of expert hands, without disrupting the internal team’s workflow. We just fit right.", desc: "We integrate directly into your systems, CRM, calendars, and performance dashboards (and can help you build one if you don't have one). This ensures smooth handoffs and full transparency across every stage. No isolated KPIs or movements that your team has no knowledge of.", extra: "Need white-labeled cold outreach from a senior team member for your SaaS company? Done. Want dedicated SDR support without expanding your head count? We’ve got it covered.", footer: "Every strategic decision is made in alignment with your team, so everyone works toward the same business results and stays fully connected." } },
  { id: 1, title: "Pipeline-boosting focus", content: { title: "Aggressive growth for your SaaS pipeline.", desc: "Our focus is purely on high-intent conversion. We don't just fill your CRM with names; we pack it with opportunities ready to sign. By leveraging real-time intent data, we identify decision-makers currently evaluating solutions like yours and place your value proposition front and center.", extra: "We eliminate the noise and focus on accounts that are actually entering their buying window.", footer: "Our mission is to ensure your sales team spends 100% of their time talking to people who actually want to buy." } },
  { id: 2, title: "Flexible playbooks", content: { title: "Iterative strategies for changing markets.", desc: "We don't stick to a rigid plan if the data suggests a pivot. Market dynamics shift, and so do our tactics. Every campaign is a live experiment where we continuously A/B test hooks, messaging angles, and persona targeting to ensure your outreach never goes stale.", extra: "We optimize for the highest response rates, not just the easiest ones, by listening to prospect feedback in real-time.", footer: "Agility is our competitive advantage, ensuring your growth engine stays relevant and effective." } },
  { id: 3, title: "Effective channel mixes", content: { title: "Omnichannel coverage that scales.", desc: "Combining LinkedIn, Email, and Voice to ensure maximum reach. A single touchpoint is a whisper; a coordinated multi-channel sequence is a conversation. We synchronize social selling with high-impact email sequences and intent-based cold calling to surround your target accounts.", extra: "This triple-threat approach ensures your brand stays top-of-mind across every platform your prospects inhabit.", footer: "We build a consistent narrative thread that follows your prospects wherever they are." } },
  { id: 4, title: "Team alignment", content: { title: "Acting as an extension of your own team.", desc: "We coordinate with your marketing and sales leads weekly. Communication is the backbone of our partnership. We hold weekly strategy syncs to align our outbound efforts with your internal marketing campaigns and sales priorities.", extra: "We share insights on prospect feedback, helping you refine your product messaging and sales deck based on actual market responses.", footer: "We are not a vendor; we are a strategic partner invested in your long-term success." } },
  { id: 5, title: "Customization and scalability", content: { title: "Built for your specific growth stage.", desc: "Whether you're Seed stage or Enterprise. We understand that a startup seeking product-market fit needs a different approach than an established enterprise looking to dominate a new vertical.", extra: "Our modular service structure allows you to scale up or down based on your budget, goals, and internal capacity.", footer: "We provide the elite SDR support you need, exactly when you need it, with no recruitment delays." } }
];

const CHALLENGES_SOLVED = [
  {
    id: 0,
    title: "Speaking to the wrong leads",
    problem: "We’re putting time and effort into outbound, but the people we’re speaking to aren’t the right decision makers. Conversations stall, deals don’t progress, and it feels like activity without momentum.",
    solution: "We design targeting and outreach around real buying signals and decision maker relevance. By defining the ICP properly and aligning messaging across phone, email, LinkedIn, and WhatsApp, we ensure your team speaks to the right people not just more people.",
    quoteAuthor: "Sarah",
    quoteRole: "Sales Director",
    solutionAuthor: "Jack Banister",
    solutionRole: "Managing Director"
  },
  {
    id: 1,
    title: "Not wanting to risk a hire",
    problem: "Hiring internally feels like a gamble. Once we commit to salary, tools, and onboarding, we’re locked in even if performance doesn’t show up.",
    solution: "We provide a ready made outbound function without the permanent commitment. You get experienced specialists, proven processes, and full operational support without the long term risk of a bad hire or internal overhead.",
    quoteAuthor: "Mike",
    quoteRole: "SaaS Founder",
    solutionAuthor: "Joseph Kennedy",
    solutionRole: "Marketing Director"
  },
  {
    id: 2,
    title: "Ramp time and training drag",
    problem: "Even when we hire well, it takes months before someone is fully productive. Training, shadowing, and trial and error slow down growth while targets keep moving.",
    solution: "Our teams are already trained in outbound methodology. Within weeks, you have specialists executing live campaigns using proven playbooks removing months of ramp time and getting results faster.",
    quoteAuthor: "David",
    quoteRole: "VP of Sales",
    solutionAuthor: "Jack Banister",
    solutionRole: "Managing Director"
  },
  {
    id: 3,
    title: "Speaking to not enough leads",
    problem: "We know our sales team can close, but their calendars aren’t full. There simply aren’t enough qualified conversations happening each week.",
    solution: "We rebuild the top of your funnel using an omnichannel approach that increases connection rates and meeting volume. By combining calling, email, LinkedIn, and WhatsApp, we create consistent first contact and a predictable flow of qualified meetings.",
    quoteAuthor: "James",
    quoteRole: "Growth Lead",
    solutionAuthor: "Joseph Kennedy",
    solutionRole: "Marketing Director"
  },
  {
    id: 4,
    title: "Day to day management drag",
    problem: "Managing SDRs takes constant attention coaching QA reporting motivation and tooling issues. It pulls senior people away from strategy and closing.",
    solution: "We run the entire outbound operation end to end. Recruitment training management QA tooling and reporting are all handled by us so your leadership team can focus on growth not supervision.",
    quoteAuthor: "Andy",
    quoteRole: "Ops Director",
    solutionAuthor: "Jack Banister",
    solutionRole: "Managing Director"
  }
];

const TECH_PARTNERS = [
  {
    name: 'Sales Navigator',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: 'ZoomInfo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l3.3 5H5l3.3-5C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
      </svg>
    )
  },
  {
    name: 'HubSpot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
      </svg>
    )
  },
  {
    name: 'Clay',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.5-1 1-4c2 0 3.03 0 3.03 0" />
        <path d="M12 15v5s1-.5 4-1c0-2 0-3.03 0-3.03" />
      </svg>
    )
  }
];

const CaseStudies: React.FC = () => {
  const [activePredictableTab, setActivePredictableTab] = useState(0);
  const [activeChallengeId, setActiveChallengeId] = useState(0);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  const selectedCase = CASE_STUDIES.find(c => c.id === selectedCaseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCaseId]);

  if (selectedCaseId && selectedCase) {
    return (
      <div className="bg-[#fcfcfc] min-h-screen animate-in fade-in duration-700">
        {/* Detail Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setSelectedCaseId(null)}
              className="group flex items-center gap-3 text-[#9daaa6] hover:text-[#0d2b23] font-black text-xs uppercase tracking-widest mb-16 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              Back to results
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-8">
                <img src={selectedCase.logo} alt={selectedCase.company} className="h-20 object-contain mb-12" />
                <h1 className="text-5xl md:text-8xl font-black text-[#0d2b23] leading-[0.9] tracking-tighter mb-8">
                  {selectedCase.fullStory.heroTitle}
                </h1>
              </div>
              <div className="lg:col-span-4 pb-2">
                <div className="bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm">
                  <p className="text-[#61756f] text-lg font-medium leading-relaxed italic">
                    "{selectedCase.results}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Big Numbers */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedCase.fullStory.stats.map((stat, i) => (
              <div key={i} className="bg-[#0d2b23] p-12 rounded-[48px] text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 block mb-4">{stat.label}</span>
                <p className="text-6xl font-black tracking-tighter">{stat.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 block mb-6">01. Overview</span>
                <p className="text-xl text-[#61756f] font-medium leading-relaxed">{selectedCase.fullStory.overview}</p>
              </div>
              <div className="p-10 bg-white border border-slate-100 rounded-[40px]">
                <h4 className="font-black text-[#0d2b23] mb-4">Strategic Focus</h4>
                <p className="text-[#61756f] text-sm leading-relaxed font-medium">We replaced the standard volume-led approach with a precision-led intent framework to capture the 'Buying Window'.</p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-[#0d2b23]">The Challenge</h3>
                  <p className="text-[#61756f] font-medium leading-relaxed">{selectedCase.fullStory.challengeDetail}</p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-[#0d2b23]">The Solution</h3>
                  <p className="text-[#61756f] font-medium leading-relaxed">{selectedCase.fullStory.solutionDetail}</p>
                </div>
              </div>
              <div className="bg-[#fcfcfc] border border-slate-200 border-dashed p-16 rounded-[56px]">
                <h3 className="text-3xl font-black text-[#0d2b23] mb-8">Long-term Impact</h3>
                <p className="text-2xl text-[#0d2b23] font-medium leading-relaxed mb-10">
                  {selectedCase.fullStory.impactDetail}
                </p>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="bg-[#0d2b23] text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#0d2b23]/20"
                >
                  Start your growth journey
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* 1. Predictable Pipeline Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-[#0d2b23] mb-8 leading-tight tracking-tighter">
            Your lead generation partner for a <span className="text-[#2e4841]">predictable sales pipeline</span>
          </h2>
          <p className="text-[#61756f] text-lg font-medium leading-relaxed">
            We’re not just another SaaS lead generation agency promising lots of meetings. We’re an integrated growth partner, bridging the gap between your product and decision makers who actually need your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 flex flex-col gap-3">
            {PREDICTABLE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePredictableTab(tab.id)}
                className={`p-5 rounded-2xl text-left font-black text-sm transition-all border ${activePredictableTab === tab.id
                  ? 'bg-white border-slate-100 text-[#2e4841] shadow-xl shadow-black/5 flex justify-between items-center'
                  : 'bg-transparent border-transparent text-[#61756f] hover:bg-white/50'
                  }`}
              >
                {tab.title}
                {activePredictableTab === tab.id && (
                  <svg className="w-5 h-5 text-[#2e4841]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <div className="lg:col-span-9 bg-white p-12 md:p-16 rounded-[48px] border border-slate-100 shadow-sm min-h-[400px]">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-3xl font-black text-[#0d2b23] mb-8 leading-tight">
                {PREDICTABLE_TABS[activePredictableTab].content.title}
              </h3>
              <div className="space-y-6 text-[#61756f] text-lg leading-relaxed font-medium">
                <p>{PREDICTABLE_TABS[activePredictableTab].content.desc}</p>
                {PREDICTABLE_TABS[activePredictableTab].content.extra && (
                  <p>{PREDICTABLE_TABS[activePredictableTab].content.extra}</p>
                )}
                {PREDICTABLE_TABS[activePredictableTab].content.footer && (
                  <p className="pt-4 text-sm font-bold border-t border-slate-50 italic">{PREDICTABLE_TABS[activePredictableTab].content.footer}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Case Study Table */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[48px] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#282828] text-white">
              <tr>
                <th className="p-8 font-black text-xs uppercase tracking-[0.2em] w-1/4">Company</th>
                <th className="p-8 font-black text-xs uppercase tracking-[0.2em] w-1/4">Campaign impact</th>
                <th className="p-8 font-black text-xs uppercase tracking-[0.2em] w-1/4">Key challenge resolved</th>
                <th className="p-8 w-1/4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CASE_STUDIES.map((study, idx) => (
                <tr key={idx} className="group hover:bg-[#fcfcfc] transition-colors">
                  <td className="p-8">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="max-h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </td>
                  <td className="p-8">
                    <p className="font-bold text-[#0d2b23] text-sm leading-relaxed">
                      {study.results.split(' ').map((word, i) =>
                        ['100', '56', '203', '3', '125', '155', '80', '51', '$50K', '$8K', '6', '8', '17', '7', '2', '18', '4', '100%'].includes(word.replace(/[^0-9$K%]/g, ''))
                          ? <span key={i} className="font-black text-[#0d2b23]">{word} </span>
                          : word + ' '
                      )}
                    </p>
                  </td>
                  <td className="p-8">
                    <p className="text-[#61756f] text-sm leading-relaxed font-medium">
                      {study.challenge}
                    </p>
                  </td>
                  <td className="p-8 text-right">
                    <button
                      onClick={() => setSelectedCaseId(study.id)}
                      className="text-[#2e4841] font-bold text-sm hover:underline decoration-2 underline-offset-4"
                    >
                      Read the case study
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-10 text-center border-t border-slate-100 bg-[#fcfcfc]">
            <p className="text-[#61756f] font-black text-sm">30+ other SaaS companies</p>
          </div>
        </div>
      </section>

      {/* 3. Improved KPIs Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-[#0d2b23] mb-8 leading-tight tracking-tighter">
              Improved KPIs aligned with your revenue growth
            </h2>
            <p className="text-[#61756f] text-lg font-medium leading-relaxed mb-10">
              On average, our lead generation services deliver over $50K in closed revenue for SaaS companies in the first 3 months, with qualified appointments increasing 35% month-over-month.
            </p>
            <div className="space-y-6">
              <p className="text-[#0d2b23] font-bold text-lg mb-8">Here's what else our B2B SaaS clients typically see:</p>
              {[
                "15%+ demo-to-close rates",
                "60% faster decision making",
                "50%+ more qualified opportunities at the top of the funnel",
                "3x ROI on lead generation investment within 6 months"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-[#2e4841] font-black group-hover:translate-x-1 transition-transform">→</div>
                  <span className="text-[#61756f] font-medium text-lg group-hover:text-[#0d2b23] transition-colors">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-2xl relative">
            <h4 className="text-xs font-bold text-[#61756f] mb-12 text-center uppercase tracking-widest">Example: Appointments vs. new revenue growth over 12 months</h4>
            <div className="h-80 flex items-end justify-between gap-2 relative">
              {[0, 10, 20, 30, 40].map(val => (
                <div key={val} className="absolute w-full h-[1px] bg-slate-100" style={{ bottom: `${(val / 40) * 100}%` }}>
                  <span className="absolute -left-8 -translate-y-1/2 text-[10px] font-bold text-[#61756f]">{val}</span>
                </div>
              ))}

              {[0, 100, 200, 300, 400].map(val => (
                <span key={val} className="absolute -right-12 text-[10px] font-bold text-[#2e4841]" style={{ bottom: `${(val / 400) * 100}%` }}>
                  {val}K
                </span>
              ))}

              <div className="absolute -left-12 top-1/2 -rotate-90 origin-left text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Appointments</div>
              <div className="absolute -right-20 top-1/2 rotate-90 origin-right text-[10px] font-bold text-[#2e4841] uppercase tracking-widest">Revenue ($)</div>

              {[6, 9, 14, 20, 26, 30, 40, 40, 40, 40, 40, 40].map((h, i) => (
                <div key={i} className="flex-1 bg-indigo-500/10 rounded-t-sm" style={{ height: `${(h / 40) * 100}%` }} />
              ))}

              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <path
                  d="M0 320 C 50 310, 100 280, 150 250 S 250 200, 300 150 S 400 50, 500 0"
                  fill="none"
                  stroke="url(#chartGrad)"
                  strokeWidth="4"
                />
                <path
                  d="M0 320 C 50 310, 100 280, 150 250 S 250 200, 300 150 S 400 50, 500 0 L 500 320 L 0 320 Z"
                  fill="url(#chartArea)"
                  className="opacity-40"
                />
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2e4841" />
                    <stop offset="100%" stopColor="#0d2b23" />
                  </linearGradient>
                  <linearGradient id="chartArea" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2e4841" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mt-8 flex justify-between px-2 text-[10px] font-black text-[#61756f]">
              {[2, 4, 6, 8, 10, 12].map(m => <span key={m}>{m}</span>)}
            </div>
            <div className="mt-4 text-center text-[10px] font-black text-[#61756f] uppercase tracking-widest">Months</div>
          </div>
        </div>
      </section>

      {/* 4. Challenges We Solve */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1e1e1e] rounded-[56px] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#2e4841]/20 blur-[100px] -ml-20 -mt-20" />

            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-24 tracking-tighter">
              Challenges we solve
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 flex flex-col gap-3">
                {CHALLENGES_SOLVED.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveChallengeId(c.id)}
                    className={`p-6 rounded-2xl text-left transition-all border ${activeChallengeId === c.id
                      ? 'bg-[#2e4841] border-[#2e4841] text-white flex justify-between items-center shadow-lg shadow-[#2e4841]/20'
                      : 'bg-[#282828]/50 border-white/5 text-[#9daaa6] hover:bg-[#282828]'
                      }`}
                  >
                    <span className="font-bold text-sm leading-snug">{c.title}</span>
                    {activeChallengeId === c.id && (
                      <svg className="w-4 h-4 text-white ml-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              <div className="lg:col-span-8 space-y-16 animate-in fade-in duration-700">
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-white">Problem</h4>
                  <div className="relative">
                    <p className="text-[#fcfcfc]/90 text-xl leading-relaxed italic pr-12 font-medium">
                      “{CHALLENGES_SOLVED[activeChallengeId].problem}”
                    </p>
                    <div className="mt-6 flex flex-col items-end">
                      <p className="text-white font-black text-sm">{CHALLENGES_SOLVED[activeChallengeId].quoteAuthor}</p>
                      <div className="flex items-center gap-2">
                        <div className="h-[1px] w-8 bg-white/20" />
                        <p className="text-[#9daaa6] text-[10px] font-black uppercase tracking-[0.2em]">{CHALLENGES_SOLVED[activeChallengeId].quoteRole || 'Client Partner'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-[#2e4841]">Solution</h4>
                  <div className="relative">
                    <p className="text-[#fcfcfc]/90 text-xl leading-relaxed pr-12 font-medium">
                      {CHALLENGES_SOLVED[activeChallengeId].solution}
                    </p>
                    <div className="mt-8 flex items-center justify-end">
                      <div className="text-right">
                        <p className="text-white font-black text-sm">
                          {CHALLENGES_SOLVED[activeChallengeId].solutionAuthor}
                        </p>
                        <p className="text-[#9daaa6] text-[10px] font-black uppercase tracking-[0.2em]">{CHALLENGES_SOLVED[activeChallengeId].solutionRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Top-tier Tools Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-100 shadow-sm rounded-[56px] p-12 md:p-24 overflow-hidden relative text-[#0d2b23]">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2e4841] block mb-4">
              TECHNOLOGY ENABLED
            </span>
            <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter">Top-tier tools at no extra cost</h2>
            <p className="text-[#61756f] text-lg font-medium leading-relaxed">
              Save up to $10,000 annually on premium lead generation and marketing tools — all included in our retainer.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h4 className="text-xs font-black mb-12 text-center uppercase tracking-[0.3em] text-[#9daaa6]">Our tech partners</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TECH_PARTNERS.map(tool => (
                <div key={tool.name} className="bg-[#fcfcfc] border border-slate-100 p-10 rounded-[32px] flex flex-col items-center justify-center transition-all hover:bg-white hover:shadow-2xl hover:border-[#2e4841]/20 group">
                  <div className="mb-6 transition-transform group-hover:scale-110 duration-500">
                    {tool.icon}
                  </div>
                  <span className="font-black text-xs text-[#0d2b23] uppercase tracking-widest text-center group-hover:text-[#2e4841] transition-colors">{tool.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-[11px] font-bold text-[#9daaa6] uppercase tracking-widest leading-relaxed max-w-lg mx-auto">
                WE INTEGRATE THE BEST-IN-CLASS STACK TO ENSURE YOUR OUTBOUND ENGINE OPERATES WITH SURGICAL PRECISION.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section - Updated with 7 unique requested clients */}
      <section className="py-24 bg-[#fcfcfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl font-black text-[#0d2b23] tracking-tighter">What our clients say</h2>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar">
            {[
              {
                quote: "Really impressed so far. Things have been moving smoothly, and it’s genuinely great to work with you there will be many other opportunities to work on together",
                author: "Ciaran Hastie",
                role: "Managing director",
                industry: "Public Sector Access",
                image: "/Kluvo-Site-2k26/ciaran-hastie.png"
              },
              {
                quote: "Absolute pleasure working with the lads. It was refreshing to chat to others on the same page as me, and there’s definitely potential for exciting projects together.",
                author: "Ben Guttridge",
                role: "Managing director",
                industry: "Auxo Digital",
                image: "/Kluvo-Site-2k26/ben-guttridge.png"
              },
              {
                quote: "Hands on and transparent throughout, with constant communication and a genuinely collaborative approach.",
                author: "Alex Monro",
                role: "Director",
                industry: "Devon Energy",
                image: "/Kluvo-Site-2k26/alex-monro.jpeg"
              },
              {
                quote: "We've seen a 50% increase in qualified appointments. The quality of the leads is significantly higher than our previous agency.",
                author: "Kevin Lynch",
                role: "CEO",
                industry: "ICS LA",
                image: "/Kluvo-Site-2k26/kevin-lynch.jpeg"
              },
              {
                quote: "Finally, an agency that understands the creative industry. Their messaging feels authentic and resonates with design leaders.",
                author: "Wes Townsend",
                role: "Creative Director",
                industry: "Garbanzo",
                image: "/Kluvo-Site-2k26/wes-townsend.jpeg"
              },
              {
                quote: "They helped us uncover new angles and alternative routes to market we hadn’t previously considered.",
                author: "Aman Mittal",
                role: "CEO",
                industry: "Transcount",
                image: "/Kluvo-Site-2k26/aman-mittal.jpeg"
              },
              {
                quote: "Once the system was in place, everything clicked. Getting real time confirmation from the SDR team that they’d found a match was a genuine win.",
                author: "Chris Burton",
                role: "Chief Creative Producer",
                industry: "Suite Creative",
                image: "/Kluvo-Site-2k26/chris-burton.jpeg"
              }
            ].map((t, i) => (
              <div key={i} className="min-w-[400px] bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex text-[#2e4841] gap-1">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                      <span className="text-[#0d2b23] font-black text-xs ml-2">5.0</span>
                    </div>
                    <span className="bg-[#fcfcfc] border border-slate-100 text-[#61756f] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{t.industry}</span>
                  </div>
                  <p className="text-xl font-medium text-[#0d2b23] leading-relaxed pr-6 mb-12">
                    “{t.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="font-black text-[#0d2b23] text-sm">{t.author}</p>
                    <p className="text-[#61756f] text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
