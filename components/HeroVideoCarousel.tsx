"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { VIDEO_SLIDES } from "@/data/videosData";
import { NETWORK_METRICS } from "@/data/allianceData";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  ShieldCheck,
  Scale,
  Briefcase,
  Layers,
} from "lucide-react";

export default function HeroVideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const slideDuration = 4000; // 7 seconds per slide

  const slideIcons = [
    Layers,
    Scale,
    ShieldCheck,
    Briefcase,
  ];

  // Auto-advance slides unless paused
  useEffect(() => {
    if (isPausedByUser) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VIDEO_SLIDES.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [isPausedByUser, currentSlide]);

  // Sync active video playback
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentSlide) {
        if (isPlaying) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [currentSlide, isPlaying]);

  const togglePlay = () => {
    const nextPlay = !isPlaying;
    setIsPlaying(nextPlay);
    setIsPausedByUser(!nextPlay);
    const activeVideo = videoRefs.current[currentSlide];
    if (activeVideo) {
      if (nextPlay) activeVideo.play().catch(() => {});
      else activeVideo.pause();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % VIDEO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + VIDEO_SLIDES.length) % VIDEO_SLIDES.length);
  };

  const slide = VIDEO_SLIDES[currentSlide];
  const CurrentIcon = slideIcons[currentSlide] || Layers;

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
      {/* Video Background Layer with Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {VIDEO_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover object-center scale-105 transform filter brightness-75 contrast-105"
            />
          </div>
        ))}

        {/* Sophisticated Gradients & Mesh Overlays for Text Legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0052CC]/25 rounded-full blur-3xl pointer-events-none z-20" />
        <div className="absolute top-1/2 right-12 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-20" />
      </div>

      {/* Main Slide Content */}
      <div className="relative z-30 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="w-2 h-2 rounded-full bg-[#0052CC] shadow-[0_0_8px_#38bdf8] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              {slide.tagline}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-5 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="text-white block">{slide.title}</span>
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
              {slide.titleAccent}
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal animate-in fade-in slide-in-from-bottom-4 duration-700">
            {slide.description}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href={slide.ctaLink}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052CC] hover:bg-[#0045ad] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={slide.secondaryCtaLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-200"
            >
              <span>{slide.secondaryCtaText}</span>
            </Link>
          </div>
        </div>

        {/* Carousel Navigation Bar & Slide Selector */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Slide Tab Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-3xl">
            {VIDEO_SLIDES.map((item, idx) => {
              const TabIcon = slideIcons[idx] || Layers;
              const isActive = idx === currentSlide;
              return (
                <button
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left p-2.5 rounded-lg border transition-all text-xs font-semibold flex items-center gap-2.5 ${
                    isActive
                      ? "bg-white/15 border-blue-400 text-white shadow-md shadow-blue-500/10"
                      : "bg-black/30 border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon
                    className={`w-4 h-4 flex-shrink-0 ${
                      isActive ? "text-blue-400" : "text-slate-500"
                    }`}
                  />
                  <div className="truncate">
                    <span className="block truncate font-bold text-[11px] sm:text-xs">
                      {item.pillar}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Metrics Strip */}
      <div className="relative z-30 w-full bg-slate-900/90 backdrop-blur-xl border-t border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x divide-slate-800/60">
          {NETWORK_METRICS.map((metric, i) => (
            <div key={metric.label} className={i !== 0 ? "pl-4 md:pl-8" : ""}>
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-1">
                <span className="text-blue-400">{metric.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 hidden sm:block">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
