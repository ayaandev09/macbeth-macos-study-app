"use client";

import React, { useState, useMemo } from "react";
import { Network, Quote, Bookmark, Sparkles, Layers } from "lucide-react";
import { THEMES_TAXONOMY, ALL_CHAPTERS, ThemeId } from "@/data";
import { useStudyStore } from "@/store/useStudyStore";

export const ThemeMatrixView: React.FC = React.memo(() => {
  const {
    activeThemeFilter,
    setActiveThemeFilter,
    bookmarkedQuotes,
    toggleBookmarkQuote,
    setActiveChapter,
    setViewMode,
    searchQuery,
  } = useStudyStore();

  const [activeTab, setActiveTab] = useState<"themes" | "heatmap" | "quotes">("themes");
  const [selectedThemeId, setSelectedThemeId] = useState<string>("ambition");
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  const themesList = useMemo(() => Object.values(THEMES_TAXONOMY), []);
  const currentTheme = themesList.find((t) => t.id === selectedThemeId) || themesList[0];

  const allQuotesWithChapter = useMemo(() => {
    return ALL_CHAPTERS.flatMap((ch) =>
      ch.quotes.map((q) => ({
        ...q,
        chapterId: ch.id,
        chapterCode: ch.displayCode,
        chapterTitle: ch.title,
      }))
    ).filter((q) => {
      if (onlyBookmarked && !bookmarkedQuotes[q.id]) return false;
      if (activeThemeFilter !== "all" && !q.themes.includes(activeThemeFilter)) {
        return false;
      }
      if (searchQuery.trim()) {
        const term = searchQuery.toLowerCase();
        return (
          q.quote.toLowerCase().includes(term) ||
          q.analysis.toLowerCase().includes(term) ||
          q.speaker.toLowerCase().includes(term) ||
          q.chapterTitle.toLowerCase().includes(term)
        );
      }
      return true;
    });
  }, [onlyBookmarked, bookmarkedQuotes, activeThemeFilter, searchQuery]);

  return (
    <div className="space-y-5">
      {/* Top Segmented Navigation Bar */}
      <div className="liquid-glass-bento rounded-3xl p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-violet-500/20 text-violet-300 border border-violet-400/30">
            <Network className="w-5 h-5 text-violet-300" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Theme Matrix &amp; Quote Index
            </h2>
            <p className="text-xs text-slate-400">
              Explore Jacobean motifs, scene intensity heatmap &amp; verified quotes
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-2xl bg-black/60 border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab("themes")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              activeTab === "themes"
                ? "bg-violet-500/25 text-violet-200 border border-violet-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-300" />
            <span>Core Themes ({themesList.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("heatmap")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              activeTab === "heatmap"
                ? "bg-amber-500/25 text-amber-200 border border-amber-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-300" />
            <span>Intensity Heatmap</span>
          </button>
          <button
            onClick={() => setActiveTab("quotes")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
              activeTab === "quotes"
                ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Quote className="w-3.5 h-3.5 text-emerald-300" />
            <span>Master Quotes ({allQuotesWithChapter.length})</span>
          </button>
        </div>
      </div>

      {/* ==================== TAB 1: MASTER-DETAIL THEMES ==================== */}
      {activeTab === "themes" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Theme Selector Tiles (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
            {themesList.map((theme: any) => {
              const isSelected = theme.id === selectedThemeId;
              const chaptersCount = ALL_CHAPTERS.filter((ch) =>
                ch.themeTracking && ch.themeTracking.some((t) => t.themeId === theme.id)
              ).length;

              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer block ${
                    isSelected
                      ? "glass-tint tint-violet border-violet-400/60 shadow-lg scale-[1.01]"
                      : "bg-black/40 hover:bg-white/[0.05] border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md border"
                      style={{
                        backgroundColor: theme.badgeBg || "rgba(139, 92, 246, 0.15)",
                        borderColor: theme.badgeBorder || "rgba(139, 92, 246, 0.4)",
                        color: theme.badgeText || "#ddd6fe",
                      }}
                    >
                      {theme.shortName || theme.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {chaptersCount} Scenes
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {theme.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right In-Depth Theme Dossier & Key Quotes (7 cols) */}
          <div className="lg:col-span-7">
            {currentTheme && (
              <div className="glass-tint tint-violet rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold border inline-block mb-2"
                      style={{
                        backgroundColor: (currentTheme as any).badgeBg || "rgba(139, 92, 246, 0.15)",
                        borderColor: (currentTheme as any).badgeBorder || "rgba(139, 92, 246, 0.4)",
                        color: (currentTheme as any).badgeText || "#ddd6fe",
                      }}
                    >
                      {(currentTheme as any).shortName || currentTheme.name}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {currentTheme.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setActiveThemeFilter(currentTheme.id as ThemeId);
                      setActiveTab("quotes");
                    }}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white font-semibold cursor-pointer transition-all shrink-0"
                  >
                    View Theme Quotes ➔
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                      Core Concept &amp; Thematic Function in Macbeth
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {currentTheme.description}
                    </p>
                  </div>

                  {(currentTheme as any).coreMechanism && (
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                      <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                        Dramatic &amp; Psychological Mechanism
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {(currentTheme as any).coreMechanism}
                      </p>
                    </div>
                  )}

                  {/* Active Scenes for this theme */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                      Key Manifesting Scenes
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ALL_CHAPTERS.filter((ch) =>
                        ch.themeTracking && ch.themeTracking.some((t) => t.themeId === currentTheme.id)
                      ).map((ch) => (
                        <button
                          key={ch.id}
                          onClick={() => {
                            setActiveChapter(ch.id);
                            setViewMode("focus");
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-300 hover:text-white cursor-pointer transition-colors"
                        >
                          {ch.displayCode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== TAB 2: SCENE X THEME HEATMAP ==================== */}
      {activeTab === "heatmap" && (
        <div className="liquid-glass-bento rounded-3xl p-5 sm:p-6 overflow-x-auto">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">
              Scene-by-Scene Thematic Intensity Heatmap (Act 1 ➔ Act 5)
            </h3>
            <p className="text-xs text-slate-400">
              Click any scene to jump directly into its study view
            </p>
          </div>

          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="border-b border-white/15 text-[11px] font-mono uppercase text-slate-400">
                <th className="py-2.5 px-3">Scene</th>
                {themesList.map((t: any) => (
                  <th key={t.id} className="py-2.5 px-2 text-center">
                    <span style={{ color: t.badgeText || "#ddd6fe" }}>{t.shortName || t.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              {ALL_CHAPTERS.map((ch) => (
                <tr
                  key={ch.id}
                  onClick={() => {
                    setActiveChapter(ch.id);
                    setViewMode("focus");
                    window.scrollTo(0, 0);
                  }}
                  className="hover:bg-white/[0.06] transition-colors cursor-pointer group"
                >
                  <td className="py-2 px-3 font-medium text-slate-200 group-hover:text-amber-300 flex items-center gap-2">
                    <span className="font-mono font-bold text-amber-300 w-9 shrink-0">
                      {ch.displayCode}
                    </span>
                    <span className="truncate max-w-[220px]">{ch.title}</span>
                  </td>
                  {themesList.map((t) => {
                    const found = ch.themeTracking && ch.themeTracking.find((tr) => tr.themeId === t.id);
                    const intensity = found ? found.intensity : 0;
                    return (
                      <td key={t.id} className="py-2 px-2 text-center">
                        {intensity > 0 ? (
                          <span
                            className="inline-flex items-center justify-center w-7 h-6 rounded-lg font-mono text-[11px] font-bold border"
                            style={{
                              backgroundColor: (t as any).badgeBg || "rgba(139, 92, 246, 0.15)",
                              borderColor: (t as any).badgeBorder || "rgba(139, 92, 246, 0.4)",
                              color: (t as any).badgeText || "#ddd6fe",
                              opacity: 0.4 + intensity * 0.12,
                            }}
                            title={found?.manifestation}
                          >
                            {intensity}
                          </span>
                        ) : (
                          <span className="text-slate-700">·</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ==================== TAB 3: MASTER QUOTE VAULT ==================== */}
      {activeTab === "quotes" && (
        <div className="liquid-glass-bento rounded-3xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white">
                Master Quote Vault &amp; Analytical Index ({allQuotesWithChapter.length})
              </h3>
              <p className="text-xs text-slate-400">
                Search, bookmark, and review First Folio quotes for Paper 2 essays
              </p>
            </div>

            <div className="flex items-center gap-2">
              {activeThemeFilter !== "all" && (
                <button
                  onClick={() => setActiveThemeFilter("all")}
                  className="px-3 py-1 rounded-xl text-xs bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 cursor-pointer"
                >
                  Reset Theme Filter ({activeThemeFilter})
                </button>
              )}
              <button
                onClick={() => setOnlyBookmarked(!onlyBookmarked)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  onlyBookmarked
                    ? "bg-amber-500/25 border-amber-400/50 text-amber-200"
                    : "liquid-glass-pill text-slate-300 hover:text-white"
                }`}
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    onlyBookmarked ? "text-amber-300 fill-amber-300" : ""
                  }`}
                />
                <span>Bookmarks Only</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {allQuotesWithChapter.slice(0, 40).map((q) => {
              const isBookmarked = !!bookmarkedQuotes[q.id];
              return (
                <div
                  key={q.id}
                  className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-amber-300">
                        {q.chapterCode} • {q.speaker}
                      </span>
                      <button
                        onClick={() => toggleBookmarkQuote(q.id)}
                        className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-amber-300 cursor-pointer"
                      >
                        <Bookmark
                          className={`w-3.5 h-3.5 ${
                            isBookmarked ? "text-amber-300 fill-amber-300" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <blockquote className="text-xs sm:text-sm text-slate-100 italic leading-relaxed">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                  </div>

                  <p className="text-[11px] text-slate-400 border-t border-white/10 pt-2 leading-relaxed">
                    {q.analysis}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});

ThemeMatrixView.displayName = "ThemeMatrixView";
