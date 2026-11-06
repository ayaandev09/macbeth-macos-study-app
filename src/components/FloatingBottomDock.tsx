"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ALL_CHAPTERS, TOTAL_CHAPTERS_COUNT } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Zap,
  ListFilter,
  Headphones,
  VolumeX,
  Maximize2,
  Minimize2,
} from "lucide-react";

type SoundMode = "off" | "rain" | "drone";

export function FloatingBottomDock() {
  const {
    activeChapterId,
    setActiveChapter,
    viewMode,
    setViewMode,
    completedChapters,
    toggleChapterComplete,
    speedReadMode,
    toggleSpeedReadMode,
    setChapterSheetOpen,
    sidebarCollapsed,
    toggleSidebar,
  } = useStudyStore();

  const [soundMode, setSoundMode] = useState<SoundMode>("off");
  const audioCtxRef = useRef<AudioContext | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const stopAudio = () => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  };

  const cycleSoundMode = () => {
    const next: SoundMode =
      soundMode === "off" ? "rain" : soundMode === "rain" ? "drone" : "off";
    stopAudio();
    setSoundMode(next);

    if (next === "off" || typeof window === "undefined") return;

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;

    if (next === "rain") {
      // Warm low-pass Brown Noise (Study Rain)
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.2;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 420;

      const gain = ctx.createGain();
      gain.gain.value = 0.06;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(0);

      cleanupRef.current = () => {
        try {
          whiteNoise.stop();
        } catch {}
      };
    } else if (next === "drone") {
      // Warm Binaural Alpha Focus Pad (216Hz + 222Hz)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = "sine";
      osc2.type = "triangle";
      osc1.frequency.value = 216;
      osc2.frequency.value = 222;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 320;

      const gain = ctx.createGain();
      gain.gain.value = 0.035;

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc1.start();
      osc2.start();

      cleanupRef.current = () => {
        try {
          osc1.stop();
          osc2.stop();
        } catch {}
      };
    }
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const currentIndex = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);
  const currentChapter = ALL_CHAPTERS[currentIndex] || ALL_CHAPTERS[0];
  const prevChapter = currentIndex > 0 ? ALL_CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < ALL_CHAPTERS.length - 1
      ? ALL_CHAPTERS[currentIndex + 1]
      : null;

  const isCompleted = !!completedChapters[currentChapter.id];
  const totalDone = ALL_CHAPTERS.filter((c) => !!completedChapters[c.id]).length;
  const progressPct = Math.round((totalDone / TOTAL_CHAPTERS_COUNT) * 100);

  const navigateTo = (id: string) => {
    setActiveChapter(id);
    if (viewMode !== "focus" && viewMode !== "stream") {
      setViewMode("focus");
    }
    if (viewMode === "stream") {
      const el = document.getElementById(`chapter-card-${id}`);
      if (el) el.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ACT_JUMPS = [
    { act: 1, label: "Act I", firstId: "a1-s1" },
    { act: 2, label: "Act II", firstId: "a2-s1" },
    { act: 3, label: "Act III", firstId: "a3-s1" },
    { act: 4, label: "Act IV", firstId: "a4-s1" },
    { act: 5, label: "Act V", firstId: "a5-s1" },
  ];

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom,16px)+0.5rem)] left-0 right-0 w-full flex justify-center items-center pointer-events-none z-40 px-3">
      <nav
        aria-label="Quick Scene & Act Floating Dock"
        className="liquid-glass-dock liquid-pulse-rim rounded-full px-3.5 py-2 flex items-center justify-center gap-2 sm:gap-2.5 pointer-events-auto shadow-2xl relative overflow-hidden"
      >
        {/* Top Rim Live Syllabus Mastery Progress Bar */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-white/5 overflow-hidden rounded-full pointer-events-none">
          <motion.div
            animate={{ width: `${Math.max(progressPct, 4)}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-emerald-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
          />
        </div>

        {/* Mobile Index Trigger */}
        <button
          onClick={() => setChapterSheetOpen(true)}
          className="lg:hidden p-1.5 rounded-full liquid-glass-pill text-amber-300 active:scale-90 cursor-pointer"
          title="Open Scene Index Sheet"
        >
          <ListFilter className="w-4 h-4" />
        </button>

        {/* Act Quick-Jump Pills with Sliding Spring Indicator */}
        <div className="hidden sm:flex items-center gap-1 pr-2 border-r border-white/15">
          {ACT_JUMPS.map((a) => {
            const isActive = currentChapter.partNumber === a.act;
            return (
              <button
                key={a.act}
                onClick={() => navigateTo(a.firstId)}
                className={`relative px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                  isActive
                    ? "text-amber-200"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="dockActIndicator"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-amber-500/30 border border-amber-400/50 shadow-sm pointer-events-none"
                  />
                )}
                <span className="relative z-10">{a.label}</span>
              </button>
            );
          })}
        </div>

        {/* Previous Scene Button */}
        <button
          onClick={() => prevChapter && navigateTo(prevChapter.id)}
          disabled={!prevChapter}
          title={prevChapter ? `Previous: ${prevChapter.title}` : "First scene"}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            prevChapter
              ? "liquid-glass-pill text-white cursor-pointer active:scale-95"
              : "opacity-30 cursor-not-allowed text-slate-500"
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Current Scene Badge & Mark Mastered Toggle */}
        <button
          onClick={() => toggleChapterComplete(currentChapter.id)}
          title={isCompleted ? "Scene Mastered (click to toggle)" : "Mark Scene Mastered"}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all cursor-pointer soft-tick-btn ${
            isCompleted
              ? "bg-emerald-950/80 border-emerald-400/50 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
              : "bg-slate-950/80 border-white/15 text-slate-300 hover:border-amber-400/40 hover:text-white"
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-tick-pop" />
          ) : (
            <Circle className="w-4 h-4 text-slate-400 hover:text-amber-300" />
          )}
          <span className="font-mono text-xs font-bold text-white tracking-wide">
            {currentChapter.displayCode}
          </span>
          <span className="text-[10px] font-mono text-slate-400 hidden md:inline">
            ({totalDone}/{TOTAL_CHAPTERS_COUNT})
          </span>
        </button>

        {/* Next Scene Button */}
        <button
          onClick={() => nextChapter && navigateTo(nextChapter.id)}
          disabled={!nextChapter}
          title={nextChapter ? `Next: ${nextChapter.title}` : "Last scene"}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            nextChapter
              ? "liquid-glass-pill text-white cursor-pointer active:scale-95"
              : "opacity-30 cursor-not-allowed text-slate-500"
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Speed-Read Toggle */}
        <button
          onClick={toggleSpeedReadMode}
          title="Toggle Speed-Read Mode"
          className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            speedReadMode
              ? "bg-amber-400/30 text-amber-200 border border-amber-400/60 shadow"
              : "liquid-glass-pill text-slate-300 hover:text-white"
          }`}
        >
          <Zap
            className={`w-3.5 h-3.5 ${
              speedReadMode ? "text-amber-300 fill-amber-300" : "text-slate-400"
            }`}
          />
          <span className="hidden md:inline">Speed</span>
        </button>

        {/* Procedural WebAudio Focus Soundscape Synthesizer */}
        <button
          onClick={cycleSoundMode}
          title="Cycle Built-In Study Soundscape (Rain -> Alpha Focus Drone -> Off)"
          className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            soundMode !== "off"
              ? "bg-amber-500/25 text-amber-200 border-amber-400/50 shadow-[0_0_14px_rgba(245,158,11,0.3)]"
              : "liquid-glass-pill text-slate-300 hover:text-white border-white/10"
          }`}
        >
          {soundMode === "off" ? (
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          ) : (
            <Headphones className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          )}
          <span className="text-[11px] font-mono">
            {soundMode === "off"
              ? "Audio"
              : soundMode === "rain"
              ? "Rain"
              : "Drone"}
          </span>
        </button>

        {/* Zen Cinema Widescreen Mode Toggle */}
        <button
          onClick={toggleSidebar}
          title={sidebarCollapsed ? "Exit Zen Cinema Widescreen (⌘B)" : "Enter Zen Cinema Widescreen (⌘B)"}
          className={`hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            sidebarCollapsed
              ? "bg-emerald-500/25 text-emerald-200 border-emerald-400/50 shadow-sm"
              : "liquid-glass-pill text-slate-300 hover:text-white border-white/10"
          }`}
        >
          {sidebarCollapsed ? (
            <Minimize2 className="w-3.5 h-3.5 text-emerald-300" />
          ) : (
            <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
          )}
          <span className="text-[11px] font-mono">Zen</span>
        </button>
      </nav>
    </div>
  );
}
