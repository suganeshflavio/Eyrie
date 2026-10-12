"use client";

import React from "react";
import Link from "next/link";
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
} from "lucide-react";

export default function PracticeAreasGrid({
  limit,
  showAllLink = true,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
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

  const services = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA;

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
              Integrated Practice Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              One Window for Tax, Assurance and Corporate Advisory
            </h2>
          </div>

          {showAllLink && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0052CC] dark:text-blue-400 hover:text-[#003da1] dark:hover:text-blue-300 transition-colors self-start md:self-auto"
            >
              <span>View All 8 Practice Areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Briefcase;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Number badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-[#0052CC] dark:group-hover:text-blue-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-[#0052CC] dark:text-blue-400 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[#0052CC] dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer Arrow */}
                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#0052CC] dark:text-blue-400">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
