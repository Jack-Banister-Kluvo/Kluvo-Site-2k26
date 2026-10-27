import React from 'react';
import { CaseStudyMeta } from '../data';
import {
  Hero, Section, Lead, ProseWithFacts, FactList, CtaPanel, Conversations, ResultCards,
  DiagramFrame, Node, Eyebrow,
} from '../primitives';

const StakeholderMap: React.FC = () => (
  <DiagramFrame>
    {/* Desktop: hub and spoke */}
    <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] grid-rows-[auto_2rem_auto_2rem_auto] items-center">
      <div className="col-start-3 row-start-1"><Node title="Where the decision sits" sub="and who signs it off" /></div>
      <div className="col-start-3 row-start-2 justify-self-center w-px h-full bg-[#61756f]" aria-hidden="true" />
      <div className="col-start-1 row-start-3"><Node title="Who we spoke to" sub="role and what they own" /></div>
      <div className="col-start-2 row-start-3 w-8 h-px bg-[#61756f]" aria-hidden="true" />
      <div className="col-start-3 row-start-3"><Node title="Meeting handed over" sub="with the full picture" dark /></div>
      <div className="col-start-4 row-start-3 w-8 h-px bg-[#61756f]" aria-hidden="true" />
      <div className="col-start-5 row-start-3"><Node title="Who else is involved" sub="RevOps, IT, finance" /></div>
      <div className="col-start-3 row-start-4 justify-self-center w-px h-full bg-[#61756f]" aria-hidden="true" />
      <div className="col-start-3 row-start-5"><Node title="Is a change planned?" sub="migration or consolidation" /></div>
    </div>
    {/* Mobile: the handover first, then what comes with it */}
    <div className="md:hidden space-y-3">
      <Node title="Meeting handed over" sub="with the full picture" dark />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-l-2 border-[#9daaa6] pl-3">
        <Node title="Who we spoke to" sub="role and what they own" />
        <Node title="Who else is involved" sub="RevOps, IT, finance" />
        <Node title="Where the decision sits" sub="and who signs it off" />
        <Node title="Is a change planned?" sub="migration or consolidation" />
      </div>
    </div>
  </DiagramFrame>
);

const CrmHubspot: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Industry · CRM & HubSpot consultancy"
      callout={{
        label: 'In short',
        text: "CRM projects start with a trigger: a migration, an acquisition, a new region. We look for those triggers, open on the mess they cause rather than on the product, and hand every meeting over with a map of who's involved.",
      }}
      chips={['UK mid-market and enterprise', 'Cold calling · Email · LinkedIn']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="Three triggers we listen for">
        <ResultCards
          items={[
            { eyebrow: 'Trigger', title: 'A Salesforce or Dynamics migration', text: 'The platform is up for review, and so is the partner.' },
            { eyebrow: 'Trigger', title: 'An acquisition', text: 'Two businesses, two CRMs, and nobody agrees on the numbers.' },
            { eyebrow: 'Trigger', title: 'A new region', text: "Growth that the current setup wasn't built for." },
          ]}
        />
      </Section>

      <Section label="Symptoms, not software">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <Eyebrow className="mb-3">What we don't lead with</Eyebrow>
            <ul className="list-disc pl-5 space-y-2 text-[#61756f]">
              <li>Platform features</li>
              <li>Partner tiers and badges</li>
              <li>“Have you thought about HubSpot?”</li>
            </ul>
          </div>
          <div className="bg-[#0d2b23] rounded-2xl p-6">
            <Eyebrow className="!text-[#9daaa6] mb-3">What we open on</Eyebrow>
            <ul className="list-disc pl-5 space-y-2 text-white marker:text-[#9daaa6]">
              <li>Siloed data across teams</li>
              <li>Three versions of the pipeline</li>
              <li>Reporting rebuilt in spreadsheets every month</li>
            </ul>
          </div>
        </div>
        <Conversations
          items={[
            ['Systems that pulled apart', '“A lot of revenue leaders I speak to grew into new regions or bought another business, and now marketing, sales and service are each running their own system.”'],
            ['Platform live, value flat', "“Others went live on a new CRM a year or two ago, but nobody's touched the setup since, and the reporting still gets rebuilt in spreadsheets.”"],
          ]}
          footLabel="The question"
          foot="“If the board asked for one pipeline number tomorrow, how many systems would someone have to pull it from?”"
        />
      </Section>

      <Section label="The stakeholder map">
        <Lead>CRM decisions are made by committees, and the buying cycle is long. So we don't just book a meeting. We capture who else is involved and where the decision sits, and that map comes with every meeting we hand over.</Lead>
        <StakeholderMap />
      </Section>

      <Section label="Who we call">
        <ProseWithFacts
          facts={
            <FactList
              title="Who we call"
              rows={[
                ['Company size', 'Mid-market and enterprise, often multi-region or multi-division'],
                ['Sectors', 'Manufacturing, professional services, technology, financial services, education, logistics and real estate'],
                ['Titles', 'CMOs, CROs, Heads of RevOps and Sales Ops, and IT leaders evaluating CRM'],
              ]}
            />
          }
        >
          <p>Senior buyers sit behind gatekeepers, so calls are backed by email and LinkedIn touches. By the time we ring, they've usually seen the name.</p>
        </ProseWithFacts>
      </Section>
    </div>

    <CtaPanel
      title="Selling CRM projects into the mid-market?"
      bullets={[
        'Your buyers only move when something triggers it',
        'Decisions are made by committees, not one person',
        'You want meetings handed over with the full picture',
      ]}
    />
  </>
);

export default CrmHubspot;
