"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Lock, Mail, KeyRound, ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"client" | "staff">("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginFeedback(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setLoginFeedback(
        activeTab === "client"
          ? "Client portal is connecting to Team Eyrie secure cloud vault..."
          : "Authenticating staff single sign-on credentials..."
      );
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Card Container */}
          <div className="rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex justify-center mb-2">
                <Logo size="lg" forceTheme="dark" href="/" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                Institutional Client Portal
              </h1>
              <p className="text-xs text-slate-400">
                Encrypted single sign-on access to audit deliverables, tax filing dossiers, and statutory registers.
              </p>
            </div>

            {/* Segmented Tab Bar */}
            <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("client");
                  setLoginFeedback(null);
                }}
                className={`py-2 rounded-lg transition-all ${
                  activeTab === "client"
                    ? "bg-[#0052CC] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Client Organization
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("staff");
                  setLoginFeedback(null);
                }}
                className={`py-2 rounded-lg transition-all ${
                  activeTab === "staff"
                    ? "bg-[#0052CC] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Staff & Partner SSO
              </button>
            </div>

            {loginFeedback && (
              <div className="p-3.5 rounded-xl bg-blue-950/80 border border-blue-700/60 text-blue-200 text-xs text-center font-medium">
                {loginFeedback}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-300 mb-1">
                  {activeTab === "client" ? "Authorized Corporate Email" : "Staff Network Email"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      activeTab === "client" ? "cfo@yourcompany.com" : "partner@teameyrie.in"
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-slate-300">Password / Secret Key</label>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Please contact your Eyrie Lead Partner for credential recovery.");
                    }}
                    className="text-[11px] font-semibold text-blue-400 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-900 text-[#0052CC] focus:ring-0"
                  />
                  <span>Remember Session</span>
                </label>
                <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  256-Bit SSL
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0052CC] to-blue-700 hover:from-[#0045ad] hover:to-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Enter Secure Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Links to Ecosystem Portals */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center">
                Connected Institutional Platforms
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://apps.teameyrie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-between"
                >
                  <span className="truncate">Docs Suite</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
                <a
                  href="https://web.classplusapp.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-between"
                >
                  <span className="truncate">LMS Login</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
