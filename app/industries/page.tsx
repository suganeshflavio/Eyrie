import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
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
  Building,
  ShoppingBag,
  Sun,
  Scissors,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Industries Served — Team Eyrie | Chartered Accountants",
  description:
    "Specialized accounting, taxation, and statutory assurance tailored for 17+ core sectors including Manufacturing, BFSI, Healthcare, SaaS, Logistics, and MSMEs.",
};

export default function IndustriesPage() {
  const iconMap: Record<string, React.ElementType> = {
    factory: Factory,
    landmark: Landmark,
    activity: Activity,
    cpu: Cpu,
    truck: Truck,
    rocket: Rocket,
    store: Store,
    shield: Shield,
    building: Building,
    "shopping-bag": ShoppingBag,
    sun: Sun,
    scissors: Scissors,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,82,204,0.25),transparent_50%)]" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
                Sectoral Expertise
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Industries We Serve
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Specialized statutory assurance, unit cost intelligence, and defensible tax strategies mapped to the economic realities of 17+ core sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES_DATA.map((ind) => {
                const IconComp = iconMap[ind.icon] || Factory;
                return (
                  <div
                    key={ind.id}
                    className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 flex items-center justify-center mb-5">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {ind.name}
                      </h2>

                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {ind.shortDesc}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                        {ind.fullDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Domain Solutions:
                      </span>
                      {ind.keyServices.map((srv) => (
                        <div
                          key={srv}
                          className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0" />
                          <span>{srv}</span>
                        </div>
                      ))}

                      <div className="pt-4 mt-2">
                        <Link
                          href={`/contact?industry=${ind.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] dark:text-blue-400 hover:underline"
                        >
                          <span>Consult Sector Specialist</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
