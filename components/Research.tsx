
import React, { useState, useEffect } from 'react';

interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  pdfUrl: string;
}

interface ResearchProps {
  onCtaClick: () => void;
}

const RESEARCH_DATA: ResearchItem[] = [
  {
    id: '1',
    slug: 'outbound-paradox',
    title: 'The Outbound Paradox: Why More Activity Is Yielding Less Pipeline',
    description: 'Revenue leaders are investing more than ever in tools and expanding sales teams, yet returns are diminishing. SDRs spend just 28% of their time selling, cold email reply rates have fallen to 1–5%, and cold calling success rates sit at 2.3%. This paper dissects why brute-force volume is failing and how to fix the system.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/outbound-paradox.pdf`,
  },
  {
    id: '2',
    slug: 'hidden-cost-of-hiring',
    title: 'The Hidden Cost of In-House SDR Teams That Never Shows Up on a P&L',
    description: 'Standard P&L statements capture salaries and commissions but conceal a vast ecosystem of indirect expenses, operational friction, and crippling opportunity costs. This white paper deconstructs the Total Cost of Ownership of an in-house SDR team with a framework for strategic investment.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/hidden-cost-of-hiring.pdf`,
  },
  {
    id: '3',
    slug: 'pipeline-illusion',
    title: "The Pipeline Illusion: Why 'More Leads' Is the Wrong Fix for a Broken Sales Process",
    description: "When revenue stalls, the default reaction is 'we need more leads.' This knee-jerk response masks deeper problems. True growth comes from optimizing the conversion engine, not pouring more volume into the funnel. We dissect the financial, operational, and cultural costs of a bloated pipeline.",
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/pipeline-illusion.pdf`,
  },
  {
    id: '4',
    slug: 'execution-imperative',
    title: 'The Execution Imperative: Why Revenue Leaders Are Prioritizing Action Over Architecture',
    description: 'Despite aggressive investment in specialized tools, growth stalls between $10M and $20M ARR. Fragmented stacks introduce friction, disconnected data, and misaligned incentives. This paper explores why RevOps is the connective tissue that replaces reactive management with disciplined execution.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/execution-imperative.pdf`,
  },
  {
    id: '5',
    slug: 'speed-to-lead',
    title: 'Speed to Lead 2.0: Driving Competitive Advantage Through Instant Engagement',
    description: 'The B2B revenue landscape has shifted from a race of persistence to a race of near-zero latency. Consumer conditioning has compressed acceptable responsiveness from hours to seconds. This paper makes the case for AI-orchestrated, 24/7 engagement engines that treat responsiveness as a core product feature.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/speed-to-lead.pdf`,
  },
  {
    id: '6',
    slug: 'follow-up-problem',
    title: "Why Sales Teams Don't Have a Lead Problem — They Have a Follow-Up Problem",
    description: 'Organizations exhaust capital to generate inquiries, only to treat those hard-won leads as disposable. 48% of salespeople never attempt a single follow-up, and only 25% contact a lead more than once. This paper provides a strategic framework for maximizing lead utilization over lead volume.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/follow-up-problem.pdf`,
  },
  {
    id: '7',
    slug: 'high-performing-outbound-teams',
    title: 'What High-Performing Outbound Teams Do Differently (That No One Talks About)',
    description: 'Sales cycles have extended 40%+ while deal sizes have declined. Automation-driven volume has become a commodity. High-performing teams optimize for value-based velocity: fewer, better conversations that convert faster. This paper reveals the data revolution eliminating the research bottleneck.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/high-performing-outbound-teams.pdf`,
  },
  {
    id: '8',
    slug: 'invisible-tax-sales-pipelines',
    title: 'The Invisible Tax: The Multi-Dimensional Cost of Late and Inaccurate Sales Pipelines',
    description: 'A late pipeline is not bad luck — it is a clinical breakdown in Revenue Operations governance. When the forecast fails, it compromises fiscal stability. This paper provides a RevOps framework for pipeline predictability and yield, dismantling the 3x pipeline myth.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/invisible-tax-sales-pipelines.pdf`,
  },
  {
    id: '9',
    slug: 'architecture-of-stillness',
    title: 'The Architecture of Stillness: Leveraging Strategic Silence for Sales Mastery',
    description: 'In a business environment dominated by relentless noise, silence has emerged as a high-value professional asset. Behavioral science reveals that intentional stillness creates cognitive margin, authority, and space for authentic disclosure. This paper transforms professional interactions through mastery of strategic pause.',
    date: 'Jan 2026',
    readTime: 'White Paper',
    pdfUrl: `${import.meta.env.BASE_URL}research/architecture-of-stillness.pdf`,
  },
];

// Helper to find a paper by slug
export const getResearchBySlug = (slug: string): ResearchItem | undefined => {
  return RESEARCH_DATA.find(item => item.slug === slug);
};

export const getAllResearchSlugs = (): string[] => {
  return RESEARCH_DATA.map(item => item.slug);
};

const Research: React.FC<ResearchProps & { selectedSlug?: string | null }> = ({ onCtaClick, selectedSlug }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const selectedArticle = selectedSlug ? getResearchBySlug(selectedSlug) : null;

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    if (selectedArticle) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticle]);

  // Individual article view
  if (selectedArticle) {
    return (
      <div className="bg-white min-h-screen">
        <div
          className="fixed top-20 left-0 h-1 bg-[#2e4841] z-[60] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-32">
          <button
            onClick={() => {
              window.history.pushState({}, '', '/research');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 text-[#9daaa6] hover:text-[#0d2b23] font-bold text-xs uppercase tracking-widest mb-12 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Research
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-[#fcfcfc] border border-slate-100 text-[#2e4841] text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                    White Paper
                  </span>
                  <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-[0.2em]">
                    {selectedArticle.date} • Kluvo Research
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-[#0d2b23] leading-tight tracking-tighter mb-10">
                  {selectedArticle.title}
                </h1>

                <p className="text-[#61756f] text-xl leading-relaxed mb-10 font-medium">
                  {selectedArticle.description}
                </p>

                {/* PDF Embed */}
                <div className="rounded-[32px] overflow-hidden border border-slate-100 bg-[#fcfcfc]">
                  <iframe
                    src={selectedArticle.pdfUrl}
                    className="w-full border-0"
                    style={{ height: '80vh' }}
                    title={selectedArticle.title}
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={selectedArticle.pdfUrl}
                    download
                    className="inline-flex items-center gap-3 bg-[#0d2b23] text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#2e4841] active:scale-95 shadow-xl shadow-[#0d2b23]/20"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                  <a
                    href={selectedArticle.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#0d2b23] border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all hover:border-[#2e4841] active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#0d2b23] rounded-[32px] p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-black mb-4">Ready to scale?</h3>
                  <p className="text-[#9daaa6] mb-8 font-medium">Get a custom strategy audit for your outbound sales engine.</p>
                  <button
                    data-cal-link="sales-team/sales-discovery"
                    data-cal-namespace="sales-discovery"
                    data-cal-config='{"layout":"month_view","theme":"light"}'
                    className="w-full bg-white text-[#0d2b23] py-4 rounded-xl font-black transition-all hover:scale-105 active:scale-95"
                  >
                    Book Discovery Call
                  </button>
                </div>

                <div className="bg-white border border-slate-100 rounded-[32px] p-8">
                  <h4 className="font-black text-[#0d2b23] mb-6 uppercase text-[10px] tracking-[0.2em]">More Research</h4>
                  <div className="space-y-6">
                    {RESEARCH_DATA.filter(a => a.slug !== selectedSlug).slice(0, 3).map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          window.history.pushState({}, '', `/research/${item.slug}`);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                          window.scrollTo(0, 0);
                        }}
                        className="text-left group block"
                      >
                        <span className="text-[10px] font-black uppercase text-[#2e4841] block mb-2">White Paper</span>
                        <h5 className="font-bold text-[#0d2b23] group-hover:text-[#2e4841] transition-colors leading-tight">{item.title}</h5>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Listing view
  const highlightedItem = RESEARCH_DATA[0];
  const remainingItems = RESEARCH_DATA.slice(1);

  const navigateToArticle = (slug: string) => {
    window.history.pushState({}, '', `/research/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#61756f] font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
            Kluvo Insights & Research
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#0d2b23] mb-8 tracking-tighter">
            Research <span className="text-[#2e4841] italic">&</span> White Papers
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10 space-y-12">
        {/* Highlighted Featured Item */}
        {highlightedItem && (
          <div
            onClick={() => navigateToArticle(highlightedItem.slug)}
            className="group cursor-pointer bg-white border border-slate-100 rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#2e4841]/20 transition-all duration-700"
          >
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#2e4841] text-[10px] font-black uppercase tracking-widest bg-[#fcfcfc] px-4 py-2 rounded-full border border-slate-100">White Paper</span>
                <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-widest">{highlightedItem.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#0d2b23] mb-6 leading-[1.1] tracking-tighter group-hover:text-[#2e4841] transition-colors">
                {highlightedItem.title}
              </h2>
              <p className="text-[#61756f] text-lg font-medium leading-relaxed mb-10 line-clamp-4">
                {highlightedItem.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#9daaa6] uppercase tracking-widest">{highlightedItem.readTime}</span>
                </div>
                <div className="text-[#0d2b23] font-black text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                  Read paper
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center transition-all group-hover/btn:bg-[#0d2b23] group-hover/btn:text-white group-hover/btn:translate-x-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid for remaining items */}
        {remainingItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {remainingItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigateToArticle(item.slug)}
                className="group cursor-pointer bg-white border border-slate-100 rounded-[32px] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#2e4841]/20 transition-all duration-500"
              >
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#2e4841] text-[10px] font-black uppercase tracking-widest">White Paper</span>
                    <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0d2b23] mb-4 leading-tight group-hover:text-[#2e4841] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#61756f] text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="text-[#9daaa6] text-xs font-bold uppercase tracking-widest">{item.readTime}</span>
                    <div className="text-[#0d2b23] font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read paper
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Research;
