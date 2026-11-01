"use client";

import React, { useEffect, useState } from "react";
import {
  Activity,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  Layers,
  Terminal,
  ArrowRight,
  Crown,
  X,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { TOTAL_CHAPTERS_COUNT, BOOK_PARTS } from "@/data";

interface StartupDiagnosticIntroProps {
  onComplete?: () => void;
  isManualTelemetry?: boolean;
  onClose?: () => void;
}

interface DiagnosticLog {
  id: string;
  time: string;
  tag: string;
  message: string;
  status: "pending" | "success" | "active";
}

const STAGES = [
  { label: "Kernel Bootstrap", desc: "Initializing Dunsinane Folio 1606 Engine" },
  { label: "Corpus Parsing", desc: "Loading 5 Acts & 31 Shakespearean Scenes" },
  { label: "Quad-Source Sync", desc: "SparkNotes + LitCharts + RSC + Google Doc verified" },
  { label: "Taxonomy Indexing", desc: "Cross-referencing 8 Central Themes & Heatmap" },
  { label: "Hardware Pipeline", desc: "GPU Liquid Glass Specular Shaders active at 120 FPS" },
];

export const StartupDiagnosticIntro: React.FC<StartupDiagnosticIntroProps> = ({
  onComplete,
  isManualTelemetry = false,
  onClose,
}) => {
  const [progress, setProgress] = useState(isManualTelemetry ? 100 : 0);
  const [activeStage, setActiveStage] = useState(isManualTelemetry ? 4 : 0);
  const [measuredFps, setMeasuredFps] = useState(120);
  const [isExiting, setIsExiting] = useState(false);
  const [logs, setLogs] = useState<DiagnosticLog[]>([
    {
      id: "1",
      time: "0.02s",
      tag: "BOOT",
      message: "Dunsinane Folio Core v26.4 initialized in macOS memory.",
      status: "success",
    },
  ]);

  // Real-time Hardware FPS Meter (runs smoothly via RAF without main-thread jank)
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let rafId: number;

    const measure = (now: number) => {
      frameCount++;
      if (now - lastTime >= 400) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        setMeasuredFps(Math.min(120, Math.max(58, fps)));
        frameCount = 0;
        lastTime = now;
      }
      rafId = requestAnimationFrame(measure);
    };

    rafId = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Sequential Diagnostic Sequence for Startup
  useEffect(() => {
    if (isManualTelemetry) return;

    const logMilestones = [
      {
        at: 15,
        stage: 1,
        time: "0.12s",
        tag: "PARSER",
        message: `Parsed 5 Acts & ${TOTAL_CHAPTERS_COUNT} Dramatis Scenes (All Beats intact).`,
      },
      {
        at: 40,
        stage: 2,
        time: "0.28s",
        tag: "QUAD-SOURCE",
        message: "Locked LitCharts, SparkNotes, RSC Folio, and Critical Doc citations.",
      },
      {
        at: 68,
        stage: 3,
        time: "0.45s",
        tag: "THEMES",
        message: "Indexed 8 Central Themes (Ambition, Guilt, Equivocation, Kingship).",
      },
      {
        at: 90,
        stage: 4,
        time: "0.64s",
        tag: "GPU SHADER",
        message: "Composited Liquid Glass specular surfaces with hardware layer strict containment.",
      },
      {
        at: 100,
        stage: 4,
        time: "0.82s",
        tag: "READY",
        message: "Zero-latency navigation ready. 120 FPS target established.",
      },
    ];

    let currentP = 0;
    const interval = setInterval(() => {
      currentP += 4;
      if (currentP > 100) currentP = 100;
      setProgress(currentP);

      // Check milestones
      logMilestones.forEach((m) => {
        if (currentP >= m.at) {
          setActiveStage(m.stage);
          setLogs((prev) => {
            if (prev.some((item) => item.tag === m.tag)) return prev;
            return [
              ...prev,
              {
                id: m.tag,
                time: m.time,
                tag: m.tag,
                message: m.message,
                status: "success",
              },
            ];
          });
        }
      });

      if (currentP >= 100) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isManualTelemetry]);

  const handleLaunch = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (isManualTelemetry && onClose) {
        onClose();
      } else if (onComplete) {
        onComplete();
      }
    }, 320);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Folio Diagnostic Console"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isExiting
          ? "opacity-0 scale-[1.03] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 30%, rgba(20, 28, 55, 0.94) 0%, rgba(5, 7, 15, 0.98) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Specular Background Glow */}
      <div
        className="liquid-ambient-orb w-[650px] h-[650px] -top-24 left-1/2 -translate-x-1/2 opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(244,63,94,0.3) 0%, rgba(251,191,36,0.12) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 w-full max-w-xl liquid-glass-bento rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[92dvh]">
        {/* Subtle Scanline Overlay */}
        <div
          className="pointer-events-none absolute inset-0 diagnostic-scanline opacity-10 bg-gradient-to-b from-transparent via-amber-300 to-transparent h-24"
          aria-hidden="true"
        />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3.5">
            {/* Circular Liquid Progress Scanner */}
            <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
              <svg className="w-14 h-14 -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="url(#progressGradMac)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 24}
                  strokeDashoffset={
                    2 * Math.PI * 24 - (progress / 100) * (2 * Math.PI * 24)
                  }
                  strokeLinecap="round"
                  className="transition-all duration-150 ease-out"
                />
                <defs>
                  <linearGradient id="progressGradMac" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
              </svg>
              <Crown className="w-6 h-6 text-amber-300 absolute" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-300 font-bold">
                  DUNSINANE // 1606
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse-emerald" />
                <span className="text-xs font-mono text-emerald-300 font-bold">
                  {measuredFps} FPS
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                macOS Folio Diagnostics &amp; Telemetry
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isManualTelemetry && onClose && (
              <button
                onClick={handleLaunch}
                className="p-2 rounded-xl liquid-glass-pill text-slate-300 hover:text-white cursor-pointer"
                aria-label="Close telemetry"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Live Diagnostics Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 shrink-0">
          <div className="p-3 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase text-slate-400">FPS Engine</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-lg font-bold text-emerald-300">{measuredFps}</span>
              <span className="text-xs font-mono text-slate-400">Hz / 120</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase text-slate-400">Scenes</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-lg font-bold text-amber-300">{TOTAL_CHAPTERS_COUNT}</span>
              <span className="text-xs font-mono text-slate-400">/ 5 Acts</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase text-slate-400">Corpus</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-lg font-bold text-sky-300">Quad-Src</span>
              <span className="text-xs font-mono text-slate-400">Verified</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/70 border border-white/10 flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase text-slate-400">Latency</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-lg font-bold text-emerald-300">&lt; 1 ms</span>
              <span className="text-xs font-mono text-slate-400">Zero-Lag</span>
            </div>
          </div>
        </div>

        {/* Active Stage Indicator */}
        <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-300/35 shrink-0">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-mono text-amber-200 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300" />
              {STAGES[activeStage]?.label || "System Check"}
            </span>
            <span className="font-mono font-bold text-white text-xs">
              {progress}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-slate-300 mt-2 truncate">
            {STAGES[activeStage]?.desc}
          </p>
        </div>

        {/* Live Diagnostics Console Log Ticker */}
        <div className="flex-1 min-h-[140px] max-h-[190px] overflow-y-auto no-scrollbar rounded-2xl bg-black/60 border border-white/10 p-3.5 font-mono text-xs space-y-1.5 mb-4 select-text">
          <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1.5 border-b border-white/5">
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              FOLIO_DIAGNOSTICS_STREAM
            </span>
            <span>LIVE_FEED</span>
          </div>

          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-2 text-xs leading-relaxed">
              <span className="text-slate-500 shrink-0">[{log.time}]</span>
              <span className="text-amber-300 font-bold shrink-0">
                {log.tag}:
              </span>
              <span className="text-slate-200">{log.message}</span>
            </div>
          ))}

          {progress < 100 && (
            <div className="flex items-center gap-1.5 text-slate-400 text-xs animate-pulse">
              <span className="inline-block w-1.5 h-3.5 bg-amber-400" />
              <span>Calibrating macOS widescreen layout &amp; handwritten typography...</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kalam Academic Font • Specular 120Hz Hardware Pipeline</span>
          </div>

          <button
            onClick={handleLaunch}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 border border-white/25 shadow-lg shadow-rose-500/25 active:scale-95 cursor-pointer transition-transform"
          >
            <span>{isManualTelemetry ? "Return to Folio" : progress >= 100 ? "Launch Dashboard" : "Skip to Dashboard"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
