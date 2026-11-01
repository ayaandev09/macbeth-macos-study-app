"use client";

import React, { useState, useMemo } from "react";
import {
  ALL_CHAPTERS,
  PRE_LESSON_BRIEFINGS,
  MASTER_FLASHCARDS,
  EXAM_PROMPTS_BANK,
  THEMES_TAXONOMY,
  FlashcardItem,
} from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  Zap,
  BookOpen,
  GraduationCap,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Layers,
  Search,
  Quote,
  Flame,
  ArrowRight,
  Filter,
} from "lucide-react";

type RevisionTab = "briefings" | "flashcards" | "essays";

export function RevisionCramView() {
  const {
    activeChapterId,
    setActiveChapter,
    setViewMode,
    flashcardScores,
    setFlashcardScore,
    resetFlashcardScores,
  } = useStudyStore();

  const [activeTab, setActiveTab] = useState<RevisionTab>("briefings");
  const [selectedSceneId, setSelectedSceneId] = useState<string>(activeChapterId);
  const [flashcardCategory, setFlashcardCategory] = useState<string>("all");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [essaySearch, setEssaySearch] = useState<string>("");

  const activeScene = useMemo(
    () => ALL_CHAPTERS.find((c) => c.id === selectedSceneId) || ALL_CHAPTERS[0],
    [selectedSceneId]
  );

  const activeBriefing = PRE_LESSON_BRIEFINGS[selectedSceneId] || PRE_LESSON_BRIEFINGS["a1-s1"];

  // Filter flashcards by category
  const filteredCards = useMemo(() => {
    return MASTER_FLASHCARDS.filter((card) => {
      if (flashcardCategory === "all") return true;
      if (flashcardCategory === "unmastered") return flashcardScores[card.id] !== "known";
      return card.category === flashcardCategory;
    });
  }, [flashcardCategory, flashcardScores]);

  const currentCard = filteredCards[cardIndex] || filteredCards[0];
  const isCurrentCardFlipped = !!flippedCards[currentCard?.id];

  const knownCount = useMemo(() => {
    return Object.values(flashcardScores).filter((s) => s === "known").length;
  }, [flashcardScores]);

  const toggleFlip = (cardId: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const nextCard = () => {
    if (cardIndex < filteredCards.length - 1) {
      setCardIndex((prev) => prev + 1);
    } else {
      setCardIndex(0);
    }
  };

  const prevCard = () => {
    if (cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    } else {
      setCardIndex(filteredCards.length - 1);
    }
  };

  const handleMarkScore = (cardId: string, status: "known" | "learning") => {
    setFlashcardScore(cardId, status);
    nextCard();
  };

  // Filter essay blueprints
  const filteredEssays = useMemo(() => {
    if (!essaySearch.trim()) return EXAM_PROMPTS_BANK;
    const q = essaySearch.toLowerCase();
    return EXAM_PROMPTS_BANK.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.prompt.toLowerCase().includes(q) ||
        e.thesisFormula.toLowerCase().includes(q)
    );
  }, [essaySearch]);

  return (
    <div className="space-y-6">
      {/* =====================================================================
          1. HEADER BANNER: REVISION & TEST PREP ENGINE
          ===================================================================== */}
      <section className="liquid-glass-bento rounded-3xl p-6 lg:p-7 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                RAPID REVISION & TEST ACCELERATOR
              </span>
              <span className="font-mono text-xs text-slate-400">
                Pre-Lesson • Active Recall • Exam Blueprints
              </span>
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight font-display">
              Macbeth Revision Hub & 5-Minute Briefings
            </h1>
            <p className="text-xs lg:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Designed for high-speed review 5 minutes before class, active recall test cramming, or structuring full GCSE / A-Level essay responses.
            </p>
          </div>

          {/* Quick Tab Selector */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/40 border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab("briefings")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "briefings"
                  ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>5-Min Briefing</span>
            </button>
            <button
              onClick={() => setActiveTab("flashcards")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "flashcards"
                  ? "bg-rose-500/25 text-rose-300 border border-rose-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Flashcards ({knownCount}/{MASTER_FLASHCARDS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("essays")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "essays"
                  ? "bg-purple-500/25 text-purple-300 border border-purple-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Exam Blueprints</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          TAB 1: 5-MINUTE PRE-LESSON SCENE BRIEFING
          ===================================================================== */}
      {activeTab === "briefings" && (
        <div className="space-y-4">
          {/* Scene Picker Ribbon (Horizontally Scrollable) */}
          <div className="liquid-glass-bento rounded-2xl p-3 flex items-center gap-2 overflow-x-auto touch-pan-x no-scrollbar">
            <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest shrink-0 pl-1">
              Select Scene:
            </span>
            {ALL_CHAPTERS.map((ch) => {
              const isSelected = ch.id === selectedSceneId;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedSceneId(ch.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono shrink-0 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-amber-500/25 text-amber-200 border border-amber-400/50 font-bold"
                      : "bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:bg-white/[0.08]"
                  }`}
                >
                  {ch.displayCode}
                </button>
              );
            })}
          </div>

          {/* Active Scene 5-Minute Briefing Bento */}
          <article className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/30 font-bold">
                    {activeScene.displayCode}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    5-Minute Pre-Lesson Cram
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white">
                  {activeScene.title}
                </h2>
              </div>

              <button
                onClick={() => {
                  setActiveChapter(selectedSceneId);
                  setViewMode("focus");
                }}
                className="liquid-glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-amber-300 flex items-center gap-1.5 hover:text-amber-100 cursor-pointer"
              >
                <span>Read Full Scene</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Grid of High-Yield Review Vectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 30-Second Rapid Recap */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.08] border border-amber-400/25 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5 mb-2">
                    <Zap className="w-3.5 h-3.5" />
                    30-Second Rapid Plot Recap
                  </span>
                  <p className="text-sm text-slate-100 leading-relaxed">
                    {activeBriefing.thirtySecondRecap}
                  </p>
                </div>
              </div>

              {/* The #1 Must-Know Quote */}
              <div className="p-4 rounded-2xl bg-rose-500/[0.08] border border-rose-400/25 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 font-bold flex items-center gap-1.5">
                      <Quote className="w-3.5 h-3.5" />
                      The #1 Quote To Memorize
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-200 border border-rose-400/30">
                      Line {activeBriefing.mustKnowQuote.line}
                    </span>
                  </div>
                  <blockquote className="font-serif italic text-sm text-amber-100 leading-relaxed mb-2">
                    “{activeBriefing.mustKnowQuote.quote}”
                  </blockquote>
                  <p className="text-xs font-mono text-amber-300/80 mb-2">
                    — {activeBriefing.mustKnowQuote.speaker}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-white/[0.08] pt-2">
                    <strong className="text-slate-200">Why It Matters:</strong> {activeBriefing.mustKnowQuote.whyItMatters}
                  </p>
                </div>
              </div>

              {/* Teacher Pop-Quiz & Model Answer */}
              <div className="p-4 rounded-2xl bg-purple-500/[0.08] border border-purple-400/25">
                <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1.5 mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  What Your Teacher Will Ask in Class
                </span>
                <p className="text-xs lg:text-sm font-semibold text-white mb-3">
                  {activeBriefing.teacherPopQuiz.question}
                </p>

                {/* Accessible Disclosure for Model Answer */}
                <details className="group text-xs pt-2 border-t border-white/[0.08]">
                  <summary className="font-mono text-[11px] text-purple-300 hover:text-purple-200 cursor-pointer list-none select-none flex items-center justify-between py-1">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      Reveal Model Answer & Analysis
                    </span>
                    <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-2 p-3 rounded-xl bg-purple-950/40 border border-purple-400/20 text-slate-200 text-xs leading-relaxed">
                    {activeBriefing.teacherPopQuiz.answer}
                  </div>
                </details>
              </div>

              {/* Key Stagecraft & Directorial Choice */}
              <div className="p-4 rounded-2xl bg-emerald-500/[0.08] border border-emerald-400/25 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5 mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    Stagecraft & Director's Vision (RSC)
                  </span>
                  <p className="text-xs lg:text-sm text-slate-200 leading-relaxed">
                    {activeBriefing.keyStagecraftVector}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* =====================================================================
          TAB 2: ACTIVE RECALL FLASHCARD DECK
          ===================================================================== */}
      {activeTab === "flashcards" && (
        <div className="space-y-4">
          {/* Flashcard Filters & Progress Tracker */}
          <div className="liquid-glass-bento rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5 text-amber-400" />
                Category:
              </span>
              {[
                { id: "all", label: "All (32)" },
                { id: "Quote", label: "Quotes" },
                { id: "Character Arc", label: "Character Arcs" },
                { id: "Theme & Device", label: "Themes & Devices" },
                { id: "Plot & Context", label: "Plot & Context" },
                { id: "unmastered", label: "Needs Practice" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFlashcardCategory(cat.id);
                    setCardIndex(0);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                    flashcardCategory === cat.id
                      ? "bg-rose-500/25 text-rose-200 border border-rose-400/40 font-bold"
                      : "bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400">
                Mastered: {knownCount}/{MASTER_FLASHCARDS.length}
              </span>
              <button
                onClick={resetFlashcardScores}
                title="Reset card progress"
                className="p-1.5 rounded-lg liquid-glass-pill text-slate-400 hover:text-white cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Flashcard */}
          {currentCard ? (
            <div className="liquid-glass-bento rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/30">
                      {currentCard.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {currentCard.actSceneRef}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    Card {cardIndex + 1} of {filteredCards.length}
                  </span>
                </div>

                {/* Question Area */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-relaxed">
                    {currentCard.question}
                  </h3>
                </div>

                {/* Flip Reveal Button / Answer Display */}
                {isCurrentCardFlipped ? (
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/15 space-y-3 animate-in fade-in duration-200">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold block">
                      ✦ Model Answer & Key Evidence
                    </span>
                    <p className="text-sm text-slate-100 whitespace-pre-line leading-relaxed">
                      {currentCard.answer}
                    </p>
                    {currentCard.keyQuote && (
                      <blockquote className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/25 font-serif italic text-xs text-amber-200">
                        “{currentCard.keyQuote}”
                      </blockquote>
                    )}
                    <p className="text-xs text-slate-300 border-t border-white/[0.08] pt-2">
                      <strong className="text-amber-300 font-mono text-[11px]">Exam Tip:</strong> {currentCard.examTip}
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => toggleFlip(currentCard.id)}
                    className="w-full py-6 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-sm font-semibold text-white">
                      Click to Reveal Answer & Exam Tip
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Space / Click to Flip
                    </span>
                  </button>
                )}
              </div>

              {/* Bottom Grading & Navigation Controls */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevCard}
                    className="liquid-glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextCard}
                    className="liquid-glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                  >
                    Next
                  </button>
                </div>

                {/* Active Recall Self-Grading */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleMarkScore(currentCard.id, "learning")}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-rose-500/20 text-rose-300 border border-rose-400/30 hover:bg-rose-500/30 flex items-center gap-1.5 cursor-pointer"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Need Review</span>
                  </button>
                  <button
                    onClick={() => handleMarkScore(currentCard.id, "known")}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/30 flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Mastered</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="liquid-glass-bento rounded-3xl p-8 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
              <h3 className="text-base font-bold text-white">All Cards in this Category Mastered!</h3>
              <p className="text-xs text-slate-400">Great job. You can reset your scores or select another category above.</p>
              <button
                onClick={resetFlashcardScores}
                className="liquid-glass-pill px-4 py-2 rounded-xl text-xs font-mono text-amber-300 cursor-pointer"
              >
                Reset Flashcard Progress
              </button>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          TAB 3: EXAM ESSAY BLUEPRINTS & THESIS BUILDER
          ===================================================================== */}
      {activeTab === "essays" && (
        <div className="space-y-4">
          {/* Essay Search Bar */}
          <div className="liquid-glass-bento rounded-2xl p-4 flex items-center gap-3">
            <Search className="w-4 h-4 text-amber-400 shrink-0" />
            <input
              type="text"
              value={essaySearch}
              onChange={(e) => setEssaySearch(e.target.value)}
              placeholder="Search essay topics (e.g. ambition, gender, guilt, kingship, supernatural)..."
              className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none"
            />
            {essaySearch && (
              <button
                onClick={() => setEssaySearch("")}
                className="text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Essay Prompts Accordion List */}
          <div className="space-y-4">
            {filteredEssays.map((essay) => (
              <article
                key={essay.id}
                className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-4"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-400/30 font-bold">
                      {essay.examBoards}
                    </span>
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-white mb-2">
                    {essay.prompt}
                  </h3>

                  {/* Thesis Formula Callout */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/[0.08] border border-amber-400/25 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 font-bold block mb-1">
                      Master Thesis Statement Formula (Grade 9 / A* Standard)
                    </span>
                    <p className="text-xs lg:text-sm text-slate-100 font-medium leading-relaxed">
                      {essay.thesisFormula}
                    </p>
                  </div>

                  {/* Jacobean Context Link */}
                  <div className="p-3 rounded-xl bg-sky-500/[0.08] border border-sky-400/20 text-xs text-sky-200/90 leading-relaxed mb-4">
                    <strong className="text-sky-300 font-mono text-[10px] uppercase">Jacobean Context Link: </strong>
                    {essay.jacobeanContext}
                  </div>
                </div>

                {/* 3-Paragraph Argument Breakdown */}
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 block mb-2">
                    3-Paragraph Essay Plan & Key Evidence
                  </span>

                  {essay.paragraphs.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                          Paragraph 0{idx + 1} • {p.sceneReference}
                        </span>
                      </div>

                      <h4 className="text-xs lg:text-sm font-semibold text-white">
                        {p.topicSentence}
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                        {p.keyQuotes.map((kq, qIdx) => (
                          <div
                            key={qIdx}
                            className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs"
                          >
                            <blockquote className="font-serif italic text-amber-200/90 mb-1">
                              “{kq.quote}” ({kq.line})
                            </blockquote>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                              {kq.analysisSnippet}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] text-slate-400 border-t border-white/[0.06] pt-1.5">
                        <strong className="text-slate-300 font-mono">Critical Insight:</strong> {p.criticalArgument}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
