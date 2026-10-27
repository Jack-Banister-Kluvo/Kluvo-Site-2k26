import React from 'react';
import { CaseStudyMeta } from '../data';
import { Hero, Section, Lead, Statement, Prose, FactList, CtaPanel, ResultCards, FieldGrid } from '../primitives';

const ManagedPrint: React.FC<{ study: CaseStudyMeta }> = ({ study }) => (
  <>
    <Hero
      study={study}
      eyebrow="Industry · Managed print & office technology"
      callout={{
        label: 'In short',
        text: "Managed print is bought on renewal cycles, so most businesses you call aren't ready today. We run discovery calling that captures the renewal date, incumbent, device estate and decision-maker on every call, and builds you a pipeline with dates on it.",
      }}
      chips={['Large UK businesses', 'Discovery calling']}
      statsLabel="At a glance"
    />

    <div className="mt-16">
      <Section label="The record we build">
        <Lead>A “not right now” is still useful, as long as you know when “now” is. Every conversation fills in the same four fields.</Lead>
        <FieldGrid
          title="Every discovery call"
          subtitle="what we capture"
          right="Shared with you weekly"
          fields={[
            ['Current supplier', 'Who holds the contract today', "So you know who you're up against"],
            ['Contract end date', "When it's up for renewal", 'So you know when to call back'],
            ['Device estate', "What they're running", 'So the proposal is sized right'],
            ['Decision-maker', 'Who signs it off', 'So the meeting is with the right person'],
          ]}
        />
      </Section>

      <Section label="A pipeline with dates on it">
        <Lead>Instead of a list of maybes, you get a dated pipeline. We qualify on contract end date and work it in order.</Lead>
        <ResultCards
          items={[
            { eyebrow: 'Priority', title: '6–12 months', text: 'Contracts ending soon enough to act, with time to switch. These become meetings.', dark: true },
            { eyebrow: 'Dated', title: 'Further out', text: 'Logged with the date, and called back as each renewal window opens.' },
            { eyebrow: 'Every week', title: 'Shared with you', text: 'Renewal dates, incumbents, device estates and decision-makers, alongside booked meetings.' },
          ]}
        />
      </Section>

      <Section label="Why cost per call matters">
        <Statement strong="Discovery calling is a volume game." muted="If every call costs too much, it never scales." />
        <Prose>
          <p>Most calls in this sector won't book a meeting today. They capture a date for later. So the cost of each call decides whether the whole approach is worth it.</p>
          <p>We keep the cost per call down while holding the quality of every record, with close UK-side management and a quality check on each one.</p>
        </Prose>
      </Section>

      <Section label="Who we call">
        <FactList
          title="Who we call"
          rows={[
            ['Target', 'Businesses with managed print and hardware contracts'],
            ['Timing', 'Contracts ending in the next 6–12 months'],
            ['Titles', 'Heads of IT, IT managers and IT directors'],
            ['Company size', 'Large businesses with over 200 devices'],
          ]}
        />
      </Section>
    </div>

    <CtaPanel
      title="Selling on renewal cycles?"
      bullets={[
        'Most of your market is locked in today, but not forever',
        'You want renewal dates and incumbents, not just meetings',
        'You need calling volume at a cost that makes sense',
      ]}
    />
  </>
);

export default ManagedPrint;
