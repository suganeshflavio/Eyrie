import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/data/servicesData";
import {
  Scale,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Building2,
  Briefcase,
  Layers,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Services & Practice Areas — Team Eyrie | Chartered Accountants",
  description:
    "Comprehensive corporate, taxation, assurance, and financial advisory services executed to international standards across 8 core practice areas.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ElementType> = {
    scale: Scale,
    "shield-check": ShieldCheck,
    "trending-up": TrendingUp,
    receipt: Receipt,
    "building-2": Building2,
    briefcase: Briefcase,
    layers: Layers,
    "file-text": FileText,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Services Page Hero */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,82,204,0.25),transparent_50%)]" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
                Integrated Disciplines
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Our Practice Areas
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Single-window statutory assurance, high-stakes tax jurisprudence, transaction due diligence, and corporate governance executed by senior FCA partners.
              </p>
            </div>
          </div>
        </section>

        {/* 8 Detailed Practice Area Cards */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = iconMap[service.icon] || Briefcase;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left details */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-black text-[#0052CC] dark:text-blue-400 bg-blue-100 dark:bg-blue-950/60">
                          {service.number}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 text-[#0052CC] dark:text-blue-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Practice Discipline
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {service.tagline}
                      </p>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                        {service.fullDesc}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                        >
                          <span>Detailed Scope & Regulatory Framework</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right deliverables box */}
                    <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-950 p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Advisory Deliverables
                      </div>
                      <div className="space-y-2">
                        {service.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                        <span className="text-[11px] font-bold text-slate-400 block mb-1">
                          Applicable Statutory Frameworks:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.keyFrameworks.map((fw) => (
                            <span
                              key={fw}
                              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400"
                            >
                              {fw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
