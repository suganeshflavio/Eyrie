export interface VideoSlide {
  id: string;
  src: string;
  tagline: string;
  title: string;
  titleAccent: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  pillar: string;
}

export const VIDEO_SLIDES: VideoSlide[] = [
  {
    id: "alliance-overview",
    src: "/videos/alliance-overview.mp4",
    tagline: "India's Integrated Professional Services Network",
    title: "Trusted Advice for",
    titleAccent: "17+ Core Sectors",
    description:
      "Formed by three esteemed Chartered Accountancy partnerships working as one cohesive national practice. Over 20 Chartered Accountants across 9 cities.",
    ctaText: "Talk to a Partner",
    ctaLink: "/contact",
    secondaryCtaText: "Explore Services",
    secondaryCtaLink: "/services",
    pillar: "National Network Hub",
  },
  {
    id: "tax-litigation",
    src: "/videos/tax-litigation.mp4",
    tagline: "Appellate Advocacy & Jurisprudence",
    title: "High-Stakes Direct Tax &",
    titleAccent: "NCLT Litigation",
    description:
      "Defensible dispute resolution before ITAT, High Courts, and NCLT. Anchored by North India litigation veterans V. Verma & Co. with senior counsel representation.",
    ctaText: "Consult Litigation Team",
    ctaLink: "/services/direct-taxes-and-company-law-litigations",
    secondaryCtaText: "Our Practice Areas",
    secondaryCtaLink: "/services",
    pillar: "Appellate Mastery",
  },
  {
    id: "assurance-audit",
    src: "/videos/assurance-audit.mp4",
    tagline: "Uncompromising Fiduciary Governance",
    title: "Partner-Led Statutory &",
    titleAccent: "Industrial Assurance",
    description:
      "Independent statutory audits, internal financial controls (IFC), and bank assurance adhering strictly to ICAI Standards on Auditing and Ind AS protocols.",
    ctaText: "Assurance Capabilities",
    ctaLink: "/services/assurance-audit",
    secondaryCtaText: "Why Team Eyrie",
    secondaryCtaLink: "/why-team-eyrie",
    pillar: "Fiduciary Rigor",
  },
  {
    id: "corporate-advisory",
    src: "/videos/corporate-advisory.mp4",
    tagline: "Strategic Growth & Scale",
    title: "Corporate Governance, Due Diligence &",
    titleAccent: "Transaction Advisory",
    description:
      "SEBI compliance, registered valuations (IBBI), buy-side due diligence, and Virtual CFO support designed to scale enterprise value securely.",
    ctaText: "Transaction Advisory",
    ctaLink: "/services/transaction-advisory",
    secondaryCtaText: "Meet Our Partners",
    secondaryCtaLink: "/people",
    pillar: "Strategic Advisory",
  },
];
