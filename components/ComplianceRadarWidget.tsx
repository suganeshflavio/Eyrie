"use client";

import React, { useState } from "react";
import { STATUTORY_DEADLINES, ComplianceDeadline } from "@/data/complianceData";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Bell,
  AlertCircle,
  FileCheck2,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ComplianceRadarWidget() {
  const [selectedDay, setSelectedDay] = useState<number>(11); // default GSTR-1
  const [reminderModalOpen, setReminderModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [reminderSaved, setReminderSaved] = useState(false);

  // Month stats for October 2026
  // Oct 1, 2026 is a Thursday (index 4: Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6)
  const totalDays = 31;
  const startDayOffset = 4; // Thursday

  const deadlinesMap: Record<number, ComplianceDeadline> = {};
  STATUTORY_DEADLINES.forEach((d) => {
    deadlinesMap[d.day] = d;
  });

  const activeDeadline = deadlinesMap[selectedDay];

  const handleNextFiling = () => {
    const nextDays = STATUTORY_DEADLINES.map((d) => d.day).filter(
      (day) => day > selectedDay
    );
    if (nextDays.length > 0) {
      setSelectedDay(nextDays[0]);
    } else {
      setSelectedDay(STATUTORY_DEADLINES[0].day);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setReminderSaved(true);
      setTimeout(() => {
        setReminderSaved(false);
        setReminderModalOpen(false);
        setEmailInput("");
      }, 2000);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with Royal Navy gradient wrap */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-6 sm:p-10 lg:p-12 text-white shadow-2xl overflow-hidden border border-white/15">
          {/* Background Ambient Glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          {/* Background Watermark TAX */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] font-black tracking-tighter text-white/[0.04] select-none pointer-events-none uppercase"
          >
            TAX
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Real-Time Radar Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                  Real-Time Compliance Radar
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
                  Never Miss a Statutory Due Date
                </h3>
                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
                  All-India statutory filings, GST deadlines, advance tax instalments, and MCA milestones tracked in real time. Select any day on the calendar to inspect filings.
                </p>
              </div>

              {/* Active Selected Date Card */}
              <div className="rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-inner space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-sky-400" />
                    <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-white">
                      October {selectedDay}, 2026
                    </span>
                  </div>

                  {activeDeadline ? (
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                        activeDeadline.isSpecial
                          ? "bg-sky-400 text-slate-950"
                          : "bg-blue-300 text-slate-950"
                      }`}
                    >
                      {activeDeadline.category} Due Date
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-slate-300">
                      Regular Operations Window
                    </span>
                  )}
                </div>

                {activeDeadline ? (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-1">
                      Form: {activeDeadline.formName}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                      {activeDeadline.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                      {activeDeadline.description}
                    </p>
                    <div className="flex items-start gap-1.5 text-xs text-blue-200">
                      <FileCheck2 className="w-3.5 h-3.5 flex-shrink-0 text-sky-300 mt-0.5" />
                      <span>{activeDeadline.applicability}</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-2">
                    <div className="text-sm font-semibold text-white mb-1">
                      No statutory due dates scheduled on this date.
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Routine accounting, books closing, and audit review operations proceed as scheduled.
                    </p>
                    <button
                      onClick={handleNextFiling}
                      className="mt-3 text-xs font-bold text-sky-300 hover:text-sky-200 inline-flex items-center gap-1 transition-colors underline"
                    >
                      Jump to next statutory filing →
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setReminderModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#0052CC] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/40 inline-flex items-center gap-2 transition-all duration-200"
                >
                  <Bell className="w-4 h-4" />
                  <span>Get Free Calendar Reminders</span>
                </button>

                <button
                  onClick={() => setSelectedDay(11)}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  GSTR-1 Due Day (11 Oct)
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Monthly Calendar Grid */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950/50 backdrop-blur-md border border-white/15 p-5 sm:p-6 shadow-2xl">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-sky-400 rounded-full" />
                    <span className="text-lg font-black text-white">
                      October 2026
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-blue-200 bg-white/10 px-2.5 py-1 rounded-md">
                      10 Deadlines This Month
                    </span>
                  </div>
                </div>

                {/* Day of Week Labels */}
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <div
                      key={i}
                      className="text-xs font-bold text-blue-300 py-1"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                  {/* Empty offset cells */}
                  {Array.from({ length: startDayOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-9 sm:h-10" />
                  ))}

                  {/* Day cells 1 to 31 */}
                  {Array.from({ length: totalDays }).map((_, i) => {
                    const day = i + 1;
                    const hasDeadline = !!deadlinesMap[day];
                    const isSelected = day === selectedDay;
                    const isSpecial = deadlinesMap[day]?.isSpecial;

                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        title={
                          hasDeadline
                            ? `${deadlinesMap[day].formName}: ${deadlinesMap[day].title}`
                            : `Day ${day}`
                        }
                        className={`h-9 sm:h-10 rounded-lg text-xs font-bold transition-all relative flex items-center justify-center ${
                          isSelected
                            ? "bg-white text-blue-900 ring-2 ring-sky-400 font-black shadow-lg scale-105 z-10"
                            : hasDeadline
                            ? isSpecial
                              ? "bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md hover:scale-105"
                              : "bg-[#0052CC] text-white shadow-sm hover:scale-105"
                            : "bg-white/5 hover:bg-white/15 text-slate-300"
                        }`}
                      >
                        <span>{day}</span>
                        {hasDeadline && !isSelected && (
                          <span className="absolute bottom-1 w-1 h-1 rounded-full bg-sky-300" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200 flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-[#0052CC]" />
                    <span>Statutory Due Date</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-sky-400" />
                    <span>Special Milestone</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-white" />
                    <span>Selected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reminder Subscription Modal */}
      {reminderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
            <button
              onClick={() => setReminderModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-[#0052CC] dark:text-blue-400 mx-auto flex items-center justify-center mb-3">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                All-India Compliance Alerts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Receive proactive reminders 7 days and 48 hours prior to every GST, TDS, advance tax, and MCA deadline.
              </p>
            </div>

            {reminderSaved ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-center font-bold text-sm">
                ✓ Reminder preferences saved! We will keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-slate-300 mb-1">
                    Corporate Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="cfo@yourcompany.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-sm transition-all"
                >
                  Activate Free Calendar Alerts
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
