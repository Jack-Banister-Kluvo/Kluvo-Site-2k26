
import React, { useState, useEffect } from 'react';

type Category = 'All' | 'White Papers' | 'Market Research' | 'Articles';

interface ResearchItem {
  id: string;
  category: Category;
  title: string;
  description: string;
  content?: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  imageUrl: string;
}

interface ResearchProps {
  onCtaClick: () => void;
}

const RESEARCH_DATA: ResearchItem[] = [
  {
    id: '1',
    category: 'White Papers',
    title: 'The Omnichannel Blueprint for 2026',
    description: 'How we synchronized Email, LinkedIn, and Voice to triple lead velocity for Series B SaaS companies. This comprehensive study analyzes over 500 successful campaigns to determine the optimal touchpoint sequence for maximum conversion.',
    content: [
      "In the rapidly evolving B2B landscape, a single-channel approach is no longer sufficient. Our research into 500+ successful campaigns reveals that prospects who engage with a brand across three or more platforms are 4x more likely to convert into high-value opportunities.",
      "The core of the 2026 Blueprint is synchronization. It's not just about sending an email and making a call; it's about the timing and the narrative thread that connects them. We found that a LinkedIn touchpoint followed by a personalized email within 2 hours increases response rates by 65%.",
      "Strategic voice touchpoints, or 'warm calls', remain the highest-converting second step. By leveraging intent data from email opens, our SDRs are able to reach out at the exact moment a prospect is considering the solution.",
      "Data silos are the enemy of growth. By integrating your CRM with advanced intent tracking, you can map the entire journey from the first LinkedIn visit to the final discovery call. This white paper breaks down the technical stack required to maintain this level of precision at scale."
    ],
    date: 'Oct 2025',
    readTime: '15 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Strategy',
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    category: 'Market Research',
    title: 'B2B Sales Trends: The Death of the Mass Blast',
    description: 'A data-driven analysis of 50M+ cold outreach sequences and why hyper-personalization is no longer optional.',
    content: [
      "The era of 'spray and pray' has officially ended. Deliverability filters and sophisticated prospect filtering have rendered generic outreach obsolete. Our analysis shows that sequences with less than 20% personalization see an average bounce rate of 12%.",
      "Hyper-personalization doesn't just mean adding a 'Company Name' tag. It means referencing specific industry challenges, recent company news, and even personal achievements of the decision-maker found in recent interviews or social posts.",
      "We recommend a 'Quality over Quantity' approach: 20 highly-researched prospects per week consistently outperforms 200 automated blasts in terms of total closed revenue."
    ],
    date: 'Sep 2025',
    readTime: '12 min read',
    author: {
      name: 'Marcus Thorne',
      role: 'Data Scientist',
      avatar: 'https://i.pravatar.cc/150?u=marcus'
    },
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    category: 'Articles',
    title: 'Mastering the First 5 Seconds of a Cold Call',
    description: 'Psychology-backed opening statements that keep prospects on the line and double meeting booking rates.',
    content: [
      "The first five seconds of a cold call determine the next five minutes. Most SDRs fail because they lead with a defensive posture or a generic sales pitch that triggers the prospect's 'flight' response.",
      "Our training data shows that using a 'Permission-Based Opener' (PBO) like 'I know I'm an interruption, do you have 30 seconds for me to tell you why I called?' actually builds rapport by respecting the prospect's time.",
      "Tone of voice is 80% of the battle. Aim for 'calm confidence'. If you sound like you belong in the room, the prospect is significantly more likely to keep listening."
    ],
    date: 'Aug 2025',
    readTime: '8 min read',
    author: {
      name: 'Elena Rodriguez',
      role: 'SDR Training Lead',
      avatar: 'https://i.pravatar.cc/150?u=elena'
    },
    imageUrl: 'https://images.unsplash.com/photo-152202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    category: 'Articles',
    title: 'Navigating B2B GTM Strategy for 2026',
    description: 'A deep dive into why your current go-to-market strategy might be failing and how to pivot.',
    content: [
      "Go-to-market strategies are shifting from volume-led to value-led. It is no longer about how many doors you can knock on, but which doors you choose to approach.",
      "Segmentation is the first pillar of modern GTM. Understanding exactly where your product fits in the ecosystem allows for much more effective resource allocation."
    ],
    date: 'July 2025',
    readTime: '10 min read',
    author: {
      name: 'David Kim',
      role: 'Growth Advisor',
      avatar: 'https://i.pravatar.cc/150?u=david'
    },
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  }
];

const Research: React.FC<ResearchProps> = ({ onCtaClick }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const selectedArticle = RESEARCH_DATA.find(a => a.id === selectedArticleId);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    if (selectedArticleId) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticleId]);

  const filteredData = activeCategory === 'All' 
    ? RESEARCH_DATA 
    : RESEARCH_DATA.filter(item => item.category === activeCategory);

  const highlightedItem = filteredData[0];
  const remainingItems = filteredData.slice(1);

  const categories: Category[] = ['All', 'White Papers', 'Market Research', 'Articles'];

  if (selectedArticleId && selectedArticle) {
    return (
      <div className="bg-white min-h-screen">
        <div 
          className="fixed top-20 left-0 h-1 bg-[#2e4841] z-[60] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-32">
          <button 
            onClick={() => {
              setSelectedArticleId(null);
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
                    {selectedArticle.category}
                  </span>
                  <span className="text-[#9daaa6] text-[10px] font-black uppercase tracking-[0.2em]">
                    {selectedArticle.date} • {selectedArticle.readTime}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-[#0d2b23] leading-tight tracking-tighter mb-10">
                  {selectedArticle.title}
                </h1>
                
                {/* Author section removed for a cleaner look */}

                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content?.map((para, i) => (
                    <p key={i} className="text-[#61756f] text-xl leading-relaxed mb-8 font-medium">
                      {para}
                    </p>
                  ))}
                  <div className="bg-[#fcfcfc] border border-slate-100 rounded-[32px] p-10 my-16">
                    <h3 className="text-2xl font-black text-[#0d2b23] mb-4">Key Takeaways</h3>
                    <ul className="space-y-4">
                      {[
                        "Focus on high-intent signals before manual outreach.",
                        "Synchronized multi-channel touchpoints triple conversion speed.",
                        "Hyper-personalization is the only way to beat modern filters."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-[#2e4841] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-1">{i + 1}</div>
                          <p className="text-[#61756f] font-medium">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#0d2b23] rounded-[32px] p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-black mb-4">Ready to scale?</h3>
                  <p className="text-[#9daaa6] mb-8 font-medium">Get a custom strategy audit for your outbound sales engine.</p>
                  <button 
                    onClick={onCtaClick}
                    className="w-full bg-white text-[#0d2b23] py-4 rounded-xl font-black transition-all hover:scale-105 active:scale-95"
                  >
                    Book Discovery Call
                  </button>
                </div>
                
                <div className="bg-white border border-slate-100 rounded-[32px] p-8">
                  <h4 className="font-black text-[#0d2b23] mb-6 uppercase text-[10px] tracking-[0.2em]">Related Research</h4>
                  <div className="space-y-6">
                    {RESEARCH_DATA.filter(a => a.id !== selectedArticleId).slice(0, 2).map(item => (
                      <button 
                        key={item.id} 
                        onClick={() => {
                          setSelectedArticleId(item.id);
                          window.scrollTo(0, 0);
                        }}
                        className="text-left group"
                      >
                        <span className="text-[10px] font-black uppercase text-[#2e4841] block mb-2">{item.category}</span>
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

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-[#0d2b23] text-white border-[#0d2b23] shadow-lg shadow-[#0d2b23]/20'
                  : 'bg-white text-[#61756f] border-slate-100 hover:border-[#2e4841] hover:text-[#2e4841]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10 space-y-12">
        {/* Highlighted Featured Item */}
        {highlightedItem && (
          <div 
            onClick={() => {
              setSelectedArticleId(highlightedItem.id);
              window.scrollTo(0, 0);
            }}
            className="group cursor-pointer bg-white border border-slate-100 rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-2xl hover:border-[#2e4841]/20 transition-all duration-700 min-h-[500px]"
          >
            <div className="lg:w-3/5 overflow-hidden">
              <img 
                src={highlightedItem.imageUrl} 
                alt={highlightedItem.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#2e4841] text-[10px] font-black uppercase tracking-widest bg-[#fcfcfc] px-4 py-2 rounded-full border border-slate-100">{highlightedItem.category}</span>
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
                  {/* Author avatar and name removed */}
                  <div>
                    <span className="text-[10px] font-bold text-[#9daaa6] uppercase tracking-widest">{highlightedItem.readTime}</span>
                  </div>
                </div>
                <div className="text-[#0d2b23] font-black text-xs uppercase tracking-widest flex items-center gap-3 group/btn">
                  Read article
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

        {/* Sub-grid for remaining items */}
        {remainingItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {remainingItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => {
                  setSelectedArticleId(item.id);
                  window.scrollTo(0, 0);
                }}
                className="group cursor-pointer bg-white border border-slate-100 rounded-[32px] overflow-hidden flex flex-col hover:shadow-xl hover:border-[#2e4841]/20 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#2e4841] text-[10px] font-black uppercase tracking-widest">{item.category}</span>
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
                      Read more
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
