"use client";

import React, { useState } from "react";
import {
  SYMBOLS_LEXICON,
  CHARACTERS_DOSSIER,
  SHAKESPEARE_LEXICON,
} from "@/data";
import { useStudyStore } from "@/store/useStudyStore";
import {
  Sparkles,
  Users,
  BookMarked,
  GitCompare,
  History,
  Milestone,
  Drama,
  Crown,
  BookOpen,
} from "lucide-react";
import { GlobeStageScansionLab } from "./GlobeStageScansionLab";

export function LexiconDossierView() {
  const [activeCategory, setActiveCategory] = useState<"globe" | "symbols" | "characters" | "rhetoric">("globe");
  const { searchQuery } = useStudyStore();

  const q = searchQuery.trim().toLowerCase();

  const filteredSymbols = SYMBOLS_LEXICON.filter(
    (s) =>
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.meaning.toLowerCase().includes(q) ||
      s.evolution.toLowerCase().includes(q)
  );

  const filteredCharacters = CHARACTERS_DOSSIER.filter(
    (c) =>
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q) ||
      c.psychologicalProfile.toLowerCase().includes(q)
  );

  const filteredRhetoric = SHAKESPEARE_LEXICON.filter(
    (n) =>
      !q ||
      n.term.toLowerCase().includes(q) ||
      n.literalMeaning.toLowerCase().includes(q) ||
      n.thematicFunction.toLowerCase().includes(q)
  );

  return (
    <div className="space-y-6">
      {/* Category Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-black/40 border border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider px-2">
            Jacobean Dramaturgy Module:
          </span>
          <button
            onClick={() => setActiveCategory("globe")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeCategory === "globe"
                ? "bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-white border border-amber-400/40 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Drama className="w-3.5 h-3.5 text-amber-400" />
            Globe Theatre &amp; Metric Scansion Studio
          </button>
          <button
            onClick={() => setActiveCategory("symbols")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeCategory === "symbols"
                ? "bg-gradient-to-r from-amber-500/30 to-purple-500/30 text-white border border-amber-400/40 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Symbols &amp; Props ({filteredSymbols.length})
          </button>
          <button
            onClick={() => setActiveCategory("characters")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeCategory === "characters"
                ? "bg-gradient-to-r from-rose-500/30 to-purple-500/30 text-white border border-rose-400/40 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Users className="w-3.5 h-3.5 text-rose-400" />
            Dramatis Personae Dossiers ({filteredCharacters.length})
          </button>
          <button
            onClick={() => setActiveCategory("rhetoric")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeCategory === "rhetoric"
                ? "bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-white border border-emerald-400/40 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 text-emerald-400" />
            Rhetoric &amp; Prosody Lexicon ({filteredRhetoric.length})
          </button>
        </div>
      </div>

      {/* =====================================================================
          0. GLOBE THEATRE 3D STAGE & SCANSION LAB
          ===================================================================== */}
      {activeCategory === "globe" && <GlobeStageScansionLab />}

      {activeCategory === "symbols" && (
      <section className="liquid-glass-bento rounded-3xl p-6">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h2 className="text-lg font-bold text-white font-display">
            Symbols, Stage Props & Motifs Encyclopedia ({filteredSymbols.length}
            )
          </h2>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Tracing how physical props and recurring hallucinations mutate across
          Acts I, II, III, IV, and V.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSymbols.map((sym) => (
            <div
              key={sym.id}
              className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-400/30">
                    {sym.category}
                  </span>
                  <span className="font-mono text-[10px] text-sky-300">
                    First: {sym.firstAppearance}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {sym.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
                  {sym.meaning}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 block mb-1">
                  Evolution Across Acts I → V
                </span>
                <p className="text-xs text-slate-200/90 leading-relaxed">
                  {sym.evolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      )}

      {/* =====================================================================
          2. DRAMATIS PERSONAE PSYCHOLOGICAL DOSSIERS
          ===================================================================== */}
      {activeCategory === "characters" && (
      <section className="liquid-glass-bento rounded-3xl p-6">
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-4 h-4 text-rose-400" />
          <h2 className="text-lg font-bold text-white font-display">
            Dramatis Personae Psychological Dossiers (
            {filteredCharacters.length})
          </h2>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Allegiance, tragic trajectory, and structural foil relationships for
          every major figure in Macbeth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredCharacters.map((char) => (
            <div
              key={char.id}
              className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-300 border border-rose-400/30">
                    {char.factionStatus}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">{char.name}</h3>
                <p className="text-xs font-mono text-amber-300/90 mb-3">
                  {char.role}
                </p>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-slate-400 block">
                      Psychological Profile & Trajectory
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {char.psychologicalProfile}
                    </p>
                  </div>

                  {/* Tragic Flaw / Hamartia */}
                  {char.tragicFlaw && (
                    <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-400/30">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-rose-300 block mb-0.5">
                        Tragic Flaw (Hamartia)
                      </span>
                      <p className="text-rose-100 text-[11px] leading-relaxed">
                        {char.tragicFlaw}
                      </p>
                    </div>
                  )}

                  {/* Structural Foil Comparisons */}
                  {char.foilComparisons && char.foilComparisons.length > 0 && (
                    <div className="p-2.5 rounded-xl bg-amber-500/[0.08] border border-amber-400/25">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-amber-300 flex items-center gap-1.5 mb-1.5">
                        <GitCompare className="w-3 h-3 text-amber-400" />
                        Foil Comparisons & Structural Counterpoints
                      </span>
                      <div className="space-y-1.5">
                        {char.foilComparisons.map((foil, idx) => (
                          <div
                            key={idx}
                            className="p-1.5 rounded-lg bg-black/25 border border-white/[0.06] text-[11px]"
                          >
                            <span className="font-semibold text-amber-200">
                              vs. {foil.foilName}:{" "}
                            </span>
                            <span className="text-slate-300">{foil.distinction}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Raphael Holinshed Chronicles Historical Context */}
                  {char.holinshedDivergence && (
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/25">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-purple-300 flex items-center gap-1.5 mb-0.5">
                        <History className="w-3 h-3 text-purple-400" />
                        Holinshed Chronicles Divergence (1577/1587)
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {char.holinshedDivergence}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase text-rose-300 block">
                    Tragic Fate & Outcome
                  </span>
                  <p className="text-slate-300 leading-relaxed">{char.fate}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-emerald-300 block">
                    Symbolic & Structural Function
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {char.symbolicFunction}
                  </p>
                </div>

                {/* Act-by-Act Chronological Arc Milestones Disclosure */}
                {char.arcMilestones && char.arcMilestones.length > 0 && (
                  <details className="pt-2 border-t border-white/[0.06] group text-xs">
                    <summary className="font-mono text-[10px] text-amber-300/90 hover:text-amber-200 cursor-pointer list-none select-none flex items-center justify-between py-1">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Milestone className="w-3 h-3 text-amber-400" />
                        Act-by-Act Progression ({char.arcMilestones.length} Milestones)
                      </span>
                      <span className="text-[10px] text-slate-400 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>

                    <div className="mt-2.5 space-y-2">
                      {char.arcMilestones.map((ms, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-1"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                              {ms.act} • {ms.stage}
                            </span>
                            <span className="font-serif italic text-[10px] text-amber-200/90 truncate max-w-[140px]">
                              {ms.quoteRef}
                            </span>
                          </div>
                          <h5 className="font-semibold text-white text-[11px]">{ms.title}</h5>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            {ms.analysis}
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      )}

      {/* =====================================================================
          3. SHAKESPEAREAN RHETORIC, PROSODY & JACOBEAN COSMOLOGY LEXICON
          ===================================================================== */}
      {activeCategory === "rhetoric" && (
      <section className="liquid-glass-bento rounded-3xl p-6">
        <div className="flex items-center gap-2 mb-1">
          <BookMarked className="w-4 h-4 text-emerald-400" />
          <h2 className="text-lg font-bold text-white font-display">
            Rhetoric, Prosody & Jacobean Cosmology Lexicon (
            {filteredRhetoric.length})
          </h2>
        </div>
        <p className="text-xs text-slate-400 mb-5">
          Essential analytical vocabulary for dissecting meter, equivocation,
          and Jacobean statecraft in exams and essays.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
          {filteredRhetoric.map((item) => (
            <div
              key={item.term}
              className="p-4 rounded-2xl bg-slate-950/65 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-sm font-bold text-amber-300">
                    {item.term}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed mb-3">
                  {item.literalMeaning}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/[0.07]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 block mb-0.5">
                  Dramatic & Essay Function
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.thematicFunction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}
    </div>
  );
}
