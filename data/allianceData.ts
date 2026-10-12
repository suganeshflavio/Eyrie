export interface AllianceFirm {
  id: string;
  name: string;
  tagline: string;
  hub: string;
  specialties: string[];
  description: string;
  badge: string;
}

export const ALLIANCE_FIRMS: AllianceFirm[] = [
  {
    id: "v-verma-co",
    name: "V. Verma & Co.",
    tagline: "Direct Tax Litigation & Appellate Jurisprudence",
    hub: "New Delhi · Barakhamba Road",
    specialties: [
      "Direct Tax Litigation",
      "NCLT & NCLAT Corporate Dispute Resolution",
      "High Court & ITAT Counsel Briefing",
      "Section 148 Reassessment Litigation",
    ],
    description:
      "A storied North India practice with extensive appearance credentials before the Income Tax Appellate Tribunal (ITAT), National Company Law Tribunal (NCLT), and High Courts across major benches.",
    badge: "Appellate Advocacy",
  },
  {
    id: "ssal-associates",
    name: "S S A L Associates",
    tagline: "Industrial Audit, Cost Management & Central Operations",
    hub: "Salem Hub · Bengaluru Office",
    specialties: [
      "Multidisciplinary Industrial Audit",
      "Cost Accounting & Operational MIS",
      "MSME Financial Advisory & Restructuring",
      "Central Practice Management Hub",
    ],
    description:
      "Anchored at the strategic Salem central hub with strong presence in Bengaluru, driving full-spectrum manufacturing assurance, cost intelligence, and statutory controllership for mid-market and enterprise clients.",
    badge: "Central Practice Hub",
  },
  {
    id: "r-sridharan-co",
    name: "R. Sridharan & Company",
    tagline: "Statutory Bank Assurance, SEBI Compliance & Transactions",
    hub: "Chennai (Mount Road) · Pan-India",
    specialties: [
      "Statutory Bank Assurance & Inspection",
      "SEBI Compliance & Capital Markets",
      "Transaction Structuring & Valuation",
      "Corporate Governance & Secretarial Audits",
    ],
    description:
      "Established capital markets and institutional banking practice with senior standing in statutory assurance, listed company compliance, M&A transaction due diligence, and financial asset valuation.",
    badge: "Assurance & Governance",
  },
];

export const NETWORK_METRICS = [
  { value: "20+", label: "Chartered Accountants", sub: "Senior partners and multidisciplinary specialists" },
  { value: "9", label: "Cities Across India", sub: "Central hub in Salem + 8 regional offices" },
  { value: "8", label: "Practice Areas", sub: "Integrated single-window advisory disciplines" },
  { value: "17+", label: "Industries Served", sub: "Advisory across manufacturing, BFSI, tech & MSME" },
];

export const CORE_PILLARS = [
  {
    letter: "K",
    title: "Knowledge",
    description: "Technical precision, continuous statutory jurisprudence learning, and deep regulatory depth across complex corporate domains.",
  },
  {
    letter: "I",
    title: "Integrity",
    description: "Uncompromising fiduciary ethics, absolute transparency, and partner-led accountability that builds inter-generational institutional trust.",
  },
  {
    letter: "N",
    title: "Innovation",
    description: "Technology-driven workflows, data analytics, real-time compliance radar tracking, and paperless cloud documentation architectures.",
  },
];
