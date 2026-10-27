import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, Statement, Prose, ProseWithFacts, FactList, StepCards, ChannelChips,
  CallScript, CtaPanel, DiagramFrame, Node, Flow, ResultCards, Eyebrow,
} from '../primitives';

const Split: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-stretch">
    <div className="bg-[#0d2b23] rounded-2xl p-5">
      <Eyebrow className="!text-[#9daaa6] mb-3">Kluvo runs</Eyebrow>
      <ul className="space-y-2">
        {['Recruit and onboard two SDRs', 'Manage them day to day', 'Call and pitch the prospect', 'Book the free audit'].map((t) => (
          <li key={t} className="bg-white/10 text-white text-sm font-semibold rounded-lg px-3.5 py-2.5">{t}</li>
        ))}
      </ul>
    </div>
    <div className="flex md:flex-col items-center justify-center gap-2 text-[#61756f] text-center py-2">
      <svg className="w-5 h-5 rotate-90 md:rotate-0 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M1 8h13M10 4l4 4-4 4" /></svg>
      <span className="text-[11px] font-semibold leading-snug md:max-w-[6rem]">Handoff: audit booked with the decision-maker</span>
    </div>
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <Eyebrow className="mb-3">Auxo runs</Eyebrow>
      <ul className="space-y-2">
        {['Run the audit', 'Build the custom marketing plan'].map((t) => (
          <li key={t} className="bg-[#eef2f0] text-[#0d2b23] text-sm font-semibold rounded-lg px-3.5 py-2.5">{t}</li>
        ))}
        <li className="bg-[#0d2b23] text-white text-sm font-semibold rounded-lg px-3.5 py-2.5">Close the client</li>
      </ul>
    </div>
  </div>
);

const ColdCallFlow: React.FC = () => (
  <DiagramFrame>
    <Flow
      nodes={[
        <Node title="Cold call" sub="about their ad spend" />,
        <Node title="Right person?" dashed />,
        <Node title="Free audit booked" sub="with the decision-maker" />,
        <Node title="Custom plan built" sub="by Auxo" />,
        <Node title="Client signed" sub="2 so far, £40k average LTV" dark />,
      ]}
      arrowLabels={[undefined, 'yes']}
    />
    <div className="mt-4 md:w-2/5 md:ml-[14%] flex items-center gap-3">
      <span className="text-[10px] font-semibold text-[#61756f] whitespace-nowrap" aria-hidden="true"><span className="md:hidden">Right person? no →</span><span className="hidden md:inline">no ↓</span></span>
      <Node title="Find the right person" sub="and call them next ↺" className="flex-1" />
    </div>
  </DiagramFrame>
);

const AuxoDigital: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Case study · Marketing agency · Managed sales team"
      callout={{
        label: 'What changed',
        text: "Kluvo took over the whole top of the funnel, from hiring the callers to booking audits. The founder only steps in when there's a decision-maker ready to talk.",
      }}
      chips={['Performance marketing agency', 'Warrington, UK']}
      statsLabel="Results so far"
    />

    <div className="mt-16">
      <Section label="Before Kluvo">
        <Statement strong="Growth ran through one person." muted="The founder ran the agency and found its clients." />
        <Prose>
          <p>Auxo Digital is a UK marketing agency based in Warrington. It runs PPC across Google and Bing Ads, paid social, SEO and email marketing, and builds a free custom marketing plan for each prospect before they work together.</p>
          <p>New business was founder-led, so growth was capped by how many hours one person had. Hiring a sales team wasn't a quick fix either.</p>
        </Prose>
        <div className="border-t border-slate-200">
          {[
            ['No setup to recruit or manage reps.', 'Kluvo takes on recruitment, management and admin, so the founder is no longer the bottleneck.'],
            ['Building a team from scratch takes months.', 'Tested scripts and targeting put SDRs on the phones within weeks.'],
          ].map(([t, d]) => (
            <div key={t} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 py-5 border-b border-slate-200">
              <h3 className="font-bold text-[#0d2b23]">{t}</h3>
              <p className="text-sm text-[#2e4841] leading-relaxed flex gap-2"><span aria-hidden="true">→</span><span>{d}</span></p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Who does what now">
        <Lead>We gave Auxo a plug-and-play sales team. Kluvo owns everything up to the moment a decision-maker agrees to the free audit. From there, Auxo does what it does best.</Lead>
        <Split />
      </Section>

      <Section label="The offer that opens doors">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Sectors', 'Brands that grow through paid search, paid social and email marketing'],
                ['Titles', 'Founders, managing directors and marketing leads'],
                ['Company size', 'Small and mid-sized UK businesses'],
                ['Spend signal', "Active ad spend that isn't returning what it should"],
              ]}
            />
          }
        >
          <p>Auxo already had a strong hook: a free audit and a custom marketing plan for every prospect.</p>
          <p>But a free audit only works if the person on the other end can act on it. So every call is aimed at booking the audit with the decision-maker, not whoever picks up.</p>
        </ProseWithFacts>
      </Section>

      <Section label="How the calls sound">
        <Lead>Nobody wants a call from another marketing agency. So the calls don't lead with Auxo. They lead with the prospect's own ad spend.</Lead>
        <CallScript
          framework="talk about their spend, not our agency"
          opener="I've got you on a list of 15 construction companies I'm looking to work with. Do you mind if I take 30 seconds to explain why I've called you specifically? Is that fair?"
          lanes={[
            { title: 'Spend going up, leads not following', text: "A lot of MDs I speak to are spending more on Google and Meta every quarter, but the leads aren't growing with it." },
            { title: "An agency that doesn't care", text: "Others have an agency in place, but they get a monthly report and not much else, and nobody can tell them what's actually working." },
          ]}
          disarm="I'm guessing neither of those sounds familiar?"
          diagnose="If you had to guess, what percentage of last month's spend actually turned into a conversation with a buyer?"
        />
      </Section>

      <Section label="From cold call to signed client">
        <Lead>If the person on the phone can't act on the audit, the SDR doesn't book it anyway. They find out who can, and call them next.</Lead>
        <ColdCallFlow />
      </Section>

      <Section label="Plug-and-play">
        <StepCards
          steps={[
            { when: 'Days 1–10', title: 'Set-up', text: "Two dedicated SDRs recruited and onboarded, starting from Kluvo targeting and scripts already proven on other campaigns. No hiring round, no training budget on Auxo's side." },
            { when: 'Month 1 onwards', title: 'Live calling', text: 'Kluvo runs all the sales admin and the day-to-day management. Auxo stays close through a weekly call and a written report every Monday.' },
          ]}
        />
        <ChannelChips items={['Cold calling', 'Free audit offer', 'Managed SDRs']} />
      </Section>

      <Section label="What came back">
        <ResultCards
          items={[
            { eyebrow: 'Signed', title: '2 clients', text: 'From opportunities Kluvo created.', dark: true },
            { eyebrow: 'Value', title: '£40k each', text: 'Average lifetime value per client.' },
            { eyebrow: 'Time back', title: 'No more bottleneck', text: "Prospecting, booking and SDR management sit with Kluvo, so the founder's time goes on audits and closing." },
          ]}
        />
      </Section>

      <Section label="What's next">
        <Lead>The free audit has proven itself as the way in. Next, every new outbound list will open with it.</Lead>
      </Section>
    </div>

    <CtaPanel
      title="Is the founder still your sales team?"
      bullets={[
        'New business still depends on one or two senior people',
        'You have a strong offer, like a free audit, but not enough of the right people seeing it',
        'You want a sales team without hiring, training and managing one yourself',
      ]}
    />
  </>
);

export default AuxoDigital;
