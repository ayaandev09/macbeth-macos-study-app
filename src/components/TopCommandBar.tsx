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
      <header className="liquid-glass-bento rounded-3xl p-4 mb-6">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-950/60 border border-white/10">
            {VIEW_MODES.map((mode) => {
              const active = viewMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? "liquid-glass-pill-active text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {mode.icon}
                  <span className="hidden sm:inline">{mode.label}</span>
                  <span className="sm:hidden">{mode.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Search + Phone Link + Speed-Read Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 31 scenes, quotes, symbols, motifs..."
                className="w-full pl-9 pr-8 py-2 rounded-2xl bg-slate-950/65 border border-white/12 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Diagnostics & Telemetry Modal Trigger */}
            <button
              onClick={() => setDiagnosticsModalOpen(true)}
              title="Open Live Diagnostics & Hardware Telemetry Console"
              className="liquid-glass-pill flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-mono font-medium text-emerald-300 cursor-pointer border border-emerald-400/35 hover:border-emerald-400/60"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400 live-pulse-emerald shrink-0" />
              <span>120 FPS // DIAGNOSTICS</span>
            </button>

            {/* iPhone 16e QR Code / Link Modal Trigger */}
            <button
              onClick={() => setQrModalOpen(true)}
              title="Open QR Code to view on your iPhone 16e"
              className="liquid-glass-pill flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-medium text-amber-200 cursor-pointer hover:border-amber-400/40"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-300" />
              <span>iPhone 16e App</span>
            </button>

            {/* Speed-Read Toggle */}
            <button
              onClick={toggleSpeedReadMode}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-medium transition-all cursor-pointer ${
                speedReadMode
                  ? "bg-amber-400/20 border border-amber-400/50 text-amber-200 shadow-[0_0_20px_-4px_rgba(251,191,36,0.4)]"
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
              <span>Speed-Read Mode</span>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded-md ${
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

        {/* Telemetry Sub-Strip */}
        <div className="mt-3 pt-3 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              <strong className="text-slate-200">{TOTAL_CHAPTERS_COUNT}</strong>{" "}
              Full Scenes (Acts I–V)
            </span>
            <span>•</span>
            <span>
              <strong className="text-slate-200">
                {TOTAL_SUBSECTIONS_COUNT}
              </strong>{" "}
              Granular Dramatic Beats
            </span>
            <span>•</span>
            <span>
              <strong className="text-slate-200">{TOTAL_QUOTES_COUNT}</strong>{" "}
              Annotated First Folio Quotes
            </span>
          </div>
          <div className="flex items-center gap-2 text-amber-300/90">
            <span>
              SOURCES: GOOGLE DOC + SPARKNOTES + LITCHARTS + RSC LEARNING ZONE
            </span>
          </div>
        </div>
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
