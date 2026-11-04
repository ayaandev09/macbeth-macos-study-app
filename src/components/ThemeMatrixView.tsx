"use client";

import React, { useState } from "react";
import { THEMES_TAXONOMY, ALL_CHAPTERS, ThemeId } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import { QuoteNetwork } from "@/components/QuoteNetwork";
import {
  Network,
  Quote as QuoteIcon,
  ArrowUpRight,
  Filter,
  Bookmark,
  Sparkles,
} from "lucide-react";

export function ThemeMatrixView() {
  const {
    activeThemeFilter,
    setActiveThemeFilter,
    bookmarkedQuotes,
    toggleBookmarkQuote,
    setActiveChapter,
    setViewMode,
    searchQuery,
  } = useStudyStore();

  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const themesList = Object.values(THEMES_TAXONOMY);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredQuotes = ALL_CHAPTERS.flatMap((chapter) =>
    chapter.quotes
      .filter((q) => {
        if (onlyBookmarked && !bookmarkedQuotes[q.id]) return false;
        const matchesTheme =
          activeThemeFilter === "all" || q.themes.includes(activeThemeFilter);
        const matchesSearch =
          !normalizedQuery ||
          q.quote.toLowerCase().includes(normalizedQuery) ||
          q.analysis.toLowerCase().includes(normalizedQuery) ||
          q.speaker.toLowerCase().includes(normalizedQuery) ||
          chapter.title.toLowerCase().includes(normalizedQuery) ||
          chapter.displayCode.toLowerCase().includes(normalizedQuery);
        return matchesTheme && matchesSearch;
      })
      .map((q) => ({
        ...q,
        chapterId: chapter.id,
        chapterCode: chapter.displayCode,
        chapterTitle: chapter.title,
      }))
  );

  const jumpToScene = (chapterId: string) => {
    setActiveChapter(chapterId);
    setViewMode("focus");
    window.scrollTo(0, 0);
  };

  return (
    <div className="space-y-6">
      {/* =====================================================================
          1. THE 8 CORE THEMES TAXONOMY BENTO GRID
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-amber-400" />
              <h2 className="text-lg font-bold text-white font-display">
                8 Core Themes & Heatmap Matrix
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Select any theme card below to filter the 31-scene intensity
              matrix and master quote vault.
            </p>
          </div>

          {activeThemeFilter !== "all" && (
            <button
              onClick={() => setActiveThemeFilter("all")}
              className="liquid-glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-amber-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5" />
              Reset Filter (Showing: {activeThemeFilter.toUpperCase()})
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
          {themesList.map((theme) => {
            const isSelected = activeThemeFilter === theme.id;
            const chaptersWithTheme = ALL_CHAPTERS.filter((ch) =>
              ch.themeTracking.some((t) => t.themeId === theme.id)
            ).length;

            return (
              <div
                key={theme.id}
                onClick={() =>
                  setActiveThemeFilter(
                    isSelected ? "all" : (theme.id as ThemeId)
                  )
                }
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "liquid-glass-pill-active border-amber-400/60"
                    : "bg-slate-950/55 border-white/10 hover:border-white/25"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-lg border"
                      style={{
                        backgroundColor: theme.badgeBg,
                        borderColor: theme.badgeBorder,
                        color: theme.badgeText,
                      }}
                    >
                      {theme.shortName}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {chaptersWithTheme}/31 scenes
                    </span>
                  </div>

                  <div className="font-mono text-[10px] uppercase tracking-wider text-amber-300/80 mb-1">
                    {theme.shakespeareanTag}
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/[0.07]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300/90 block mb-0.5">
                    Shakespearean Mechanism
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {theme.coreMechanism}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          2. 31-SCENE x 8-THEME HEATMAP MATRIX
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-3xl p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
              Scene-by-Scene Theme Intensity Heatmap (I.1 — V.11)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Click any scene row to jump directly to its Scene Bento study
              card. Intensity rated 1 (Latent) to 5 (Climactic).
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          role="region"
          aria-labelledby="macbeth-heatmap-caption"
          className="table-wrapper pb-2"
        >
          <table className="w-full text-left border-collapse min-w-[780px]">
            <caption id="macbeth-heatmap-caption" className="sr-only">
              Macbeth Scene-by-Scene Theme Intensity Heatmap across all 31
              scenes
            </caption>
            <thead>
              <tr className="border-b border-white/10 text-[11px] font-mono text-slate-400 uppercase bg-slate-950/85 sticky top-0 z-10">
                <th className="py-2.5 px-3 sticky left-0 bg-slate-950/95 z-20">
                  Scene
                </th>
                {themesList.map((theme) => (
                  <th key={theme.id} className="py-2.5 px-2 text-center">
                    {theme.shortName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs">
              {ALL_CHAPTERS.map((ch) => (
                <tr
                  key={ch.id}
                  onClick={() => jumpToScene(ch.id)}
                  className="hover:bg-white/[0.05] transition-colors cursor-pointer group"
                >
                  <th
                    scope="row"
                    className="py-2.5 px-3 font-medium text-slate-200 flex items-center gap-2 sticky left-0 bg-slate-950/90 group-hover:bg-slate-900/95"
                  >
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-amber-300">
                      {ch.displayCode}
                    </span>
                    <span className="truncate max-w-[230px] group-hover:text-white">
                      {ch.title.replace(/^Act \d+, Scene \d+:\s*/, "")}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </th>

                  {themesList.map((theme) => {
                    const found = ch.themeTracking.find(
                      (t) => t.themeId === theme.id
                    );
                    const score = found ? found.intensity : 0;

                    return (
                      <td key={theme.id} className="py-2 px-2 text-center">
                        {score > 0 ? (
                          <span
                            className="inline-flex items-center justify-center w-7 h-6 rounded-lg font-mono text-[11px] font-bold text-white"
                            style={{
                              backgroundColor: `${theme.color}${
                                score === 5
                                  ? "66"
                                  : score === 4
                                    ? "4d"
                                    : score === 3
                                      ? "38"
                                      : "24"
                              }`,
                              border: `1px solid ${theme.color}80`,
                            }}
                          >
                            {score}
                          </span>
                        ) : (
                          <span className="text-slate-700 font-mono">·</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================================================================
          3. MASTER QUOTE VAULT (FILTERED BY THEME & SEARCH)
          ===================================================================== */}
      <div className="liquid-glass-bento rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <QuoteIcon className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">
              Master First Folio Quote Bank ({filteredQuotes.length} Matching
              Quotes)
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
                onlyBookmarked
                  ? "bg-amber-500/25 border-amber-400/50 text-amber-200"
                  : "liquid-glass-pill text-slate-300"
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  onlyBookmarked ? "text-amber-300 fill-amber-300" : ""
                }`}
              />
              <span>Bookmarked Only</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredQuotes.map((q) => {
            const isBookmarked = !!bookmarkedQuotes[q.id];
            return (
              <div
                key={q.id}
                onClick={() => jumpToScene(q.chapterId)}
                className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-amber-400/40 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-400/30">
                        {q.chapterCode} •{" "}
                        {q.chapterTitle.replace(/^Act \d+, Scene \d+:\s*/, "")}
                      </span>
                      {q.actSceneLine && (
                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/10 text-white border border-white/15">
                          Line {q.actSceneLine}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex flex-wrap gap-1">
                        {q.themes.map((tId) => {
                          const tMeta = THEMES_TAXONOMY[tId];
                          return tMeta ? (
                            <span
                              key={tId}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                              style={{
                                backgroundColor: tMeta.badgeBg,
                                borderColor: tMeta.badgeBorder,
                                color: tMeta.badgeText,
                              }}
                            >
                              {tMeta.shortName}
                            </span>
                          ) : null;
                        })}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmarkQuote(q.id);
                        }}
                        className="p-1 rounded-lg liquid-glass-pill text-slate-300 cursor-pointer"
                      >
                        <Bookmark
                          className={`w-3.5 h-3.5 ${
                            isBookmarked ? "text-amber-300 fill-amber-300" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <p className="font-serif italic text-sm lg:text-base text-amber-100 leading-relaxed mb-1.5">
                    “{q.quote}”
                  </p>
                  <p className="font-mono text-[11px] text-amber-300/90 mb-2">
                    — {q.speaker} ({q.context})
                  </p>

                  {/* Literary Techniques */}
                  {q.literaryTechniques && q.literaryTechniques.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {q.literaryTechniques.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/10"
                        >
                          ✦ {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2.5 border-t border-white/[0.07] mb-2">
                    {q.analysis}
                  </p>

                  {/* Active Theme Connection Callout (When filtered) */}
                  {activeThemeFilter !== "all" &&
                    q.themeConnections?.some((tc) => tc.themeId === activeThemeFilter) && (
                      <div className="mt-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs">
                        <span className="font-mono text-[10px] uppercase font-bold text-amber-300 flex items-center gap-1 mb-0.5">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          {THEMES_TAXONOMY[activeThemeFilter]?.name} Evidence Link
                        </span>
                        <p className="text-amber-100/90 text-[11px] leading-relaxed">
                          {
                            q.themeConnections.find((tc) => tc.themeId === activeThemeFilter)
                              ?.explanation
                          }
                        </p>
                      </div>
                    )}

                  {/* Full Thematic Connections Disclosure (When viewing all themes) */}
                  {activeThemeFilter === "all" &&
                    q.themeConnections &&
                    q.themeConnections.length > 0 && (
                      <details
                        className="mt-2 pt-2 border-t border-white/[0.06] group text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <summary className="font-mono text-[10px] text-amber-300/80 hover:text-amber-200 cursor-pointer list-none select-none flex items-center justify-between py-0.5">
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            Theme Rationale Links ({q.themeConnections.length})
                          </span>
                          <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-1.5 space-y-1.5 pl-0.5">
                          {q.themeConnections.map((tc, idx) => {
                            const tMeta = THEMES_TAXONOMY[tc.themeId];
                            return (
                              <div
                                key={idx}
                                className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08]"
                              >
                                <span
                                  className="inline-block text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border mb-0.5"
                                  style={{
                                    backgroundColor: tMeta?.badgeBg,
                                    borderColor: tMeta?.badgeBorder,
                                    color: tMeta?.badgeText,
                                  }}
                                >
                                  {tMeta?.shortName || tc.themeId.toUpperCase()}
                                </span>
                                <p className="text-[11px] text-slate-200 leading-relaxed">
                                  {tc.explanation}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </details>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <QuoteNetwork />
    </div>
  );
}
