"use client";

import React, { useRef } from "react";
import { ALL_CHAPTERS } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Zap,
  Compass,
  ArrowUp,
} from "lucide-react";

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
  } = useStudyStore();

  const dockScrollRef = useRef<HTMLDivElement>(null);
  const currentIndex = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);
  const currentChapter = ALL_CHAPTERS[currentIndex] || ALL_CHAPTERS[0];
  const prevChapter = currentIndex > 0 ? ALL_CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < ALL_CHAPTERS.length - 1
      ? ALL_CHAPTERS[currentIndex + 1]
      : null;

  const isCompleted = !!completedChapters[currentChapter.id];

  const navigateTo = (id: string) => {
    setActiveChapter(id);
    if (viewMode !== "focus" && viewMode !== "stream") {
      setViewMode("focus");
    }
    if (viewMode === "stream") {
      const el = document.getElementById(`chapter-card-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl pointer-events-none transition-all">
      <div className="liquid-glass-dock rounded-full px-3 py-2 flex items-center justify-between gap-2 pointer-events-auto shadow-2xl">
        {/* Horizontally Scrollable Dock Content */}
        <div
          ref={dockScrollRef}
          tabIndex={0}
          role="region"
          aria-label="Mac navigation dock"
          className="flex items-center justify-between gap-2 w-full overflow-x-auto no-scrollbar touch-pan-x scroll-smooth overscroll-x-contain"
        >
          {/* Previous Scene */}
          <button
            disabled={!prevChapter}
            onClick={() => prevChapter && navigateTo(prevChapter.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
              prevChapter
                ? "liquid-glass-pill text-slate-200 cursor-pointer"
                : "opacity-35 cursor-not-allowed text-slate-500"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">
              {prevChapter ? prevChapter.displayCode : "Start"}
            </span>
          </button>

          {/* Current Active Scene Indicator */}
          <div className="flex items-center gap-2 min-w-0 px-2 shrink-0">
            <Compass className="w-4 h-4 text-amber-400 shrink-0 hidden md:inline" />
            <div className="text-center truncate">
              <div className="flex items-center justify-center gap-1.5">
                <span className="font-mono text-[11px] font-bold text-amber-300">
                  {currentChapter.displayCode}
                </span>
                <span className="text-xs font-semibold text-white truncate max-w-[140px] sm:max-w-[200px]">
                  {currentChapter.title.replace(/^Act \d+, Scene \d+:\s*/, "")}
                </span>
              </div>
            </div>
          </div>

          {/* Quick-Jump Act I / II / III / IV / V Pills */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-950/60 p-1 rounded-full border border-white/10 shrink-0">
            {ACT_JUMPS.map((a) => (
              <button
                key={a.act}
                onClick={() => navigateTo(a.firstId)}
                className={`px-2.5 py-1 rounded-full font-mono text-[10px] transition-all cursor-pointer ${
                  currentChapter.partNumber === a.act
                    ? "bg-amber-500/25 text-amber-200 border border-amber-400/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>

          {/* Quick Actions: Complete & Speed-Read */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => toggleChapterComplete(currentChapter.id)}
              title={isCompleted ? "Completed" : "Mark Scene Complete"}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isCompleted
                  ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 shadow-sm shadow-emerald-500/20"
                  : "liquid-glass-pill text-slate-300"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Circle className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={toggleSpeedReadMode}
              title="Toggle Speed-Read Bullet Mode"
              className={`p-2 rounded-full transition-all cursor-pointer ${
                speedReadMode
                  ? "bg-amber-400/25 text-amber-300 border border-amber-400/50"
                  : "liquid-glass-pill text-slate-300"
              }`}
            >
              <Zap className="w-4 h-4" />
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="Scroll to top"
              className="p-2 rounded-full liquid-glass-pill text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

            {/* Next Scene */}
            <button
              disabled={!nextChapter}
              onClick={() => nextChapter && navigateTo(nextChapter.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                nextChapter
                  ? "liquid-glass-pill text-slate-200 cursor-pointer"
                  : "opacity-35 cursor-not-allowed text-slate-500"
              }`}
            >
              <span className="hidden sm:inline">
                {nextChapter ? nextChapter.displayCode : "End"}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
