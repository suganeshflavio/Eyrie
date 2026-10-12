export interface PresenceCity {
  id: string;
  name: string;
  isHub: boolean;
  state: string;
  leadRole: string;
  badge: string;
  phone: string;
  email: string;
  address: string;
  highlights: string[];
  description: string;
  mapCoords: { x: number; y: number };
}

export const PRESENCE_CITIES: PresenceCity[] = [
  {
    id: "salem",
    name: "Salem",
    isHub: true,
    state: "Tamil Nadu",
    leadRole: "Central Practice & Coordination Hub",
    badge: "Central Practice Hub",
    phone: "+91 86182 59712",
    email: "salem@teameyrie.in",
    address:
      "Team Eyrie Central Operations Centre, Commercial Hub Road, Salem, Tamil Nadu - 636004",
    highlights: [
      "Industrial & Manufacturing Audit",
      "Cost Management & Operational MIS",
      "MSME Financial Advisory & Revival",
      "National Practice Coordination Centre",
    ],
    description:
      "The institutional headquarters and coordination nerve center of Team Eyrie. Hosts our multidisciplinary audit teams, central cost accounting desk, and cross-state compliance synchronization desk.",
    mapCoords: { x: 236, y: 592 },
  },
  {
    id: "new-delhi",
    name: "New Delhi",
    isHub: false,
    state: "National Capital Region",
    leadRole: "Direct Tax Litigation & Appellate Advocacy Hub",
    badge: "Litigation & NCLT",
    phone: "+91 11 4359 8700",
    email: "delhi@teameyrie.in",
    address:
      "Barakhamba Road, Connaught Place, New Delhi, Delhi - 110001",
    highlights: [
      "Direct Tax Appellate Litigation (ITAT & High Court)",
      "National Company Law Tribunal (NCLT & NCLAT) Advocacy",
      "Senior Counsel Briefing & Supreme Court Coordination",
      "Central Board of Direct Taxes (CBDT) Representation",
    ],
    description:
      "Anchored by V. Verma & Co., representing clients in high-stakes statutory tax disputes, reassessment challenges, transfer pricing appeals, and corporate dispute proceedings.",
    mapCoords: { x: 225, y: 195 },
  },
  {
    id: "chennai",
    name: "Chennai",
    isHub: false,
    state: "Tamil Nadu",
    leadRole: "Banking Assurance & Capital Markets Practice",
    badge: "Assurance & SEBI",
    phone: "+91 44 2852 4110",
    email: "chennai@teameyrie.in",
    address:
      "Mount Road Commercial Enclave, Chennai, Tamil Nadu - 600002",
    highlights: [
      "Statutory Bank Assurance & Concurrent Inspection",
      "SEBI Listing Compliance & Capital Market Filings",
      "Transaction Structuring & Due Diligence",
      "Listed Board Governance & Secretarial Audits",
    ],
    description:
      "Led by R. Sridharan & Company, driving institutional banking audits, SEBI compliance, listed entity statutory audits, and capital market advisory across South India.",
    mapCoords: { x: 274, y: 546 },
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    isHub: false,
    state: "Karnataka",
    leadRole: "Technology, Startup Advisory & Commercial Office",
    badge: "Tech & Startup Hub",
    phone: "+91 80 4123 9088",
    email: "bengaluru@teameyrie.in",
    address:
      "Indiranagar / MG Road Business District, Bengaluru, Karnataka - 560038",
    highlights: [
      "Venture Capital & Startup Fundraise Due Diligence",
      "Cross-Border Transfer Pricing & DTAA Advisory",
      "SaaS Revenue Recognition & Ind AS 115 Compliance",
      "Virtual CFO & High-Growth Scaleup Controllership",
    ],
    description:
      "Dedicated center serving Bangalore’s dynamic ecosystem of venture-backed tech startups, multinational R&D centers, and high-growth innovators.",
    mapCoords: { x: 215, y: 538 },
  },
  {
    id: "mumbai",
    name: "Mumbai",
    isHub: false,
    state: "Maharashtra",
    leadRole: "Corporate Finance & Financial Markets Associate",
    badge: "Associate Hub",
    phone: "+91 22 6745 2200",
    email: "mumbai@teameyrie.in",
    address:
      "Nariman Point / BKC Financial District, Mumbai, Maharashtra - 400021",
    highlights: [
      "Institutional M&A Financial Due Diligence",
      "Registered Valuer Opinions for Corporate Restructuring",
      "NBFC Statutory Assurance & RBI Prudential Norms",
      "Insolvency & Debt Restructuring Support",
    ],
    description:
      "Engaged in institutional M&A deals, structured debt finance, corporate turnaround advisory, and high-value valuation opinions in India's financial capital.",
    mapCoords: { x: 136, y: 405 },
  },
  {
    id: "goa",
    name: "Goa",
    isHub: false,
    state: "Goa",
    leadRole: "Hospitality, Industrial & Real Estate Practice",
    badge: "Associate Hub",
    phone: "+91 832 242 1190",
    email: "goa@teameyrie.in",
    address:
      "Panaji Commercial Center, Panaji, Goa - 403001",
    highlights: [
      "Hospitality & Tourism Tax Compliance & Audits",
      "Coastal Real Estate Project GST & RERA Structuring",
      "Pharma & Industrial Unit Assurance",
      "Expatriate & Cross-Border Individual Tax Filings",
    ],
    description:
      "Specialized advisory for Goa's hospitality, shipping logistics, pharmaceutical, and real estate development enterprises.",
    mapCoords: { x: 156, y: 495 },
  },
  {
    id: "mysuru",
    name: "Mysuru",
    isHub: false,
    state: "Karnataka",
    leadRole: "Manufacturing & Heritage Business Advisory",
    badge: "Associate Hub",
    phone: "+91 821 241 8760",
    email: "mysuru@teameyrie.in",
    address:
      "Saraswathipuram Commercial Arcade, Mysuru, Karnataka - 570009",
    highlights: [
      "Precision Engineering & Agro-Processing Audits",
      "MSME Working Capital Optimization",
      "Internal Controls & Inventory Verification",
      "Direct Tax Assessments & Compliance",
    ],
    description:
      "Serving southern Karnataka’s vibrant industrial manufacturing corridors, food processing enterprises, and prominent family-owned businesses.",
    mapCoords: { x: 176, y: 574 },
  },
  {
    id: "namakkal",
    name: "Namakkal",
    isHub: false,
    state: "Tamil Nadu",
    leadRole: "Poultry, Transport & Commercial Vehicle Hub",
    badge: "Associate Hub",
    phone: "+91 4286 276 430",
    email: "namakkal@teameyrie.in",
    address:
      "Paramathi Road Commercial Complex, Namakkal, Tamil Nadu - 637001",
    highlights: [
      "Logistics, Trucking & Fleet Fleet Cost Auditing",
      "Poultry & Animal Husbandry Tax Structuring",
      "Bank Finance Syndication & Asset Monitoring",
      "GST Multi-Branch Supply Chain Reconciliations",
    ],
    description:
      "Strategic practice node tailored to India’s largest poultry and commercial transport fleet ecosystem, optimizing logistics margins and fleet finances.",
    mapCoords: { x: 236, y: 622 },
  },
  {
    id: "madurai",
    name: "Madurai",
    isHub: false,
    state: "Tamil Nadu",
    leadRole: "Textiles, Trade & Southern Industrial Practice",
    badge: "Associate Hub",
    phone: "+91 452 253 9120",
    email: "madurai@teameyrie.in",
    address:
      "KK Nagar Business Center, Madurai, Tamil Nadu - 625020",
    highlights: [
      "Textile & Garment Manufacturing Assurance",
      "Wholesale Trade & FMCG Distribution Accounting",
      "Direct Tax Dispute Representation",
      "Corporate Secretarial & MCA Life-Cycle Support",
    ],
    description:
      "Serving South Tamil Nadu’s historic industrial and trading centers across textiles, manufacturing, wholesale distribution, and agricultural commodities.",
    mapCoords: { x: 234, y: 652 },
  },
];
