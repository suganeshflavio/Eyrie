export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  keyFrameworks: string[];
  targetClients: string[];
  icon: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "direct-taxes-and-company-law-litigations",
    slug: "direct-taxes-and-company-law-litigations",
    number: "01",
    title: "Direct Taxes & Company Law Litigation",
    tagline: "High-stakes appellate advocacy, ITAT representation, and NCLT dispute resolution",
    shortDesc:
      "Strategic defense, appeals, NCLT proceedings, and senior counsel representation before statutory tribunals and regulatory authorities.",
    fullDesc:
      "When statutory scrutiny escalates into contentious disputes, defensible jurisprudence and seasoned courtroom mastery make the crucial difference. Our litigation team combines deep statutory scholarship with extensive tribunal experience before the Income Tax Appellate Tribunal (ITAT), Dispute Resolution Panels (DRP), National Company Law Tribunal (NCLT), and High Court briefing counsel. We protect corporate reputations and balance sheets across contentious reassessments, search and seizure proceedings, and corporate shareholder disputes.",
    deliverables: [
      "Appeals before CIT (Appeals) and Income Tax Appellate Tribunal (ITAT)",
      "NCLT & NCLAT petition drafting and corporate litigation defense",
      "Section 148 reassessment objections and writ petition preparation",
      "Transfer pricing dispute defense before Dispute Resolution Panel (DRP)",
      "Search, seizure & survey representation under Section 132/133A",
      "Compounding of corporate offenses under the Companies Act, 2013",
    ],
    keyFrameworks: [
      "Income Tax Act, 1961",
      "Companies Act, 2013 & NCLT Rules",
      "Insolvency and Bankruptcy Code (IBC), 2016",
      "Constitution of India (Article 226 Writ Jurisprudence)",
    ],
    targetClients: [
      "Conglomerates facing high-value tax demands",
      "Enterprises under Section 148 reassessment notices",
      "Boards handling minority shareholder or oppression/mismanagement claims",
      "Entities involved in Section 7/9 IBC insolvency actions",
    ],
    icon: "scale",
  },
  {
    id: "assurance-audit",
    slug: "assurance-audit",
    number: "02",
    title: "Assurance & Audit",
    tagline: "Rigorous statutory, bank, and industrial audit with partner-led accountability",
    shortDesc:
      "Statutory, bank, internal financial controls (IFC), and industrial audit conducted in strict adherence to ICAI Standards of Auditing (SAs).",
    fullDesc:
      "In an era of relentless regulatory scrutiny and heightened stakeholder expectations, assurance is not a procedural checkbox—it is the cornerstone of corporate governance and creditworthiness. Team Eyrie delivers independent, partner-led statutory audits that provide unequivocal clarity on financial health. Our audits adhere strictly to ICAI Standards on Auditing (SAs), Indian Accounting Standards (Ind AS), and global reporting protocols, giving institutional lenders, investors, and boards unshakable confidence.",
    deliverables: [
      "Statutory Financial Statements Audit under Companies Act, 2013",
      "Internal Financial Controls over Financial Reporting (IFC-FR) Review",
      "Tax Audits under Section 44AB of the Income Tax Act",
      "Statutory Bank Audits & Concurrent Audits for Scheduled Commercial Banks",
      "Stock, Asset & Collateral Physical Verification Audits",
      "Special Forensic & Investigative Audits commissioned by Boards or Lenders",
    ],
    keyFrameworks: [
      "ICAI Standards on Auditing (SA 200 - SA 810)",
      "Indian Accounting Standards (Ind AS) & AS",
      "RBI Banking Supervision Master Circulars",
      "ICAI Guidance Note on Internal Financial Controls",
    ],
    targetClients: [
      "Listed and unlisted Public/Private Limited Companies",
      "Public Sector and Private Scheduled Commercial Banks",
      "Manufacturing companies with complex inventory and supply chains",
      "PE/VC backed startups preparing for institutional debt or equity rounds",
    ],
    icon: "shield-check",
  },
  {
    id: "tax-advisory",
    slug: "tax-advisory",
    number: "03",
    title: "Tax Advisory & International Tax",
    tagline: "Defensible planning, cross-border structuring, and strategic tax opinions",
    shortDesc:
      "Defensible tax planning, cross-border transaction structuring, transfer pricing, and opinions for individuals, family offices, and enterprises.",
    fullDesc:
      "Dynamic fiscal legislation demands proactive tax governance that optimizes liabilities while remaining robustly defensible under audit. Team Eyrie provides holistic domestic and international direct tax advisory. From optimizing corporate structures to resolving complex Double Tax Avoidance Agreement (DTAA) questions and drafting defensible transfer pricing documentation, our advisory aligns statutory compliance with long-term enterprise value creation.",
    deliverables: [
      "Comprehensive Corporate Tax Structuring & Optimization Reviews",
      "Cross-border transaction planning & DTAA Treaty Interpretation",
      "Transfer Pricing Study reports, benchmarking, and Local/Master File documentation",
      "Family Office structuring, private trusts, and succession planning",
      "Withholding Tax (TDS/TCS) opinions on foreign outward remittances (Form 15CA/CB)",
      "Advisory on Equalisation Levy and Significant Economic Presence (SEP)",
    ],
    keyFrameworks: [
      "Income Tax Act, 1961 & IT Rules, 1962",
      "Bilateral Double Taxation Avoidance Agreements (DTAA)",
      "OECD BEPS Action Plans & Multilateral Convention (MLI)",
      "Indian Trust Act, 1882",
    ],
    targetClients: [
      "Multinational groups with cross-border intra-group transactions",
      "Promoters and High-Net-Worth Individuals (HNIs) managing succession",
      "Domestic corporate groups optimizing multi-entity operational structures",
      "Tech and IT companies exporting software or cloud services abroad",
    ],
    icon: "trending-up",
  },
  {
    id: "gst-indirect-taxes",
    slug: "gst-indirect-taxes",
    number: "04",
    title: "GST & Indirect Taxes",
    tagline: "Returns, reconciliations, departmental audits, and ITC optimization",
    shortDesc:
      "End-to-end GST filings, input tax credit reconciliations, department audit support, anti-profiteering, and customs advisory.",
    fullDesc:
      "Goods and Services Tax (GST) has transformed Indian supply chain dynamics into a continuous, data-intensive digital compliance regime. Mismatched Input Tax Credit (ITC) or classification discrepancies trigger instantaneous departmental notices and cash flow blockages. Team Eyrie provides real-time indirect tax advisory that ensures frictionless credit absorption, precise classification, and aggressive defense during departmental audits.",
    deliverables: [
      "Monthly & Quarterly GST compliance (GSTR-1, GSTR-3B, IFF, CMP-08)",
      "Annual GST Returns (GSTR-9) and Reconciliation Statements (GSTR-9C)",
      "Multi-system automated ITC Reconciliations under Rule 36(4) & GSTR-2B",
      "Representation against GST Show Cause Notices (SCN) and audits",
      "HSN/SAC Classification and Advance Ruling (AAR) applications",
      "Customs valuation, Special Valuation Branch (SVB) and EPCG compliances",
    ],
    keyFrameworks: [
      "Central Goods and Services Tax (CGST) Act & State GST Acts",
      "Integrated Goods and Services Tax (IGST) Act, 2017",
      "Customs Act, 1962 & Foreign Trade Policy (FTP)",
      "GST Council Notifications & Circulars",
    ],
    targetClients: [
      "Manufacturers with multi-state supply chains and inter-state branch transfers",
      "E-commerce aggregators and marketplace sellers",
      "Exporters claiming input tax credit and inverted duty structure refunds",
      "Commercial developers navigating real estate GST implications",
    ],
    icon: "receipt",
  },
  {
    id: "corporate-regulatory-advisory",
    slug: "corporate-regulatory-advisory",
    number: "05",
    title: "Corporate & Regulatory Advisory",
    tagline: "SEBI compliance, board governance, FEMA, and secretarial excellence",
    shortDesc:
      "SEBI compliance, Company Law, corporate governance, FEMA regulations, and board secretarial oversight.",
    fullDesc:
      "Navigating India’s corporate regulatory ecosystem requires vigilance across the Ministry of Corporate Affairs (MCA), Securities and Exchange Board of India (SEBI), and Reserve Bank of India (RBI). Led by senior Company Secretaries and corporate advisory partners, this practice provides robust institutional governance frameworks that shield directors, facilitate FDI inflows, and maintain flawless statutory registers.",
    deliverables: [
      "SEBI (LODR) Regulations compliance for listed and debt-listed entities",
      "Foreign Direct Investment (FDI) & Overseas Direct Investment (ODI) filings under FEMA",
      "Board governance advisory, committee charters, and independent director reviews",
      "Secretarial Audits under Section 204 of the Companies Act, 2013",
      "Compounding applications and condonation of delay with RBI & Regional Director",
      "Corporate ESG (Environmental, Social, Governance) policy formulation",
    ],
    keyFrameworks: [
      "Companies Act, 2013 & Secretarial Standards (SS-1 & SS-2)",
      "SEBI (Listing Obligations and Disclosure Requirements) 2015",
      "Foreign Exchange Management Act (FEMA), 1999 & RBI Master Directions",
      "National Guidelines on Responsible Business Conduct (NGRBC)",
    ],
    targetClients: [
      "Listed entities and companies intending to list securities",
      "Foreign companies establishing subsidiaries or liaison offices in India",
      "Institutional boards requiring independent secretarial oversight",
      "Venture-funded startups issuing CCPS and warrants to offshore funds",
    ],
    icon: "building-2",
  },
  {
    id: "business-consulting",
    slug: "business-consulting",
    number: "06",
    title: "Business Consulting & Virtual CFO",
    tagline: "Cost management, operational MIS, financial modeling, and MSME advisory",
    shortDesc:
      "Virtual CFO services, cost reduction strategies, executive MIS dashboards, working capital optimization, and financial controls.",
    fullDesc:
      "Growing mid-market enterprises often lack senior executive financial leadership to steer cash flows, evaluate investments, and enforce unit economics. Team Eyrie’s Business Consulting practice acts as an extension of the CEO/Promoter office. We deliver Virtual CFO support, advanced cost accounting, activity-based costing, and institutional MIS reporting that transforms raw operational data into strategic enterprise growth.",
    deliverables: [
      "Virtual CFO & Interim Financial Controller services",
      "Unit Cost Accounting, variance analysis, and contribution margin models",
      "Working Capital optimization and cash conversion cycle compression",
      "Cloud ERP selection, charting of accounts, and financial internal controls design",
      "Bank loan syndication dossiers and Credit Rating advisory",
      "MSME financial revival, government subsidy schemes, and debt restructuring",
    ],
    keyFrameworks: [
      "ICAI Cost Accounting Standards (CAS)",
      "MSMED Act, 2006 statutory frameworks",
      "Corporate Financial Modeling & Budgetary Control Frameworks",
      "RBI Prudential Framework for Resolution of Stressed Assets",
    ],
    targetClients: [
      "Promoter-driven MSMEs and mid-sized manufacturing groups",
      "Fast-scaling D2C and SaaS companies needing fractional CFO leadership",
      "Distressed businesses undergoing debt restructuring with lenders",
      "Family businesses transitioning to institutional management",
    ],
    icon: "briefcase",
  },
  {
    id: "transaction-advisory",
    slug: "transaction-advisory",
    number: "07",
    title: "Transaction Advisory & Valuation",
    tagline: "Buy/sell-side due diligence, IBBI registered valuation, and M&A structuring",
    shortDesc:
      "Financial and tax due diligence, registered valuation opinions (IBBI), merger structuring, and joint venture advisory.",
    fullDesc:
      "Mergers, acquisitions, private equity rounds, and joint ventures require laser-focused due diligence and valuation opinions that withstand regulatory and investor scrutiny. Our transaction advisory specialists dissect financial statements, reveal hidden liabilities, quantify EBITDA normalizations, and provide statutory Registered Valuer opinions (IBBI) recognized under the Companies Act, Income Tax Act, and FEMA.",
    deliverables: [
      "Buy-Side and Sell-Side Quality of Earnings (QoE) Financial Due Diligence",
      "Tax Due Diligence and historical contingent liability risk matrices",
      "Registered Valuer reports (IBBI) for equity, CCPS, debentures, and intangibles",
      "M&A structuring: mergers, demergers, slump sales, and asset carve-outs",
      "Negotiation support on Share Purchase Agreements (SPA) and indemnity covenants",
      "Post-acquisition accounting integration and purchase price allocations (PPA)",
    ],
    keyFrameworks: [
      "Companies (Registered Valuers and Valuation) Rules, 2017",
      "Income Tax Rule 11UA (Fair Market Value Determination)",
      "FEMA Non-Debt Instruments (NDI) Rules for Pricing Guidelines",
      "Ind AS 103 (Business Combinations)",
    ],
    targetClients: [
      "Strategic acquirers and private equity sponsors evaluating deals",
      "Startup founders raising institutional Series A/B/C growth rounds",
      "Promoters executing family business partitions or subsidiary spin-offs",
      "Joint ventures establishing cross-border corporate partnerships",
    ],
    icon: "layers",
  },
  {
    id: "corporate-regulatory",
    slug: "corporate-regulatory",
    number: "08",
    title: "Corporate Secretarial & MCA Support",
    tagline: "Company incorporation, annual MCA filings, statutory registers, and strike-offs",
    shortDesc:
      "Incorporations, ROC compliance, annual filings (AOC-4, MGT-7), charge management, statutory registers, and entity life-cycle management.",
    fullDesc:
      "Maintaining immaculate compliance with the Registrar of Companies (ROC) is mandatory for corporate continuity and investor diligence. This practice delivers dependable lifecycle secretarial support—from seamless incorporation of Private Limiteds, LLPs, and Section 8 entities to continuous maintenance of statutory registers, charge creation/satisfaction, and annual returns.",
    deliverables: [
      "Entity Incorporation (Private Limited, Public Limited, Section 8, OPC, LLP)",
      "Annual MCA Filings: AOC-4 (Financials), MGT-7 (Annual Return), DPT-3 (Deposits)",
      "Charge Creation, Modification, and Satisfaction filings (CHG-1, CHG-4)",
      "Maintenance of electronic statutory registers and minutes book drafting",
      "Director KYC (DIR-3 KYC) and DIN activation / disqualification remedies",
      "Fast-track company strike-off (STK-2) and corporate voluntary winding up",
    ],
    keyFrameworks: [
      "Companies Act, 2013 & MCA V3 Portal regulations",
      "Limited Liability Partnership Act, 2008",
      "ICAI / ICSI Secretarial Standards (SS-1, SS-2)",
      "Insolvency and Bankruptcy Code (IBC) Fast-track Exit Provisions",
    ],
    targetClients: [
      "Early-stage entrepreneurs incorporating new commercial ventures",
      "Holding companies with dozens of operational operating subsidiaries",
      "Lenders and NBFCs requiring immediate charge creation on financed assets",
      "Dormant entities seeking clean, compliant exit through strike-off",
    ],
    icon: "file-text",
  },
];
