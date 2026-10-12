import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INSIGHTS_DATA } from "@/data/insightsData";
import { Calendar, Clock, User, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Insights, Tax Circulars & Regulatory Updates — Team Eyrie",
  description:
    "Expert legal analysis, direct tax tribunal updates, GST reconciliations, and corporate secretarial jurisprudence curated by Team Eyrie partners.",
};

export default function InsightsPage() {
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
                Regulatory Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Insights & Advisory Updates
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Statutory circulars, appellate tribunal analyses, GST optimization frameworks, and pre-IPO governance blueprints authored by our senior practice leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INSIGHTS_DATA.map((article) => (
                <article
                  key={article.id}
                  className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="hover:text-[#0052CC] dark:hover:text-blue-400 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                      {article.summary}
                    </p>

                    {/* Key Takeaways */}
                    <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800 space-y-1.5 mb-5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Core Takeaways:
                      </div>
                      {article.keyTakeaways.map((takeaway) => (
                        <div
                          key={takeaway}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>By {article.author}</span>
                      <span className="block text-[11px] font-normal text-slate-400">
                        {article.authorRole}
                      </span>
                    </div>

                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0052CC] dark:text-blue-400 hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
