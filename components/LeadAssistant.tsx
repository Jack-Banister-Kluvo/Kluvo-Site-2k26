
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface LeadAssistantProps {
  onClose: () => void;
}

const LeadAssistant: React.FC<LeadAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! I'm the Kluvo Sales Strategist AI. I can help you understand our lead gen methodology or help you get a quote. What's your company size and primary goal today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are an expert sales strategist at Kluvo (#1 B2B lead generation agency). 
          Your goal is to qualify leads and answer questions about Kluvo's services:
          1. Appointment Setting (from $8,000/mo)
          2. Omnichannel approach (Email, LinkedIn, Cold Calling)
          3. Fast results (launch in 14 days, results in 30 days)
          4. Performance: Guaranteed appointments (e.g. 100/year for starter).
          Be professional, direct, and persuasive. If a user asks about pricing, explain the starter package and value props. 
          Encourage them to 'book a call' or 'get a proposal'. Always refer to yourself as the Kluvo AI.`,
        }
      });

      const aiText = response.text || "I'm sorry, I encountered an error. Please try again or book a direct call with our team.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "It seems my brain is temporarily offline. How about we just hop on a quick discovery call? You can reach us at sales@kluvo.io." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#fcfcfc]">
      {/* Header */}
      <div className="p-6 border-b flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0d2b23] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-[#0d2b23]/20 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-7 h-7 fill-none stroke-white" style={{ strokeWidth: 12, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M45 20 H35 C25 20 20 25 20 35 V65 C20 75 25 80 35 80 H45" />
              <path d="M45 50 L75 20 M45 50 L75 80" />
            </svg>
          </div>
          <div>
            <h3 className="font-black text-[#0d2b23] leading-none">Kluvo Strategist AI</h3>
            <p className="text-xs font-bold text-[#61756f] uppercase tracking-widest mt-1">Kluvo Virtual Assistant</p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#9daaa6] hover:text-[#2e4841] p-2 rounded-xl transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-5 rounded-[24px] ${
              msg.role === 'user' 
                ? 'bg-[#2e4841] text-white shadow-lg shadow-[#2e4841]/10' 
                : 'bg-white border border-slate-100 text-[#0d2b23]'
            }`}>
              <p className="leading-relaxed font-medium whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-5 rounded-[24px] flex gap-1">
              <div className="w-1.5 h-1.5 bg-[#9daaa6] rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-[#9daaa6] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-1.5 bg-[#9daaa6] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t bg-white">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="Type your question..."
            rows={2}
            className="w-full bg-[#fcfcfc] border border-slate-200 rounded-2xl p-4 pr-16 focus:ring-2 focus:ring-[#2e4841]/20 focus:border-[#2e4841] outline-none transition-all resize-none font-medium text-[#0d2b23]"
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute bottom-4 right-4 bg-[#2e4841] hover:bg-[#0d2b23] disabled:bg-slate-200 text-white p-2 rounded-xl transition-all shadow-lg active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-center text-[10px] font-bold text-[#9daaa6] uppercase tracking-widest mt-4">
          Powered by Kluvo proprietary AI
        </p>
      </div>
    </div>
  );
};

export default LeadAssistant;
