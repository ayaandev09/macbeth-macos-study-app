"use client";

import { syncWidgetSnapshot } from "@/lib/widgetBridge";

import React, { useMemo } from "react";
import { ALL_CHAPTERS, BOOK_PARTS } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Circle,
  ArrowRight,
  Crown,
  BookOpen,
} from "lucide-react";

const RADIUS = 32;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function StudyMiniHomepage() {
  const {
    activeChapterId,
    setActiveChapter,
    completedChapters,
    toggleChapterComplete,
    setViewMode,
  } = useStudyStore();

  const activeChapter = useMemo(
    () => ALL_CHAPTERS.find((ch) => ch.id === activeChapterId) || ALL_CHAPTERS[0],
    [activeChapterId]
  );

  const activePart = useMemo(
    () =>
      BOOK_PARTS.find((p) => p.id === activeChapter.partId) ||
      BOOK_PARTS[0],
    [activeChapter.partId]
  );

  const currentIndex = useMemo(
    () => ALL_CHAPTERS.findIndex((ch) => ch.id === activeChapter.id),
    [activeChapter.id]
  );

  const nextChapter = useMemo(
    () =>
      currentIndex >= 0 && currentIndex < ALL_CHAPTERS.length - 1
        ? ALL_CHAPTERS[currentIndex + 1]
        : null,
    [currentIndex]
  );

  const completedCount = useMemo(
    () => Object.values(completedChapters).filter(Boolean).length,
    [completedChapters]
  );

  const totalChapters = ALL_CHAPTERS.length;
  const percentage = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;
  const dashoffset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;

  const isCurrentDone = !!completedChapters[activeChapter.id];

  const remainingMinutes = useMemo(
    () =>
      ALL_CHAPTERS.reduce(
        (sum, ch) => (completedChapters[ch.id] ? sum : sum + ch.readingTimeMinutes),
        0
      ),
    [completedChapters]
  );

  return (
    <div className="w-full liquid-glass-bento rounded-3xl p-4 sm:p-5 mb-4 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
      {/* Background ambient glow aura */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left Section: Subject Branding & Current Scene Status */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 via-orange-500/15 to-rose-500/20 border border-amber-400/30 flex items-center justify-center p-1.5 shadow-inner shrink-0">
            <img
              src="/logo.svg"
              alt="Macbeth Folio Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
                MACBETH // FOLIO 1623
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-[9px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Desktop Widget Live
              </span>
            </div>

            <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate mt-0.5">
              {activePart.title}: {activeChapter.displayCode} · {activeChapter.title}
            </h2>

            <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-300" />
                {remainingMinutes}m total remaining
              </span>
              <span>•</span>
              <span className="text-slate-300">{ALL_CHAPTERS.length} Dramatic Scenes • 5 Acts</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Action & Next Target */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => { toggleChapterComplete(activeChapter.id); setTimeout(() => syncWidgetSnapshot("topic-complete"), 10); }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isCurrentDone
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30"
                : "bg-white/[0.06] text-slate-200 border border-white/10 hover:bg-white/[0.12] hover:text-white"
            }`}
            title={isCurrentDone ? "Click to mark as scene review needed" : "Click to mark as mastered scene"}
          >
            {isCurrentDone ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Scene Mastered</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Mark Mastered</span>
              </>
            )}
          </button>

          {nextChapter && (
            <button
              onClick={() => {
                setActiveChapter(nextChapter.id); setTimeout(() => syncWidgetSnapshot("navigation"), 10);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
              title={`Next: ${nextChapter.displayCode} - ${nextChapter.title}`}
            >
              <span>Next: {nextChapter.displayCode}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          )}
        </div>

        {/* Right Section: Liquid Glass Radial Mastery Meter */}
        <div className="flex items-center gap-3.5 pl-4 border-t md:border-t-0 md:border-l border-white/10 shrink-0">
          <div className="relative w-16 h-16 shrink-0">
            <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r={RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="6"
              />
              <circle
                cx="40"
                cy="40"
                r={RADIUS}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashoffset}
                className="transition-all duration-500 ease-out"
                style={{ filter: "drop-shadow(0 0 6px #f59e0b)" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-mono text-sm font-bold text-white leading-none">
                {percentage}%
              </span>
              <span className="font-mono text-[7px] uppercase tracking-wider text-amber-300 mt-0.5">
                Mastery
              </span>
            </div>
          </div>

          <div className="text-left">
            <div className="font-mono text-xs font-bold text-white">
              {completedCount} / {totalChapters}
            </div>
            <div className="font-mono text-[10px] text-slate-400">
              Scenes Mastered
            </div>
            <div className="text-[9px] font-mono text-amber-400/80 mt-0.5">
              Live Widget Sync
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
