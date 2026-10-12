"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SERVICES_DATA } from "@/data/servicesData";
import { TOP_BAR_CONTACT } from "@/data/navigation";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800/80">
      {/* Pre-footer Call to Action Band */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1 block">
              Strategic Fiduciary Counsel
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trusted advice. Practical solutions. Sustainable growth.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Launching a venture, restructuring corporate assets, or managing complex tax disputes? Speak with a partner who will own your matter end-to-end.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl transition-all duration-200 active:scale-95 flex-shrink-0"
          >
            Connect With Our Partners
          </Link>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" forceTheme="dark" />

            <p className="text-xs font-bold text-slate-300 italic pt-1">
              Together, We Create Value. Together, We Build Trust.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Team Eyrie is India&apos;s premier integrated multidisciplinary professional services network delivering institutional excellence across Taxation, Statutory Assurance, Corporate Governance, and Transaction Advisory.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <a
                href={`mailto:${TOP_BAR_CONTACT.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{TOP_BAR_CONTACT.email}</span>
              </a>
              <a
                href={`tel:${TOP_BAR_CONTACT.phonePrimary.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{TOP_BAR_CONTACT.phonePrimary}</span>
              </a>
              <a
                href={`tel:${TOP_BAR_CONTACT.phoneSecondary.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{TOP_BAR_CONTACT.phoneSecondary}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:text-blue-400 transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/why-team-eyrie" className="hover:text-blue-400 transition-colors">
                  Why Team Eyrie
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-400 transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/people" className="hover:text-blue-400 transition-colors">
                  Our People & Partners
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-blue-400 transition-colors">
                  Insights & Updates
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers & Articleship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Network Hubs & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              National Presence
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              Salem Central Hub • New Delhi • Chennai • Bengaluru • Mumbai • Goa • Mysuru • Namakkal • Madurai
            </p>

            <h4 className="text-xs font-black uppercase tracking-wider text-white pt-2">
              Client & Student Suites
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://apps.teameyrie.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-slate-300 hover:text-white"
              >
                <span>Documentation Suite</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href="https://web.classplusapp.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-slate-300 hover:text-white"
              >
                <span>LMS Student Portal</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <Link
                href="/login"
                className="flex items-center justify-between text-blue-400 hover:text-blue-300 font-bold"
              >
                <span>Client Portal Login →</span>
              </Link>
            </div>

            {/* Social links */}
            <div className="pt-3 flex items-center gap-3 text-xs font-semibold">
              <a
                href="https://linkedin.com/company/team-eyrie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://twitter.com/teameyrie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Twitter
              </a>
              <span>•</span>
              <a
                href="https://facebook.com/teameyrie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Team Eyrie. All rights reserved. Registered Chartered Accountants Network.
          </div>
          <div className="italic text-slate-400">
            Together, We Create Value. Together, We Build Trust.
          </div>
          <div>
            Designed and managed by{" "}
            <a
              href="https://www.navanalatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white underline underline-offset-2"
            >
              NavaNala Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
