"use client";

import React from "react";
import { useStudyStore, ViewMode, AcademicStyle } from "@/store/useStudyStore";
import { ALL_CHAPTERS } from "@/data";
import {
  LayoutGrid,
  Layers,
  Network,
  Library,
  Search,
  Zap,
  X,
  Monitor,
  Smartphone,
  ListFilter,
  Crown,
  GraduationCap,
  BookOpen,
  BookA,
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
    deviceMode,
    setDeviceMode,
    studyGoal,
    setStudyGoal,
    academicStyle,
    setAcademicStyle,
    searchQuery,
    setSearchQuery,
    setChapterSheetOpen,
    setDiagnosticsModalOpen,
  } = useStudyStore();

  return (
    <header className="liquid-glass-long-bar p-2 sm:p-2.5 mb-5 flex flex-col gap-2.5 z-20 shadow-2xl relative">
      {/* Top Segment: Brand & Integrated Sections Track */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-2.5 w-full">
        {/* Brand & Live Diagnostics Status Pill */}
        <div className="flex items-center justify-between xl:justify-start gap-2 shrink-0">
          <div className="flex items-center gap-2 pl-2">
            <button
              onClick={() => setDiagnosticsModalOpen(true)}
              title="Click to run live Scottish Crown & Folio System Diagnostics"
              className="relative p-1.5 rounded-full bg-amber-500/20 text-amber-300 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-400/40"
            >
              <Crown className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </button>
            <div className="leading-tight">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase block">
                DUNSINANE // 1606
              </span>
              <span className="text-xs font-semibold text-white tracking-tight hidden sm:inline">
                Macbeth Codex
              </span>
            </div>
          </div>

          {/* Live Heartbeat Pill */}
          <button
            onClick={() => setDiagnosticsModalOpen(true)}
            title="Live Folio Hardware Telemetry Node"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-colors cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>120 FPS // 0.8ms</span>
          </button>
        </div>

        {/* ==================== UNIFIED SECTIONS LONG CAPSULE BAR ==================== */}
        <nav
          aria-label="Integrated Main Sections Bar"
          className="rounded-full p-1 bg-black/50 border border-white/10 flex items-center gap-1 overflow-x-auto no-scrollbar shadow-inner mx-auto xl:mx-0 max-w-full"
        >
          {VIEW_MODES.map((mode) => {
            const isActive = viewMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500/35 via-rose-500/30 to-purple-500/30 text-white border border-amber-300/60 shadow-lg shadow-amber-500/20 scale-[1.02]"
                    : "text-slate-300 hover:text-white hover:bg-white/10 hover:scale-[1.03] active:scale-[0.96]"
                }`}
              >
                <span className={isActive ? "text-amber-300" : "text-slate-400"}>
                  {mode.icon}
                </span>
                <span className="hidden md:inline">{mode.label}</span>
                <span className="inline md:hidden">{mode.shortLabel}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Section: Modality Switchers & Search Toggle */}
        <div className="flex flex-wrap items-center justify-end gap-1.5 shrink-0">
          {/* Study Goal Switcher: Revision vs Study */}
          <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/40 border border-white/10 text-xs">
            <button
              onClick={() => setStudyGoal("revise")}
              title="Pre-lesson cramming, exam traps & active recall"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                studyGoal === "revise"
                  ? "bg-gradient-to-r from-amber-500/35 to-rose-500/35 text-white border border-amber-400/50 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-3 h-3 text-amber-300" />
              <span>Revision</span>
            </button>
            <button
              onClick={() => setStudyGoal("learn")}
              title="First-time guided study with context"
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                studyGoal === "learn"
                  ? "bg-gradient-to-r from-emerald-500/35 to-teal-500/35 text-white border border-emerald-400/50 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BookOpen className="w-3 h-3 text-emerald-300" />
              <span>Study</span>
            </button>
          </div>

          {/* Academic & Professional Typography Switcher */}
          <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/40 border border-white/10 text-xs">
            <span className="pl-2 text-slate-400 flex items-center gap-1 text-[11px] font-bold">
              <BookA className="w-3 h-3 text-amber-400" />
            </span>
            <select
              value={academicStyle}
              onChange={(e) => setAcademicStyle(e.target.value as AcademicStyle)}
              title="Academic & Professional Typography Selection"
              className="bg-transparent text-xs font-bold text-amber-200 border-none rounded-full px-2 py-1 focus:outline-none cursor-pointer"
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

          {/* Device Switcher (Mac vs iPhone 16e) */}
          <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-black/40 border border-white/10 text-xs">
            <button
              onClick={() => setDeviceMode("mac")}
              title="Mac Desktop Layout"
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                deviceMode === "mac"
                  ? "bg-amber-500/30 text-amber-200 border border-amber-400/50 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceMode("iphone16e")}
              title="iPhone 16e Handheld Layout"
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                deviceMode === "iphone16e"
                  ? "bg-rose-500/30 text-rose-200 border border-rose-400/50 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Index Trigger */}
          <button
            onClick={() => setChapterSheetOpen(true)}
            className="lg:hidden p-1.5 rounded-full liquid-glass-pill text-amber-200 active:scale-95 cursor-pointer"
            title="Open Scene Sheet"
          >
            <ListFilter className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>
      </div>

      {/* Integrated Search Bar inside Long Capsule */}
      <div className="relative w-full">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value.trim() && viewMode === "focus") {
              setViewMode("stream");
            }
          }}
          placeholder="Search 31 Macbeth scenes, quotes, symbols (e.g. 'dagger', 'unsex me here', 'Banquo', 'Birnam Wood', 'equivocator')..."
          className="w-full pl-9 pr-8 py-1.5 rounded-full text-xs text-white placeholder-slate-400 bg-black/40 border border-white/10 focus:outline-none focus:border-amber-400/60 focus:bg-black/60 transition-all font-sans"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </header>
  );
}
