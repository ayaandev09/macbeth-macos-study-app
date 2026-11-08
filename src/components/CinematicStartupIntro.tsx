"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { LiquidGlassLogo } from "./liquid-glass-logo";

const APP_LOGO_SVG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0ibm9uZSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im1iR29sZEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmVmMDhhIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjI1JSIgc3RvcC1jb2xvcj0iI2Y1OWUwYiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2NSUiIHN0b3AtY29sb3I9IiNkOTc3MDYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzkyNDAwZSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9Im1iR29sZEF1cmEiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmNTllMGIiIHN0b3Atb3BhY2l0eT0iMC40IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iI2Q5NzcwNiIgc3RvcC1vcGFjaXR5PSIwLjE1IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM5MjQwMGUiIHN0b3Atb3BhY2l0eT0iMCIgLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9Im1iQ3JpbXNvbkdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZiNzE4NSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIzNSUiIHN0b3AtY29sb3I9IiNlMTFkNDgiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjOWYxMjM5IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0YzA1MTkiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJtYkJsYWRlR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjZTJlOGYwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9Ijc1JSIgc3RvcC1jb2xvcj0iIzk0YTNiOCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNDc1NTY5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNDAiIGZpbGw9InVybCgjbWJHb2xkQXVyYSkiIC8+CiAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIyMzAiIGZpbGw9IiMwYjBmMTkiIHN0cm9rZT0idXJsKCNtYkdvbGRHcmFkKSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2Utb3BhY2l0eT0iMC45NSIgLz4KICA8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjIxNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmVmMDhhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjggOCIgc3Ryb2tlLW9wYWNpdHk9IjAuNjUiIC8+CiAgPHBhdGggZD0iTSAxNDggMzE4IEMgMTQ4IDIyNiwgMTg2IDE3MiwgMjU2IDE2NiBDIDMyNiAxNzIsIDM2NCAyMjYsIDM2NCAzMTggWiIgZmlsbD0idXJsKCNtYkNyaW1zb25HcmFkKSIgc3Ryb2tlPSIjZjQzZjVlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIC8+CiAgPHBhdGggZD0iTSAxMzIgMzE4IEwgMTUyIDIxNiBMIDE5NiAyNjggTCAyNTYgMTYwIEwgMzE2IDI2OCBMIDM2MCAyMTYgTCAzODAgMzE4IFoiIGZpbGw9InVybCgjbWJHb2xkR3JhZCkiIHN0cm9rZT0iI2ZlZjA4YSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogIDxwYXRoIGQ9Ik0gMTMyIDMxOCBDIDE5MCAzMzgsIDMyMiAzMzgsIDM4MCAzMTggTCAzNzIgMzYwIEMgMzE4IDM4MiwgMTk0IDM4MiwgMTQwIDM2MCBaIiBmaWxsPSJ1cmwoI21iR29sZEdyYWQpIiBzdHJva2U9IiNmZWYwOGEiIHN0cm9rZS13aWR0aD0iNCIgLz4KICA8Y2lyY2xlIGN4PSIxNzQiIGN5PSIzNDQiIHI9IjgiIGZpbGw9IiNlMTFkNDgiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgPGNpcmNsZSBjeD0iMjE1IiBjeT0iMzUxIiByPSI5IiBmaWxsPSIjMTBiOTgxIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogIDxjaXJjbGUgY3g9IjI1NiIgY3k9IjM1MyIgcj0iMTEiIGZpbGw9IiMzOGJkZjgiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxjaXJjbGUgY3g9IjI5NyIgY3k9IjM1MSIgcj0iOSIgZmlsbD0iIzEwYjk4MSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICA8Y2lyY2xlIGN4PSIzMzgiIGN5PSIzNDQiIHI9IjgiIGZpbGw9IiNlMTFkNDgiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgPGNpcmNsZSBjeD0iMTUyIiBjeT0iMjEyIiByPSIxMCIgZmlsbD0iI2ZlZjA4YSIgc3Ryb2tlPSIjZDk3NzA2IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPGNpcmNsZSBjeD0iMzYwIiBjeT0iMjEyIiByPSIxMCIgZmlsbD0iI2ZlZjA4YSIgc3Ryb2tlPSIjZDk3NzA2IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPGNpcmNsZSBjeD0iMjU2IiBjeT0iODAiIHI9IjEyIiBmaWxsPSJ1cmwoI21iR29sZEdyYWQpIiBzdHJva2U9IiNmZWYwOGEiIHN0cm9rZS13aWR0aD0iMyIgLz4KICA8cmVjdCB4PSIyNTAiIHk9IjkyIiB3aWR0aD0iMTIiIGhlaWdodD0iMzQiIHJ4PSIzIiBmaWxsPSJ1cmwoI21iR29sZEdyYWQpIiBzdHJva2U9IiM3ODM1MGYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogIDxwYXRoIGQ9Ik0gMjE4IDEyNiBDIDI0MCAxMzEsIDI3MiAxMzEsIDI5NCAxMjYgTCAyOTggMTM4IEMgMjcyIDE0NCwgMjQwIDE0NCwgMjE0IDEzOCBaIiBmaWxsPSJ1cmwoI21iR29sZEdyYWQpIiBzdHJva2U9IiNmZWYwOGEiIHN0cm9rZS13aWR0aD0iMi41IiAvPgogIDxwYXRoIGQ9Ik0gMjQ2IDE0MiBMIDI1NiAzMTAgTCAyNjYgMTQyIFoiIGZpbGw9InVybCgjbWJCbGFkZUdyYWQpIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICA8bGluZSB4MT0iMjU2IiB5MT0iMTQ0IiB4Mj0iMjU2IiB5Mj0iMjk2IiBzdHJva2U9IiNlMTFkNDgiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogIDxjaXJjbGUgY3g9IjI1NiIgY3k9IjMxNiIgcj0iNC41IiBmaWxsPSIjZTExZDQ4IiAvPgo8L3N2Zz4=";

interface CinematicStartupIntroProps {
  isOpen?: boolean;
  onClose?: () => void;
  onComplete?: () => void;
}

export const CinematicStartupIntro: React.FC<CinematicStartupIntroProps> = ({
  isOpen = true,
  onClose,
  onComplete,
}) => {
  const isDismissingRef = useRef(false);

  const handleDismiss = useCallback(() => {
    if (isDismissingRef.current) return;
    isDismissingRef.current = true;
    onClose?.();
    onComplete?.();
  }, [onClose, onComplete]);

  // Automatic dismiss after the liquid glass simulation finishes (~4.5s)
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      handleDismiss();
    }, 4500);
    return () => clearTimeout(timer);
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

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      }}
      onClick={handleDismiss}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 select-none overflow-hidden cursor-pointer"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `radial-gradient(ellipse at 12% 8%, rgba(139, 69, 19, 0.32) 0%, transparent 44%), radial-gradient(ellipse at 88% 12%, rgba(128, 0, 0, 0.28) 0%, transparent 46%), radial-gradient(ellipse at 50% 105%, rgba(80, 0, 0, 0.4) 0%, transparent 62%), linear-gradient(180deg, #000000 0%, #070201 52%, #000000 100%)`,
      }}
    >
      {/* Center Liquid Glass Logo Animation */}
      <div className="relative w-full max-w-3xl flex flex-col items-center justify-center pointer-events-none">
        <div className="w-full h-72 sm:h-80 flex items-center justify-center">
          <LiquidGlassLogo
            logo={APP_LOGO_SVG}
            mark="logo"
            text="MACBETH"
            ending="wordmark"
            fontSize={52}
            fontFamily="'Cinzel', 'Times New Roman', Georgia, serif"
            fontWeight={800}
            letterSpacing={0.08}
            theme="dark"
            logoColor="original"
            logoRelief={0.8}
            textColor="#fef3c7"
            tileColor="#1a0a05"
            background="transparent"
            depth={1.3}
            dispersion={1.15}
            relief={1.0}
            caustics={1.35}
            highlights={1.25}
            bloom={0.55}
            speed={1.0}
            loop={false}
            style={{ background: "transparent" }}
            className="w-full h-full"
          />
        </div>

        {/* Elegant Minimalist Wordmark Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-col items-center gap-1.5 text-center"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-amber-300 uppercase">
              CRITICAL STUDY SUITE · FOLIO 1623
            </span>
          </div>
          <p className="text-xs text-amber-200/50 font-serif italic">
            William Shakespeare · The Tragedie of Macbeth
          </p>
        </motion.div>
      </div>

      {/* Subtle Bottom Skip Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 inset-x-0 text-center pointer-events-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          Click anywhere or press Space to continue
        </span>
      </motion.div>
    </motion.div>
  );
};

export default CinematicStartupIntro;
