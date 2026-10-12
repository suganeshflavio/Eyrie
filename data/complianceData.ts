export interface ComplianceDeadline {
  day: number;
  month: number; // 0-indexed (9 = Oct)
  year: number;
  category: "GST" | "INCOME_TAX" | "PAYROLL" | "CORPORATE";
  formName: string;
  title: string;
  description: string;
  applicability: string;
  isSpecial?: boolean;
}

export const STATUTORY_DEADLINES: ComplianceDeadline[] = [
  {
    day: 7,
    month: 9, // October
    year: 2026,
    category: "INCOME_TAX",
    formName: "Challan ITNS 281",
    title: "TDS / TCS Monthly Deposit",
    description: "Deposit of Tax Deducted/Collected at Source for transactions executed during the preceding calendar month.",
    applicability: "All corporate and non-corporate deductors registered under TAN.",
  },
  {
    day: 11,
    month: 9,
    year: 2026,
    category: "GST",
    formName: "GSTR-1",
    title: "GSTR-1 Monthly Outward Supplies Return",
    description: "Statement of outward supplies of goods or services for taxpayers with aggregate annual turnover above ₹5 Crore or monthly filers.",
    applicability: "Monthly GST regular filers.",
    isSpecial: true,
  },
  {
    day: 13,
    month: 9,
    year: 2026,
    category: "GST",
    formName: "IFF",
    title: "Invoice Furnishing Facility (QRMP Scheme)",
    description: "Facility for small taxpayers opting for QRMP scheme to upload B2B outward invoices for the first and second month of the quarter.",
    applicability: "QRMP filers with aggregate turnover up to ₹5 Crore.",
  },
  {
    day: 15,
    month: 9,
    year: 2026,
    category: "PAYROLL",
    formName: "ECR / Form 5 & 10",
    title: "EPF & ESI Statutory Monthly Contributions",
    description: "Remittance of Provident Fund (PF) contributions via Electronic Challan cum Return (ECR) and Employee State Insurance (ESI) dues.",
    applicability: "All commercial establishments with 10/20+ employees covered under EPFO and ESIC.",
  },
  {
    day: 18,
    month: 9,
    year: 2026,
    category: "GST",
    formName: "CMP-08",
    title: "CMP-08 Quarterly Tax Statement",
    description: "Quarterly statement and self-assessed tax payment by composition taxpayers under Section 10 of CGST Act.",
    applicability: "Dealers registered under the GST Composition Scheme.",
  },
  {
    day: 20,
    month: 9,
    year: 2026,
    category: "GST",
    formName: "GSTR-3B",
    title: "GSTR-3B Monthly Return Filing",
    description: "Summary return of inward & outward supplies along with payment of net GST liability for turnover exceeding ₹5 Crore.",
    applicability: "Regular taxpayers with aggregate turnover > ₹5 Crore.",
    isSpecial: true,
  },
  {
    day: 22,
    month: 9,
    year: 2026,
    category: "GST",
    formName: "GSTR-3B",
    title: "GSTR-3B Quarterly Filing (Category 1 States)",
    description: "Quarterly GSTR-3B filing for QRMP filers in Category 1 States (Chhattisgarh, MP, Gujarat, Maharashtra, Karnataka, Goa, Kerala, TN, etc.).",
    applicability: "QRMP Scheme filers in Category 1 Southern & Western States.",
  },
  {
    day: 24,
    month: 9,
    year: 2026,
    category: "GST",
    formName: "GSTR-3B",
    title: "GSTR-3B Quarterly Filing (Category 2 States)",
    description: "Quarterly GSTR-3B filing for QRMP filers in Category 2 States (HP, Punjab, Uttarakhand, Haryana, Rajasthan, UP, Delhi, Bihar, WB, etc.).",
    applicability: "QRMP Scheme filers in Category 2 Northern & Eastern States.",
  },
  {
    day: 30,
    month: 9,
    year: 2026,
    category: "INCOME_TAX",
    formName: "Form 16A / Form 26QB",
    title: "TDS Certificate Issuance & Immovable Property Challan",
    description: "Issuance of quarterly TDS Certificates (Form 16A) and challan filing for Section 194-IA immovable property purchases.",
    applicability: "Corporate deductors and property buyers.",
  },
  {
    day: 31,
    month: 9,
    year: 2026,
    category: "CORPORATE",
    formName: "ITR / AOC-4 / Form 3CA-3CD",
    title: "Tax Audit Filing & Corporate Statutory Audit Deadline",
    description: "Statutory deadline for filing Income Tax Returns and Tax Audit Reports under Section 44AB for assessees liable to audit.",
    applicability: "All corporate assessees and business entities subject to statutory audit.",
    isSpecial: true,
  },
];
