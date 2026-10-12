import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KinPillars from "@/components/KinPillars";
import { WHY_TEAM_EYRIE } from "@/data/whyData";
import {
  Users2,
  Award,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Why Team Eyrie — Strategic Distinct Advantages | Chartered Accountants",
  description:
    "Discover why enterprises trust Team Eyrie: three-firm synergy, partner-led accountability, single-window multidisciplinary practice, and defensible fiduciary rigor.",
};

export default function WhyTeamEyriePage() {
  const iconMap: Record<string, React.ElementType> = {
    "users-2": Users2,
    award: Award,
    layers: Layers,
    cpu: Cpu,
    "shield-check": ShieldCheck,
  };

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
                Institutional Differentiators
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Why Team Eyrie
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Built on the bedrock of three esteemed CA partnerships. We combine regional intimacy with national scale, partner-led dedication, and zero procedural compromise.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Strategic Advantages */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {WHY_TEAM_EYRIE.map((adv, idx) => {
              const IconComp = iconMap[adv.icon] || ShieldCheck;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={adv.number}
                  className={`p-8 sm:p-10 lg:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black font-mono text-[#0052CC] dark:text-blue-400">
                        {adv.number}
                      </span>
                      <span className="h-6 w-px bg-slate-300 dark:bg-slate-700" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Strategic Advantage
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {adv.title}
                    </h2>

                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {adv.subtitle}
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {adv.description}
                    </p>

                    <div className="pt-2 space-y-2">
                      {adv.bulletPoints.map((pt) => (
                        <div
                          key={pt}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex items-center justify-center">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-900 text-white flex items-center justify-center shadow-2xl">
                      <IconComp className="w-14 h-14 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Guiding Principles */}
        <KinPillars />

        {/* Action Banner */}
        <section className="py-16 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Experience the Team Eyrie Standard
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a confidential discovery meeting with a partner in Salem, New Delhi, Chennai, or Bengaluru.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-sm shadow-lg"
              >
                <span>Connect With a Practice Partner</span>
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
