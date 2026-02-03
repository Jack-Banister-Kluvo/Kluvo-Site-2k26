
import React from 'react';

interface ResearchControlProps {
  onExit: () => void;
}

const ResearchControl: React.FC<ResearchControlProps> = ({ onExit }) => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-[#0d2b23] tracking-tighter">Research Control Center</h1>
            <p className="text-[#61756f] font-medium mt-2">Manage your white papers, articles, and market research.</p>
          </div>
          <button 
            onClick={onExit}
            className="bg-[#0d2b23] text-white px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#0d2b23]/20 self-start"
          >
            Exit Admin Mode
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9daaa6]">Total Articles</span>
              <p className="text-5xl font-black text-[#0d2b23] mt-2">12</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9daaa6]">Monthly Views</span>
              <p className="text-5xl font-black text-[#2e4841] mt-2">8.4k</p>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9daaa6]">Avg. Read Time</span>
              <p className="text-5xl font-black text-orange-500 mt-2">11m</p>
            </div>
          </div>

          {/* Table Area */}
          <div className="lg:col-span-2 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-black text-[#0d2b23]">Recent Publications</h3>
              <button className="text-sm font-black text-[#2e4841] hover:underline">+ Create New</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#fcfcfc]">
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[#9daaa6]">Title</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[#9daaa6]">Status</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-[#9daaa6]">Engagement</th>
                    <th className="p-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { title: "The Omnichannel Blueprint", status: "Published", views: "2.1k" },
                    { title: "B2B Sales Trends 2026", status: "Published", views: "1.8k" },
                    { title: "Cold Calling Mastery", status: "Draft", views: "-" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[#fcfcfc] transition-colors">
                      <td className="p-6 font-bold text-[#0d2b23]">{row.title}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${row.status === 'Published' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="p-6 text-[#61756f] font-medium">{row.views} views</td>
                      <td className="p-6 text-right">
                        <button className="text-[#9daaa6] hover:text-[#0d2b23] transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 text-center bg-[#fcfcfc] border-t border-slate-50">
              <button className="text-[10px] font-black uppercase tracking-widest text-[#61756f] hover:text-[#0d2b23] transition-colors">View All Articles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchControl;
