
import React, { useState } from 'react';


interface LeadMagnetWallProps {
  onExit: () => void;
}

// Config Object
const config = {
  tag: "Free Resource",
  title: "The Outbound Script That Booked 1,000+ Qualified B2B Meetings",
  subtitle: "The exact cold call framework our SDR team uses to consistently book qualified meetings for SaaS & IT companies.",
  image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
  features: [
    "The exact opener behind 1,000+ booked meetings",
    "Pain amplification that gets prospects to qualify themselves",
    "Objection neutralisation before your AEs take the call",
    "The rehash formula that increases show rates"
  ],
  cta: "Download the Cold Call Framework",
  successTitle: "Check your inbox!",
  successSubtitle: "We've sent the B2B Outbound Playbook to your email. It's time to build your pipeline."
};

const LeadMagnetWall: React.FC<LeadMagnetWallProps> = ({ onExit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Texture & Grain */}
      <div className="grain-overlay opacity-[0.02] pointer-events-none" />
      
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[5%] left-[15%] w-[70%] h-[70%] bg-[#2e4841]/5 blur-[200px] animate-liquid" />
        <div className="absolute bottom-[0%] right-[0%] w-[60%] h-[60%] bg-[#9daaa6]/5 blur-[180px] animate-liquid" style={{ animationDelay: '-5s' }} />
      </div>

      <nav className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
        <button onClick={onExit} className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#0d2b23] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-white" style={{ strokeWidth: 12, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M45 20 H35 C25 20 20 25 20 35 V65 C20 75 25 80 35 80 H45" />
              <path d="M45 50 L75 20 M45 50 L75 80" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#0d2b23] lowercase">kluvo</span>
        </button>
        <button 
          onClick={onExit}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-[#61756f] hover:text-[#0d2b23] transition-colors"
        >
          Exit Preview
        </button>
      </nav>

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy & Preview */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
                {config.tag}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#0d2b23] leading-[1.1] tracking-tighter mb-6">
                {config.title}
              </h1>
              <p className="text-lg text-[#61756f] font-medium leading-relaxed">
                {config.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {config.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#2e4841] flex-shrink-0 flex items-center justify-center text-white mt-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0d2b23] font-bold text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt={`User ${i}`} />
                ))}
              </div>
              <p className="text-xs font-bold text-[#61756f] uppercase tracking-widest leading-relaxed">
                Join 2,400+ sales leaders who <br/>already downloaded this.
              </p>
            </div>
          </div>

          {/* Right Side: The Wall (Form) */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: '0.2s' }}>
            {/* Visual Preview Behind Wall */}
            <div className="absolute -top-12 -right-12 w-64 h-80 bg-[#0d2b23]/5 rounded-[40px] -rotate-6 blur-2xl -z-10" />
            
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[48px] p-10 md:p-14 shadow-[0_40px_100px_rgba(13,43,35,0.08)]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-[#0d2b23] mb-2">Unlock the Script Framework</h3>
                    <p className="text-sm text-[#61756f] font-medium">Enter your details to access the 1,000+ meeting script.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#9daaa6] mb-2 block ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#fcfcfc] border border-slate-100 rounded-2xl p-4 text-[#0d2b23] font-bold focus:ring-2 focus:ring-[#2e4841]/10 focus:border-[#2e4841] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#9daaa6] mb-2 block ml-1">Work Email</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full bg-[#fcfcfc] border border-slate-100 rounded-2xl p-4 text-[#0d2b23] font-bold focus:ring-2 focus:ring-[#2e4841]/10 focus:border-[#2e4841] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="glint-effect w-full bg-[#0d2b23] hover:bg-[#2e4841] text-white py-5 rounded-2xl text-lg font-black transition-all shadow-xl shadow-[#0d2b23]/20 disabled:bg-slate-300 active:scale-95 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      config.cta
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#9daaa6] font-bold uppercase tracking-[0.2em]">
                    Privacy guaranteed. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="text-center py-10 animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-[#2e4841] rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-[#2e4841]/30">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-[#0d2b23] mb-4">{config.successTitle}</h3>
                  <p className="text-[#61756f] font-medium leading-relaxed mb-10">
                    {config.successSubtitle}
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-black uppercase tracking-widest text-[#0d2b23] border-b-2 border-[#0d2b23] pb-1 hover:text-[#2e4841] hover:border-[#2e4841] transition-all"
                  >
                    Back to form
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Quote / Trust Bar */}
      <div className="absolute bottom-12 w-full text-center px-6">
        <p className="text-[10px] font-black text-[#9daaa6] uppercase tracking-[0.4em]">
          TRUSTED BY LEADERS AT <span className="text-[#0d2b23] ml-2">HUBSPOT • SALESFORCE • ZOOMINFO • APOLLO</span>
        </p>
      </div>
    </div>
  );
};

export default LeadMagnetWall;
