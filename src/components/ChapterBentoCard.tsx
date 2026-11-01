"use client";

import React, { useState } from "react";
import {
  ChapterData,
  BOOK_PARTS,
  THEMES_TAXONOMY,
  SCENE_PRIMERS,
  PRE_LESSON_BRIEFINGS,
} from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  CheckCircle2,
  Circle,
  Clock,
  MapPin,
  Sparkles,
  Quote as QuoteIcon,
  Layers,
  ShieldAlert,
  Brain,
  BookOpenCheck,
  StickyNote,
  ChevronDown,
  ChevronUp,
  Theater,
  ScrollText,
  Bookmark,
  GraduationCap,
  Zap,
  HelpCircle,
  Users,
  BookOpen,
} from "lucide-react";

interface ChapterBentoCardProps {
  chapter: ChapterData;
  isDeferred?: boolean;
  isDeferredBelowFold?: boolean;
}

const OMEN_BADGE_STYLES: Record<ChapterData["omenLevel"], string> = {
  "VALOR & OMEN": "bg-sky-500/15 text-sky-300 border-sky-400/35",
  TEMPTATION: "bg-amber-500/15 text-amber-300 border-amber-400/35",
  REGICIDE: "bg-rose-500/20 text-rose-300 border-rose-400/40",
  "TYRANNY & PARANOIA": "bg-purple-500/20 text-purple-300 border-purple-400/40",
  "ABYSSAL DOOM":
    "bg-red-500/25 text-red-200 border-red-400/50 shadow-[0_0_20px_-4px_rgba(244,63,94,0.45)]",
};

export const ChapterBentoCard = React.memo(function ChapterBentoCard({
  chapter,
  isDeferred = false,
  isDeferredBelowFold = false,
}: ChapterBentoCardProps) {
  const isCardDeferred = isDeferred || isDeferredBelowFold;
  const {
    completedChapters,
    completedSubSections,
    bookmarkedQuotes,
    toggleChapterComplete,
    toggleSubSectionComplete,
    toggleBookmarkQuote,
    speedReadMode,
    setViewMode,
    setActiveThemeFilter,
    chapterNotes,
    setChapterNote,
    studyLensMode,
    setStudyLensMode,
  } = useStudyStore();

  const scenePrimer = SCENE_PRIMERS[chapter.id];
  const sceneBriefing = PRE_LESSON_BRIEFINGS[chapter.id];

  const [showScratchpad, setShowScratchpad] = useState(false);
  const isCompleted = !!completedChapters[chapter.id];
  const noteText = chapterNotes[chapter.id] || "";
  const bookPart = BOOK_PARTS.find((p) => p.id === chapter.partId);
  const completedSubsCount = chapter.subSections.filter(
    (s) => !!completedSubSections[s.id]
  ).length;

  return (
    <article
      id={`chapter-card-${chapter.id}`}
      className={`space-y-4 ${isCardDeferred ? "deferred-chapter-card" : ""}`}
    >
      {/* =====================================================================
          HERO SCENE BANNER
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-3xl p-6 lg:p-7 relative overflow-hidden">
        {/* Specular Radial Glow (Zero Filter Overhead) */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-25"
          style={{
            background:
              chapter.partNumber === 1
                ? "radial-gradient(circle, #fbbf24 0%, transparent 70%)"
                : chapter.partNumber === 2
                  ? "radial-gradient(circle, #f43f5e 0%, transparent 70%)"
                  : chapter.partNumber === 3
                    ? "radial-gradient(circle, #a855f7 0%, transparent 70%)"
                    : chapter.partNumber === 4
                      ? "radial-gradient(circle, #34d399 0%, transparent 70%)"
                      : "radial-gradient(circle, #ef4444 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-xl bg-white/10 text-white border border-white/15">
                {chapter.displayCode}
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/25">
                ACT {bookPart?.romanNumeral || chapter.partNumber} • SCENE{" "}
                {chapter.chapterNumber}
              </span>
              {chapter.folioCrossRef && (
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-xl bg-indigo-500/15 text-indigo-200 border border-indigo-400/30">
                  {chapter.folioCrossRef}
                </span>
              )}
              <span
                className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded-xl border flex items-center gap-1.5 ${
                  OMEN_BADGE_STYLES[chapter.omenLevel]
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                OMEN: {chapter.omenLevel}
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-white/[0.05] text-slate-300 border border-white/10 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {chapter.readingTimeMinutes} min speed-read
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
              {chapter.title}
            </h2>
            <p className="text-sm lg:text-base text-slate-300 mt-1 font-serif italic">
              {chapter.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 self-start lg:self-center shrink-0">
            <button
              onClick={() => setShowScratchpad((prev) => !prev)}
              className="liquid-glass-pill px-3.5 py-2.5 rounded-2xl text-xs font-medium text-slate-200 flex items-center gap-2 cursor-pointer"
            >
              <StickyNote className="w-4 h-4 text-amber-300" />
              <span>Notes {noteText ? "• Active" : ""}</span>
              {showScratchpad ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              onClick={() => toggleChapterComplete(chapter.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                isCompleted
                  ? "bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 shadow-[0_0_20px_-4px_rgba(52,211,153,0.4)]"
                  : "liquid-glass-pill text-white"
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Completed</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-slate-400" />
                  <span>Mark Complete</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Metadata Strip: Setting & Cosmic Weather Status */}
        <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="flex items-start gap-2.5 text-slate-300">
            <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[10px] font-mono uppercase">
                Stage Setting
              </span>
              <span className="font-medium text-slate-100">
                {chapter.setting}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-300">
            <Brain className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 block text-[10px] font-mono uppercase">
                Cosmic & Moral Weather
              </span>
              <span className="font-medium text-slate-100">
                {chapter.cosmicWeatherStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Collapsible Personal Study Scratchpad */}
        {showScratchpad && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <label className="block font-mono text-[11px] uppercase tracking-wider text-amber-300 mb-2">
              Personal Seminar & Essay Scratchpad ({chapter.displayCode}) —
              Saved Automatically
            </label>
            <textarea
              value={noteText}
              onChange={(e) => setChapterNote(chapter.id, e.target.value)}
              rows={3}
              placeholder="Write your essay thesis hooks, meter/scansion observations, or Jacobean context notes for this scene..."
              className="w-full rounded-2xl bg-slate-950/75 border border-white/15 p-3.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400/50"
            />
          </div>
        )}
      </div>

      {/* =====================================================================
          STUDY LENS SELECTOR: NEW LEARNER vs PRE-LESSON CRAM vs FULL FOLIO
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
          <button
            onClick={() => setStudyLensMode("primer")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              studyLensMode === "primer"
                ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Study as New (Primer)</span>
          </button>
          <button
            onClick={() => setStudyLensMode("revision")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              studyLensMode === "revision"
                ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>5-Min Pre-Lesson Cram</span>
          </button>
          <button
            onClick={() => setStudyLensMode("deep")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              studyLensMode === "deep"
                ? "bg-purple-500/25 text-purple-200 border border-purple-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Deep Folio Analysis</span>
          </button>
        </div>

        <span className="font-mono text-[10px] text-slate-400 pr-2 hidden md:inline">
          {studyLensMode === "primer"
            ? "✦ Plain modern English • Story context • Key archaic glossary"
            : studyLensMode === "revision"
            ? "✦ 30-sec plot recap • #1 quote • Teacher pop-quiz reveal"
            : "✦ Quad-source critical analysis • Scansion & close reading"}
        </span>
      </div>

      {/* =====================================================================
          LENS A: "STUDY AS NEW" — SCENE PRIMER FOR FIRST-TIME READERS
          ===================================================================== */}
      {studyLensMode === "primer" && scenePrimer && (
        <section className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-5 border-emerald-400/30">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                FIRST-TIME READER'S GUIDE
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
                Plain English Primer ({chapter.displayCode})
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-300/80">
              Read this before reading the Shakespearean text
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Story So Far & Character Roll Call (5 cols) */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Who's in the scene */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5 mb-2">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  Who Is In This Scene:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {scenePrimer.whoIsInTheScene.map((char, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded-xl bg-white/[0.06] text-slate-200 border border-white/10"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Story So Far */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
                <span className="font-mono text-[10px] uppercase tracking-wider text-sky-300 font-bold flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  Where We Are in the Story:
                </span>
                <p className="text-xs lg:text-sm text-slate-200 leading-relaxed">
                  {scenePrimer.storySoFar}
                </p>
              </div>

              {/* Archaic Words Glossed */}
              {scenePrimer.glossary.length > 0 && (
                <div className="p-4 rounded-2xl bg-purple-500/[0.08] border border-purple-400/25">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300 font-bold block mb-2">
                    Tricky Words Translated:
                  </span>
                  <div className="space-y-1.5">
                    {scenePrimer.glossary.map((g, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-black/25 border border-white/[0.06] text-xs"
                      >
                        <span className="font-mono font-bold text-amber-300 mr-1.5">
                          {g.term}:
                        </span>
                        <span className="text-slate-200">{g.modernMeaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Plain Modern English Walkthrough (7 cols) */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-400/25 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  What Actually Happens (Modern English Walkthrough):
                </span>
                <div className="space-y-3">
                  {scenePrimer.plainEnglishSummary.map((para, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-xs lg:text-sm text-slate-100 leading-relaxed">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-emerald-400/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-200/80">
                  Ready for the poetry? Scroll down to explore the First Folio verses and dramatic beats.
                </span>
                <button
                  onClick={() => setStudyLensMode("deep")}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 text-xs font-mono border border-emerald-400/30 hover:bg-emerald-500/30 cursor-pointer shrink-0 ml-2"
                >
                  View Folio Analysis
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          LENS B: "5-MINUTE PRE-LESSON CRAM" — HIGH-YIELD REVISION BRIEFING
          ===================================================================== */}
      {studyLensMode === "revision" && sceneBriefing && (
        <section className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-4 border-amber-400/35">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-amber-500/25 text-amber-300 border border-amber-400/40 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                5-MINUTE PRE-LESSON CRAM
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
                Quick Test Takeaways ({chapter.displayCode})
              </h3>
            </div>
            <button
              onClick={() => setViewMode("revision")}
              className="text-xs font-mono text-amber-300 hover:text-amber-100 underline decoration-amber-400/40 cursor-pointer"
            >
              Open Full Flashcard Deck ➔
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 30-Second Plot Recap */}
            <div className="p-4 rounded-2xl bg-amber-500/[0.08] border border-amber-400/25">
              <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5" />
                30-Second Plot Takeaway
              </span>
              <p className="text-xs lg:text-sm text-slate-100 leading-relaxed">
                {sceneBriefing.thirtySecondRecap}
              </p>
            </div>

            {/* Must-Know Quote */}
            <div className="p-4 rounded-2xl bg-rose-500/[0.08] border border-rose-400/25">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 font-bold flex items-center gap-1.5">
                  <QuoteIcon className="w-3.5 h-3.5" />
                  The #1 Quote To Memorize
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-200 border border-rose-400/30">
                  Line {sceneBriefing.mustKnowQuote.line}
                </span>
              </div>
              <blockquote className="font-serif italic text-xs lg:text-sm text-amber-100 leading-relaxed mb-1.5">
                “{sceneBriefing.mustKnowQuote.quote}”
              </blockquote>
              <p className="text-[11px] font-mono text-amber-300/80 mb-2">
                — {sceneBriefing.mustKnowQuote.speaker}
              </p>
              <p className="text-xs text-slate-300 border-t border-white/[0.08] pt-2">
                <strong className="text-slate-200">Why It Matters:</strong> {sceneBriefing.mustKnowQuote.whyItMatters}
              </p>
            </div>

            {/* Teacher Pop-Quiz */}
            <div className="p-4 rounded-2xl bg-purple-500/[0.08] border border-purple-400/25">
              <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1.5 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                Teacher Pop-Quiz Question:
              </span>
              <p className="text-xs lg:text-sm font-semibold text-white mb-2.5">
                {sceneBriefing.teacherPopQuiz.question}
              </p>
              <details className="group text-xs pt-1.5 border-t border-white/[0.08]">
                <summary className="font-mono text-[10px] text-purple-300 hover:text-purple-200 cursor-pointer list-none select-none flex items-center justify-between py-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    Reveal Model Answer
                  </span>
                  <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-2 p-2.5 rounded-xl bg-purple-950/40 border border-purple-400/20 text-slate-200 text-xs leading-relaxed">
                  {sceneBriefing.teacherPopQuiz.answer}
                </div>
              </details>
            </div>

            {/* Stagecraft Vector */}
            <div className="p-4 rounded-2xl bg-emerald-500/[0.08] border border-emerald-400/25">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5 mb-2">
                <Theater className="w-3.5 h-3.5" />
                What to Watch For on Stage:
              </span>
              <p className="text-xs lg:text-sm text-slate-200 leading-relaxed">
                {sceneBriefing.keyStagecraftVector}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          BENTO ROW 1: EXECUTIVE SUMMARY + SPEED-READ BULLETS + THEME TRACKER
          ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Executive Summary & High-Velocity Speed-Read Bullets (7 Cols) */}
        <div className="lg:col-span-7 liquid-glass-bento rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-amber-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Scene Synopsis & Rapid Synthesis
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300">
                Google Doc • SparkNotes • LitCharts • RSC
              </span>
            </div>

            {/* High-Velocity Speed-Read Bullets */}
            <div className="p-4 rounded-2xl bg-slate-950/55 border border-white/10 mb-4">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-amber-300 mb-2.5">
                Key Plot & Stagecraft Vectors (
                {chapter.speedReadBullets.length})
              </h3>
              <ul className="space-y-2">
                {chapter.speedReadBullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs lg:text-sm text-slate-100 leading-relaxed"
                  >
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-400/30 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Narrative Synopsis (Hidden if Speed-Read Mode is active) */}
            {!speedReadMode && (
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed mb-4">
                {chapter.summary.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>

          {/* Exam Prompt Takeaway */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-500/12 via-amber-500/10 to-transparent border border-amber-400/25">
            <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Core Exam & Essay Takeaway
            </div>
            <p className="text-xs lg:text-sm font-medium text-amber-100 leading-relaxed">
              {chapter.examPromptTakeaway}
            </p>
          </div>
        </div>

        {/* Theme Radar & Active Symbols (5 Cols) */}
        <div className="lg:col-span-5 liquid-glass-bento rounded-3xl p-6 flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-rose-300 font-semibold">
                Theme Tracking & Intensity
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                Click theme to filter matrix
              </span>
            </div>

            <div className="space-y-3">
              {chapter.themeTracking.map((t) => {
                const themeMeta = THEMES_TAXONOMY[t.themeId];
                if (!themeMeta) return null;

                return (
                  <div
                    key={t.themeId}
                    onClick={() => {
                      setActiveThemeFilter(t.themeId);
                      setViewMode("matrix");
                    }}
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-lg border"
                        style={{
                          backgroundColor: themeMeta.badgeBg,
                          borderColor: themeMeta.badgeBorder,
                          color: themeMeta.badgeText,
                        }}
                      >
                        {themeMeta.shortName}
                      </span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className="w-2 h-2 rounded-full transition-all"
                            style={{
                              backgroundColor:
                                dot <= t.intensity
                                  ? themeMeta.color
                                  : "rgba(255,255,255,0.12)",
                            }}
                          />
                        ))}
                        <span className="font-mono text-[10px] text-slate-400 ml-1">
                          {t.intensity}/5
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {t.manifestation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Symbols & Motifs */}
          <div className="pt-4 border-t border-white/10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
              Active Stage Symbols & Motifs
            </span>
            <div className="flex flex-wrap gap-1.5">
              {chapter.analysis.motifsAndSymbols.map((sym, idx) => (
                <button
                  key={idx}
                  onClick={() => setViewMode("lexicon")}
                  className="liquid-glass-pill px-2.5 py-1 rounded-xl text-xs text-amber-200/90 hover:text-amber-100 cursor-pointer"
                >
                  ✦ {sym}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          BENTO ROW 2: GRANULAR DRAMATIC SUB-SECTIONS (BEATS)
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
              Scene Sub-Sections Breakdown ({completedSubsCount}/
              {chapter.subSections.length} Beats Checked)
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Click any beat card to mark complete
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {chapter.subSections.map((sub, idx) => {
            const isSubDone = !!completedSubSections[sub.id];
            return (
              <div
                key={sub.id}
                onClick={() => toggleSubSectionComplete(chapter.id, sub.id)}
                className={`rounded-2xl border p-4 flex flex-col justify-between transition-all cursor-pointer ${
                  isSubDone
                    ? "bg-emerald-950/20 border-emerald-400/40"
                    : "bg-slate-950/55 border-white/10 hover:border-amber-400/35"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-400/25">
                      {chapter.displayCode}.{idx + 1} • {sub.sceneMarker}
                    </span>
                    {isSubDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </div>

                  <h4
                    className={`text-sm font-semibold mb-2 ${
                      isSubDone
                        ? "text-emerald-200 line-through"
                        : "text-white"
                    }`}
                  >
                    {sub.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {sub.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.07]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 block mb-1">
                    Analytical Significance
                  </span>
                  <p className="text-xs text-slate-200/90 leading-relaxed mb-2.5">
                    {sub.analyticalTakeaway}
                  </p>

                  {/* Academic Depth: Granular Close Reading, Prosody & Dramatic Tension */}
                  {sub.closeReading && (
                    <details
                      className="mt-2 pt-2 border-t border-white/[0.08] group text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <summary className="flex items-center justify-between text-[11px] font-mono text-amber-300/90 hover:text-amber-200 cursor-pointer list-none select-none py-1">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Close Reading & Prosody Analysis
                        </span>
                        <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>

                      <div className="mt-2.5 space-y-2.5 pl-0.5">
                        {/* Literary Devices */}
                        {sub.closeReading.literaryDevices.length > 0 && (
                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1">
                              Literary & Rhetorical Devices
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {sub.closeReading.literaryDevices.map((dev, i) => (
                                <span
                                  key={i}
                                  className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-200 border border-amber-400/20"
                                >
                                  {dev}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Prosody & Meter */}
                        {sub.closeReading.prosodyAndMeter && (
                          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-400/25">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-purple-300 font-semibold block mb-0.5">
                              Prosody, Meter & Scansion
                            </span>
                            <p className="text-[11px] text-slate-200 leading-relaxed">
                              {sub.closeReading.prosodyAndMeter}
                            </p>
                          </div>
                        )}

                        {/* Dramatic Tension */}
                        <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-400/25">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-rose-300 font-semibold block mb-0.5">
                            Dramatic Tension & Stakes
                          </span>
                          <p className="text-[11px] text-slate-200 leading-relaxed">
                            {sub.closeReading.dramaticTension}
                          </p>
                        </div>

                        {/* Thematic Resonance */}
                        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/25">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-300 font-semibold block mb-0.5">
                            Thematic Resonance
                          </span>
                          <p className="text-[11px] text-slate-200 leading-relaxed">
                            {sub.closeReading.thematicResonance}
                          </p>
                        </div>
                      </div>
                    </details>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          BENTO ROW 3: QUAD-SOURCE CRITICAL ANALYSIS + FIRST FOLIO QUOTES
          ===================================================================== */}
      {!speedReadMode && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Quad-Source Critical Analysis (6 Cols) */}
          <div className="lg:col-span-6 liquid-glass-bento rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpenCheck className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
                Quad-Source Critical Synthesis
              </h3>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-400/30">
              <span className="font-mono text-[10px] uppercase tracking-widest text-purple-300 font-semibold block mb-1">
                Scene Thesis
              </span>
              <p className="text-xs text-white font-medium leading-relaxed">
                {chapter.analysis.thesis}
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-500/[0.06] border border-amber-400/25">
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 font-semibold flex items-center gap-1.5 mb-1">
                  <ScrollText className="w-3.5 h-3.5" />
                  1. Class Study Guide (Google Doc Notes)
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {chapter.analysis.googleDocSynthesis}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-300 font-semibold block mb-1">
                  2. SparkNotes Structural & Thematic Lens
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {chapter.analysis.sparkNotesSynthesis}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-300 font-semibold block mb-1">
                  3. LitCharts Symbolism, Meter & Rhetoric
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {chapter.analysis.litChartsSynthesis}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-300 font-semibold flex items-center gap-1.5 mb-1">
                  <Theater className="w-3.5 h-3.5" />
                  4. RSC Learning Zone Stagecraft & Performance
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {chapter.analysis.rscStagecraftContext}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-rose-300 font-semibold block mb-1">
                  5. Tragic & Psychological Trajectory
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {chapter.analysis.psychologicalArc}
                </p>
              </div>
            </div>
          </div>

          {/* Annotated Verbatim Quotes (6 Cols) */}
          <div className="lg:col-span-6 liquid-glass-bento rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <QuoteIcon className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
                    Key First Folio Quotes & Close Reading (
                    {chapter.quotes.length})
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  Essay Evidence Bank
                </span>
              </div>

              <div className="space-y-3.5">
                {chapter.quotes.map((q) => {
                  const isBookmarked = !!bookmarkedQuotes[q.id];
                  return (
                    <blockquote
                      key={q.id}
                      className="p-4 rounded-2xl bg-slate-950/65 border border-white/10 hover:border-amber-400/35 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="font-serif italic text-sm lg:text-base text-amber-100/95 leading-relaxed">
                          “{q.quote}”
                        </p>
                        <button
                          onClick={() => toggleBookmarkQuote(q.id)}
                          title="Bookmark quote"
                          className="p-1.5 rounded-xl liquid-glass-pill text-slate-300 shrink-0 cursor-pointer"
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              isBookmarked
                                ? "text-amber-300 fill-amber-300"
                                : ""
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                        <footer className="text-[11px] font-mono text-amber-300/90">
                          — {q.speaker} ({q.context})
                        </footer>
                        {q.actSceneLine && (
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/35">
                            Line {q.actSceneLine}
                          </span>
                        )}
                      </div>

                      {/* Literary Techniques in Quote */}
                      {q.literaryTechniques && q.literaryTechniques.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {q.literaryTechniques.map((tech, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/10"
                            >
                              ✦ {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-xs text-slate-300 leading-relaxed border-t border-white/[0.07] pt-2 mb-2.5">
                        {q.analysis}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {q.themes.map((tId) => {
                          const tMeta = THEMES_TAXONOMY[tId];
                          return tMeta ? (
                            <span
                              key={tId}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                              style={{
                                backgroundColor: tMeta.badgeBg,
                                borderColor: tMeta.badgeBorder,
                                color: tMeta.badgeText,
                              }}
                            >
                              {tMeta.shortName}
                            </span>
                          ) : null;
                        })}
                      </div>

                      {/* Academic Depth: Detailed Theme Connection Rationales */}
                      {q.themeConnections && q.themeConnections.length > 0 && (
                        <details className="mt-2 pt-2 border-t border-white/[0.06] group text-xs">
                          <summary className="font-mono text-[10px] text-amber-300/80 hover:text-amber-200 cursor-pointer list-none select-none flex items-center justify-between py-0.5">
                            <span className="flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3 text-amber-400" />
                              Thematic Mechanics & Evidence Rationales ({q.themeConnections.length})
                            </span>
                            <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">
                              ▼
                            </span>
                          </summary>
                          <div className="mt-2 space-y-2 pl-0.5">
                            {q.themeConnections.map((tc, idx) => {
                              const tMeta = THEMES_TAXONOMY[tc.themeId];
                              return (
                                <div
                                  key={idx}
                                  className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                                >
                                  <span
                                    className="inline-block text-[9px] font-mono font-semibold px-2 py-0.5 rounded border mb-1"
                                    style={{
                                      backgroundColor: tMeta?.badgeBg,
                                      borderColor: tMeta?.badgeBorder,
                                      color: tMeta?.badgeText,
                                    }}
                                  >
                                    {tMeta?.shortName || tc.themeId.toUpperCase()}
                                  </span>
                                  <p className="text-[11px] text-slate-200/90 leading-relaxed">
                                    {tc.explanation}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </details>
                      )}
                    </blockquote>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
});
