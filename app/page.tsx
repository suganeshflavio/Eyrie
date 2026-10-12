import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroVideoCarousel from "@/components/HeroVideoCarousel";
import AllianceShowcase from "@/components/AllianceShowcase";
import PracticeAreasGrid from "@/components/PracticeAreasGrid";
import KinPillars from "@/components/KinPillars";
import ComplianceRadarWidget from "@/components/ComplianceRadarWidget";
import IndiaPresenceMap from "@/components/IndiaPresenceMap";
import Footer from "@/components/Footer";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import {
  Factory,
  Landmark,
  Activity,
  Cpu,
  Truck,
  Rocket,
  Store,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const featuredIndustries = INDUSTRIES_DATA.slice(0, 8);
  const industryIconMap: Record<string, React.ElementType> = {
    factory: Factory,
    landmark: Landmark,
    activity: Activity,
    cpu: Cpu,
    truck: Truck,
    rocket: Rocket,
    store: Store,
    shield: Shield,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      {/* Universal Responsive Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Flagship Hero Video Carousel */}
        <HeroVideoCarousel />

        {/* Strategic Alliance Trio Showcase */}
        <AllianceShowcase />

        {/* Practice Areas Grid (01 to 08) */}
        <PracticeAreasGrid />

        {/* Core Principles & Guiding Bedrock (Knowledge, Integrity, Innovation) */}
        <KinPillars />

        {/* 17+ Core Industries Grid */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
                  Industry Domain Specializations
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Specialized Advisory Across 17+ Core Sectors
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
                  Tailored audit protocols, transfer pricing benchmarking, and indirect tax optimization mapped directly to industry economics.
                </p>
              </div>

              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0052CC] dark:text-blue-400 hover:text-[#003da1] dark:hover:text-blue-300 transition-colors self-start md:self-auto"
              >
                <span>Explore All 17+ Sectors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredIndustries.map((ind) => {
                const IconComponent = industryIconMap[ind.icon] || Factory;
                return (
                  <div
                    key={ind.id}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0052CC] dark:text-blue-400 flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {ind.name}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {ind.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 space-y-1.5">
                      {ind.keyServices.slice(0, 2).map((srv) => (
                        <div
                          key={srv}
                          className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="truncate">{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real-Time Compliance Radar Widget */}
        <ComplianceRadarWidget />

        {/* Interactive 9-City PAN-India Network Hub Map */}
        <IndiaPresenceMap />
      </main>

      {/* Full Institutional Footer */}
      <Footer />
    </div>
  );
}
