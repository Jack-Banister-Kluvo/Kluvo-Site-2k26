import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, Statement, ProseWithFacts, FactList, StepCards, ChannelChips,
  CallScript, CtaPanel, Caption, ArrowColumns, DiagramFrame, Node, Flow, Eyebrow,
} from '../primitives';

const BuildOrPlugIn: React.FC = () => (
  <DiagramFrame>
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[5.5rem_1fr] gap-3 md:gap-4 items-center">
        <Eyebrow>In-house</Eyebrow>
        <Flow
          nodes={[
            <Node title="Write job ads" />,
            <Node title="Interview, hire" />,
            <Node title="Train, ramp up" />,
            <Node title="First calls" sub="months later" />,
          ]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[5.5rem_1fr] gap-3 md:gap-4 items-center pt-6 border-t border-slate-200">
        <Eyebrow>With Kluvo</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-3 items-center">
          <Flow nodes={[<Node title="Onboarding" sub="days 1–10" />, <Node title="Calling" sub="from month 1" dark />]} />
          <p className="text-xs text-[#61756f] text-center md:text-left">trained SDRs, no hiring cycle</p>
        </div>
      </div>
    </div>
  </DiagramFrame>
);

const HRTech: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Industry · HR tech & recruitment software"
      callout={{
        label: 'In short',
        text: 'UK HR and talent leaders get pitched constantly, and in regulated sectors they have to defend every hiring decision. We open on the problems they actually talk about, deal with trust and auditability early, and do it without you hiring a single SDR.',
      }}
      chips={['UK market', 'Cold calling · Email · LinkedIn']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="Who buys">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Buyers', 'HR, talent acquisition and recruitment leaders'],
                ['Company size', 'Mid-market and enterprise organisations'],
                ['Sectors', 'Recruitment companies and high-volume, regulated employers'],
                ['Market', 'The UK'],
              ]}
            />
          }
        >
          <p>Hiring software is a considered purchase. The buyer isn't just asking “will this save time?” They're asking “can I defend this if a decision is challenged?”</p>
          <p>That's even more true for AI screening, where bias and auditability come up before features do.</p>
        </ProseWithFacts>
      </Section>

      <Section label="What HR buyers tell us">
        <Statement strong="Two problems come up again and again." muted="Too many CVs, and decisions nobody can explain." />
        <ArrowColumns
          cols={2}
          items={[
            { title: 'Applications through the roof.', text: 'Since candidates started writing CVs with ChatGPT, applications per role have jumped. Every CV looks perfect, and the first sift takes longer than ever.' },
            { title: "Decisions they can't defend.", text: 'If a shortlisting decision were challenged, nobody could show why a candidate was rejected.' },
          ]}
        />
      </Section>

      <Section label="Build or plug in">
        <Lead>To build outbound the usual way, an HR tech company has to recruit, interview, train and ramp up a sales team before the first real conversation happens. Growth moves at the speed of hiring.</Lead>
        <BuildOrPlugIn />
        <Caption>With Kluvo, the SDRs are already trained and proven on our own campaigns. Onboarding is about your product and your buyers, not about learning to sell.</Caption>
      </Section>

      <Section label="How we run it">
        <StepCards
          steps={[
            { when: 'Days 1–10', title: 'Onboarding', text: 'We agree who to call, build the list of UK HR and talent leaders, and write the script around your product and the questions buyers will ask about bias and audit trails.' },
            { when: 'Month 1 onwards', title: 'Live outreach', text: 'Two dedicated SDRs calling, backed by email and LinkedIn, with a weekly call and a written report every Monday.' },
          ]}
        />
        <ChannelChips items={['Cold calling', 'Email', 'LinkedIn']} />
      </Section>

      <Section label="How the calls sound">
        <Lead>The pitch opens two ways in, built on the two problems above. Questions about bias and auditability are handled on the call, before they can stall a deal later.</Lead>
        <CallScript
          framework="trust first, features later"
          opener="We haven't spoken before. Can I fly through? I decided to call you, and you let me know if it's relevant. Is that fair?"
          lanes={[
            { title: 'Applications through the roof', text: 'Most talent leads I speak to have seen applications per role jump since everyone started writing CVs with ChatGPT, and every CV now looks perfect.' },
            { title: "Decisions you can't defend", text: 'Others are more worried about the audit side. If a shortlisting decision was challenged, nobody could show why a candidate was rejected.' },
          ]}
          disarm="I'm guessing you'll tell me neither of those is a problem?"
          diagnose="On your last high-volume role, how many applications came in, and how long did the first sift take?"
        />
      </Section>
    </div>

    <CtaPanel
      title="Selling hiring software in the UK?"
      bullets={[
        'You sell to HR, talent or recruitment leaders',
        'Your product is a considered, compliance-led purchase that needs real conversations',
        'You want a sales team on the phones without hiring, training and managing one',
      ]}
    />
  </>
);

export default HRTech;
