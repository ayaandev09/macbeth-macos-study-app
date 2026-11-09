"use client";

import React, { useState } from "react";
import { ChapterData, THEMES_TAXONOMY, SCENE_PRIMERS, PRE_LESSON_BRIEFINGS } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import { RecallFlipCard } from "@/components/RecallFlipCard";
import { AcademicNotesSurface } from "@/components/AcademicNotesSurface";
import {
  Sparkles,
  Quote as QuoteIcon,
  Crown,
  GraduationCap,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  BookOpen,
  PanelRightClose,
  X,
  Edit3,
  Flame,
  AlertCircle,
  Copy,
  Check,
  Timer,
  Award,
} from "lucide-react";

interface MacbethRightInspectorProps {
  chapter: ChapterData;
  isOpen: boolean;
  onToggle: () => void;
}

type InspectorTab = "recall" | "quotes" | "context" | "notes";

export function MacbethRightInspector({
  chapter,
  isOpen,
  onToggle,
}: MacbethRightInspectorProps) {
  const [activeTab, setActiveTab] = useState<InspectorTab>("recall");
  const [copiedNote, setCopiedNote] = useState(false);

  const {
    bookmarkedQuotes,
    toggleBookmarkQuote,
    chapterNotes,
    setChapterNote,
    completedChapters,
    toggleChapterComplete,
    openExamSprint,
    setViewMode,
  } = useStudyStore();

  const sceneBriefing = PRE_LESSON_BRIEFINGS[chapter.id];
  const scenePrimer = SCENE_PRIMERS[chapter.id];
  const userNote = chapterNotes[chapter.id] || "";
  const isCompleted = !!completedChapters[chapter.id];

  const handleCopyNote = () => {
    if (userNote.trim()) {
      navigator.clipboard.writeText(userNote);
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2000);
    }
  };

  return (
    <aside
      data-tour="inspector"
      className={`shrink-0 sticky top-3 select-none overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${
        !isOpen
          ? "w-0 max-w-0 p-0 -ml-4 xl:-ml-5 border-0 opacity-0 pointer-events-none"
          : "w-80 lg:w-88 p-0 opacity-100"
      }`}
    >
      <div
        className={`w-80 lg:w-88 shrink-0 transition-opacity duration-200 ${
          !isOpen ? "opacity-0 pointer-events-none invisible" : "opacity-100 visible"
        }`}
      >
        <div className="liquid-card-flagship rounded-3xl p-4 border border-amber-500/40 bg-slate-950/85 backdrop-blur-2xl shadow-2xl flex flex-col max-h-[calc(100vh-1.5rem)] overflow-hidden">
            {/* Top Header */}
            <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-white/10 shrink-0 min-h-[44px]">
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/35 text-amber-300 shrink-0 shadow-inner">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block truncate">
                    FOLIO INSPEKTOR
                  </span>
                  <h3 className="text-xs font-semibold text-white tracking-tight truncate">
                    {chapter.displayCode} · {chapter.title.replace(/^Act \d+, Scene \d+:\s*/, "")}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => toggleChapterComplete(chapter.id)}
                  title={isCompleted ? "Mark Incomplete" : "Mark Scene Mastered"}
                  className={`p-1.5 rounded-xl flex items-center justify-center text-xs font-mono transition-all cursor-pointer soft-button ${
                    isCompleted
                      ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 shadow-sm"
                      : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
                <button
                  onClick={onToggle}
                  title="Tuck Inspector away (⌘I)"
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-black/40 rounded-xl border border-white/10 mb-3 shrink-0">
          <button
            onClick={() => setActiveTab("recall")}
            className={`py-1.5 px-1 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer truncate ${
              activeTab === "recall"
                ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🎯 Cram
          </button>
          <button
            onClick={() => setActiveTab("quotes")}
            className={`py-1.5 px-1 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer truncate ${
              activeTab === "quotes"
                ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            💬 Quotes
          </button>
          <button
            onClick={() => setActiveTab("context")}
            className={`py-1.5 px-1 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer truncate ${
              activeTab === "context"
                ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            👑 Context
          </button>
          <button
            onClick={() => setActiveTab("notes")}
            className={`py-1.5 px-1 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer truncate ${
              activeTab === "notes"
                ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            📝 Notes
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 custom-scrollbar text-xs">
          {/* TAB 1: ACTIVE RECALL & CRAM */}
          {activeTab === "recall" && (
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block font-bold">
                  Active Recall Flipcard
                </span>
                <p className="text-[11px] text-slate-400">
                  Tap or click to flip and test memory retrieval before looking at notes.
                </p>
              </div>

              <RecallFlipCard
                moduleCode={chapter.displayCode}
                title={`${chapter.displayCode} · ${chapter.title.replace(/^Act \d+, Scene \d+:\s*/, "")}`}
                prompt={
                  sceneBriefing?.teacherPopQuiz?.question ||
                  chapter.examPromptTakeaway ||
                  chapter.summary
                }
                answer={sceneBriefing?.teacherPopQuiz?.answer || chapter.summary}
                accent="#F59E0B"
                secondary="#E11D48"
                meta="MACBETH ACTIVE RECALL"
              />

              {/* Examiner Evaluation Blueprint */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 space-y-2">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold font-mono text-[11px]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Examiner Level 7 Criteria</span>
                </div>
                <p className="text-[11px] text-slate-200 leading-relaxed">
                  {chapter.examPromptTakeaway}
                </p>
              </div>

              {/* Common Pitfall Alert */}
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-400/25 space-y-1.5">
                <div className="flex items-center gap-1.5 text-rose-300 font-bold font-mono text-[10px]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Common Student Pitfall</span>
                </div>
                <p className="text-[11px] text-rose-100/90 leading-relaxed">
                  Do not treat {chapter.displayCode} as mere plot narrative. Always link
                  character language (e.g. equivocation, caesura, violent imagery) directly to
                  the breakdown of Scotland&apos;s natural moral order.
                </p>
              </div>

              {/* Launch Timed Exam Sprint Action Card */}
              <button
                onClick={openExamSprint}
                className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/15 to-rose-500/15 border border-amber-400/40 hover:border-amber-400/70 text-left transition-all cursor-pointer flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 group-hover:scale-105 transition-transform">
                    <Timer className="w-4 h-4 animate-pulse" />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block">
                      Launch Timed Exam Sprint
                    </span>
                    <span className="text-[10px] text-amber-200/80">
                      15m / 30m / 45m timed writing drill
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-300 font-bold px-2 py-1 rounded-lg bg-black/40 border border-white/10">
                  ⌘E
                </span>
              </button>
            </div>
          )}

          {/* TAB 2: QUOTE DOSSIER */}
          {activeTab === "quotes" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-bold">
                  Scene Quotation Bank ({chapter.quotes.length})
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Click bookmark to pin</span>
              </div>

              {chapter.quotes.map((q) => {
                const isBookmarked = !!bookmarkedQuotes[q.id];
                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2 hover:border-amber-400/35 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] text-amber-300 font-bold px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-400/20">
                        {q.speaker}
                      </span>
                      <button
                        onClick={() => toggleBookmarkQuote(q.id)}
                        className={`p-1 rounded-lg transition-colors cursor-pointer ${
                          isBookmarked
                            ? "text-amber-400 hover:text-amber-300"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <blockquote className="font-serif italic text-xs text-amber-100/95 leading-relaxed">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>

                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {q.analysis}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1">
                      {q.themes.map((tId) => {
                        const theme = THEMES_TAXONOMY[tId];
                        return (
                          <span
                            key={tId}
                            className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                            style={{
                              backgroundColor: theme?.badgeBg || "rgba(255,255,255,0.05)",
                              color: theme?.badgeText || "#ffffff",
                              borderColor: theme?.badgeBorder || "rgba(255,255,255,0.1)",
                              borderWidth: 1,
                            }}
                          >
                            {theme?.shortName || tId}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: JACOBEAN CONTEXT & STAGECRAFT */}
          {activeTab === "context" && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/25 space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" />
                  King James I &amp; The 1605 Gunpowder Plot
                </span>
                <p className="text-[11px] text-slate-200 leading-relaxed">
                  Written shortly after the 1605 Gunpowder Plot, Shakespeare tailored Macbeth for
                  King James I (a Scottish Stuart patron claiming descent from Banquo), validating
                  the Divine Right of Kings and condemning regicide as an assault on nature.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-400/25 space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  Daemonologie &amp; Witchcraft
                </span>
                <p className="text-[11px] text-slate-200 leading-relaxed">
                  King James authored <em>Daemonologie</em> (1597) asserting witches were real
                  demonic agents. The Witches&apos; trochaic tetrameter rhythm sets them apart
                  from the noble characters&apos; iambic pentameter, signifying their discordant
                  threat to cosmic harmony.
                </p>
              </div>

              {scenePrimer?.whoIsInTheScene && (
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold block">
                    Characters Onstage ({chapter.displayCode})
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {scenePrimer.whoIsInTheScene.map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/15 text-emerald-200 border border-emerald-400/20"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PERSONAL NOTES */}
          {activeTab === "notes" && (
            <div className="space-y-3">
              <AcademicNotesSurface
                note={userNote}
                onChange={(text) => setChapterNote(chapter.id, text)}
                title="Scene Essay Notes"
                itemCode={chapter.displayCode}
                minRows={10}
                accentColor="#f59e0b"
              />
              <button
                onClick={() => setViewMode("paper2")}
                className="w-full p-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open IB Paper 2 Studio</span>
                </span>
                <span className="text-[10px] text-slate-400">Rubric &amp; 900w ➔</span>
              </button>

              <button
                onClick={() => useStudyStore.getState().openInAppBrowser()}
                className="w-full p-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 text-sky-300 font-mono text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-sm">🌐</span>
                  <span>In-App Research Browser</span>
                </span>
                <span className="text-[10px] text-sky-400">NotebookLM Vault ➔</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </aside>
  );
}
