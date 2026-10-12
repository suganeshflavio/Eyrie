export interface PersonProfile {
  id: string;
  slug: string;
  name: string;
  initials: string;
  role: string;
  practiceArea: string;
  qualifications: string;
  location: string;
  bio: string;
  coreCompetencies: string[];
  memberships: string[];
}

export const PEOPLE_PROFILES: PersonProfile[] = [
  {
    id: "cs-poornima",
    slug: "cs-poornima",
    name: "CS N. S. Poornima",
    initials: "CN",
    role: "Practising Company Secretary & Registered Trademark Agent",
    practiceArea: "Corporate & Regulatory Advisory",
    qualifications: "B.Com (CA), FCS",
    location: "Salem Hub & Regional Practice",
    bio:
      "CS N. S. Poornima is a seasoned Corporate Strategist, Transaction Advisor, and Governance Professional with deep domain expertise in corporate jurisprudence, MCA statutory compliance, SEBI regulations, and intellectual property rights. She leads the network's corporate legal practice, steering complex reorganizations, secretarial audits, and board compliance.",
    coreCompetencies: [
      "Company Law & MCA V3 Procedures",
      "Secretarial Audits & Board Governance",
      "Trademark Registration & IP Advisory",
      "Cross-Border FDI & FEMA Reporting",
    ],
    memberships: [
      "Fellow Member of the Institute of Company Secretaries of India (ICSI)",
      "Registered Trademark Agent (Govt. of India)",
    ],
  },
  {
    id: "ca-girish-bhatt",
    slug: "ca-girish-bhatt",
    name: "CA Girish Bhatt",
    initials: "GB",
    role: "Senior Partner & Registered Valuer",
    practiceArea: "Assurance & Audit / Valuation",
    qualifications: "B.Com, FCA, RV (IBBI)",
    location: "Bengaluru & Salem Hub",
    bio:
      "CA Girish Bhatt is a veteran Chartered Accountant and IBBI-Registered Valuer with over 25 years of diverse leadership experience across statutory audit, corporate restructuring, financial modeling, and valuation of securities and financial assets. He provides strategic counsel to enterprise boards and family offices.",
    coreCompetencies: [
      "Statutory & Management Audits",
      "Registered Business Valuation (IBBI)",
      "Financial Due Diligence & M&A Support",
      "Corporate Financial Restructuring",
    ],
    memberships: [
      "Fellow Member of the Institute of Chartered Accountants of India (ICAI)",
      "Registered Valuer (Securities & Financial Assets) with IBBI",
    ],
  },
  {
    id: "ca-suganya-r",
    slug: "ca-suganya-r",
    name: "CA Suganya R",
    initials: "SR",
    role: "Chartered Accountant & Tax Partner",
    practiceArea: "Tax Advisory & Direct Taxation",
    qualifications: "B.Com, FCA",
    location: "Salem Hub",
    bio:
      "CA Suganya R has been in rigorous professional practice, specializing in corporate taxation, direct tax assessments, transfer pricing compliance, and high-stakes dispute resolution. She brings methodical precision to corporate tax planning and appellate documentation.",
    coreCompetencies: [
      "Corporate Direct Tax Advisory",
      "Appellate Submissions & Representation",
      "Transfer Pricing Study Reports",
      "Tax Audit under Section 44AB",
    ],
    memberships: [
      "Fellow Member of the Institute of Chartered Accountants of India (ICAI)",
    ],
  },
  {
    id: "ca-r-soundarya",
    slug: "ca-r-soundarya",
    name: "CA Soundarya R",
    initials: "SR",
    role: "Partner, Registered Valuer & Systems Auditor",
    practiceArea: "Assurance & Audit / IT Governance",
    qualifications: "B.Com, FCA, RV (SFA), DISA (ICAI)",
    location: "Chennai & Salem Hub",
    bio:
      "CA Soundarya R is a Fellow Chartered Accountant with over 15 years of multifaceted practice spanning statutory audit, financial asset valuation, and information systems security audits. She advises leading manufacturing, healthcare, and retail enterprises on robust financial governance and risk controls.",
    coreCompetencies: [
      "Statutory Audits & Ind AS Conversions",
      "Financial Asset Valuation (IBBI)",
      "Information Systems Audit (DISA)",
      "Internal Financial Controls (IFC-FR)",
    ],
    memberships: [
      "Fellow Member of the Institute of Chartered Accountants of India (ICAI)",
      "Diploma in Information System Audit (DISA) from ICAI",
      "Registered Valuer with IBBI",
    ],
  },
  {
    id: "ca-ba-shankar",
    slug: "ca-ba-shankar",
    name: "CA Shankar B A",
    initials: "SB",
    role: "Senior Partner, Operations & Indirect Tax Practice",
    practiceArea: "GST & Indirect Taxes",
    qualifications: "M.Com(BF), FCA, FCMA, ACS",
    location: "Salem Hub & Bengaluru Office",
    bio:
      "CA B. A. Shankar holds triple statutory qualifications as a Chartered Accountant, Cost & Management Accountant, and Company Secretary. With decades of operational and regulatory acumen, he heads the network's Indirect Taxes (GST) and cost accounting practice, serving major industrial manufacturers across India.",
    coreCompetencies: [
      "Comprehensive GST Strategy & Audit Representation",
      "Cost Accounting & Operational Profitability MIS",
      "Customs & Foreign Trade Policy Compliance",
      "Multi-State Supply Chain Tax Optimization",
    ],
    memberships: [
      "Fellow Member of the Institute of Chartered Accountants of India (ICAI)",
      "Fellow Member of the Institute of Cost Accountants of India (ICMAI)",
      "Associate Member of the Institute of Company Secretaries of India (ICSI)",
    ],
  },
  {
    id: "ca-s-anandlakshmi",
    slug: "ca-s-anandlakshmi-b-com-fca-disaicai",
    name: "CA S Anandlakshmi",
    initials: "SA",
    role: "Chartered Accountant & Assurance Lead",
    practiceArea: "Assurance & Audit",
    qualifications: "B.Com, FCA, DISA(ICAI)",
    location: "Chennai & Salem Hub",
    bio:
      "CA S Anandlakshmi is a seasoned Fellow Chartered Accountant with expertise in statutory audits of scheduled commercial banks, industrial enterprises, and healthcare trusts. Certified in DISA, she integrates data analytics into assurance engagements to identify system anomalies and operational leakages.",
    coreCompetencies: [
      "Statutory Bank Audits & Concurrent Assurance",
      "Charitable Trust & NGO Compliance",
      "System Controls & Process Reviews",
      "Tax Audit & Regulatory Filings",
    ],
    memberships: [
      "Fellow Member of the Institute of Chartered Accountants of India (ICAI)",
      "DISA (Information System Audit) Certified by ICAI",
    ],
  },
  {
    id: "ca-v-s-varradharajan",
    slug: "ca-v-s-varradharajan",
    name: "CA V. S. Varradharajan",
    initials: "VS",
    role: "Chartered Accountant & Corporate Advisor",
    practiceArea: "Tax Advisory & Corporate Finance",
    qualifications: "B.Com (CA), FCA, ACS",
    location: "Salem Hub & Regional Practice",
    bio:
      "CA V. S. Varradharajan combines Chartered Accountancy with corporate secretarial credentials. He is acclaimed for his strategic command over direct tax structuring, capital syndication, MSME debt restructuring, and corporate governance for high-growth enterprises.",
    coreCompetencies: [
      "Direct Tax Dispute Resolution",
      "Corporate Secretarial & Compliance Audits",
      "Working Capital Structuring & Bank Syndication",
      "MSME Financial Advisory & Revival",
    ],
    memberships: [
      "Fellow Member of the Institute of Chartered Accountants of India (ICAI)",
      "Associate Member of the Institute of Company Secretaries of India (ICSI)",
    ],
  },
  {
    id: "ca-shobana-revathi-s",
    slug: "ca-shobana-revathi-s",
    name: "CA Shobana Revathi S",
    initials: "SR",
    role: "Chartered Accountant & Advisory Specialist",
    practiceArea: "Tax Advisory & Accounting Standards",
    qualifications: "B.Com, ACA",
    location: "Salem Hub",
    bio:
      "CA Shobana Revathi S focuses on direct tax jurisprudence, accounting standard conversions (Ind AS), and automated financial reporting workflows. She assists emerging corporate clients in establishing robust financial systems and tax-compliant structures.",
    coreCompetencies: [
      "Direct Tax Compliance & Assessments",
      "Ind AS Financial Statement Preparation",
      "Corporate Reconciliation & Ledger Scrubbing",
      "Startup Accounting & Statutory Registrations",
    ],
    memberships: [
      "Associate Member of the Institute of Chartered Accountants of India (ICAI)",
    ],
  },
];
