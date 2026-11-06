"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  Zap,
  TrendingUp,
  X,
  Layers,
  Crown
} from "lucide-react";
import { useStudyStore } from "@/store/useStudyStore";
import { ALL_CHAPTERS } from "@/data";
import { MacbethAppLogo } from "./MacbethAppLogo";

/**
 * Macbeth Dedicated Vector Logo Emblem
 */
const MacbethLogoSVG: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    fill="none"
  >
    <defs>
      <radialGradient id="macbethGlow" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
        <stop offset="45%" stopColor="#e11d48" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="goldImperial" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="40%" stopColor="#f59e0b" />
        <stop offset="80%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="crimsonBlade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="30%" stopColor="#e11d48" />
        <stop offset="70%" stopColor="#9f1239" />
        <stop offset="100%" stopColor="#4c0519" />
      </linearGradient>
    </defs>

    {/* Royal Shield Ring */}
    <circle cx="256" cy="256" r="236" fill="url(#macbethGlow)" />
    <circle cx="256" cy="256" r="220" fill="#0d0408" stroke="url(#goldImperial)" strokeWidth="4" strokeOpacity="0.9" />
    <circle cx="256" cy="256" r="206" fill="none" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.4" />
  </svg>
);

interface CinematicStartupIntroProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
}

export const CinematicStartupIntro: React.FC<CinematicStartupIntroProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [currentTime, setCurrentTime] = useState("");
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [countdown, setCountdown] = useState(6);
  const [isDismissing, setIsDismissing] = useState(false);
  const isDismissingRef = useRef(false);

  const { completedChapters, activeChapterId, setActiveChapter } = useStudyStore();

  // 1. Live real-time digital clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Study Session Stop-Watch
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Reset dismissing lock whenever intro becomes active
  useEffect(() => {
    if (isOpen) {
      isDismissingRef.current = false;
      setCountdown(6);
    }
  }, [isOpen]);

  // Unified dismiss logic
  const handleDismiss = useCallback(() => {
    if (isDismissingRef.current) return;
    isDismissingRef.current = true;
    onClose();
    onComplete?.();
  }, [onClose, onComplete]);

  // 3. Luxurious Fluid Countdown (6 seconds for full liquid glass immersion)
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleDismiss();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, handleDismiss]);

  // Keyboard shortcut listener (Space, Enter, Esc)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleDismiss]);

  // Calculate live study metrics
  const totalChaptersCount = ALL_CHAPTERS.length;
  const completedCount = useMemo(() => {
    return Object.values(completedChapters).filter(Boolean).length;
  }, [completedChapters]);

  const masteryPercent =
    totalChaptersCount > 0
      ? Math.round((completedCount / totalChaptersCount) * 100)
      : 0;

  // Find the exact next scene STILL TO DO
  const nextTodoChapter = useMemo(() => {
    const uncompleted = ALL_CHAPTERS.find((c) => !completedChapters[c.id]);
    if (uncompleted) return uncompleted;
    return ALL_CHAPTERS.find((c) => c.id === activeChapterId) || ALL_CHAPTERS[0];
  }, [completedChapters, activeChapterId]);

  const remainingChaptersCount = totalChaptersCount - completedCount;
  const estimatedMins = remainingChaptersCount * 10;

  const formattedSessionTime = useMemo(() => {
    const mins = Math.floor(sessionSeconds / 60);
    const secs = sessionSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, [sessionSeconds]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={handleDismiss}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 select-none bg-[#090306] backdrop-blur-2xl overflow-hidden cursor-pointer"
      style={{
        background:
          "radial-gradient(circle at 50% 35%, rgba(245,158,11,0.22) 0%, rgba(9,3,6,0.98) 75%)",
        willChange: "opacity",
      }}
    >
      {/* Central Liquid Glass Briefing HUD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{
          opacity: 0,
          scale: 0.98,
          y: -10,
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-6 sm:p-7 rounded-[2rem] border border-white/12 ring-1 ring-inset ring-white/10 bg-white/[0.04] dark:bg-black/55 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_0_24px_rgba(255,255,255,0.03)] flex flex-col text-left overflow-hidden cursor-default"
      >
        {/* Specular Ambient Reflection Sheen */}
        <div className="absolute inset-x-0 top-0 h-32 rounded-t-[2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent pointer-events-none" />

        {/* Authentic Royal Scottish Insignia Showcase - Mesmerizing Liquid Glass Animation */}
        <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden relative mb-4 bg-gradient-to-b from-black/90 via-black/75 to-[#12050c] border border-amber-400/40 shadow-2xl flex items-center justify-center p-4 relative">
          {/* Rotating Ambient Caustic Liquid Halo (120 FPS Metal GPU Composited) */}
          <div
            className="absolute w-60 h-60 rounded-full pointer-events-none liquid-caustic-halo"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.32) 0%, rgba(225,29,72,0.18) 45%, transparent 70%)",
            }}
          />

          {/* Liquid Glass Breathing Emblem */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 relative z-10 flex items-center justify-center liquid-logo-float">
            <MacbethAppLogo className="w-full h-full object-contain filter drop-shadow-[0_0_32px_rgba(245,158,11,0.65)]" />

            {/* Slow Sweeping Liquid Glass Refraction Sheen Beam */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div
                className="w-full h-full liquid-glass-sheen"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)",
                }}
              />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping pointer-events-none" />
          </div>
        </div>

        {/* App Title & Status Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300">
                MACBETH // FOLIO 1623
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[9px] font-mono text-amber-200">
                CRITICAL EDITION
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2 mt-0.5 font-serif">
              <span>Macbeth Literary Codex</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </h1>
          </div>
          <div className="text-right font-mono">
            <span className="text-[10px] text-slate-400 block">SYSTEM TIME</span>
            <span className="text-xs font-bold text-slate-200">
              {currentTime || "00:00:00"}
            </span>
          </div>
        </div>

        {/* Dynamic Focus Milestone Card (Up Next • Still To Do) */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/20 mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
              <Compass className="w-3 h-3 text-amber-400" /> Up Next • Still To Do
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {remainingChaptersCount} scenes remaining
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white mb-1 line-clamp-1 font-serif">
            {nextTodoChapter?.title}
          </h2>
          <p className="text-xs text-amber-100/70 line-clamp-2 font-sans mb-3">
            {nextTodoChapter?.summary || "Continue tragic arc analysis and Jacobean thematic investigation."}
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (nextTodoChapter) setActiveChapter(nextTodoChapter.id);
              handleDismiss();
            }}
            className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Jump Directly to Scene</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Bento Status Grid: Syllabus Progress & Study Pulse */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
          {/* Progress Box */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-2">
              <span>MASTERY</span>
              <span className="text-amber-300 font-bold">{masteryPercent}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-500"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
            <span className="text-slate-300 text-[11px] font-bold">
              {completedCount} / {totalChaptersCount} Done
            </span>
          </div>

          {/* Time & Session Box */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 text-[10px] mb-1">
              <span>PACE</span>
              <span className="text-rose-300">~{estimatedMins}m left</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-200 text-[11px] font-semibold my-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Session: {formattedSessionTime}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">
              ● Folio 1623 Verified
            </span>
          </div>
        </div>

        {/* High-Yield Recall Anchor */}
        <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 mb-4 text-[11px]">
          <span className="text-amber-300 font-bold font-mono text-[10px] uppercase block mb-0.5">
            Key Shakespearean Anchor
          </span>
          <p className="text-slate-300 italic font-serif leading-snug line-clamp-2">
            “Look like th&apos; innocent flower, but be the serpent under &apos;t. (AO2 Biblical Subversion)”
          </p>
        </div>

        {/* Footer: Countdown with Liquid Progress Track & Skip Action */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-slate-400">
              Opening in <span className="text-amber-300 font-bold font-mono">{countdown}s</span>
            </span>
            <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden hidden sm:block">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleDismiss}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md soft-button"
          >
            <span>Enter Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
