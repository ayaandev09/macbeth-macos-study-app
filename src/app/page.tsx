"use client";

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientAuroraCanvas } from "@/components/AmbientAuroraCanvas";
import { SideNav } from "@/components/SideNav";
import { SceneSwitcher } from "@/components/SceneSwitcher";
import { TopCommandBar } from "@/components/TopCommandBar";
import { WidgetBridge } from "@/components/WidgetBridge";
import { ChapterBentoCard } from "@/components/ChapterBentoCard";
import { HomeDashboard } from "@/components/HomeDashboard";
import { ThemeMatrixView } from "@/components/ThemeMatrixView";
import { SymbolsMotifsView } from "@/components/SymbolsMotifsView";
import { RevisionCramView } from "@/components/RevisionCramView";
import { IBPaper2StudioView } from "@/components/IBPaper2StudioView";
import { FloatingBottomDock } from "@/components/FloatingBottomDock";
import { StartupDiagnosticIntro } from "@/components/StartupDiagnosticIntro";
import { CinematicStartupIntro } from "@/components/CinematicStartupIntro";
import { ImmersiveAppWalkthrough } from "@/components/ImmersiveAppWalkthrough";
import { MacbethRightInspector } from "@/components/MacbethRightInspector";
import { TimedExamSprintModal } from "@/components/TimedExamSprintModal";
import { JellySpotlightModal } from "@/components/JellySpotlightModal";
import { InAppStudyBrowserModal } from "@/components/InAppStudyBrowserModal";
import { ChromaticButton } from "@/components/chromatic-button";
import { ALL_CHAPTERS, BOOK_PARTS, THEMES_TAXONOMY, ActId } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  initLiveSyncConnection,
  decodeSyncFromUrl,
  pullSyncFromServer,
  pushSyncToServer,
} from "@/lib/syncService";
import { initGlobalTactileListener } from "@/lib/tactileHaptics";
import {
  Sparkles,
  Layers,
  SearchX,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function MacbethStudyDashboardMacPage() {
  const {
    activeChapterId,
    setActiveChapter,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    activePartFilter,
    setActivePartFilter,
    diagnosticsModalOpen,
    setDiagnosticsModalOpen,
    academicStyle,
    deviceMode,
    setDeviceMode,
    completedChapters,
    toggleChapterComplete,
    goToNextChapter,
    applyRemoteSync,
    isInspectorOpen,
    toggleInspector,
    isExamSprintActive,
    closeExamSprint,
    toggleExamSprint,
    isSpotlightOpen,
    closeSpotlight,
    setStudyGoal,
    isInAppBrowserOpen,
    inAppBrowserUrl,
    inAppBrowserSourceId,
    closeInAppBrowser,
  } = useStudyStore();

  const [isStartupActive, setIsStartupActive] = useState(true);
  const [showMainUI, setShowMainUI] = useState(false);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);

  const handleStartupComplete = useCallback(() => {
    setIsStartupActive(false);
    setShowMainUI(true);
    if (typeof window !== "undefined") {
      const hasSeen = localStorage.getItem("hasSeenAppWalkthrough_macbeth_v1");
      if (!hasSeen) {
        setIsWalkthroughOpen(true);
      }
    }
  }, []);

  // Synchronize universal academic professional font attribute
  useEffect(() => {
    if (typeof document !== "undefined") {
      const activeFont = academicStyle || "newsreader";
      document.documentElement.setAttribute("data-academic-font", activeFont);
      document.documentElement.setAttribute("data-handwritten-style", activeFont);
    }
  }, [academicStyle]);

  // Activate universal tactile mechanical feedback on buttons
  useEffect(() => {
    const cleanup = initGlobalTactileListener();
    return cleanup;
  }, []);

  // Fluid layout window adaptation on dynamic resize and full-screen toggles
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      const store = useStudyStore.getState();
      if (width < 1024) {
        if (!store.sidebarCollapsed) store.toggleSidebar();
      }
      if (width < 1280) {
        if (store.isInspectorOpen) store.toggleInspector();
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Global Keyboard Shortcut: Cmd/Ctrl + I to toggle Analytical Inspector
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        toggleInspector();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "e") {
        e.preventDefault();
        toggleExamSprint();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleInspector, toggleExamSprint]);

  // Live sync hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const syncParam = params.get("sync");
      if (syncParam) {
        const decoded = decodeSyncFromUrl(syncParam);
        if (decoded) {
          applyRemoteSync(decoded);
        }
      } else {
        pullSyncFromServer().then((remote) => {
          if (remote) applyRemoteSync(remote);
        });
      }
    }

    const disconnectSync = initLiveSyncConnection((incoming) => {
      applyRemoteSync(incoming);
    });

    return () => {
      disconnectSync();
    };
  }, [applyRemoteSync]);

  const activeChapter = useMemo(
    () =>
      ALL_CHAPTERS.find((c) => c.id === activeChapterId) || ALL_CHAPTERS[0],
    [activeChapterId]
  );

  const activeBookPart = useMemo(
    () => BOOK_PARTS.find((p) => p.id === activeChapter.partId) || BOOK_PARTS[0],
    [activeChapter.partId]
  );

  const currentChapterIndex = useMemo(
    () => ALL_CHAPTERS.findIndex((c) => c.id === activeChapter.id),
    [activeChapter.id]
  );

  const nextChapter = useMemo(
    () =>
      currentChapterIndex >= 0 && currentChapterIndex < ALL_CHAPTERS.length - 1
        ? ALL_CHAPTERS[currentChapterIndex + 1]
        : null,
    [currentChapterIndex]
  );

  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ALL_CHAPTERS.filter((ch) => {
      // Global search across all acts when query is active
      if (!q && activePartFilter !== "all" && ch.partId !== activePartFilter) {
        return false;
      }
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

  // When searching in focus mode, automatically sync active scene to first search match
  useEffect(() => {
    if (searchQuery.trim() && filteredChapters.length > 0) {
      if (!filteredChapters.some((ch) => ch.id === activeChapterId)) {
        setActiveChapter(filteredChapters[0].id);
      }
    }
  }, [searchQuery, filteredChapters, activeChapterId, setActiveChapter]);

  return (
    <>
      {/* 1. Bulletproof Zero-Latency Liquid Glass Startup Animation */}
      <AnimatePresence>
        {isStartupActive && (
          <CinematicStartupIntro
            isOpen={isStartupActive}
            onClose={handleStartupComplete}
            onComplete={handleStartupComplete}
          />
        )}
      </AnimatePresence>

      {/* 2. Main Study Dashboard - Fluid Liquid Glass Reveal */}
      <div className="relative min-h-screen w-full bg-[#060402] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-100 overflow-x-hidden">
        <AmbientAuroraCanvas />
        <WidgetBridge />
        {diagnosticsModalOpen && (
          <StartupDiagnosticIntro
            isManualTelemetry={true}
            onClose={() => setDiagnosticsModalOpen(false)}
          />
        )}

        {/* Main 3-Column macOS Dashboard Shell */}
        <div
          className={`relative z-10 w-full max-w-[1720px] mx-auto p-2.5 sm:p-4 flex gap-4 xl:gap-5 items-start transition-opacity duration-700 mac-dashboard-shell ${
            showMainUI ? "app-revealed opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none select-none"
          }`}
        >
          {/* Left Sticky Liquid Glass Navigation Sidebar */}
          <SideNav />

          {/* Main Content Column */}
          <main
            data-tour="main-workspace"
            className="flex-1 min-w-0 w-full pb-36 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ containerType: "inline-size" }}
          >
            <div className="sticky top-2 z-30 mb-4">
              <TopCommandBar onOpenWalkthrough={() => setIsWalkthroughOpen(true)} />
            </div>

            {/* Mini Homepage & Live Widget Telemetry Hub */}
            

            {/* Search Match Pill Bar */}
            {searchQuery.trim() && viewMode === "focus" && (
              <div className="liquid-glass-bento rounded-2xl p-4 mb-5 border border-amber-400/30">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-xs text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Search Matches Across All 31 Scenes ({filteredChapters.length})
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
                VIEW WORKSPACE
                =============================================================== */}
            <div key={viewMode} className="liquid-view-enter">
              {/* ===============================================================
                  MODE 1: SINGLE SCENE BENTO FOCUS VIEW
                  =============================================================== */}
              {viewMode === "home" && <HomeDashboard />}

              {viewMode === "focus" && (
                <div className="space-y-5">
                  <SceneSwitcher />
                  {/* Act Context Banner - 100% Full-Width Bulletproof Native Card */}
                  <div className="liquid-glass-bento rounded-3xl p-5 mb-5 border border-white/15 shadow-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl space-y-3">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 shrink-0">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-mono font-bold tracking-wider text-amber-400 uppercase block">
                            Act {activeBookPart.romanNumeral} Overview
                          </span>
                          <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                            {activeBookPart.title.replace(/^Act [IVX]+:\s*/, "")}
                          </h2>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">
                        {activeBookPart.chapters.length} Scenes
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed w-full">
                      {activeBookPart.overview}
                    </p>

                    {activeBookPart.dominantThemes && activeBookPart.dominantThemes.length > 0 && (
                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-400 mr-1">Act Themes:</span>
                        {activeBookPart.dominantThemes.map((tId) => {
                          const t = THEMES_TAXONOMY[tId];
                          if (!t) return null;
                          return (
                            <span
                              key={tId}
                              className="px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all hover:brightness-110 cursor-default"
                              style={{
                                backgroundColor: t.badgeBg,
                                borderColor: t.badgeBorder,
                                color: t.badgeText,
                              }}
                            >
                              {t.shortName || t.name}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Active Scene Bento Grid */}
                  <div key={activeChapter.id} data-tour="study-bento" className="liquid-chapter-swap">
                    <ChapterBentoCard chapter={activeChapter} isDeferred={false} />
                  </div>

                  {/* Seamless Next-Scene Speed-Read Transition Footer */}
                  {nextChapter && (
                    <div className="liquid-glass-bento rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                          Up Next in Your Speed-Read Queue
                        </div>
                        <div className="text-base sm:text-lg font-bold text-white">
                          {nextChapter.displayCode}: {nextChapter.title.replace(/^Act \d+, Scene \d+:\s*/, "")}
                        </div>
                        <div className="text-xs text-amber-300">
                          {nextChapter.subtitle}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <ChromaticButton
                          onClick={() => {
                            if (!completedChapters[activeChapter.id]) {
                              toggleChapterComplete(activeChapter.id);
                            }
                            goToNextChapter();
                            window.scrollTo(0, 0);
                          }}
                          color="#00802f"
                          colorMode="spectrum"
                          speed={0.7}
                          paused={false}
                          phase={0}
                          feather={100}
                          projectionScale={174.7}
                          intensity={1.4}
                          grain={0.105}
                          seed={7}
                          borderRadius={50}
                          hoverEffect="brighten"
                          entrance="blur-up"
                          entranceSpeed={1}
                          entranceBlur={10}
                          entranceDistance={20}
                          entranceScale={0.65}
                          className="w-full sm:w-auto min-w-[200px] !h-12 !px-6 !text-xs font-bold shadow-xl cursor-pointer"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-300 mr-2" />
                          <span>Complete {activeChapter.displayCode} &amp; Continue</span>
                          <ArrowRight className="w-4 h-4 text-white ml-2" />
                        </ChromaticButton>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ===============================================================
                  MODE 2: CONTINUOUS ALL-31-SCENES SPEED-READ FLOW
                  =============================================================== */}
              {viewMode === "stream" && (
                <div className="space-y-8">
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

                  {/* All Matching Scene Cards - Executive Digest (No text dump) */}
                  {filteredChapters.length > 0 ? (
                    <div className="space-y-4">
                      {filteredChapters.map((ch) => {
                        const isDone = !!completedChapters[ch.id];
                        return (
                          <div
                            key={ch.id}
                            className="liquid-glass-bento rounded-3xl p-5 border border-white/10 hover:border-amber-400/40 transition-all space-y-3"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/35">
                                  Act {ch.displayCode}
                                </span>
                                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                                  {ch.title}
                                </h3>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-slate-400">
                                  {ch.readingTimeMinutes} min read
                                </span>
                                <button
                                  onClick={() => {
                                    setActiveChapter(ch.id);
                                    setViewMode("focus");
                                  }}
                                  className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs cursor-pointer transition-colors"
                                >
                                  Study Scene ➔
                                </button>
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                              {ch.summary}
                            </p>

                            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                              <span className="text-slate-400">
                                <strong className="text-amber-300">Setting:</strong> {ch.setting}
                              </span>
                              <span className="text-slate-400 font-mono text-[11px]">
                                Atmospheric Omen: <span className="text-rose-300 font-bold">{ch.omenLevel}</span>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
              {viewMode === "matrix" && <ThemeMatrixView />}

              {/* ===============================================================
                  MODE 4: SYMBOLS, DRAMATIS PERSONAE & RHETORIC LEXICON
                  =============================================================== */}
              {viewMode === "lexicon" && <SymbolsMotifsView />}

              {/* ===============================================================
                  MODE 5: REVISION MATERIAL, FLASHCARDS & EXAM ESSAYS
                  =============================================================== */}
              {viewMode === "revision" && <RevisionCramView />}

              {/* ===============================================================
                  MODE 6: OFFICIAL IB PAPER 2 COMPARATIVE STUDIO & EXEMPLAR
                  =============================================================== */}
              {viewMode === "paper2" && <IBPaper2StudioView />}
            </div>
          </main>

        {/* Right Sticky Liquid Glass Analytical Inspector */}
        <MacbethRightInspector
          chapter={activeChapter}
          isOpen={isInspectorOpen}
          onToggle={toggleInspector}
        />
      </div>
    </div>

    {/* Timed Exam Sprint Full-Screen Simulation Modal */}
    <TimedExamSprintModal
      isOpen={isExamSprintActive}
      onClose={closeExamSprint}
      chapter={activeChapter}
    />

    {/* Flagship Spacious Jelly Spotlight Command Palette */}
    <JellySpotlightModal
      isOpen={isSpotlightOpen}
      onClose={closeSpotlight}
    />

    {/* In-App Study Browser & NotebookLM Research Hub Modal */}
    <InAppStudyBrowserModal
      isOpen={isInAppBrowserOpen}
      onClose={closeInAppBrowser}
      initialUrl={inAppBrowserUrl}
      initialSourceId={inAppBrowserSourceId}
      onInsertIntoEssay={(textToInsert) => {
        try {
          const savedDrafts = localStorage.getItem("macbeth_ib_paper2_drafts_v1");
          const parsed = savedDrafts ? JSON.parse(savedDrafts) : {};
          const current = parsed["q1-appearance-reality"] || { continuousEssay: "" };
          const existing = current.continuousEssay || "";
          const separator = existing && !existing.endsWith("\n") ? "\n\n" : "";
          const updated = {
            ...parsed,
            ["q1-appearance-reality"]: {
              ...current,
              continuousEssay: existing + separator + textToInsert,
            },
          };
          localStorage.setItem("macbeth_ib_paper2_drafts_v1", JSON.stringify(updated));
        } catch (e) {
          console.error("Failed to insert into essay:", e);
        }
      }}
    />

    {/* Immersive Onboarding Walkthrough Tour */}
    <ImmersiveAppWalkthrough
      isOpen={isWalkthroughOpen}
      onClose={() => setIsWalkthroughOpen(false)}
      onSelectGoal={(goal) => setStudyGoal(goal)}
      isInspectorOpen={isInspectorOpen}
      onOpenInspector={() => {
        if (!isInspectorOpen) toggleInspector();
      }}
    />
    </>
  );
}
