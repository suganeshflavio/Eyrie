export interface AdvantagePoint {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export const WHY_TEAM_EYRIE: AdvantagePoint[] = [
  {
    number: "01",
    title: "Three-Firm Synergy, One Cohesive Practice",
    subtitle: "Combining North, South, and Capital Market Traditions",
    description:
      "Unlike traditional standalone firms that are restricted by geographical reach or narrow domain specializations, Team Eyrie brings together the collective legacy of V. Verma & Co. (Delhi litigation), S S A L Associates (Salem industrial hub), and R. Sridharan & Company (Chennai banking assurance). You receive national-scale power without losing the agility and personal dedication of a trusted local advisor.",
    bulletPoints: [
      "20+ Chartered Accountants collaborating in a synchronized multi-city network",
      "Seamless knowledge exchange between tax tribunals, banking boards, and manufacturing hubs",
      "Single point of executive contact with nationwide operational reach",
    ],
    icon: "users-2",
  },
  {
    number: "02",
    title: "Partner-Led Accountability on Every Engagement",
    subtitle: "Direct Senior Counsel Attention, Not Delegated to Trainees",
    description:
      "At large global consulting networks, mid-market clients often find their critical matters handed over to junior staff. At Team Eyrie, every audit sign-off, tax advisory memorandum, and tribunal appearance is personally directed and reviewed by a Senior Partner with 15 to 25+ years of specialized practice.",
    bulletPoints: [
      "Direct phone and boardroom access to partner leads",
      "Rigorous 4-eye partner quality reviews for all tax and assurance deliverables",
      "Long-term partner continuity across decades of business growth",
    ],
    icon: "award",
  },
  {
    number: "03",
    title: "Single-Window Multidisciplinary Expertise",
    subtitle: "CAs, Company Secretaries, Cost Accountants & Registered Valuers",
    description:
      "Modern corporate problems do not fit neatly into one statutory bucket. A corporate acquisition touches tax law, MCA company filings, IBBI valuation rules, FEMA cross-border regulations, and stamp duty acts simultaneously. Team Eyrie solves this under one roof with qualified CAs, CS, CMAs, and IBBI Valuers working in tandem.",
    bulletPoints: [
      "No conflicting advice between separate CA, CS, and legal firms",
      "Integrated transaction execution from letter of intent to closing filings",
      "Comprehensive defense during multi-department statutory scrutiny",
    ],
    icon: "layers",
  },
  {
    number: "04",
    title: "Tech-Enabled Real-Time Compliance Radar",
    subtitle: "Never Miss a Due Date with Proprietary Tracking Workflows",
    description:
      "We replace archaic reactive compliance with cloud-orchestrated proactive monitoring. Our proprietary All-India Statutory Compliance Radar tracks GST, TDS, EPF, and MCA deadlines in real time, synchronizing ledger data with government portals and giving leadership peace of mind.",
    bulletPoints: [
      "Automated GSTR-2B reconciliations eliminating blocked input tax credits",
      "Digital cloud document repository with enterprise grade encryption",
      "Proactive advance tax and filing reminder alerts 15 days before deadlines",
    ],
    icon: "cpu",
  },
  {
    number: "05",
    title: "Defensible Fiduciary Positions Built to Withstand Scrutiny",
    subtitle: "Substance-Over-Form Statutory Rigor",
    description:
      "Aggressive aggressive tax schemes collapse under scrutiny and invite crippling penalties. Team Eyrie focuses on defensible, statutory tax planning anchored in judicial jurisprudence, legislative intent, and complete evidentiary documentation that stands up before CIT(A), ITAT, and High Courts.",
    bulletPoints: [
      "Comprehensive judicial precedent benchmarking for all tax positions taken",
      "Detailed workpapers prepared anticipating future assessment queries",
      "Zero compromise on ICAI ethical codes and fiduciary integrity standards",
    ],
    icon: "shield-check",
  },
];
