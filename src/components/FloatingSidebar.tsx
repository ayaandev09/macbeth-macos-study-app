"use client";

import React, { useState } from "react";
import {
  BOOK_PARTS,
  TOTAL_CHAPTERS_COUNT,
  TOTAL_SUBSECTIONS_COUNT,
  TOTAL_READING_MINUTES,
  ALL_CHAPTERS,
} from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import { ActId } from "@/data/types";
import { ChromaticButton } from "./chromatic-button";
import { MacbethAppLogo } from "./MacbethAppLogo";
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  RotateCcw,
  GraduationCap,
  X,
} from "lucide-react";

interface FloatingSidebarProps {
  isMobileSheet?: boolean;
}

export function FloatingSidebar({ isMobileSheet = false }: FloatingSidebarProps) {
  const {
    activeChapterId,
    setActiveChapter,
    viewMode,
    setViewMode,
    completedChapters,
    completedSubSections,
    toggleChapterComplete,
    togglePartComplete,
    resetAllProgress,
    chapterSheetOpen,
    setChapterSheetOpen,
    sidebarCollapsed,
    toggleSidebar,
  } = useStudyStore();

  const [expandedParts, setExpandedParts] = useState<Record<ActId, boolean>>({
    "act-1": true,
    "act-2": true,
    "act-3": true,
    "act-4": true,
    "act-5": true,
  });

  const completedCount = ALL_CHAPTERS.filter(
    (c) => !!completedChapters[c.id]
  ).length;
  const completedSubsCount = Object.values(completedSubSections).filter(
    Boolean
  ).length;
  const progressPercent = Math.round(
    (completedCount / TOTAL_CHAPTERS_COUNT) * 100
  );

  const completedMinutes = ALL_CHAPTERS.reduce(
    (acc, ch) => (completedChapters[ch.id] ? acc + ch.readingTimeMinutes : acc),
    0
  );
  const remainingMinutes = Math.max(
    0,
    TOTAL_READING_MINUTES - completedMinutes
  );

  const togglePart = (partId: ActId) => {
    setExpandedParts((prev) => ({ ...prev, [partId]: !prev[partId] }));
  };

  const handleSelectScene = (chapterId: string) => {
    setActiveChapter(chapterId);
    if (isMobileSheet) {
      setChapterSheetOpen(false);
    }
    if (viewMode !== "focus" && viewMode !== "stream") {
      setViewMode("focus");
    }
    if (viewMode === "stream") {
      const el = document.getElementById(`chapter-card-${chapterId}`);
      if (el) {
        el.scrollIntoView({ block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (isMobileSheet && !chapterSheetOpen) return null;

  const sidebarBody = (
    <>
      {/* Reading Telemetry & Progress Meter */}
      <div className="my-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-300 font-medium flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Folio Mastery
          </span>
          <span className="font-mono text-amber-300 font-semibold">
            {completedCount}/{TOTAL_CHAPTERS_COUNT} ({progressPercent}%)
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-900/90 overflow-hidden p-0.5 border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-500"
            style={{ width: `${Math.max(progressPercent, 3)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 font-mono">
          <span>{completedSubsCount}/{TOTAL_SUBSECTIONS_COUNT} Beats</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-300" />
            {remainingMinutes}m left
          </span>
        </div>
      </div>

      {/* Accordion Act & Scene List */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-2.5 pr-1">
        {BOOK_PARTS.map((part) => {
          const isExpanded = !!expandedParts[part.id];
          const partScenesDone = part.chapters.filter(
            (c) => !!completedChapters[c.id]
          ).length;
          const isAllPartDone = partScenesDone === part.chapters.length;

          return (
            <div
              key={part.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
            >
              {/* Act Header */}
              <div className="w-full flex items-center justify-between p-3 hover:bg-white/[0.04] transition-colors">
                <button
                  onClick={() => togglePart(part.id)}
                  className="flex items-center gap-2 flex-1 text-left min-w-0 cursor-pointer"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-amber-300 uppercase">
                        Act {part.romanNumeral}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                        {part.chapters.length} Scenes
                      </span>
                    </div>
                    <div className="text-xs text-white font-medium truncate">
                      {part.title.replace(/^Act [IVX]+:\s*/, "")}
                    </div>
                  </div>
                </button>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="font-mono text-[10px] text-slate-400">
                    {partScenesDone}/{part.chapters.length}
                  </span>
                  <button
                    onClick={() => togglePartComplete(part.id)}
                    title={
                      isAllPartDone
                        ? "Mark Act as uncompleted"
                        : "Mark all scenes in Act complete"
                    }
                    className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer soft-tick-btn"
                  >
                    {isAllPartDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-tick-pop" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500 hover:text-amber-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Scene Children */}
              {isExpanded && (
                <div className="px-2 pb-2 pt-1 space-y-1 border-t border-white/[0.06]">
                  {part.chapters.map((chapter) => {
                    const isSelected = activeChapterId === chapter.id;
                    const isDone = !!completedChapters[chapter.id];

                    return (
                      <div
                        key={chapter.id}
                        className={`group flex items-center justify-between gap-2 px-2.5 py-2 rounded-xl text-xs transition-all ${
                          isSelected
                            ? "liquid-glass-pill-active text-white"
                            : "hover:bg-white/[0.05] text-slate-300"
                        }`}
                      >
                        <button
                          onClick={() => handleSelectScene(chapter.id)}
                          className="flex-1 text-left flex items-start gap-2.5 min-w-0 cursor-pointer"
                        >
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 ${
                              isSelected
                                ? "bg-amber-400/25 text-amber-200 border border-amber-300/30"
                                : "bg-white/[0.06] text-slate-400"
                            }`}
                          >
                            {chapter.displayCode}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">
                              {chapter.title.replace(
                                /^Act \d+, Scene \d+:\s*/,
                                ""
                              )}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate mt-0.5">
                              {chapter.subSections.length} beats •{" "}
                              {chapter.readingTimeMinutes}m
                              {chapter.folioCrossRef
                                ? ` • ${chapter.folioCrossRef.split(" / ")[0]}`
                                : ""}
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleChapterComplete(chapter.id);
                          }}
                          title={
                            isDone ? "Mark as unread" : "Mark as completed"
                          }
                          className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors shrink-0 cursor-pointer soft-tick-btn"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-tick-pop" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-500 group-hover:text-amber-300" />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Attribution */}
      <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono shrink-0">
        <span>FIRST FOLIO 1623</span>
        <span className="text-amber-300/90">5 ACTS • 31 SCENES</span>
      </div>
    </>
  );

  if (isMobileSheet) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm"
        onClick={() => setChapterSheetOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[420px] max-h-[85dvh] flex flex-col liquid-glass-sheet rounded-t-3xl p-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] overflow-hidden select-none"
        >
          <div className="w-10 h-1.5 rounded-full bg-white/25 mx-auto mb-3 shrink-0" />
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 shrink-0">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-300 block">
                MACBETH INDEX • MAC CODEX
              </span>
              <h2 className="text-base font-bold text-white font-display">
                5 Acts &amp; 31 Scenes
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {completedCount > 0 && (
                <button
                  onClick={resetAllProgress}
                  title="Reset reading progress"
                  className="p-2.5 rounded-2xl liquid-glass-pill text-slate-300 active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setChapterSheetOpen(false)}
                aria-label="Close scene index"
                className="p-2.5 rounded-2xl liquid-glass-pill text-slate-200 active:scale-95 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          {sidebarBody}
        </aside>
      </div>
    );
  }

  return (
    <aside
      className={`hidden lg:flex shrink-0 lg:sticky lg:top-5 lg:h-[calc(100vh-2.5rem)] flex-col liquid-glass-sidebar rounded-3xl p-4 overflow-hidden select-none z-20 transition-all duration-300 ${
        sidebarCollapsed ? "w-20 items-center px-2" : "w-64 xl:w-72"
      }`}
    >
      {/* Top Dunsinane Royal Identity Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 shrink-0 min-h-[44px] w-full mac-drag-region">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500/25 to-amber-500/20 border border-amber-400/30 flex items-center justify-center overflow-hidden p-1 mac-no-drag shrink-0">
            <MacbethAppLogo className="w-full h-full object-contain" />
          </div>
          {!sidebarCollapsed && (
            <div className="min-w-0">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-amber-300 font-semibold block truncate">
                DUNSINANE // 1606
              </span>
              <h1 className="text-sm font-bold text-white tracking-tight truncate">
                Macbeth Codex
              </h1>
            </div>
          )}
        </div>

        {!sidebarCollapsed && completedCount > 0 && (
          <button
            onClick={resetAllProgress}
            title="Reset progress"
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {!sidebarCollapsed && sidebarBody}
    </aside>
  );
}
