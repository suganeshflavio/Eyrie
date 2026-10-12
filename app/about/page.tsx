import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllianceShowcase from "@/components/AllianceShowcase";
import KinPillars from "@/components/KinPillars";
import { NETWORK_METRICS } from "@/data/allianceData";
import { PEOPLE_PROFILES } from "@/data/peopleData";
import { ShieldCheck, Award, Users2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — Team Eyrie | Integrated Professional Services Network",
  description:
    "Team Eyrie is India’s premier multidisciplinary professional services network formed by the strategic alliance of V. Verma & Co., S S A L Associates, and R. Sridharan & Company.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,82,204,0.25),transparent_50%)]" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
              The Power of Strategic Alliance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              About <span className="text-blue-400">Team Eyrie</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              An integrated multidisciplinary professional services network delivering institutional excellence across Taxation, Statutory Assurance, Governance, and Transactions across India.
            </p>
          </div>
        </section>

        {/* Narrative & Institutional Mission */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                  Who We Are
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Redefining Professional Services for the Modern Enterprise
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-base">
                  <strong>Team Eyrie</strong> was established through the strategic alliance of three reputed Chartered Accountancy partnerships: <strong>V. Verma & Co.</strong>, <strong>S S A L Associates</strong>, and <strong>R. Sridharan & Company</strong>.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-base">
                  Recognizing the growing complexity of Indian and global commerce, our founding partners united decades of specialized legacy practices into a singular cohesive national network. Together, we combine the personalized attention and fiduciary trust of traditional CA practice with the scale, technical breadth, and tech-driven infrastructure required by high-growth enterprises, multinational corporations, and family offices.
                </p>
              </div>

              {/* Core Philosophy Box */}
              <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">
                  Our Core Philosophy
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold italic leading-relaxed mb-6 border-l-2 border-[#0052CC] pl-4">
                  “Together, We Create Value. Together, We Build Trust. Our responsibility is not merely compliance; it is providing intellectual clarity and regulatory safety for businesses to scale with absolute confidence.”
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0052CC] flex items-center justify-center font-black text-sm text-white">
                    TE
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Senior Partner Council</div>
                    <div className="text-xs text-blue-200">Team Eyrie Integrated Network</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Counter Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              {NETWORK_METRICS.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-black text-[#0052CC] dark:text-blue-400">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                    {m.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Alliance Showcase */}
        <AllianceShowcase />

        {/* Guiding Bedrock Pillars */}
        <KinPillars />

        {/* Multidisciplinary Bench Strength */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400 block mb-2">
                Multidisciplinary Roster
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Integrated Bench of Specialized Professionals
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
                Complex corporate transactions require more than conventional accounting. Our bench spans six statutory disciplines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Chartered Accountants (FCA / ACA)", sub: "Statutory Audit, Tax Jurisprudence & DTAA Structuring" },
                { title: "Company Secretaries (FCS / ACS)", sub: "Board Governance, MCA V3 Procedures & Secretarial Audits" },
                { title: "Corporate Advocates & Counsel", sub: "NCLT Proceedings, FEMA Jurisprudence & Contract Structuring" },
                { title: "Registered Valuers (IBBI)", sub: "Securities & Financial Asset Valuations for M&A and FDI" },
                { title: "Insolvency Professionals (IP)", sub: "IBC 2016 Advisory, Debt Restructuring & Asset Recovery" },
                { title: "Information Systems Auditors (DISA)", sub: "IT Controls, Cybersecurity Assurance & ERP Audits" },
              ].map((prof) => (
                <div
                  key={prof.title}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
                >
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                    {prof.title}
                  </h3>
                  <p className="text-xs text-[#0052CC] dark:text-blue-400 font-semibold">
                    {prof.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Meet Partner Council CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/people"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Meet Our Senior Partner Council</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
