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
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  RotateCcw,
} from "lucide-react";

export function FloatingSidebar() {
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
    if (viewMode !== "focus" && viewMode !== "stream") {
      setViewMode("focus");
    }
    if (viewMode === "stream") {
      const el = document.getElementById(`chapter-card-${chapterId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <aside className="w-full lg:w-[340px] xl:w-[360px] shrink-0">
      <div className="liquid-glass-sidebar rounded-3xl p-5 lg:sticky lg:top-6 lg:max-h-[calc(100dvh-3rem)] flex flex-col">
        {/* Top Dunsinane Royal Identity Header */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500/25 via-amber-500/20 to-emerald-500/20 border border-white/20 flex items-center justify-center shadow-inner">
              <Crown className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-amber-300 font-semibold">
                  DUNSINANE // 1606
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              </div>
              <h1 className="text-base font-semibold tracking-tight text-white">
                Macbeth Study Shell
              </h1>
            </div>
          </div>

          {completedCount > 0 && (
            <button
              onClick={resetAllProgress}
              title="Reset reading progress"
              className="liquid-glass-pill p-2 rounded-xl text-slate-400 hover:text-rose-300 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Reading Telemetry & Progress Meter */}
        <div className="my-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
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

          <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="px-2 py-1 rounded-lg bg-black/35 border border-white/5 flex items-center justify-between">
              <span className="text-slate-400">Beats:</span>
              <span className="text-emerald-300 font-semibold">
                {completedSubsCount}/{TOTAL_SUBSECTIONS_COUNT}
              </span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-black/35 border border-white/5 flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-rose-400" /> Left:
              </span>
              <span className="text-amber-200 font-semibold">
                {remainingMinutes === 0 ? "Done!" : `${remainingMinutes}m`}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable 5-Act & 31-Scene Tree */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {BOOK_PARTS.map((part) => {
            const isExpanded = expandedParts[part.id];
            const partCompletedCount = part.chapters.filter(
              (c) => completedChapters[c.id]
            ).length;
            const isAllPartComplete =
              partCompletedCount === part.chapters.length &&
              part.chapters.length > 0;

            return (
              <div
                key={part.id}
                className="rounded-2xl bg-white/[0.025] border border-white/[0.08] overflow-hidden"
              >
                {/* Act Accordion Header */}
                <div className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-white/[0.04] transition-colors">
                  <button
                    onClick={() => togglePart(part.id)}
                    className="flex-1 min-w-0 text-left flex items-center gap-2 cursor-pointer"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-amber-300 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 font-semibold">
                          Act {part.romanNumeral}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300">
                          {partCompletedCount}/{part.chapters.length}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium truncate mt-0.5">
                        {part.title.replace(/^Act [IVX]+:\s*/, "")}
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => togglePartComplete(part.id)}
                    title={`Toggle all scenes in Act ${part.romanNumeral}`}
                    className="p-1 text-slate-400 hover:text-emerald-300 shrink-0 ml-2 cursor-pointer"
                  >
                    {isAllPartComplete ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Scene Items */}
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
                            className="p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
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
        <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>FIRST FOLIO 1623</span>
          <span className="text-amber-300/90">5 ACTS • 31 SCENES</span>
        </div>
      </div>
    </aside>
  );
}
