"use client";

import React from "react";
import { ALL_CHAPTERS, TOTAL_CHAPTERS_COUNT } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Zap,
  ListFilter,
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
    setChapterSheetOpen,
  } = useStudyStore();

  const currentIndex = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);
  const currentChapter = ALL_CHAPTERS[currentIndex] || ALL_CHAPTERS[0];
  const prevChapter = currentIndex > 0 ? ALL_CHAPTERS[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < ALL_CHAPTERS.length - 1
      ? ALL_CHAPTERS[currentIndex + 1]
      : null;

  const isCompleted = !!completedChapters[currentChapter.id];
  const totalDone = ALL_CHAPTERS.filter((c) => !!completedChapters[c.id]).length;

  const navigateTo = (id: string) => {
    setActiveChapter(id);
    if (viewMode !== "focus" && viewMode !== "stream") {
      setViewMode("focus");
    }
    if (viewMode === "stream") {
      const el = document.getElementById(`chapter-card-${id}`);
      if (el) el.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo(0, 0);
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
        className="liquid-glass-dock liquid-pulse-rim rounded-full px-3.5 py-2 flex items-center justify-center gap-2 sm:gap-3 pointer-events-auto shadow-2xl"
      >
        {/* Mobile Index Trigger */}
        <button
          onClick={() => setChapterSheetOpen(true)}
          className="lg:hidden p-1.5 rounded-full liquid-glass-pill text-amber-300 active:scale-90 cursor-pointer"
          title="Open Scene Index Sheet"
        >
          <ListFilter className="w-4 h-4" />
        </button>

        {/* Act Quick-Jump Pills (Visible on Mac & Tablets) */}
        <div className="hidden sm:flex items-center gap-1 pr-2 border-r border-white/15">
          {ACT_JUMPS.map((a) => (
            <button
              key={a.act}
              onClick={() => navigateTo(a.firstId)}
              className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                currentChapter.partNumber === a.act
                  ? "bg-amber-500/30 text-amber-200 border border-amber-400/50"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {a.label}
            </button>
          ))}
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
      </nav>
    </div>
  );
}
