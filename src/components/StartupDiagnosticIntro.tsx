"use client";

import React, { useEffect, useState } from "react";
import {
  Activity,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Crown,
  X,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Theater,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { TOTAL_CHAPTERS_COUNT } from "@/data";

interface StartupDiagnosticIntroProps {
  onComplete?: () => void;
  isManualTelemetry?: boolean;
  onClose?: () => void;
}

interface DramaticBeat {
  actNumber: number;
  actRoman: string;
  actTitle: string;
  sceneRef: string;
  speaker: string;
  setting: string;
  quotation: string;
  criticalAnalysis: string;
  dramaticTheme: string;
  themeBadgeBg: string;
  themeBadgeText: string;
  glowColor: string;
  telemetryData: {
    scenes: string;
    keyMotif: string;
    hamartiaStage: string;
  };
}

const DRAMATIC_BEATS: DramaticBeat[] = [
  {
    actNumber: 1,
    actRoman: "I",
    actTitle: "The Prophecy & Moral Inversion",
    sceneRef: "Act I, Scene 1 (Lines 11–12)",
    speaker: "The Three Weird Sisters",
    setting: "An Open Heath in Thunder and Lightning",
    quotation:
      "Fair is foul, and foul is fair: Hover through the fog and filthy air.",
    criticalAnalysis:
      "Shakespeare inverts the moral cosmos in the opening 12 lines. The iconic chiasmus establishes the tragedy's foundational paradox: heroic military honor and treacherous regicide are born of the exact same ambition.",
    dramaticTheme: "Equivocation & Moral Ambiguity",
    themeBadgeBg: "bg-amber-500/20 border-amber-400/40",
    themeBadgeText: "text-amber-300",
    glowColor: "rgba(251, 191, 36, 0.28)",
    telemetryData: {
      scenes: "Scenes 1.1 ➔ 1.7 (7 Scenes)",
      keyMotif: "Vaulting Ambition & Prophecy",
      hamartiaStage: "Temptation & Moral Compromise",
    },
  },
  {
    actNumber: 2,
    actRoman: "II",
    actTitle: "The Hallucination & Regicide",
    sceneRef: "Act II, Scene 1 (Lines 33–34)",
    speaker: "Macbeth (Solo Soliloquy)",
    setting: "Courtyard of Inverness Castle at Midnight",
    quotation:
      "Is this a dagger which I see before me, the handle toward my hand? Come, let me clutch thee.",
    criticalAnalysis:
      "The floating dagger marks the psychological threshold where external demonic temptation transforms into an internal fever of the 'heat-oppressed brain'. Once Duncan's blood is spilled, order irreversibly disintegrates.",
    dramaticTheme: "Psychological Delirium & Guilt",
    themeBadgeBg: "bg-rose-500/20 border-rose-400/40",
    themeBadgeText: "text-rose-300",
    glowColor: "rgba(244, 63, 94, 0.32)",
    telemetryData: {
      scenes: "Scenes 2.1 ➔ 2.4 (4 Scenes)",
      keyMotif: "The Dagger & Unwashable Blood",
      hamartiaStage: "The Fatal Act of Regicide",
    },
  },
  {
    actNumber: 3,
    actRoman: "III",
    actTitle: "The Ghostly Banquet & Paranoia",
    sceneRef: "Act III, Scene 4 (Lines 50–51)",
    speaker: "Macbeth to the Specter",
    setting: "The State Dining Hall in Forres Palace",
    quotation:
      "Thou canst not say I did it: never shake thy gory locks at me.",
    criticalAnalysis:
      "Having seized the crown, Macbeth inherits a 'fruitless crown and barren sceptre'. Banquo's silent ghost occupies the royal throne, proving that tyranny breeds eternal insomnia and fractures the psyche beyond repair.",
    dramaticTheme: "Tyranny & Incurable Insomnia",
    themeBadgeBg: "bg-purple-500/20 border-purple-400/40",
    themeBadgeText: "text-purple-300",
    glowColor: "rgba(168, 85, 247, 0.28)",
    telemetryData: {
      scenes: "Scenes 3.1 ➔ 3.6 (6 Scenes)",
      keyMotif: "Banquo's Line & Fruitless Crown",
      hamartiaStage: "Paranoid Despotism",
    },
  },
  {
    actNumber: 4,
    actRoman: "IV",
    actTitle: "The Cauldron & False Security",
    sceneRef: "Act IV, Scene 1 (Lines 10–11)",
    speaker: "Witches at the Cauldron",
    setting: "A Cavern with Boiling Cauldron",
    quotation:
      "Double, double toil and trouble; Fire burn, and cauldron bubble.",
    criticalAnalysis:
      "The Weird Sisters weaponize equivocation. By granting apparitions of false invulnerability ('none of woman born', 'Birnam Wood'), they lure Macbeth into blind overconfidence, masking Scotland's descent into butchery.",
    dramaticTheme: "Supernatural Deception & Tyranny",
    themeBadgeBg: "bg-emerald-500/20 border-emerald-400/40",
    themeBadgeText: "text-emerald-300",
    glowColor: "rgba(52, 211, 153, 0.26)",
    telemetryData: {
      scenes: "Scenes 4.1 ➔ 4.3 (3 Scenes)",
      keyMotif: "The Apparitions & Macduff's Vow",
      hamartiaStage: "Hubristic False Security",
    },
  },
  {
    actNumber: 5,
    actRoman: "V",
    actTitle: "Existential Tragedy & Catharsis",
    sceneRef: "Act V, Scene 5 (Lines 24–26)",
    speaker: "Macbeth at Dunsinane",
    setting: "Within Dunsinane Castle under Siege",
    quotation:
      "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage, and then is heard no more.",
    criticalAnalysis:
      "The pinnacle of Shakespearean existential nihilism. Stripped of honor, love, and humanity, Macbeth perceives life as 'a tale told by an idiot, full of sound and fury, signifying nothing', achieving tragic catharsis in his final defiance.",
    dramaticTheme: "Cosmic Nihilism & The End of Time",
    themeBadgeBg: "bg-sky-500/20 border-sky-400/40",
    themeBadgeText: "text-sky-300",
    glowColor: "rgba(56, 189, 248, 0.28)",
    telemetryData: {
      scenes: "Scenes 5.1 ➔ 5.11 (11 Scenes)",
      keyMotif: "Birnam Wood & Tragic Fall",
      hamartiaStage: "Defiant Doom & Moral Restoration",
    },
  },
];

export const StartupDiagnosticIntro: React.FC<StartupDiagnosticIntroProps> = ({
  onComplete,
  isManualTelemetry = false,
  onClose,
}) => {
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [measuredFps, setMeasuredFps] = useState(120);
  const [isExiting, setIsExiting] = useState(false);
  const [beatProgress, setBeatProgress] = useState(0);
  const [showFullModal, setShowFullModal] = useState(isManualTelemetry);

  const activeBeat = DRAMATIC_BEATS[activeBeatIndex];

  // Auto-dismiss the non-blocking startup telemetry capsule after 5.2s
  useEffect(() => {
    if (!isManualTelemetry && !showFullModal) {
      const timer = setTimeout(() => {
        handleLaunch();
      }, 5200);
      return () => clearTimeout(timer);
    }
  }, [isManualTelemetry, showFullModal]);

  // Real-time Hardware FPS Meter (RAF-based compositor frequency)
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

  // Smooth Auto-Advancement Timer with Beat Progress
  useEffect(() => {
    if (isPaused) return;

    const DURATION_MS = 5200;
    const STEP_MS = 50;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += STEP_MS;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setBeatProgress(pct);

      if (elapsed >= DURATION_MS) {
        clearInterval(interval);
        goToNextBeat();
      }
    }, STEP_MS);

    return () => clearInterval(interval);
  }, [activeBeatIndex, isPaused]);

  const changeBeat = (newIndex: number) => {
    if (isTransitioning || newIndex === activeBeatIndex) return;
    setIsTransitioning(true);
    setBeatProgress(0);

    setTimeout(() => {
      setActiveBeatIndex(newIndex);
      setIsTransitioning(false);
    }, 200);
  };

  const goToNextBeat = () => {
    if (activeBeatIndex < DRAMATIC_BEATS.length - 1) {
      changeBeat(activeBeatIndex + 1);
    } else {
      changeBeat(0);
    }
  };

  const goToPrevBeat = () => {
    if (activeBeatIndex > 0) {
      changeBeat(activeBeatIndex - 1);
    } else {
      changeBeat(DRAMATIC_BEATS.length - 1);
    }
  };

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

  if (!showFullModal) {
    return (
      <aside
        aria-label="Liquid Glass Startup Telemetry Capsule"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExiting
            ? "opacity-0 -translate-y-6 scale-90 pointer-events-none"
            : "liquid-jelly-enter"
        }`}
      >
        <div className="liquid-glass-dock rounded-full px-4 py-2 flex items-center gap-3.5 shadow-2xl border border-amber-300/40 bg-slate-950/85 backdrop-blur-2xl liquid-pulse-rim">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500/30 via-rose-500/30 to-purple-500/30 border border-amber-300/40 flex items-center justify-center shrink-0">
            <Crown className="w-4 h-4 text-amber-300 animate-pulse" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                DUNSINANE // 1606
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[10px] text-emerald-300 font-bold">
                {measuredFps} FPS // 0.4ms
              </span>
            </div>
            <span className="text-[11px] text-slate-300 font-medium">
              31 First Folio Scenes • Native Liquid Glass Active
            </span>
          </div>

          <div className="flex items-center gap-1.5 pl-2 border-l border-white/15">
            <button
              onClick={() => setShowFullModal(true)}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 cursor-pointer"
            >
              Tour Beats
            </button>
            <button
              onClick={handleLaunch}
              className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all active:scale-90 cursor-pointer"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Folio Dramatic Prologue and Diagnostics"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isExiting
          ? "opacity-0 scale-[1.025] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 35%, rgba(18, 25, 48, 0.95) 0%, rgba(5, 7, 15, 0.98) 100%)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Specular Ambient Glow that Shifts with the Dramatic Mood */}
      <div
        className="liquid-ambient-orb w-[680px] h-[680px] -top-24 left-1/2 -translate-x-1/2 transition-colors duration-700 ease-out opacity-45 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${activeBeat.glowColor} 0%, rgba(14,21,46,0.05) 65%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-2xl liquid-glass-bento rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[94dvh]">
        {/* Subtle Hardware Scanline Beam */}
        <div
          className="pointer-events-none absolute inset-0 diagnostic-scanline opacity-10 bg-gradient-to-b from-transparent via-amber-300 to-transparent h-24"
          aria-hidden="true"
        />

        {/* Top Header: Scottish Crown & Live Diagnostics Telemetry */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500/30 via-amber-500/25 to-emerald-500/25 border border-white/20 flex items-center justify-center shadow-inner shrink-0 overflow-hidden p-1.5">
              <img src="/logo.svg" alt="Dunsinane Royal Crown Logo" className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-amber-300 font-bold">
                  DUNSINANE // 1606
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse-emerald" />
                <span className="text-xs font-mono text-emerald-300 font-bold">
                  {measuredFps} FPS
                </span>
                <span className="text-xs font-mono text-slate-400">
                  • 0.8ms Hardware Latency
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-display">
                macOS Folio Dramatic Prologue &amp; Diagnostics
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume auto-play" : "Pause on this quote"}
              className="p-2.5 rounded-xl liquid-glass-pill text-slate-300 hover:text-amber-300 active:scale-95 cursor-pointer"
            >
              {isPaused ? (
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              ) : (
                <Pause className="w-4 h-4 text-slate-300" />
              )}
            </button>

            {isManualTelemetry && onClose && (
              <button
                onClick={handleLaunch}
                className="p-2.5 rounded-xl liquid-glass-pill text-slate-300 hover:text-white cursor-pointer"
                aria-label="Close telemetry"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 5-Act Segmented Ribbon Scrubber */}
        <div className="space-y-2 mb-4 shrink-0">
          <div className="grid grid-cols-5 gap-1.5">
            {DRAMATIC_BEATS.map((beat, idx) => {
              const isCurrent = idx === activeBeatIndex;
              return (
                <button
                  key={beat.actRoman}
                  onClick={() => changeBeat(idx)}
                  className={`py-2 px-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer truncate ${
                    isCurrent
                      ? "bg-amber-400/25 text-amber-200 border border-amber-300/60 shadow-sm"
                      : "liquid-glass-pill text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Act {beat.actRoman}: {beat.actTitle.split(" ")[1] || beat.actRoman}
                </button>
              );
            })}
          </div>

          {/* Micro Progress Bar for Current Beat */}
          <div className="w-full h-1.5 rounded-full bg-slate-900/90 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-emerald-400 transition-all duration-75"
              style={{ width: `${beatProgress}%` }}
            />
          </div>
        </div>

        {/* Main Meaningful Literary Beat Container (Smooth Hardware Fade In/Out) */}
        <div className="flex-1 min-h-[250px] flex flex-col justify-between overflow-y-auto no-scrollbar">
          <div
            className={`transition-all duration-200 ${
              isTransitioning
                ? "literary-fade-out"
                : "literary-fade-in"
            }`}
          >
            {/* Act & Scene Context Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-sm text-amber-300 font-mono">
                <Theater className="w-4 h-4" />
                <span className="font-bold">Act {activeBeat.actRoman}: {activeBeat.actTitle}</span>
              </div>

              <span
                className={`text-xs font-semibold font-mono px-2.5 py-0.5 rounded-full border ${activeBeat.themeBadgeBg} ${activeBeat.themeBadgeText}`}
              >
                {activeBeat.dramaticTheme}
              </span>
            </div>

            {/* Quotation Hero Card with Golden Quotation Marks */}
            <div className="relative p-5 rounded-2xl bg-black/40 border border-white/10 mb-3.5 shadow-inner">
              <span className="absolute -top-4 left-4 text-4xl font-serif text-amber-400/40 select-none">
                &ldquo;
              </span>
              <blockquote className="font-serif italic text-base sm:text-lg font-semibold text-amber-100 leading-relaxed pl-1 tracking-tight">
                {activeBeat.quotation}
              </blockquote>
              <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-white/5 text-xs text-slate-400 font-mono">
                <span>{activeBeat.speaker}</span>
                <span className="text-amber-200/90">{activeBeat.sceneRef}</span>
              </div>
            </div>

            {/* Critical Academic Significance & Analysis */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Dramatic Significance &amp; Close Reading</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeBeat.criticalAnalysis}
              </p>
            </div>

            {/* Telemetry Footprint for this Act */}
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="px-3 py-2 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">Folio Scenes:</span>
                <span className="text-emerald-300 font-semibold">{activeBeat.telemetryData.scenes}</span>
              </div>
              <div className="px-3 py-2 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between">
                <span className="text-slate-400">Hamartia:</span>
                <span className="text-amber-200 font-semibold truncate ml-1">{activeBeat.telemetryData.hamartiaStage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Launch Bar */}
        <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevBeat}
              title="Previous dramatic insight"
              className="p-2 rounded-xl liquid-glass-pill text-slate-300 hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 font-bold px-1.5">
              {activeBeatIndex + 1} / {DRAMATIC_BEATS.length}
            </span>
            <button
              onClick={goToNextBeat}
              title="Next dramatic insight"
              className="p-2 rounded-xl liquid-glass-pill text-slate-300 hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleLaunch}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 border border-white/25 shadow-lg shadow-rose-500/25 active:scale-95 cursor-pointer transition-transform"
          >
            <span>{isManualTelemetry ? "Return to Folio" : "Enter Folio Dashboard"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
