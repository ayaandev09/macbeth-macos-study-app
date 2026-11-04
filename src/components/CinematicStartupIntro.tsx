"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
  Target,
  BookOpen,
  Layers,
  Activity,
  Zap,
  TrendingUp,
  X,
  Compass,
  Crown
} from "lucide-react";
import { useStudyStore } from "@/store/useStudyStore";
import { ALL_CHAPTERS } from "@/data";
import { LiquidGlassLogo } from "./liquid-glass-logo";

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

    {/* Scottish Claymore Sword */}
    <g>
      <path d="M 256 90 L 264 360 L 256 385 L 248 360 Z" fill="url(#crimsonBlade)" stroke="#ffffff" strokeWidth="1" />
      <line x1="256" y1="90" x2="256" y2="370" stroke="#fef08a" strokeWidth="1.5" strokeOpacity="0.8" />
      <path d="M 210 355 C 230 360, 282 360, 302 355 L 306 367 C 282 372, 230 372, 206 367 Z" fill="url(#goldImperial)" />
      <rect x="251" y="367" width="10" height="38" rx="2" fill="#78350f" stroke="url(#goldImperial)" strokeWidth="1" />
      <circle cx="256" cy="415" r="11" fill="url(#goldImperial)" />
    </g>

    {/* Golden Imperial Crown */}
    <g>
      <path
        d="M 160 270 L 175 190 L 218 230 L 256 165 L 294 230 L 337 190 L 352 270 Z"
        fill="url(#goldImperial)"
        stroke="#fef08a"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="175" cy="186" r="5" fill="#ffffff" />
      <circle cx="218" cy="226" r="5" fill="#f43f5e" />
      <circle cx="256" cy="160" r="7" fill="#ffffff" />
      <circle cx="294" cy="226" r="5" fill="#f43f5e" />
      <circle cx="337" cy="186" r="5" fill="#ffffff" />
      <rect x="156" y="270" width="200" height="22" rx="4" fill="#78350f" stroke="url(#goldImperial)" strokeWidth="2" />
    </g>
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
  const [phase, setPhase] = useState<"enter" | "active" | "dissolve" | "done">("enter");
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [countdown, setCountdown] = useState(4);
  const isDismissingRef = useRef(false);

  // Pull live state continuously from Zustand
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

  // 2. Active study session timer
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. Butter-smooth entrance
  useEffect(() => {
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        setMounted(true);
        setPhase("active");
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isOpen]);

  // 4. Glancing countdown: 4.5s hold time to read key priorities
  useEffect(() => {
    if (!isOpen) return;
    isDismissingRef.current = false;
    let currentCount = 4;
    setCountdown(currentCount);

    const timer = setInterval(() => {
      currentCount -= 1;
      setCountdown(Math.max(0, currentCount));
      if (currentCount <= 0) {
        clearInterval(timer);
        handleDismiss();
      }
    }, 1100);

    return () => clearInterval(timer);
  }, [isOpen]);

  // 5. Space/Enter/Escape to skip
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleDismiss = () => {
    if (isDismissingRef.current) return;
    isDismissingRef.current = true;
    setPhase("dissolve");
    setTimeout(() => {
      setPhase("done");
      onClose();
      if (onComplete) onComplete();
    }, 600);
  };

  // Live syllabus metrics computation
  const totalChaptersCount = ALL_CHAPTERS.length;
  const completedCount = useMemo(() => {
    return Object.values(completedChapters).filter(Boolean).length;
  }, [completedChapters]);

  const masteryPercent =
    totalChaptersCount > 0
      ? Math.round((completedCount / totalChaptersCount) * 100)
      : 0;

  // Find the exact next scene/chapter STILL TO DO
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

  if (!isOpen || phase === "done") return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer select-none transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === "dissolve"
          ? "opacity-0 scale-[1.02] -translate-y-2 blur-[8px] pointer-events-none"
          : mounted
            ? "opacity-100 scale-100 translate-y-0 blur-0"
            : "opacity-0 scale-[0.96] translate-y-3 blur-md"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 35%, rgba(245,158,11,0.18) 0%, rgba(13,4,8,0.92) 80%)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Central Glass Study Briefing HUD */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg p-6 sm:p-7 rounded-3xl border border-amber-400/25 bg-gradient-to-br from-white/[0.08] via-slate-900/90 to-slate-950/95 shadow-[0_28px_64px_rgba(0,0,0,0.85)] flex flex-col text-left overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted && phase !== "dissolve"
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-3"
        }`}
      >
        {/* Shimmer Rim */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite] pointer-events-none" />

        {/* Authentic ReactDrops Liquid Glass Logo Showcase */}
        <div className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden relative mb-4 bg-black/70 border border-amber-400/25 shadow-2xl flex items-center justify-center">
          <LiquidGlassLogo
            logo="/logo.svg"
            ending="logo"
            theme="light"
            logoColor="original"
            background="#000000"
            depth={2.9}
            style={{ height: "100%", width: "100%", minHeight: 0 }}
          />
        </div>

        {/* Header: Logo, App Title & Live Telemetry Badge */}
        <div className="flex items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-400/35 p-1.5 flex items-center justify-center shrink-0 shadow-inner">
              <MacbethLogoSVG className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                  DUNSINANE // 1606
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Macbeth Folio Briefing
              </h1>
            </div>
          </div>

          {/* Live Continuous Sync Beacon */}
          <div className="flex flex-col items-end shrink-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[10px] font-mono text-emerald-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LIVE SYNC
            </div>
            <span className="text-[10px] font-mono text-slate-400 mt-1">
              {currentTime}
            </span>
          </div>
        </div>

        {/* Priority Card: Next Focus / What Still Needs To Be Done */}
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-400/30 mb-4 relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
              <Compass className="w-3 h-3 text-amber-400" /> Up Next • Still To Do
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {remainingChaptersCount} scenes remaining
            </span>
          </div>
          <h2 className="text-sm sm:text-base font-bold text-white mb-1 line-clamp-1">
            {nextTodoChapter?.title}
          </h2>
          <p className="text-xs text-amber-100/70 line-clamp-2 font-sans mb-3">
            {nextTodoChapter?.summary || "Continue tragic arc analysis and Jacobean thematic investigation."}
          </p>

          <button
            onClick={() => {
              if (nextTodoChapter) setActiveChapter(nextTodoChapter.id);
              handleDismiss();
            }}
            className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Jump Directly to Scene</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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

        {/* Footer: Countdown & Skip Action */}
        <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs">
          <span className="text-[11px] font-mono text-slate-400">
            Opening workspace in <span className="text-amber-300 font-bold">{countdown}s</span>...
          </span>
          <button
            onClick={handleDismiss}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Enter Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
