"use client";

import React, { useState } from "react";
import { useStudyStore, ViewMode } from "@/store/useStudyStore";
import {
  TOTAL_CHAPTERS_COUNT,
  TOTAL_SUBSECTIONS_COUNT,
  TOTAL_QUOTES_COUNT,
} from "@/data";
import {
  LayoutGrid,
  Rows3,
  Network,
  Library,
  Search,
  Zap,
  X,
  QrCode,
  GraduationCap,
  Activity,
  Crown,
} from "lucide-react";
import { QrCodeModal } from "./QrCodeModal";

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
    icon: <LayoutGrid className="w-4 h-4" />,
  },
  {
    id: "stream",
    label: "Continuous Flow",
    shortLabel: "Flow",
    icon: <Rows3 className="w-4 h-4" />,
  },
  {
    id: "matrix",
    label: "Theme & Quote Matrix",
    shortLabel: "Themes",
    icon: <Network className="w-4 h-4" />,
  },
  {
    id: "lexicon",
    label: "Symbols & Dramatis Personae",
    shortLabel: "Lexicon",
    icon: <Library className="w-4 h-4" />,
  },
  {
    id: "revision",
    label: "Revision & Cram Hub",
    shortLabel: "Cram",
    icon: <GraduationCap className="w-4 h-4" />,
  },
];

export function TopCommandBar() {
  const {
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    speedReadMode,
    toggleSpeedReadMode,
    setDiagnosticsModalOpen,
  } = useStudyStore();

  const [qrModalOpen, setQrModalOpen] = useState(false);

  return (
    <>
      {/* Universal Floating Rounded Long Bar (Apple Liquid Glass & Uniswap DEX Style) */}
      <header className="liquid-glass-longbar rounded-full px-4 py-2.5 mb-6 sticky top-4 z-40 shadow-2xl relative">
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-3">
          {/* Left: Royal Brand Capsule */}
          <div className="flex items-center gap-2.5 shrink-0 self-start 2xl:self-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400/25 via-rose-500/20 to-emerald-500/20 border border-white/20 flex items-center justify-center shadow-inner">
              <Crown className="w-4 h-4 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xs text-amber-200 tracking-wider">
                  DUNSINANE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              </div>
              <span className="font-mono text-[9px] text-slate-400 tracking-wider">
                1606 // ACADEMIC REVISION
              </span>
            </div>
          </div>

          {/* Center: Integrated Rounded Long Bar Section Switcher */}
          <nav
            aria-label="Study dashboard sections"
            className="flex items-center gap-1 p-1 rounded-full bg-slate-950/70 border border-white/12 shadow-inner shrink-0"
          >
            {VIEW_MODES.map((mode) => {
              const active = viewMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "liquid-glass-pill-active text-white font-semibold shadow-lg border border-amber-300/50"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.08]"
                  }`}
                >
                  <span className={active ? "text-amber-300" : "text-slate-400"}>
                    {mode.icon}
                  </span>
                  <span className="hidden lg:inline">{mode.label}</span>
                  <span className="lg:hidden">{mode.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Search + Telemetry + QR Modal + Speed-Read */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 self-end 2xl:self-center">
            {/* Search Capsule */}
            <div className="relative w-40 lg:w-52 xl:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scenes, quotes, motifs..."
                className="w-full pl-8 pr-7 py-1.5 rounded-full bg-slate-950/70 border border-white/12 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Live Diagnostics & Telemetry Modal Trigger */}
            <button
              onClick={() => setDiagnosticsModalOpen(true)}
              title="Open Live Diagnostics & Hardware Telemetry Console"
              className="liquid-glass-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-300 cursor-pointer border border-emerald-400/35 hover:border-emerald-400/60"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400 live-pulse-emerald shrink-0" />
              <span className="hidden xl:inline">120 FPS // DIAGNOSTICS</span>
              <span className="xl:hidden">120 FPS</span>
            </button>

            {/* iPhone 16e QR Code / Link Modal Trigger */}
            <button
              onClick={() => setQrModalOpen(true)}
              title="Open QR Code to view on your iPhone 16e"
              className="liquid-glass-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-200 cursor-pointer hover:border-amber-400/40"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">iPhone 16e</span>
            </button>

            {/* Speed-Read Toggle */}
            <button
              onClick={toggleSpeedReadMode}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                speedReadMode
                  ? "bg-amber-400/20 border border-amber-400/60 text-amber-200 shadow-[0_0_20px_-4px_rgba(251,191,36,0.4)]"
                  : "liquid-glass-pill text-slate-300"
              }`}
            >
              <Zap
                className={`w-3.5 h-3.5 ${
                  speedReadMode
                    ? "text-amber-300 fill-amber-300"
                    : "text-slate-400"
                }`}
              />
              <span className="hidden sm:inline">Speed</span>
              <span
                className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full ${
                  speedReadMode
                    ? "bg-amber-400/30 text-amber-100"
                    : "bg-white/10 text-slate-400"
                }`}
              >
                {speedReadMode ? "ON" : "OFF"}
              </span>
            </button>
          </div>
        </div>

        {/* Ambient Bottom Specular Hairline */}
        <div className="absolute -bottom-[1px] left-8 right-8 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />
      </header>

      {/* QR Code Modal */}
      <QrCodeModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        networkUrl="http://192.168.178.83:3086"
      />
    </>
  );
}
