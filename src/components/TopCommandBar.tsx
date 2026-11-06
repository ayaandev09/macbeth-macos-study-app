"use client";

import React, { useState, useEffect, useRef } from "react";
import { useStudyStore, ViewMode, AcademicStyle } from "@/store/useStudyStore";
import { ALL_CHAPTERS } from "@/data";
import { ChromaticButton } from "./chromatic-button";
import { MacbethAppLogo } from "./MacbethAppLogo";
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
  ArrowRight,
  Sparkles,
  Timer,
  Keyboard,
  PanelLeft,
  Compass,
} from "lucide-react";
import { KeyboardShortcutsModal } from "./KeyboardShortcutsModal";

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

interface TopCommandBarProps {
  onOpenWalkthrough?: () => void;
}

export function TopCommandBar({ onOpenWalkthrough }: TopCommandBarProps = {}) {
  const {
    activeChapterId,
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
    isInspectorOpen,
    toggleInspector,
    openExamSprint,
    isSpotlightOpen,
    openSpotlight,
    closeSpotlight,
    toggleSpotlight,
    triggerStartupIntro,
    sidebarCollapsed,
    toggleSidebar,
  } = useStudyStore();

  const completedCount = Object.values(completedChapters || {}).filter(Boolean).length;
  const masteryPercentage = ALL_CHAPTERS.length > 0
    ? Math.round((completedCount / ALL_CHAPTERS.length) * 100)
    : 0;
  const activeStreak = 5;

  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const currentChapter = ALL_CHAPTERS.find((c) => c.id === activeChapterId) || ALL_CHAPTERS[0];

  // MacBook Air M1 Native Keyboard Accelerators (⌘K, ⌘B, Escape, 1-5 View Switching)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleSpotlight();
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        toggleSidebar();
        return;
      }

      if (e.key === "/" && !isInput && !isSpotlightOpen) {
        e.preventDefault();
        openSpotlight();
        return;
      }

      if ((e.key === "?" || (e.shiftKey && e.key === "/")) && !isInput && !isSpotlightOpen) {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
        return;
      }

      if (!isInput && !e.metaKey && !e.ctrlKey && !e.altKey && !isSpotlightOpen) {
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
  }, [setViewMode, toggleSpotlight, openSpotlight, isSpotlightOpen]);

  return (
    <>
      <header className="liquid-card-flagship !rounded-3xl p-3 sm:p-4 mb-5 flex flex-col gap-3 shadow-2xl relative mac-drag-region transition-all z-20">
      {/* Top Segment: Brand & Status (Left) & Compact Ergonomic Action Cluster (Right) */}
      <div className="flex items-center justify-between gap-3 w-full pb-2.5 border-b border-white/10 min-h-[44px]">
        {/* Brand & Breadcrumbs (Left) */}
        <div className="flex items-center gap-2 shrink-0 mac-no-drag">
          {/* Native macOS Sidebar Toggle (⌘B) */}
          <button
            onClick={toggleSidebar}
            title={sidebarCollapsed ? "Expand Scene Navigation Sidebar (⌘B)" : "Collapse Sidebar for Wide View (⌘B)"}
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer soft-button shrink-0 border ${
              sidebarCollapsed
                ? "bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-sm"
                : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10"
            }`}
          >
            <PanelLeft className="w-4 h-4" />
          </button>

          {/* Brand Logo & Title */}
          <button
            onClick={() => triggerStartupIntro()}
            title="Click to replay Scottish Crown Cinematic Startup Intro"
            className="flex items-center gap-2 min-w-0 text-left cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400/25 via-rose-500/20 to-amber-600/25 border border-amber-400/40 flex items-center justify-center p-1 shadow-md relative shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
              <MacbethAppLogo className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 leading-tight">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase block truncate">
                DUNSINANE // 1606
              </span>
              <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1 truncate">
                <span>Macbeth Codex</span>
                <span className="text-slate-500">/</span>
                <span className="text-amber-300 font-mono text-[11px] font-bold">
                  {currentChapter.displayCode}
                </span>
              </span>
            </div>
          </button>
        </div>

        {/* Right Section: Compact Ergonomic Modality Switchers & Action Pills */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 shrink-0 mac-no-drag">
          {/* Study Goal Switcher: Revision vs Study (Compact Segmented Pill) */}
          <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-white/12 text-xs">
            <button
              onClick={() => setStudyGoal("revise")}
              title="Pre-lesson cramming, exam traps & active recall"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                studyGoal === "revise"
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-3 h-3 text-amber-300" />
              <span className="hidden lg:inline text-[11px]">Revise</span>
            </button>
            <button
              onClick={() => setStudyGoal("learn")}
              title="First-time guided study with context"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                studyGoal === "learn"
                  ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="w-3 h-3 text-emerald-300" />
              <span className="hidden lg:inline text-[11px]">Study</span>
            </button>
          </div>

          {/* Academic Typography Switcher (Compact Dropdown) */}
          <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-white/12 text-xs">
            <span className="pl-2 text-slate-400 flex items-center">
              <BookA className="w-3 h-3 text-amber-400" />
            </span>
            <select
              value={academicStyle}
              onChange={(e) => setAcademicStyle(e.target.value as AcademicStyle)}
              title="Academic Typography Selection"
              className="bg-transparent text-[11px] font-bold text-amber-200 border-none rounded-full px-2 py-1 focus:outline-none cursor-pointer"
            >
              <option value="newsreader" className="bg-slate-900 text-white">
                🎓 Newsreader
              </option>
              <option value="garamond" className="bg-slate-900 text-white">
                🏛️ Garamond
              </option>
              <option value="jakarta" className="bg-slate-900 text-white">
                🔬 Jakarta
              </option>
              <option value="cinzel" className="bg-slate-900 text-white">
                👑 Cinzel
              </option>
            </select>
          </div>

          {/* Timed Exam Sprint Button */}
          <button
            onClick={openExamSprint}
            title="Launch Timed Exam Sprint (⌘E)"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border bg-amber-500/15 text-amber-200 border-amber-400/35 hover:bg-amber-500/25 shadow-sm soft-button shrink-0"
          >
            <Timer className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="hidden xl:inline text-[11px]">Sprint</span>
            <span className="text-[10px] font-mono text-amber-400/70">⌘E</span>
          </button>

          {/* Pro Analytical Inspector Toggle Pill (Shown only when tucked away to prevent collision) */}
          {!isInspectorOpen && (
            <button
              onClick={toggleInspector}
              title="Open Analytical Inspector (Tucked in Top Bar · ⌘I)"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border soft-button relative group shrink-0 bg-amber-500/15 text-amber-200 hover:text-white border-amber-400/50 hover:border-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.35)] tucked-pill-beacon"
            >
              <div className="relative flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping pointer-events-none" />
              </div>
              <span className="hidden sm:inline text-[11px]">Inspector</span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-500/25 px-1.5 py-0.2 rounded-full border border-amber-400/40">
                Tucked
              </span>
              <span className="text-[10px] font-mono text-amber-400/80 bg-amber-500/15 px-1 py-0.2 rounded border border-amber-400/25">
                ⌘I
              </span>
            </button>
          )}

          {/* Interactive App Tour / Walkthrough */}
          {onOpenWalkthrough && (
            <button
              onClick={onOpenWalkthrough}
              title="Interactive App Walkthrough & Guide (Tour)"
              className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-400/35 shadow-sm soft-button shrink-0"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden xl:inline text-[11px]">Tour</span>
            </button>
          )}

          {/* Native Shortcuts Cheatsheet Guide (?) */}
          <button
            onClick={() => setIsShortcutsOpen((prev) => !prev)}
            title="Keyboard Shortcuts Cheatsheet (?)"
            className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all cursor-pointer border bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10 shadow-sm soft-button shrink-0"
          >
            <span className="text-xs font-mono font-bold text-slate-300">?</span>
          </button>
        </div>
      </div>

      {/* Row 2: Symmetrical 5-Column Navigation Grid - 100% Adaptive to Any Mac Screen */}
      <nav
        aria-label="Integrated Main Sections Bar"
        className="w-full grid grid-cols-5 gap-1 sm:gap-1.5 p-1 bg-black/60 border border-white/12 rounded-2xl shadow-inner"
      >
        {VIEW_MODES.map((mode) => {
          const isActive = viewMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={`col-span-1 flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer truncate ${
                isActive
                  ? "bg-amber-500/25 text-amber-200 border border-amber-400/50 shadow-md shadow-amber-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className={isActive ? "text-amber-300 shrink-0" : "text-slate-400 shrink-0"}>
                {mode.icon}
              </span>
              <span className="hidden 2xl:inline truncate">{mode.label}</span>
              <span className="inline 2xl:hidden truncate">{mode.shortLabel}</span>
            </button>
          );
        })}
      </nav>

      {/* Row 3: Flagship Spacious Jelly Spotlight Command Pill (Raycast / Spotlight Ergonomics) */}
      <div className="w-full">
        <button
          type="button"
          onClick={openSpotlight}
          className="w-full px-4 py-2.5 rounded-2xl bg-black/55 hover:bg-black/70 border border-white/12 hover:border-amber-400/40 text-left flex items-center justify-between gap-3 shadow-inner transition-all group cursor-pointer soft-button"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-7 h-7 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform shrink-0">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0 truncate">
              <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                Spotlight Search 31 Macbeth scenes, iconic quotes, soliloquies, themes...
              </span>
              <span className="hidden lg:inline text-[11px] text-slate-400 ml-2 font-mono">
                (e.g. &ldquo;dagger&rdquo;, &ldquo;unsex me here&rdquo;, &ldquo;Banquo&rdquo;, &ldquo;I.2&rdquo;)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 group-hover:bg-amber-500/25 transition-all">
              <kbd className="font-sans text-[11px]">⌘</kbd>K
            </span>
          </div>
        </button>
      </div>

      {/* Global Native Keyboard Shortcuts Cheatsheet Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        appName="Macbeth First Folio Codex"
        accentColor="#d97706"
        onOpenTour={onOpenWalkthrough}
      />
    </header>
  </>
  );
}
