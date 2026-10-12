"use client";

import React from "react";
import Link from "next/link";
import { ALLIANCE_FIRMS } from "@/data/allianceData";
import { Building2, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function AllianceShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-[#0052CC] dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
            Strategic Alliance Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Formed by Three Esteemed Chartered Accountancy Partnerships
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Uniting North India litigation advocacy, South India industrial assurance, and capital markets banking governance under one coordinated national practice.
          </p>
        </div>

        {/* 3 Alliance Firm Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ALLIANCE_FIRMS.map((firm) => (
            <div
              key={firm.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 rounded-t-full opacity-90" />

              <div>
                {/* Header & Hub */}
                <div className="flex items-start justify-between gap-3 mb-4 mt-2">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0052CC] dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {firm.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0052CC] dark:group-hover:text-blue-400 transition-colors">
                  {firm.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>{firm.hub}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal">
                  {firm.description}
                </p>

                {/* Specialties bullet points */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Core Capabilities
                  </span>
                  {firm.specialties.map((spec) => (
                    <div key={spec} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Partnership Charter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
