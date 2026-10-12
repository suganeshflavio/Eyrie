"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRESENCE_CITIES } from "@/data/presenceData";
import { SERVICES_DATA } from "@/data/servicesData";
import { TOP_BAR_CONTACT } from "@/data/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Building2,
  ShieldAlert,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const defaultOffice = searchParams.get("office") || "salem";
  const defaultService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService || SERVICES_DATA[0].slug,
    office: defaultOffice,
    matterDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: SERVICES_DATA[0].slug,
        office: "salem",
        matterDetails: "",
      });
    }, 4000);
  };

  const selectedOfficeObj =
    PRESENCE_CITIES.find((c) => c.id === formData.office) || PRESENCE_CITIES[0];

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
                Direct Partner Access
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Connect With Our Partners
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Whether preparing for a statutory audit, responding to an appellate tax notice, or restructuring a multi-entity group, speak with a partner who will personally direct your matter.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#090D16]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Office Coordinates */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400 block mb-2">
                    Central Practice Coordination
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                    Salem Operations Hub & All-India Practice Desks
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    Our central Salem coordination hub syncs workstreams across Delhi, Chennai, Bengaluru, Mumbai, Goa, Mysuru, Namakkal, and Madurai.
                  </p>
                </div>

                {/* Direct Connect Cards */}
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Official Practice Inquiries
                      </div>
                      <a
                        href={`mailto:${TOP_BAR_CONTACT.email}`}
                        className="text-base font-bold text-slate-900 dark:text-white hover:text-[#0052CC] transition-colors"
                      >
                        {TOP_BAR_CONTACT.email}
                      </a>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Guaranteed partner response within 24 hours.
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Direct Partner Helpline
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <a
                          href={`tel:${TOP_BAR_CONTACT.phonePrimary.replace(/\s+/g, "")}`}
                          className="text-base font-bold text-slate-900 dark:text-white hover:text-[#0052CC] transition-colors"
                        >
                          {TOP_BAR_CONTACT.phonePrimary}
                        </a>
                        <a
                          href={`tel:${TOP_BAR_CONTACT.phoneSecondary.replace(/\s+/g, "")}`}
                          className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#0052CC] transition-colors"
                        >
                          {TOP_BAR_CONTACT.phoneSecondary}
                        </a>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Monday – Saturday: 9:30 AM to 7:00 PM IST
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Salem Central Hub (HQ)
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Team Eyrie Central Practice Coordination Centre
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Commercial Hub Road, Salem, Tamil Nadu - 636004
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Regional Node Highlight */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0052CC] to-blue-900 text-white shadow-lg space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                    Active Regional Desk Target:
                  </span>
                  <h4 className="text-lg font-black text-white">
                    {selectedOfficeObj.name} Desk ({selectedOfficeObj.state})
                  </h4>
                  <p className="text-xs text-blue-100">
                    {selectedOfficeObj.leadRole} • Ph: {selectedOfficeObj.phone}
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Booking Form */}
              <div className="lg:col-span-7 rounded-3xl bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400 block mb-1">
                    Confidential Query
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Schedule Partner Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Please provide an overview of your organization and statutory requirement. Strict non-disclosure standard applies.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                      Consultation Request Received
                    </h4>
                    <p className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed max-w-md mx-auto">
                      Thank you. A senior practice partner from the <strong>{selectedOfficeObj.name}</strong> hub will contact you directly within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Sundaram"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Corporate / Enterprise Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Engineering Ltd"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Corporate Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="cfo@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98457 XXXXX"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Primary Practice Area Needed *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Preferred Regional Node *
                        </label>
                        <select
                          value={formData.office}
                          onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        >
                          {PRESENCE_CITIES.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name} {c.isHub ? "(Central HQ Hub)" : `(${c.state})`}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Matter Overview / Specific Questions *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.matterDetails}
                        onChange={(e) => setFormData({ ...formData, matterDetails: e.target.value })}
                        placeholder="Please describe the context of your inquiry (e.g., statutory audit schedule, tax reassessment under Sec 148, transfer pricing study, company restructuring)..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                      >
                        <Send className="w-4 h-4" />
                        <span>Dispatch Inquire to Partner Desk</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 text-center pt-1">
                      🔒 Fiduciary Non-Disclosure: All communications handled under ICAI professional privilege and confidentiality guidelines.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <ContactFormContent />
    </Suspense>
  );
}
