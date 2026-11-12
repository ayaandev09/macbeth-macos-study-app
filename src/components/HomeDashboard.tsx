"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Layers,
  GraduationCap,
  Award,
  Network,
  Library,
  ArrowRight,
  Play,
} from "lucide-react";
import { ALL_CHAPTERS } from "@/data";
import { useStudyStore, ViewMode } from "@/store/useStudyStore";

const TILES: {
  id: ViewMode;
  title: string;
  blurb: string;
  icon: React.ReactNode;
}[] = [
  { id: "focus", title: "Scenes", blurb: "Study one scene at a time", icon: <LayoutGrid className="w-6 h-6" /> },
  { id: "stream", title: "Quick Read", blurb: "Skim the whole play fast", icon: <Layers className="w-6 h-6" /> },
  { id: "matrix", title: "Themes & Quotes", blurb: "Key themes with proof quotes", icon: <Network className="w-6 h-6" /> },
  { id: "lexicon", title: "Characters & Symbols", blurb: "Who and what to remember", icon: <Library className="w-6 h-6" /> },
  { id: "revision", title: "Revise", blurb: "Flashcards and exam practice", icon: <GraduationCap className="w-6 h-6" /> },
  { id: "paper2", title: "Paper 2 Studio", blurb: "Plan and write your essay", icon: <Award className="w-6 h-6" /> },
];

export function HomeDashboard() {
  const { setViewMode, setActiveChapter, activeChapterId, completedChapters } = useStudyStore();
  const total = ALL_CHAPTERS.length;
  const done = ALL_CHAPTERS.filter((c) => completedChapters[c.id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const current = ALL_CHAPTERS.find((c) => c.id === activeChapterId) ?? ALL_CHAPTERS[0];

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Macbeth</h1>
        <p className="text-sm text-slate-400">Pick what you want to do today.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-400 mb-1">Your progress</p>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-amber-400"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1.5">
            {done} of {total} scenes done
          </p>
        </div>
        <button
          onClick={() => {
            setActiveChapter(current.id);
            setViewMode("focus");
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold cursor-pointer transition-colors"
        >
          <Play className="w-4 h-4" />
          <span className="truncate max-w-[220px]">Continue: {current.displayCode}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TILES.map((t, i) => (
          <motion.button
            key={t.id}
            onClick={() => setViewMode(t.id)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 260, damping: 24 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="text-left rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-amber-400/40 p-5 cursor-pointer transition-colors group"
          >
            <div className="text-amber-300 mb-3">{t.icon}</div>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">{t.title}</h2>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 transition-colors" />
            </div>
            <p className="text-sm text-slate-400 mt-1">{t.blurb}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
