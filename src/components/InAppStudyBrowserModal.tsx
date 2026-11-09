"use client";

import React, { useState } from "react";
import {
  X,
  Globe,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Headphones,
  FileText,
  Search,
  ExternalLink,
  ChevronRight,
  ListPlus,
  Play,
  Pause,
  Layers,
  Award,
} from "lucide-react";
import { NOTEBOOKLM_RESEARCH_SOURCES, ResearchSourceItem } from "@/data/notebookLmSources";
import { IB_GUIDING_QUESTIONS } from "@/data/ibPaper2Data";

interface InAppStudyBrowserModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSourceId?: string;
  initialUrl?: string;
  onInsertIntoEssay?: (text: string) => void;
}

export function InAppStudyBrowserModal({
  isOpen,
  onClose,
  initialSourceId,
  initialUrl = "https://notebooklm.google.com/",
  onInsertIntoEssay,
}: InAppStudyBrowserModalProps) {
  const [activeTab, setActiveTab] = useState<"vault" | "web">("vault");
  const [selectedSourceId, setSelectedSourceId] = useState<string>(
    initialSourceId || NOTEBOOKLM_RESEARCH_SOURCES[0].id
  );
  const [sourceSearch, setSourceSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [copiedText, setCopiedText] = useState(false);
  const [insertedFeedback, setInsertedFeedback] = useState(false);

  // Web Browser Simulation State
  const [browserUrl, setBrowserUrl] = useState(initialUrl);
  const [urlInput, setUrlInput] = useState(initialUrl);
  const [history, setHistory] = useState<string[]>([initialUrl]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Sync state whenever modal is opened or props change
  React.useEffect(() => {
    if (isOpen) {
      if (initialSourceId) {
        setSelectedSourceId(initialSourceId);
      }
      if (initialUrl) {
        setBrowserUrl(initialUrl);
        setUrlInput(initialUrl);
        setHistory((prev) => (prev[prev.length - 1] === initialUrl ? prev : [...prev, initialUrl]));
      }
    }
  }, [isOpen, initialSourceId, initialUrl]);

  // Audio Deep Dive simulator state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlayingAudio) {
      timer = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 2;
        });
      }, 500);
    } else {
      if (timer) clearInterval(timer);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlayingAudio]);

  if (!isOpen) return null;

  const currentSource: ResearchSourceItem =
    NOTEBOOKLM_RESEARCH_SOURCES.find((s) => s.id === selectedSourceId) ||
    NOTEBOOKLM_RESEARCH_SOURCES[0];

  const filteredSources = NOTEBOOKLM_RESEARCH_SOURCES.filter((s) => {
    const matchesCategory =
      selectedCategory === "all" || s.category === selectedCategory;
    const q = sourceSearch.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(q) ||
      s.authorOrSpeaker.toLowerCase().includes(q) ||
      s.reference.toLowerCase().includes(q) ||
      s.keyKeywords.some((k) => k.toLowerCase().includes(q)) ||
      s.summary.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleNavigateUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let url = urlInput.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }
    const newHistory = [...history.slice(0, historyIndex + 1), url];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setBrowserUrl(url);
    setUrlInput(url);
    setIsIframeLoading(true);
    setIframeError(false);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const prev = historyIndex - 1;
      setHistoryIndex(prev);
      setBrowserUrl(history[prev]);
      setUrlInput(history[prev]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const next = historyIndex + 1;
      setHistoryIndex(next);
      setBrowserUrl(history[next]);
      setUrlInput(history[next]);
    }
  };

  const handleReload = () => {
    setIsIframeLoading(true);
    setIframeError(false);
    const curr = browserUrl;
    setBrowserUrl("");
    setTimeout(() => {
      setBrowserUrl(curr);
      setIsIframeLoading(false);
    }, 400);
  };

  const safeCopy = async (text: string): Promise<boolean> => {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {}
    }
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  };

  const handleCopySource = async () => {
    const ok = await safeCopy(currentSource.fullTextContent);
    if (ok) {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  const handleCopyPrompt = async (prompt: string, idx: number) => {
    const ok = await safeCopy(prompt);
    if (ok) {
      setCopiedPromptIndex(idx);
      setTimeout(() => setCopiedPromptIndex(null), 2000);
    }
  };

  const handleInsert = (text: string) => {
    if (onInsertIntoEssay) {
      onInsertIntoEssay(text);
      setInsertedFeedback(true);
      setTimeout(() => setInsertedFeedback(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="In-App NotebookLM Companion & Research Browser"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 select-none"
    >
      <div className="w-full max-w-6xl h-[92vh] flex flex-col rounded-3xl border border-amber-400/40 bg-gradient-to-b from-[#0e0904] via-[#090603] to-[#040201] text-slate-100 shadow-[0_0_80px_rgba(245,158,11,0.25)] overflow-hidden">
        
        {/* Top Browser & Companion Bar (Mac-Style Window Chrome) */}
        <header className="px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.03] shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 font-mono">
                  <span>In-App Research Console</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    Self-Contained
                  </span>
                </h3>
              </div>
            </div>
          </div>

          {/* Console Mode Switcher: Source Vault vs Web Frame */}
          <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab("vault")}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "vault"
                  ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>NotebookLM Vault &amp; Audio</span>
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "web"
                  ? "bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>In-App Web View</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Close In-App Browser"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Browser Navigation Toolbar (Visible in both or Web mode) */}
        <div className="px-4 py-2 border-b border-white/10 flex items-center gap-2 bg-black/40 shrink-0">
          <button
            onClick={handleBack}
            disabled={historyIndex <= 0}
            className={`p-1.5 rounded-lg border border-white/10 ${
              historyIndex > 0 ? "hover:bg-white/10 text-slate-200" : "opacity-30 text-slate-600"
            }`}
            title="Back"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleForward}
            disabled={historyIndex >= history.length - 1}
            className={`p-1.5 rounded-lg border border-white/10 ${
              historyIndex < history.length - 1 ? "hover:bg-white/10 text-slate-200" : "opacity-30 text-slate-600"
            }`}
            title="Forward"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleReload}
            className="p-1.5 rounded-lg border border-white/10 hover:bg-white/10 text-slate-200"
            title="Reload"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Omnibox / URL Bar */}
          <form onSubmit={handleNavigateUrl} className="flex-1 flex items-center min-w-0">
            <div className="w-full flex items-center bg-black/70 border border-white/15 focus-within:border-amber-400/50 rounded-xl px-3 py-1.5 text-xs text-slate-200 font-mono transition-all">
              <span className="text-amber-400 mr-2">🔒</span>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter URL or open in-app study document..."
                className="bg-transparent border-0 outline-none w-full text-xs text-amber-100 placeholder:text-slate-500 font-mono"
              />
              <button
                type="submit"
                className="text-[11px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-slate-300 ml-2"
              >
                Go
              </button>
            </div>
          </form>

          {/* Quick Shortcuts: NotebookLM and Google Search */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => {
                setActiveTab("vault");
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 cursor-pointer"
            >
              Vault
            </button>
            <button
              onClick={() => {
                setUrlInput("https://notebooklm.google.com/");
                setBrowserUrl("https://notebooklm.google.com/");
                setActiveTab("web");
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 cursor-pointer"
            >
              NotebookLM
            </button>
          </div>
        </div>

        {/* Tab 1: In-App Source Vault & NotebookLM Companion */}
        {activeTab === "vault" && (
          <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden">
            {/* Left Column: Source Selection List */}
            <aside className="w-full md:w-80 lg:w-96 border-r border-white/10 p-3 flex flex-col gap-3 bg-black/40 overflow-hidden shrink-0">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={sourceSearch}
                  onChange={(e) => setSourceSearch(e.target.value)}
                  placeholder="Filter sources &amp; quotes..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-400/50"
                />
              </div>

              {/* Source List */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredSources.map((src) => {
                  const isSelected = src.id === selectedSourceId;
                  return (
                    <button
                      key={src.id}
                      onClick={() => setSelectedSourceId(src.id)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                        isSelected
                          ? "bg-amber-500/20 border-amber-400/60 shadow-[0_0_16px_rgba(245,158,11,0.2)]"
                          : "bg-black/30 border-white/5 hover:border-white/15 hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-bold">
                          {src.category}
                        </span>
                        <span className="text-[10px] font-mono text-amber-300/80">
                          {src.reference}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white line-clamp-2">
                        {src.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        {src.summary}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {src.keyKeywords.slice(0, 3).map((kw, kIdx) => (
                          <span
                            key={kIdx}
                            className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* In-App Source Summary Footnote */}
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-[11px] text-amber-200/90 leading-snug">
                💡 <strong>Exam Pro-Tip:</strong> Copy any passage or prompt directly into your writing canvas below without leaving this window.
              </div>
            </aside>

            {/* Right Column: Active Source Deep Dive View */}
            <main className="flex-1 min-h-0 flex flex-col p-4 sm:p-6 overflow-y-auto space-y-5 custom-scrollbar">
              {/* Header Card */}
              <div className="p-5 rounded-3xl bg-slate-950/70 border border-white/10 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    {currentSource.category} • {currentSource.reference}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopySource}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-all border border-white/10"
                      title="Copy complete source text"
                    >
                      {copiedText ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-amber-300" />
                          <span>Copy Source</span>
                        </>
                      )}
                    </button>

                    {onInsertIntoEssay && (
                      <button
                        onClick={() => handleInsert(currentSource.fullTextContent)}
                        className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all"
                        title="Append source into your active continuous essay canvas"
                      >
                        <ListPlus className="w-3.5 h-3.5" />
                        <span>{insertedFeedback ? "Inserted!" : "Insert to Canvas"}</span>
                      </button>
                    )}
                  </div>
                </div>

                <h2 className="text-lg sm:text-2xl font-bold text-white font-display">
                  {currentSource.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentSource.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentSource.keyKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-amber-200 border border-white/10"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Synthetic Audio Overview & Podcast Simulation */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-rose-500/10 border border-amber-400/30 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/25 border border-amber-400/40 text-amber-300 flex items-center justify-center">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                        <span>{currentSource.audioDeepDiveOverview.title}</span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
                          {currentSource.audioDeepDiveOverview.duration}
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {currentSource.audioDeepDiveOverview.hostsSummary}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (!isPlayingAudio && audioProgress >= 100) {
                        setAudioProgress(0);
                      }
                      setIsPlayingAudio(!isPlayingAudio);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-rose-400" />
                        <span>Pause Overview</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{audioProgress > 0 && audioProgress < 100 ? "Resume Briefing" : "Play Briefing"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated Audio Progress Bar */}
                <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 via-purple-400 to-rose-400 transition-all duration-300"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>

                {/* Debate Points */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                  {currentSource.audioDeepDiveOverview.keyDebatePoints.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-1"
                    >
                      <span className="font-mono text-[10px] text-amber-300 font-bold block">
                        Core Takeaway 0{pIdx + 1}
                      </span>
                      <p className="text-xs text-slate-200 leading-snug">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Primary Text Excerpt */}
              <div className="p-5 rounded-3xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Curated Primary Text &amp; Critical Commentary</span>
                  </h4>
                  <button
                    onClick={handleCopySource}
                    className="text-[11px] font-mono text-slate-400 hover:text-white"
                  >
                    Copy Clean Text
                  </button>
                </div>
                <pre className="font-serif text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap selection:bg-amber-500/30 p-3 rounded-2xl bg-black/40 border border-white/5">
                  {currentSource.fullTextContent}
                </pre>
              </div>

              {/* NotebookLM High-Yield Prompt Vault */}
              <div className="p-5 rounded-3xl bg-slate-950/70 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-purple-300 font-bold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Curated NotebookLM High-Yield Prompt Vault</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    Click any prompt to copy
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {currentSource.notebookLmPrompts.map((prompt, prIdx) => {
                    const isCopied = copiedPromptIndex === prIdx;
                    return (
                      <div
                        key={prIdx}
                        onClick={() => handleCopyPrompt(prompt, prIdx)}
                        className={`p-3.5 rounded-2xl border text-xs leading-relaxed transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isCopied
                            ? "bg-emerald-500/20 border-emerald-400/50 text-emerald-200"
                            : "bg-black/40 hover:bg-white/[0.06] border-white/10 text-slate-200"
                        }`}
                        title="Click to copy prompt"
                      >
                        <span className="italic font-serif">&ldquo;{prompt}&rdquo;</span>
                        <div className="flex items-center gap-2 shrink-0">
                          {onInsertIntoEssay && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleInsert(prompt);
                              }}
                              className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-slate-300 text-[10px] font-mono"
                              title="Insert prompt question into your writing canvas"
                            >
                              + To Canvas
                            </button>
                          )}
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center gap-1">
                            {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            {isCopied ? "Copied!" : "Copy Prompt"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </div>
        )}

        {/* Tab 2: Embedded In-App Web View (with Smart Fallback & Proxy Simulation) */}
        {activeTab === "web" && (
          <div className="flex-1 min-h-0 flex flex-col bg-slate-950 relative overflow-hidden">
            {/* Embedded Iframe Container */}
            <div className="relative w-full h-full flex flex-col">
              <iframe
                src={browserUrl}
                title="In-App Study Web Browser"
                className="w-full h-full border-0 bg-white"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                onLoad={() => setIsIframeLoading(false)}
                onError={() => {
                  setIsIframeLoading(false);
                  setIframeError(true);
                }}
              />

              {/* In-App Security / X-Frame-Options Fallback Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-amber-400 text-base">🛡️</span>
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      In-App Research Protection
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      If external Google / NotebookLM pages restrict cross-origin iframe embedding, use the pre-loaded <strong>NotebookLM Vault</strong> tab for full source text, or click below to open the URL directly in this session.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveTab("vault")}
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold transition-all cursor-pointer shadow-md"
                  >
                    View In-App Vault
                  </button>
                  <button
                    onClick={() => {
                      setUrlInput("https://en.wikipedia.org/wiki/Macbeth");
                      setBrowserUrl("https://en.wikipedia.org/wiki/Macbeth");
                    }}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-mono text-xs cursor-pointer"
                  >
                    Load Wikipedia
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <footer className="px-5 py-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 bg-white/[0.02] shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-amber-300">Macbeth Codex In-App Study System</span>
            <span>•</span>
            <span>All-In-One Native Workstation</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("vault")}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              5 Source Vaults Ready
            </button>
            <span>•</span>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer"
            >
              Return to Macbeth Canvas
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
