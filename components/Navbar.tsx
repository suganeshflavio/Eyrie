"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { TOP_BAR_CONTACT, QUICK_LINKS, MAIN_NAV_ITEMS } from "@/data/navigation";
import { Mail, Phone, Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Contact Coordinates */}
          <div className="flex items-center gap-6">
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
          </div>

          {/* Quick links & Access buttons */}
          <div className="flex items-center gap-3">
            {QUICK_LINKS.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.external && <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />}
                </a>
                {idx < QUICK_LINKS.length - 1 && <span className="text-slate-700">|</span>}
              </React.Fragment>
            ))}

            <Link
              href="/login"
              className="ml-2 inline-flex items-center justify-center px-3.5 py-1 rounded bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-[11px] shadow-sm transition-all"
            >
              Client Login
            </Link>

            <ThemeToggle className="ml-1 !w-7 !h-7 !border-slate-700" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-md py-2.5"
            : "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md py-3.5 border-b border-slate-200/80 dark:border-slate-800/80"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
          {/* Brand Logo - Fixed flex-shrink-0 to prevent shrinking */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Nav Items - Strictly single line with whitespace-nowrap */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5 lg:gap-1 xl:gap-2 flex-1 min-w-0">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 lg:px-2.5 xl:px-3 py-1.5 rounded-lg text-xs lg:text-[13px] xl:text-[14px] font-semibold whitespace-nowrap transition-all relative ${
                    isActive
                      ? "text-[#0052CC] dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 font-bold"
                      : "text-slate-700 dark:text-slate-200 hover:text-[#0052CC] dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#0052CC] dark:bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-4 py-2 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-xs xl:text-sm whitespace-nowrap shadow-sm transition-all duration-200 active:scale-95"
            >
              <span>Talk to a Partner</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* <ThemeToggle className="!w-9 !h-9" /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl z-40 overflow-y-auto px-5 py-6 flex flex-col border-b border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1 mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Navigation
            </div>
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold transition-all ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          {/* Quick links on mobile */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Quick Resources
            </div>
            <div className="grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.external && <ArrowUpRight className="w-3 h-3 text-slate-400" />}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Action CTAs */}
          <div className="mt-auto pt-4 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white text-center font-bold text-sm shadow-md"
            >
              Talk to a Partner
            </Link>
            <Link
              href="/login"
              className="w-full py-2.5 rounded-xl bg-blue-900 text-white text-center font-bold text-sm shadow-sm"
            >
              Client Portal Login
            </Link>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
              <a href={`tel:${TOP_BAR_CONTACT.phonePrimary}`} className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{TOP_BAR_CONTACT.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
