"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Sparkles } from "lucide-react";
import { syncWidgetSnapshot } from "@/lib/widgetBridge";

export interface RecallFlipCardProps {
  moduleCode: string;
  title: string;
  prompt: string;
  answer: string;
  accent?: string;
  secondary?: string;
  meta?: string;
}

export function RecallFlipCard({
  moduleCode,
  title,
  prompt,
  answer,
  accent = "#8B4513",
  secondary = "#800000",
  meta = "ACTIVE RECALL",
}: RecallFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => {
    setFlipped((value) => !value);
    syncWidgetSnapshot("flip");
  };

  return (
    <div
      className="relative w-full"
      style={{ perspective: "1400px" }}
      data-recall-module={moduleCode}
    >
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${flipped ? "Hide" : "Reveal"} active recall answer for ${title}`}
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 24, mass: 0.9 }}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(0)",
          WebkitTransformStyle: "preserve-3d",
        }}
        className="relative min-h-[168px] w-full cursor-pointer select-none rounded-2xl"
      >
        <div
          className="ultraThinMaterial absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl p-4"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            backgroundImage: `radial-gradient(120% 140% at 0% 0%, ${accent}33, transparent 58%), linear-gradient(145deg, rgba(255,255,255,0.06), rgba(10,10,10,0.82))`,
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <span
              className="inline-flex items-center gap-1.5 rounded-lg border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em]"
              style={{
                borderColor: `${accent}77`,
                color: "#f5d0b0",
                backgroundColor: `${accent}22`,
              }}
            >
              <Sparkles className="h-3 w-3" />
              {meta} · {moduleCode}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
              Spring 3D Flip
            </span>
          </div>

          <div className="mt-2">
            <h4 className="mb-1.5 text-sm font-bold leading-snug text-white">
              {title}
            </h4>
            <p className="line-clamp-3 text-xs leading-relaxed text-slate-200">
              {prompt}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-300">
              <RotateCcw className="h-3 w-3" style={{ color: accent }} />
              Tap to reveal model answer
            </span>
            <span
              className="rounded-full px-2 py-0.5 font-mono text-[9px] font-bold"
              style={{ backgroundColor: `${secondary}44`, color: "#ffe4d6" }}
            >
              AO1 / AO2
            </span>
          </div>
        </div>

        <div
          className="ultraThinMaterial absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl p-4"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(0)",
            backgroundImage: `radial-gradient(120% 140% at 100% 100%, ${secondary}44, transparent 60%), linear-gradient(145deg, rgba(255,255,255,0.05), rgba(12,4,2,0.9))`,
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-amber-200/90">
              Model Answer · {moduleCode}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
              Flip back
            </span>
          </div>

          <p className="mt-2 line-clamp-5 text-xs leading-relaxed text-slate-100">
            {answer}
          </p>

          <div className="mt-3 border-t border-white/10 pt-2.5">
            <span className="font-mono text-[10px]" style={{ color: accent }}>
              Tap card to return to the prompt
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
