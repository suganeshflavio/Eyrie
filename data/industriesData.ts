export interface IndustrySector {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  keyServices: string[];
  icon: string;
}

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: "manufacturing-engineering",
    name: "Manufacturing & Heavy Engineering",
    shortDesc: "Cost accounting, inventory valuation, GST input optimization, and IFC controls.",
    fullDesc:
      "India’s manufacturing renaissance demands lean working capital and bulletproof supply chain tax structures. We advise heavy engineering, auto-components, and precision equipment manufacturers on statutory audits, AS-2 inventory valuations, and cross-border customs classifications.",
    keyServices: ["Unit Cost Auditing", "GSTR-2B Input Optimization", "Internal Financial Controls (IFC)", "EPCG & Advance Authorisation"],
    icon: "factory",
  },
  {
    id: "bfsi-nbfc",
    name: "BFSI & Non-Banking Financial Companies",
    shortDesc: "Statutory bank audits, concurrent inspections, RBI prudential norms, and credit review.",
    fullDesc:
      "Scheduled commercial banks, NBFCs, and microfinance institutions operate under stringent RBI Master Directions. Our senior partners conduct statutory branch audits, asset classification (NPA) reviews, and FEMA outward remittance assurance.",
    keyServices: ["Statutory Bank Audits", "RBI Scale-Based Regulation Compliance", "Asset Quality Review & ECL Modeling", "FEMA & Overseas Investment"],
    icon: "landmark",
  },
  {
    id: "healthcare-pharma",
    name: "Healthcare, Hospitals & Pharmaceuticals",
    shortDesc: "Hospital trust audits, clinical trial R&D tax incentives, and medical devices GST.",
    fullDesc:
      "From multi-specialty tertiary hospital chains to pharmaceutical manufacturers and healthcare trusts, we provide specialized compliance addressing section 11/12 trust exemptions, clinical trials taxation, and healthcare GST intricacies.",
    keyServices: ["Section 11/12 Trust Exemptions", "Pharma R&D Tax Deductions", "Medical Device Pricing & Valuation", "Hospital Internal Controls"],
    icon: "activity",
  },
  {
    id: "technology-saas",
    name: "Technology, SaaS & IT Services",
    shortDesc: "Cross-border transfer pricing, Ind AS 115 revenue recognition, and ESOP design.",
    fullDesc:
      "Technology innovators scale across jurisdictions within months. We structure transfer pricing documentation, handle software export STPI/SEZ compliances, implement Ind AS 115 contract accounting, and draft defensible ESOP schemes.",
    keyServices: ["Transfer Pricing Benchmarking", "Ind AS 115 Revenue Modeling", "ESOP Structuring & Section 56(2)", "Cross-Border IP Licensing"],
    icon: "cpu",
  },
  {
    id: "logistics-supply-chain",
    name: "Logistics, Warehousing & Fleet Transport",
    shortDesc: "E-way bill governance, reverse charge GST, multi-depot audits, and fleet costing.",
    fullDesc:
      "With Namakkal and Salem serving as major trucking and transport epicenters, our practice has unmatched roots in logistics economics. We manage reverse charge mechanism (RCM) GST reconciliations, GPS inventory track audits, and depot lease accounting.",
    keyServices: ["Fleet Unit Costing & MIS", "GST RCM Reconciliations", "Multi-State Warehousing Filings", "Carrier Liability & Insurance Audits"],
    icon: "truck",
  },
  {
    id: "startups-scaleups",
    name: "High-Growth Startups & Scaleups",
    shortDesc: "Valuation under Rule 11UA, Series funding due diligence, and Virtual CFO support.",
    fullDesc:
      "We provide early-stage and growth-stage companies with the rigorous financial maturity required by institutional investors. Our Registered Valuers issue statutory reports for convertible instruments (CCPS) and coordinate investor data rooms.",
    keyServices: ["IBBI Registered Valuations", "Investor Due Diligence Readiness", "Fractional / Virtual CFO", "FDI Inward Remittance (FC-GPR)"],
    icon: "rocket",
  },
  {
    id: "msme-enterprises",
    name: "MSMEs & Emerging Enterprises",
    shortDesc: "Working capital optimization, MSME Sambad dispute filings, and subsidy recovery.",
    fullDesc:
      "MSMEs are the backbone of the Indian economic engine. We guide enterprise founders on optimizing their cash conversion cycle, tapping into government credit guarantee programs (CGTMSE), and resolving statutory recovery proceedings.",
    keyServices: ["MSMED Act 45-Day Payment Safeguards", "Bank Loan Syndication Dossiers", "Working Capital Variance MIS", "Subsidy Audits & Compliance"],
    icon: "store",
  },
  {
    id: "conglomerates-family-offices",
    name: "Conglomerates & Family Offices",
    shortDesc: "Succession planning, family private trusts, holding company governance, and wealth taxation.",
    fullDesc:
      "Promoters and multi-generational business families require confidential, discreet, and strategic fiduciary counsel. We structure private discretionary trusts, draft family constitutions, and oversee holding company tax efficiencies.",
    keyServices: ["Private Family Trust Structuring", "Succession & Inheritance Governance", "Holding Company Optimization", "Estate Tax Planning"],
    icon: "shield",
  },
  {
    id: "real-estate-infrastructure",
    name: "Real Estate & Infrastructure Developers",
    shortDesc: "RERA compliance audits, joint development agreement (JDA) tax, and project finance.",
    fullDesc:
      "Navigating complex JDA taxation under Section 45(5A), input tax credit restrictions, RERA separate account escrow certifications, and project finance loan monitoring for builders and infrastructure contractors.",
    keyServices: ["JDA Tax Structuring", "RERA CA Form Certifications", "Construction Contract Accounting", "Infrastructure Project Audits"],
    icon: "building",
  },
  {
    id: "retail-ecommerce",
    name: "Retail, FMCG & E-Commerce",
    shortDesc: "Marketplace TCS reconciliations, omni-channel stock audits, and promotional scheme GST.",
    fullDesc:
      "High volume, multi-channel retailers require rigorous automated ledger reconciliations. We resolve e-commerce marketplace TCS discrepancies, review distributor volume discount GST treatments, and conduct perpetual inventory counts.",
    keyServices: ["Marketplace Section 52 TCS Audit", "Discounts & Rebate GST Rules", "Perpetual Inventory Audits", "FMCG Distribution Channel MIS"],
    icon: "shopping-bag",
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy & Clean Tech",
    shortDesc: "Solar/wind power project accounting, carbon credit advisory, and green EPC tax.",
    fullDesc:
      "Supporting solar developers, wind IPPs, and green mobility innovators with capital expenditure depreciation incentives, REC credit taxability, and long-term PPA financial modeling.",
    keyServices: ["Section 32 Accelerated Depreciation", "Solar EPC Contract Structuring", "Carbon Credit Accounting", "Renewable Asset Valuations"],
    icon: "sun",
  },
  {
    id: "textiles-apparel",
    name: "Textiles, Garments & Export Houses",
    shortDesc: "Inverted duty structure refunds, RoDTEP export compliance, and spinning mill costing.",
    fullDesc:
      "Anchored by our presence in the Coimbatore-Tirupur-Salem-Madurai textile belt, we lead inverted duty structure GST refund filings, spinning mill electrical cost audits, and duty drawback reconciliations.",
    keyServices: ["Inverted Duty Structure Refunds", "RoDTEP & RoSCTL Export Audits", "Yarn & Fabric Cost Accounting", "Foreign Exchange Hedging Advisory"],
    icon: "scissors",
  },
];
