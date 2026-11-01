"use client";

import React, { useMemo, useState, useEffect } from "react";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import { TopCommandBar } from "@/components/TopCommandBar";
import { ChapterBentoCard } from "@/components/ChapterBentoCard";
import { ThemeMatrixView } from "@/components/ThemeMatrixView";
import { LexiconDossierView } from "@/components/LexiconDossierView";
import { RevisionCramView } from "@/components/RevisionCramView";
import { FloatingBottomDock } from "@/components/FloatingBottomDock";
import { StartupDiagnosticIntro } from "@/components/StartupDiagnosticIntro";
import { ALL_CHAPTERS, BOOK_PARTS, ActId } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import { Sparkles, Layers, SearchX } from "lucide-react";

export default function MacbethStudyDashboardMacPage() {
  const {
    activeChapterId,
    setActiveChapter,
    viewMode,
    searchQuery,
    setSearchQuery,
    activePartFilter,
    setActivePartFilter,
    diagnosticsModalOpen,
    setDiagnosticsModalOpen,
    academicStyle,
    deviceMode,
    setDeviceMode,
  } = useStudyStore();

  const [showStartupIntro, setShowStartupIntro] = useState(true);

  // Synchronize universal academic professional font attribute
  useEffect(() => {
    if (typeof document !== "undefined") {
      const activeFont = academicStyle || "newsreader";
      document.documentElement.setAttribute("data-academic-font", activeFont);
      document.documentElement.setAttribute("data-handwritten-style", activeFont);
    }
  }, [academicStyle]);

  // Detect URL parameter ?view=mac or ?view=iphone
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view");
      if (viewParam === "mac") {
        setDeviceMode("mac");
      } else if (viewParam === "iphone" || viewParam === "iphone16e") {
        setDeviceMode("iphone16e");
      }
    }
  }, [setDeviceMode]);

  const activeChapter = useMemo(
    () =>
      ALL_CHAPTERS.find((c) => c.id === activeChapterId) || ALL_CHAPTERS[0],
    [activeChapterId]
  );

  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_CHAPTERS.filter((ch) => {
      const matchesPart =
        activePartFilter === "all" || ch.partId === activePartFilter;
      if (!matchesPart) return false;
      if (!q) return true;

      const inHeader =
        ch.title.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        ch.displayCode.toLowerCase().includes(q) ||
        ch.summary.toLowerCase().includes(q) ||
        (ch.folioCrossRef && ch.folioCrossRef.toLowerCase().includes(q));

      const inBullets = ch.speedReadBullets.some((b) =>
        b.toLowerCase().includes(q)
      );
      const inSubsections = ch.subSections.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.content.toLowerCase().includes(q) ||
          s.analyticalTakeaway.toLowerCase().includes(q)
      );
      const inQuotes = ch.quotes.some(
        (qt) =>
          qt.quote.toLowerCase().includes(q) ||
          qt.analysis.toLowerCase().includes(q) ||
          qt.speaker.toLowerCase().includes(q)
      );
      const inSymbols = ch.analysis.motifsAndSymbols.some((sym) =>
        sym.toLowerCase().includes(q)
      );

      return inHeader || inBullets || inSubsections || inQuotes || inSymbols;
    });
  }, [searchQuery, activePartFilter]);

  return (
    <div
      className={
        deviceMode === "iphone16e"
          ? "iphone-16e-shell"
          : "mac-dashboard-shell"
      }
    >
      {/* =====================================================================
          CINEMATIC STARTUP DIAGNOSTICS & TELEMETRY
          ===================================================================== */}
      {showStartupIntro && (
        <StartupDiagnosticIntro onComplete={() => setShowStartupIntro(false)} />
      )}
      {diagnosticsModalOpen && (
        <StartupDiagnosticIntro
          isManualTelemetry={true}
          onClose={() => setDiagnosticsModalOpen(false)}
        />
      )}

      {/* =====================================================================
          GPU-ACCELERATED LIQUID AMBIENT ORBS (ZERO BLUR REPAINT OVERHEAD)
          ===================================================================== */}
      <div
        className="liquid-ambient-orb w-[700px] h-[700px] -top-36 left-1/4"
        style={{
          background:
            "radial-gradient(circle, rgba(244,63,94,0.2) 0%, rgba(244,63,94,0.03) 65%, transparent 100%)",
        }}
      />
      <div
        className="liquid-ambient-orb w-[650px] h-[650px] top-1/3 -right-28"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(251,191,36,0.03) 65%, transparent 100%)",
        }}
      />
      <div
        className="liquid-ambient-orb w-[720px] h-[720px] -bottom-44 left-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(52,211,153,0.02) 65%, transparent 100%)",
        }}
      />

      {/* =====================================================================
          MAIN LIQUID GLASS SHELL WORKSPACE (MAC & IPHONE 16e HARMONIZED)
          ===================================================================== */}
      <div className="relative z-10 w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Left Sticky Liquid Glass Navigation Sidebar (Only on Mac Desktop Mode) */}
          {deviceMode !== "iphone16e" && <FloatingSidebar />}

          {/* Main Content Column */}
          <main className="flex-1 min-w-0 w-full">
            <TopCommandBar />

            {/* If user is actively typing a search query while in single Bento mode, show matching scene pills */}
            {searchQuery.trim() && viewMode === "focus" && (
              <div className="liquid-glass-bento rounded-2xl p-4 mb-5 border border-amber-400/30">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-xs text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Search Matches Across All 31 Scenes (
                    {filteredChapters.length})
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Click a scene pill to inspect
                  </span>
                </div>
                {filteredChapters.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {filteredChapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => setActiveChapter(ch.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          ch.id === activeChapterId
                            ? "liquid-glass-pill-active text-white"
                            : "liquid-glass-pill text-slate-300"
                        }`}
                      >
                        {ch.displayCode} —{" "}
                        {ch.title.replace(/^Act \d+, Scene \d+:\s*/, "")}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-rose-300">
                    No scenes matched &ldquo;{searchQuery}&rdquo;. Try another
                    keyword (e.g., &ldquo;dagger&rdquo;, &ldquo;Banquo&rdquo;,
                    &ldquo;equivocator&rdquo;, &ldquo;Birnam&rdquo;).
                  </p>
                )}
              </div>
            )}

            {/* ===============================================================
                MODE 1: SINGLE SCENE BENTO FOCUS VIEW
                =============================================================== */}
            {viewMode === "focus" && (
              <div key="view-focus" className="section-jelly-enter">
                <ChapterBentoCard chapter={activeChapter} isDeferred={false} />
              </div>
            )}

            {/* ===============================================================
                MODE 2: CONTINUOUS ALL-31-SCENES SPEED-READ FLOW
                =============================================================== */}
            {viewMode === "stream" && (
              <div key="view-stream" className="space-y-8 section-jelly-enter">
                {/* Act Filter Bar & Narrative Arc Overviews */}
                <div className="liquid-glass-bento rounded-3xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <h2 className="text-base font-bold text-white">
                        Continuous 31-Scene Speed-Read Stream
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {(
                        [
                          { id: "all", label: "All 5 Acts (31 Scenes)" },
                          { id: "act-1", label: "Act I (7)" },
                          { id: "act-2", label: "Act II (4)" },
                          { id: "act-3", label: "Act III (6)" },
                          { id: "act-4", label: "Act IV (3)" },
                          { id: "act-5", label: "Act V (11)" },
                        ] as { id: ActId | "all"; label: string }[]
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActivePartFilter(tab.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                            activePartFilter === tab.id
                              ? "liquid-glass-pill-active text-white"
                              : "liquid-glass-pill text-slate-300"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Act Overviews Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {BOOK_PARTS.map((part) => (
                      <div
                        key={part.id}
                        className="p-3.5 rounded-2xl bg-slate-950/55 border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[11px] font-bold text-amber-300 uppercase">
                            Act {part.romanNumeral}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">
                            {part.chapters.length} Scenes
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-white mb-1">
                          {part.title.replace(/^Act [IVX]+:\s*/, "")}
                        </p>
                        <p className="text-[11px] text-slate-300 leading-relaxed mb-2 line-clamp-4">
                          {part.overview}
                        </p>
                        <p className="text-[10px] font-mono text-rose-300/90">
                          {part.narrativeArc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Matching Scene Cards */}
                {filteredChapters.length > 0 ? (
                  filteredChapters.map((ch, idx) => (
                    <ChapterBentoCard
                      key={ch.id}
                      chapter={ch}
                      isDeferred={idx > 0}
                    />
                  ))
                ) : (
                  <div className="liquid-glass-bento rounded-3xl p-12 text-center">
                    <SearchX className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                    <h3 className="text-base font-bold text-white mb-1">
                      No Scenes Match Your Filter
                    </h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Try clearing your search query or switching back to All 5
                      Acts.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActivePartFilter("all");
                      }}
                      className="liquid-glass-pill px-4 py-2 rounded-xl text-xs font-mono text-amber-300 cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ===============================================================
                MODE 3: THEME & QUOTE MATRIX VIEW
                =============================================================== */}
            {viewMode === "matrix" && (
              <div key="view-matrix" className="section-jelly-enter">
                <ThemeMatrixView />
              </div>
            )}

            {/* ===============================================================
                MODE 4: SYMBOLS, DRAMATIS PERSONAE & RHETORIC LEXICON
                =============================================================== */}
            {viewMode === "lexicon" && (
              <div key="view-lexicon" className="section-jelly-enter">
                <LexiconDossierView />
              </div>
            )}

            {/* ===============================================================
                MODE 5: REVISION MATERIAL, FLASHCARDS & EXAM ESSAYS
                =============================================================== */}
            {viewMode === "revision" && (
              <div key="view-revision" className="section-jelly-enter">
                <RevisionCramView />
              </div>
            )}
          </main>
        </div>
      </div>

      {/* =====================================================================
          FLOATING LIQUID GLASS BOTTOM DOCK
          ===================================================================== */}
      <FloatingBottomDock />
    </div>
  );
}
