export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Direct Tax" | "GST" | "Corporate Law" | "Assurance" | "Transactions";
  date: string;
  readTime: string;
  summary: string;
  author: string;
  authorRole: string;
  keyTakeaways: string[];
  content: string;
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "section-148-reassessment-framework",
    slug: "section-148-reassessment-framework",
    title: "Navigating High-Stakes Reassessment Notices under Section 148: Judicial Trends & Defense Protocols",
    category: "Direct Tax",
    date: "October 08, 2026",
    readTime: "7 min read",
    summary:
      "A strategic analysis of the post-amendment Section 148A framework, Supreme Court precedents on information sharing, and essential procedural safeguards for corporate assessees.",
    author: "CA Girish Bhatt",
    authorRole: "Senior Partner, Direct Tax Litigation",
    keyTakeaways: [
      "Strict 3-year vs 10-year limitation boundaries and the ₹50 Lakh escaped income threshold.",
      "Right to full underlying documentation before responding to Section 148A(b) show cause notice.",
      "Writ jurisdiction remedies under Article 226 when jurisdictional errors are committed by Assessing Officers.",
    ],
    content:
      "The regime for reopening income tax assessments under Section 147 and 148 of the Income Tax Act has witnessed profound statutory and judicial evolution. Assessing officers relying on automated 'insight portal' data flags frequently issue Section 148A notices without independent application of mind. In this advisory paper, our litigation counsel outlines the procedural defects, lack of approval from specified authorities under Section 151, and key grounds for quashing defective notices.",
  },
  {
    id: "gst-itc-rule-36-4-reconciliations",
    slug: "gst-itc-rule-36-4-reconciliations",
    title: "Mitigating Input Tax Credit Blockages: Mastering Automated GSTR-2B Synchronization",
    category: "GST",
    date: "September 28, 2026",
    readTime: "6 min read",
    summary:
      "How enterprise finance teams can automate invoice matching, manage non-compliant suppliers under Section 16(2)(aa), and defend against departmental DRC-01 notices.",
    author: "CA Shankar B A",
    authorRole: "Senior Partner, Indirect Taxes",
    keyTakeaways: [
      "Dynamic reconciliation cycles between ERP purchase register and auto-drafted GSTR-2B.",
      "Vendor payment retention clauses to guard against defaulting suppliers who fail to remit tax.",
      "Departmental interest liability calculation rules under Section 50(3) when credit is merely availed vs utilized.",
    ],
    content:
      "With the absolute synchronization of input tax credit with supplier returns under GSTR-2B, corporate treasuries cannot afford manual spreadsheet reconciliations. Unmatched credits not only lead to interest penalties of 18% under Section 50, but can also trigger sudden registration suspensions. We present a five-pillar internal control model implemented across our industrial manufacturing clients.",
  },
  {
    id: "pre-ipo-corporate-governance-audit",
    slug: "pre-ipo-corporate-governance-audit",
    title: "Pre-IPO Governance Blueprint: Essential Board & Secretarial Hygiene for Mid-Market Enterprises",
    category: "Corporate Law",
    date: "September 15, 2026",
    readTime: "8 min read",
    summary:
      "Step-by-step guidance on aligning internal financial controls, board committee constitutions, and SEBI ICDR disclosure standards 18 months before listing.",
    author: "CS N. S. Poornima",
    authorRole: "Practising Company Secretary",
    keyTakeaways: [
      "Formation of Audit, NRC, and Stakeholder Relationship committees with required independent director ratios.",
      "Restatement of audited financial statements under Ind AS for the preceding three fiscal years.",
      "Secretarial scrub of promoter group shareholding, historical ROC filings, and charge satisfactions.",
    ],
    content:
      "Transitioning from a promoter-led private entity to a public listed enterprise requires institutional transformation long before drafting the Draft Red Herring Prospectus (DRHP). Merchant bankers and SEBI review secretarial records dating back to incorporation. This article reviews common historical pitfalls that delay capital market listings and how proactive secretarial audits solve them.",
  },
  {
    id: "internal-financial-controls-implementation",
    slug: "internal-financial-controls-implementation",
    title: "Internal Financial Controls (IFC-FR): Practical Roadmap for Manufacturing & MSMEs",
    category: "Assurance",
    date: "August 30, 2026",
    readTime: "5 min read",
    summary:
      "Moving beyond standard operating procedures: designing Risk Control Matrices (RCM) and automated IT testing to satisfy statutory auditor IFC mandates.",
    author: "CA Soundarya R",
    authorRole: "Partner, Assurance & Systems Audit",
    keyTakeaways: [
      "Distinguishing entity-level controls (ELC) from process-level controls (PLC).",
      "Segregation of Duties (SoD) in ERP systems to prevent unauthorized payment authorizations.",
      "Partner-tested documentation templates that satisfy ICAI Guidance Notes on IFC.",
    ],
    content:
      "Section 134(5)(e) and Section 143(3)(i) of the Companies Act require directors and statutory auditors to explicitly certify that internal financial controls are adequate and operating effectively. For growing mid-market enterprises, establishing formal RCM documentation often feels overwhelming. We provide an actionable framework that protects management while streamlining annual audits.",
  },
];
