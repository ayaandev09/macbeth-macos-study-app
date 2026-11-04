"use client";

import React, { useState, useEffect, useRef } from "react";
import { useStudyStore, ViewMode, AcademicStyle } from "@/store/useStudyStore";
import { ALL_CHAPTERS } from "@/data";
import { ChromaticButton } from "./chromatic-button";
import {
  LayoutGrid,
  Layers,
  Network,
  Library,
  Search,
  Zap,
  X,
  ListFilter,
  Crown,
  GraduationCap,
  BookOpen,
  BookA,
  Award,
  Flame,
  ArrowRight,
} from "lucide-react";

const VIEW_MODES: {
  id: ViewMode;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "focus",
    label: "Scene Bento",
    shortLabel: "Bento",
    icon: <LayoutGrid className="w-3.5 h-3.5" />,
  },
  {
    id: "stream",
    label: "Continuous Flow",
    shortLabel: "Flow",
    icon: <Layers className="w-3.5 h-3.5" />,
  },
  {
    id: "revision",
    label: "Revision & Cram Hub",
    shortLabel: "Revision Hub",
    icon: <GraduationCap className="w-3.5 h-3.5" />,
  },
  {
    id: "matrix",
    label: "Theme & Quote Matrix",
    shortLabel: "Theme Matrix",
    icon: <Network className="w-3.5 h-3.5" />,
  },
  {
    id: "lexicon",
    label: "Symbols & Dramatis Personae",
    shortLabel: "Lexicon",
    icon: <Library className="w-3.5 h-3.5" />,
  },
];

export function TopCommandBar() {
  const {
    viewMode,
    setViewMode,
    studyGoal,
    setStudyGoal,
    academicStyle,
    setAcademicStyle,
    searchQuery,
    setSearchQuery,
    completedChapters,
    setChapterSheetOpen,
    setDiagnosticsModalOpen,
    setActiveChapter,
  } = useStudyStore();

  const completedCount = Object.values(completedChapters || {}).filter(Boolean).length;
  const masteryPercentage = ALL_CHAPTERS.length > 0
    ? Math.round((completedCount / ALL_CHAPTERS.length) * 100)
    : 0;
  const activeStreak = 5;

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const matchingResults: { id: string; displayCode: string; title: string; snippet: string }[] = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return ALL_CHAPTERS.filter((ch) => {
      return (
        ch.title.toLowerCase().includes(q) ||
        (ch.subtitle && ch.subtitle.toLowerCase().includes(q)) ||
        ch.displayCode.toLowerCase().includes(q) ||
        (ch.summary && ch.summary.toLowerCase().includes(q)) ||
        ch.quotes?.some((item) => item.quote.toLowerCase().includes(q) || item.speaker.toLowerCase().includes(q)) ||
        ch.subSections?.some((s) => s.title.toLowerCase().includes(q) || (s.content && s.content.toLowerCase().includes(q)))
      );
    }).map((ch) => ({
      id: ch.id,
      displayCode: ch.displayCode,
      title: ch.title,
      snippet: ch.briefing?.mustKnowQuote?.quote || ch.summary || "",
    }));
  }, [searchQuery]);

  const selectSearchResult = (chapterId: string) => {
    setActiveChapter(chapterId);
    setViewMode("focus");
    setIsSearchFocused(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // MacBook Air M1 Native Keyboard Accelerators (⌘K, Escape, 1-5 View Switching)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (e.key === "Escape") {
        if (
          searchInputRef.current &&
          document.activeElement === searchInputRef.current
        ) {
          searchInputRef.current.blur();
          setSearchQuery("");
        }
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (e.key === "/" && !isInput) {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (!isInput && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key === "1") {
          e.preventDefault();
          setViewMode("focus");
        } else if (e.key === "2") {
          e.preventDefault();
          setViewMode("stream");
        } else if (e.key === "3") {
          e.preventDefault();
          setViewMode("revision");
        } else if (e.key === "4") {
          e.preventDefault();
          setViewMode("matrix");
        } else if (e.key === "5") {
          e.preventDefault();
          setViewMode("lexicon");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setViewMode, setSearchQuery]);

  return (
    <>
      <header className="liquid-glass-long-bar !rounded-3xl overflow-hidden p-3 sm:p-4 mb-4 flex flex-col gap-3 z-20 shadow-2xl relative">
      {/* Top Segment: Brand (Left) & Controls/Actions (Right) */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full">
        {/* Brand & Live Diagnostics Status Pill */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-2">
            <ChromaticButton
              onClick={() => setDiagnosticsModalOpen(true)}
              title="Click to run live Scottish Crown & Folio System Diagnostics"
              color="#d97706"
              colorMode="spectrum"
              speed={0.7}
              hoverEffect="brighten"
              className="chromatic-icon !rounded-2xl border border-amber-400/40 relative shadow-lg overflow-hidden p-1.5"
            >
              <img src="/logo.svg" alt="Dunsinane Crown Logo" className="w-5 h-5 object-contain" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping pointer-events-none" />
            </ChromaticButton>
            <div className="leading-tight">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase block">
                DUNSINANE // 1606
              </span>
              <span className="text-xs font-semibold text-white tracking-tight">
                Macbeth Codex
              </span>
            </div>
          </div>

          {/* Polished Academic Status Badge: Overall Syllabus Mastery & Active Streak */}
          <button
            type="button"
            onClick={() => setDiagnosticsModalOpen(true)}
            title={`Syllabus Mastery: ${masteryPercentage}% (${completedCount}/${ALL_CHAPTERS.length} Scenes) • Active Study Streak: ${activeStreak} Days`}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono shadow-md backdrop-blur-md hover:bg-emerald-900/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-bold text-emerald-300">{masteryPercentage}%</span>
              <span className="text-[9px] uppercase tracking-wider text-emerald-400/70 font-semibold hidden sm:inline">Mastery</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
            <div className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20 animate-pulse" />
              <span className="font-bold text-amber-300">{activeStreak}d</span>
              <span className="text-[9px] uppercase tracking-wider text-amber-400/70 font-semibold hidden sm:inline">Streak</span>
            </div>
          </button>
        </div>

        {/* Right Section: Modality Switchers & Action Pills */}
        <div className="flex flex-wrap items-center justify-end gap-2 shrink-0">
          {/* Study Goal Switcher: Revision vs Study */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-black/50 border border-white/12 text-xs">
            {studyGoal === "revise" ? (
              <ChromaticButton
                onClick={() => setStudyGoal("revise")}
                title="Pre-lesson cramming, exam traps & active recall"
                color="#d97706"
                colorMode="spectrum"
                speed={0.7}
                hoverEffect="brighten"
                className="chromatic-pill !px-3 !py-1.5 text-xs font-bold whitespace-nowrap shadow-md"
              >
                <Zap className="w-3.5 h-3.5 text-amber-200 mr-1" />
                <span>Revision</span>
              </ChromaticButton>
            ) : (
              <button
                onClick={() => setStudyGoal("revise")}
                title="Pre-lesson cramming, exam traps & active recall"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-400 hover:text-slate-200 transition-all cursor-pointer whitespace-nowrap"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>Revision</span>
              </button>
            )}

            {studyGoal === "learn" ? (
              <ChromaticButton
                onClick={() => setStudyGoal("learn")}
                title="First-time guided study with context"
                color="#00802f"
                colorMode="spectrum"
                speed={0.7}
                hoverEffect="brighten"
                className="chromatic-pill !px-3 !py-1.5 text-xs font-bold whitespace-nowrap shadow-md"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-200 mr-1" />
                <span>Study</span>
              </ChromaticButton>
            ) : (
              <button
                onClick={() => setStudyGoal("learn")}
                title="First-time guided study with context"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-400 hover:text-slate-200 transition-all cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
                <span>Study</span>
              </button>
            )}
          </div>

          {/* Academic & Professional Typography Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-black/50 border border-white/12 text-xs">
            <span className="pl-2.5 text-slate-400 flex items-center gap-1 text-[11px] font-bold">
              <BookA className="w-3.5 h-3.5 text-amber-400" />
            </span>
            <select
              value={academicStyle}
              onChange={(e) => setAcademicStyle(e.target.value as AcademicStyle)}
              title="Academic & Professional Typography Selection"
              className="bg-transparent text-xs font-bold text-amber-200 border-none rounded-full px-2.5 py-1 focus:outline-none cursor-pointer"
            >
              <option value="newsreader" className="bg-slate-900 text-white">
                🎓 Oxford Newsreader
              </option>
              <option value="garamond" className="bg-slate-900 text-white">
                🏛️ Classical Garamond
              </option>
              <option value="jakarta" className="bg-slate-900 text-white">
                🔬 Modern Jakarta Pro
              </option>
              <option value="cinzel" className="bg-slate-900 text-white">
                👑 Regal Cinzel
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Row 2: Dedicated Full-Width Navigation Track - Perfectly Sized Pills with Zero Clipping */}
      <nav
        aria-label="Integrated Main Sections Bar"
        className="w-full rounded-2xl p-1.5 bg-black/55 border border-white/12 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar shadow-inner"
      >
        {VIEW_MODES.map((mode) => {
          const isActive = viewMode === mode.id;
          return isActive ? (
            <ChromaticButton
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              color="#d97706"
              colorMode="spectrum"
              speed={0.7}
              hoverEffect="brighten"
              className="chromatic-compact !px-3.5 !py-1.5 rounded-xl text-xs font-bold text-white shrink-0 whitespace-nowrap shadow-lg shadow-amber-500/25 border border-amber-300/60"
            >
              <span className="text-amber-200 mr-1.5">{mode.icon}</span>
              <span className="hidden sm:inline">{mode.label}</span>
              <span className="inline sm:hidden">{mode.shortLabel}</span>
            </ChromaticButton>
          ) : (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:brightness-110 active:scale-[0.96] transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span className="text-slate-400">{mode.icon}</span>
              <span className="hidden sm:inline">{mode.label}</span>
              <span className="inline sm:hidden">{mode.shortLabel}</span>
            </button>
          );
        })}
      </nav>

      {/* Row 3: Full-Width Search Bar with Mac ⌘K Shortcut & Instant Spotlight Results */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => {
            setTimeout(() => setIsSearchFocused(false), 200);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && matchingResults.length > 0) {
              e.preventDefault();
              selectSearchResult(matchingResults[0].id);
            }
          }}
          placeholder="Search 31 Macbeth scenes, quotes, symbols (e.g. 'dagger', 'unsex me here', 'Banquo', 'Birnam Wood', 'equivocator')..."
          className="w-full pl-10 pr-14 py-2 rounded-2xl text-xs text-white placeholder-slate-400 bg-black/45 border border-white/10 focus:outline-none focus:border-amber-400/60 focus:bg-black/60 transition-all font-sans shadow-inner"
        />
        {!searchQuery ? (
          <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg text-[10px] font-mono text-slate-400 bg-white/10 border border-white/10 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <kbd className="font-sans text-[11px]">⌘</kbd>K
          </span>
        ) : (
          <button
            onClick={() => {
              setSearchQuery("");
              setIsSearchFocused(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Instant Interactive Search Results Dropdown */}
        {searchQuery.trim().length > 0 && isSearchFocused && (
          <div
            className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl p-3 border border-amber-500/30 shadow-2xl backdrop-blur-2xl max-h-[380px] overflow-y-auto no-scrollbar"
            style={{
              backgroundColor: "rgba(18, 10, 5, 0.95)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-white/10 text-[11px] font-mono">
              <span className="text-slate-400">
                Found <strong className="text-amber-300">{matchingResults.length}</strong> scenes for &quot;{searchQuery}&quot;
              </span>
              <span className="text-slate-500 text-[10px]">Press Enter or click to inspect</span>
            </div>

            {matchingResults.length > 0 ? (
              <div className="space-y-1">
                {matchingResults.slice(0, 8).map((item) => (
                  <button
                    key={item.id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      selectSearchResult(item.id);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 active:bg-white/15 transition-all flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                          {item.displayCode}
                        </span>
                        <span className="text-xs font-semibold text-white truncate group-hover:text-amber-200 transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5 font-sans">
                        {item.snippet}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300 shrink-0 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-slate-400 font-mono">
                No scenes matched &quot;{searchQuery}&quot;. Try terms like &apos;dagger&apos;, &apos;Banquo&apos;, &apos;Duncan&apos;, or &apos;Dunsinane&apos;.
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  </>
  );
}
