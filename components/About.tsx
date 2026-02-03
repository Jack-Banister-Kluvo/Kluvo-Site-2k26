
import React from 'react';

const TEAM = [
  {
    name: "Jack Banister",
    role: "Managing Director",
    image: `${import.meta.env.BASE_URL}jack-banister.jpg`,
    desc: "4 years in high-ticket B2B sales. Jack designs outbound systems built for predictable pipeline."
  },
  {
    name: "Joseph Kennedy",
    role: "Marketing Director",
    image: `${import.meta.env.BASE_URL}joseph-kennedy.png`,
    desc: "Rich experience Enterprise sales, specialising in sales training and development of SDRs."
  }
];

const VALUES = [
  {
    title: "Radical Transparency",
    desc: "We don't hide behind 'black box' methodologies. You get a live dashboard of every email sent, every call recorded, and every lead researched.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Velocity as standard",
    desc: "Most agencies take 3 months to ramp up. We launch in 14 days and aim for your first booked discovery call by day 30.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Human-Led, AI-Enhanced",
    desc: "AI identifies the signal; humans craft the narrative. We believe the most effective B2B outreach is deeply personal and empathetic.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Trimmed Hero Section Scale */}
      <section className="relative pt-16 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-[#fcfcfc]">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[10%] right-[10%] w-[50%] h-[50%] bg-[#2e4841]/5 blur-[120px] rounded-full animate-liquid" />
          <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-[#9daaa6]/5 blur-[100px] rounded-full animate-liquid" style={{ animationDelay: '-5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-4 animate-reveal" style={{ animationDelay: '0.1s' }}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#61756f] bg-white border border-slate-100 px-6 py-2 rounded-full shadow-sm">
              The Human Engine
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-tighter leading-[0.9] text-[#0d2b23] mb-6 animate-reveal" style={{ animationDelay: '0.3s' }}>
            B2B <br /> Pipeline <span className="text-[#2e4841] italic relative">Generation<span className="absolute -bottom-2 left-0 w-full h-2 bg-[#2e4841]/5 rounded-full" /></span>.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#61756f] font-medium leading-relaxed animate-reveal" style={{ animationDelay: '0.5s' }}>
            We started Kluvo with a simple realization: B2B companies don’t need more leads, they need more <span className="text-[#0d2b23] font-bold">meaningful conversations</span>. We built the agency we wished we could hire.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { val: "8", label: "Countries" },
            { val: "100+", label: "Success Stories" },
            { val: "$12M+", label: "Revenue Generated" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-5xl font-black text-[#0d2b23] tracking-tighter">{stat.val}</p>
              <p className="text-xs font-black uppercase tracking-widest text-[#61756f]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Mission - Split Screen with Video Embed */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#2e4841]/5 rounded-[56px] blur-2xl group-hover:bg-[#2e4841]/10 transition-all duration-700" />

            <div className="relative rounded-[48px] shadow-2xl overflow-hidden aspect-[16/9] lg:h-[600px] w-full bg-slate-900">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-meeting-in-a-bright-office-41221-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white z-10">
                <p className="text-lg font-medium italic">"We treat your pipeline as if it were our own. No isolated KPIs, only business outcomes."</p>
                <p className="mt-4 font-black text-sm uppercase tracking-widest">— Jack Banister, Founder</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px]">Our Philosophy</span>
              <h2 className="text-5xl font-black text-[#0d2b23] tracking-tighter leading-tight">We bridge the gap between product and person.</h2>
              <p className="text-xl text-[#61756f] leading-relaxed font-medium">
                The modern B2B buyer is overwhelmed. They don't want to be 'sold' to; they want to be understood. At Kluvo, we focus on the intersection of data-driven intent and empathetic human outreach.
              </p>
              <p className="text-xl text-[#61756f] leading-relaxed font-medium">
                We don't just find emails; we find the reasons why those people should talk to you. Our methodology is built on years of identifying the subtle signals that precede a major software purchase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm">
                <h4 className="font-black text-[#0d2b23] mb-4">The Result</h4>
                <p className="text-[#61756f] font-medium leading-relaxed">Shorter sales cycles, higher average contract values, and a predictable revenue engine.</p>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm">
                <h4 className="font-black text-[#0d2b23] mb-4">The Standard</h4>
                <p className="text-[#61756f] font-medium leading-relaxed">Dedicated SDRs who actually know your industry. We are not a call center.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0d2b23] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-6">Our Core Values</h2>
            <p className="text-[#9daaa6] text-xl font-medium max-w-2xl mx-auto">The principles that guide every email we write and every call we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <div key={i} className="p-12 rounded-[40px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-[#2e4841] flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black mb-6">{v.title}</h3>
                <p className="text-[#9daaa6] leading-relaxed font-medium text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-[#0d2b23] tracking-tighter mb-6">Built by Practitioners</h2>
          <p className="text-[#61756f] text-xl font-medium max-w-2xl mx-auto">Meet the specialists driving your outbound success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {TEAM.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/5] mb-8 w-full max-w-md shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b23]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="max-w-sm">
                <h4 className="text-2xl font-black text-[#0d2b23] mb-2">{member.name}</h4>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2e4841] mb-5">{member.role}</p>
                <p className="text-[#61756f] text-base font-medium leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the team CTA */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-16 rounded-[56px] border border-slate-100 bg-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e4841]/5 rounded-full -mr-16 -mt-16" />
            <h3 className="text-4xl font-black text-[#0d2b23] mb-6">Join our remote-first team</h3>
            <p className="text-[#61756f] text-lg font-medium leading-relaxed mb-10">We're always looking for senior sales strategists, data scientists, and creative writers who want to redefine B2B outbound.</p>
            <a
              href="https://tally.so/r/3xqP2d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0d2b23] font-black uppercase tracking-[0.4em] text-xs hover:text-[#2e4841] transition-colors border-b-2 border-[#0d2b23] pb-1"
            >
              join our team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
