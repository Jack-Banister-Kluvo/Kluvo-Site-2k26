import React from 'react';
import { CaseStudyMeta, findCaseStudy } from './data';
import { usePageMeta } from './navigation';
import IntelligentAI from './pages/IntelligentAI';
import Eventr from './pages/Eventr';
import ServiceNow from './pages/ServiceNow';
import AuxoDigital from './pages/AuxoDigital';
import HRTech from './pages/HRTech';
import ManagedIT from './pages/ManagedIT';
import ManagedPrint from './pages/ManagedPrint';
import CrmHubspot from './pages/CrmHubspot';
import CommercialSolar from './pages/CommercialSolar';
import PublicSector from './pages/PublicSector';

const PAGES: Record<string, React.FC<{ study: CaseStudyMeta }>> = {
  'intelligent-ai': IntelligentAI,
  eventr: Eventr,
  'servicenow-itsm-specialist': ServiceNow,
  'auxo-digital': AuxoDigital,
  'hr-tech-recruitment-software': HRTech,
  'managed-it-cyber-security': ManagedIT,
  'managed-print-office-technology': ManagedPrint,
  'crm-hubspot-consultancy': CrmHubspot,
  'commercial-solar-renewables': CommercialSolar,
  'public-sector-bid-intelligence': PublicSector,
};

const Detail: React.FC<{ study: CaseStudyMeta }> = ({ study }) => {
  usePageMeta(study.title, study.metaDescription);
  const Page = PAGES[study.slug];
  return (
    <article className="bg-[#fcfcfc] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Page study={study} />
      </div>
    </article>
  );
};

/** Renders a case study detail page, or nothing if the slug is unknown (App falls back to the hub). */
const CaseStudyPage: React.FC<{ slug: string }> = ({ slug }) => {
  const study = findCaseStudy(slug);
  if (!study || !PAGES[study.slug]) return null;
  return <Detail key={study.slug} study={study} />;
};

export const hasCaseStudy = (slug: string | null) => !!slug && !!findCaseStudy(slug) && !!PAGES[slug];

export default CaseStudyPage;
