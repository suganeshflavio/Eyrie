"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "mark";
  size?: "sm" | "md" | "lg" | "xl";
  forceTheme?: "light" | "dark";
  href?: string;
}

export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cradling Arc (Silver/Slate Grey) */}
      <path
        d="M 44 96 C 44 156 156 156 156 96"
        stroke="#94A3B8"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        className="transition-colors duration-200"
      />

      {/* Central Blue Circle at base of cradle */}
      <circle cx="100" cy="144" r="9" fill="#0052CC" className="dark:fill-[#3B82F6]" />

      {/* Wing Blades */}
      {/* Bottom Blade (Royal Blue) */}
      <path
        d="M 82 128 C 96 114 116 100 138 90 L 128 106 C 110 115 96 124 82 128 Z"
        fill="#0052CC"
        className="dark:fill-[#2563EB]"
      />

      {/* Middle Blade (Silver Slate) */}
      <path
        d="M 74 110 C 92 90 118 72 146 62 L 134 78 C 112 88 92 102 74 110 Z"
        fill="#CBD5E1"
        className="dark:fill-[#E2E8F0]"
      />

      {/* Top Blade with Eagle Head & Beak (Royal Blue) */}
      <path
        d="M 68 90 C 86 64 115 42 146 30 C 151 28 155 28 158 29 C 160 30 162 31 161 33 C 159 34 156 35 154 36 C 156 38 156 41 154 43 L 144 48 C 122 60 94 78 68 90 Z"
        fill="#0052CC"
        className="dark:fill-[#3B82F6]"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  variant = "full",
  size = "md",
  forceTheme,
  href = "/",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
    xl: "h-16",
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="relative flex-shrink-0">
        <LogoMark
          className={
            size === "sm"
              ? "w-8 h-8"
              : size === "lg"
              ? "w-12 h-12"
              : size === "xl"
              ? "w-16 h-16"
              : "w-10 h-10"
          }
        />
      </div>

      {variant === "full" && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-black tracking-tight font-sans ${
              size === "sm"
                ? "text-lg"
                : size === "lg"
                ? "text-2xl"
                : size === "xl"
                ? "text-3xl"
                : "text-xl"
            } ${
              forceTheme === "light"
                ? "text-slate-900"
                : forceTheme === "dark"
                ? "text-white"
                : "text-slate-900 dark:text-white"
            }`}
          >
            Team Eyrie
          </span>
          <span
            className={`font-bold uppercase tracking-[0.22em] text-[#0052CC] dark:text-[#60A5FA] ${
              size === "sm"
                ? "text-[9px]"
                : size === "lg"
                ? "text-[11px]"
                : size === "xl"
                ? "text-xs"
                : "text-[10px]"
            }`}
          >
            Chartered Accountants
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center group transition-transform active:scale-95">
        {content}
      </Link>
    );
  }

  return content;
}
