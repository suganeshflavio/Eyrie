import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KinPillars from "@/components/KinPillars";
import { CheckCircle2, ShieldCheck, Target, Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Vision, Mission & Institutional Charter — Team Eyrie | Chartered Accountants",
  description:
    "Discover Team Eyrie's founding mission and vision: uniting three esteemed CA partnerships to transform regulatory complexity into strategic enterprise confidence.",
};

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,82,204,0.25),transparent_50%)]" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
                Foundational Purpose
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Vision & Institutional Mission
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Empowering enterprise growth through uncompromising fiduciary integrity, technical jurisprudence, and modern collaborative technology.
              </p>
            </div>
          </div>
        </section>

        {/* Dual Cards: Vision & Mission */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
              {/* Vision Card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#0052CC] via-blue-800 to-indigo-950 p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/15">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Compass className="w-3.5 h-3.5 text-sky-300" />
                    <span>Our Vision</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-4">
                    To Be India’s Most Trusted & Technically Formidable Professional Services Network
                  </h2>

                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal mb-8">
                    To establish Team Eyrie as India’s foremost integrated multidisciplinary network—celebrated by enterprises, regulatory authorities, and the accounting profession for uncompromising independence, technical mastery, and strategic value creation.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-3">
                    Vision Pillars
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-blue-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
                      <span>National Scale with Local Care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
                      <span>Tech-Enabled Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
                      <span>High-Trust Fiduciary Standard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
                      <span>Sustainable Enterprise Growth</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 p-8 sm:p-10 lg:p-12 border-2 border-slate-200/90 dark:border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <Target className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Our Mission</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
                    Transforming Regulatory Complexity into Strategic Confidence
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
                    To deliver world-class professional assurance, tax jurisprudence, and transactional advisory by fusing decades of specialized legacy expertise with modern collaborative technology—enabling clients to navigate evolving economic frontiers with complete certainty.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/70 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400 mb-3">
                    Mission Execution
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0" />
                      <span>Defensible Statutory Counsel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0" />
                      <span>Partner-Led Accountability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0" />
                      <span>Seamless Single-Window Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0" />
                      <span>Developing Top Tier CA Talent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <KinPillars />

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Partner With An Institutional CA Network
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Our partners stand ready to assist your board with statutory assurance, direct tax litigation, or M&A transaction planning.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-sm shadow-lg"
              >
                <span>Connect With A Senior Partner</span>
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
