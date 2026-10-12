import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";
import {
  ChevronRight,
  CheckCircle2,
  Scale,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Building2,
  Briefcase,
  Layers,
  FileText,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Practice Area — Team Eyrie" };

  return {
    title: `${service.title} — Team Eyrie | Chartered Accountants`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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

  const IconComp = iconMap[service.icon] || Briefcase;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#090D16] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-slate-900 text-white py-14 lg:py-20 border-b border-slate-800">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className="hover:text-white transition-colors">
                Practice Areas
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-400 font-semibold">{service.title}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-md bg-blue-600/30 border border-blue-500/40 text-blue-300 font-mono font-bold text-xs">
                Discipline {service.number}
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <IconComp className="w-5 h-5" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-4xl leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-medium">
              {service.tagline}
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Full Overview, Scopes, Target Clients */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Practice Overview
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Key Advisory & Statutory Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Client Profiles */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Client Scenarios & Applicability
                  </h3>
                  <div className="space-y-2.5">
                    {service.targetClients.map((client) => (
                      <div
                        key={client}
                        className="p-3.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#0052CC]" />
                        <span>{client}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Statutory Frameworks & Consult Partner Box */}
              <div className="lg:col-span-4 space-y-6">
                {/* Statutory Frameworks Card */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Governing Legislation & Standards
                  </h4>
                  <div className="space-y-2">
                    {service.keyFrameworks.map((fw) => (
                      <div
                        key={fw}
                        className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200"
                      >
                        {fw}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consult Partner Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0052CC] to-blue-900 text-white shadow-xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black text-white leading-tight">
                    Discuss Your Matter with a Practice Partner
                  </h4>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    Direct partner oversight across Salem, Delhi, Chennai, and Bengaluru practice desks. Confidentiality assured.
                  </p>
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#0052CC] font-bold text-xs sm:text-sm text-center block transition-all shadow-md"
                  >
                    Schedule Confidential Consultation →
                  </Link>
                </div>

                {/* Back to All Services */}
                <Link
                  href="/services"
                  className="block text-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#0052CC] dark:hover:text-blue-400 pt-2"
                >
                  ← Back to All 8 Practice Areas
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
