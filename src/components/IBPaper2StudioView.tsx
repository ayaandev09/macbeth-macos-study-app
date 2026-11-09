"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IB_GUIDING_QUESTIONS,
  IB_PAPER_2_RUBRIC,
  OPTIMAL_900_WORD_EXEMPLAR_ESSAY,
  IBQuestionData,
} from "@/data";
import {
  PenLine,
  BookOpen,
  Award,
  Sparkles,
  Quote,
  Timer,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check,
  Download,
  Trash2,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  HelpCircle,
  Layers,
  ArrowRight,
  Maximize2,
  Minimize2,
  Hash,
  Clock,
  Palette,
  Type,
  ListPlus,
} from "lucide-react";

type FontStyleOption = "handwriting-upright" | "handwriting-comic" | "handwriting-architect" | "regular-sans" | "scholarly-serif";

interface EssayDraftState {
  plan: string;
  intro: string;
  body1: string;
  body2: string;
  body3: string;
  conclusion: string;
}

const DEFAULT_DRAFT: EssayDraftState = {
  plan: "",
  intro: "",
  body1: "",
  body2: "",
  body3: "",
  conclusion: "",
};

export function IBPaper2StudioView() {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(IB_GUIDING_QUESTIONS[0].id);
  const [activeStudioTab, setActiveStudioTab] = useState<"questions" | "write" | "rubric" | "exemplar">("questions");
  const [fontStyle, setFontStyle] = useState<FontStyleOption>("handwriting-upright");
  const [expandedQuoteIndex, setExpandedQuoteIndex] = useState<number | null>(0);
  const [activeRubricCriterion, setActiveRubricCriterion] = useState<string>("A");
  const [copiedQuoteIndex, setCopiedQuoteIndex] = useState<number | null>(null);
  const [copiedEssayText, setCopiedEssayText] = useState(false);
  const [copiedSectionIndex, setCopiedSectionIndex] = useState<number | null>(null);
  const [copiedTransitionIndex, setCopiedTransitionIndex] = useState<string | null>(null);
  const [confirmClearSection, setConfirmClearSection] = useState(false);

  // Timer State for Timed Paper 2 Practice (105 mins total for IB Paper 2 = 6300 seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // User Essay Drafting State per question (persisted in localStorage)
  const [draftsByQuestion, setDraftsByQuestion] = useState<Record<string, EssayDraftState>>({});
  const [activeDraftSection, setActiveDraftSection] = useState<keyof EssayDraftState>("intro");

  // Selected Question Data
  const currentQuestion = useMemo(
    () => IB_GUIDING_QUESTIONS.find((q) => q.id === selectedQuestionId) || IB_GUIDING_QUESTIONS[0],
    [selectedQuestionId]
  );

  // Load saved drafts and font from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedDrafts = localStorage.getItem("macbeth_ib_paper2_drafts_v1");
      if (savedDrafts) {
        setDraftsByQuestion(JSON.parse(savedDrafts));
      }
      const savedFont = localStorage.getItem("macbeth_ib_font_preference_v1") as FontStyleOption;
      if (savedFont) {
        setFontStyle(savedFont);
      }
    } catch (e) {
      console.error("Failed to load saved drafts:", e);
    }
  }, []);

  // Save drafts to localStorage whenever updated
  const updateDraftSection = (section: keyof EssayDraftState, value: string) => {
    setDraftsByQuestion((prev) => {
      const current = prev[selectedQuestionId] || { ...DEFAULT_DRAFT };
      const updated = {
        ...prev,
        [selectedQuestionId]: {
          ...current,
          [section]: value,
        },
      };
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("macbeth_ib_paper2_drafts_v1", JSON.stringify(updated));
        } catch (e) {
          console.error("Failed to save drafts:", e);
        }
      }
      return updated;
    });
  };

  const handleFontChange = (newFont: FontStyleOption) => {
    setFontStyle(newFont);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("macbeth_ib_font_preference_v1", newFont);
      } catch (e) {
        console.error("Failed to save font preference:", e);
      }
    }
  };

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Current draft calculation
  const activeDraft = draftsByQuestion[selectedQuestionId] || DEFAULT_DRAFT;

  const totalWords = useMemo(() => {
    const combined = [
      activeDraft.intro,
      activeDraft.body1,
      activeDraft.body2,
      activeDraft.body3,
      activeDraft.conclusion,
    ].join(" ");
    return combined.trim() ? combined.trim().split(/\s+/).length : 0;
  }, [activeDraft]);

  const handleCopyFullEssayDraft = () => {
    const fullText = [
      `TITLE: IB English Paper 2 - Response to Question ${currentQuestion.number}`,
      `QUESTION: ${currentQuestion.question}`,
      `WORD COUNT: ${totalWords} words`,
      "",
      "--- OUTLINE / PLAN ---",
      activeDraft.plan || "(No outline provided)",
      "",
      "--- INTRODUCTION ---",
      activeDraft.intro || "",
      "",
      "--- BODY PARAGRAPH 1 ---",
      activeDraft.body1 || "",
      "",
      "--- BODY PARAGRAPH 2 ---",
      activeDraft.body2 || "",
      "",
      "--- BODY PARAGRAPH 3 ---",
      activeDraft.body3 || "",
      "",
      "--- CONCLUSION ---",
      activeDraft.conclusion || "",
    ].join("\n");

    navigator.clipboard.writeText(fullText);
    setCopiedEssayText(true);
    setTimeout(() => setCopiedEssayText(false), 2000);
  };

  const handleCopyQuote = (quoteText: string, index: number) => {
    navigator.clipboard.writeText(quoteText);
    setCopiedQuoteIndex(index);
    setTimeout(() => setCopiedQuoteIndex(null), 2000);
  };

  const handleCopyExemplarSection = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedSectionIndex(index);
    setTimeout(() => setCopiedSectionIndex(null), 2000);
  };

  const handleCopyTransitionPhrase = (phrase: string, key: string) => {
    navigator.clipboard.writeText(phrase);
    setCopiedTransitionIndex(key);
    setTimeout(() => setCopiedTransitionIndex(null), 2000);
  };

  // Handwriting font styling resolver (Strictly clean upright handwriting with zero slant)
  const getWritingFontClass = () => {
    switch (fontStyle) {
      case "handwriting-upright":
        return "font-handwriting-upright";
      case "handwriting-comic":
        return "font-handwriting-comic";
      case "handwriting-architect":
        return "font-handwriting-architect";
      case "scholarly-serif":
        return "font-serif";
      case "regular-sans":
      default:
        return "font-sans";
    }
  };

  return (
    <div className="space-y-6 w-full max-w-full pb-12 animate-fade-in">
      {/* =====================================================================
          1. FLAGSHIP BANNER: IB PAPER 2 SUITE HEADER
          ===================================================================== */}
      <section className="liquid-card-flagship rounded-3xl p-6 lg:p-8 border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-black/80 to-slate-950/90 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                IB Literature HL / SL • Paper 2 Comparative Studio
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                Official 30-Mark Rubric Attached
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Optimal ~900 Words
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              Macbeth IB Paper 2 Writing &amp; Examination Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Master the four official Macbeth guiding questions, scrutinize the official IB assessment rubric (Criteria A–D), craft your response in a clean upright handwriting studio with real-time analytics, and study the top-scoring 900-word exemplar template.
            </p>
          </div>

          {/* Studio Navigation Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/10 shrink-0">
            <button
              onClick={() => setActiveStudioTab("questions")}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeStudioTab === "questions"
                  ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>4 Questions</span>
            </button>
            <button
              onClick={() => setActiveStudioTab("write")}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeStudioTab === "write"
                  ? "bg-rose-500/25 text-rose-300 border border-rose-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Writing Studio</span>
            </button>
            <button
              onClick={() => setActiveStudioTab("rubric")}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeStudioTab === "rubric"
                  ? "bg-purple-500/25 text-purple-300 border border-purple-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Official Rubric</span>
            </button>
            <button
              onClick={() => setActiveStudioTab("exemplar")}
              className={`px-3 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeStudioTab === "exemplar"
                  ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>900w Exemplar</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          TAB 1: THE 4 GUIDING QUESTIONS & CURATED QUOTES
          ===================================================================== */}
      {activeStudioTab === "questions" && (
        <div className="space-y-6">
          {/* Question Selector Cards Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {IB_GUIDING_QUESTIONS.map((q) => {
              const isSelected = q.id === selectedQuestionId;
              return (
                <button
                  key={q.id}
                  onClick={() => setSelectedQuestionId(q.id)}
                  className={`text-left p-4 rounded-2xl transition-all cursor-pointer border relative overflow-hidden flex flex-col justify-between min-h-[140px] ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-400/60 shadow-[0_0_24px_rgba(245,158,11,0.25)]"
                      : "bg-black/40 border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-500" />
                  )}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-mono font-bold text-amber-400 uppercase">
                        Question 0{q.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        {q.bestQuotes.length} Top Quotes
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-1 mb-1">
                      {q.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-300/80 font-mono">
                    <span>{isSelected ? "✦ Active Question" : "Click to Inspect"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Question Deep Dive Card */}
          <article className="liquid-glass-bento rounded-3xl p-6 lg:p-8 space-y-6 border border-white/15 bg-slate-950/70">
            {/* Header with Prompt */}
            <div className="pb-5 border-b border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-xl bg-amber-500/25 text-amber-300 border border-amber-400/40 text-xs font-mono font-bold">
                  Question 0{currentQuestion.number} • IB Paper 2 Comparative Focus
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveStudioTab("write");
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <PenLine className="w-3.5 h-3.5" />
                    <span>Answer This Question</span>
                  </button>
                </div>
              </div>

              <h2 className="text-lg sm:text-2xl font-bold text-white font-display leading-snug">
                {currentQuestion.question}
              </h2>

              {/* Taxonomy Metadata Chips */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="font-mono text-[10px] text-amber-300 uppercase block font-bold">
                    Directive &amp; Keywords
                  </span>
                  <p className="text-xs text-slate-200">{currentQuestion.directive}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {currentQuestion.keywords.map((kw, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 text-slate-300 font-mono">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="font-mono text-[10px] text-emerald-300 uppercase block font-bold">
                    Central Themes
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {currentQuestion.themes.map((th, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                        {th}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="font-mono text-[10px] text-purple-300 uppercase block font-bold">
                    Dramatis Personae
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {currentQuestion.characters.map((ch, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[11px] bg-purple-500/15 text-purple-300 border border-purple-400/20">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="font-mono text-[10px] text-sky-300 uppercase block font-bold">
                    Critical Dramatic Events
                  </span>
                  <ul className="text-[11px] text-slate-300 space-y-0.5 list-disc list-inside">
                    {currentQuestion.keyEvents.slice(0, 3).map((ev, i) => (
                      <li key={i} className="truncate">{ev}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CURATED BEST QUOTES SECTION */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Quote className="w-4 h-4 text-amber-400" />
                    <span>Curated Best Quotes for Question 0{currentQuestion.number}</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    High-scoring, versatile Shakespearean anchors complete with speaker, act/scene citation, literary devices, and Paper 2 utility.
                  </p>
                </div>
                <span className="text-xs font-mono text-amber-300">
                  {currentQuestion.bestQuotes.length} Curated Quotes
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.bestQuotes.map((q, idx) => {
                  const isExpanded = expandedQuoteIndex === idx;
                  const isCopied = copiedQuoteIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-amber-400/30 transition-all space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-400/25">
                            {q.speaker} • {q.actScene} ({q.lineRef})
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {q.literaryDevices.map((dev, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                              >
                                {dev}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleCopyQuote(`"${q.quote}" (${q.speaker}, ${q.lineRef})`, idx)}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                            title="Copy Quote with Reference"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-300 text-[11px]">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span className="text-[11px]">Copy</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => setExpandedQuoteIndex(isExpanded ? null : idx)}
                            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <blockquote className="p-3 rounded-xl bg-amber-500/[0.08] border-l-2 border-amber-400 font-serif italic text-sm sm:text-base text-amber-100/95 leading-relaxed">
                        &ldquo;{q.quote}&rdquo;
                      </blockquote>

                      {isExpanded && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs border-t border-white/10">
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                            <span className="font-mono text-[10px] text-sky-300 font-bold uppercase block">
                              Granular Craft Analysis (Criterion B)
                            </span>
                            <p className="text-slate-300 leading-relaxed">{q.analysis}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                            <span className="font-mono text-[10px] text-emerald-300 font-bold uppercase block">
                              Paper 2 Comparative Application (Criterion A &amp; C)
                            </span>
                            <p className="text-slate-300 leading-relaxed">{q.paper2Utility}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QUICK ESSAY BLUEPRINT SUMMARY */}
            <div className="p-4 rounded-2xl bg-purple-500/[0.08] border border-purple-400/25 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Recommended Tripartite Essay Roadmap for this Question
                </span>
                <span className="text-[11px] font-mono text-slate-400">Criterion C Focus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic font-serif">
                <strong>Master Thesis:</strong> {currentQuestion.sampleOutline.thesis}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="font-mono text-[10px] text-amber-300 font-bold block mb-1">Body 1 Focus:</span>
                  <p className="text-[11px] text-slate-300">{currentQuestion.sampleOutline.body1Focus}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="font-mono text-[10px] text-rose-300 font-bold block mb-1">Body 2 Focus:</span>
                  <p className="text-[11px] text-slate-300">{currentQuestion.sampleOutline.body2Focus}</p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="font-mono text-[10px] text-purple-300 font-bold block mb-1">Body 3 Focus:</span>
                  <p className="text-[11px] text-slate-300">{currentQuestion.sampleOutline.body3Focus}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* =====================================================================
          TAB 2: INTERACTIVE WRITING STUDIO & CLEAN HANDWRITING CANVAS
          ===================================================================== */}
      {activeStudioTab === "write" && (
        <div className="space-y-5">
          {/* Writing Toolbar Header */}
          <div className="liquid-glass-bento rounded-3xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border border-amber-400/30">
            {/* Question Switcher & Timer */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-amber-300 font-bold">Writing For:</span>
                <select
                  value={selectedQuestionId}
                  onChange={(e) => setSelectedQuestionId(e.target.value)}
                  className="bg-black/80 text-white font-mono text-xs px-3 py-1.5 rounded-xl border border-white/15 focus:outline-none focus:border-amber-400"
                >
                  {IB_GUIDING_QUESTIONS.map((q) => (
                    <option key={q.id} value={q.id}>
                      Q{q.number}: {q.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stopwatch Timer */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-black/50 border border-white/10">
                <Timer className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-xs text-amber-200 font-bold min-w-[50px]">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
                  title={isTimerRunning ? "Pause Timer" : "Start Timed Exam Sprint"}
                >
                  {isTimerRunning ? <Pause className="w-3 h-3 text-rose-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds(0);
                  }}
                  className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Typography Selector (CLEAN HANDWRITTEN FONT REQUIREMENT) */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-xs">
                <Type className="w-3.5 h-3.5 text-amber-400 ml-1.5" />
                <span className="text-[11px] font-mono text-slate-400 mr-1">Font:</span>
                <button
                  onClick={() => handleFontChange("handwriting-upright")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    fontStyle === "handwriting-upright"
                      ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Patrick Hand / Clean upright legible handwriting (no slant)"
                >
                  Patrick Hand
                </button>
                <button
                  onClick={() => handleFontChange("handwriting-comic")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    fontStyle === "handwriting-comic"
                      ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Comic Neue / Upright clean rounded school script (no slant)"
                >
                  Comic Neue Upright
                </button>
                <button
                  onClick={() => handleFontChange("handwriting-architect")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    fontStyle === "handwriting-architect"
                      ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Architects Daughter / Clean Drafting Hand"
                >
                  Architect Hand
                </button>
                <button
                  onClick={() => handleFontChange("regular-sans")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    fontStyle === "regular-sans"
                      ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Standard Clean Sans-Serif"
                >
                  Modern Sans
                </button>
                <button
                  onClick={() => handleFontChange("scholarly-serif")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    fontStyle === "scholarly-serif"
                      ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                  title="Garamond / Academic Book Serif"
                >
                  Book Serif
                </button>
              </div>

              {/* Copy Full Essay */}
              <button
                onClick={handleCopyFullEssayDraft}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-all border border-white/15"
                title="Copy entire essay with all paragraphs"
              >
                {copiedEssayText ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied All</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copy Full Essay</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Active Question Banner In Writing Mode */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] text-amber-400 uppercase font-bold tracking-wider block">
                Prompt In Focus
              </span>
              <p className="text-xs sm:text-sm text-amber-100 font-medium">
                {currentQuestion.question}
              </p>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs shrink-0 text-slate-300">
              <span>Total Words: <strong className="text-amber-300">{totalWords}</strong> / ~900</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400">Autosaved to LocalStorage</span>
            </div>
          </div>

          {/* Section Navigation Tabs for Writing */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {(
              [
                { id: "plan", label: "0. Essay Plan", target: "~80w" },
                { id: "intro", label: "1. Intro", target: "~120w" },
                { id: "body1", label: "2. Body I", target: "~220w" },
                { id: "body2", label: "3. Body II", target: "~220w" },
                { id: "body3", label: "4. Body III", target: "~220w" },
                { id: "conclusion", label: "5. Conclusion", target: "~120w" },
              ] as { id: keyof EssayDraftState; label: string; target: string }[]
            ).map((sec) => {
              const isCurrent = activeDraftSection === sec.id;
              const words = activeDraft[sec.id]?.trim()
                ? activeDraft[sec.id].trim().split(/\s+/).length
                : 0;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveDraftSection(sec.id)}
                  className={`p-3 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                    isCurrent
                      ? "bg-amber-500/20 text-white border-amber-400/60 shadow-md"
                      : "bg-black/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-xs font-bold block">{sec.label}</span>
                  <div className="flex items-center justify-between text-[10px] font-mono mt-2 text-slate-400">
                    <span className={words > 0 ? "text-amber-300 font-bold" : "text-slate-500"}>
                      {words} words
                    </span>
                    <span className="text-slate-500">{sec.target}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Clean Upright Handwritten Canvas Surface */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-amber-500/[0.03] via-black/60 to-black/80 backdrop-blur-xl overflow-hidden shadow-2xl space-y-0">
            {/* Canvas Header */}
            <div className="px-5 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  ✍️
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase font-mono tracking-wider">
                    {activeDraftSection.toUpperCase()} — {fontStyle === "handwriting-upright" ? "Clean Upright Script (Patrick Hand)" : fontStyle}
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    Autosaving continuously • Clear, upright, legible font (not slanted)
                  </span>
                </div>
              </div>

              {/* Quick Insert Snippet Actions */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Quick Insert Best Quote Dropdown */}
                <select
                  aria-label="Insert Curated Quote from Question"
                  onChange={(e) => {
                    const quote = e.target.value;
                    if (quote) {
                      const text = activeDraft[activeDraftSection];
                      updateDraftSection(activeDraftSection, text + (text && !text.endsWith(" ") ? " " : "") + quote + " ");
                      e.target.value = "";
                    }
                  }}
                  defaultValue=""
                  className="bg-black/80 text-amber-300 font-mono text-xs px-2.5 py-1 rounded-lg border border-amber-400/30 focus:outline-none cursor-pointer max-w-[190px] truncate"
                >
                  <option value="" disabled>
                    + Insert Question Quote
                  </option>
                  {currentQuestion.bestQuotes.map((q, idx) => (
                    <option key={idx} value={`"${q.quote}" (${q.speaker}, ${q.lineRef})`}>
                      {q.speaker}: &ldquo;{q.quote.slice(0, 32)}...&rdquo;
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    const text = activeDraft[activeDraftSection];
                    updateDraftSection(activeDraftSection, text + (text ? "\n• " : "• "));
                  }}
                  className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1 cursor-pointer"
                >
                  <ListPlus className="w-3 h-3 text-amber-300" />
                  <span>Bullet</span>
                </button>
                <button
                  onClick={() => {
                    const text = activeDraft[activeDraftSection];
                    updateDraftSection(activeDraftSection, text + ' "[Quote]" ');
                  }}
                  className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1 cursor-pointer"
                >
                  <Quote className="w-3 h-3 text-amber-300" />
                  <span>Quote Slot</span>
                </button>

                {confirmClearSection ? (
                  <div className="flex items-center gap-1 bg-rose-950/80 border border-rose-400/40 px-2 py-0.5 rounded-lg text-xs font-mono">
                    <span className="text-rose-200 text-[10px]">Clear?</span>
                    <button
                      onClick={() => {
                        updateDraftSection(activeDraftSection, "");
                        setConfirmClearSection(false);
                      }}
                      className="px-1.5 py-0.5 rounded bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-bold cursor-pointer"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setConfirmClearSection(false)}
                      className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] cursor-pointer"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmClearSection(true)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 cursor-pointer transition-colors"
                    title="Clear Section"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* The Writing Surface Textarea */}
            <div className="relative p-5">
              <textarea
                value={activeDraft[activeDraftSection]}
                onChange={(e) => updateDraftSection(activeDraftSection, e.target.value)}
                rows={14}
                placeholder={
                  activeDraftSection === "plan"
                    ? "Outline your 3 body paragraph arguments, comparative texts, key quotes, and thesis statement here..."
                    : activeDraftSection === "intro"
                    ? "Write your Introduction (~120 words): Hook, conceptual premise, comparative thesis statement, and structural roadmap..."
                    : activeDraftSection === "conclusion"
                    ? "Write your Conclusion (~120 words): Synthesis of arguments without mechanical repetition, universal human condition, Jacobean ideological takeaway..."
                    : `Write your ${activeDraftSection.toUpperCase()} (~220 words): Conceptual topic sentence, textual evidence, granular technique scrutiny (meter, diction, dramatic irony), theatrical effect, link to thesis...`
                }
                style={{
                  fontSize: fontStyle.startsWith("handwriting") ? "1.25rem" : "1.02rem",
                  lineHeight: fontStyle.startsWith("handwriting") ? "32px" : "28px",
                  fontStyle: "normal",
                  letterSpacing: fontStyle === "handwriting-upright" ? "0.02em" : "normal",
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 31px, rgba(255, 255, 255, 0.06) 32px)",
                  backgroundAttachment: "local",
                }}
                className={`w-full bg-transparent text-amber-100 placeholder:text-amber-200/25 focus:outline-none resize-y transition-all ${getWritingFontClass()}`}
              />

              {/* Bottom Canvas Telemetry */}
              <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span>
                    Section Words:{" "}
                    <strong className="text-white">
                      {activeDraft[activeDraftSection]?.trim()
                        ? activeDraft[activeDraftSection].trim().split(/\s+/).length
                        : 0}
                    </strong>
                  </span>
                  <span>•</span>
                  <span>
                    Chars: {activeDraft[activeDraftSection]?.length || 0}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300/80">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>High-Mark Criterion D Academic Register</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: OFFICIAL IB ENGLISH PAPER 2 RUBRIC (30 MARKS TOTAL)
          ===================================================================== */}
      {activeStudioTab === "rubric" && (
        <div className="space-y-6">
          {/* Rubric Header Card */}
          <div className="liquid-glass-bento rounded-3xl p-6 border border-purple-500/30 bg-purple-950/20 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-purple-300 uppercase tracking-widest flex items-center gap-1.5">
                <Award className="w-4 h-4 text-purple-400" />
                International Baccalaureate Assessment Rubric
              </span>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30 font-bold">
                Total: 30 Marks
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Paper 2 Official Assessment Criteria (Criteria A – D)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every IB English Literature Paper 2 comparative essay is evaluated across four distinct criteria. Use this interactive breakdown to ensure your arguments fulfill the highest mark-band descriptors (Level 5).
            </p>
          </div>

          {/* Criteria Nav Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {IB_PAPER_2_RUBRIC.map((crit) => {
              const isSelected = activeRubricCriterion === crit.id;
              return (
                <button
                  key={crit.id}
                  onClick={() => setActiveRubricCriterion(crit.id)}
                  className={`p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                    isSelected
                      ? "bg-purple-500/20 text-white border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                      : "bg-black/40 text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-purple-300">
                        Criterion {crit.id}
                      </span>
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                        {crit.marks} Marks
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{crit.name}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-2 truncate">
                    {crit.focus}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Criterion Detail Card */}
          {(() => {
            const currentCrit =
              IB_PAPER_2_RUBRIC.find((c) => c.id === activeRubricCriterion) || IB_PAPER_2_RUBRIC[0];
            return (
              <article className="liquid-glass-bento rounded-3xl p-6 lg:p-8 space-y-6 border border-white/15 bg-slate-950/70">
                <div className="pb-4 border-b border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-purple-300 uppercase px-2.5 py-0.5 rounded-lg bg-purple-500/20 border border-purple-400/30">
                      Criterion {currentCrit.id} • {currentCrit.marks} Marks Maximum
                    </span>
                    <span className="text-xs font-mono text-slate-400">IB Official Descriptor</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{currentCrit.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 italic">{currentCrit.descriptor}</p>
                  <p className="text-xs text-amber-300 pt-1">
                    <strong>Examiner Focus:</strong> {currentCrit.focus}
                  </p>
                </div>

                {/* Levels Accordion */}
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block">
                    Mark Band Descriptors
                  </span>
                  {currentCrit.levels.map((lvl, lIdx) => {
                    const isTopBand = lIdx === 0;
                    return (
                      <div
                        key={lIdx}
                        className={`p-4 rounded-2xl border transition-all space-y-2 ${
                          isTopBand
                            ? "bg-amber-500/[0.08] border-amber-400/40 shadow-sm"
                            : "bg-white/[0.02] border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-md ${
                                isTopBand
                                  ? "bg-amber-400/25 text-amber-200 border border-amber-400/40"
                                  : "bg-white/10 text-slate-300"
                              }`}
                            >
                              Marks: {lvl.markRange}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-white">{lvl.label}</h4>
                          </div>
                          {isTopBand && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                              ★ Target Band (Grade 7)
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">{lvl.summary}</p>
                        <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside pt-1">
                          {lvl.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })()}
        </div>
      )}

      {/* =====================================================================
          TAB 4: OPTIMAL 900-WORD SAMPLE ESSAY TEMPLATE (30/30 MARKS)
          ===================================================================== */}
      {activeStudioTab === "exemplar" && (
        <div className="space-y-6">
          {/* Exemplar Overview Banner */}
          <div className="liquid-glass-bento rounded-3xl p-6 border border-emerald-500/30 bg-emerald-950/20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Grade 7 Model Exemplar • Complete 900-Word Template
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 font-bold">
                  Score: {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.predictedMarks}
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-black/40 text-slate-300 border border-white/10">
                  Exact Count: {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.totalWordCount} words
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
                {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 italic">
                <strong>Answering Guiding Question:</strong> {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.question}
              </p>
            </div>

            {/* Rubric Score Breakdown Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300 font-bold">Criterion A</span>
                  <span className="text-white font-bold">{OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionA.marks}</span>
                </div>
                <p className="text-[10px] text-slate-300 line-clamp-3">
                  {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionA.comment}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-sky-300 font-bold">Criterion B</span>
                  <span className="text-white font-bold">{OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionB.marks}</span>
                </div>
                <p className="text-[10px] text-slate-300 line-clamp-3">
                  {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionB.comment}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-purple-300 font-bold">Criterion C</span>
                  <span className="text-white font-bold">{OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionC.marks}</span>
                </div>
                <p className="text-[10px] text-slate-300 line-clamp-3">
                  {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionC.comment}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-300 font-bold">Criterion D</span>
                  <span className="text-white font-bold">{OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionD.marks}</span>
                </div>
                <p className="text-[10px] text-slate-300 line-clamp-3">
                  {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.rubricBreakdown.criterionD.comment}
                </p>
              </div>
            </div>
          </div>

          {/* Color-Coded Section-By-Section Essay Breakdown */}
          <div className="space-y-4">
            {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.sections.map((sec, sIdx) => {
              const isCopied = copiedSectionIndex === sIdx;
              return (
                <article
                  key={sIdx}
                  className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-4 border border-white/15 bg-slate-950/70"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold border"
                        style={{
                          backgroundColor: `${sec.color}25`,
                          borderColor: `${sec.color}50`,
                          color: sec.color,
                        }}
                      >
                        {sec.badge}
                      </span>
                      <h3 className="text-base font-bold text-white">{sec.title}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400">
                        {sec.examinerFocus}
                      </span>
                      <button
                        onClick={() => handleCopyExemplarSection(sec.content, sIdx)}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                        title="Copy Paragraph"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-300 text-[10px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[10px]">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Paragraph Text in Comfort Academic Font */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                    <p className="text-sm sm:text-base text-slate-100 font-serif leading-[2] text-justify selection:bg-amber-500/30">
                      {sec.content}
                    </p>
                  </div>

                  {/* Technique Analysis Callout */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                      Key Devices &amp; Craft:
                    </span>
                    {sec.keyTechniques.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-amber-200/90 border border-white/10"
                      >
                        ✓ {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* PLUG-AND-PLAY TRANSITIONAL PHRASES */}
          <div className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-4 border border-white/15">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Plug-and-Play High-Scoring Transitional Phrases</span>
              </h3>
              <span className="text-xs font-mono text-amber-300">Criterion C Scaffolding</span>
            </div>
            <p className="text-xs text-slate-400">
              Integrate these scholarly phrases into your Paper 2 comparative arguments to achieve effortless academic cohesion and high marks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.plugAndPlayTransitions.map((cat, cIdx) => (
                <div key={cIdx} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-amber-300 font-mono uppercase tracking-wider">
                    {cat.category}
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    {cat.phrases.map((phrase, pIdx) => {
                      const itemKey = `${cIdx}-${pIdx}`;
                      const isCopied = copiedTransitionIndex === itemKey;
                      return (
                        <li
                          key={pIdx}
                          onClick={() => handleCopyTransitionPhrase(phrase, itemKey)}
                          className={`p-2 rounded-xl border transition-all cursor-pointer text-[11px] leading-relaxed italic flex items-center justify-between gap-2 ${
                            isCopied
                              ? "bg-emerald-500/15 border-emerald-400/40 text-emerald-200"
                              : "bg-white/[0.02] hover:bg-white/[0.06] border-white/5"
                          }`}
                          title="Click to copy phrase"
                        >
                          <span>&ldquo;{phrase}&rdquo;</span>
                          {isCopied && (
                            <span className="shrink-0 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                              Copied!
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EXAMINERS' 4-POINT CHECKLIST */}
          <div className="liquid-glass-bento rounded-3xl p-6 lg:p-7 space-y-4 border border-white/15 bg-slate-950/70">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>IB Paper 2 Examiner&apos;s Final Submission Checklist</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {OPTIMAL_900_WORD_EXEMPLAR_ESSAY.examinersChecklist.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="font-mono text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    {item.check}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.rationale}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
