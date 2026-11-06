"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  X,
  ArrowRight,
  BookOpen,
  Quote as QuoteIcon,
  Crown,
  Sparkles,
  Flame,
  CornerDownLeft,
  Filter,
} from "lucide-react";
import { searchMacbethCodex, SearchFilterTab, SearchResultItem } from "@/lib/searchEngine";
import { useStudyStore } from "@/store/useStudyStore";

interface JellySpotlightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FEATURED_QUICK_JUMPS = [
  { id: "a1-s5", code: "I.5", title: "Lady Macbeth: 'Unsex Me Here'", tag: "Soliloquy" },
  { id: "a1-s7", code: "I.7", title: "Macbeth: 'Vaulting Ambition'", tag: "Soliloquy" },
  { id: "a2-s1", code: "II.1", title: "The Air-Drawn Dagger", tag: "Iconic" },
  { id: "a2-s2", code: "II.2", title: "'Macbeth Does Murder Sleep'", tag: "Regicide" },
  { id: "a3-s4", code: "III.4", title: "Banquo's Gory Ghost at the Banquet", tag: "Turning Point" },
  { id: "a4-s1", code: "IV.1", title: "Double, Double Toil and Trouble", tag: "Apparitions" },
  { id: "a5-s1", code: "V.1", title: "Lady Macbeth: 'Out, Damned Spot!'", tag: "Guilt" },
  { id: "a5-s5", code: "V.5", title: "'Tomorrow and Tomorrow and Tomorrow'", tag: "Soliloquy" },
];

export const JellySpotlightModal: React.FC<JellySpotlightModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<SearchFilterTab>("all");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  const { setActiveChapter, setViewMode } = useStudyStore();

  const results = useMemo(() => {
    return searchMacbethCodex(query, activeTab);
  }, [query, activeTab]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
      setActiveTab("all");
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeTab]);

  const handleSelect = (chapterId: string) => {
    setActiveChapter(chapterId);
    setViewMode("focus");
    onClose();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const max = results.length > 0 ? results.length : FEATURED_QUICK_JUMPS.length;
        setSelectedIndex((prev) => (prev + 1) % max);
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const max = results.length > 0 ? results.length : FEATURED_QUICK_JUMPS.length;
        setSelectedIndex((prev) => (prev - 1 + max) % max);
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].id);
        } else if (!query && FEATURED_QUICK_JUMPS[selectedIndex]) {
          handleSelect(FEATURED_QUICK_JUMPS[selectedIndex].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md select-none transition-all"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="jelly-spotlight-enter w-full max-w-3xl liquid-card-flagship rounded-3xl p-5 border border-amber-400/35 bg-[#0a0408]/95 backdrop-blur-3xl shadow-[0_32px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(245,158,11,0.18)] flex flex-col max-h-[82vh] overflow-hidden"
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center gap-3 pb-3.5 border-b border-white/10 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-inner">
            <Search className="w-5 h-5 text-amber-300" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 28 scenes, soliloquies, quotes, characters, themes..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-sm sm:text-base font-medium focus:outline-none tracking-tight"
          />

          {query ? (
            <button
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10">
              <kbd className="font-sans text-[11px]">ESC</kbd> to exit
            </span>
          )}
        </div>

        {/* Filter Pills Track */}
        <div className="flex items-center gap-1.5 py-3 border-b border-white/10 overflow-x-auto no-scrollbar shrink-0 text-xs">
          {[
            { id: "all", label: "All Results", icon: <Sparkles className="w-3.5 h-3.5" /> },
            { id: "quotes", label: "Quotes", icon: <QuoteIcon className="w-3.5 h-3.5" /> },
            { id: "soliloquies", label: "Soliloquies", icon: <Flame className="w-3.5 h-3.5" /> },
            { id: "characters", label: "Characters", icon: <Crown className="w-3.5 h-3.5" /> },
            { id: "themes", label: "Themes", icon: <BookOpen className="w-3.5 h-3.5" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as SearchFilterTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-amber-500/25 text-amber-200 border border-amber-400/50 shadow-md shadow-amber-500/15"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Results Container */}
        <div
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto no-scrollbar py-2 space-y-1.5 min-h-[220px]"
        >
          {query.trim().length === 0 ? (
            /* Zero-state: High-Yield Scenes */
            <div className="p-2 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 px-1 font-bold">
                <span>Featured High-Yield Shakespearean Scenes</span>
                <span>Press ↑↓ to Navigate</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FEATURED_QUICK_JUMPS.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all cursor-pointer select-none ${
                        isSelected
                          ? "bg-amber-500/20 border-amber-400/50 text-white shadow-lg shadow-amber-500/10 scale-[1.01]"
                          : "bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                            {item.code}
                          </span>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          ) : results.length > 0 ? (
            /* Active Search Results */
            results.map((res, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={res.id}
                  onClick={() => handleSelect(res.id)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full p-3.5 rounded-2xl border text-left flex items-start justify-between gap-4 transition-all cursor-pointer select-none ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-400/50 shadow-lg shadow-amber-500/10 scale-[1.008]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-amber-300 px-2 py-0.5 rounded-lg bg-amber-500/15 border border-amber-400/30">
                        {res.actTitle} • Scene {res.displayCode}
                      </span>

                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                        {res.matchCategory}
                      </span>

                      {res.matchedSpeaker && (
                        <span className="text-[10px] font-semibold text-rose-300 px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30">
                          {res.matchedSpeaker}
                        </span>
                      )}

                      {res.actSceneLine && (
                        <span className="text-[10px] font-mono text-slate-400">
                          Lines: {res.actSceneLine}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight truncate">
                      {res.title}
                    </h4>

                    {res.quoteSnippet ? (
                      <p className="font-serif italic text-xs text-amber-200/90 leading-relaxed mt-1 line-clamp-2">
                        &ldquo;{res.quoteSnippet}&rdquo;
                      </p>
                    ) : (
                      <p className="text-xs text-slate-300 leading-relaxed mt-1 line-clamp-2 font-sans">
                        {res.snippet}
                      </p>
                    )}

                    {res.matchedThemes && res.matchedThemes.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        {res.matchedThemes.map((thm) => (
                          <span
                            key={thm}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/20 font-medium"
                          >
                            #{thm}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-center">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      Jump <CornerDownLeft className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                  </div>
                </button>
              );
            })
          ) : (
            /* No Results */
            <div className="p-8 text-center">
              <p className="text-sm text-slate-300 font-medium mb-1">
                No scenes or lines matched &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Try queries like &apos;dagger&apos;, &apos;1.7&apos;, &apos;unsex me&apos;, &apos;Banquo&apos;, or &apos;Birnam Wood&apos;.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Status Footer */}
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-white/10 text-[11px] font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-3">
            <span>
              Matches: <strong className="text-amber-300">{results.length}</strong>
            </span>
            <span>•</span>
            <span>28 Total Scenes in Folio</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Use ↑↓ to navigate</span>
            <span>•</span>
            <span>Enter to select</span>
          </div>
        </div>
      </div>
    </div>
  );
};
