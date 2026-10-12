"use client";

import React from "react";
import Link from "next/link";
import { CORE_PILLARS } from "@/data/allianceData";
import { BookOpen, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function KinPillars() {
  const pillarIcons: Record<string, React.ElementType> = {
    K: BookOpen,
    I: ShieldCheck,
    N: Cpu,
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
              Guiding Principles
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Transforming Regulatory Complexity into Strategic Confidence
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A multidisciplinary network formed by three Chartered Accountancy firms: nearly 20 Chartered Accountants supported by Company Secretaries, Advocates, Cost Accountants, MBAs, Insolvency Professionals, and Registered Valuation Specialists.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>Read Network Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vision-mission"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 font-bold text-xs sm:text-sm transition-all"
              >
                <span>Vision & Mission</span>
              </Link>
            </div>
          </div>

          {/* Right Pillar Cards (K - I - N) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {CORE_PILLARS.map((pillar) => {
              const IconComp = pillarIcons[pillar.letter] || ShieldCheck;
              return (
                <div
                  key={pillar.letter}
                  className="rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-blue-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-[#0052CC] dark:text-blue-400 font-mono">
                        {pillar.letter}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0052CC] dark:text-blue-400 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-[#0052CC] dark:text-blue-400 uppercase tracking-wider">
                    Core Bedrock
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
