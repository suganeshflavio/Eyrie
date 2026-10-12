import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PEOPLE_PROFILES } from "@/data/peopleData";
import {
  ChevronRight,
  MapPin,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function generateStaticParams() {
  return PEOPLE_PROFILES.map((person) => ({
    slug: person.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = PEOPLE_PROFILES.find((p) => p.slug === slug);
  if (!person) return { title: "Partner Profile — Team Eyrie" };

  return {
    title: `${person.name} (${person.qualifications}) — Team Eyrie`,
    description: person.bio,
  };
}

export default async function PersonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = PEOPLE_PROFILES.find((p) => p.slug === slug);

  if (!person) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/people" className="hover:text-white transition-colors">
                Our Team
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-400 font-semibold">{person.name}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#0052CC] to-blue-800 text-white font-black text-3xl sm:text-4xl flex items-center justify-center shadow-xl border-2 border-white/20">
                {person.initials}
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/30 border border-blue-400/40 text-blue-300 mb-2 inline-block">
                  {person.practiceArea}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {person.name}
                </h1>
                <div className="text-sm sm:text-base font-semibold text-slate-300 mt-1">
                  {person.role} • <span className="font-mono text-blue-400">{person.qualifications}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400" />
                  <span>{person.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Details Body */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Biography & Competencies */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Professional Background & Standing
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-line">
                    {person.bio}
                  </p>
                </div>

                {/* Core Competencies */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Domain Competencies & Practice Focus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {person.coreCompetencies.map((c) => (
                      <div
                        key={c}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Institutional Memberships */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Statutory Memberships & Accreditations
                  </h3>
                  <div className="space-y-2.5">
                    {person.memberships.map((m) => (
                      <div
                        key={m}
                        className="p-3.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-3"
                      >
                        <Award className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Consultation Action Box */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0052CC] to-blue-950 text-white shadow-xl space-y-4">
                  <h4 className="text-xl font-black text-white">
                    Consult with {person.name}
                  </h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Direct partner consultation on high-stakes tax appeals, statutory audits, secretarial compliance, or valuation engagements.
                  </p>
                  <Link
                    href={`/contact?partner=${person.id}`}
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#0052CC] font-bold text-xs sm:text-sm text-center block transition-all shadow-md"
                  >
                    Schedule Direct Partner Consultation →
                  </Link>
                </div>

                <Link
                  href="/people"
                  className="block text-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#0052CC] dark:hover:text-blue-400 pt-2"
                >
                  ← Back to All Partner Profiles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
