
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
    id: "big-red-jelly",
    company: "Big Red Jelly",
    logo: `${import.meta.env.BASE_URL}brj-logo.png`,
    results: "Sustained increase in qualified meetings feeding into 100% in-house closers.",
    challenge: "Pipeline volume - experienced closers, but not enough qualified meetings to sustain growth.",
    fullStory: {
      heroTitle: "Decoupling prospecting from closing to drive sustainable agency growth.",
      overview: "Big Red Jelly already had an established sales process and capable account executives. Their issue wasn’t closing - it was volume at the top of the funnel.",
      challengeDetail: "Experienced closers were being pressured to prospect, reducing their effectiveness in actual sales conversations. Lead sourcing lacked precision and buying signal alignment.",
      solutionDetail: "Introduced a dedicated SDR layer whose sole responsibility was booking qualified appointments. Prioritised relevance by identifying companies actively hiring for marketing roles.",
      impactDetail: "The model proved repeatable enough that Big Red Jelly later internalised the function using the specific framework and scripts we implemented.",
      stats: [
        { label: "Strategy Layer", val: "SDR" },
        { label: "Handover Rate", val: "100%" },
        { label: "Optimisation", val: "6 Wks" }
      ]
    }
  },
  {
    id: "lumi",
    company: "Lumi",
    logo: `${import.meta.env.BASE_URL}lumi-logo.png`,
    results: "Outbound performance across 2 global regions with 0 internal hiring friction.",
    challenge: "Scaling top-of-funnel generation across markets without being limited by internal hiring speed.",
    fullStory: {
      heroTitle: "Powering global expansion through localised outbound engines.",
      overview: "Lumi operates in a competitive SaaS environment where outbound consistency is critical. Early UK success created pressure to expand internationally, but internal hiring was a constraint.",
      challengeDetail: "Scaling top-of-funnel across new markets was limited by internal recruitment speeds and a lack of specific regional outreach expertise.",
      solutionDetail: "Built a structured multichannel motion. Once the UK motion stabilised, we expanded into the GCC region, adapted outreach for regional norms, and deployed native Arabic-speaking resources.",
      impactDetail: "The result was a repeatable outbound engine that could flex by geography without Lumi needing to rebuild the function internally for every new market entry.",
      stats: [
        { label: "Target Regions", val: "2" },
        { label: "Approach", val: "Localised" },
        { label: "Reporting", val: "Unified" }
      ]
    }
  },
  {
    id: "outbound-solutions",
    company: "Outbound Solutions",
    logo: `${import.meta.env.BASE_URL}outbound-solutions-logo.png`,
    results: "100s of positive email replies converted into booked discovery calls weekly.",
    challenge: "High reply volume was being under-monetised due to slow or inconsistent follow-up.",
    fullStory: {
      heroTitle: "Solving the 'last-mile' problem of high-volume email outreach.",
      overview: "Outbound Solutions generates high volumes of positive replies through email campaigns. The bottleneck sat at the final step: converting interest into booked meetings.",
      challengeDetail: "Speed-to-lead was the primary failure point. Interest was high, but inconsistent follow-up meant discovery calls weren't being booked while the lead was still hot.",
      solutionDetail: "Implemented a dedicated 'Last-Mile' calling team trained specifically to qualify positive replies rapidly. Speed-to-lead became the core KPI for the operation.",
      impactDetail: "Created a reliable, stable reply-to-call operation, so no positive reply was left to go cold.",
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
    logo: `${import.meta.env.BASE_URL}silverlight-logo.png`,
    results: "Consistent output from a team of 6 managed agents for 18 months.",
    challenge: "Limited internal capacity to manage a growing outbound- and admin-heavy operation.",
    fullStory: {
      heroTitle: "Eliminating management bottlenecks in high-volume research operations.",
      overview: "Silverlight Research’s model relies heavily on outbound activity. As volumes grew, internal managers became stretched, and that became the ceiling on output.",
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
  { id: 0, title: "We build on what works", content: { title: "We scale your proven angles rather than imposing our own.", desc: "Your team already knows which angles land and which objections come up on every call. We sit with your closers, take what is already working, and put two dedicated SDRs behind it. The SDRs work in your brand, so a prospect experiences one company rather than an agency calling on your behalf.", extra: "We integrate into your CRM, calendars and reporting so nothing happens in a corner your team cannot see.", footer: "The result is a campaign your team recognises, run at a volume they could not reach internally." } },
  { id: 1, title: "Qualified out, not just in", content: { title: "We qualify hard before we book.", desc: "On the call we test the partner objection, the timing, and whether there is real budget behind the interest. A prospect who does not hold up under that was never going to close, and finding out then costs us a booking instead of costing your closer an hour.", extra: "A meeting only counts when it took place and the account fits your ICP. Booked-but-never-sat is not a meeting.", footer: "Senior salespeople are expensive. Keeping weak meetings off their calendar is the cheapest thing we can do." } },
  { id: 2, title: "Timing honesty", content: { title: "We don't book someone just to hit a number.", desc: "Plenty of prospects have real pain and no intention of acting this quarter. A volume agency books them anyway, because the contract rewards appointments. We flag them as future leads, feed them back to you with the context, and revisit when the trigger actually arrives.", extra: "It means some months look quieter than a competitor's report would. It also means what does land is worth your time.", footer: "Most CROs recognise this immediately. It is the part of the pitch that builds the trust." } },
  { id: 3, title: "Phone-first", content: { title: "The phone does the heavy lifting.", desc: "You cannot hear hesitation in an email. Around 80% of our activity in a phone-led account is on the dialler, because a real conversation is the only place where you can test whether someone is genuinely in a position to buy. Email and LinkedIn are built around that, not the other way round.", extra: "On account-based work the balance shifts - personalised email and LinkedIn timed around specific triggers, with the phone still doing the qualifying.", footer: "Channels are a means of getting to a conversation. They are not the strategy." } },
  { id: 4, title: "Two layers of management", content: { title: "Someone on strategy, someone on the calls.", desc: "You get an account manager owning the direction of the campaign, and a day-to-day manager running execution, coaching and QA on the SDRs. Call recordings get reviewed rather than filed. When a segment stops responding, someone notices in week two rather than at the quarterly review.", extra: "Weekly reporting is segment-level, so you can see which parts of the market are actually responding rather than a single total.", footer: "Managing SDRs properly is most of the job. It is not something we leave to you." } },
  { id: 5, title: "One offering, two modes", content: { title: "The same team, flexed to your market.", desc: "We do not sell packages. There is one offering, and during onboarding we diagnose how it should run based on the size and shape of your addressable market. A wide market suits phone-led coverage. A defined set of accounts suits signal-led, monitored, account-based work.", extra: "Most clients land between the two - often around 200 target accounts, run as a blend of dialling lists and account monitoring.", footer: "You are not choosing a tier. You are telling us about your market and we are telling you how we would work it." } }
];

const CHALLENGES_SOLVED = [
  {
    id: 0,
    title: "Speaking to the wrong leads",
    problem: "We’re putting time and effort into outbound, but the people we’re speaking to aren’t the right decision makers. Conversations stall, deals don’t progress, and it feels like activity without momentum.",
    solution: "We design targeting around real buying signals rather than a job-title filter, using multi-line enrichment suppressed against your CRM. Then we test the fit on the call itself, so your team speaks to the right people rather than simply more of them.",
    quoteAuthor: "Sarah",
    quoteRole: "Sales Director",
    solutionAuthor: "Jack Banister",
    solutionRole: "Managing Director"
  },
  {
    id: 1,
    title: "Not wanting to risk a hire",
    problem: "Hiring internally feels like a gamble. Once we commit to salary, tools, and onboarding, we’re locked in even if performance doesn’t show up.",
    solution: "You get a ready-made outbound function without the permanent commitment, and ten working days of onboarding you are not charged for. Every SDR has already been proven on Kluvo's own outbound before they touch your campaign, so you are not funding someone's first month in the job.",
    quoteAuthor: "Mike",
    quoteRole: "SaaS Founder",
    solutionAuthor: "Joseph Kennedy",
    solutionRole: "Marketing Director"
  },
  {
    id: 2,
    title: "Ramp time and training drag",
    problem: "Even when we hire well, it takes months before someone is fully productive. Training, shadowing, and trial and error slow down growth while targets keep moving.",
    solution: "Our SDRs arrive trained and already tested on live outbound. Ten working days after your onboarding call they are running your campaign using your proven angles rather than ours, which removes months of ramp time.",
    quoteAuthor: "David",
    quoteRole: "VP of Sales",
    solutionAuthor: "Jack Banister",
    solutionRole: "Managing Director"
  },
  {
    id: 3,
    title: "Not enough real conversations",
    problem: "We know our sales team can close, but their calendars aren’t full. There simply aren’t enough qualified conversations happening each week.",
    solution: "We rebuild the top of the funnel around the phone, with email and LinkedIn supporting it, so first contact is consistent. What lands in the calendar is a smaller number than a volume agency would report, because anything that fails the timing or budget test gets flagged as a future lead instead.",
    quoteAuthor: "James",
    quoteRole: "Growth Lead",
    solutionAuthor: "Joseph Kennedy",
    solutionRole: "Marketing Director"
  },
  {
    id: 4,
    title: "Day to day management drag",
    problem: "Managing SDRs takes constant attention coaching QA reporting motivation and tooling issues. It pulls senior people away from strategy and closing.",
    solution: "You get two layers of management included - an account manager on strategy and a day-to-day manager on execution, coaching and QA. Recruitment, training, tooling and reporting sit with us, so your leadership team is not supervising SDRs.",
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
    name: 'Apollo',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l3.3 5H5l3.3-5C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
      </svg>
    )
  },
  {
    name: 'BuiltWith',
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
                <p className="text-[#61756f] text-sm leading-relaxed font-medium">We replaced a volume-led approach with intent-based targeting and hard qualification on the call, so fewer meetings reached the closers and more of them were worth having.</p>
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
                  Talk through your ICP
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
            How we <span className="text-[#2e4841]">generate pipeline</span>
          </h2>
          <p className="text-[#61756f] text-lg font-medium leading-relaxed">
            Every agency promises quality and then reports on volume. Here is what we actually do differently, in enough detail that you can hold us to it.
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
                  <td className="p-8 text-center">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 mx-auto"
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
            <p className="text-[#61756f] font-black text-sm">Plus ongoing work across IT, software and services clients</p>
          </div>
        </div>
      </section>

      {/* 3. Improved KPIs Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-[#0d2b23] mb-8 leading-tight tracking-tighter">
              What we count as a meeting
            </h2>
            <p className="text-[#61756f] text-lg font-medium leading-relaxed mb-10">
              Most of the gap between agencies isn't effort, it's measurement. Two reports can both say "12 meetings" and mean completely different things. This is the definition we work to, agreed with you during onboarding.
            </p>
            <div className="space-y-6">
              <p className="text-[#0d2b23] font-bold text-lg mb-8">The guarantee, mechanically:</p>
              {[
                "A set monthly number, agreed against your ICP before we start",
                "Honest ranges by market - roughly 6-12 at the software end, 3-6 for consultancy-type ICPs",
                "If we fall short, we keep working at no extra cost until it is hit",
                "No number is inflated to win the deal. We would rather agree one we can hit"
              ].map((bullet, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="text-[#2e4841] font-black group-hover:translate-x-1 transition-transform mt-0.5">→</div>
                  <span className="text-[#61756f] font-medium text-lg group-hover:text-[#0d2b23] transition-colors">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 md:p-12 rounded-[48px] border border-slate-100 shadow-2xl relative">
            <h4 className="text-xs font-bold text-[#61756f] mb-10 text-center uppercase tracking-widest">
              A meeting counts when
            </h4>

            <div className="space-y-4 mb-10">
              {[
                'It actually took place',
                'The account fits the ICP we agreed',
                'The prospect was tested on timing and budget, and held up',
                'There is a decision-maker in the room'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#fcfcfc] border border-slate-100 rounded-2xl">
                  <div className="w-5 h-5 rounded-full bg-[#2e4841] flex-shrink-0 flex items-center justify-center text-white mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0d2b23] font-bold text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-bold text-[#61756f] mb-6 text-center uppercase tracking-widest">
              It doesn't count when
            </h4>

            <div className="space-y-4">
              {[
                'It was booked but nobody turned up',
                'The prospect said the right things and meant none of them',
                'The timing was wrong and we booked it anyway'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 border-dashed rounded-2xl">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-[#9daaa6] mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#61756f] font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
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
            <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter">Tools and data included in the retainer</h2>
            <p className="text-[#61756f] text-lg font-medium leading-relaxed">
              We run several enrichment sources against every account rather than one, and suppress the result against your CRM. None of it is billed on top of the £4,000.
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
                MULTIPLE LINES ON EVERY ACCOUNT, SO WE ARE CALLING PEOPLE WITH A REASON TO TALK RATHER THAN PEOPLE WHO MATCH A JOB TITLE.
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
                image: `${import.meta.env.BASE_URL}ciaran-hastie.png`
              },
              {
                quote: "Absolute pleasure working with the lads. It was refreshing to chat to others on the same page as me, and there’s definitely potential for exciting projects together.",
                author: "Ben Guttridge",
                role: "Managing director",
                industry: "Auxo Digital",
                image: `${import.meta.env.BASE_URL}ben-guttridge.png`
              },
              {
                quote: "Hands on and transparent throughout, with constant communication and a genuinely collaborative approach.",
                author: "Alex Monro",
                role: "Director",
                industry: "Devon Energy",
                image: `${import.meta.env.BASE_URL}alex-monro.jpeg`
              },
              {
                quote: "We've seen a 50% increase in qualified appointments. The quality of the leads is significantly higher than our previous agency.",
                author: "Kevin Lynch",
                role: "CEO",
                industry: "ICS LA",
                image: `${import.meta.env.BASE_URL}kevin-lynch.jpeg`
              },
              {
                quote: "Finally, an agency that understands the creative industry. Their messaging feels authentic and resonates with design leaders.",
                author: "Wes Townsend",
                role: "Creative Director",
                industry: "Garbanzo",
                image: `${import.meta.env.BASE_URL}wes-townsend.jpeg`
              },
              {
                quote: "They helped us uncover new angles and alternative routes to market we hadn’t previously considered.",
                author: "Aman Mittal",
                role: "CEO",
                industry: "Transcount",
                image: `${import.meta.env.BASE_URL}aman-mittal.jpeg`
              },
              {
                quote: "Once the system was in place, everything clicked. Getting real time confirmation from the SDR team that they’d found a match was a genuine win.",
                author: "Jean Middleton",
                role: "Chief Creative Producer",
                industry: "Suite Creative",
                image: `${import.meta.env.BASE_URL}jean-middleton.png`
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
