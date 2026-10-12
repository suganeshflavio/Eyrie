import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndiaPresenceMap from "@/components/IndiaPresenceMap";
import { PRESENCE_CITIES } from "@/data/presenceData";
import { MapPin, Phone, Mail, Building, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our PAN-India Presence — 9 Cities, One Coordinated Practice | Team Eyrie",
  description:
    "Team Eyrie operates across Salem (Central Hub), New Delhi, Chennai, Bengaluru, Mumbai, Goa, Mysuru, Namakkal, and Madurai.",
};

export default function PresencePage() {
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
                National Footprint
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Our PAN-India Presence
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Coordinated seamlessly from our central operations hub in Salem, Tamil Nadu, with direct regional offices and associate practices spanning 9 commercial centers.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Vector Map Widget */}
        <IndiaPresenceMap />

        {/* Comprehensive 9-City Office Directory */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC] dark:text-blue-400 block mb-2">
                Regional Desks Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                All-India Office Coordinates & Practice Leads
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
                Connect directly with our senior partners and practice directors at each regional commercial node.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PRESENCE_CITIES.map((city) => (
                <div
                  key={city.id}
                  className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                    city.isHub
                      ? "bg-white dark:bg-slate-900 border-[#0052CC] shadow-xl ring-2 ring-blue-500/20"
                      : "bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-blue-500/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                          city.isHub
                            ? "bg-blue-100 dark:bg-blue-900 text-[#0052CC] dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                            : "bg-blue-50 dark:bg-blue-950/60 text-[#0052CC] dark:text-blue-400 border border-blue-100 dark:border-blue-900"
                        }`}
                      >
                        {city.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        {city.state}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                      {city.name} {city.isHub && "★"}
                    </h3>

                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
                      {city.leadRole}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                      {city.description}
                    </p>

                    {/* Address & Phone */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0052CC] dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{city.address}</span>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <Phone className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <a
                          href={`tel:${city.phone.replace(/\s+/g, "")}`}
                          className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600"
                        >
                          {city.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <a
                          href={`mailto:${city.email}`}
                          className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600"
                        >
                          {city.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      href={`/contact?office=${city.id}`}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#0052CC] text-slate-800 hover:text-white dark:bg-slate-800 dark:hover:bg-[#0052CC] dark:text-slate-200 font-bold text-xs text-center inline-flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Connect with {city.name} Desk</span>
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
