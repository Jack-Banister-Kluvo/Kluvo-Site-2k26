import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, ProseWithFacts, FactList, CallScript, CtaPanel, Caption, Aside,
  DiagramFrame, Node, Flow, FlowArrow, ResultCards, Eyebrow,
} from '../primitives';

const BeforeAfter: React.FC = () => (
  <DiagramFrame>
    <div className="space-y-6">
      {[
        {
          label: 'Before',
          nodes: [
            <Node title="Opener: replace it" sub="pitched as a switch" />,
            <Node title="We already have one" sub="true for about 3 in 4" />,
            <Node title="Call ends" sub="nothing left to discuss" />,
          ],
        },
        {
          label: 'After',
          nodes: [
            <Node title="Opener: get more value" sub="from what you pay for" />,
            <Node title="Gaps come up" sub="config, adoption, ROI" />,
            <Node title="Next step agreed" sub="health-check or meeting" dark />,
          ],
        },
      ].map((row, i) => (
        <div key={row.label} className={`grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-3 md:gap-4 items-center ${i > 0 ? 'pt-6 border-t border-slate-200' : ''}`}>
          <Eyebrow>{row.label}</Eyebrow>
          <Flow nodes={row.nodes} />
        </div>
      ))}
    </div>
  </DiagramFrame>
);

const DiallerDiagram: React.FC = () => (
  <DiagramFrame>
    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
      <div className="md:flex-1"><Node title="Dialler export" sub="8,500+ dials" /></div>
      <FlowArrow />
      <div className="md:flex-1"><Node title="Sorted by talk time" sub="not the dialler's own ‘answered’ flag" /></div>
      <div className="flex md:flex-col items-center justify-center text-[#61756f] py-1 md:py-0" aria-hidden="true">
        <svg className="hidden md:block w-8 h-24" viewBox="0 0 32 96" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 48h10M10 48V14h20M10 48v34h20M25 9l5 5-5 5M25 77l5 5-5 5" />
        </svg>
        <svg className="md:hidden w-4 h-4 rotate-90" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 8h13M10 4l4 4-4 4" /></svg>
      </div>
      <div className="md:flex-[1.3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
        <Node title="Tiered call list" sub="1,000+ numbers, with rest windows and best times to call" dark />
        <Node title="Do-not-call list" sub="200+ numbers suppressed" />
      </div>
    </div>
  </DiagramFrame>
);

const ServiceNow: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Case study · IT services · ServiceNow & ITSM"
      callout={{
        label: 'The turning point',
        text: 'Around three in four engaged prospects already ran a mature ITSM tool. Once the pitch moved from “replace it” to “get more from what you already pay for”, conversations went further.',
        dark: true,
      }}
      chips={['ServiceNow partner, UK']}
      statsLabel="Results so far"
    />

    <div className="mt-16">
      <Section label="The client">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Sectors', 'Enterprise and public sector, including infrastructure, financial services, policing and further education'],
                ['Titles', 'IT service management leads, Heads of IT and service desk owners'],
                ['Company size', 'Larger organisations, where ServiceNow tends to be the premium option'],
                ['Triggers', "Legacy ITSM tools, a service desk switch, or a ServiceNow setup that isn't delivering"],
              ]}
            />
          }
        >
          <p>The client is a UK ServiceNow partner. It implements, optimises and advises on ServiceNow, runs managed services on the platform, and works across adjacent ITSM tools.</p>
          <p>ServiceNow is the premium option in IT service management. That makes it a strong product to sell, and a hard first conversation. Most of the organisations worth calling already use something, whether that's ServiceNow itself, Jira Service Management, Freshservice, Ivanti or a home-grown setup.</p>
        </ProseWithFacts>
      </Section>

      <Section label="The turning point">
        <Lead>The first script assumed prospects were missing a proper platform. The call reviews showed the opposite: most already had one, and the honest answer to “do you need a new tool?” was no. When the SDR pivoted to the value they were getting from the tool they already paid for, the same people kept talking.</Lead>
        <BeforeAfter />
        <CallScript
          frameworkTitle="The opener now"
          framework="two ways in, whatever they run today"
          opener="{Name}, you're probably going to hate me for this, it's actually a sales call around IT service management. Hang up or give me 30 seconds, up to you."
          lanes={[
            { title: 'Have a platform, not getting the value', text: 'Some have invested in a platform, but somewhere between implementation and today the ROI drifted. The config hasn\'t kept up with the business, or adoption fell off.' },
            { title: 'No platform, running on workarounds', text: 'Others are managing service requests through email, spreadsheets or tools that were never built for it, and the cracks are starting to show.' },
          ]}
          disarm="I'm assuming this is the point you tell me life is completely stress-free?"
          diagnose="Is this something that came out of the original implementation, or has the business changed and the platform just hasn't kept up?"
        />
      </Section>

      <Section label="Calls, not dials">
        <Lead>The dialler marked most calls as “answered”, but many of those lasted a few seconds. So we stopped trusting the flag and sorted every call by how long people actually talked. That showed which numbers were worth another try, which ones never would be, and when people were most likely to pick up.</Lead>
        <DiallerDiagram />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            ['Afternoons beat late morning', 'The busiest calling hour was one of the weakest, so call times moved.'],
            ['Every number gets a rest', "A rest window before each redial, so prospects aren't called into the ground."],
            ['Dead ends stay closed', 'Wrong numbers, retired contacts and do-not-call requests are suppressed for good.'],
          ].map(([t, d]) => (
            <div key={t} className="bg-[#eef2f0] rounded-2xl p-5">
              <h3 className="font-bold text-[#0d2b23] mb-2">{t}</h3>
              <p className="text-sm text-[#2e4841] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Beyond the phone">
        <Lead>In the public sector, a lot of ITSM buying happens through tenders and frameworks, not cold conversations. So alongside the calling, we mapped the market on paper too.</Lead>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#0d2b23] text-white rounded-2xl p-6">
            <p className="text-4xl font-black tracking-tight mb-1">370+</p>
            <h3 className="font-bold mb-2">Contract awards mapped</h3>
            <p className="text-sm text-[#9daaa6] leading-relaxed">From UK public sector spend and tender data, each sorted as relevant, borderline or not relevant to the client's services.</p>
          </div>
          {[
            ['A renewal pipeline', 'Which contracts end when, so the client can reach a buyer before the re-tender notice goes out.'],
            ['A competitor map', 'Who wins this work today, split into delivery partners and licence resellers.'],
            ['A UK ITSM market view', "ServiceNow's position against the main alternatives, and where ageing tools are being retired."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-[#0d2b23] mb-2">{t}</h3>
              <p className="text-sm text-[#2e4841] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <Aside>Even the search terms needed care. “Cherwell” is an ITSM tool, but it's also a district council in Oxfordshire, and the raw data mixed the two up. Every row was checked before it reached the client.</Aside>
      </Section>

      <Section label="Three plays for a premium sale">
        <div className="border-t border-slate-200">
          {[
            ['They rate ServiceNow, but not their setup', "We lead with an independent health-check or advisory offer. It's a low-risk first step that doesn't ask anyone to admit they bought the wrong thing."],
            ["They're mid-switch and asking about fit", 'The follow-up email leads with the client\'s partner credentials, so the answer to “why you?” lands before the meeting.'],
            ['Procurement decides at RFP stage', "A phone call alone won't win the meeting. We find out where the buyer is in the RFP, who sits on the evaluation panel and what they're scoring on, so the client can send a tailored info pack that keeps them in the process."],
          ].map(([when, what]) => (
            <div key={when} className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 py-5 border-b border-slate-200">
              <div>
                <Eyebrow className="mb-1">When</Eyebrow>
                <h3 className="font-bold text-[#0d2b23]">{when}</h3>
              </div>
              <p className="text-sm text-[#2e4841] leading-relaxed">{what}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Every call scored">
        <Lead>Every call that turned into a real conversation was reviewed, scored out of 10, and tagged with the reason it did or didn't book. That fed three views, each for a different person.</Lead>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            ['For the sales director', 'Director dashboard', "One page: what happened, why calls didn't book, and which of those could have been saved."],
            ['For the SDR', 'Action list', 'Open leads only, prioritised, with what happened last time and the next step.'],
            ['For both teams', 'All calls scored', 'Every conversation with its objection, score and verdict.'],
          ].map(([who, t, d]) => (
            <div key={t} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-[#eef2f0] px-5 py-3"><Eyebrow>{who}</Eyebrow></div>
              <div className="p-5">
                <h3 className="font-bold text-[#0d2b23] mb-2">{t}</h3>
                <p className="text-sm text-[#2e4841] leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <Caption>The review is where the turning point came from. When “we already have a tool” kept showing up, it was clear the opener needed to change.</Caption>
      </Section>

      <Section label="What came back">
        <ResultCards
          items={[
            { eyebrow: 'Live opportunity', title: 'A project at RFP stage', text: 'With a UK infrastructure organisation, handed over with a full brief on the buyer and the process.', dark: true },
            { eyebrow: 'Public sector', title: 'A police force meeting', text: 'Booked in a sector where ageing ITSM tools are common.' },
            { eyebrow: 'Word of mouth', title: 'Referrals', text: 'To other decision-makers, passed on by people we called.' },
          ]}
        />
      </Section>

      <Section label="What's next">
        <Lead>Older ITSM tools are being retired, and public sector organisations running them are open to a conversation about what comes next. The next phase focuses there, using the renewal pipeline to time the calls.</Lead>
      </Section>
    </div>

    <CtaPanel
      title="Selling a premium platform into a crowded market?"
      bullets={[
        'Most of your buyers already have a tool, and “replace it” isn\'t landing',
        'Public sector tenders and frameworks matter to your pipeline',
        'You want every conversation scored, not just meetings counted',
      ]}
    />
  </>
);

export default ServiceNow;
