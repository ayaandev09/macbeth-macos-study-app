"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  Award,
  BookOpen,
  BookA,
  ArrowRight,
  Sparkles,
  Timer,
  Keyboard,
  PanelLeft,
  Compass,
  Globe,
} from "lucide-react";
import { KeyboardShortcutsModal } from "./KeyboardShortcutsModal";

const VIEW_MODES: {
  id: ViewMode;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "home",
    label: "Home",
    shortLabel: "Home",
    icon: <Compass className="w-3.5 h-3.5" />,
  },
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
    id: "paper2",
    label: "IB Paper 2 Studio",
    shortLabel: "Paper 2 Studio",
    icon: <Award className="w-3.5 h-3.5" />,
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
    openInAppBrowser,
    toggleInAppBrowser,
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
          setViewMode("paper2");
        } else if (e.key === "5") {
          e.preventDefault();
          setViewMode("matrix");
        } else if (e.key === "6") {
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
      <header data-tour="command-bar" className="liquid-glass-long-bar !rounded-3xl overflow-hidden p-2.5 sm:p-3 mb-3 flex flex-col gap-2 shadow-xl relative mac-drag-region transition-all z-20 w-full max-w-full">
      {/* Top Segment: Brand & Status (Left: Flexible, shrinks cleanly) & Compact Action Cluster (Right: ~280px total) */}
      <div className="flex items-center justify-between gap-2 w-full pb-2 border-b border-white/10 min-h-[42px] max-w-full overflow-hidden">
        {/* Brand & Breadcrumbs (Left) */}
        <div className="flex items-center gap-2 min-w-0 shrink mac-no-drag">
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
            className="flex items-center gap-2 min-w-0 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400/25 via-rose-500/20 to-amber-600/25 border border-amber-400/40 flex items-center justify-center p-1 shadow-md relative shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
              <MacbethAppLogo className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 leading-tight">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.18em] text-amber-400 uppercase block truncate">
                DUNSINANE // 1606
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center gap-1 truncate">
                <span>Macbeth Codex</span>
                <span className="text-slate-500">/</span>
                <span className="text-amber-300 font-mono text-xs font-bold">
                  {currentChapter.displayCode}
                </span>
              </span>
            </div>
          </button>
        </div>

        {/* Right Section: Compact Ergonomic Modality Switchers & Action Pills */}
        <div className="flex items-center justify-end gap-1.5 shrink-0 mac-no-drag">
          {/* Quick Spotlight Trigger Button */}
          <button
            onClick={openSpotlight}
            title="Search Scenes & Quotes (⌘K)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/50 hover:bg-black/70 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-white cursor-pointer transition-all shrink-0"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-medium text-slate-300 hidden md:inline">Search</span>
            <kbd className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-400/25">
              ⌘K
            </kbd>
          </button>

          {/* In-App Research Browser & NotebookLM Vault Button */}
          <button
            onClick={() => openInAppBrowser()}
            title="Open In-App Study Companion & NotebookLM Browser"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/35 hover:border-sky-300 text-sky-200 hover:text-white cursor-pointer transition-all shrink-0 shadow-sm"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-medium hidden lg:inline">Research</span>
          </button>

          {/* Study Goal Switcher: Revision vs Study (Compact Segmented Pill) */}
          <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-white/12 text-xs shrink-0">
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
              <span className="text-xs">Revise</span>
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
              <span className="text-xs">Study</span>
            </button>
          </div>

          {/* Timed Exam Sprint Button */}
          <button
            onClick={openExamSprint}
            title="Launch Timed Exam Sprint (⌘E)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border bg-amber-500/15 text-amber-200 border-amber-400/35 hover:bg-amber-500/25 shadow-sm soft-button shrink-0"
          >
            <Timer className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="text-xs font-mono font-bold text-amber-300">⌘E</span>
          </button>

          {/* Pro Analytical Inspector Toggle Pill (Shown only when tucked away to prevent collision) */}
          {!isInspectorOpen && (
            <button
              onClick={toggleInspector}
              title="Open Analytical Inspector (⌘I)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border soft-button shrink-0 bg-amber-500/15 text-amber-200 hover:text-white border-amber-400/50 hover:border-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.35)] tucked-pill-beacon"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-mono font-bold text-amber-300">⌘I</span>
            </button>
          )}

          {/* Native Shortcuts Cheatsheet Guide (?) */}
          <button
            onClick={() => setIsShortcutsOpen((prev) => !prev)}
            title="Keyboard Shortcuts Cheatsheet (?)"
            className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold transition-all cursor-pointer border bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10 shadow-sm soft-button shrink-0"
          >
            <span className="text-xs font-mono font-bold text-slate-300">?</span>
          </button>
        </div>
      </div>

      {/* Row 2: Symmetrical 6-Column Navigation Grid - 100% Adaptive to Any Mac Screen */}
      <nav
        data-tour="nav-tabs"
        aria-label="Integrated Main Sections Bar"
        className="w-full grid grid-cols-4 sm:grid-cols-7 gap-1 p-1 bg-black/60 border border-white/12 rounded-2xl shadow-inner relative max-w-full overflow-hidden"
      >
        {VIEW_MODES.map((mode) => {
          const isActive = viewMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              className={`relative col-span-1 flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-1 rounded-xl text-xs font-bold transition-colors cursor-pointer min-w-0 overflow-hidden ${
                isActive
                  ? "text-amber-200"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavTabIndicator"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-xl bg-amber-500/25 border border-amber-400/50 shadow-md shadow-amber-500/20 pointer-events-none"
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-amber-300 shrink-0" : "text-slate-400 shrink-0"}`}>
                {mode.icon}
              </span>
              <span className="relative z-10 text-xs truncate">{mode.shortLabel}</span>
            </button>
          );
        })}
      </nav>

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
