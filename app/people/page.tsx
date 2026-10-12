import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PEOPLE_PROFILES } from "@/data/peopleData";
import { ArrowRight, CheckCircle2, Award, Briefcase } from "lucide-react";

export const metadata = {
  title: "Our Team & Partner Council — Team Eyrie | Chartered Accountants",
  description:
    "Meet the senior partners, Chartered Accountants, Company Secretaries, and Registered Valuers leading Team Eyrie's nationwide professional practice.",
};

export default function PeoplePage() {
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
                Fiduciary Leadership
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Our Senior Partner Council
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Seasoned FCA partners, practicing Company Secretaries, registered valuers, and litigation counsel providing partner-led accountability across every matter.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Showcase Grid */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {PEOPLE_PROFILES.map((person) => (
                <div
                  key={person.id}
                  className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 p-6 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Initials Avatar Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0052CC] to-blue-800 text-white font-black text-xl flex items-center justify-center shadow-md">
                        {person.initials}
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400">
                        {person.practiceArea.split("&")[0].trim()}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1 leading-tight">
                      {person.name}
                    </h2>

                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {person.role}
                    </div>

                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-4">
                      {person.qualifications} • {person.location}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                      {person.bio}
                    </p>

                    {/* Competencies */}
                    <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800 space-y-1.5 mb-4">
                      {person.coreCompetencies.slice(0, 3).map((comp) => (
                        <div
                          key={comp}
                          className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#0052CC] dark:text-blue-400 flex-shrink-0" />
                          <span className="truncate">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800">
                    <Link
                      href={`/people/${person.slug}`}
                      className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-[#0052CC] hover:text-white hover:border-[#0052CC] text-slate-800 dark:text-slate-200 font-bold text-xs text-center inline-flex items-center justify-center gap-1.5 transition-all shadow-xs"
                    >
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
