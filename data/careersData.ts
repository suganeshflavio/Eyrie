export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  requirements: string[];
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "ca-articleship-trainee",
    title: "Chartered Accountant Articleship Trainee (ICAI)",
    department: "Assurance & Direct Tax Practice",
    location: "Salem Hub / Chennai / Bengaluru",
    experience: "Passed CA Inter (Both Groups or Single Group)",
    type: "Full-Time (As per ICAI Regulations)",
    description:
      "Join our intensive 2-year articleship program offering rotating exposure across statutory audit of listed/unlisted entities, bank concurrent audits, income tax litigation research, and GST reconciliations under direct partner supervision.",
    requirements: [
      "Eligible to register for ICAI Articleship under the new scheme",
      "Proficiency with MS Excel and analytical reasoning",
      "High professional ethics and commitment to continuous learning",
      "Willingness to travel for client audit engagements",
    ],
  },
  {
    id: "qualified-ca-manager",
    title: "Qualified Chartered Accountant - Audit & Assurance Manager",
    department: "Statutory Assurance Practice",
    location: "Salem Hub / Bengaluru",
    experience: "1 - 4 Years Post Qualification Experience",
    type: "Full-Time",
    description:
      "Lead cross-functional audit teams executing statutory audits, Ind AS financial reporting, and Internal Financial Controls (IFC) reviews for large commercial and industrial manufacturing clients.",
    requirements: [
      "Member of the Institute of Chartered Accountants of India (ACA / FCA)",
      "Strong working knowledge of ICAI Standards on Auditing and Ind AS",
      "Prior experience managing audit teams and interacting with client CFOs",
      "DISA qualification is an added advantage",
    ],
  },
  {
    id: "company-secretary-associate",
    title: "Associate Company Secretary (MCA & Secretarial Practice)",
    department: "Corporate & Regulatory Advisory",
    location: "Salem Hub / New Delhi",
    experience: "0 - 3 Years Post Qualification Experience",
    type: "Full-Time",
    description:
      "Support our corporate legal practice with MCA V3 portal filings, board meeting procedures, drafting petitions for NCLT matters, and secretarial audit documentation.",
    requirements: [
      "Member of the Institute of Company Secretaries of India (ACS)",
      "Hands-on experience with MCA portal filings (AOC-4, MGT-7, CHG forms)",
      "Excellent written drafting and verbal communication skills",
      "Basic understanding of FEMA and trademark registrations",
    ],
  },
  {
    id: "indirect-tax-associate",
    title: "GST & Indirect Tax Senior Executive",
    department: "Indirect Taxes Practice",
    location: "Salem Hub / Chennai",
    experience: "2 - 5 Years in GST Compliance & Audits",
    type: "Full-Time",
    description:
      "Handle high-volume multi-state GST compliance, annual returns (GSTR-9/9C), departmental audit submissions, and automated Input Tax Credit reconciliations for corporate clients.",
    requirements: [
      "Semi-qualified CA / CMA / M.Com with strong indirect tax experience",
      "Deep mastery of GSTR-2B reconciliations and GST legal provisions",
      "Proven track record preparing replies to GST departmental notices",
      "Advanced command over ERP accounting software (SAP, Tally, Zoho)",
    ],
  },
];

export const CULTURE_BENEFITS = [
  {
    title: "Direct Partner Mentorship",
    description: "Work shoulder-to-shoulder with senior FCA partners with 20+ years of appellate, valuation, and assurance experience.",
  },
  {
    title: "Multidisciplinary Exposure",
    description: "Cross-train between Direct Tax, GST, NCLT litigation, corporate law, and business consulting rather than being siloed in one desk.",
  },
  {
    title: "Technology & Cloud Infrastructure",
    description: "Leverage cloud audit toolkits, documentation automation suites, and real-time compliance radar systems.",
  },
  {
    title: "Continuous Professional Development",
    description: "Sponsored participation in ICAI seminars, certifications (DISA, FAFD, Registered Valuer), and internal knowledge masterclasses.",
  },
];
