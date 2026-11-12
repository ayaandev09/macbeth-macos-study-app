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

  const sectionLabel = VIEW_MODES.find((m) => m.id === viewMode)?.label ?? "Home";

  const glassBtn =
    "flex items-center gap-1.5 h-9 px-3 rounded-full text-xs font-medium cursor-pointer transition-colors bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 text-slate-200 hover:text-white shrink-0";

  return (
    <>
      <header
        data-tour="command-bar"
        className="liquid-glass-bar relative z-20 w-full max-w-full rounded-full px-2.5 py-2 mb-3 flex items-center justify-between gap-2 mac-drag-region"
      >
        <div className="flex items-center gap-2 min-w-0 mac-no-drag">
          <button
            onClick={toggleSidebar}
            title="Toggle sidebar (⌘B)"
            aria-label="Toggle sidebar"
            className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border transition-colors shrink-0 ${
              sidebarCollapsed
                ? "bg-amber-500/25 border-amber-300/50 text-amber-200"
                : "bg-white/[0.07] hover:bg-white/[0.14] border-white/15 text-slate-300"
            }`}
          >
            <PanelLeft className="w-4 h-4" />
          </button>
          <div className="min-w-0 pl-1">
            <p className="text-sm font-semibold text-white truncate leading-tight">{sectionLabel}</p>
            {(viewMode === "focus" || viewMode === "stream") && (
              <p className="text-[11px] text-amber-200/80 truncate leading-tight">{currentChapter.displayCode}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mac-no-drag">
          <button onClick={openSpotlight} title="Search (⌘K)" className={glassBtn}>
            <Search className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden md:inline text-slate-300">Search</span>
            <kbd className="hidden md:inline text-[10px] font-mono text-slate-400">⌘K</kbd>
          </button>

          <div className="hidden sm:flex items-center p-0.5 rounded-full bg-black/30 border border-white/15 h-9 shrink-0">
            {(["learn", "revise"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setStudyGoal(g)}
                title={g === "revise" ? "Quick recall and exam traps" : "Guided first-time study"}
                className={`px-3 h-full rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  studyGoal === g
                    ? g === "revise"
                      ? "bg-amber-500/30 text-amber-100"
                      : "bg-emerald-500/30 text-emerald-100"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {g === "revise" ? "Revise" : "Study"}
              </button>
            ))}
          </div>

          <button onClick={() => openInAppBrowser()} title="Research and NotebookLM" className={glassBtn}>
            <Globe className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden lg:inline">Research</span>
          </button>

          <button onClick={openExamSprint} title="Timed exam sprint (⌘E)" className={glassBtn}>
            <Timer className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden lg:inline">Sprint</span>
          </button>

          {!isInspectorOpen && (
            <button onClick={toggleInspector} title="Analysis panel (⌘I)" className={glassBtn}>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden lg:inline">Analysis</span>
            </button>
          )}

          <button
            onClick={() => setIsShortcutsOpen((prev) => !prev)}
            title="Keyboard shortcuts (?)"
            aria-label="Keyboard shortcuts"
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border bg-white/[0.07] hover:bg-white/[0.14] border-white/15 text-slate-300 text-xs font-mono shrink-0"
          >
            ?
          </button>
        </div>
      </header>

      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        appName="Macbeth First Folio Codex"
        accentColor="#d97706"
        onOpenTour={onOpenWalkthrough}
      />
    </>
  );
}
