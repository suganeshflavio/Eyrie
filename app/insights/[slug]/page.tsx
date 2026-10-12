import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INSIGHTS_DATA } from "@/data/insightsData";
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Share2,
  ArrowLeft,
  Phone,
} from "lucide-react";

export function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Insight Article — Team Eyrie" };

  return {
    title: `${article.title} — Team Eyrie`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/insights" className="hover:text-white transition-colors">
                Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-400 font-semibold">{article.category}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/30 border border-blue-400/40 text-blue-300">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-sm">
                TE
              </div>
              <div>
                <div className="text-sm font-bold text-white">{article.author}</div>
                <div className="text-xs text-slate-400">{article.authorRole}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-white dark:bg-[#090D16]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            {/* Executive Summary Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Executive Briefing
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {article.summary}
              </p>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400 block">
                  Actionable Practice Takeaways:
                </span>
                {article.keyTakeaways.map((takeaway) => (
                  <div
                    key={takeaway}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Longform Text */}
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-6">
              <p>{article.content}</p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">
                Statutory Safeguards & Evidentiary Discipline
              </h2>
              <p>
                Whether presenting arguments before judicial tribunals or establishing automated accounting controls, our firm advises corporate finance leadership to prioritize contemporaneous documentation. Under dynamic judicial benchmarks, retroactive justifications routinely fail regulatory scrutiny.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">
                Institutional Support from Team Eyrie
              </h2>
              <p>
                Our specialized practice groups in New Delhi, Salem, Chennai, and Bengaluru work shoulder-to-shoulder with corporate boards, finance directors, and internal tax teams to structure robust, defensible frameworks that protect enterprise value and maintain flawless compliance.
              </p>
            </div>

            {/* Author Footer & Next steps */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#0052CC]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-xs sm:text-sm shadow-md"
              >
                <span>Discuss Matter With Author Desk</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
